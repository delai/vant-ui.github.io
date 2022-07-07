import{c as L,i as F,I as z,Z as M,l as O,E as j,a as V}from"./use-translate.2660019b.js";import{c as X,n as P,w as Z}from"./with-install.87cec8a5.js";import{c as $}from"./interceptor.bb19cb80.js";import{u as G}from"./use-touch.d1be10ec.js";import{u as J}from"./use-expose.7d65f428.js";import{A,x as _,H as K,D as R,e as l,r as Q,o as Y,a as ee,w as s,C as t,F as te}from"./vue-libs.df86f395.js";import{B as p}from"./index.e048a5cb.js";import{C as q}from"./index.fa39f2fa.js";import{C as oe}from"./index.fa199cfc.js";import{c as le}from"./index.00b749b5.js";import{D as ae}from"./function-call.1b1d8310.js";import"./constant.80c6de18.js";import"./use-route.f401cb95.js";import"./index.17b6eda3.js";import"./index.c5042094.js";import"./index.e83e7342.js";import"./index.c6a73fb9.js";import"./mount-component.eae8658d.js";import"./index.721124a6.js";import"./use-lazy-render.75150313.js";import"./on-popup-reopen.e1d5c0c5.js";import"./index.6d40715e.js";import"./index.41b1f8d5.js";const[ne,x]=L("swipe-cell"),re={name:X(""),disabled:Boolean,leftWidth:P,rightWidth:P,beforeClose:Function,stopPropagation:Boolean};var se=A({name:ne,props:re,emits:["open","close","click"],setup(a,{emit:o,slots:f}){let i,u,m;const d=_(),y=_(),w=_(),n=K({offset:0,dragging:!1}),g=G(),T=e=>e.value?z(e).width:0,h=R(()=>F(a.leftWidth)?+a.leftWidth:T(y)),C=R(()=>F(a.rightWidth)?+a.rightWidth:T(w)),k=e=>{n.offset=e==="left"?h.value:-C.value,i||(i=!0,o("open",{name:a.name,position:e}))},v=e=>{n.offset=0,i&&(i=!1,o("close",{name:a.name,position:e}))},H=e=>{const r=Math.abs(n.offset),c=.15,I=i?1-c:c,W=e==="left"?h.value:C.value;W&&r>W*I?k(e):v(e)},N=e=>{a.disabled||(m=n.offset,g.start(e))},U=e=>{if(a.disabled)return;const{deltaX:r}=g;g.move(e),g.isHorizontal()&&(u=!0,n.dragging=!0,(!i||r.value*m<0)&&O(e,a.stopPropagation),n.offset=j(r.value+m,-C.value,h.value))},B=()=>{n.dragging&&(n.dragging=!1,H(n.offset>0?"left":"right"),setTimeout(()=>{u=!1},0))},E=(e="outside")=>{o("click",e),i&&!u&&$(a.beforeClose,{args:[{name:a.name,position:e}],done:()=>v(e)})},D=(e,r)=>c=>{r&&c.stopPropagation(),E(e)},S=(e,r)=>{const c=f[e];if(c)return l("div",{ref:r,class:x(e),onClick:D(e,!0)},[c()])};return J({open:k,close:v}),M(d,()=>E("outside"),{eventName:"touchstart"}),()=>{var r;const e={transform:`translate3d(${n.offset}px, 0, 0)`,transitionDuration:n.dragging?"0s":".6s"};return l("div",{ref:d,class:x(),onClick:D("cell",u),onTouchstart:N,onTouchmove:U,onTouchend:B,onTouchcancel:B},[l("div",{class:x("wrapper"),style:e},[S("left",y),(r=f.default)==null?void 0:r.call(f),S("right",w)])])}}});const b=Z(se);const Fe=A({name:"index",setup(a){const o=V({"zh-CN":{select:"\u9009\u62E9",delete:"\u5220\u9664",collect:"\u6536\u85CF",title:"\u5355\u5143\u683C",confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",cardTitle:"\u5546\u54C1\u6807\u9898",beforeClose:"\u5F02\u6B65\u5173\u95ED",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},"en-US":{select:"Select",delete:"Delete",collect:"Collect",title:"Cell",confirm:"Are you sure to delete?",cardTitle:"Title",beforeClose:"Before Close",customContent:"Custom Content"}}),f=le("ipad.jpeg"),i=({position:u})=>{switch(u){case"left":case"cell":case"outside":return!0;case"right":return new Promise(m=>{ae.confirm({title:o("confirm")}).then(()=>{m(!0)})})}};return(u,m)=>{const d=Q("demo-block");return Y(),ee(te,null,[l(d,{title:t(o)("basicUsage")},{default:s(()=>[l(t(b),null,{left:s(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:s(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"]),l(t(p),{square:"",type:"primary",text:t(o)("collect")},null,8,["text"])]),default:s(()=>[l(t(q),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"]),l(d,{title:t(o)("customContent")},{default:s(()=>[l(t(b),null,{right:s(()=>[l(t(p),{square:"",type:"danger",class:"delete-button",text:t(o)("delete")},null,8,["text"])]),default:s(()=>[l(t(oe),{num:"2",price:"2.00",desc:t(o)("desc"),title:t(o)("cardTitle"),thumb:t(f)},null,8,["desc","title","thumb"])]),_:1})]),_:1},8,["title"]),l(d,{title:t(o)("beforeClose")},{default:s(()=>[l(t(b),{"before-close":i},{left:s(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:s(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"])]),default:s(()=>[l(t(q),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"])],64)}}});export{Fe as default};
