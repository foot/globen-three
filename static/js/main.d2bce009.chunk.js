(this.webpackJsonpgloben=this.webpackJsonpgloben||[]).push([[0],{36:function(e,t,n){},38:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(26),i=n.n(c),o=(n(36),n(6)),s=n(9),l=(n(38),n(4)),u=n(16),j=n(30),b=n(32),m=n(31),d=n(14),h=n(2),f={uniforms:{colorA:{type:"vec3",value:new h.Color(16711680)},colorB:{type:"vec3",value:new h.Color(255)},displacementA:{value:1}},vertexShader:"\n    varying vec3 vUv; \n    uniform float displacementA; \n    attribute float population;\n\n    void main() {\n      vUv = position; \n      vec3 posA;\n      posA = position * (displacementA * population + 1.0);\n      vec4 modelViewPosition = modelViewMatrix * vec4(posA.x, posA.y, posA.z, 1.0);\n      gl_Position = projectionMatrix * modelViewPosition; \n    }\n  ",fragmentShader:"\n    uniform vec3 colorA; \n    uniform vec3 colorB; \n    varying vec3 vUv;\n\n    void main() {\n        gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);\n    }\n  "},O=n(3);Object(u.b)({OrbitControls:j.a,EffectComposer:b.a,RenderPass:m.a,ShaderPass:d.a});var p=Object(s.range)(80,-81,-1),x=Object(s.range)(180,-181,-1);function v(e){var t=e.animate,n=e.setDisplacement,r=e.displacement,c=e.populationIndex,i=Object(a.useRef)(),l=Object(a.useState)(.01),j=Object(o.a)(l,2),b=j[0],m=j[1];Object(u.c)((function(){i.current.rotation.y+=.001,t&&(r>=2?m(-.01):r<=0&&m(.01),n(r+b))}));var d=Object(a.useMemo)((function(){return new Float32Array(p.flatMap((function(e){var t=x.map((function(t){return 1*(c[[e,t]]||0)})),n=Object(s.range)(t.length-1).flatMap((function(e){return[t[e],t[e+1]]}));return Object(s.flatten)(n)})))}),[c.length]),h=Object(a.useMemo)((function(){return new Float32Array(p.flatMap((function(e){var t=x.map((function(t){return function(e,t,n){var a=(90-e)*(Math.PI/180),r=(180-t)*(Math.PI/180);return[n*Math.sin(a)*Math.cos(r),n*Math.cos(a),n*Math.sin(a)*Math.sin(r)]}(e,t,2)})),n=Object(s.range)(t.length-1).flatMap((function(e){return[t[e],t[e+1]]}));return Object(s.flatten)(n)})))}),[c.length]);Object(a.useEffect)((function(){var e=i.current;e.material.uniformsNeedUpdate=!0,e.material.uniforms.displacementA.value=r}),[i,h,r]);var v=f.uniforms,g=f.fragmentShader,y=f.vertexShader,M=Object(a.useMemo)((function(){return Object(O.jsxs)("bufferGeometry",{attach:"geometry",children:[Object(O.jsx)("bufferAttribute",{attachObject:["attributes","position"],count:h.length/3,array:h,itemSize:3}),Object(O.jsx)("bufferAttribute",{attachObject:["attributes","population"],count:d.length,array:d,itemSize:1})]})}),[]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("lineSegments",{ref:i,children:[M,Object(O.jsx)("shaderMaterial",{attach:"material",uniforms:v,fragmentShader:g,vertexShader:y})]})})}var g=r.a.createContext();function y(e){var t=e.children,n=Object(u.d)(),r=n.gl,c=n.camera,i=n.invalidate,o=Object(a.useState)(!0),s=Object(a.useRef)();return Object(a.useEffect)((function(){var e=s.current,t=e.addEventListener("change",i);return function(){return e.removeEventListener("change",t)}}),[i]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("orbitControls",{ref:s,args:[c,r.domElement],enableDamping:!0,enabled:o[0]}),Object(O.jsx)(g.Provider,{value:o,children:t})]})}var M=function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),s=Object(o.a)(i,2),j=s[0],b=(s[1],Object(a.useMemo)((function(){return Object(O.jsx)(v,Object(l.a)({},e))}),[e.displacement,e.populationIndex]));return Object(O.jsxs)(u.a,{raycaster:{params:{Line:{threshold:5}}},children:[Object(O.jsx)("color",{attach:"background",args:["lightblue"]}),Object(O.jsx)("ambientLight",{}),Object(O.jsx)("pointLight",{position:[10,10,10]}),Object(O.jsxs)(y,{children:[b,Object(O.jsxs)("mesh",{position:[0,0,0],scale:j?[1,1,1]:[2,2,2],onPointerOver:function(e){return c(!0)},onPointerOut:function(e){return c(!1)},children:[Object(O.jsx)("sphereBufferGeometry",{args:[1,12,12]}),Object(O.jsx)("meshStandardMaterial",{color:r?"hotpink":"orange"})]})]})]})};var S=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(1),i=Object(o.a)(c,2),l=i[0],u=i[1],j=Object(a.useState)(!0),b=Object(o.a)(j,2),m=b[0],d=b[1];Object(a.useEffect)((function(){window.fetch("./data/population909500.json").then((function(e){return e.json()})).then((function(e){var t=Object(o.a)(e,3),n=(t[0],t[1],Object(o.a)(t[2],2)),a=(n[0],n[1]);r(a)}))}),[]);var h=Object(s.fromPairs)(Object(s.chunk)(n,3).map((function(e){var t=Object(o.a)(e,3);return[[t[0],t[1]],t[2]]})));return n?Object(O.jsxs)("div",{className:"bg-gray-100 h-screen flex flex-col",children:[Object(O.jsx)("header",{className:"bg-white shadow",children:Object(O.jsx)("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:Object(O.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"Globen"})})}),Object(O.jsxs)("main",{className:"relative h-full flex-1",children:[Object(O.jsx)(M,{animate:m,setDisplacement:u,displacement:l,populationIndex:h}),Object(O.jsx)("div",{className:"absolute top-4 left-4 shadow sm:rounded-md sm:overflow-hidden",children:Object(O.jsxs)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:[Object(O.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Displacement"}),Object(O.jsx)("div",{className:"mt-1 flex rounded-md shadow-sm",children:Object(O.jsx)("input",{type:"range",min:"0",max:"2",value:l,step:"0.001",onChange:function(e){return u(parseFloat(e.target.value))}})}),Object(O.jsxs)("div",{className:"flex items-start",children:[Object(O.jsx)("div",{className:"flex items-center h-5",children:Object(O.jsx)("input",{id:"animate",name:"animate",type:"checkbox",checked:m,className:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded",onChange:function(e){console.log(e.target.checked),d(e.target.checked)}})}),Object(O.jsxs)("div",{className:"ml-3 text-sm",children:[Object(O.jsx)("label",{htmlFor:"animate",className:"font-medium text-gray-700",children:"Animate"}),Object(O.jsx)("p",{className:"text-gray-500",children:"Animate the displacement"})]})]})]})})]})]}):"Loading..."},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),w()}},[[43,1,2]]]);
//# sourceMappingURL=main.d2bce009.chunk.js.map