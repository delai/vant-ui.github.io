import{A as V,D as x,e as h,Q,u as B,x as $,M as Te,H as we,q as R,J as Ce,B as ke,E as Ie,P as xe,j as Be,v as Re}from"./vue-libs-b2a2f6f9.js";import{K,L as $e,M as Ae,c as D,i as q,N as Pe,b as Oe,I as Ne,w as je,o as ze,n as _e,O as Le,h as ee,A as Ee,P as te,p as Me,s as ne,u as He,Q as Ve,e as De}from"./use-translate-bcc9285c.js";import{u as oe}from"./use-id-92cebd14.js";import{u as U}from"./use-expose-52ca271b.js";import{a as We,r as Ze}from"./use-route-efd4b866.js";import{S as Fe,a as Ke}from"./index-48ea421e.js";import{n as A,t as H,d as Z,m as qe,c as E,u as Qe,w as le}from"./with-install-c0de7835.js";import{u as Ue}from"./use-refs-06cfd58f.js";import{o as Xe}from"./on-popup-reopen-e5b691e6.js";import{S as Ye}from"./index-2274e31b.js";import{B as Je}from"./index-3cdd9fde.js";import{b as Ge}from"./constant-a81ffd37.js";import{c as pe}from"./interceptor-e1e3c393.js";function et(e,i,o){let f=0;const a=e.scrollLeft,b=o===0?1:Math.round(o*1e3/16);function c(){e.scrollLeft+=(i-a)/b,++f<b&&K(c)}c()}function tt(e,i,o,f){let a=$e(e);const b=a<i,c=o===0?1:Math.round(o*1e3/16),u=(i-a)/c;function l(){a+=u,(b&&a>i||!b&&a<i)&&(a=i),Ae(e,a),b&&a<i||!b&&a>i?K(l):f&&K(f)}l()}function nt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Q(e)}const[at,ae]=D("tab"),it=V({name:at,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:A,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:H},setup(e,{slots:i}){const o=x(()=>{const a={},{type:b,color:c,disabled:u,isActive:l,activeColor:S,inactiveColor:g}=e;c&&b==="card"&&(a.borderColor=c,u||(l?a.backgroundColor=c:a.color=c));const w=l?S:g;return w&&(a.color=w),a}),f=()=>{const a=h("span",{class:ae("text",{ellipsis:!e.scrollable})},[i.title?i.title():e.title]);return e.dot||q(e.badge)&&e.badge!==""?h(Je,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},nt(a)?a:{default:()=>[a]}):a};return()=>h("div",{id:e.id,role:"tab",class:[ae([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:o.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[f()])}});function ot(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Q(e)}const[lt,ie]=D("tabs"),rt=V({name:lt,props:{count:Z(Number),inited:Boolean,animated:Boolean,duration:Z(A),swipeable:Boolean,lazyRender:Boolean,currentIndex:Z(Number)},emits:["change"],setup(e,{emit:i,slots:o}){const f=B(),a=u=>i("change",u),b=()=>{var l;const u=(l=o.default)==null?void 0:l.call(o);return e.animated||e.swipeable?h(Fe,{ref:f,loop:!1,class:ie("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:a},ot(u)?u:{default:()=>[u]}):u},c=u=>{const l=f.value;l&&l.state.active!==u&&l.swipeTo(u,{immediate:!e.inited})};return $(()=>e.currentIndex,c),Te(()=>{c(e.currentIndex)}),U({swipeRef:f}),()=>h("div",{class:ie("content",{animated:e.animated||e.swipeable})},[b()])}});function ct(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Q(e)}const[re,M]=D("tabs"),st={type:qe("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:E(0),duration:E(.3),animated:Boolean,ellipsis:H,swipeable:Boolean,scrollspy:Boolean,offsetTop:E(0),background:String,lazyRender:H,lineWidth:A,lineHeight:A,beforeChange:Function,swipeThreshold:E(5),titleActiveColor:String,titleInactiveColor:String},ce=Symbol(re),dt=V({name:re,props:st,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:i,slots:o}){let f,a,b;const c=B(),u=B(),l=B(),S=B(),g=oe(),T=Pe(c),[w,O]=Ue(),{children:d,linkChildren:N}=Oe(ce),s=we({inited:!1,position:"",lineStyle:{},currentIndex:-1}),P=x(()=>d.length>e.swipeThreshold||!e.ellipsis||e.shrink),j=x(()=>({borderColor:e.color,background:e.background})),C=(t,n)=>t.name??n,X=x(()=>{const t=d[s.currentIndex];if(t)return C(t,s.currentIndex)}),W=x(()=>Ne(e.offsetTop)),Y=x(()=>e.sticky?W.value+f:0),z=t=>{const n=u.value,r=w.value;if(!P.value||!n||!r||!r[s.currentIndex])return;const m=r[s.currentIndex].$el,v=m.offsetLeft-(n.offsetWidth-m.offsetWidth)/2;et(n,v,t?0:+e.duration)},k=()=>{const t=s.inited;R(()=>{const n=w.value;if(!n||!n[s.currentIndex]||e.type!=="line"||Le(c.value))return;const r=n[s.currentIndex].$el,{lineWidth:m,lineHeight:v}=e,y=r.offsetLeft+r.offsetWidth/2,I={width:ee(m),backgroundColor:e.color,transform:`translateX(${y}px) translateX(-50%)`};if(t&&(I.transitionDuration=`${e.duration}s`),q(v)){const p=ee(v);I.height=p,I.borderRadius=p}s.lineStyle=I})},de=t=>{const n=t<s.currentIndex?-1:1;for(;t>=0&&t<d.length;){if(!d[t].disabled)return t;t+=n}},_=(t,n)=>{const r=de(t);if(!q(r))return;const m=d[r],v=C(m,r),y=s.currentIndex!==null;s.currentIndex!==r&&(s.currentIndex=r,n||z(),k()),v!==e.active&&(i("update:active",v),y&&i("change",v,m.title)),b&&!e.scrollspy&&Ee(Math.ceil(te(c.value)-W.value))},L=(t,n)=>{const r=d.find((v,y)=>C(v,y)===t),m=r?d.indexOf(r):0;_(m,n)},J=(t=!1)=>{if(e.scrollspy){const n=d[s.currentIndex].$el;if(n&&T.value){const r=te(n,T.value)-Y.value;a=!0,tt(T.value,r,t?0:+e.duration,()=>{a=!1})}}},ue=(t,n,r)=>{const{title:m,disabled:v}=d[n],y=C(d[n],n);v||(pe(e.beforeChange,{args:[y],done:()=>{_(n),J()}}),We(t)),i("clickTab",{name:y,title:m,event:r,disabled:v})},fe=t=>{b=t.isFixed,i("scroll",t)},be=t=>{R(()=>{L(t),J(!0)})},ve=()=>{for(let t=0;t<d.length;t++){const{top:n}=ne(d[t].$el);if(n>Y.value)return t===0?0:t-1}return d.length-1},he=()=>{if(e.scrollspy&&!a){const t=ve();_(t)}},me=()=>d.map((t,n)=>h(it,ke({key:t.id,id:`${g}-${n}`,ref:O(n),type:e.type,color:e.color,style:t.titleStyle,class:t.titleClass,shrink:e.shrink,isActive:n===s.currentIndex,controls:t.id,scrollable:P.value,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:r=>ue(t,n,r)},Me(t,["dot","badge","title","disabled","showZeroBadge"])),{title:t.$slots.title})),ge=()=>{if(e.type==="line"&&d.length)return h("div",{class:M("line"),style:s.lineStyle},null)},G=()=>{var v,y,I;const{type:t,border:n,sticky:r}=e,m=[h("div",{ref:r?void 0:l,class:[M("wrap"),{[Ge]:t==="line"&&n}]},[h("div",{ref:u,role:"tablist",class:M("nav",[t,{shrink:e.shrink,complete:P.value}]),style:j.value,"aria-orientation":"horizontal"},[(v=o["nav-left"])==null?void 0:v.call(o),me(),ge(),(y=o["nav-right"])==null?void 0:y.call(o)])]),(I=o["nav-bottom"])==null?void 0:I.call(o)];return r?h("div",{ref:l},[m]):m};$([()=>e.color,je],k),$(()=>e.active,t=>{t!==X.value&&L(t)}),$(()=>d.length,()=>{s.inited&&(L(e.active),k(),R(()=>{z(!0)}))});const ye=()=>{L(e.active,!0),R(()=>{s.inited=!0,l.value&&(f=ne(l.value).height),z(!0)})},Se=(t,n)=>i("rendered",t,n);return U({resize:()=>{k(),R(()=>{var t,n;return(n=(t=S.value)==null?void 0:t.swipeRef.value)==null?void 0:n.resize()})},scrollTo:be}),Ce(k),Xe(k),ze(ye),_e("scroll",he,{target:T,passive:!0}),N({id:g,props:e,setLine:k,onRendered:Se,currentName:X,scrollIntoView:z}),()=>{let t;return h("div",{ref:c,class:M([e.type])},[e.sticky?h(Ye,{container:c.value,offsetTop:W.value,onScroll:fe},ct(t=G())?t:{default:()=>[t]}):G(),h(rt,{ref:S,count:d.length,inited:s.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:s.currentIndex,onChange:_},{default:()=>{var n;return[(n=o.default)==null?void 0:n.call(o)]}})])}}}),se=Symbol(),Pt=()=>Ie(se,null),[ut,F]=D("tab"),ft=De({},Ze,{dot:Boolean,name:A,badge:A,title:String,disabled:Boolean,titleClass:Qe,titleStyle:[String,Object],showZeroBadge:H}),bt=V({name:ut,props:ft,setup(e,{slots:i}){const o=oe(),f=B(!1),{parent:a,index:b}=He(ce);if(!a)return;const c=()=>e.name??b.value,u=()=>{f.value=!0,a.props.lazyRender&&R(()=>{a.onRendered(c(),e.title)})},l=x(()=>{const g=c()===a.currentName.value;return g&&!f.value&&u(),g}),S=B(!l.value);return $(l,g=>{g?S.value=!1:Ve(()=>{S.value=!0})}),$(()=>e.title,()=>{a.setLine(),a.scrollIntoView()}),xe(se,l),()=>{var j;const g=`${a.id}-${b.value}`,{animated:T,swipeable:w,scrollspy:O,lazyRender:d}=a.props;if(!i.default&&!T)return;const N=O||l.value;if(T||w)return h(Ke,{id:o,role:"tabpanel",class:F("panel-wrapper",{inactive:S.value}),tabindex:l.value?0:-1,"aria-hidden":!l.value,"aria-labelledby":g},{default:()=>{var C;return[h("div",{class:F("panel")},[(C=i.default)==null?void 0:C.call(i)])]}});const P=f.value||O||!d?(j=i.default)==null?void 0:j.call(i):null;return U({id:o}),Be(h("div",{id:o,role:"tabpanel",class:F("panel"),tabindex:N?0:-1,"aria-labelledby":g},[P]),[[Re,N]])}}}),vt=le(bt),Ot=vt,ht=le(dt),Nt=ht;export{ht as T,Ot as V,vt as a,Nt as b,Pt as u};
