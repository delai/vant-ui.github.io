import{c as _,C as L,B as H,q as V,i as X,e as U,G as J,t as K,p as P}from"./use-translate.a029ce72.js";import{n as Q,d as W,c as S,m as I,t as k,b as Y,w as Z}from"./with-install.1dc27775.js";import{A as D,e as r,u as $,I as ee,j as ae,v as te,B as ne,H as le}from"./vue-libs.d5ee895a.js";import{u as re}from"./use-expose.c6c7f4f7.js";import{I as F}from"./index.0a9aad73.js";import{s as ie}from"./index.7b23d93a.js";import{c as oe}from"./interceptor.2257d115.js";import{I as se}from"./index.2c2953fb.js";import{L as ce}from"./index.cacc54a3.js";const[ue,i,de]=_("uploader");function R(e,t){return new Promise(o=>{if(t==="file"){o();return}const c=new FileReader;c.onload=m=>{o(m.target.result)},t==="dataUrl"?c.readAsDataURL(e):t==="text"&&c.readAsText(e)})}function B(e,t){return L(e).some(o=>o.file?H(t)?t(o.file):o.file.size>t:!1)}function fe(e,t){const o=[],c=[];return e.forEach(m=>{B(m,t)?c.push(m):o.push(m)}),{valid:o,invalid:c}}const me=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,ve=e=>me.test(e);function O(e){return e.isImage?!0:e.file&&e.file.type?e.file.type.indexOf("image")===0:e.url?ve(e.url):typeof e.content=="string"?e.content.indexOf("data:image")===0:!1}const ge=D({props:{name:Q,item:W(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,previewSize:[Number,String,Array],beforeDelete:Function},emits:["delete","preview"],setup(e,{emit:t,slots:o}){const c=()=>{const{status:n,message:u}=e.item;if(n==="uploading"||n==="failed"){const w=n==="failed"?r(F,{name:"close",class:i("mask-icon")},null):r(ce,{class:i("loading")},null),f=X(u)&&u!=="";return r("div",{class:i("mask")},[w,f&&r("div",{class:i("mask-message")},[u])])}},m=n=>{const{name:u,item:w,index:f,beforeDelete:C}=e;n.stopPropagation(),oe(C,{args:[w,{name:u,index:f}],done:()=>t("delete")})},v=()=>t("preview"),b=()=>{if(e.deletable&&e.item.status!=="uploading"){const n=o["preview-delete"];return r("div",{role:"button",class:i("preview-delete",{shadow:!n}),tabindex:0,"aria-label":de("delete"),onClick:m},[n?n():r(F,{name:"cross",class:i("preview-delete-icon")},null)])}},h=()=>{if(o["preview-cover"]){const{index:n,item:u}=e;return r("div",{class:i("preview-cover")},[o["preview-cover"](U({index:n},u))])}},y=()=>{const{item:n,lazyLoad:u,imageFit:w,previewSize:f}=e;return O(n)?r(se,{fit:w,src:n.content||n.url,class:i("preview-image"),width:Array.isArray(f)?f[0]:f,height:Array.isArray(f)?f[1]:f,lazyLoad:u,onClick:v},{default:h}):r("div",{class:i("file"),style:V(e.previewSize)},[r(F,{class:i("file-icon"),name:"description"},null),r("div",{class:[i("file-name"),"van-ellipsis"]},[n.file?n.file.name:n.url]),h()])};return()=>r("div",{class:i("preview")},[y(),c(),b()])}}),we={name:S(""),accept:I("image/*"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:S(1/0),imageFit:I("cover"),resultType:I("dataUrl"),uploadIcon:I("photograph"),uploadText:String,deletable:k,afterRead:Function,showUpload:k,modelValue:Y(),beforeRead:Function,beforeDelete:Function,previewSize:[Number,String,Array],previewImage:k,previewOptions:Object,previewFullImage:k,maxSize:{type:[Number,String,Function],default:1/0}},pe=D({name:ue,props:we,emits:["delete","oversize","clickUpload","closePreview","clickPreview","update:modelValue"],setup(e,{emit:t,slots:o}){const c=$(),m=[],v=(a=e.modelValue.length)=>({name:e.name,index:a}),b=()=>{c.value&&(c.value.value="")},h=a=>{if(b(),B(a,e.maxSize))if(Array.isArray(a)){const l=fe(a,e.maxSize);if(a=l.valid,t("oversize",l.invalid,v()),!a.length)return}else{t("oversize",a,v());return}a=le(a),t("update:modelValue",[...e.modelValue,...L(a)]),e.afterRead&&e.afterRead(a,v())},y=a=>{const{maxCount:l,modelValue:d,resultType:s}=e;if(Array.isArray(a)){const g=+l-d.length;a.length>g&&(a=a.slice(0,g)),Promise.all(a.map(p=>R(p,s))).then(p=>{const G=a.map((q,x)=>{const A={file:q,status:"",message:""};return p[x]&&(A.content=p[x]),A});h(G)})}else R(a,s).then(g=>{const p={file:a,status:"",message:""};g&&(p.content=g),h(p)})},n=a=>{const{files:l}=a.target;if(e.disabled||!l||!l.length)return;const d=l.length===1?l[0]:[].slice.call(l);if(e.beforeRead){const s=e.beforeRead(d,v());if(!s){b();return}if(K(s)){s.then(g=>{y(g||d)}).catch(b);return}}y(d)};let u;const w=()=>t("closePreview"),f=a=>{if(e.previewFullImage){const l=e.modelValue.filter(O),d=l.map(s=>(s.file&&!s.url&&s.status!=="failed"&&(s.url=URL.createObjectURL(s.file),m.push(s.url)),s.url)).filter(Boolean);u=ie(U({images:d,startPosition:l.indexOf(a),onClose:w},e.previewOptions))}},C=()=>{u&&u.close()},j=(a,l)=>{const d=e.modelValue.slice(0);d.splice(l,1),t("update:modelValue",d),t("delete",a,v(l))},N=(a,l)=>{const d=["imageFit","deletable","previewSize","beforeDelete"],s=U(P(e,d),P(a,d,!0));return r(ge,ne({item:a,index:l,onClick:()=>t("clickPreview",a,v(l)),onDelete:()=>j(a,l),onPreview:()=>f(a)},P(e,["name","lazyLoad"]),s),P(o,["preview-cover","preview-delete"]))},E=()=>{if(e.previewImage)return e.modelValue.map(N)},z=a=>t("clickUpload",a),M=()=>{if(e.modelValue.length>=e.maxCount)return;const a=e.readonly?null:r("input",{ref:c,type:"file",class:i("input"),accept:e.accept,capture:e.capture,multiple:e.multiple,disabled:e.disabled,onChange:n},null);return o.default?r("div",{class:i("input-wrapper"),onClick:z},[o.default(),a]):ae(r("div",{class:i("upload",{readonly:e.readonly}),style:V(e.previewSize),onClick:z},[r(F,{name:e.uploadIcon,class:i("upload-icon")},null),e.uploadText&&r("span",{class:i("upload-text")},[e.uploadText]),a]),[[te,e.showUpload]])},T=()=>{c.value&&!e.disabled&&c.value.click()};return ee(()=>{m.forEach(a=>URL.revokeObjectURL(a))}),re({chooseFile:T,closeImagePreview:C}),J(()=>e.modelValue),()=>r("div",{class:i()},[r("div",{class:i("wrapper",{disabled:e.disabled})},[E(),M()])])}}),ze=Z(pe);export{ze as U};