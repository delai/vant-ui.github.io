import{A as D,y as x,u as I,M as we,e as m,Q as U,H as Ce,D as k,q as $,J as ke,E as xe,P as Ie,j as Be,v as Re,B as Ae,O as Pe}from"./vue-libs-12a1683e.js";import{K as q,L as $e,M as Oe,c as Z,N as Ne,b as je,I as ze,w as _e,o as Le,n as Ee,O as He,h as te,i as Q,A as Me,P as ne,s as ae,u as Ve,Q as We,e as De,p as ie}from"./use-translate-eec47ef5.js";import{u as re}from"./use-id-2cc12458.js";import{u as X}from"./use-expose-963cf204.js";import{a as Ze,r as Fe}from"./use-route-3942a82f.js";import{B as Ke}from"./index-b297c6dc.js";import{d as F,n as O,m as qe,c as M,t as W,u as Qe,w as ce}from"./with-install-99dfa70d.js";import{S as Ue,a as Xe}from"./index-4151f0ce.js";import{u as Ye}from"./use-refs-a2ddf56d.js";import{o as Je}from"./on-popup-reopen-eee79bbb.js";import{u as Ge,S as pe}from"./index-fc72e717.js";import{b as et}from"./constant-a81ffd37.js";import{c as tt}from"./interceptor-a4a72906.js";function nt(e,o,a){let b=0;const i=e.scrollLeft,l=a===0?1:Math.round(a*1e3/16);function r(){e.scrollLeft+=(o-i)/l,++b<l&&q(r)}r()}function at(e,o,a,b){let i=$e(e);const l=i<o,r=a===0?1:Math.round(a*1e3/16),d=(o-i)/r;function u(){i+=d,(l&&i>o||!l&&i<o)&&(i=o),Oe(e,i),l&&i<o||!l&&i>o?q(u):b&&q(b)}u()}function it(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!U(e)}const[ot,oe]=Z("tabs"),lt=D({name:ot,props:{count:F(Number),inited:Boolean,animated:Boolean,duration:F(O),swipeable:Boolean,lazyRender:Boolean,currentIndex:F(Number)},emits:["change"],setup(e,{emit:o,slots:a}){const b=x(),i=d=>o("change",d),l=()=>{var u;const d=(u=a.default)==null?void 0:u.call(a);return e.animated||e.swipeable?m(Ue,{ref:b,loop:!1,class:oe("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:i},it(d)?d:{default:()=>[d]}):d},r=d=>{const u=b.value;u&&u.state.active!==d&&u.swipeTo(d,{immediate:!e.inited})};return I(()=>e.currentIndex,r),we(()=>{r(e.currentIndex)}),X({swipeRef:b}),()=>m("div",{class:oe("content",{animated:e.animated||e.swipeable})},[l()])}});function rt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!U(e)}const[se,V]=Z("tabs"),ct={type:qe("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:M(0),duration:M(.3),animated:Boolean,ellipsis:W,swipeable:Boolean,scrollspy:Boolean,offsetTop:M(0),background:String,lazyRender:W,lineWidth:O,lineHeight:O,beforeChange:Function,swipeThreshold:M(5),titleActiveColor:String,titleInactiveColor:String},de=Symbol(se),st=D({name:se,props:ct,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:o,slots:a}){let b,i,l;const r=x(),d=x(),u=x(),y=x(),N=re(),S=Ne(r),[h,B]=Ye(),{children:f,linkChildren:_}=je(de),s=Ce({inited:!1,position:"",lineStyle:{},currentIndex:-1}),R=k(()=>f.length>+e.swipeThreshold||!e.ellipsis||e.shrink),Y=k(()=>({borderColor:e.color,background:e.background})),A=(t,n)=>t.name??n,j=k(()=>{const t=f[s.currentIndex];if(t)return A(t,s.currentIndex)}),P=k(()=>ze(e.offsetTop)),J=k(()=>e.sticky?P.value+b:0),z=t=>{const n=d.value,c=h.value;if(!R.value||!n||!c||!c[s.currentIndex])return;const g=c[s.currentIndex].$el,v=g.offsetLeft-(n.offsetWidth-g.offsetWidth)/2;nt(n,v,t?0:+e.duration)},w=()=>{const t=s.inited;$(()=>{const n=h.value;if(!n||!n[s.currentIndex]||e.type!=="line"||He(r.value))return;const c=n[s.currentIndex].$el,{lineWidth:g,lineHeight:v}=e,T=c.offsetLeft+c.offsetWidth/2,C={width:te(g),backgroundColor:e.color,transform:`translateX(${T}px) translateX(-50%)`};if(t&&(C.transitionDuration=`${e.duration}s`),Q(v)){const H=te(v);C.height=H,C.borderRadius=H}s.lineStyle=C})},fe=t=>{const n=t<s.currentIndex?-1:1;for(;t>=0&&t<f.length;){if(!f[t].disabled)return t;t+=n}},L=(t,n)=>{const c=fe(t);if(!Q(c))return;const g=f[c],v=A(g,c),T=s.currentIndex!==null;s.currentIndex!==c&&(s.currentIndex=c,n||z(),w()),v!==e.active&&(o("update:active",v),T&&o("change",v,g.title)),l&&!e.scrollspy&&Me(Math.ceil(ne(r.value)-P.value))},E=(t,n)=>{const c=f.find((v,T)=>A(v,T)===t),g=c?f.indexOf(c):0;L(g,n)},G=(t=!1)=>{if(e.scrollspy){const n=f[s.currentIndex].$el;if(n&&S.value){const c=ne(n,S.value)-J.value;i=!0,at(S.value,c,t?0:+e.duration,()=>{i=!1})}}},be=(t,n,c)=>{const{title:g,disabled:v}=f[n],T=A(f[n],n);v||(tt(e.beforeChange,{args:[T],done:()=>{L(n),G()}}),Ze(t)),o("clickTab",{name:T,title:g,event:c,disabled:v})},ve=t=>{l=t.isFixed,o("scroll",t)},me=t=>{$(()=>{E(t),G(!0)})},he=()=>{for(let t=0;t<f.length;t++){const{top:n}=ae(f[t].$el);if(n>J.value)return t===0?0:t-1}return f.length-1},ge=()=>{if(e.scrollspy&&!i){const t=he();L(t)}},ye=()=>{if(e.type==="line"&&f.length)return m("div",{class:V("line"),style:s.lineStyle},null)},p=()=>{var v,T,C;const{type:t,border:n,sticky:c}=e,g=[m("div",{ref:c?void 0:u,class:[V("wrap"),{[et]:t==="line"&&n}]},[m("div",{ref:d,role:"tablist",class:V("nav",[t,{shrink:e.shrink,complete:R.value}]),style:Y.value,"aria-orientation":"horizontal"},[(v=a["nav-left"])==null?void 0:v.call(a),f.map(H=>H.renderTitle(be)),ye(),(T=a["nav-right"])==null?void 0:T.call(a)])]),(C=a["nav-bottom"])==null?void 0:C.call(a)];return c?m("div",{ref:u},[g]):g},ee=()=>{w(),$(()=>{var t,n;z(!0),(n=(t=y.value)==null?void 0:t.swipeRef.value)==null||n.resize()})};I(()=>[e.color,e.duration,e.lineWidth,e.lineHeight],w),I(_e,ee),I(()=>e.active,t=>{t!==j.value&&E(t)}),I(()=>f.length,()=>{s.inited&&(E(e.active),w(),$(()=>{z(!0)}))});const Te=()=>{E(e.active,!0),$(()=>{s.inited=!0,u.value&&(b=ae(u.value).height),z(!0)})},Se=(t,n)=>o("rendered",t,n);return X({resize:ee,scrollTo:me}),ke(w),Je(w),Le(Te),Ge(r,w),Ee("scroll",ge,{target:S,passive:!0}),_({id:N,props:e,setLine:w,scrollable:R,onRendered:Se,currentName:j,setTitleRefs:B,scrollIntoView:z}),()=>{let t;return m("div",{ref:r,class:V([e.type])},[e.sticky?m(pe,{container:r.value,offsetTop:P.value,onScroll:ve},rt(t=p())?t:{default:()=>[t]}):p(),m(lt,{ref:y,count:f.length,inited:s.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:s.currentIndex,onChange:L},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})])}}}),ue=Symbol(),Ot=()=>xe(ue,null);function dt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!U(e)}const[ut,le]=Z("tab"),ft=D({name:ut,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:O,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:W},setup(e,{slots:o}){const a=k(()=>{const i={},{type:l,color:r,disabled:d,isActive:u,activeColor:y,inactiveColor:N}=e;r&&l==="card"&&(i.borderColor=r,d||(u?i.backgroundColor=r:i.color=r));const h=u?y:N;return h&&(i.color=h),i}),b=()=>{const i=m("span",{class:le("text",{ellipsis:!e.scrollable})},[o.title?o.title():e.title]);return e.dot||Q(e.badge)&&e.badge!==""?m(Ke,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},dt(i)?i:{default:()=>[i]}):i};return()=>m("div",{id:e.id,role:"tab",class:[le([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:a.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[b()])}}),[bt,K]=Z("tab"),vt=De({},Fe,{dot:Boolean,name:O,badge:O,title:String,disabled:Boolean,titleClass:Qe,titleStyle:[String,Object],showZeroBadge:W}),mt=D({name:bt,props:vt,setup(e,{slots:o}){const a=re(),b=x(!1),i=Pe(),{parent:l,index:r}=Ve(de);if(!l)return;const d=()=>e.name??r.value,u=()=>{b.value=!0,l.props.lazyRender&&$(()=>{l.onRendered(d(),e.title)})},y=k(()=>{const h=d()===l.currentName.value;return h&&!b.value&&u(),h}),N=h=>m(ft,Ae({key:a,id:`${l.id}-${r.value}`,ref:l.setTitleRefs(r.value),style:e.titleStyle,class:e.titleClass,isActive:y.value,controls:a,scrollable:l.scrollable.value,activeColor:l.props.titleActiveColor,inactiveColor:l.props.titleInactiveColor,onClick:B=>h(i.proxy,r.value,B)},ie(l.props,["type","color","shrink"]),ie(e,["dot","badge","title","disabled","showZeroBadge"])),{title:o.title}),S=x(!y.value);return I(y,h=>{h?S.value=!1:We(()=>{S.value=!0})}),I(()=>e.title,()=>{l.setLine(),l.scrollIntoView()}),Ie(ue,y),X({id:a,renderTitle:N}),()=>{var j;const h=`${l.id}-${r.value}`,{animated:B,swipeable:f,scrollspy:_,lazyRender:s}=l.props;if(!o.default&&!B)return;const R=_||y.value;if(B||f)return m(Xe,{id:a,role:"tabpanel",class:K("panel-wrapper",{inactive:S.value}),tabindex:y.value?0:-1,"aria-hidden":!y.value,"aria-labelledby":h},{default:()=>{var P;return[m("div",{class:K("panel")},[(P=o.default)==null?void 0:P.call(o)])]}});const A=b.value||_||!s?(j=o.default)==null?void 0:j.call(o):null;return Be(m("div",{id:a,role:"tabpanel",class:K("panel"),tabindex:R?0:-1,"aria-labelledby":h},[A]),[[Re,R]])}}}),ht=ce(mt),Nt=ht,gt=ce(st),jt=gt;export{gt as T,Nt as V,ht as a,jt as b,Ot as u};