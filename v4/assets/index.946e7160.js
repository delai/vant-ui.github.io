import{C as i}from"./index.b3a8f6bd.js";import{I as g}from"./index.7f987ed8.js";import{N as s}from"./function-call.b250e262.js";import{a as E}from"./use-translate.22943ac9.js";import{A as w,x as A,r as B,o as N,a as D,e as n,w as l,C as t,d as v,t as F,F as b}from"./vue-libs.df86f395.js";import"./with-install.c6b01ca2.js";import"./use-route.f401cb95.js";import"./mount-component.f5f0bedd.js";import"./use-expose.e6b8a577.js";import"./index.fe471a10.js";import"./constant.80c6de18.js";import"./interceptor.0a931a5c.js";import"./use-touch.d1be10ec.js";import"./use-lazy-render.75150313.js";import"./on-popup-reopen.e1d5c0c5.js";import"./index.d0442e86.js";const J=w({name:"index",setup(P){const p=s.Component,o=E({"zh-CN":{primary:"\u4E3B\u8981\u901A\u77E5",success:"\u6210\u529F\u901A\u77E5",danger:"\u5371\u9669\u901A\u77E5",warning:"\u8B66\u544A\u901A\u77E5",content:"\u901A\u77E5\u5185\u5BB9",notifyType:"\u901A\u77E5\u7C7B\u578B",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customNotify:"\u81EA\u5B9A\u4E49\u914D\u7F6E",componentCall:"\u7EC4\u4EF6\u8C03\u7528",customDuration:"\u81EA\u5B9A\u4E49\u65F6\u957F",customPosition:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"},"en-US":{primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",componentCall:"Component Call",customDuration:"Custom Duration",customPosition:"Custom Position"}}),a=A(!1),C=()=>{s(o("content"))},f=()=>{s({color:"#ad0000",message:o("customColor"),background:"#ffe1e1"})},d=()=>{s({message:o("customDuration"),duration:1e3})},y=()=>{s({message:o("customPosition"),position:"bottom"})},r=c=>{s({message:o("content"),type:c})},k=()=>{a.value=!0,setTimeout(()=>{a.value=!1},2e3)};return(c,e)=>{const m=B("demo-block");return N(),D(b,null,[n(m,{card:"",title:t(o)("basicUsage")},{default:l(()=>[n(t(i),{"is-link":"",title:t(o)("basicUsage"),onClick:C},null,8,["title"])]),_:1},8,["title"]),n(m,{card:"",title:t(o)("notifyType")},{default:l(()=>[n(t(i),{"is-link":"",title:t(o)("primary"),onClick:e[0]||(e[0]=u=>r("primary"))},null,8,["title"]),n(t(i),{"is-link":"",title:t(o)("success"),onClick:e[1]||(e[1]=u=>r("success"))},null,8,["title"]),n(t(i),{"is-link":"",title:t(o)("danger"),onClick:e[2]||(e[2]=u=>r("danger"))},null,8,["title"]),n(t(i),{"is-link":"",title:t(o)("warning"),onClick:e[3]||(e[3]=u=>r("warning"))},null,8,["title"])]),_:1},8,["title"]),n(m,{card:"",title:t(o)("customNotify")},{default:l(()=>[n(t(i),{"is-link":"",title:t(o)("customColor"),onClick:f},null,8,["title"]),n(t(i),{"is-link":"",title:t(o)("customPosition"),onClick:y},null,8,["title"]),n(t(i),{"is-link":"",title:t(o)("customDuration"),onClick:d},null,8,["title"])]),_:1},8,["title"]),n(m,{card:"",title:t(o)("componentCall")},{default:l(()=>[n(t(i),{"is-link":"",title:t(o)("componentCall"),onClick:k},null,8,["title"]),n(t(p),{show:a.value,"onUpdate:show":e[4]||(e[4]=u=>a.value=u),type:"success"},{default:l(()=>[n(t(g),{name:"bell",style:{"margin-right":"4px"}}),v("span",null,F(t(o)("content")),1)]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{J as default};
