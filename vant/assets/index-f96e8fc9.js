import{B as S}from"./index-8bc2514f.js";import{d as j,c as g,e as $,k as z,h as B}from"./use-translate-71d4880c.js";import{A as b,D as v,u as i,J as C,L as D,I as L,P as T,R as _,e as d,E as k,B as N}from"./vue-libs-19c20d28.js";import{m,n as f,w as R}from"./with-install-560d59bf.js";let P=2e3;const Q=()=>++P,w=e=>{P=e},[V,y]=g("config-provider"),I=Symbol(V),G={tag:m("div"),theme:m("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,themeVarsScope:m("local"),iconPrefix:String};function Z(e){const a={};return Object.keys(e).forEach(t=>{a[`--van-${z(t)}`]=e[t]}),a}function r(e={},a={}){Object.keys(e).forEach(t=>{e[t]!==a[t]&&document.documentElement.style.setProperty(t,e[t])}),Object.keys(a).forEach(t=>{e[t]||document.documentElement.style.removeProperty(t)})}const W=b({name:V,props:G,setup(e,{slots:a}){const t=v(()=>Z($({},e.themeVars,e.theme==="dark"?e.themeVarsDark:e.themeVarsLight)));if(j){const c=()=>{document.documentElement.classList.add(`van-theme-${e.theme}`)},s=(o=e.theme)=>{document.documentElement.classList.remove(`van-theme-${o}`)};i(()=>e.theme,(o,n)=>{n&&s(n),c()},{immediate:!0}),C(c),D(s),L(s),i(t,(o,n)=>{e.themeVarsScope==="global"&&r(o,n)}),i(()=>e.themeVarsScope,(o,n)=>{n==="global"&&r({},t.value),o==="global"&&r(t.value,{})}),e.themeVarsScope==="global"&&r(t.value,{})}return T(I,e),_(()=>{e.zIndex!==void 0&&w(e.zIndex)}),()=>d(e.tag,{class:y(),style:e.themeVarsScope==="local"?t.value:void 0},{default:()=>{var c;return[(c=a.default)==null?void 0:c.call(a)]}})}}),[A,h]=g("icon"),U=e=>e==null?void 0:e.includes("/"),F={dot:Boolean,tag:m("i"),name:String,size:f,badge:f,color:String,badgeProps:Object,classPrefix:String},J=b({name:A,props:F,setup(e,{slots:a}){const t=k(I,null),c=v(()=>e.classPrefix||(t==null?void 0:t.iconPrefix)||h());return()=>{const{tag:s,dot:o,name:n,size:x,badge:E,color:O}=e,l=U(n);return d(S,N({dot:o,tag:s,class:[c.value,l?"":`${c.value}-${n}`],style:{color:O,fontSize:B(x)},content:E},e.badgeProps),{default:()=>{var u;return[(u=a.default)==null?void 0:u.call(a),l&&d("img",{class:h("image"),src:n},null)]}})}}}),K=R(J),X=K;export{K as I,X as V,W as _,Q as u};