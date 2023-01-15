import{V as w}from"./index-95093031.js";import{I as T}from"./index-13130ea7.js";import{P as y,p as I,a as U}from"./index-4a7db624.js";import{L as _}from"./index-2bd2daba.js";import{t as k,b as N,m as V,w as $}from"./with-install-c0de7835.js";import{A as O,e as n,B as E,q as F,u as h,D as g,r as H,o as K,a as L,w as S,C as e,d as q,t as z,F as W}from"./vue-libs-b2a2f6f9.js";import{p as j,c as G,e as J,a as M}from"./use-translate-bcc9285c.js";import{H as Q}from"./constant-a81ffd37.js";import{s as A}from"./function-call-57778d4c.js";import"./use-route-efd4b866.js";import"./index-3cdd9fde.js";import"./use-expose-52ca271b.js";import"./use-touch-8f92051d.js";import"./use-lazy-render-927fe2b4.js";import"./on-popup-reopen-e5b691e6.js";import"./index-e11a9c16.js";import"./interceptor-e1e3c393.js";import"./mount-component-23f5a3b8.js";const[R,l]=G("action-sheet"),X=J({},I,{title:String,round:k,actions:N(),closeIcon:V("cross"),closeable:k,cancelText:String,description:String,closeOnPopstate:k,closeOnClickAction:Boolean,safeAreaInsetBottom:k}),Y=[...U,"round","closeOnPopstate","safeAreaInsetBottom"],Z=O({name:R,props:X,emits:["select","cancel","update:show"],setup(a,{slots:t,emit:c}){const r=s=>c("update:show",s),p=()=>{r(!1),c("cancel")},m=()=>{if(a.title)return n("div",{class:l("header")},[a.title,a.closeable&&n(T,{name:a.closeIcon,class:[l("close"),Q],onClick:p},null)])},f=()=>{if(t.cancel||a.cancelText)return[n("div",{class:l("gap")},null),n("button",{type:"button",class:l("cancel"),onClick:p},[t.cancel?t.cancel():a.cancelText])]},C=(s,u)=>s.loading?n(_,{class:l("loading-icon")},null):t.action?t.action({action:s,index:u}):[n("span",{class:l("name")},[s.name]),s.subname&&n("div",{class:l("subname")},[s.subname])],x=(s,u)=>{const{color:b,loading:o,callback:d,disabled:i,className:D}=s,B=()=>{i||o||(d&&d(s),a.closeOnClickAction&&r(!1),F(()=>c("select",s,u)))};return n("button",{type:"button",style:{color:b},class:[l("item",{loading:o,disabled:i}),D],onClick:B},[C(s,u)])},P=()=>{if(a.description||t.description){const s=t.description?t.description():a.description;return n("div",{class:l("description")},[s])}};return()=>n(y,E({class:l(),position:"bottom","onUpdate:show":r},j(a,Y)),{default:()=>{var s;return[m(),P(),n("div",{class:l("content")},[a.actions.map(x),(s=t.default)==null?void 0:s.call(t)]),f()]}})}}),tt=$(Z),v=tt,et={class:"demo-action-sheet-content"},kt=O({__name:"index",setup(a){const t=M({"zh-CN":{option1:"选项一",option2:"选项二",option3:"选项三",subname:"描述信息",showCancel:"展示取消按钮",buttonText:"弹出菜单",customPanel:"自定义面板",description:"这是一段描述信息",optionStatus:"选项状态",coloredOption:"着色选项",disabledOption:"禁用选项",showDescription:"展示描述信息"},"en-US":{option1:"Option 1",option2:"Option 2",option3:"Option 3",subname:"Description",showCancel:"Show Cancel Button",buttonText:"Show ActionSheet",customPanel:"Custom Panel",description:"Description",optionStatus:"Option Status",coloredOption:"Colored Option",disabledOption:"Disabled Option",showDescription:"Show Description"}}),c=h(!1),r=h(!1),p=h(!1),m=h(!1),f=h(!1),C=g(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3")}]),x=g(()=>[{name:t("coloredOption"),color:"#ee0a24"},{name:t("disabledOption"),disabled:!0},{loading:!0}]),P=g(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3"),subname:t("subname")}]),s=b=>{c.value=!1,A(b.name)},u=()=>A(t("cancel"));return(b,o)=>{const d=H("demo-block");return K(),L(W,null,[n(d,{card:"",title:e(t)("basicUsage")},{default:S(()=>[n(e(w),{"is-link":"",title:e(t)("basicUsage"),onClick:o[0]||(o[0]=i=>c.value=!0)},null,8,["title"]),n(e(w),{"is-link":"",title:e(t)("showCancel"),onClick:o[1]||(o[1]=i=>r.value=!0)},null,8,["title"]),n(e(w),{"is-link":"",title:e(t)("showDescription"),onClick:o[2]||(o[2]=i=>f.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(d,{card:"",title:e(t)("optionStatus")},{default:S(()=>[n(e(w),{"is-link":"",title:e(t)("optionStatus"),onClick:o[3]||(o[3]=i=>m.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(d,{card:"",title:e(t)("customPanel")},{default:S(()=>[n(e(w),{"is-link":"",title:e(t)("customPanel"),onClick:o[4]||(o[4]=i=>p.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(e(v),{show:c.value,"onUpdate:show":o[5]||(o[5]=i=>c.value=i),actions:e(C),onSelect:s},null,8,["show","actions"]),n(e(v),{show:r.value,"onUpdate:show":o[6]||(o[6]=i=>r.value=i),actions:e(C),"close-on-click-action":"","cancel-text":e(t)("cancel"),onCancel:u},null,8,["show","actions","cancel-text"]),n(e(v),{show:f.value,"onUpdate:show":o[7]||(o[7]=i=>f.value=i),actions:e(P),"close-on-click-action":"","cancel-text":e(t)("cancel"),description:e(t)("description")},null,8,["show","actions","cancel-text","description"]),n(e(v),{show:m.value,"onUpdate:show":o[8]||(o[8]=i=>m.value=i),"close-on-click-action":"",actions:e(x),"cancel-text":e(t)("cancel")},null,8,["show","actions","cancel-text"]),n(e(v),{show:p.value,"onUpdate:show":o[9]||(o[9]=i=>p.value=i),title:e(t)("title")},{default:S(()=>[q("div",et,z(e(t)("content")),1)]),_:1},8,["show","title"])],64)}}});export{kt as default};
