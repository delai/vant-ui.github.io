import{c as u,e as d,q as m,h as f}from"./use-translate.a029ce72.js";import{n as o,m as p,w as y}from"./with-install.1dc27775.js";import{e as r,A as S,D as g}from"./vue-libs.d5ee895a.js";const[x,a]=u("loading"),v=Array(12).fill(null).map((e,n)=>r("i",{class:a("line",String(n+1))},null)),z=r("svg",{class:a("circular"),viewBox:"25 25 50 50"},[r("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),I={size:o,type:p("circular"),color:String,vertical:Boolean,textSize:o,textColor:String},C=S({name:x,props:I,setup(e,{slots:n}){const c=g(()=>d({color:e.color},m(e.size))),i=()=>{const t=e.type==="spinner"?v:z;return r("span",{class:a("spinner",e.type),style:c.value},[n.icon?n.icon():t])},l=()=>{var t;if(n.default)return r("span",{class:a("text"),style:{fontSize:f(e.textSize),color:(t=e.textColor)!=null?t:e.color}},[n.default()])};return()=>{const{type:t,vertical:s}=e;return r("div",{class:a([t,{vertical:s}]),"aria-live":"polite","aria-busy":!0},[i(),l()])}}}),b=y(C);export{b as L};
