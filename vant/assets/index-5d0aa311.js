import{b as P,G as p,c as f,u as G,p as v,e as S}from"./use-translate-71d4880c.js";import{u as b}from"./use-expose-80cfd2b2.js";import{A as k,u as g,e as V,D as _,B as y}from"./vue-libs-19c20d28.js";import{n as h,m as B,b as O,t as A,w as E}from"./with-install-560d59bf.js";import{C as D,c as K}from"./Checker-40db41d1.js";const[x,N]=f("checkbox-group"),$={max:h,shape:B("round"),disabled:Boolean,iconSize:h,direction:String,modelValue:O(),checkedColor:String},C=Symbol(x),j=k({name:x,props:$,emits:["change","update:modelValue"],setup(a,{emit:t,slots:r}){const{children:c,linkChildren:s}=P(C),l=e=>t("update:modelValue",e),d=(e={})=>{typeof e=="boolean"&&(e={checked:e});const{checked:u,skipDisabled:i}=e,o=c.filter(n=>n.props.bindGroup?n.props.disabled&&i?n.checked.value:u??!n.checked.value:!1).map(n=>n.name);l(o)};return g(()=>a.modelValue,e=>t("change",e)),b({toggleAll:d}),p(()=>a.modelValue),s({props:a,updateValue:l}),()=>{var e;return V("div",{class:N([a.direction])},[(e=r.default)==null?void 0:e.call(r)])}}}),[w,z]=f("checkbox"),F=S({},K,{shape:String,bindGroup:A,indeterminate:{type:Boolean,default:null}}),H=k({name:w,props:F,emits:["change","update:modelValue"],setup(a,{emit:t,slots:r}){const{parent:c}=G(C),s=e=>{const{name:u}=a,{max:i,modelValue:m}=c.props,o=m.slice();if(e)!(i&&o.length>=+i)&&!o.includes(u)&&(o.push(u),a.bindGroup&&c.updateValue(o));else{const n=o.indexOf(u);n!==-1&&(o.splice(n,1),a.bindGroup&&c.updateValue(o))}},l=_(()=>c&&a.bindGroup?c.props.modelValue.indexOf(a.name)!==-1:!!a.modelValue),d=(e=!l.value)=>{c&&a.bindGroup?s(e):t("update:modelValue",e),a.indeterminate!==null&&t("change",e)};return g(()=>a.modelValue,e=>{a.indeterminate===null&&t("change",e)}),b({toggle:d,props:a,checked:l}),p(()=>a.modelValue),()=>V(D,y({bem:z,role:"checkbox",parent:c,checked:l.value,onToggle:d},a),v(r,["default","icon"]))}}),I=E(H),q=I;export{I as C,q as V,j as _};
