import{c as _,A as L,x as H,q as V,i as J,e as U,E as X,s as K,p as P}from"./use-translate.85b7fc27.js";import{n as Q,d as W,c as R,m as I,t as k,b as Y,w as Z}from"./with-install.d26e13af.js";import{u as $}from"./use-expose.b85ae184.js";import{I as F}from"./index.33ef0a36.js";import{I as ee}from"./function-call.957db58b.js";import{c as ae}from"./interceptor.de8ff612.js";import{I as te}from"./index.c79d2652.js";import{L as le}from"./index.4d0d76f2.js";import{A as D,e as r,x as ne,J as re,B as ie,H as oe}from"./vue-libs.a3cd7f61.js";const[se,i,ce]=_("uploader");function S(e,t){return new Promise(o=>{if(t==="file"){o();return}const c=new FileReader;c.onload=m=>{o(m.target.result)},t==="dataUrl"?c.readAsDataURL(e):t==="text"&&c.readAsText(e)})}function O(e,t){return L(e).some(o=>o.file?H(t)?t(o.file):o.file.size>t:!1)}function ue(e,t){const o=[],c=[];return e.forEach(m=>{O(m,t)?c.push(m):o.push(m)}),{valid:o,invalid:c}}const de=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,fe=e=>de.test(e);function B(e){return e.isImage?!0:e.file&&e.file.type?e.file.type.indexOf("image")===0:e.url?fe(e.url):typeof e.content=="string"?e.content.indexOf("data:image")===0:!1}var me=D({props:{name:Q,item:W(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,previewSize:[Number,String,Array],beforeDelete:Function},emits:["delete","preview"],setup(e,{emit:t,slots:o}){const c=()=>{const{status:l,message:u}=e.item;if(l==="uploading"||l==="failed"){const w=l==="failed"?r(F,{name:"close",class:i("mask-icon")},null):r(le,{class:i("loading")},null),f=J(u)&&u!=="";return r("div",{class:i("mask")},[w,f&&r("div",{class:i("mask-message")},[u])])}},m=l=>{const{name:u,item:w,index:f,beforeDelete:x}=e;l.stopPropagation(),ae(x,{args:[w,{name:u,index:f}],done:()=>t("delete")})},v=()=>t("preview"),b=()=>{if(e.deletable&&e.item.status!=="uploading"){const l=o["preview-delete"];return r("div",{role:"button",class:i("preview-delete",{shadow:!l}),tabindex:0,"aria-label":ce("delete"),onClick:m},[l?l():r(F,{name:"cross",class:i("preview-delete-icon")},null)])}},y=()=>{if(o["preview-cover"]){const{index:l,item:u}=e;return r("div",{class:i("preview-cover")},[o["preview-cover"](U({index:l},u))])}},h=()=>{const{item:l,lazyLoad:u,imageFit:w,previewSize:f}=e;return B(l)?r(te,{fit:w,src:l.content||l.url,class:i("preview-image"),width:Array.isArray(f)?f[0]:f,height:Array.isArray(f)?f[1]:f,lazyLoad:u,onClick:v},{default:y}):r("div",{class:i("file"),style:V(e.previewSize)},[r(F,{class:i("file-icon"),name:"description"},null),r("div",{class:[i("file-name"),"van-ellipsis"]},[l.file?l.file.name:l.url]),y()])};return()=>r("div",{class:i("preview")},[h(),c(),b()])}});const ve={name:R(""),accept:I("image/*"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:R(1/0),imageFit:I("cover"),resultType:I("dataUrl"),uploadIcon:I("photograph"),uploadText:String,deletable:k,afterRead:Function,showUpload:k,modelValue:Y(),beforeRead:Function,beforeDelete:Function,previewSize:[Number,String,Array],previewImage:k,previewOptions:Object,previewFullImage:k,maxSize:{type:[Number,String,Function],default:1/0}};var ge=D({name:se,props:ve,emits:["delete","oversize","clickUpload","closePreview","clickPreview","update:modelValue"],setup(e,{emit:t,slots:o}){const c=ne(),m=[],v=(a=e.modelValue.length)=>({name:e.name,index:a}),b=()=>{c.value&&(c.value.value="")},y=a=>{if(b(),O(a,e.maxSize))if(Array.isArray(a)){const n=ue(a,e.maxSize);if(a=n.valid,t("oversize",n.invalid,v()),!a.length)return}else{t("oversize",a,v());return}a=oe(a),t("update:modelValue",[...e.modelValue,...L(a)]),e.afterRead&&e.afterRead(a,v())},h=a=>{const{maxCount:n,modelValue:d,resultType:s}=e;if(Array.isArray(a)){const g=+n-d.length;a.length>g&&(a=a.slice(0,g)),Promise.all(a.map(p=>S(p,s))).then(p=>{const q=a.map((G,A)=>{const C={file:G,status:"",message:""};return p[A]&&(C.content=p[A]),C});y(q)})}else S(a,s).then(g=>{const p={file:a,status:"",message:""};g&&(p.content=g),y(p)})},l=a=>{const{files:n}=a.target;if(e.disabled||!n||!n.length)return;const d=n.length===1?n[0]:[].slice.call(n);if(e.beforeRead){const s=e.beforeRead(d,v());if(!s){b();return}if(K(s)){s.then(g=>{h(g||d)}).catch(b);return}}h(d)};let u;const w=()=>t("closePreview"),f=a=>{if(e.previewFullImage){const n=e.modelValue.filter(B),d=n.map(s=>(s.file&&!s.url&&(s.url=URL.createObjectURL(s.file),m.push(s.url)),s.url)).filter(Boolean);u=ee(U({images:d,startPosition:n.indexOf(a),onClose:w},e.previewOptions))}},x=()=>{u&&u.close()},j=(a,n)=>{const d=e.modelValue.slice(0);d.splice(n,1),t("update:modelValue",d),t("delete",a,v(n))},E=(a,n)=>{const d=["imageFit","deletable","previewSize","beforeDelete"],s=U(P(e,d),P(a,d,!0));return r(me,ie({item:a,index:n,onClick:()=>t("clickPreview",a,v(n)),onDelete:()=>j(a,n),onPreview:()=>f(a)},P(e,["name","lazyLoad"]),s),P(o,["preview-cover","preview-delete"]))},N=()=>{if(e.previewImage)return e.modelValue.map(E)},z=a=>t("clickUpload",a),M=()=>{if(e.modelValue.length>=e.maxCount||!e.showUpload)return;const a=e.readonly?null:r("input",{ref:c,type:"file",class:i("input"),accept:e.accept,capture:e.capture,multiple:e.multiple,disabled:e.disabled,onChange:l},null);return o.default?r("div",{class:i("input-wrapper"),onClick:z},[o.default(),a]):r("div",{class:i("upload",{readonly:e.readonly}),style:V(e.previewSize),onClick:z},[r(F,{name:e.uploadIcon,class:i("upload-icon")},null),e.uploadText&&r("span",{class:i("upload-text")},[e.uploadText]),a])},T=()=>{c.value&&!e.disabled&&c.value.click()};return re(()=>{m.forEach(a=>URL.revokeObjectURL(a))}),$({chooseFile:T,closeImagePreview:x}),X(()=>e.modelValue),()=>r("div",{class:i()},[r("div",{class:i("wrapper",{disabled:e.disabled})},[N(),M()])])}});const xe=Z(ge);export{xe as U};
