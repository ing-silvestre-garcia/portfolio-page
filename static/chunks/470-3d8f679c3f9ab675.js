"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[470],{7301:function(e,t,n){n.d(t,{I:function(){return o}});var r=n(5487);function o(e,t,n){var o;if("string"==typeof e){let i=document;t&&((0,r.k)(Boolean(t.current),"Scope provided, but no element detected."),i=t.current),n?(null!==(o=n[e])&&void 0!==o||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},6893:function(e,t,n){n.d(t,{Y:function(){return l}});var r=n(7294),o=n(7301);let i={any:0,all:1};function l(e,{root:t,margin:n,amount:l,once:s=!1}={}){let[f,c]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||s&&f)return;let r=()=>(c(!0),s?void 0:()=>c(!1)),u={root:t&&t.current||void 0,margin:n,amount:"some"===l?"any":l};return function(e,t,{root:n,margin:r,amount:l="any"}={}){let s=(0,o.I)(e),f=new WeakMap,c=e=>{e.forEach(e=>{let n=f.get(e.target);if(e.isIntersecting!==Boolean(n)){if(e.isIntersecting){let n=t(e);"function"==typeof n?f.set(e.target,n):u.unobserve(e.target)}else n&&(n(e),f.delete(e.target))}})},u=new IntersectionObserver(c,{root:n,rootMargin:r,threshold:"number"==typeof l?l:i[l]});return s.forEach(e=>u.observe(e)),()=>u.disconnect()}(e.current,r,u)},[t,e,n,s]),f}},4960:function(e,t,n){n.d(t,{c:function(){return s}});var r=n(7294),o=n(3234),i=n(6014),l=n(6681);function s(e){let t=(0,l.h)(()=>(0,o.B)(e)),{isStatic:n}=(0,r.useContext)(i._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}},5204:function(e,t,n){let r,o;n.d(t,{v:function(){return _}});var i=n(3234),l=n(6681),s=n(7294),f=n(5487),c=n(6405),u=n(7367),a=n(7301);let d=new WeakMap;function g({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=d.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function h(e){e.forEach(g)}let p=new Set;var v=n(3967),m=n(3038);let y=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),w=()=>({time:0,x:y(),y:y()}),E={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function W(e,t,n,r){let o=n[t],{length:i,position:l}=E[t],s=o.current,f=n.time;o.current=e["scroll"+l],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,v.Y)(0,o.scrollLength,o.current);let c=r-f;o.velocity=c>50?0:(0,m.R)(o.current-s,c)}let L={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},x={start:0,center:.5,end:1};function b(e,t,n=0){let r=0;if(void 0!==x[e]&&(e=x[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let B=[0,0];var S=n(4606),k=n(533);let z={x:0,y:0},H=new WeakMap,O=new WeakMap,A=new WeakMap,P=e=>e===document.documentElement?window:e;var Y=n(8868);function I(e,t){(0,f.K)(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let M=()=>({scrollX:(0,i.B)(0),scrollY:(0,i.B)(0),scrollXProgress:(0,i.B)(0),scrollYProgress:(0,i.B)(0)});function _({container:e,target:t,layoutEffect:n=!0,...i}={}){let f=(0,l.h)(M),g=n?Y.L:s.useEffect;return g(()=>(I("target",t),I("container",e),function(e,{container:t=document.documentElement,...n}={}){let i=A.get(t);i||(i=new Set,A.set(t,i));let l=w(),s=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{var o;W(e,"x",o=n,t),W(e,"y",o,t),o.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=L.All}=n,{target:o=e,axis:i="y"}=n,l="y"===i?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r instanceof SVGGraphicsElement&&"getBBox"in r){let{top:e,left:t}=r.getBBox();for(n.x+=t,n.y+=e;r&&"svg"!==r.tagName;)r=r.parentNode}return n}(o,e):z,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:o.clientWidth,height:o.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let u=!t[i].interpolate,a=r.length;for(let e=0;e<a;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:B,i=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,x[e]?e:"0"]),b(o[0],n,r)-b(o[1],t)}(r[e],c[l],f[l],s[i]);u||n===t[i].interpolatorOffsets[e]||(u=!0),t[i].offset[e]=n}u&&(t[i].interpolate=(0,S.s)(t[i].offset,(0,k.Y)(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}(e,n,r)},notify:()=>t(n)}}(t,e,l,n);if(i.add(s),!H.has(t)){let e=()=>{for(let e of i)e.measure()},n=()=>{for(let e of i)e.update(u.w.timestamp)},l=()=>{for(let e of i)e.notify()},s=()=>{c.Wi.read(e,!1,!0),c.Wi.update(n,!1,!0),c.Wi.update(l,!1,!0)};H.set(t,s);let f=P(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&O.set(t,"function"==typeof t?(p.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};p.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{p.delete(t),!p.size&&o&&(o=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(h));let n=(0,a.I)(e);return n.forEach(e=>{let n=d.get(e);n||(n=new Set,d.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=d.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,s)),f.addEventListener("scroll",s,{passive:!0})}let f=H.get(t);return c.Wi.read(f,!1,!0),()=>{var e;(0,c.Pn)(f);let n=A.get(t);if(!n||(n.delete(s),n.size))return;let r=H.get(t);H.delete(t),r&&(P(t).removeEventListener("scroll",r),null===(e=O.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}(({x:e,y:t})=>{f.scrollX.set(e.current),f.scrollXProgress.set(e.progress),f.scrollY.set(t.current),f.scrollYProgress.set(t.progress)},{...i,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[]),f}},4002:function(e,t,n){n.d(t,{q:function(){return a}});var r=n(7294),o=n(406),i=n(4960),l=n(6014),s=n(8868),f=n(72),c=n(7367),u=n(6917);function a(e,t={}){let{isStatic:n}=(0,r.useContext)(l._),a=(0,r.useRef)(null),d=(0,i.c)((0,o.i)(e)?e.get():e),g=()=>{a.current&&a.current.stop()};return(0,r.useInsertionEffect)(()=>d.attach((e,r)=>{if(n)return r(e);if(g(),a.current=(0,f.y)({keyframes:[d.get(),e],velocity:d.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:r}),!c.w.isProcessing){let e=performance.now()-c.w.timestamp;e<30&&(a.current.time=(0,u.X)(e))}return d.get()},g),[JSON.stringify(t)]),(0,s.L)(()=>{if((0,o.i)(e))return e.on("change",e=>d.set(parseFloat(e)))},[d]),d}}}]);