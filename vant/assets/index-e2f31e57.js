import{V as v,a as f}from"./index-07a31670.js";import{W as p,_ as w,c as x,a as H}from"./use-translate-0400f29b.js";import{u as F}from"./use-expose-efcfdee3.js";import{A as k,D as b,u as g,e as o,y,r as V,o as N,a as P,w as r,C as t,d as h,t as D,F as B}from"./vue-libs-83dbabed.js";import{c as W,m as A,t as E,w as G}from"./with-install-a78877b5.js";import{s as I}from"./function-call-b65aa903.js";import"./constant-ee6e27d7.js";import"./use-route-b1061918.js";import"./index-5a7b6df9.js";import"./index-c916422a.js";import"./mount-component-94eea14a.js";import"./index-4c6d2d8c.js";import"./use-lock-scroll-1eff2e8c.js";import"./use-touch-8cd17a21.js";import"./use-lazy-render-2383afef.js";import"./on-popup-reopen-bcf43cef.js";import"./use-scope-id-e548748d.js";import"./index-b7134fb7.js";import"./interceptor-3c3c2616.js";import"./index-e6476cbd.js";function M(e,s){const{days:i}=s;let{hours:l,minutes:a,seconds:c,milliseconds:m}=s;if(e.includes("DD")?e=e.replace("DD",p(i)):l+=i*24,e.includes("HH")?e=e.replace("HH",p(l)):a+=l*60,e.includes("mm")?e=e.replace("mm",p(a)):c+=a*60,e.includes("ss")?e=e.replace("ss",p(c)):m+=c*1e3,e.includes("S")){const u=p(m,3);e.includes("SSS")?e=e.replace("SSS",u):e.includes("SS")?e=e.replace("SS",u.slice(0,2)):e=e.replace("S",u.charAt(0))}return e}const[U,z]=x("count-down"),R={time:W(0),format:A("HH:mm:ss"),autoStart:E,millisecond:Boolean},T=k({name:U,props:R,emits:["change","finish"],setup(e,{emit:s,slots:i}){const{start:l,pause:a,reset:c,current:m}=w({time:+e.time,millisecond:e.millisecond,onChange:C=>s("change",C),onFinish:()=>s("finish")}),u=b(()=>M(e.format,m.value)),n=()=>{c(+e.time),e.autoStart&&l()};return g(()=>e.time,n,{immediate:!0}),F({start:l,pause:a,reset:n}),()=>o("div",{role:"timer",class:z()},[i.default?i.default(m.value):u.value])}}),Z=G(T),_=Z,j={class:"block"},q=h("span",{class:"colon"},":",-1),J={class:"block"},K=h("span",{class:"colon"},":",-1),L={class:"block"},he=k({__name:"index",setup(e){const s=H({"zh-CN":{reset:"重置",pause:"暂停",start:"开始",finished:"倒计时结束",millisecond:"毫秒级渲染",customStyle:"自定义样式",customFormat:"自定义格式",manualControl:"手动控制",formatWithDay:"DD 天 HH 时 mm 分 ss 秒"},"en-US":{reset:"Reset",pause:"Pause",start:"Start",finished:"Finished",millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss"}}),i=y(30*60*60*1e3),l=y(),a=()=>{var n;(n=l.value)==null||n.start()},c=()=>{var n;(n=l.value)==null||n.pause()},m=()=>{var n;(n=l.value)==null||n.reset()},u=()=>I(s("finished"));return(n,C)=>{const d=V("demo-block");return N(),P(B,null,[o(d,{title:t(s)("basicUsage")},{default:r(()=>[o(t(_),{time:i.value},null,8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("customFormat")},{default:r(()=>[o(t(_),{time:i.value,format:t(s)("formatWithDay")},null,8,["time","format"])]),_:1},8,["title"]),o(d,{title:t(s)("millisecond")},{default:r(()=>[o(t(_),{millisecond:"",time:i.value,format:"HH:mm:ss:SS"},null,8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("customStyle")},{default:r(()=>[o(t(_),{time:i.value},{default:r(S=>[h("span",j,D(S.hours),1),q,h("span",J,D(S.minutes),1),K,h("span",L,D(S.seconds),1)]),_:1},8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("manualControl")},{default:r(()=>[o(t(_),{ref_key:"countDown",ref:l,millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS",onFinish:u},null,512),o(t(v),{clickable:"","column-num":3},{default:r(()=>[o(t(f),{icon:"play-circle-o",text:t(s)("start"),onClick:a},null,8,["text"]),o(t(f),{icon:"pause-circle-o",text:t(s)("pause"),onClick:c},null,8,["text"]),o(t(f),{icon:"replay",text:t(s)("reset"),onClick:m},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{he as default};