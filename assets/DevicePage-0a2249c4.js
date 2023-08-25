import{s as B,aq as h,d as $,as as O,aa as q,w as G,a as H,e as M,au as X,f as L,b as n,g as d,u as s,m as y,n as k,o as T,N as J,av as Q,l as Y,F as Z,h as ee,t as ae,p as se}from"./index-b1304cf0.js";import{f as te,e as ne,a as I,d as C,p as oe}from"./storage-4bb66a1a.js";import{t as ie}from"./check-44032eaf.js";import{u as re,b as le,a as ce}from"./index-dc31633c.js";import{u as ue,N as pe}from"./table-f52d9995.js";import{u as z,n as de,b as U,N as he}from"./task-fc36cfbd.js";const me=P=>{const g=B(P),S=async(a,u={})=>{var v;if(!g.value)throw new Error("origin must exist");const m=new URL("/api/"+a,g.value);Object.entries(u).forEach(([p,x])=>{x!==void 0&&m.searchParams.set(p,String(x))});const o=await te(m).catch(p=>{throw h.error("网络错误:/"+a),p});if(!o.ok)throw h.error("接口错误:/"+a+":"+o.status),o;if((v=o.headers.get("Content-Type"))!=null&&v.includes("application/json")){const p=await o.clone().json();if(p.__error)throw h.error(p.message),o}return o},t=async(...a)=>await(await S(...a)).json(),_=async(...a)=>await(await S(...a)).arrayBuffer();return{origin:g,api:{device:async()=>t("device"),snapshot:async a=>t("snapshot",a),screenshot:async a=>_("screenshot",a),captureSnapshot:async()=>t("captureSnapshot"),snapshots:async()=>t("snapshots")}}},fe={flex:"","flex-col":"","p-10px":"","gap-10px":"","h-full":""},ge={class:"h-full",flex:"","flex-items-center":""},_e=$({__name:"DevicePage",setup(P){const g=O(),S=re("新设备"),{api:t,origin:_}=me(),c=le("device_link",""),a=B(),u=z(async()=>{c.value&&(_.value=ce(()=>new URL(c.value.trim()),()=>"非法设备地址").origin,c.value=_.value,a.value=await t.device())});q(async()=>{await ne(500),ie(c.value)&&u.invoke()});const m=B([]);G(async()=>{if(!a.value)return;S.value="已连接 "+a.value.manufacturer;const e=await t.snapshots();e.sort((i,l)=>l.id-i.id),m.value=e});const o=z(async()=>{const e=await t.snapshot(),i=await t.screenshot({id:e.id});h.success("抓取快照成功"),await I.setItem(e.id,e),await C.setItem(e.id,i),h.success("保存快照成功");const l=await t.snapshots();l.sort((f,R)=>R.id-f.id),m.value=l}),v=z(async()=>{const e=(await t.snapshots()).map(r=>r.id),i=new Set((await C.keys()).map(r=>parseInt(r))),l=e.filter(r=>!i.has(r));if(l.length==0){h.success("没有新记录可导入");return}let f=0;const R=oe(3);await Promise.all(l.map(r=>R(async()=>{const[b,W]=await Promise.all([t.snapshot({id:r}),t.screenshot({id:r})]);b.nodes&&(await Promise.all([I.setItem(r,b),C.setItem(r,W)]),f++)}))),h.success(`导入${f}条新记录`)}),{activityIdCol:p,appIdCol:x,appNameCol:j,ctimeCol:N,appVersionCodeCol:E,appVersionNameCol:A,reseColWidth:D}=ue(),K=e=>{e.columnKey==N.key&&(N.sortOrder=e.order)},V=de(async e=>{if(await I.hasItem(e.id)||await I.setItem(e.id,await t.snapshot({id:e.id})),!await C.hasItem(e.id)){const i=await t.screenshot({id:e.id});await C.setItem(e.id,i)}window.open(g.resolve({name:"snapshot",params:{snapshotId:e.id}}).href)},e=>e.id),F=[N,j,x,E,A,p,{key:"actions",title:"Action",fixed:"right",width:"120px",render(e){return n(U,{size:"small"},{default:()=>[n(y,{size:"small",loading:V.loading[e.id],onClick:()=>V.invoke(e)},{default:()=>[k("查看")]})]})}}],w=H({page:1,pageSize:50,showSizePicker:!0,pageSizes:[50,100],onChange:e=>{w.page=e},onUpdatePageSize:e=>{w.pageSize=e,w.page=1}});return M(w,D),(e,i)=>{const l=X("RouterLink");return T(),L("div",fe,[n(s(U),null,{default:d(()=>[n(l,{to:"/"},{default:d(()=>[n(s(y),null,{default:d(()=>[k(" 首页 ")]),_:1})]),_:1}),n(s(he),null,{default:d(()=>[n(s(J),{value:s(c),"onUpdate:value":i[0]||(i[0]=f=>Q(c)?c.value=f:null),placeholder:"请输入设备地址",style:{minWidth:"250px"},onKeyup:Y(s(u).invoke,["enter"])},null,8,["value","onKeyup"]),n(s(y),{ghost:"",onClick:s(u).invoke,loading:s(u).loading},{default:d(()=>[k(" 连接 ")]),_:1},8,["onClick","loading"])]),_:1}),a.value?(T(),L(Z,{key:0},[ee("div",ge,ae(`已连接 ${a.value.manufacturer} Android ${a.value.release}`),1),n(s(y),{ghost:"",onClick:s(o).invoke,loading:s(o).loading},{default:d(()=>[k(" 快照 ")]),_:1},8,["onClick","loading"]),n(s(y),{ghost:"",onClick:s(v).invoke,loading:s(v).loading},{default:d(()=>[k(" 下载设备所有快照 ")]),_:1},8,["onClick","loading"])],64)):se("",!0)]),_:1}),n(s(pe),{striped:"",flexHeight:"",data:m.value,columns:F,pagination:s(w),"onUpdate:sorter":K,size:"small",class:"flex-1",scrollX:1200},null,8,["data","pagination"])])}}});export{_e as default};
//# sourceMappingURL=DevicePage-0a2249c4.js.map
