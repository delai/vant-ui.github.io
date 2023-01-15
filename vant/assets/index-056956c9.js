import{f as S,F as L}from"./index-fbad952d.js";import{u as D}from"./use-id-92cebd14.js";import{u as O}from"./use-expose-52ca271b.js";import{A as _,u as d,e as t,B as K,r as j,o as q,a as z,w as s,C as o,d as A,t as $,F as G}from"./vue-libs-b2a2f6f9.js";import{c as H,e as x,p as E,l as J,a as M}from"./use-translate-bcc9285c.js";import{m as w,t as Q,w as W}from"./with-install-c0de7835.js";import{s as I}from"./function-call-57778d4c.js";import"./index-95093031.js";import"./use-route-efd4b866.js";import"./index-13130ea7.js";import"./index-3cdd9fde.js";import"./constant-a81ffd37.js";import"./mount-component-23f5a3b8.js";import"./index-4a7db624.js";import"./use-touch-8f92051d.js";import"./use-lazy-render-927fe2b4.js";import"./on-popup-reopen-e5b691e6.js";import"./index-e11a9c16.js";import"./interceptor-e1e3c393.js";import"./index-2bd2daba.js";const[X,h,Y]=H("search"),Z=x({},S,{label:String,shape:w("square"),leftIcon:w("search"),clearable:Q,actionText:String,background:String,showAction:Boolean}),ee=_({name:X,props:Z,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(r,{emit:l,slots:n,attrs:b}){const k=D(),i=d(),v=()=>{n.action||(l("update:modelValue",""),l("cancel"))},m=e=>{e.keyCode===13&&(J(e),l("search",r.modelValue))},f=()=>r.id||`${k}-input`,V=()=>{if(n.label||r.label)return t("label",{class:h("label"),for:f()},[n.label?n.label():r.label])},C=()=>{if(r.showAction){const e=r.actionText||Y("cancel");return t("div",{class:h("action"),role:"button",tabindex:0,onClick:v},[n.action?n.action():e])}},g=()=>{var e;return(e=i.value)==null?void 0:e.blur()},a=()=>{var e;return(e=i.value)==null?void 0:e.focus()},u=e=>l("blur",e),c=e=>l("focus",e),T=e=>l("clear",e),U=e=>l("clickInput",e),y=e=>l("clickLeftIcon",e),F=e=>l("clickRightIcon",e),N=Object.keys(S),P=()=>{const e=x({},b,E(r,N),{id:f()}),B=R=>l("update:modelValue",R);return t(L,K({ref:i,type:"search",class:h("field"),border:!1,onBlur:u,onFocus:c,onClear:T,onKeypress:m,onClickInput:U,onClickLeftIcon:y,onClickRightIcon:F,"onUpdate:modelValue":B},e),E(n,["left-icon","right-icon"]))};return O({focus:a,blur:g}),()=>{var e;return t("div",{class:h({"show-action":r.showAction}),style:{background:r.background}},[(e=n.left)==null?void 0:e.call(n),t("div",{class:h("content",r.shape)},[V(),P()]),C()])}}}),le=W(ee),p=le,oe={action:"/"},Be=_({__name:"index",setup(r){const l=M({"zh-CN":{label:"地址",disabled:"禁用搜索框",inputAlign:"搜索框内容对齐",background:"自定义背景色",placeholder:"请输入搜索关键词",customButton:"自定义按钮",listenToEvents:"事件监听"},"en-US":{label:"Address",disabled:"Disabled",inputAlign:"Input Align",background:"Custom Background Color",placeholder:"Placeholder",customButton:"Custom Action Button",listenToEvents:"Listen to Events"}}),n=d(""),b=d(""),k=d(""),i=d(""),v=d(""),m=d(""),f=g=>I(g),V=()=>I(l("cancel")),C=()=>I(m.value);return(g,a)=>{const u=j("demo-block");return q(),z(G,null,[t(u,{title:o(l)("basicUsage")},{default:s(()=>[t(o(p),{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c),placeholder:o(l)("placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),t(u,{title:o(l)("listenToEvents")},{default:s(()=>[A("form",oe,[t(o(p),{modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=c=>v.value=c),placeholder:o(l)("placeholder"),"show-action":"",onSearch:f,onCancel:V},null,8,["modelValue","placeholder"])])]),_:1},8,["title"]),t(u,{title:o(l)("inputAlign")},{default:s(()=>[t(o(p),{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=c=>i.value=c),placeholder:o(l)("placeholder"),"input-align":"center"},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),t(u,{title:o(l)("disabled")},{default:s(()=>[t(o(p),{modelValue:k.value,"onUpdate:modelValue":a[3]||(a[3]=c=>k.value=c),placeholder:o(l)("placeholder"),disabled:""},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),t(u,{title:o(l)("background")},{default:s(()=>[t(o(p),{modelValue:b.value,"onUpdate:modelValue":a[4]||(a[4]=c=>b.value=c),placeholder:o(l)("placeholder"),shape:"round",background:"#4fc08d"},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),t(u,{title:o(l)("customButton")},{default:s(()=>[t(o(p),{modelValue:m.value,"onUpdate:modelValue":a[5]||(a[5]=c=>m.value=c),"show-action":"",label:o(l)("label"),placeholder:o(l)("placeholder"),onSearch:f},{action:s(()=>[A("div",{onClick:C},$(o(l)("search")),1)]),_:1},8,["modelValue","label","placeholder"])]),_:1},8,["title"])],64)}}});export{Be as default};
