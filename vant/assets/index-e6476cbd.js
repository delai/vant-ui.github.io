import{c as u,e as d,n as m,h as f}from"./use-translate-0400f29b.js";import{A as g,D as p,e as t}from"./vue-libs-83dbabed.js";import{n as r,m as y,w as S}from"./with-install-a78877b5.js";const[x,a]=u("loading"),v=Array(12).fill(null).map((e,n)=>t("i",{class:a("line",String(n+1))},null)),z=t("svg",{class:a("circular"),viewBox:"25 25 50 50"},[t("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),I={size:r,type:y("circular"),color:String,vertical:Boolean,textSize:r,textColor:String},C=g({name:x,props:I,setup(e,{slots:n}){const c=p(()=>d({color:e.color},m(e.size))),i=()=>{const o=e.type==="spinner"?v:z;return t("span",{class:a("spinner",e.type),style:c.value},[n.icon?n.icon():o])},l=()=>{if(n.default)return t("span",{class:a("text"),style:{fontSize:f(e.textSize),color:e.textColor??e.color}},[n.default()])};return()=>{const{type:o,vertical:s}=e;return t("div",{class:a([o,{vertical:s}]),"aria-live":"polite","aria-busy":!0},[i(),l()])}}}),L=S(C),b=L;export{L,b as V};