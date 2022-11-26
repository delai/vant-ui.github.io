import{V as h}from"./index.bbd81525.js";import{c as P,e as x,p as Q,a as L}from"./use-translate.d2900b8c.js";import{t as F,b as U,w as M}from"./with-install.19a35764.js";import{H as T}from"./constant.80c6de18.js";import{a as y,p as O,P as W}from"./index.e6e790ed.js";import{I as N}from"./index.b70c9b40.js";import{z as D,e as n,A as V,C as f,D as C,r as $,o as H,a as K,w as S,B as o,F as z}from"./vue-libs.b44bc779.js";import{c as b}from"./index.d8fe3225.js";import{T as R}from"./function-call.509e41a7.js";import"./use-route.82f2be69.js";import"./interceptor.f0c85874.js";import"./use-expose.c942d5f8.js";import"./use-touch.04ca7093.js";import"./use-lazy-render.f712e85e.js";import"./on-popup-reopen.138c77eb.js";import"./index.d46e53a8.js";import"./mount-component.f3744995.js";import"./index.4e4daaac.js";const _=[...y,"round","closeOnPopstate","safeAreaInsetBottom"],B={qq:"qq",link:"link-o",weibo:"weibo",qrcode:"qr",poster:"photo-o",wechat:"wechat","weapp-qrcode":"miniprogram-o","wechat-moments":"wechat-moments"},[j,c,G]=P("share-sheet"),J=x({},O,{title:String,round:F,options:U(),cancelText:String,description:String,closeOnPopstate:F,safeAreaInsetBottom:F}),X=D({name:j,props:J,emits:["cancel","select","update:show"],setup(l,{emit:t,slots:a}){const r=e=>t("update:show",e),u=()=>{r(!1),t("cancel")},p=(e,s)=>t("select",e,s),v=()=>{const e=a.title?a.title():l.title,s=a.description?a.description():l.description;if(e||s)return n("div",{class:c("header")},[e&&n("h2",{class:c("title")},[e]),s&&n("span",{class:c("description")},[s])])},q=e=>B[e]?n("div",{class:c("icon",[e])},[n(N,{name:B[e]||e},null)]):n("img",{src:e,class:c("image-icon")},null),A=(e,s)=>{const{name:i,icon:I,className:g,description:E}=e;return n("div",{role:"button",tabindex:0,class:[c("option"),g,T],onClick:()=>p(e,s)},[q(I),i&&n("span",{class:c("name")},[i]),E&&n("span",{class:c("option-description")},[E])])},d=(e,s)=>n("div",{class:c("options",{border:s})},[e.map(A)]),m=()=>{const{options:e}=l;return Array.isArray(e[0])?e.map((s,i)=>d(s,i!==0)):d(e)},w=()=>{var s;const e=(s=l.cancelText)!=null?s:G("cancel");if(a.cancel||e)return n("button",{type:"button",class:c("cancel"),onClick:u},[a.cancel?a.cancel():e])};return()=>n(W,V({class:c(),position:"bottom","onUpdate:show":r},Q(l,_)),{default:()=>[v(),m(),w()]})}}),Y=M(X),k=Y,Ce=D({__name:"index",setup(l){const t=L({"zh-CN":{qq:"QQ",name:"\u540D\u79F0",link:"\u590D\u5236\u94FE\u63A5",title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",weibo:"\u5FAE\u535A",wechat:"\u5FAE\u4FE1",poster:"\u5206\u4EAB\u6D77\u62A5",qrcode:"\u4E8C\u7EF4\u7801",multiLine:"\u5C55\u793A\u591A\u884C\u9009\u9879",showSheet:"\u663E\u793A\u5206\u4EAB\u9762\u677F",withDesc:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",description:"\u63CF\u8FF0\u4FE1\u606F",weappQrcode:"\u5C0F\u7A0B\u5E8F\u7801",wechatMoments:"\u670B\u53CB\u5708"},"en-US":{qq:"QQ",name:"Name",link:"Link",title:"Share",weibo:"Weibo",wechat:"WeChat",poster:"Poster",qrcode:"Qrcode",multiLine:"Multi Line",showSheet:"Show ShareSheet",withDesc:"Show Description",customIcon:"Custom Icon",description:"Description",weappQrcode:"Weapp Qrcode",wechatMoments:"WeChat Moments"}}),a=f(!1),r=f(!1),u=f(!1),p=f(!1),v=C(()=>[{name:t("wechat"),icon:"wechat"},{name:t("weibo"),icon:"weibo"},{name:t("link"),icon:"link"},{name:t("poster"),icon:"poster"},{name:t("qrcode"),icon:"qrcode"}]),q=C(()=>[[{name:t("wechat"),icon:"wechat"},{name:t("wechatMoments"),icon:"wechat-moments"},{name:t("weibo"),icon:"weibo"},{name:t("qq"),icon:"qq"}],[{name:t("link"),icon:"link"},{name:t("poster"),icon:"poster"},{name:t("qrcode"),icon:"qrcode"},{name:t("weappQrcode"),icon:"weapp-qrcode"}]]),A=C(()=>[{name:t("name"),icon:b("custom-icon-fire.png")},{name:t("name"),icon:b("custom-icon-light.png")},{name:t("name"),icon:b("custom-icon-water.png")}]),d=C(()=>[{name:t("wechat"),icon:"wechat"},{name:t("weibo"),icon:"weibo"},{name:t("link"),icon:"link",description:t("description")},{name:t("poster"),icon:"poster"},{name:t("qrcode"),icon:"qrcode"}]),m=w=>{R(w.name),a.value=!1,r.value=!1,u.value=!1,p.value=!1};return(w,e)=>{const s=$("demo-block");return H(),K(z,null,[n(s,{card:"",title:o(t)("basicUsage")},{default:S(()=>[n(o(h),{"is-link":"",title:o(t)("showSheet"),onClick:e[0]||(e[0]=i=>a.value=!0)},null,8,["title"]),n(o(k),{show:a.value,"onUpdate:show":e[1]||(e[1]=i=>a.value=i),title:o(t)("title"),options:o(v),onSelect:m},null,8,["show","title","options"])]),_:1},8,["title"]),n(s,{card:"",title:o(t)("multiLine")},{default:S(()=>[n(o(h),{"is-link":"",title:o(t)("showSheet"),onClick:e[2]||(e[2]=i=>u.value=!0)},null,8,["title"]),n(o(k),{show:u.value,"onUpdate:show":e[3]||(e[3]=i=>u.value=i),title:o(t)("title"),options:o(q),onSelect:m},null,8,["show","title","options"])]),_:1},8,["title"]),n(s,{card:"",title:o(t)("customIcon")},{default:S(()=>[n(o(h),{"is-link":"",title:o(t)("showSheet"),onClick:e[4]||(e[4]=i=>p.value=!0)},null,8,["title"]),n(o(k),{show:p.value,"onUpdate:show":e[5]||(e[5]=i=>p.value=i),options:o(A),onSelect:m},null,8,["show","options"])]),_:1},8,["title"]),n(s,{card:"",title:o(t)("withDesc")},{default:S(()=>[n(o(h),{"is-link":"",title:o(t)("showSheet"),onClick:e[6]||(e[6]=i=>r.value=!0)},null,8,["title"]),n(o(k),{show:r.value,"onUpdate:show":e[7]||(e[7]=i=>r.value=i),title:o(t)("title"),options:o(d),description:o(t)("description"),onSelect:m},null,8,["show","title","options","description"])]),_:1},8,["title"])],64)}}});export{Ce as default};
