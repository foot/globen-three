import React, { useMemo, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { flatten, range } from "lodash";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { WEBGL } from "three/examples/jsm/WebGL";
import { blueRed, redBlue } from "./shaders";

extend({ OrbitControls, EffectComposer, RenderPass, ShaderPass });

function toPoint(lat, lng, u) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (180 - lng) * (Math.PI / 180);
  const x = u * Math.sin(phi) * Math.cos(theta);
  const y = u * Math.cos(phi);
  const z = u * Math.sin(phi) * Math.sin(theta);
  return [x, y, z];
}

function DataViz({ displacement, populationIndex }) {
  // This reference will give us direct access to the mesh
  const lineSegmentsRef = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    lineSegmentsRef.current.rotation.y += 0.001;
  });

  const step = -1;
  const lats = range(80, -80 + step, step);
  const lngs = range(180, -180 + step, step);

  const positions = useMemo(
    () =>
      new Float32Array(
        lats.flatMap((lat) => {
          // latPositions: [x,y,z][]
          const latPositions = lngs.map((lng) =>
            toPoint(
              lat,
              lng,
              2 + (populationIndex[[lat, lng]] || 0) * displacement
            )
          );
          // latSegments: [x,y,z][]
          const latSegments = range(latPositions.length - 1).flatMap((i) => [
            latPositions[i],
            latPositions[i + 1],
          ]);
          // return [x,y,z,x,y,z,...]
          return flatten(latSegments);
        })
      ),
    [populationIndex, lats, lngs]
  );

  useEffect(() => {
    const { current } = lineSegmentsRef;
    current.geometry.attributes.position.needsUpdate = true;
    current.geometry.computeBoundingSphere();
  }, [lineSegmentsRef, positions]);

  const { uniforms, fragmentShader, vertexShader } = redBlue;

  return (
    <>
      <lineSegments ref={lineSegmentsRef}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          attach="material"
          uniforms={uniforms}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
        />
      </lineSegments>
    </>
  );
}

const camContext = React.createContext();
function Controls({ children }) {
  const { gl, camera, invalidate } = useThree();
  const api = useState(true);
  const ref = useRef();
  useEffect(() => {
    const current = ref.current;
    const handler = current.addEventListener("change", invalidate);
    return () => current.removeEventListener("change", handler);
  }, [invalidate]);

  return (
    <>
      <orbitControls
        ref={ref}
        args={[camera, gl.domElement]}
        enableDamping
        enabled={api[0]}
      />
      <camContext.Provider value={api}>{children}</camContext.Provider>
    </>
  );
}

export const Globe = (props) => {
  console.log(WEBGL.isWebGL2Available());
  return (
    <Canvas raycaster={{ params: { Line: { threshold: 5 } } }}>
      <GlobeInner {...props} />
    </Canvas>
  );
};

export const GlobeInner = (props) => {
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const viz = useMemo(() => <DataViz {...props} />, [
    props.displacement,
    props.populationIndex,
  ]);

  const { uniforms, fragmentShader, vertexShader } = blueRed;
  return (
    <>
      <color attach="background" args={["lightblue"]} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Controls>
        {viz}
        <mesh
          position={[0, 0, 0]}
          scale={!active ? [2, 2, 2] : [1, 1, 1]}
          // onClick={(event) => setActive(!active)}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
        >
          <sphereBufferGeometry args={[1, 12, 12]} />
          <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </mesh>
      </Controls>
    </>
  );
};
