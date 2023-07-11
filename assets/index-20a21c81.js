import{P as A}from"./storage-3720bdf0.js";import{u as Y,v as k,U as J,Z as H,n as P,_ as ee,$ as te,b as $,s as re,D as ne,c as oe,a0 as ie,C as ae}from"./index-f6411f8f.js";const Ve=(e,t,r)=>{try{return e()}catch(n){if(typeof t=="string")A.error(t);else{const o=(t==null?void 0:t(n))??n;typeof o=="string"?A.error(o):o instanceof Error&&A.error(o.message)}throw n}finally{r==null||r()}},Je=e=>(...t)=>{try{e(...t)}catch(r){console.error(r)}};function x(e){return ee()?(te(e),!0):!1}function j(e){return typeof e=="function"?e():Y(e)}const z=typeof window<"u",L=()=>{};function se(e,t){function r(...n){return new Promise((o,a)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(o).catch(a)})}return r}const q=e=>e();function ue(e=q){const t=P(!0);function r(){t.value=!1}function n(){t.value=!0}const o=(...a)=>{t.value&&e(...a)};return{isActive:J(t),pause:r,resume:n,eventFilter:o}}function le(...e){if(e.length!==1)return k(...e);const t=e[0];return typeof t=="function"?J(H(()=>({get:t,set:L}))):P(t)}var D=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,pe=(e,t)=>{var r={};for(var n in e)fe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&D)for(var n of D(e))t.indexOf(n)<0&&ce.call(e,n)&&(r[n]=e[n]);return r};function ve(e,t,r={}){const n=r,{eventFilter:o=q}=n,a=pe(n,["eventFilter"]);return $(e,se(o,t),a)}var de=Object.defineProperty,me=Object.defineProperties,ye=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,M=(e,t,r)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_e=(e,t)=>{for(var r in t||(t={}))B.call(t,r)&&M(e,r,t[r]);if(h)for(var r of h(t))K.call(t,r)&&M(e,r,t[r]);return e},we=(e,t)=>me(e,ye(t)),Oe=(e,t)=>{var r={};for(var n in e)B.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&h)for(var n of h(e))t.indexOf(n)<0&&K.call(e,n)&&(r[n]=e[n]);return r};function ge(e,t,r={}){const n=r,{eventFilter:o}=n,a=Oe(n,["eventFilter"]),{eventFilter:l,pause:v,resume:s,isActive:u}=ue(o);return{stop:ve(e,t,we(_e({},a),{eventFilter:l})),pause:v,resume:s,isActive:u}}function U(e){var t;const r=j(e);return(t=r==null?void 0:r.$el)!=null?t:r}const S=z?window:void 0,be=z?window.document:void 0;function I(...e){let t,r,n,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,n,o]=e,t=S):[t,r,n,o]=e,!t)return L;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const a=[],l=()=>{a.forEach(f=>f()),a.length=0},v=(f,c,_,d)=>(f.addEventListener(c,_,d),()=>f.removeEventListener(c,_,d)),s=$(()=>[U(t),j(o)],([f,c])=>{l(),f&&a.push(...r.flatMap(_=>n.map(d=>v(f,_,d,c))))},{immediate:!0,flush:"post"}),u=()=>{s(),l()};return x(u),u}function he(){const e=P(!1);return ie()&&ae(()=>{e.value=!0}),e}function Se(e){const t=he();return oe(()=>(t.value,!!e()))}const g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b="__vueuse_ssr_handlers__",Pe=$e();function $e(){return b in g||(g[b]=g[b]||{}),g[b]}function je(e,t){return Pe[e]||t}function Ee(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Ae=Object.defineProperty,R=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,W=(e,t,r)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))Fe.call(t,r)&&W(e,r,t[r]);if(R)for(var r of R(t))Ne.call(t,r)&&W(e,r,t[r]);return e};const De={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},T="vueuse-storage";function xe(e,t,r,n={}){var o;const{flush:a="pre",deep:l=!0,listenToStorageChanges:v=!0,writeDefaults:s=!0,mergeDefaults:u=!1,shallow:f,window:c=S,eventFilter:_,onError:d=i=>{console.error(i)}}=n,w=(f?re:P)(t);if(!r)try{r=je("getDefaultStorage",()=>{var i;return(i=S)==null?void 0:i.localStorage})()}catch(i){d(i)}if(!r)return w;const m=j(t),F=Ee(m),O=(o=n.serializer)!=null?o:De[F],{pause:Z,resume:N}=ge(w,()=>G(w.value),{flush:a,deep:l,eventFilter:_});return c&&v&&(I(c,"storage",E),I(c,T,X)),E(),w;function G(i){try{if(i==null)r.removeItem(e);else{const p=O.write(i),y=r.getItem(e);y!==p&&(r.setItem(e,p),c&&c.dispatchEvent(new CustomEvent(T,{detail:{key:e,oldValue:y,newValue:p,storageArea:r}})))}}catch(p){d(p)}}function Q(i){const p=i?i.newValue:r.getItem(e);if(p==null)return s&&m!==null&&r.setItem(e,O.write(m)),m;if(!i&&u){const y=O.read(p);return typeof u=="function"?u(y,m):F==="object"&&!Array.isArray(y)?C(C({},m),y):y}else return typeof p!="string"?p:O.read(p)}function X(i){E(i.detail)}function E(i){if(!(i&&i.storageArea!==r)){if(i&&i.key==null){w.value=m;return}if(!(i&&i.key!==e)){Z();try{w.value=Q(i)}catch(p){d(p)}finally{i?ne(N):N()}}}}}var V=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,Re=(e,t)=>{var r={};for(var n in e)Me.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&V)for(var n of V(e))t.indexOf(n)<0&&Ie.call(e,n)&&(r[n]=e[n]);return r};function We(e,t,r={}){const n=r,{window:o=S}=n,a=Re(n,["window"]);let l;const v=Se(()=>o&&"MutationObserver"in o),s=()=>{l&&(l.disconnect(),l=void 0)},u=$(()=>U(e),c=>{s(),v.value&&o&&c&&(l=new MutationObserver(t),l.observe(c,a))},{immediate:!0}),f=()=>{s(),u()};return x(f),{isSupported:v,stop:f}}function ze(e=null,t={}){var r,n;const{document:o=be}=t,a=le((r=e??(o==null?void 0:o.title))!=null?r:null),l=e&&typeof e=="function";function v(s){if(!("titleTemplate"in t))return s;const u=t.titleTemplate||"%s";return typeof u=="function"?u(s):j(u).replace(/%s/g,s)}return $(a,(s,u)=>{s!==u&&o&&(o.title=v(typeof s=="string"?s:""))},{immediate:!0}),t.observe&&!t.titleTemplate&&o&&!l&&We((n=o.head)==null?void 0:n.querySelector("title"),()=>{o&&o.title!==a.value&&(a.value=v(o.title))},{childList:!0}),a}export{Ve as a,xe as b,Je as e,ze as u};
//# sourceMappingURL=index-20a21c81.js.map
