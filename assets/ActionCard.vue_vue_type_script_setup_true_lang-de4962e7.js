import{at as W,d as Q,as as Y,c as ee,j as F,o as b,aj as _,g as c,f as te,b as w,n as m,t as oe,u as r,m as g,p as A}from"./index-1ae95ed4.js";import{b as k,f as x,o as B,e as U,h as M,i as N,p as H,d as $,a as S}from"./storage-5dbc677a.js";import{i as ne,a as ae,J as z}from"./file_type-d83abc96.js";import{u as E,a as I,b as P}from"./task-c58c7898.js";var J={exports:{}};(function(t,e){(function(s,i){i()})(k,function(){function s(o,n){return typeof n>"u"?n={autoBom:!1}:typeof n!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function i(o,n,f){var a=new XMLHttpRequest;a.open("GET",o),a.responseType="blob",a.onload=function(){h(a.response,n,f)},a.onerror=function(){console.error("could not download file")},a.send()}function d(o){var n=new XMLHttpRequest;n.open("HEAD",o,!1);try{n.send()}catch{}return 200<=n.status&&299>=n.status}function u(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(n)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof k=="object"&&k.global===k?k:void 0,y=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!y?function(o,n,f){var a=l.URL||l.webkitURL,p=document.createElement("a");n=n||o.name||"download",p.download=n,p.rel="noopener",typeof o=="string"?(p.href=o,p.origin===location.origin?u(p):d(p.href)?i(o,n,f):u(p,p.target="_blank")):(p.href=a.createObjectURL(o),setTimeout(function(){a.revokeObjectURL(p.href)},4e4),setTimeout(function(){u(p)},0))}:"msSaveOrOpenBlob"in navigator?function(o,n,f){if(n=n||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(s(o,f),n);else if(d(o))i(o,n,f);else{var a=document.createElement("a");a.href=o,a.target="_blank",setTimeout(function(){u(a)})}}:function(o,n,f,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),typeof o=="string")return i(o,n,f);var p=o.type==="application/octet-stream",K=/constructor/i.test(l.HTMLElement)||l.safari,D=/CriOS\/[\d]+/.test(navigator.userAgent);if((D||p&&K||y)&&typeof FileReader<"u"){var T=new FileReader;T.onloadend=function(){var v=T.result;v=D?v:v.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=v:location=v,a=null},T.readAsDataURL(o)}else{var Z=l.URL||l.webkitURL,j=Z.createObjectURL(o);a?a.location=j:location.href=j,a=null,setTimeout(function(){Z.revokeObjectURL(j)},4e4)}});l.saveAs=h.saveAs=h,t.exports=h})})(J);var R=J.exports;const V="https://github.com/gkd-kit/inspect/issues/new",se="661952005",C={origin:"https://github.com",referer:V},ie=async()=>{var d;const t='[data-upload-policy-url="/upload/policies/assets"] input.js-data-upload-policy-url-csrf',e=await x(V);return(d=new DOMParser().parseFromString(await e.text(),"text/html").querySelector(t))==null?void 0:d.getAttribute("value")},q=async(t,e)=>{const[s,i]=(()=>{if(ne(t))return[e||"file.png","image/png"];if(ae(t))return[e||"file.zip","application/x-zip-compressed"];throw new Error("invalid buffer, it must be png or zip")})(),d=await ie();if(!d)throw W.githubErrorDlgVisible=!0,new Error("failed get csrfToken");const u=await x("https://github.com/upload/policies/assets",{method:"POST",body:B({authenticity_token:d,content_type:i,name:s,size:t.byteLength,repository_id:se}),headers:C}).then(h=>{if(!h.ok)throw new Error("failed upload policies assets");return h.json()});if(!(await x(u.upload_url,{method:"POST",body:B(u.form,{file:new File([t],s,{type:i})}),headers:C})).ok)throw new Error("upload s3 failed");if((await x(new URL(u.asset_upload_url,"https://github.com/").href,{method:"PUT",body:B({authenticity_token:u.asset_upload_authenticity_token}),headers:{...C,Accept:"application/json"}})).status!=200)throw new Error("failed check authenticity upload");return u.asset},L=async t=>{const e=new z;return e.file("snapshot.json",JSON.stringify(t)).file("screenshot.png",await $.getItem(t.id)),await e.generateAsync({type:"blob",compression:"STORE"})},re=async t=>{const e=`snapshot-${t.id}.zip`;R.saveAs(await L(t),e)},O=async t=>{const e=await $.getItem(t.id);return new Blob([e,JSON.stringify(t)])},ce=async t=>{const e=`snapshot-${t.id}.png`;R.saveAs(await O(t),e)},he=async t=>{const e=new z;for(const i of t)await U(),e.file(i.id+".png",O(i));const s=await e.generateAsync({type:"blob",compression:"STORE"});R.saveAs(s,`batch-png-${t.length}.zip`)},we=async t=>{const e=new z;for(const i of t)await U(),e.file(i.id+".zip",await L(i));const s=await e.generateAsync({type:"blob",compression:"STORE"});R.saveAs(s,`batch-zip-${t.length}.zip`)},G=async t=>M[t.id]??q(await O(t).then(e=>e.arrayBuffer())).then(e=>(M[t.id]=structuredClone(e),e)),X=async t=>N[t.id]??q(await L(t).then(e=>e.arrayBuffer())).then(e=>(N[t.id]=structuredClone(e),e)),me=async t=>{const e=H(3);return(await Promise.allSettled(t.map(s=>e(()=>G(s))))).reduce((s,i)=>(i.status=="fulfilled"&&s.push(i.value),s),[])},ge=async t=>{const e=H(3);return(await Promise.allSettled(t.map(s=>e(()=>X(s))))).reduce((s,i)=>(i.status=="fulfilled"&&s.push(i.value),s),[])},le=["href"],ye=Q({__name:"ActionCard",props:{snapshot:{},onDelete:{type:Function,default:()=>()=>{}},showPreview:{type:Boolean,default:!0},showExport:{type:Boolean,default:!0},showDelete:{type:Boolean,default:!0},showShare:{type:Boolean,default:!0}},setup(t){const e=t,s=Y(),i=E(async()=>ce(await S.getItem(e.snapshot.id))),d=E(async()=>re(await S.getItem(e.snapshot.id))),u=ee(()=>s.resolve({name:"snapshot",params:{snapshotId:e.snapshot.id}}).href),l=E(async()=>{const o=await G(await S.getItem(e.snapshot.id));F({title:"分享链接",content:o.href+`
`})}),y=E(async()=>{const o=await X(await S.getItem(e.snapshot.id));F({title:"分享链接",content:o.href+`
`})}),h=async()=>{await S.removeItem(e.snapshot.id),await U(500),e.onDelete()};return(o,n)=>(b(),_(r(P),null,{default:c(()=>[o.showPreview?(b(),te("a",{key:0,target:"_blank",href:u.value},[w(r(g),{size:"small"},{default:c(()=>[m(oe(o.$t("preview")),1)]),_:1})],8,le)):A("",!0),o.showExport?(b(),_(r(I),{key:1},{trigger:c(()=>[w(r(g),{size:"small"},{default:c(()=>[m(" 下载 ")]),_:1})]),default:c(()=>[w(r(P),{vertical:""},{default:c(()=>[w(r(g),{onClick:r(i).invoke,loading:r(i).loading},{default:c(()=>[m(" 下载-png ")]),_:1},8,["onClick","loading"]),w(r(g),{onClick:r(d).invoke,loading:r(d).loading},{default:c(()=>[m(" 下载-zip ")]),_:1},8,["onClick","loading"])]),_:1})]),_:1})):A("",!0),o.showShare?(b(),_(r(I),{key:2},{trigger:c(()=>[w(r(g),{size:"small"},{default:c(()=>[m(" 分享 ")]),_:1})]),default:c(()=>[w(r(P),{vertical:""},{default:c(()=>[w(r(g),{onClick:r(l).invoke,loading:r(l).loading},{default:c(()=>[m(" 生成链接-png ")]),_:1},8,["onClick","loading"]),w(r(g),{onClick:r(y).invoke,loading:r(y).loading},{default:c(()=>[m(" 生成链接-zip ")]),_:1},8,["onClick","loading"])]),_:1})]),_:1})):A("",!0),o.showDelete?(b(),_(r(g),{key:3,size:"small",onClick:h},{default:c(()=>[m(" 删除 ")]),_:1})):A("",!0)]),_:1}))}});export{ye as _,we as a,he as b,me as c,ge as d};
//# sourceMappingURL=ActionCard.vue_vue_type_script_setup_true_lang-de4962e7.js.map
