import{d as m,al as f,am as h,s as c,a5 as d,f as g,J as v,K as w,h as _,t as x,o as R}from"./index-8eca7b58.js";import{t as S}from"./check-44032eaf.js";import{m as y,i,u as l,a as I,n,q as U,e as b,r as B,l as k}from"./storage-4d6fbcad.js";import{a as q}from"./import-11cf0350.js";import"./jszip.min-daeeead2.js";const D={class:"h-[calc(100%-10px)]",flex:"","gap-5px":"","p-5px":"","flex-col":"","flex-items-center":""},E=m({__name:"ImportPage",setup(L){const u=f(),r=h(),a=String(u.query.url||""),p=c(!0),o=c("加载中...");return d(async()=>{if(!S(a)){y.error("非法URL参数"),await i(1e3),r.replace({path:"/"});return}await i(1e3);const s=l[a];if(s)if(await I.getItem(s)){r.replace({name:"snapshot",params:{snapshotId:s}});return}else delete l[a];n.start();try{const[t]=await q(a)??[];if(t.status=="fulfilled"){n.finish();const e=t.value;e!=null&&e.id?(l[a]=e.id,a.match(U)?b[e.id]=a:a.match(B)&&(k[e.id]=a),p.value=!1,await i(500),r.replace({name:"snapshot",params:{snapshotId:e.id}})):o.value="获取资源失败"}else throw t.reason}catch{n.error(),o.value="加载资源失败"}}),(s,t)=>(R(),g("div",D,[v(_("div",{"mt-40px":""},x(o.value),513),[[w,p.value]])]))}});export{E as default};
//# sourceMappingURL=ImportPage-d04fb0c7.js.map
