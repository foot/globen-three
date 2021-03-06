import * as THREE from "three";
export const blueRed = {
  uniforms: {
    colorA: { type: "vec3", value: new THREE.Color(0xff0000) },
    colorB: { type: "vec3", value: new THREE.Color(0x0000ff) },
    displacementA: { value: 1.5 },
  },
  vertexShader: `
    varying vec3 vUv; 
    uniform float displacementA; 

    void main() {
      vUv = position; 

      float dist;
      vec3 center;
      float v;
      v = 1.0;
      center = vec3(0, 0, 0);

      dist = distance(center, position);
      if (dist > 2.0) {
        v = displacementA;
      }
      vec4 modelViewPosition = modelViewMatrix * vec4(position.x * v, position.y * v, position.z * v, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `,
  fragmentShader: `
    uniform vec3 colorA; 
    uniform vec3 colorB; 
    varying vec3 vUv;

    void main() {
        gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);
    }
  `,
};

export const redBlue = {
  ...blueRed,
  uniforms: {
    colorA: { type: "vec3", value: new THREE.Color(0x0000ff) },
    colorB: { type: "vec3", value: new THREE.Color(0xff0000) },
  },
};
