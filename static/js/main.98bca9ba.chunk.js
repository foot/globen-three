(this.webpackJsonpgloben=this.webpackJsonpgloben||[]).push([[0],{36:function(e,t,n){},38:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(26),s=n.n(r),i=(n(36),n(6)),o=n(8),l=(n(38),n(4)),u=n(16),j=n(30),b=n(32),d=n(31),m=n(14),f=n(2),h={uniforms:{colorA:{type:"vec3",value:new f.Color(16711680)},colorB:{type:"vec3",value:new f.Color(255)},displacementA:{value:1}},vertexShader:"\n    varying vec3 vUv; \n    uniform float displacementA; \n    attribute float population;\n\n    void main() {\n      vUv = position; \n      vec3 posA;\n      posA = position * (displacementA * population + 1.0);\n      vec4 modelViewPosition = modelViewMatrix * vec4(posA.x, posA.y, posA.z, 1.0);\n      gl_Position = projectionMatrix * modelViewPosition; \n    }\n  ",fragmentShader:"\n    uniform vec3 colorA; \n    uniform vec3 colorB; \n    varying vec3 vUv;\n\n    void main() {\n        gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);\n    }\n  "},O=n(3);Object(u.b)({OrbitControls:j.a,EffectComposer:b.a,RenderPass:d.a,ShaderPass:m.a});var x=Object(o.range)(80,-81,-1),p=Object(o.range)(180,-181,-1);function g(e){var t=e.animate,n=e.setDisplacement,c=e.displacement,r=e.populationIndex,s=Object(a.useRef)(),l=Object(a.useState)(.01),j=Object(i.a)(l,2),b=j[0],d=j[1],m=Object(a.useRef)(t);Object(a.useEffect)((function(){m.current=t}),[t]),Object(u.c)((function(){s.current.rotation.y+=.001,m.current&&(c>=2?d(-.01):c<=0&&d(.01),n(c+b))}));var f=Object(a.useMemo)((function(){return new Float32Array(x.flatMap((function(e){var t=p.map((function(t){return 1*(r[[e,t]]||0)})),n=Object(o.range)(t.length-1).flatMap((function(e){return[t[e],t[e+1]]}));return Object(o.flatten)(n)})))}),[r]),g=Object(a.useMemo)((function(){return new Float32Array(x.flatMap((function(e){var t=p.map((function(t){return function(e,t,n){var a=(90-e)*(Math.PI/180),c=(180-t)*(Math.PI/180);return[n*Math.sin(a)*Math.cos(c),n*Math.cos(a),n*Math.sin(a)*Math.sin(c)]}(e,t,2)})),n=Object(o.range)(t.length-1).flatMap((function(e){return[t[e],t[e+1]]}));return Object(o.flatten)(n)})))}),[r.length]);Object(a.useEffect)((function(){var e=s.current;e.material.uniformsNeedUpdate=!0,e.geometry.attributes.population.needsUpdate=!0,e.material.uniforms.displacementA.value=c}),[s,g,c,r]);var v=h.uniforms,y=h.fragmentShader,N=h.vertexShader;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("lineSegments",{ref:s,children:[Object(O.jsxs)("bufferGeometry",{attach:"geometry",children:[Object(O.jsx)("bufferAttribute",{attachObject:["attributes","position"],count:g.length/3,array:g,itemSize:3}),Object(O.jsx)("bufferAttribute",{attachObject:["attributes","population"],count:f.length,array:f,itemSize:1})]}),Object(O.jsx)("shaderMaterial",{attach:"material",uniforms:v,fragmentShader:y,vertexShader:N})]})})}var v=c.a.createContext();function y(e){var t=e.children,n=Object(u.d)(),c=n.gl,r=n.camera,s=n.invalidate,i=Object(a.useState)(!0),o=Object(a.useRef)();return Object(a.useEffect)((function(){var e=o.current,t=e.addEventListener("change",s);return function(){return e.removeEventListener("change",t)}}),[s]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("orbitControls",{ref:o,args:[r,c.domElement],enableDamping:!0,enabled:i[0]}),Object(O.jsx)(v.Provider,{value:i,children:t})]})}var N=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),j=o[0],b=(o[1],Object(a.useMemo)((function(){return Object(O.jsx)(g,Object(l.a)({},e))}),[e.displacement,e.populationIndex,e.animate]));return Object(O.jsxs)(u.a,{raycaster:{params:{Line:{threshold:5}}},children:[Object(O.jsx)("color",{attach:"background",args:["lightblue"]}),Object(O.jsx)("ambientLight",{}),Object(O.jsx)("pointLight",{position:[10,10,10]}),Object(O.jsxs)(y,{children:[b,Object(O.jsxs)("mesh",{position:[0,0,0],scale:j?[1,1,1]:[2,2,2],onPointerOver:function(e){return r(!0)},onPointerOut:function(e){return r(!1)},children:[Object(O.jsx)("sphereBufferGeometry",{args:[1,12,12]}),Object(O.jsx)("meshStandardMaterial",{color:c?"hotpink":"orange"})]})]})]})};var S=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(1),s=Object(i.a)(r,2),l=s[0],u=s[1],j=Object(a.useState)(!1),b=Object(i.a)(j,2),d=b[0],m=b[1],f=Object(a.useState)(null),h=Object(i.a)(f,2),x=h[0],p=h[1];Object(a.useEffect)((function(){window.fetch("./data/population909500.json").then((function(e){return e.json()})).then((function(e){var t=function(e){return Object(o.fromPairs)(e.map((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return[n,Object(o.fromPairs)(Object(o.chunk)(a,3).map((function(e){var t=Object(i.a)(e,3);return[[t[0],t[1]],t[2]]})))]})))}(e);c(t),p(Object(o.keys)(t)[0])}))}),[]);var g=Object(o.keys)(n).sort();return n?Object(O.jsxs)("div",{className:"bg-gray-100 h-screen flex flex-col",children:[Object(O.jsx)("header",{className:"bg-white shadow",children:Object(O.jsx)("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:Object(O.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"Globen"})})}),Object(O.jsxs)("main",{className:"relative h-full flex-1",children:[Object(O.jsx)(N,{animate:d,setDisplacement:u,displacement:l,populationIndex:n[x]}),Object(O.jsx)("div",{className:"absolute top-4 left-4 shadow sm:rounded-md sm:overflow-hidden",children:Object(O.jsxs)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:[Object(O.jsxs)("fieldset",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("legend",{className:"text-base font-medium text-gray-900",children:"Population data"}),Object(O.jsx)("p",{className:"text-sm text-gray-500",children:"Population by year"})]}),Object(O.jsx)("div",{onChange:function(e){return p(e.target.value)},className:"mt-4 space-y-4",children:g.map((function(e){return Object(O.jsxs)("div",{className:"flex items-center",children:[Object(O.jsx)("input",{id:e,name:e,value:e,checked:e===x,type:"radio",className:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"}),Object(O.jsx)("label",{htmlFor:e,className:"ml-3 block text-sm font-medium text-gray-700",children:e})]},e)}))})]}),Object(O.jsxs)("fieldset",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("legend",{className:"text-base font-medium text-gray-900",children:"Displacement"}),Object(O.jsx)("p",{className:"text-sm text-gray-500",children:"How far the spikes go"})]}),Object(O.jsx)("div",{className:"mt-4 space-y-4",children:Object(O.jsx)("div",{className:"flex items-center",children:Object(O.jsx)("input",{type:"range",min:"0",max:"2",value:l,step:"0.001",onChange:function(e){return u(parseFloat(e.target.value))}})})}),Object(O.jsx)("div",{className:"mt-4 space-y-4",children:Object(O.jsxs)("div",{className:"flex items-center",children:[Object(O.jsx)("input",{id:"animate",name:"animate",type:"checkbox",checked:d,className:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300",onChange:function(e){console.log(e.target.checked),m(e.target.checked)}}),Object(O.jsx)("label",{htmlFor:"animate",className:"ml-3 block text-sm font-medium text-gray-700",children:"Animate"})]})})]})]})})]})]}):"Loading..."},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),w()}},[[43,1,2]]]);
//# sourceMappingURL=main.98bca9ba.chunk.js.map