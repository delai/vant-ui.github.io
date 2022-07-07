import{c as E,L as b,l as w,K as y}from"./use-translate.fbf36f21.js";import{c as h,n as L,w as _}from"./with-install.251697cd.js";import{u as $}from"./use-touch.b6ff7b52.js";import{L as A}from"./index.d99a07cf.js";import{z as N,D as R,H as B,x as I,e as l,q as M}from"./vue-libs.bf80eadf.js";const[U,r,Y]=E("pull-refresh"),S=50,q=["pulling","loosing","success"],z={disabled:Boolean,modelValue:Boolean,headHeight:h(S),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:L,successDuration:h(500),animationDuration:h(300)};var C=N({name:U,props:z,emits:["refresh","update:modelValue"],setup(a,{emit:f,slots:n}){let u;const m=R(),x=b(m),e=B({status:"normal",distance:0,duration:0}),i=$(),v=()=>{if(a.headHeight!==S)return{height:`${a.headHeight}px`}},d=()=>e.status!=="loading"&&e.status!=="success"&&!a.disabled,H=t=>{const s=+(a.pullDistance||a.headHeight);return t>s&&(t<s*2?t=s+(t-s)/2:t=s*1.5+(t-s*2)/4),Math.round(t)},o=(t,s)=>{const c=+(a.pullDistance||a.headHeight);e.distance=t,s?e.status="loading":t===0?e.status="normal":t<c?e.status="pulling":e.status="loosing"},g=()=>{const{status:t}=e;return t==="normal"?"":a[`${t}Text`]||Y(t)},P=()=>{const{status:t,distance:s}=e;if(n[t])return n[t]({distance:s});const c=[];return q.includes(t)&&c.push(l("div",{class:r("text")},[g()])),t==="loading"&&c.push(l(A,{class:r("loading")},{default:g})),c},p=()=>{e.status="success",setTimeout(()=>{o(0)},+a.successDuration)},T=t=>{u=y(x.value)===0,u&&(e.duration=0,i.start(t))},V=t=>{d()&&T(t)},k=t=>{if(d()){u||T(t);const{deltaY:s}=i;i.move(t),u&&s.value>=0&&i.isVertical()&&(w(t),o(H(s.value)))}},D=()=>{u&&i.deltaY.value&&d()&&(e.duration=+a.animationDuration,e.status==="loosing"?(o(+a.headHeight,!0),f("update:modelValue",!0),M(()=>f("refresh"))):o(0))};return I(()=>a.modelValue,t=>{e.duration=+a.animationDuration,t?o(+a.headHeight,!0):n.success||a.successText?p():o(0,!1)}),()=>{var s;const t={transitionDuration:`${e.duration}ms`,transform:e.distance?`translate3d(0,${e.distance}px, 0)`:""};return l("div",{ref:m,class:r()},[l("div",{class:r("track"),style:t,onTouchstart:V,onTouchmove:k,onTouchend:D,onTouchcancel:D},[l("div",{class:r("head"),style:v()},[P()]),(s=n.default)==null?void 0:s.call(n)])])}}});const J=_(C);export{J as P};
