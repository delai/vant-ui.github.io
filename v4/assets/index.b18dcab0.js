import{c as X,h as _,q as J,E as Q,l as V,B as F,i as A,X as Y,D as Z}from"./use-translate.85b7fc27.js";import{c,t as h,n as g,w as p}from"./with-install.d26e13af.js";import{A as ee,x as R,D as b,y as I,e as S,j as y,v as x,B as k,q as te}from"./vue-libs.a3cd7f61.js";import{H as z}from"./constant.80c6de18.js";import{c as ne}from"./interceptor.de8ff612.js";const[ae,v]=X("stepper"),le=200,ie=600,P=(t,u)=>String(t)===String(u),ue={min:c(1),max:c(1/0),name:c(""),step:c(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:h,showMinus:h,showInput:h,longPress:h,allowEmpty:Boolean,modelValue:g,inputWidth:g,buttonSize:g,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:c(1),decimalLength:g};var se=ee({name:ae,props:ue,emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(t,{emit:u}){const o=e=>{const{min:n,max:i,allowEmpty:f,decimalLength:l}=t;return f&&e===""||(e=F(String(e),!t.integer),e=e===""?0:+e,e=Number.isNaN(e)?+n:e,e=Math.max(Math.min(+i,e),+n),A(l)&&(e=e.toFixed(+l))),e},q=()=>{var i;const e=(i=t.modelValue)!=null?i:t.defaultValue,n=o(e);return P(n,t.modelValue)||u("update:modelValue",n),n};let s;const N=R(),a=R(q()),d=b(()=>t.disabled||t.disableMinus||a.value<=+t.min),m=b(()=>t.disabled||t.disablePlus||a.value>=+t.max),G=b(()=>({width:_(t.inputWidth),height:_(t.buttonSize)})),B=b(()=>J(t.buttonSize)),H=()=>{const e=o(a.value);P(e,a.value)||(a.value=e)},E=e=>{t.beforeChange?ne(t.beforeChange,{args:[e],done(){a.value=e}}):a.value=e},w=()=>{if(s==="plus"&&m.value||s==="minus"&&d.value){u("overlimit",s);return}const e=s==="minus"?-t.step:+t.step,n=o(Y(+a.value,e));E(n),u(s)},O=e=>{const n=e.target,{value:i}=n,{decimalLength:f}=t;let l=F(String(i),!t.integer);if(A(f)&&l.includes(".")){const D=l.split(".");l=`${D[0]}.${D[1].slice(0,+f)}`}t.beforeChange?n.value=String(a.value):P(i,l)||(n.value=l);const U=l===String(+l);E(U?+l:l)},W=e=>{var n;t.disableInput?(n=N.value)==null||n.blur():u("focus",e)},$=e=>{const n=e.target,i=o(n.value);n.value=String(i),a.value=i,te(()=>{u("blur",e),Z()})};let T,r;const C=()=>{r=setTimeout(()=>{w(),C()},le)},j=()=>{t.longPress&&(T=!1,clearTimeout(r),r=setTimeout(()=>{T=!0,w(),C()},ie))},L=e=>{t.longPress&&(clearTimeout(r),T&&V(e))},K=e=>{t.disableInput&&V(e)},M=e=>({onClick:n=>{V(n),s=e,w()},onTouchstart:()=>{s=e,j()},onTouchend:L,onTouchcancel:L});return I(()=>[t.max,t.min,t.integer,t.decimalLength],H),I(()=>t.modelValue,e=>{P(e,a.value)||(a.value=o(e))}),I(a,e=>{u("update:modelValue",e),u("change",e,{name:t.name})}),Q(()=>t.modelValue),()=>S("div",{role:"group",class:v([t.theme])},[y(S("button",k({type:"button",style:B.value,class:[v("minus",{disabled:d.value}),{[z]:!d.value}],"aria-disabled":d.value||void 0},M("minus")),null),[[x,t.showMinus]]),y(S("input",{ref:N,type:t.integer?"tel":"text",role:"spinbutton",class:v("input"),value:a.value,style:G.value,disabled:t.disabled,readonly:t.disableInput,inputmode:t.integer?"numeric":"decimal",placeholder:t.placeholder,"aria-valuemax":t.max,"aria-valuemin":t.min,"aria-valuenow":a.value,onBlur:$,onInput:O,onFocus:W,onMousedown:K},null),[[x,t.showInput]]),y(S("button",k({type:"button",style:B.value,class:[v("plus",{disabled:m.value}),{[z]:!m.value}],"aria-disabled":m.value||void 0},M("plus")),null),[[x,t.showPlus]])])}});const fe=p(se);export{fe as S};
