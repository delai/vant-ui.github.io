import{n as m,u as p,w as d}from"./with-install-80752cfa.js";import{b as V,G as g,c as u,u as h,p as f}from"./use-translate-ee29e3a6.js";import{A as c,x as k,e as s,B as R}from"./vue-libs-b2a2f6f9.js";import{c as b,C}from"./Checker-2654078e.js";const[l,P]=u("radio-group"),G={disabled:Boolean,iconSize:m,direction:String,modelValue:p,checkedColor:String},i=Symbol(l),w=c({name:l,props:G,emits:["change","update:modelValue"],setup(e,{emit:t,slots:n}){const{linkChildren:o}=V(i),r=a=>t("update:modelValue",a);return k(()=>e.modelValue,a=>t("change",a)),o({props:e,updateValue:r}),g(()=>e.modelValue),()=>{var a;return s("div",{class:P([e.direction]),role:"radiogroup"},[(a=n.default)==null?void 0:a.call(n)])}}}),S=d(w),z=S,[v,_]=u("radio"),x=c({name:v,props:b,emits:["update:modelValue"],setup(e,{emit:t,slots:n}){const{parent:o}=h(i),r=()=>(o?o.props.modelValue:e.modelValue)===e.name,a=()=>{o?o.updateValue(e.name):t("update:modelValue",e.name)};return()=>s(C,R({bem:_,role:"radio",parent:o,checked:r(),onToggle:a},e),f(n,["default","icon"]))}}),A=d(x),D=A;export{A as R,z as V,S as a,D as b};
