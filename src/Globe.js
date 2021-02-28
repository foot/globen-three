import React, { useMemo, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { range } from "lodash";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

function toPoint(lat, lng, u) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (180 - lng) * (Math.PI / 180);
  const x = u * Math.sin(phi) * Math.cos(theta);
  const y = u * Math.cos(phi);
  const z = u * Math.sin(phi) * Math.sin(theta);
  return [x, y, z];
}

function DataViz({ position, populationIndex }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    // mesh.current.rotation.y += 0.01;
  });

  const step = -1;
  const lats = range(90, -90 + step, step);
  const lngs = range(180, -180 + step, step);

  const lines = useMemo(
    () =>
      lats.map((lat) => {
        const positions = new Float32Array(
          lngs.flatMap((lng) =>
            toPoint(lat, lng, 2 + (populationIndex[[lat, lng]] || 0) * 0.5)
          )
        );
        return (
          <line key={`${lat}`}>
            <bufferGeometry attach="geometry">
              <bufferAttribute
                attachObject={["attributes", "position"]}
                count={positions.length / 3}
                array={positions}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial attach="material" color="black" />
          </line>
        );
      }),
    [populationIndex]
  );

  return (
    <>
      {lines}
      <mesh
        position={position}
        ref={mesh}
        scale={!active ? [2, 2, 2] : [1, 1, 1]}
        // onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <sphereBufferGeometry args={[1, 12, 12]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
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

export const Globe = ({ populationIndex }) => (
  <Canvas raycaster={{ params: { Line: { threshold: 5 } } }}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Controls>
      <DataViz populationIndex={populationIndex} position={[0, 0, 0]} />
    </Controls>
  </Canvas>
);
