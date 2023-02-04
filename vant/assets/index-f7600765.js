import{u as H}from"./use-id-92cebd14.js";import{b as F,N as K,i as L,$ as Q,n as Y,c as B,s as Z,r as q,u as G,t as J,a as X}from"./use-translate-ee29e3a6.js";import{A as E,u as b,D as I,e as t,H as ee,S as te,Q as oe,j as le,v as ne,B as ae,r as ie,o as se,a as ue,w as c,C as e,d as re,g as de,t as pe,F as ce}from"./vue-libs-b2a2f6f9.js";import{t as S,n as me,c as ve,m as fe,w as M,b as Ve,u as z}from"./with-install-80752cfa.js";import{H as we}from"./constant-a81ffd37.js";import{u as Ce}from"./use-expose-036fc7b9.js";import{C as xe,V as N}from"./index-9cb93dc5.js";import{I as be}from"./index-371c1dc5.js";import{P as ge}from"./index-b4bc783b.js";import{V as $}from"./index-8ccf840f.js";import{V as ye}from"./index-788b5356.js";import"./use-route-efd4b866.js";import"./index-3a4224e7.js";import"./use-touch-8f92051d.js";import"./use-lazy-render-927fe2b4.js";import"./on-popup-reopen-e5b691e6.js";import"./index-a0e83f53.js";import"./interceptor-b9f6d9ac.js";import"./index-6e04c06e.js";const[W,T]=B("dropdown-menu"),Oe={overlay:S,zIndex:me,duration:ve(.2),direction:fe("down"),activeColor:String,closeOnClickOutside:S,closeOnClickOverlay:S},R=Symbol(W),ke=E({name:W,props:Oe,setup(a,{slots:i}){const m=H(),C=b(),u=b(),s=b(0),{children:d,linkChildren:v}=F(R),x=K(C),g=I(()=>d.some(r=>r.state.showWrapper)),y=I(()=>{if(g.value&&L(a.zIndex))return{zIndex:+a.zIndex+1}}),l=()=>{a.closeOnClickOutside&&d.forEach(r=>{r.toggle(!1)})},V=()=>{if(u.value){const r=Z(u);a.direction==="down"?s.value=r.bottom:s.value=q.value-r.top}},n=()=>{g.value&&V()},U=r=>{d.forEach((o,p)=>{p===r?(V(),o.toggle()):o.state.showPopup&&o.toggle(!1,{immediate:!0})})},A=(r,o)=>{const{showPopup:p}=r.state,{disabled:f,titleClass:O}=r;return t("div",{id:`${m}-${o}`,role:"button",tabindex:f?void 0:0,class:[T("item",{disabled:f}),{[we]:!f}],onClick:()=>{f||U(o)}},[t("span",{class:[T("title",{down:p===(a.direction==="down"),active:p}),O],style:{color:p?a.activeColor:""}},[t("div",{class:"van-ellipsis"},[r.renderTitle()])])])};return v({id:m,props:a,offset:s}),Q(C,l),Y("scroll",n,{target:x,passive:!0}),()=>{var r;return t("div",{ref:C,class:T()},[t("div",{ref:u,style:y.value,class:T("bar",{opened:g.value})},[d.map(A)]),(r=i.default)==null?void 0:r.call(i)])}}}),Pe=M(ke),P=Pe;function he(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!oe(a)}const[Te,D]=B("dropdown-item"),De={title:String,options:Ve(),disabled:Boolean,teleport:[String,Object],lazyRender:S,modelValue:z,titleClass:z},Se=E({name:Te,inheritAttrs:!1,props:De,emits:["open","opened","close","closed","change","update:modelValue"],setup(a,{emit:i,slots:m,attrs:C}){const u=ee({showPopup:!1,transition:!0,showWrapper:!1}),{parent:s,index:d}=G(R);if(!s)return;const v=o=>()=>i(o),x=v("open"),g=v("close"),y=v("opened"),l=()=>{u.showWrapper=!1,i("closed")},V=o=>{a.teleport&&o.stopPropagation()},n=(o=!u.showPopup,p={})=>{o!==u.showPopup&&(u.showPopup=o,u.transition=!p.immediate,o&&(u.showWrapper=!0))},U=()=>{if(m.title)return m.title();if(a.title)return a.title;const o=a.options.find(p=>p.value===a.modelValue);return o?o.text:""},A=o=>{const{activeColor:p}=s.props,f=o.value===a.modelValue,O=()=>{u.showPopup=!1,o.value!==a.modelValue&&(i("update:modelValue",o.value),i("change",o.value))},k=()=>{if(f)return t(be,{class:D("icon"),color:p,name:"success"},null)};return t(xe,{role:"menuitem",key:o.value,icon:o.icon,title:o.text,class:D("option",{active:f}),style:{color:f?p:""},tabindex:f?0:-1,clickable:!0,onClick:O},{value:k})},r=()=>{const{offset:o}=s,{zIndex:p,overlay:f,duration:O,direction:k,closeOnClickOverlay:j}=s.props,_=J(p);return k==="down"?_.top=`${o.value}px`:_.bottom=`${o.value}px`,le(t("div",ae({style:_,class:D([k]),onClick:V},C),[t(ge,{show:u.showPopup,"onUpdate:show":h=>u.showPopup=h,role:"menu",class:D("content"),overlay:f,position:k==="down"?"top":"bottom",duration:u.transition?O:0,lazyRender:a.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":`${s.id}-${d.value}`,closeOnClickOverlay:j,onOpen:x,onClose:g,onOpened:y,onClosed:l},{default:()=>{var h;return[a.options.map(A),(h=m.default)==null?void 0:h.call(m)]}})]),[[ne,u.showWrapper]])};return Ce({state:u,toggle:n,renderTitle:U}),()=>{if(a.teleport){let o;return t(te,{to:a.teleport},he(o=r())?o:{default:()=>[o]})}return r()}}}),Ie=M(Se),w=Ie,Ue={style:{padding:"5px 16px"}},Ge=E({__name:"index",setup(a){const i=X({"zh-CN":{disableMenu:"禁用菜单",switchTitle1:"包邮",switchTitle2:"团购",itemTitle:"筛选",expandDirection:"向上展开",customContent:"自定义菜单内容",customActiveColor:"自定义选中态颜色",option1:[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}],option2:[{text:"默认排序",value:"a"},{text:"好评排序",value:"b"},{text:"销量排序",value:"c"}]},"en-US":{disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",expandDirection:"Expand Direction",customContent:"Custom Content",customActiveColor:"Custom Active Color",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}}),m=b(),C=b(!0),u=b(!1),s=b(0),d=b("a"),v=I(()=>i("option1")),x=I(()=>i("option2")),g=()=>{var y;(y=m.value)==null||y.toggle()};return(y,l)=>{const V=ie("demo-block");return se(),ue(ce,null,[t(V,{title:e(i)("basicUsage")},{default:c(()=>[t(e(P),null,{default:c(()=>[t(e(w),{modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=n=>s.value=n),options:e(v)},null,8,["modelValue","options"]),t(e(w),{modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=n=>d.value=n),options:e(x)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),t(V,{title:e(i)("customContent")},{default:c(()=>[t(e(P),null,{default:c(()=>[t(e(w),{modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=n=>s.value=n),options:e(v)},null,8,["modelValue","options"]),t(e(w),{title:e(i)("itemTitle"),ref_key:"item",ref:m},{default:c(()=>[t(e(N),{center:"",title:e(i)("switchTitle1")},{"right-icon":c(()=>[t(e($),{modelValue:C.value,"onUpdate:modelValue":l[3]||(l[3]=n=>C.value=n)},null,8,["modelValue"])]),_:1},8,["title"]),t(e(N),{center:"",title:e(i)("switchTitle2")},{"right-icon":c(()=>[t(e($),{modelValue:u.value,"onUpdate:modelValue":l[4]||(l[4]=n=>u.value=n)},null,8,["modelValue"])]),_:1},8,["title"]),re("div",Ue,[t(e(ye),{type:"primary",block:"",round:"",style:{height:"40px"},onClick:g},{default:c(()=>[de(pe(e(i)("confirm")),1)]),_:1})])]),_:1},8,["title"])]),_:1})]),_:1},8,["title"]),t(V,{title:e(i)("customActiveColor")},{default:c(()=>[t(e(P),{"active-color":"#ee0a24"},{default:c(()=>[t(e(w),{modelValue:s.value,"onUpdate:modelValue":l[5]||(l[5]=n=>s.value=n),options:e(v)},null,8,["modelValue","options"]),t(e(w),{modelValue:d.value,"onUpdate:modelValue":l[6]||(l[6]=n=>d.value=n),options:e(x)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),t(V,{title:e(i)("expandDirection")},{default:c(()=>[t(e(P),{direction:"up"},{default:c(()=>[t(e(w),{modelValue:s.value,"onUpdate:modelValue":l[7]||(l[7]=n=>s.value=n),options:e(v)},null,8,["modelValue","options"]),t(e(w),{modelValue:d.value,"onUpdate:modelValue":l[8]||(l[8]=n=>d.value=n),options:e(x)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),t(V,{title:e(i)("disableMenu")},{default:c(()=>[t(e(P),null,{default:c(()=>[t(e(w),{modelValue:s.value,"onUpdate:modelValue":l[9]||(l[9]=n=>s.value=n),disabled:"",options:e(v)},null,8,["modelValue","options"]),t(e(w),{modelValue:d.value,"onUpdate:modelValue":l[10]||(l[10]=n=>d.value=n),disabled:"",options:e(x)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"])],64)}}});export{Ge as default};
