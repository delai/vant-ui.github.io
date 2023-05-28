import{m as le,u as re}from"./mount-component-5de093da.js";import{n as ce,c as K,l as $,H as x,L as me,s as Q,w as ue,r as ve,p as ge,d as de,e as fe}from"./use-translate-982dff2e.js";import{u as he}from"./use-expose-1bc17a0b.js";import{I as we}from"./index-e4434a2e.js";import{a as Pe,S as Ie}from"./index-788bb0c5.js";import{P as Se}from"./index-b2934b31.js";import{u as xe}from"./use-touch-87b155f0.js";import{I as ye}from"./index-4d11b537.js";import{L as be}from"./index-265efaae.js";import{A as J,H as ee,y as Z,D as H,u as Y,e as m,M as Ce,q as pe,B as oe,Q as Te}from"./vue-libs-6a67f9c6.js";import{d as D,n as F,t as M,b as Ye,c as N,u as q,m as U}from"./with-install-3eab31d5.js";import{L as Xe,H as Ze}from"./constant-00b7fd44.js";import{c as Re}from"./interceptor-5aa62d1f.js";const V=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),ze=e=>({x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}),k=K("image-preview")[1],G=2.6,He=J({props:{src:String,show:Boolean,active:Number,minZoom:D(F),maxZoom:D(F),rootWidth:D(Number),rootHeight:D(Number),disableZoom:Boolean},emits:["scale","close","longPress"],setup(e,{emit:r,slots:u}){const o=ee({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,initializing:!1,imageRatio:0}),s=xe(),y=Z(),R=Z(),w=Z(!1),d=Z(!1);let P=0;const E=H(()=>{const{scale:t,moveX:a,moveY:n,moving:l,zooming:c,initializing:p}=o,z={transitionDuration:c||l||p?"0s":".3s"};return(t!==1||d.value)&&(z.transform=`matrix(${t}, 0, 0, ${t}, ${a}, ${n})`),z}),v=H(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:a}=e,n=w.value?a/o.imageRatio:t;return Math.max(0,(o.scale*n-t)/2)}return 0}),h=H(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:a}=e,n=w.value?a:t*o.imageRatio;return Math.max(0,(o.scale*n-a)/2)}return 0}),b=(t,a)=>{var n;if(t=x(t,+e.minZoom,+e.maxZoom+1),t!==o.scale){const l=t/o.scale;if(o.scale=t,a){const c=Q((n=y.value)==null?void 0:n.$el),p={x:c.width*.5,y:c.height*.5},z=o.moveX-(a.x-c.left-p.x)*(l-1),ne=o.moveY-(a.y-c.top-p.y)*(l-1);o.moveX=x(z,-v.value,v.value),o.moveY=x(ne,-h.value,h.value)}else o.moveX=0,o.moveY=d.value?P:0;r("scale",{scale:t,index:e.active})}},C=()=>{b(1)},A=()=>{const t=o.scale>1?1:2;b(t,t===2||d.value?{x:s.startX.value,y:s.startY.value}:void 0)};let I,S,i,f,g,L,X,O,_=!1;const te=t=>{const{touches:a}=t;if(I=a.length,I===2&&e.disableZoom)return;const{offsetX:n}=s;s.start(t),S=o.moveX,i=o.moveY,O=Date.now(),_=!1,o.moving=I===1&&(o.scale!==1||d.value),o.zooming=I===2&&!n.value,o.zooming&&(f=o.scale,g=V(a))},ae=t=>{const{touches:a}=t;if(s.move(t),o.moving){const{deltaX:n,deltaY:l}=s,c=n.value+S,p=l.value+i;if((c>v.value||c<-v.value)&&!_&&s.isHorizontal()){o.moving=!1;return}_=!0,$(t,!0),o.moveX=x(c,-v.value,v.value),o.moveY=x(p,-h.value,h.value)}if(o.zooming&&($(t,!0),a.length===2)){const n=V(a),l=f*n/g;L=ze(a),b(l,L)}},se=()=>{if(I>1)return;const{offsetX:t,offsetY:a}=s,n=Date.now()-O,l=250,c=5;t.value<c&&a.value<c&&(n<l?X?(clearTimeout(X),X=null,A()):X=setTimeout(()=>{r("close"),X=null},l):n>Xe&&r("longPress"))},B=t=>{let a=!1;if((o.moving||o.zooming)&&(a=!0,o.moving&&S===o.moveX&&i===o.moveY&&(a=!1),!t.touches.length)){o.zooming&&(o.moveX=x(o.moveX,-v.value,v.value),o.moveY=x(o.moveY,-h.value,h.value),o.zooming=!1),o.moving=!1,S=0,i=0,f=1,o.scale<1&&C();const n=+e.maxZoom;o.scale>n&&b(n,L)}$(t,a),se(),s.reset()},j=()=>{const{rootWidth:t,rootHeight:a}=e,n=a/t,{imageRatio:l}=o;w.value=o.imageRatio>n&&l<G,d.value=o.imageRatio>n&&l>=G,d.value&&(P=(l*t-a)/2,o.moveY=P,o.initializing=!0,me(()=>{o.initializing=!1})),C()},ie=t=>{const{naturalWidth:a,naturalHeight:n}=t.target;o.imageRatio=n/a,j()};return Y(()=>e.active,C),Y(()=>e.show,t=>{t||C()}),Y(()=>[e.rootWidth,e.rootHeight],j),ce("touchmove",ae,{target:H(()=>{var t;return(t=R.value)==null?void 0:t.$el})}),()=>{const t={loading:()=>m(be,{type:"spinner"},null)};return m(Pe,{ref:R,class:k("swipe-item"),onTouchstartPassive:te,onTouchend:B,onTouchcancel:B},{default:()=>[u.image?m("div",{class:k("image-wrap")},[u.image({src:e.src})]):m(ye,{ref:y,src:e.src,fit:"contain",class:k("image",{vertical:w.value}),style:E.value,onLoad:ie},t)]})}}});function De(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Te(e)}const[Me,T]=K("image-preview"),Ne=["show","teleport","transition","overlayStyle","closeOnPopstate"],We={show:Boolean,loop:M,images:Ye(),minZoom:N(1/3),maxZoom:N(3),overlay:M,closeable:Boolean,showIndex:M,className:q,closeIcon:U("clear"),transition:String,beforeClose:Function,overlayClass:q,overlayStyle:Object,swipeDuration:N(300),startPosition:N(0),showIndicators:Boolean,closeOnPopstate:M,closeIconPosition:U("top-right"),teleport:[String,Object]},Ee=J({name:Me,props:We,emits:["scale","close","closed","change","longPress","update:show"],setup(e,{emit:r,slots:u}){const o=Z(),s=ee({active:0,rootWidth:0,rootHeight:0,disableZoom:!1}),y=()=>{if(o.value){const i=Q(o.value.$el);s.rootWidth=i.width,s.rootHeight=i.height,o.value.resize()}},R=i=>r("scale",i),w=i=>r("update:show",i),d=()=>{Re(e.beforeClose,{args:[s.active],done:()=>w(!1)})},P=i=>{i!==s.active&&(s.active=i,r("change",i))},E=()=>{if(e.showIndex)return m("div",{class:T("index")},[u.index?u.index({index:s.active}):`${s.active+1} / ${e.images.length}`])},v=()=>{if(u.cover)return m("div",{class:T("cover")},[u.cover()])},h=()=>{s.disableZoom=!0},b=()=>{s.disableZoom=!1},C=()=>{let i;return m(Ie,{ref:o,lazyRender:!0,loop:e.loop,class:T("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:P,onDragEnd:b,onDragStart:h},De(i=e.images.map((f,g)=>m(He,{src:f,show:e.show,active:s.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:s.rootWidth,rootHeight:s.rootHeight,disableZoom:s.disableZoom,onScale:R,onClose:d,onLongPress:()=>r("longPress",{index:g})},{image:u.image})))?i:{default:()=>[i]})},A=()=>{if(e.closeable)return m(we,{role:"button",name:e.closeIcon,class:[T("close-icon",e.closeIconPosition),Ze],onClick:d},null)},I=()=>r("closed"),S=(i,f)=>{var g;return(g=o.value)==null?void 0:g.swipeTo(i,f)};return he({swipeTo:S}),Ce(y),Y([ue,ve],y),Y(()=>e.startPosition,i=>P(+i)),Y(()=>e.show,i=>{const{images:f,startPosition:g}=e;i?(P(+g),pe(()=>{y(),S(+g,{immediate:!0})})):r("close",{index:s.active,url:f[s.active]})}),()=>m(Se,oe({class:[T(),e.className],overlayClass:[T("overlay"),e.overlayClass],onClosed:I,"onUpdate:show":w},ge(e,Ne)),{default:()=>[A(),C(),E(),v()]})}});let W;const Ae={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function Le(){({instance:W}=le({setup(){const{state:e,toggle:r}=re(),u=()=>{e.images=[]};return()=>m(Ee,oe(e,{onClosed:u,"onUpdate:show":r}),null)}}))}const Je=(e,r=0)=>{if(de)return W||Le(),e=Array.isArray(e)?{images:e,startPosition:r}:e,W.open(fe({},Ae,e)),W};export{Ee as _,Je as s};