import{G as v,h as C,c as w}from"./use-translate-ee29e3a6.js";import{L as k}from"./index-6e04c06e.js";import{A as b,e as t}from"./vue-libs-b2a2f6f9.js";import{n as S,u as c,w as y}from"./with-install-80752cfa.js";const[z,l]=w("switch"),L={size:S,loading:Boolean,disabled:Boolean,modelValue:c,activeColor:String,inactiveColor:String,activeValue:{type:c,default:!0},inactiveValue:{type:c,default:!1}},P=b({name:z,props:L,emits:["change","update:modelValue"],setup(e,{emit:d,slots:n}){const o=()=>e.modelValue===e.activeValue,s=()=>{if(!e.disabled&&!e.loading){const a=o()?e.inactiveValue:e.activeValue;d("update:modelValue",a),d("change",a)}},m=()=>{if(e.loading){const a=o()?e.activeColor:e.inactiveColor;return t(k,{class:l("loading"),color:a},null)}if(n.node)return n.node()};return v(()=>e.modelValue),()=>{var u;const{size:a,loading:V,disabled:r,activeColor:f,inactiveColor:g}=e,i=o(),h={fontSize:C(a),backgroundColor:i?f:g};return t("div",{role:"switch",class:l({on:i,loading:V,disabled:r}),style:h,tabindex:r?void 0:0,"aria-checked":i,onClick:s},[t("div",{class:l("node")},[m()]),(u=n.background)==null?void 0:u.call(n)])}}}),x=y(P),G=x;export{x as S,G as V};
