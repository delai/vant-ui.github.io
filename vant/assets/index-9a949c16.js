import{I as B}from"./index-13130ea7.js";import{A as $,u,O as j,D,x as V,I as C,M,q as P,e as n,j as N,V as O,B as b}from"./vue-libs-b2a2f6f9.js";import{h as f,i as R,d as U,c as q}from"./use-translate-bcc9285c.js";import{n as d,t as z,m as S,w as A}from"./with-install-c0de7835.js";const[F,t]=q("image"),T={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:z,errorIcon:S("photo-fail"),iconPrefix:String,showLoading:z,loadingIcon:S("photo")},_=$({name:F,props:T,emits:["load","error"],setup(r,{emit:g,slots:i}){const c=u(!1),a=u(!0),o=u(),{$Lazyload:l}=j().proxy,x=D(()=>{const e={width:f(r.width),height:f(r.height)};return R(r.radius)&&(e.overflow="hidden",e.borderRadius=f(r.radius)),e});V(()=>r.src,()=>{c.value=!1,a.value=!0});const m=e=>{a.value&&(a.value=!1,g("load",e))},v=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:o.value,enumerable:!0}),m(e)},h=e=>{c.value=!0,a.value=!1,g("error",e)},I=(e,s,L)=>L?L():n(B,{name:e,size:r.iconSize,class:s,classPrefix:r.iconPrefix},null),E=()=>{if(a.value&&r.showLoading)return n("div",{class:t("loading")},[I(r.loadingIcon,t("loading-icon"),i.loading)]);if(c.value&&r.showError)return n("div",{class:t("error")},[I(r.errorIcon,t("error-icon"),i.error)])},k=()=>{if(c.value||!r.src)return;const e={alt:r.alt,class:t("img"),style:{objectFit:r.fit,objectPosition:r.position}};return r.lazyLoad?N(n("img",b({ref:o},e),null),[[O("lazy"),r.src]]):n("img",b({ref:o,src:r.src,onLoad:m,onError:h},e),null)},w=({el:e})=>{const s=()=>{e===o.value&&a.value&&v()};o.value?s():P(s)},y=({el:e})=>{e===o.value&&!c.value&&h()};return l&&U&&(l.$on("loaded",w),l.$on("error",y),C(()=>{l.$off("loaded",w),l.$off("error",y)})),M(()=>{P(()=>{var e;(e=o.value)!=null&&e.complete&&v()})}),()=>{var e;return n("div",{class:t({round:r.round,block:r.block}),style:x.value},[k(),E(),(e=i.default)==null?void 0:e.call(i)])}}}),G=A(_),W=G;export{G as I,W as V};
