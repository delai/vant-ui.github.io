import{A as _,a,b as u}from"./index.bbc107cb.js";import{c as I,e as k,u as A,a as E}from"./use-translate.d627ebf3.js";import{n as F,u as P,w as h}from"./with-install.9724bc72.js";import{r as D,u as y}from"./use-route.9fd68ea8.js";import{B as w,I as v}from"./index.72703c04.js";import{z as C,e as n,A as S,r as N,o as T,a as z,w as c,B as t,F as O}from"./vue-libs.bf80eadf.js";import{T as B}from"./function-call.74fb28dc.js";import"./use-expose.36b4c9ee.js";import"./index.11b1af40.js";import"./constant.80c6de18.js";import"./index.4414d46f.js";import"./mount-component.18fa5b79.js";import"./index.80eefc7f.js";import"./interceptor.5b737db1.js";import"./use-touch.b6ff7b52.js";import"./use-lazy-render.d79b7d1e.js";import"./on-popup-reopen.e08ee506.js";import"./index.b391be49.js";const[R,m]=I("action-bar-icon"),U=k({},D,{dot:Boolean,text:String,icon:String,color:String,badge:F,iconClass:P,badgeProps:Object,iconPrefix:String});var j=C({name:R,props:U,setup(r,{slots:o}){const i=y();A(_);const s=()=>{const{dot:d,badge:x,icon:l,color:f,iconClass:b,badgeProps:p,iconPrefix:g}=r;return o.icon?n(w,S({dot:d,class:m("icon"),content:x},p),{default:o.icon}):n(v,{tag:"div",dot:d,name:l,badge:x,color:f,class:[m("icon"),b],badgeProps:p,classPrefix:g},null)};return()=>n("div",{role:"button",class:m(),tabindex:0,onClick:i},[s(),o.default?o.default():r.text])}});const e=h(j);const ct=C({setup(r){const o=E({"zh-CN":{icon1:"\u5BA2\u670D",icon2:"\u8D2D\u7269\u8F66",icon3:"\u5E97\u94FA",button1:"\u52A0\u5165\u8D2D\u7269\u8F66",button2:"\u7ACB\u5373\u8D2D\u4E70",iconBadge:"\u5FBD\u6807\u63D0\u793A",collected:"\u5DF2\u6536\u85CF",clickIcon:"\u70B9\u51FB\u56FE\u6807",clickButton:"\u70B9\u51FB\u6309\u94AE",customIconColor:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",customButtonColor:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"},"en-US":{icon1:"Icon1",icon2:"Icon2",icon3:"Icon3",button1:"Button",button2:"Button",iconBadge:"Icon Badge",collected:"Collected",clickIcon:"Click Icon",clickButton:"Click Button",customIconColor:"Custom Icon Color",customButtonColor:"Custom Button Color"}}),i=()=>B(o("clickIcon")),s=()=>B(o("clickButton"));return(d,x)=>{const l=N("demo-block");return T(),z(O,null,[n(l,{title:t(o)("basicUsage")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),onClick:i},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2"),onClick:i},null,8,["text"]),n(t(e),{icon:"shop-o",text:t(o)("icon3"),onClick:i},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2"),onClick:s},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("iconBadge")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",dot:"",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",badge:"5",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"shop-o",badge:"12",text:t(o)("icon3")},null,8,["text"]),n(t(u),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("customIconColor")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),color:"#ee0a24"},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"star",text:t(o)("collected"),color:"#ff5000"},null,8,["text"]),n(t(u),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("customButtonColor")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(u),{color:"#be99ff",type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{color:"#7232dd",type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{ct as default};
