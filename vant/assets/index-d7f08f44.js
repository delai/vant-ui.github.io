import{A as V,u as z,e as n,D as O,x as D,j as I,v as k,B as L,T as M,S as N,Q as j}from"./vue-libs-b2a2f6f9.js";import{c as K,l as _,_ as E,t as $,X as F}from"./use-translate-bcc9285c.js";import{u as Q}from"./use-touch-8f92051d.js";import{L as X}from"./index-2bd2daba.js";import{n as S,m as B,c as Z,t as d,w as q}from"./with-install-c0de7835.js";import{H as G}from"./constant-a81ffd37.js";const[J,h]=K("key"),R=n("svg",{class:h("collapse-icon"),viewBox:"0 0 30 24"},[n("path",{d:"M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",fill:"currentColor"},null)]),U=n("svg",{class:h("delete-icon"),viewBox:"0 0 32 22"},[n("path",{d:"M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",fill:"currentColor"},null)]),w=V({name:J,props:{type:String,text:S,color:String,wider:Boolean,large:Boolean,loading:Boolean},emits:["press"],setup(e,{emit:l,slots:r}){const c=z(!1),u=Q(),m=s=>{u.start(s),c.value=!0},v=s=>{u.move(s),u.direction.value&&(c.value=!1)},f=s=>{c.value&&(r.default||_(s),c.value=!1,l("press",e.text,e.type))},x=()=>{if(e.loading)return n(X,{class:h("loading-icon")},null);const s=r.default?r.default():e.text;switch(e.type){case"delete":return s||U;case"extra":return s||R;default:return s}};return()=>n("div",{class:h("wrapper",{wider:e.wider}),onTouchstartPassive:m,onTouchmovePassive:v,onTouchend:f,onTouchcancel:f},[n("div",{role:"button",tabindex:0,class:h([e.color,{large:e.large,active:c.value,delete:e.type==="delete"}])},[x()])])}});function W(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!j(e)}const[Y,i]=K("number-keyboard"),p={show:Boolean,title:String,theme:B("default"),zIndex:S,teleport:[String,Object],maxlength:Z(1/0),modelValue:B(""),transition:d,blurOnClose:d,showDeleteKey:d,randomKeyOrder:Boolean,closeButtonText:String,deleteButtonText:String,closeButtonLoading:Boolean,hideOnClickOutside:d,safeAreaInsetBottom:d,extraKey:{type:[String,Array],default:""}};function ee(e){for(let l=e.length-1;l>0;l--){const r=Math.floor(Math.random()*(l+1)),c=e[l];e[l]=e[r],e[r]=c}return e}const te=V({name:Y,inheritAttrs:!1,props:p,emits:["show","hide","blur","input","close","delete","update:modelValue"],setup(e,{emit:l,slots:r,attrs:c}){const u=z(),m=()=>{const t=Array(9).fill("").map((o,a)=>({text:a+1}));return e.randomKeyOrder&&ee(t),t},v=()=>[...m(),{text:e.extraKey,type:"extra"},{text:0},{text:e.showDeleteKey?e.deleteButtonText:"",type:e.showDeleteKey?"delete":""}],f=()=>{const t=m(),{extraKey:o}=e,a=Array.isArray(o)?o:[o];return a.length===1?t.push({text:0,wider:!0},{text:a[0],type:"extra"}):a.length===2&&t.push({text:a[0],type:"extra"},{text:0},{text:a[1],type:"extra"}),t},x=O(()=>e.theme==="custom"?f():v()),s=()=>{e.show&&l("blur")},b=()=>{l("close"),e.blurOnClose&&s()},C=()=>l(e.show?"show":"hide"),y=(t,o)=>{if(t===""){o==="extra"&&s();return}const a=e.modelValue;o==="delete"?(l("delete"),l("update:modelValue",a.slice(0,a.length-1))):o==="close"?b():a.length<e.maxlength&&(l("input",t),l("update:modelValue",a+t))},A=()=>{const{title:t,theme:o,closeButtonText:a}=e,g=r["title-left"],T=a&&o==="default";if(t||T||g)return n("div",{class:i("header")},[g&&n("span",{class:i("title-left")},[g()]),t&&n("h2",{class:i("title")},[t]),T&&n("button",{type:"button",class:[i("close"),G],onClick:b},[a])])},P=()=>x.value.map(t=>{const o={};return t.type==="delete"&&(o.default=r.delete),t.type==="extra"&&(o.default=r["extra-key"]),n(w,{key:t.text,text:t.text,type:t.type,wider:t.wider,color:t.color,onPress:y},o)}),H=()=>{if(e.theme==="custom")return n("div",{class:i("sidebar")},[e.showDeleteKey&&n(w,{large:!0,text:e.deleteButtonText,type:"delete",onPress:y},{delete:r.delete}),n(w,{large:!0,text:e.closeButtonText,type:"close",color:"blue",loading:e.closeButtonLoading,onPress:y},null)])};return D(()=>e.show,t=>{e.transition||l(t?"show":"hide")}),e.hideOnClickOutside&&E(u,s,{eventName:"touchstart"}),()=>{const t=A(),o=n(M,{name:e.transition?"van-slide-up":""},{default:()=>[I(n("div",L({ref:u,style:$(e.zIndex),class:i({unfit:!e.safeAreaInsetBottom,"with-title":!!t}),onAnimationend:C,onTouchstartPassive:F},c),[t,n("div",{class:i("body")},[n("div",{class:i("keys")},[P()]),H()])]),[[k,e.show]])]});return e.teleport?n(N,{to:e.teleport},W(o)?o:{default:()=>[o]}):o}}}),ne=q(te),ue=ne;export{ue as V};
