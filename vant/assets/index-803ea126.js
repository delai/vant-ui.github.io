import{V as n}from"./index-122de2bc.js";import{_ as b,s as x}from"./function-call-7a5c1806.js";import{w as _}from"./with-install-560d59bf.js";import{c as p}from"./index-2630be1a.js";import{a as U}from"./use-translate-71d4880c.js";import{s as $}from"./function-call-39062646.js";import{A as E,y as c,r as T,o as V,a as j,e as s,w as a,C as e,g as B,t as N,d,F as y}from"./vue-libs-19c20d28.js";import"./use-route-751feeeb.js";import"./index-1ef61aa2.js";import"./index-8bc2514f.js";import"./mount-component-b555bf78.js";import"./use-expose-80cfd2b2.js";import"./index-a26cde52.js";import"./use-touch-4e22f945.js";import"./constant-ee6e27d7.js";import"./on-popup-reopen-6f4c2d78.js";import"./index-e88b099c.js";import"./use-lock-scroll-01f1fb06.js";import"./use-lazy-render-e63df66f.js";import"./use-scope-id-dc406604.js";import"./index-cd342d67.js";import"./interceptor-5424332a.js";import"./index-1122429d.js";import"./index-2b75ebd8.js";const f=_(b),F={style:{width:"100%"},controls:""},z=["src"],re=E({__name:"index",setup(A){const t=U({"zh-CN":{closed:"关闭",showClose:"展示关闭按钮",showImages:"预览图片",beforeClose:"异步关闭",closeEvent:"监听关闭事件",customConfig:"传入配置项",startPosition:"指定初始位置",useComponent:"使用 ImagePreview 组件",useImageSlot:"使用 image 插槽",index:l=>`第${l+1}页`},"en-US":{closed:"closed",showClose:"Show Close Icon",showImages:"Show Images",beforeClose:"Before Close",closeEvent:"Close Event",customConfig:"Custom Config",startPosition:"Set Start Position",useComponent:"Use ImagePreview Component",useImageSlot:"Use image slot",index:l=>`Page: ${l}`}}),C=[p("apple-1.jpeg"),p("apple-2.jpeg"),p("apple-3.jpeg"),p("apple-4.jpeg")],v=["https://www.w3school.com.cn/i/movie.ogg","https://www.w3school.com.cn/i/movie.ogg","https://www.w3school.com.cn/i/movie.ogg","https://www.w3school.com.cn/i/movie.ogg"],u=c(!1),g=c(0),w=c(!1),h=()=>$(t("closed")),k=()=>new Promise(l=>{setTimeout(()=>{l(!0)},1e3)}),I=l=>{g.value=l},S=()=>{u.value=!0},P=()=>{w.value=!0},m=(l={})=>{const o=x({images:C,...l});l.beforeClose&&setTimeout(()=>{o==null||o.close()},2e3)};return(l,o)=>{const r=T("demo-block");return V(),j(y,null,[s(r,{card:"",title:e(t)("basicUsage")},{default:a(()=>[s(e(n),{"is-link":"",title:e(t)("showImages"),onClick:o[0]||(o[0]=i=>m())},null,8,["title"])]),_:1},8,["title"]),s(r,{card:"",title:e(t)("customConfig")},{default:a(()=>[s(e(n),{"is-link":"",title:e(t)("startPosition"),onClick:o[1]||(o[1]=i=>m({startPosition:1}))},null,8,["title"]),s(e(n),{"is-link":"",title:e(t)("showClose"),onClick:o[2]||(o[2]=i=>m({closeable:!0}))},null,8,["title"]),s(e(n),{"is-link":"",title:e(t)("closeEvent"),onClick:o[3]||(o[3]=i=>m({onClose:h}))},null,8,["title"])]),_:1},8,["title"]),s(r,{card:"",title:e(t)("beforeClose")},{default:a(()=>[s(e(n),{"is-link":"",title:e(t)("beforeClose"),onClick:o[4]||(o[4]=i=>m({beforeClose:k}))},null,8,["title"])]),_:1},8,["title"]),s(r,{card:"",title:e(t)("useComponent")},{default:a(()=>[s(e(n),{"is-link":"",title:e(t)("useComponent"),onClick:S},null,8,["title"]),s(e(f),{show:u.value,"onUpdate:show":o[5]||(o[5]=i=>u.value=i),images:C,onChange:I},{index:a(()=>[B(N(e(t)("index",g.value)),1)]),_:1},8,["show"])]),_:1},8,["title"]),s(r,{card:"",title:e(t)("useImageSlot")},{default:a(()=>[s(e(n),{"is-link":"",title:e(t)("useImageSlot"),onClick:P},null,8,["title"]),s(e(f),{show:w.value,"onUpdate:show":o[6]||(o[6]=i=>w.value=i),images:v},{image:a(({src:i})=>[d("video",F,[d("source",{src:i},null,8,z)])]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{re as default};
