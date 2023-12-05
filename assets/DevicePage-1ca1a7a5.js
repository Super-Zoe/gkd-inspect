import{s as y,d as ne,ao as ie,a6 as le,t as re,w as ce,a as $,e as K,aq as ue,f as J,b as n,g as l,u as t,h as f,F as W,j as w,k,o as H,N as G,ar as pe,i as de,l as he,m as ve}from"./index-9a74ec84.js";import{l as fe,m as v,j as me,a as A,i as _,p as ge}from"./storage-25ae3853.js";import{u as we,b as ke,c as ye,a as X,d as xe,l as Q}from"./index-af9eb709.js";import{u as Se,a as be,N as Ce}from"./table-318c850e.js";import{u as N,x as _e,c as O,N as F,h as Ne,d as Pe,a as Re}from"./node-7c87a44a.js";const Ie=M=>{const x=y(M),S=async(o,h={})=>{var R;if(!x.value)throw new Error("origin must exist");const b=new URL("/api/"+o,x.value);Object.entries(h.query||{}).forEach(([m,I])=>{I!==void 0&&b.searchParams.set(m,String(I))});const c=await fe(b,h.init).catch(m=>{throw v.error("网络错误:/"+o),m});if(!c.ok)throw v.error("接口错误:/"+o+":"+c.status),c;if((R=c.headers.get("Content-Type"))!=null&&R.includes("application/json")){const m=await c.clone().json();if(m.__error)throw v.error(m.message),c}return c},i=async(...o)=>await(await S(...o)).json(),P=async(...o)=>await(await S(...o)).blob(),d=async(...o)=>await(await S(...o)).arrayBuffer();return{origin:x,api:{device:async()=>i("device"),snapshot:async o=>i("snapshot",{query:o}),screenshot:async o=>d("screenshot",{query:o}),captureSnapshot:async()=>i("captureSnapshot"),snapshots:async()=>i("snapshots"),subsApps:async()=>i("subsApps"),updateSubsApps:async o=>P("updateSubsApps",{init:{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}}),execSelector:async o=>i("execSelector",{init:{method:"POST",body:JSON.stringify({...o,value:o.selector}),headers:{"Content-Type":"application/json"}}})}}},Ve=f("div",{"h-15px":""},null,-1),Ae=f("a",{href:"https://github.com/gkd-kit/subscription/blob/main/src/types.ts",target:"_blank",rel:"noopener noreferrer"}," 查找说明 ",-1),ze=f("div",{"h-10px":""},null,-1),Be={flex:"","gap-10px":"","flex-items-center":""},Ue=f("a",{href:"https://github.com/gkd-kit/subscription/blob/main/src/types.ts",target:"_blank",rel:"noopener noreferrer"}," 操作说明 ",-1),Te={flex:"","flex-col":"","p-10px":"","gap-10px":"","h-full":""},Le=f("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},[f("path",{d:"M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428zM18 26h-4v-8h4zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26z",fill:"currentColor"})],-1),je={class:"h-full",flex:"","flex-items-center":""},Ee=ne({__name:"DevicePage",setup(M){const x=ie(),S=we("新设备"),{api:i,origin:P}=Ie(),d=ke("device_link",""),g=y(),o=N(async()=>{d.value&&(P.value=X(()=>new URL(d.value.trim()),()=>"非法设备地址").origin,d.value=P.value,g.value=await i.device())});le(async()=>{await me(500),re(d.value)&&o.invoke()});const h=y([]);ce(async()=>{if(!g.value)return;S.value="已连接 "+g.value.manufacturer;const e=await i.snapshots();e.sort((u,a)=>a.id-u.id),h.value=e;const s=await i.subsApps();V.value=Q.stringify(s||[],function(u,a){if(a!==null)return a},2)});const b=N(async()=>{const e=await i.captureSnapshot(),s=await i.screenshot({id:e.id});await A.setItem(e.id,e),await _.setItem(e.id,s),v.success("保存快照成功");const u=await i.snapshots();u.sort((a,j)=>j.id-a.id),h.value=u}),c=N(async()=>{const e=(await i.snapshots()).map(p=>p.id),s=new Set((await _.keys()).map(p=>parseInt(p))),u=e.filter(p=>!s.has(p));if(u.length==0){v.success("没有新记录可导入");return}let a=0;const j=ge(3);await Promise.all(u.map(p=>j(async()=>{const[E,oe]=await Promise.all([i.snapshot({id:p}),i.screenshot({id:p})]);E.nodes&&(await Promise.all([A.setItem(p,E),_.setItem(p,oe)]),a++)}))),v.success(`导入${a}条新记录`)}),{activityIdCol:R,appIdCol:m,appNameCol:I,ctimeCol:z,appVersionCodeCol:Y,appVersionNameCol:Z,reseColWidth:ee}=Se(),te=e=>{e.columnKey==z.key&&(z.sortOrder=e.order)},q=_e(async e=>{if(await A.hasItem(e.id)||await A.setItem(e.id,await i.snapshot({id:e.id})),!await _.hasItem(e.id)){const s=await i.screenshot({id:e.id});await _.setItem(e.id,s)}window.open(x.resolve({name:"snapshot",params:{snapshotId:e.id}}).href)},e=>e.id),se=[z,I,m,Y,Z,R,{key:"actions",title:"Action",fixed:"right",width:"120px",render(e){return n(O,{size:"small"},{default:()=>[n(w,{size:"small",loading:q.loading[e.id],onClick:()=>q.invoke(e)},{default:()=>[k("查看")]})]})}}],C=$({page:1,pageSize:50,showSizePicker:!0,pageSizes:[50,100],onChange:e=>{C.page=e},onUpdatePageSize:e=>{C.pageSize=e,C.page=1}});K(C,ee);const B=y(!1),V=y(""),U=N(async()=>{const e=X(()=>Q.parse(V.value.trim()||"[]"));await i.updateSubsApps([].concat(e)),v.success("修改成功")}),T=y(!1),D=["click","clickNode","clickCenter","back","longClick","longClickNode","longClickCenter"].map(e=>({value:e,label:e})),r=$({selector:"",selectorValid:!1,action:D[0].value,quickFind:!1}),ae=ye(()=>{r.selectorValid=xe(r.selector)},500);K(()=>r.selector.trim(),ae);const L=N(async()=>{const e=await i.execSelector({...r});if(e.message){v.success("点击成功:"+e.message);return}e.action&&v.success((e.result?"点击成功:":"点击失败")+e.action)});return(e,s)=>{const u=ue("RouterLink");return H(),J(W,null,[n(t(G),{show:B.value,"onUpdate:show":s[1]||(s[1]=a=>B.value=a),preset:"dialog",style:{width:"800px"},title:"修改内存订阅","positive-text":"确认",positiveButtonProps:{loading:t(U).loading,onClick(){t(U).invoke()}}},{default:l(()=>[n(t(F),{value:V.value,"onUpdate:value":s[0]||(s[0]=a=>V.value=a),disabled:t(U).loading,type:"textarea",class:"gkd_code",autosize:{minRows:10,maxRows:25},placeholder:`请输入订阅文本
订阅支持JSON5
根节点可以是APP规则对象也可以是APP规则对象数组`},null,8,["value","disabled"])]),_:1},8,["show","positiveButtonProps"]),n(t(G),{show:T.value,"onUpdate:show":s[5]||(s[5]=a=>T.value=a),preset:"dialog",style:{width:"800px"},title:"执行选择器","positive-text":"确认",positiveButtonProps:{loading:t(L).loading,disabled:!t(r).selectorValid,onClick(){t(L).invoke()}}},{default:l(()=>[n(t(F),{value:t(r).selector,"onUpdate:value":s[2]||(s[2]=a=>t(r).selector=a),disabled:t(L).loading,type:"textarea",class:"gkd_code",autosize:{minRows:4,maxRows:10},placeholder:"请输入合法的选择器"},null,8,["value","disabled"]),Ve,n(t(O),null,{default:l(()=>[n(t(Ne),{checked:t(r).quickFind,"onUpdate:checked":s[3]||(s[3]=a=>t(r).quickFind=a)},{default:l(()=>[k(" 快速查找 ")]),_:1},8,["checked"]),Ae]),_:1}),ze,f("div",Be,[n(t(be),{value:t(r).action,"onUpdate:value":s[4]||(s[4]=a=>t(r).action=a),options:t(D),class:"w-150px"},null,8,["value","options"]),Ue])]),_:1},8,["show","positiveButtonProps"]),f("div",Te,[n(t(O),null,{default:l(()=>[n(u,{to:"/"},{default:l(()=>[n(t(w),null,{icon:l(()=>[n(t(Pe),null,{default:l(()=>[Le]),_:1})]),_:1})]),_:1}),n(t(Re),null,{default:l(()=>[n(t(F),{value:t(d),"onUpdate:value":s[6]||(s[6]=a=>pe(d)?d.value=a:null),placeholder:"请输入设备地址",style:{minWidth:"250px"},onKeyup:de(t(o).invoke,["enter"])},null,8,["value","onKeyup"]),n(t(w),{onClick:t(o).invoke,loading:t(o).loading},{default:l(()=>[k(" 刷新连接 ")]),_:1},8,["onClick","loading"])]),_:1}),g.value?(H(),J(W,{key:0},[f("div",je,he(`已连接 ${g.value.manufacturer} Android ${g.value.release}`),1),n(t(w),{onClick:t(b).invoke,loading:t(b).loading},{default:l(()=>[k(" 快照 ")]),_:1},8,["onClick","loading"]),n(t(w),{onClick:t(c).invoke,loading:t(c).loading},{default:l(()=>[k(" 下载设备所有快照 ")]),_:1},8,["onClick","loading"]),n(t(w),{onClick:s[7]||(s[7]=a=>B.value=!0)},{default:l(()=>[k(" 修改内存订阅 ")]),_:1}),n(t(w),{onClick:s[8]||(s[8]=a=>T.value=!0)},{default:l(()=>[k(" 执行选择器 ")]),_:1})],64)):ve("",!0)]),_:1}),n(t(Ce),{striped:"",flexHeight:"",data:h.value,columns:se,pagination:t(C),"onUpdate:sorter":te,size:"small",class:"flex-1",scrollX:1200},null,8,["data","pagination"])])],64)}}});export{Ee as default};
//# sourceMappingURL=DevicePage-1ca1a7a5.js.map
