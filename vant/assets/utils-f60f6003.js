import{p as c}from"./Picker-0f14769f.js";import{e as p,V as u}from"./use-translate-7ec0e456.js";import{b as m}from"./with-install-5cd181dc.js";const h=p({},c,{modelValue:m(),filter:Function,formatter:{type:Function,default:(t,e)=>e}}),y=Object.keys(c);function l(t,e){if(t<0)return[];const r=Array(t);let n=-1;for(;++n<t;)r[n]=e(n);return r}const x=(t,e)=>32-new Date(t,e-1,32).getDate(),k=(t,e,r,n,o)=>{const a=l(e-t+1,i=>{const s=u(t+i);return n(r,{text:s,value:s})});return o?o(r,a):a},V=(t,e)=>t.map((r,n)=>{const o=e[n];if(o.length){const a=+o[o.length-1].value;if(+r>a)return String(a)}return r});export{k as a,V as f,x as g,y as p,h as s};
