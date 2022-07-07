import{a as M,T as ct}from"./index.e48fa8ae.js";import{c as q,L as rt,b as at,i as lt,n as ut,l as dt,N as ft,K as L,G as R,y as ht,x as G,u as mt,e as pt,t as xt,a as gt}from"./use-translate.fbf36f21.js";import{t as vt,n as Q,a as yt,w as Z}from"./with-install.251697cd.js";import{u as Tt}from"./use-touch.b6ff7b52.js";import{u as J}from"./use-expose.8d47dba2.js";import{z as O,D as b,C as B,N as Ct,x as j,e as c,R as St,Q as kt,q as It,H as bt,o as _,c as At,w as C,B as o,a as F,b as H,d as U,F as K,h as _t,t as wt}from"./vue-libs.bf80eadf.js";import{f as Lt}from"./constant.80c6de18.js";import{C as S}from"./index.e9ec9dce.js";import"./use-id.139c5032.js";import"./use-route.9fd68ea8.js";import"./index.8f93d9c2.js";import"./on-popup-reopen.e08ee506.js";import"./interceptor.12fa8767.js";import"./use-refs.1bd4ff6f.js";import"./index.1a890101.js";import"./index.f1bbf430.js";function Rt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!kt(e)}function Bt(){const e="A".charCodeAt(0);return Array(26).fill("").map((n,f)=>String.fromCharCode(e+f))}const[W,w]=q("index-bar"),Ot={sticky:vt,zIndex:Q,teleport:[String,Object],highlightColor:String,stickyOffsetTop:yt(0),indexList:{type:Array,default:Bt}},tt=Symbol(W);var Et=O({name:W,props:Ot,emits:["select","change"],setup(e,{emit:r,slots:n}){const f=b(),h=b(""),x=Tt(),a=rt(f),{children:g,linkChildren:s}=at(tt);let m;s({props:e});const k=B(()=>{if(lt(e.zIndex))return{zIndex:+e.zIndex+1}}),et=B(()=>{if(e.highlightColor)return{color:e.highlightColor}}),E=(t,i)=>{for(let l=g.length-1;l>=0;l--){const d=l>0?i[l-1].height:0,u=e.sticky?d+e.stickyOffsetTop:0;if(t+u>=i[l].top)return l}return-1},N=t=>g.find(i=>String(i.index)===t),A=()=>{if(ft(f))return;const{sticky:t,indexList:i}=e,l=L(a.value),d=R(a),u=g.map(T=>T.getRect(a.value,d));let v=-1;if(m){const T=N(m);if(T){const y=T.getRect(a.value,d);v=E(y.top,u)}}else v=E(l,u);h.value=i[v],t&&g.forEach((T,y)=>{const{state:p,$el:st}=T;if(y===v||y===v-1){const I=st.getBoundingClientRect();p.left=I.left,p.width=I.width}else p.left=null,p.width=null;if(y===v)p.active=!0,p.top=Math.max(e.stickyOffsetTop,u[y].top-l)+d.top;else if(y===v-1&&m===""){const I=u[v].top-l;p.active=I>0,p.top=I+d.top-u[y].height}else p.active=!1}),m=""},P=()=>{It(A)};ut("scroll",A,{target:a}),Ct(P),j(()=>e.indexList,P),j(h,t=>{t&&r("change",t)});const ot=()=>e.indexList.map(t=>{const i=t===h.value;return c("span",{class:w("index",{active:i}),style:i?et.value:void 0,"data-index":t},[t])}),$=t=>{m=String(t);const i=N(m);if(i){const l=L(a.value),d=R(a),{offsetHeight:u}=document.documentElement;if(l===u-d.height){A();return}i.$el.scrollIntoView(),e.sticky&&e.stickyOffsetTop&&ht(G()-e.stickyOffsetTop),r("select",i.index)}},z=t=>{const{index:i}=t.dataset;i&&$(i)},nt=t=>{z(t.target)};let D;const it=t=>{if(x.move(t),x.isVertical()){dt(t);const{clientX:i,clientY:l}=t.touches[0],d=document.elementFromPoint(i,l);if(d){const{index:u}=d.dataset;u&&D!==u&&(D=u,z(d))}}},V=()=>c("div",{class:w("sidebar"),style:k.value,onClick:nt,onTouchstart:x.start,onTouchmove:it},[ot()]);return J({scrollTo:$}),()=>{var i;let t;return c("div",{ref:f,class:w()},[e.teleport?c(St,{to:e.teleport},Rt(t=V())?t:{default:()=>[t]}):V(),(i=n.default)==null?void 0:i.call(n)])}}});const X=Z(Et),[Nt,Pt]=q("index-anchor"),$t={index:Q};var zt=O({name:Nt,props:$t,setup(e,{slots:r}){const n=bt({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),f=b(),{parent:h}=mt(tt);if(!h)return;const x=()=>n.active&&h.props.sticky,a=B(()=>{const{zIndex:s,highlightColor:m}=h.props;if(x())return pt(xt(s),{left:n.left?`${n.left}px`:void 0,width:n.width?`${n.width}px`:void 0,transform:n.top?`translate3d(0, ${n.top}px, 0)`:void 0,color:m})});return J({state:n,getRect:(s,m)=>{const k=R(f);return n.rect.height=k.height,s===window||s===document.body?n.rect.top=k.top+G():n.rect.top=k.top+L(s)-m.top,n.rect}}),()=>{const s=x();return c("div",{ref:f,style:{height:s?`${n.rect.height}px`:void 0}},[c("div",{style:a.value,class:[Pt({sticky:s}),{[Lt]:s}]},[r.default?r.default():e.index])])}}});const Y=Z(zt),te=O({setup(e){const r=gt({"zh-CN":{text:"\u6587\u672C",customIndexList:"\u81EA\u5B9A\u4E49\u7D22\u5F15\u5217\u8868"},"en-US":{text:"Text",customIndexList:"Custom Index List"}}),n=b(0),f=[],h=[1,2,3,4,5,6,8,9,10],x="A".charCodeAt(0);for(let a=0;a<26;a++)f.push(String.fromCharCode(x+a));return(a,g)=>(_(),At(o(ct),{active:n.value,"onUpdate:active":g[0]||(g[0]=s=>n.value=s)},{default:C(()=>[c(o(M),{title:o(r)("basicUsage")},{default:C(()=>[c(o(X),null,{default:C(()=>[(_(),F(K,null,H(f,s=>U("div",{key:s},[c(o(Y),{index:s},null,8,["index"]),c(o(S),{title:o(r)("text")},null,8,["title"]),c(o(S),{title:o(r)("text")},null,8,["title"]),c(o(S),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"]),c(o(M),{title:o(r)("customIndexList")},{default:C(()=>[c(o(X),{"index-list":h},{default:C(()=>[(_(),F(K,null,H(h,s=>U("div",{key:s},[c(o(Y),{index:s},{default:C(()=>[_t(wt(o(r)("title")+s),1)]),_:2},1032,["index"]),c(o(S),{title:o(r)("text")},null,8,["title"]),c(o(S),{title:o(r)("text")},null,8,["title"]),c(o(S),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"])]),_:1},8,["active"]))}});export{te as default};
