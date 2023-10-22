import{d as et,m as G,j as _,k as $,o as re,i as ce,l as X,e as V,u as tt,p as Ie,h as He,a as I,g as ne}from"./storage-a250e522.js";import{N as at,u as N,d as W,b as Oe,c as ie}from"./node-e8f61903.js";import{b as x,ao as rt,d as nt,an as it,c as ot,o as R,af as T,g,f as st,u as v,j as E,l as Z,k as C,h as k}from"./index-fb907109.js";import{J as ue}from"./jszip.min-5889e22c.js";const Ce=({title:a="批量分享链接",content:e=""})=>{et.success({title:a,style:{width:"800px"},content(){return x(at,{type:"textarea",autosize:{minRows:8,maxRows:16},inputProps:{style:"white-space: nowrap;",class:"gkd_code"},value:e},null)},positiveText:"复制",onPositiveClick(){return navigator.clipboard.writeText(e).then(()=>{G.success("复制成功")}).catch(()=>{G.success("复制失败")}),!1}})};var Ne={exports:{}};(function(a,e){(function(t,r){r()})(_,function(){function t(n,o){return typeof o>"u"?o={autoBom:!1}:typeof o!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\uFEFF",n],{type:n.type}):n}function r(n,o,p){var f=new XMLHttpRequest;f.open("GET",n),f.responseType="blob",f.onload=function(){c(f.response,o,p)},f.onerror=function(){console.error("could not download file")},f.send()}function i(n){var o=new XMLHttpRequest;o.open("HEAD",n,!1);try{o.send()}catch{}return 200<=o.status&&299>=o.status}function s(n){try{n.dispatchEvent(new MouseEvent("click"))}catch{var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(o)}}var u=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof _=="object"&&_.global===_?_:void 0,h=u.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=u.saveAs||(typeof window!="object"||window!==u?function(){}:"download"in HTMLAnchorElement.prototype&&!h?function(n,o,p){var f=u.URL||u.webkitURL,d=document.createElement("a");o=o||n.name||"download",d.download=o,d.rel="noopener",typeof n=="string"?(d.href=n,d.origin===location.origin?s(d):i(d.href)?r(n,o,p):s(d,d.target="_blank")):(d.href=f.createObjectURL(n),setTimeout(function(){f.revokeObjectURL(d.href)},4e4),setTimeout(function(){s(d)},0))}:"msSaveOrOpenBlob"in navigator?function(n,o,p){if(o=o||n.name||"download",typeof n!="string")navigator.msSaveOrOpenBlob(t(n,p),o);else if(i(n))r(n,o,p);else{var f=document.createElement("a");f.href=n,f.target="_blank",setTimeout(function(){s(f)})}}:function(n,o,p,f){if(f=f||open("","_blank"),f&&(f.document.title=f.document.body.innerText="downloading..."),typeof n=="string")return r(n,o,p);var d=n.type==="application/octet-stream",l=/constructor/i.test(u.HTMLElement)||u.safari,w=/CriOS\/[\d]+/.test(navigator.userAgent);if((w||d&&l||h)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var B=m.result;B=w?B:B.replace(/^data:[^;]*;/,"data:attachment/file;"),f?f.location.href=B:location=B,f=null},m.readAsDataURL(n)}else{var A=u.URL||u.webkitURL,L=A.createObjectURL(n);f?f.location=L:location.href=L,f=null,setTimeout(function(){A.revokeObjectURL(L)},4e4)}});u.saveAs=c.saveAs=c,a.exports=c})})(Ne);var K=Ne.exports;const We="https://github.com/gkd-kit/inspect/issues/new",lt="661952005",oe={origin:"https://github.com",referer:We},ct=async()=>{var i;const a='[data-upload-policy-url="/upload/policies/assets"] input.js-data-upload-policy-url-csrf',e=await $(We);return(i=new DOMParser().parseFromString(await e.text(),"text/html").querySelector(a))==null?void 0:i.getAttribute("value")},Ze=async(a,e,t)=>ut(a,e,t),ut=async(a,e,t)=>{const r=await ct();if(!r)throw rt.githubErrorDlgVisible=!0,new Error("failed get csrfToken");const i=await $("https://github.com/upload/policies/assets",{method:"POST",body:re({authenticity_token:r,content_type:t,name:e,size:a.byteLength,repository_id:lt}),headers:oe}).then(h=>{if(!h.ok)throw new Error("failed upload policies assets");return h.json()});if(!(await $(i.upload_url,{method:"POST",body:re(i.form,{file:new File([a],e,{type:t})}),headers:oe})).ok)throw new Error("upload s3 failed");if((await $(new URL(i.asset_upload_url,"https://github.com/").href,{method:"PUT",body:re({authenticity_token:i.asset_upload_authenticity_token}),headers:{...oe,Accept:"application/json"}})).status!=200)throw new Error("failed check authenticity upload");return i.asset};/*!
 * Compressor.js v1.2.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-02-28T14:09:41.732Z
 */function De(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),t.push.apply(t,r)}return t}function J(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?De(Object(t),!0).forEach(function(r){pt(a,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):De(Object(t)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(t,r))})}return a}function ft(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function Pe(a,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,Je(r.key),r)}}function ht(a,e,t){return e&&Pe(a.prototype,e),t&&Pe(a,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function pt(a,e,t){return e=Je(e),e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function Y(){return Y=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r])}return a},Y.apply(this,arguments)}function dt(a,e){if(typeof a!="object"||a===null)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var r=t.call(a,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function Je(a){var e=dt(a,"string");return typeof e=="symbol"?e:String(e)}var $e={exports:{}};(function(a){typeof window>"u"||function(e){var t=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,r=e.Blob&&function(){try{return!!new Blob}catch{return!1}}(),i=r&&e.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100}catch{return!1}}(),s=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,u=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,h=(r||s)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(c){var n,o,p,f,d,l,w,m,A;if(n=c.match(u),!n)throw new Error("invalid data URI");for(o=n[2]?n[1]:"text/plain"+(n[3]||";charset=US-ASCII"),p=!!n[4],f=c.slice(n[0].length),p?d=atob(f):d=decodeURIComponent(f),l=new ArrayBuffer(d.length),w=new Uint8Array(l),m=0;m<d.length;m+=1)w[m]=d.charCodeAt(m);return r?new Blob([i?w:l],{type:o}):(A=new s,A.append(l),A.getBlob(o))};e.HTMLCanvasElement&&!t.toBlob&&(t.mozGetAsFile?t.toBlob=function(c,n,o){var p=this;setTimeout(function(){o&&t.toDataURL&&h?c(h(p.toDataURL(n,o))):c(p.mozGetAsFile("blob",n))})}:t.toDataURL&&h&&(t.msToBlob?t.toBlob=function(c,n,o){var p=this;setTimeout(function(){(n&&n!=="image/png"||o)&&t.toDataURL&&h?c(h(p.toDataURL(n,o))):c(p.msToBlob(n))})}:t.toBlob=function(c,n,o){var p=this;setTimeout(function(){c(h(p.toDataURL(n,o)))})})),a.exports?a.exports=h:e.dataURLtoBlob=h}(window)})($e);var Fe=$e.exports,vt=function(e){return typeof Blob>"u"?!1:e instanceof Blob||Object.prototype.toString.call(e)==="[object Blob]"},Me={strict:!0,checkOrientation:!0,retainExif:!1,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},mt=typeof window<"u"&&typeof window.document<"u",U=mt?window:{},q=function(e){return e>0&&e<1/0},gt=Array.prototype.slice;function fe(a){return Array.from?Array.from(a):gt.call(a)}var wt=/^image\/.+$/;function le(a){return wt.test(a)}function yt(a){var e=le(a)?a.substr(6):"";return e==="jpeg"&&(e="jpg"),".".concat(e)}var Ge=String.fromCharCode;function bt(a,e,t){var r="",i;for(t+=e,i=e;i<t;i+=1)r+=Ge(a.getUint8(i));return r}var xt=U.btoa;function ze(a,e){for(var t=[],r=8192,i=new Uint8Array(a);i.length>0;)t.push(Ge.apply(null,fe(i.subarray(0,r)))),i=i.subarray(r);return"data:".concat(e,";base64,").concat(xt(t.join("")))}function kt(a){var e=new DataView(a),t;try{var r,i,s;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(var u=e.byteLength,h=2;h+1<u;){if(e.getUint8(h)===255&&e.getUint8(h+1)===225){i=h;break}h+=1}if(i){var c=i+4,n=i+10;if(bt(e,c,4)==="Exif"){var o=e.getUint16(n);if(r=o===18761,(r||o===19789)&&e.getUint16(n+2,r)===42){var p=e.getUint32(n+4,r);p>=8&&(s=n+p)}}}if(s){var f=e.getUint16(s,r),d,l;for(l=0;l<f;l+=1)if(d=s+l*12+2,e.getUint16(d,r)===274){d+=8,t=e.getUint16(d,r),e.setUint16(d,1,r);break}}}catch{t=1}return t}function Bt(a){var e=0,t=1,r=1;switch(a){case 2:t=-1;break;case 3:e=-180;break;case 4:r=-1;break;case 5:e=90,r=-1;break;case 6:e=90;break;case 7:e=90,t=-1;break;case 8:e=-90;break}return{rotate:e,scaleX:t,scaleY:r}}var Et=/\.\d*(?:0|9){12}\d*$/;function _e(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return Et.test(a)?Math.round(a*e)/e:a}function H(a){var e=a.aspectRatio,t=a.height,r=a.width,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none",s=q(r),u=q(t);if(s&&u){var h=t*e;(i==="contain"||i==="none")&&h>r||i==="cover"&&h<r?t=r/e:r=t*e}else s?t=r/e:u&&(r=t*e);return{width:r,height:t}}function At(a){for(var e=fe(new Uint8Array(a)),t=e.length,r=[],i=0;i+3<t;){var s=e[i],u=e[i+1];if(s===255&&u===218)break;if(s===255&&u===216)i+=2;else{var h=e[i+2]*256+e[i+3],c=i+h+2,n=e.slice(i,c);r.push(n),i=c}}return r.reduce(function(o,p){return p[0]===255&&p[1]===225?o.concat(p):o},[])}function Rt(a,e){var t=fe(new Uint8Array(a));if(t[2]!==255||t[3]!==224)return a;var r=t[4]*256+t[5],i=[255,216].concat(e,t.slice(4+r));return new Uint8Array(i)}var Tt=U.ArrayBuffer,se=U.FileReader,S=U.URL||U.webkitURL,Ut=/\.\w+$/,Lt=U.Compressor,St=function(){function a(e,t){ft(this,a),this.file=e,this.exif=[],this.image=new Image,this.options=J(J({},Me),t),this.aborted=!1,this.result=null,this.init()}return ht(a,[{key:"init",value:function(){var t=this,r=this.file,i=this.options;if(!vt(r)){this.fail(new Error("The first argument must be a File or Blob object."));return}var s=r.type;if(!le(s)){this.fail(new Error("The first argument must be an image File or Blob object."));return}if(!S||!se){this.fail(new Error("The current browser does not support image compression."));return}Tt||(i.checkOrientation=!1,i.retainExif=!1);var u=s==="image/jpeg",h=u&&i.checkOrientation,c=u&&i.retainExif;if(S&&!h&&!c)this.load({url:S.createObjectURL(r)});else{var n=new se;this.reader=n,n.onload=function(o){var p=o.target,f=p.result,d={},l=1;h&&(l=kt(f),l>1&&Y(d,Bt(l))),c&&(t.exif=At(f)),h||c?!S||l>1?d.url=ze(f,s):d.url=S.createObjectURL(r):d.url=f,t.load(d)},n.onabort=function(){t.fail(new Error("Aborted to read the image with FileReader."))},n.onerror=function(){t.fail(new Error("Failed to read the image with FileReader."))},n.onloadend=function(){t.reader=null},h||c?n.readAsArrayBuffer(r):n.readAsDataURL(r)}}},{key:"load",value:function(t){var r=this,i=this.file,s=this.image;s.onload=function(){r.draw(J(J({},t),{},{naturalWidth:s.naturalWidth,naturalHeight:s.naturalHeight}))},s.onabort=function(){r.fail(new Error("Aborted to load the image."))},s.onerror=function(){r.fail(new Error("Failed to load the image."))},U.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(U.navigator.userAgent)&&(s.crossOrigin="anonymous"),s.alt=i.name,s.src=t.url}},{key:"draw",value:function(t){var r=this,i=t.naturalWidth,s=t.naturalHeight,u=t.rotate,h=u===void 0?0:u,c=t.scaleX,n=c===void 0?1:c,o=t.scaleY,p=o===void 0?1:o,f=this.file,d=this.image,l=this.options,w=document.createElement("canvas"),m=w.getContext("2d"),A=Math.abs(h)%180===90,L=(l.resize==="contain"||l.resize==="cover")&&q(l.width)&&q(l.height),B=Math.max(l.maxWidth,0)||1/0,D=Math.max(l.maxHeight,0)||1/0,P=Math.max(l.minWidth,0)||0,F=Math.max(l.minHeight,0)||0,j=i/s,y=l.width,b=l.height;if(A){var de=[D,B];B=de[0],D=de[1];var ve=[F,P];P=ve[0],F=ve[1];var me=[b,y];y=me[0],b=me[1]}L&&(j=y/b);var ge=H({aspectRatio:j,width:B,height:D},"contain");B=ge.width,D=ge.height;var we=H({aspectRatio:j,width:P,height:F},"cover");if(P=we.width,F=we.height,L){var ye=H({aspectRatio:j,width:y,height:b},l.resize);y=ye.width,b=ye.height}else{var be=H({aspectRatio:j,width:y,height:b}),xe=be.width;y=xe===void 0?i:xe;var ke=be.height;b=ke===void 0?s:ke}y=Math.floor(_e(Math.min(Math.max(y,P),B))),b=Math.floor(_e(Math.min(Math.max(b,F),D)));var Ye=-y/2,qe=-b/2,Ke=y,Qe=b,Q=[];if(L){var Be=0,Ee=0,ee=i,te=s,Ae=H({aspectRatio:j,width:i,height:s},{contain:"cover",cover:"contain"}[l.resize]);ee=Ae.width,te=Ae.height,Be=(i-ee)/2,Ee=(s-te)/2,Q.push(Be,Ee,ee,te)}if(Q.push(Ye,qe,Ke,Qe),A){var Re=[b,y];y=Re[0],b=Re[1]}w.width=y,w.height=b,le(l.mimeType)||(l.mimeType=f.type);var Te="transparent";f.size>l.convertSize&&l.convertTypes.indexOf(l.mimeType)>=0&&(l.mimeType="image/jpeg");var Ue=l.mimeType==="image/jpeg";if(Ue&&(Te="#fff"),m.fillStyle=Te,m.fillRect(0,0,y,b),l.beforeDraw&&l.beforeDraw.call(this,m,w),!this.aborted&&(m.save(),m.translate(y/2,b/2),m.rotate(h*Math.PI/180),m.scale(n,p),m.drawImage.apply(m,[d].concat(Q)),m.restore(),l.drew&&l.drew.call(this,m,w),!this.aborted)){var Le=function(M){if(!r.aborted){var Se=function(z){return r.done({naturalWidth:i,naturalHeight:s,result:z})};if(M&&Ue&&l.retainExif&&r.exif&&r.exif.length>0){var je=function(z){return Se(Fe(ze(Rt(z,r.exif),l.mimeType)))};if(M.arrayBuffer)M.arrayBuffer().then(je).catch(function(){r.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."))});else{var O=new se;r.reader=O,O.onload=function(ae){var z=ae.target;je(z.result)},O.onabort=function(){r.fail(new Error("Aborted to read the compressed image with FileReader."))},O.onerror=function(){r.fail(new Error("Failed to read the compressed image with FileReader."))},O.onloadend=function(){r.reader=null},O.readAsArrayBuffer(M)}}else Se(M)}};w.toBlob?w.toBlob(Le,l.mimeType,l.quality):Le(Fe(w.toDataURL(l.mimeType,l.quality)))}}},{key:"done",value:function(t){var r=t.naturalWidth,i=t.naturalHeight,s=t.result,u=this.file,h=this.image,c=this.options;if(S&&h.src.indexOf("blob:")===0&&S.revokeObjectURL(h.src),s)if(c.strict&&!c.retainExif&&s.size>u.size&&c.mimeType===u.type&&!(c.width>r||c.height>i||c.minWidth>r||c.minHeight>i||c.maxWidth<r||c.maxHeight<i))s=u;else{var n=new Date;s.lastModified=n.getTime(),s.lastModifiedDate=n,s.name=u.name,s.name&&s.type!==u.type&&(s.name=s.name.replace(Ut,yt(s.type)))}else s=u;this.result=s,c.success&&c.success.call(this,s)}},{key:"fail",value:function(t){var r=this.options;if(r.error)r.error.call(this,t);else throw t}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=Lt,a}},{key:"setDefaults",value:function(t){Y(Me,t)}}]),a}();const he=async a=>{const e=new ue;return e.file("snapshot.json",JSON.stringify(a)).file("screenshot.png",await He.getItem(a.id)),await e.generateAsync({type:"blob",compression:"STORE"})},jt=async a=>{const e=`snapshot-${a.id}.zip`;K.saveAs(await he(a),e)},pe=async a=>{const e=await He.getItem(a.id),t=await new Promise((i,s)=>{new St(new Blob([e],{type:"image/png"}),{quality:.75,convertSize:2e5,success(u){i(u)},error(u){s(u)}})});return new Blob([t],{type:"image/jpeg"})},Ot=async a=>{const e=`snapshot-${a.id}.jpg`;K.saveAs(await pe(a),e)},Wt=async a=>{const e=new ue;for(const r of a)await ce(),e.file(r.id+".jpg",pe(r));const t=await e.generateAsync({type:"blob",compression:"STORE"});K.saveAs(t,`batch-png-${a.length}.zip`)},Zt=async a=>{const e=new ue;for(const r of a)await ce(),e.file(r.id+".zip",await he(r));const t=await e.generateAsync({type:"blob",compression:"STORE"});K.saveAs(t,`batch-zip-${a.length}.zip`)},Xe=async a=>X[a.id]??Ze(await pe(a).then(e=>e.arrayBuffer()),"file.jpg","image/jpeg").then(e=>(X[a.id]=e.href,e.href)),Ve=async a=>V[a.id]??Ze(await he(a).then(e=>e.arrayBuffer()),"file.zip","application/x-zip-compressed").then(e=>(V[a.id]=e.href,tt[e.href]=a.id,e.href)),Jt=async a=>{const e=Ie(3);return(await Promise.allSettled(a.map(t=>e(()=>Xe(t))))).reduce((t,r)=>(r.status=="fulfilled"&&t.push(r.value),t),[])},$t=async a=>{const e=Ie(3);return(await Promise.allSettled(a.map(t=>e(()=>Ve(t))))).reduce((t,r)=>(r.status=="fulfilled"&&t.push(r.value),t),[])},Ct=["href"],Dt=k("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[k("path",{d:"M549.973333 128 633.6 145.066667 474.026667 896 390.4 878.933333 549.973333 128M835.84 512 682.666667 358.826667 682.666667 238.08 956.586667 512 682.666667 785.493333 682.666667 664.746667 835.84 512M67.413333 512 341.333333 238.08 341.333333 358.826667 188.16 512 341.333333 664.746667 341.333333 785.493333 67.413333 512Z"})],-1),Pt=k("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[k("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[k("path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}),k("path",{d:"M7 11l5 5l5-5"}),k("path",{d:"M12 4v12"})])],-1),Ft=k("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[k("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65c0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",fill:"currentColor"})],-1),Mt=k("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[k("g",{fill:"none"},[k("path",{d:"M12 1.75a3.25 3.25 0 0 1 3.245 3.066L15.25 5h5.25a.75.75 0 0 1 .102 1.493L20.5 6.5h-.796l-1.28 13.02a2.75 2.75 0 0 1-2.561 2.474l-.176.006H8.313a2.75 2.75 0 0 1-2.714-2.307l-.023-.174L4.295 6.5H3.5a.75.75 0 0 1-.743-.648L2.75 5.75a.75.75 0 0 1 .648-.743L3.5 5h5.25A3.25 3.25 0 0 1 12 1.75zm6.197 4.75H5.802l1.267 12.872a1.25 1.25 0 0 0 1.117 1.122l.127.006h7.374c.6 0 1.109-.425 1.225-1.002l.02-.126L18.196 6.5zM13.75 9.25a.75.75 0 0 1 .743.648L14.5 10v7a.75.75 0 0 1-1.493.102L13 17v-7a.75.75 0 0 1 .75-.75zm-3.5 0a.75.75 0 0 1 .743.648L11 10v7a.75.75 0 0 1-1.493.102L9.5 17v-7a.75.75 0 0 1 .75-.75zm1.75-6a1.75 1.75 0 0 0-1.744 1.606L10.25 5h3.5A1.75 1.75 0 0 0 12 3.25z",fill:"currentColor"})])],-1),Gt=nt({__name:"ActionCard",props:{snapshot:{},onDelete:{type:Function,default:()=>()=>{}},showPreview:{type:Boolean,default:!0},showExport:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},showShare:{type:Boolean,default:!0}},setup(a){const e=a,t=it(),r=N(async()=>Ot(await I.getItem(e.snapshot.id))),i=N(async()=>jt(await I.getItem(e.snapshot.id))),s=ot(()=>t.resolve({name:"snapshot",params:{snapshotId:e.snapshot.id}}).href),u=N(async()=>{const o=await Xe(await I.getItem(e.snapshot.id));Ce({title:"分享链接",content:ne(o)})}),h=N(async()=>{const o=await Ve(await I.getItem(e.snapshot.id));Ce({title:"分享链接",content:ne(o)})}),c=async()=>{await I.removeItem(e.snapshot.id),await ce(500),e.onDelete()},n=async o=>navigator.clipboard.writeText(o).then(()=>{G.success("复制成功")}).catch(()=>{G.success("复制失败")});return(o,p)=>(R(),T(v(ie),null,{default:g(()=>[o.showPreview?(R(),st("a",{key:0,target:"_blank",href:s.value},[x(v(E),{size:"small"},{icon:g(()=>[x(v(W),null,{default:g(()=>[Dt]),_:1})]),_:1})],8,Ct)):Z("",!0),o.showExport?(R(),T(v(Oe),{key:1},{trigger:g(()=>[x(v(E),{size:"small"},{icon:g(()=>[x(v(W),null,{default:g(()=>[Pt]),_:1})]),_:1})]),default:g(()=>[x(v(ie),{vertical:""},{default:g(()=>[x(v(E),{onClick:v(i).invoke,loading:v(i).loading},{default:g(()=>[C(" 下载-快照 ")]),_:1},8,["onClick","loading"]),x(v(E),{onClick:v(r).invoke,loading:v(r).loading},{default:g(()=>[C(" 下载-图片 ")]),_:1},8,["onClick","loading"])]),_:1})]),_:1})):Z("",!0),o.showShare?(R(),T(v(Oe),{key:2},{trigger:g(()=>[x(v(E),{size:"small"},{icon:g(()=>[x(v(W),null,{default:g(()=>[Ft]),_:1})]),_:1})]),default:g(()=>[x(v(ie),{vertical:""},{default:g(()=>[v(V)[o.snapshot.id]?(R(),T(v(E),{key:0,onClick:p[0]||(p[0]=f=>n(v(ne)(v(V)[o.snapshot.id])))},{default:g(()=>[C(" 复制链接-快照 ")]),_:1})):(R(),T(v(E),{key:1,onClick:v(h).invoke,loading:v(h).loading},{default:g(()=>[C(" 生成链接-快照 ")]),_:1},8,["onClick","loading"])),v(X)[o.snapshot.id]?(R(),T(v(E),{key:2,onClick:p[1]||(p[1]=f=>n(v(X)[o.snapshot.id]))},{default:g(()=>[C(" 复制链接-图片 ")]),_:1})):(R(),T(v(E),{key:3,onClick:v(u).invoke,loading:v(u).loading},{default:g(()=>[C(" 生成链接-图片 ")]),_:1},8,["onClick","loading"]))]),_:1})]),_:1})):Z("",!0),o.showDelete?(R(),T(v(E),{key:3,size:"small",onClick:c},{icon:g(()=>[x(v(W),null,{default:g(()=>[Mt]),_:1})]),_:1})):Z("",!0)]),_:1}))}});export{Gt as _,Zt as a,Wt as b,Jt as c,$t as d,Xe as e,Ve as f,Ce as s};
//# sourceMappingURL=ActionCard.vue_vue_type_script_setup_true_lang-2eb5cfc7.js.map