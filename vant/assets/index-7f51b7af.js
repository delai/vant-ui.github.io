import{V as n}from"./index-ba3884dc.js";import{_ as w,s as r,a as u}from"./function-call-03e5a1ce.js";import{w as b}from"./with-install-560d59bf.js";import{c as h}from"./index-2630be1a.js";import{a as B}from"./use-translate-71d4880c.js";import{A as v,y as x,r as D,o as y,a as A,e as o,w as s,C as e,d as U,F as R}from"./vue-libs-19c20d28.js";import"./use-route-751feeeb.js";import"./index-f96e8fc9.js";import"./index-8bc2514f.js";import"./mount-component-b555bf78.js";import"./use-expose-80cfd2b2.js";import"./index-51f5d3c5.js";import"./use-lock-scroll-01f1fb06.js";import"./use-touch-4e22f945.js";import"./constant-ee6e27d7.js";import"./use-lazy-render-e63df66f.js";import"./on-popup-reopen-6f4c2d78.js";import"./index-cd342d67.js";import"./interceptor-07dc6e0f.js";import"./index-7adfa50f.js";import"./index-2b75ebd8.js";import"./index-2bf565a0.js";import"./use-placeholder-e1607af4.js";import"./use-height-e6919207.js";const V=b(w),N=["src"],nt=v({__name:"index",setup(T){const t=B({"zh-CN":{title:"标题",alert1:"提示弹窗",alert2:"提示弹窗（无标题）",confirm:"确认弹窗",content1:"代码是写出来给人看的，附带能在机器上运行。",content2:"生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。",content3:"如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。",beforeClose:"异步关闭",roundButton:"圆角按钮样式",useComponent:"使用 Dialog 组件"},"en-US":{title:"Title",alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",content1:"Content",content2:"Content",content3:"Content",beforeClose:"Before Close",roundButton:"Round Button Style",useComponent:"Use Dialog Component"}}),a=x(!1),p=h("apple-3.jpeg"),C=()=>{r({title:t("title"),message:t("content1")})},d=()=>{r({message:t("content2")})},f=()=>{r({theme:"round-button",title:t("title"),message:t("content1")})},k=()=>{r({theme:"round-button",message:t("content2")})},_=()=>{u({title:t("title"),message:t("content3")})},g=()=>{const m=l=>new Promise(i=>{setTimeout(()=>i(l==="confirm"),1e3)});u({title:t("title"),message:t("content3"),beforeClose:m})};return(m,l)=>{const i=D("demo-block");return y(),A(R,null,[o(i,{card:"",title:e(t)("basicUsage")},{default:s(()=>[o(e(n),{"is-link":"",title:e(t)("alert1"),onClick:C},null,8,["title"]),o(e(n),{"is-link":"",title:e(t)("alert2"),onClick:d},null,8,["title"]),o(e(n),{"is-link":"",title:e(t)("confirm"),onClick:_},null,8,["title"])]),_:1},8,["title"]),o(i,{card:"",title:e(t)("roundButton")},{default:s(()=>[o(e(n),{"is-link":"",title:e(t)("alert1"),onClick:f},null,8,["title"]),o(e(n),{"is-link":"",title:e(t)("alert2"),onClick:k},null,8,["title"])]),_:1},8,["title"]),o(i,{card:"",title:e(t)("beforeClose")},{default:s(()=>[o(e(n),{"is-link":"",title:e(t)("beforeClose"),onClick:g},null,8,["title"])]),_:1},8,["title"]),o(i,{card:"",title:e(t)("useComponent")},{default:s(()=>[o(e(n),{"is-link":"",title:e(t)("useComponent"),onClick:l[0]||(l[0]=c=>a.value=!0)},null,8,["title"]),o(e(V),{show:a.value,"onUpdate:show":l[1]||(l[1]=c=>a.value=c),title:e(t)("title"),"show-cancel-button":"","lazy-render":!1},{default:s(()=>[U("img",{src:e(p)},null,8,N)]),_:1},8,["show","title"])]),_:1},8,["title"])],64)}}});export{nt as default};