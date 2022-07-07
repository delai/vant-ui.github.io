import{G as y,a as f}from"./index.fbaec8d0.js";import{N as p,c as k,Y as x,a as w}from"./use-translate.00c0a8db.js";import{c as H,m as B,t as E,w as A}from"./with-install.f242061f.js";import{u as b}from"./use-expose.024996fe.js";import{A as v,D as g,y as N,e as o,x as F,r as P,o as G,a as W,w as r,C as t,d as h,t as D,F as I}from"./vue-libs.84c45047.js";import{T as M}from"./function-call.18417f70.js";import"./constant.80c6de18.js";import"./use-route.7c55373a.js";import"./index.2879154d.js";import"./mount-component.99b67023.js";import"./index.f915e03a.js";import"./interceptor.f340ca2d.js";import"./use-touch.c1d7ebd1.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.d15c01ab.js";import"./index.3f188a06.js";function T(e,s){const{days:i}=s;let{hours:a,minutes:n,seconds:u,milliseconds:c}=s;if(e.includes("DD")?e=e.replace("DD",p(i)):a+=i*24,e.includes("HH")?e=e.replace("HH",p(a)):n+=a*60,e.includes("mm")?e=e.replace("mm",p(n)):u+=n*60,e.includes("ss")?e=e.replace("ss",p(u)):c+=u*1e3,e.includes("S")){const m=p(c,3);e.includes("SSS")?e=e.replace("SSS",m):e.includes("SS")?e=e.replace("SS",m.slice(0,2)):e=e.replace("S",m.charAt(0))}return e}const[U,V]=k("count-down"),z={time:H(0),format:B("HH:mm:ss"),autoStart:E,millisecond:Boolean};var R=v({name:U,props:z,emits:["change","finish"],setup(e,{emit:s,slots:i}){const{start:a,pause:n,reset:u,current:c}=x({time:+e.time,millisecond:e.millisecond,onChange:C=>s("change",C),onFinish:()=>s("finish")}),m=g(()=>T(e.format,c.value)),l=()=>{u(+e.time),e.autoStart&&a()};return N(()=>e.time,l,{immediate:!0}),b({start:a,pause:n,reset:l}),()=>o("div",{role:"timer",class:V()},[i.default?i.default(c.value):m.value])}});const _=A(R);const Y={class:"block"},Z=h("span",{class:"colon"},":",-1),j={class:"block"},q=h("span",{class:"colon"},":",-1),J={class:"block"},re=v({setup(e){const s=w({"zh-CN":{reset:"\u91CD\u7F6E",pause:"\u6682\u505C",start:"\u5F00\u59CB",finished:"\u5012\u8BA1\u65F6\u7ED3\u675F",millisecond:"\u6BEB\u79D2\u7EA7\u6E32\u67D3",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",formatWithDay:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2"},"en-US":{reset:"Reset",pause:"Pause",start:"Start",finished:"Finished",millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss"}}),i=F(30*60*60*1e3),a=F(),n=()=>{var l;(l=a.value)==null||l.start()},u=()=>{var l;(l=a.value)==null||l.pause()},c=()=>{var l;(l=a.value)==null||l.reset()},m=()=>M(s("finished"));return(l,C)=>{const d=P("demo-block");return G(),W(I,null,[o(d,{title:t(s)("basicUsage")},{default:r(()=>[o(t(_),{time:i.value},null,8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("customFormat")},{default:r(()=>[o(t(_),{time:i.value,format:t(s)("formatWithDay")},null,8,["time","format"])]),_:1},8,["title"]),o(d,{title:t(s)("millisecond")},{default:r(()=>[o(t(_),{millisecond:"",time:i.value,format:"HH:mm:ss:SS"},null,8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("customStyle")},{default:r(()=>[o(t(_),{time:i.value},{default:r(S=>[h("span",Y,D(S.hours),1),Z,h("span",j,D(S.minutes),1),q,h("span",J,D(S.seconds),1)]),_:1},8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("manualControl")},{default:r(()=>[o(t(_),{ref_key:"countDown",ref:a,millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS",onFinish:m},null,512),o(t(y),{clickable:"","column-num":3},{default:r(()=>[o(t(f),{icon:"play-circle-o",text:t(s)("start"),onClick:n},null,8,["text"]),o(t(f),{icon:"pause-circle-o",text:t(s)("pause"),onClick:u},null,8,["text"]),o(t(f),{icon:"replay",text:t(s)("reset"),onClick:c},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{re as default};
