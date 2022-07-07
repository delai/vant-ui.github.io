import{c as w,h as B,a as U}from"./use-translate.fbf36f21.js";import{c as A,b as M,m as N,w as j}from"./with-install.251697cd.js";import{I as z}from"./index.f1bbf430.js";import{S as G,a as P}from"./index.190395cc.js";import{z as F,e as n,Q as T,D as u,C as S,r as V,o as k,a as O,w as p,B as i,c as D,f as E,F as K}from"./vue-libs.bf80eadf.js";import{I as y}from"./index.7b063491.js";import{d as _}from"./deep-clone.81db9f91.js";import"./use-route.9fd68ea8.js";function q(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!T(t)}const[L,m]=w("tree-select"),Q={max:A(1/0),items:M(),height:A(300),selectedIcon:N("success"),mainActiveIndex:A(0),activeId:{type:[Number,String,Array],default:0}};var R=F({name:L,props:Q,emits:["click-nav","click-item","update:activeId","update:mainActiveIndex"],setup(t,{emit:s,slots:v}){const x=e=>Array.isArray(t.activeId)?t.activeId.includes(e):t.activeId===e,I=e=>{const o=()=>{if(e.disabled)return;let c;if(Array.isArray(t.activeId)){c=t.activeId.slice();const l=c.indexOf(e.id);l!==-1?c.splice(l,1):c.length<t.max&&c.push(e.id)}else c=e.id;s("update:activeId",c),s("click-item",e)};return n("div",{key:e.id,class:["van-ellipsis",m("item",{active:x(e.id),disabled:e.disabled})],onClick:o},[e.text,x(e.id)&&n(z,{name:t.selectedIcon,class:m("selected")},null)])},f=e=>{s("update:mainActiveIndex",e)},g=e=>s("click-nav",e),r=()=>{const e=t.items.map(o=>n(P,{dot:o.dot,title:o.text,badge:o.badge,class:[m("nav-item"),o.className],disabled:o.disabled,onClick:g},null));return n(G,{class:m("nav"),modelValue:t.mainActiveIndex,onChange:f},q(e)?e:{default:()=>[e]})},C=()=>{if(v.content)return v.content();const e=t.items[+t.mainActiveIndex]||{};if(e.children)return e.children.map(I)};return()=>n("div",{class:m(),style:{height:B(t.height)}},[r(),n("div",{class:m("content")},[C()])])}});const h=j(R),H=[{text:"\u676D\u5DDE",id:1},{text:"\u6E29\u5DDE",id:2},{text:"\u5B81\u6CE2",id:3,disabled:!0},{text:"\u4E49\u4E4C",id:4}],J=[{text:"\u5357\u4EAC",id:5},{text:"\u65E0\u9521",id:6},{text:"\u5F90\u5DDE",id:7},{text:"\u82CF\u5DDE",id:8}],W=[{text:"\u6CC9\u5DDE",id:9},{text:"\u53A6\u95E8",id:10}],X=[{text:"\u6D59\u6C5F",children:H},{text:"\u6C5F\u82CF",children:J},{text:"\u798F\u5EFA",disabled:!0,children:W}],Y=[{text:"Delaware",id:1},{text:"Florida",id:2},{text:"Georqia",id:3,disabled:!0},{text:"Indiana",id:4}],Z=[{text:"Alabama",id:5},{text:"Kansas",id:6},{text:"Louisiana",id:7},{text:"Texas",id:8}],$=[{text:"Alabama",id:9},{text:"Kansas",id:10}],ee=[{text:"Group 1",children:Y},{text:"Group 2",children:Z},{text:"Group 3",disabled:!0,children:$}],le=F({setup(t){const s=U({"zh-CN":{showBadge:"\u5FBD\u6807\u63D0\u793A",radioMode:"\u5355\u9009\u6A21\u5F0F",multipleMode:"\u591A\u9009\u6A21\u5F0F",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",data:X,dataSimple:[{text:"\u5206\u7EC4 1"},{text:"\u5206\u7EC4 2"}]},"en-US":{showBadge:"Show Badge",radioMode:"Radio Mode",multipleMode:"Multiple Mode",customContent:"Custom Content",data:ee,dataSimple:[{text:"Group 1"},{text:"Group 2"}]}}),v=u(1),x=u(1),I=u([1,2]),f=u(0),g=u(0),r=u(0),C=u(0),e=S(()=>s("data")),o=S(()=>s("dataSimple")),c=S(()=>{const l=_(s("data")).slice(0,2);return l[0].dot=!0,l[1].badge=5,l});return(l,a)=>{const b=V("demo-block");return k(),O(K,null,[n(b,{title:i(s)("radioMode")},{default:p(()=>[n(i(h),{"active-id":v.value,"onUpdate:active-id":a[0]||(a[0]=d=>v.value=d),"main-active-index":f.value,"onUpdate:main-active-index":a[1]||(a[1]=d=>f.value=d),items:i(e)},null,8,["active-id","main-active-index","items"])]),_:1},8,["title"]),n(b,{title:i(s)("multipleMode")},{default:p(()=>[n(i(h),{"active-id":I.value,"onUpdate:active-id":a[2]||(a[2]=d=>I.value=d),"main-active-index":g.value,"onUpdate:main-active-index":a[3]||(a[3]=d=>g.value=d),items:i(e)},null,8,["active-id","main-active-index","items"])]),_:1},8,["title"]),n(b,{title:i(s)("customContent")},{default:p(()=>[n(i(h),{"main-active-index":r.value,"onUpdate:main-active-index":a[4]||(a[4]=d=>r.value=d),height:"55vw",items:i(o)},{content:p(()=>[r.value===0?(k(),D(i(y),{key:0,"show-loading":!1,src:"https://img.yzcdn.cn/vant/apple-1.jpg"})):E("v-if",!0),r.value===1?(k(),D(i(y),{key:1,"show-loading":!1,src:"https://img.yzcdn.cn/vant/apple-2.jpg"})):E("v-if",!0)]),_:1},8,["main-active-index","items"])]),_:1},8,["title"]),n(b,{title:i(s)("showBadge")},{default:p(()=>[n(i(h),{"active-id":x.value,"onUpdate:active-id":a[5]||(a[5]=d=>x.value=d),"main-active-index":C.value,"onUpdate:main-active-index":a[6]||(a[6]=d=>C.value=d),height:"55vw",items:i(c)},null,8,["active-id","main-active-index","items"])]),_:1},8,["title"])],64)}}});export{le as default};
