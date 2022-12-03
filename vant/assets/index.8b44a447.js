import{n as i,m as S,c as z,t as g,w as m}from"./with-install.1dc27775.js";import{c as h,h as k,q as B,a as I}from"./use-translate.a029ce72.js";import{A as d,e,B as T,F as y,u as x,r as D,o as U,a as $,w as s,C as a,d as r,t as E}from"./vue-libs.d5ee895a.js";import{I as N}from"./index.0a9aad73.js";import{S as L}from"./index.adf65dcf.js";import{c as R}from"./index.798f6ecc.js";import"./index.3014f697.js";import"./index.cacc54a3.js";const[q,H]=h("skeleton-title"),O={round:Boolean,titleWidth:i},W=d({name:q,props:O,setup(t){return()=>e("h3",{class:H([{round:t.round}]),style:{width:k(t.titleWidth)}},null)}}),[M,j]=h("skeleton-avatar"),G={avatarSize:i,avatarShape:S("round")},P=d({name:M,props:G,setup(t){return()=>e("div",{class:j([t.avatarShape]),style:B(t.avatarSize)},null)}}),f="100%",J={round:Boolean,rowWidth:{type:i,default:f}},[K,Q]=h("skeleton-paragraph"),b=d({name:K,props:J,setup(t){return()=>e("div",{class:Q([{round:t.round}]),style:{width:t.rowWidth}},null)}}),[X,C]=h("skeleton"),Y="60%",Z={row:z(0),round:Boolean,title:Boolean,titleWidth:i,avatar:Boolean,avatarSize:i,avatarShape:S("round"),loading:g,animate:g,rowWidth:{type:[Number,String,Array],default:f}},tt=d({name:X,inheritAttrs:!1,props:Z,setup(t,{slots:n,attrs:c}){const A=()=>{if(t.avatar)return e(P,{avatarShape:t.avatarShape,avatarSize:t.avatarSize},null)},_=()=>{if(t.title)return e(W,{round:t.round,titleWidth:t.titleWidth},null)},u=l=>{const{rowWidth:o}=t;return o===f&&l===+t.row-1?Y:Array.isArray(o)?o[l]:o},w=()=>Array(+t.row).fill("").map((l,o)=>e(b,{key:o,round:t.round,rowWidth:k(u(o))},null)),V=()=>n.template?n.template():e(y,null,[A(),e("div",{class:C("content")},[_(),w()])]);return()=>{var l;return t.loading?e("div",T({class:C({animate:t.animate,round:t.round})},c),[V()]):(l=n.default)==null?void 0:l.call(n)}}}),[et,F]=h("skeleton-image"),at={imageSize:i,imageShape:S("square")},nt=d({name:et,props:at,setup(t){return()=>e("div",{class:F([t.imageShape]),style:B(t.imageSize)},[e(N,{name:"photo",class:F("icon")},null)])}}),ot=m(nt);m(W);m(P);const p=m(b),v=m(tt),rt={class:"demo-preview"},ut=["src"],lt={class:"demo-content"},st={style:{display:"flex",width:"100%"}},it={style:{flex:1,marginLeft:"16px"}},St=d({__name:"index",setup(t){const n=I({"zh-CN":{showAvatar:"\u663E\u793A\u5934\u50CF",showChildren:"\u663E\u793A\u5B50\u7EC4\u4EF6",title:"\u5173\u4E8E Vant",desc:"Vant \u662F\u4E00\u5957\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF Vue \u7EC4\u4EF6\u5E93\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u57FA\u7840\u7EC4\u4EF6\u548C\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u5FEB\u901F\u642D\u5EFA\u79FB\u52A8\u5E94\u7528\u3002",customContent:"\u81EA\u5B9A\u4E49\u5C55\u793A\u5185\u5BB9"},"en-US":{showAvatar:"Show Avatar",showChildren:"Show Children",title:"About Vant",desc:"Vant is a set of Mobile UI Components built on Vue.",customContent:"Custom Content"}}),c=x(!1);return(A,_)=>{const u=D("demo-block");return U(),$(y,null,[e(u,{title:a(n)("basicUsage")},{default:s(()=>[e(a(v),{title:"",row:3})]),_:1},8,["title"]),e(u,{title:a(n)("showAvatar")},{default:s(()=>[e(a(v),{title:"",avatar:"",row:3})]),_:1},8,["title"]),e(u,{title:a(n)("showChildren")},{default:s(()=>[e(a(L),{modelValue:c.value,"onUpdate:modelValue":_[0]||(_[0]=w=>c.value=w)},null,8,["modelValue"]),e(a(v),{title:"",avatar:"",row:3,loading:!c.value},{default:s(()=>[r("div",rt,[r("img",{src:a(R)("logo.png")},null,8,ut),r("div",lt,[r("h3",null,E(a(n)("title")),1),r("p",null,E(a(n)("desc")),1)])])]),_:1},8,["loading"])]),_:1},8,["title"]),e(u,{title:a(n)("customContent")},{default:s(()=>[e(a(v),null,{template:s(()=>[r("div",st,[e(a(ot)),r("div",it,[e(a(p),{"row-width":"60%"}),e(a(p)),e(a(p)),e(a(p))])])]),_:1})]),_:1},8,["title"])],64)}}});export{St as default};
