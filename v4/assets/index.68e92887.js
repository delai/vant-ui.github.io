import{c as _,w as H,q as L,i as J,e as U,B as X,r as K,p as A}from"./use-translate.48fbbaf5.js";import{n as Q,d as W,c as R,m as P,t as I,b as Y,w as Z}from"./with-install.685b3f2d.js";import{u as $}from"./use-expose.af01e405.js";import{I as k}from"./index.fa826fe1.js";import{I as ee}from"./function-call.59f2cfc5.js";import{c as ae}from"./interceptor.a485b929.js";import{I as re}from"./index.38d19850.js";import{L as ne}from"./index.4fee12b7.js";import{A as V,e as t,x as te,J as le,B as ie,H as oe}from"./vue-libs.84c45047.js";const[se,l,ce]=_("uploader"),D=e=>Array.isArray(e)?e:[e];function S(e,r){return new Promise(i=>{if(r==="file"){i();return}const c=new FileReader;c.onload=m=>{i(m.target.result)},r==="dataUrl"?c.readAsDataURL(e):r==="text"&&c.readAsText(e)})}function B(e,r){return D(e).some(i=>i.file?H(r)?r(i.file):i.file.size>r:!1)}function ue(e,r){const i=[],c=[];return e.forEach(m=>{B(m,r)?c.push(m):i.push(m)}),{valid:i,invalid:c}}const de=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,fe=e=>de.test(e);function O(e){return e.isImage?!0:e.file&&e.file.type?e.file.type.indexOf("image")===0:e.url?fe(e.url):typeof e.content=="string"?e.content.indexOf("data:image")===0:!1}var me=V({props:{name:Q,item:W(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,previewSize:[Number,String,Array],beforeDelete:Function},emits:["delete","preview"],setup(e,{emit:r,slots:i}){const c=()=>{const{status:o,message:u}=e.item;if(o==="uploading"||o==="failed"){const w=o==="failed"?t(k,{name:"close",class:l("mask-icon")},null):t(ne,{class:l("loading")},null),f=J(u)&&u!=="";return t("div",{class:l("mask")},[w,f&&t("div",{class:l("mask-message")},[u])])}},m=o=>{const{name:u,item:w,index:f,beforeDelete:F}=e;o.stopPropagation(),ae(F,{args:[w,{name:u,index:f}],done:()=>r("delete")})},v=()=>r("preview"),b=()=>{if(e.deletable&&e.item.status!=="uploading")return t("div",{role:"button",class:l("preview-delete"),tabindex:0,"aria-label":ce("delete"),onClick:m},[t(k,{name:"cross",class:l("preview-delete-icon")},null)])},y=()=>{if(i["preview-cover"]){const{index:o,item:u}=e;return t("div",{class:l("preview-cover")},[i["preview-cover"](U({index:o},u))])}},h=()=>{const{item:o,lazyLoad:u,imageFit:w,previewSize:f}=e;return O(o)?t(re,{fit:w,src:o.content||o.url,class:l("preview-image"),width:Array.isArray(f)?f[0]:f,height:Array.isArray(f)?f[1]:f,lazyLoad:u,onClick:v},{default:y}):t("div",{class:l("file"),style:L(e.previewSize)},[t(k,{class:l("file-icon"),name:"description"},null),t("div",{class:[l("file-name"),"van-ellipsis"]},[o.file?o.file.name:o.url]),y()])};return()=>t("div",{class:l("preview")},[h(),c(),b()])}});const ve={name:R(""),accept:P("image/*"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:R(1/0),imageFit:P("cover"),resultType:P("dataUrl"),uploadIcon:P("photograph"),uploadText:String,deletable:I,afterRead:Function,showUpload:I,modelValue:Y(),beforeRead:Function,beforeDelete:Function,previewSize:[Number,String,Array],previewImage:I,previewOptions:Object,previewFullImage:I,maxSize:{type:[Number,String,Function],default:1/0}};var ge=V({name:se,props:ve,emits:["delete","oversize","clickUpload","closePreview","clickPreview","update:modelValue"],setup(e,{emit:r,slots:i}){const c=te(),m=[],v=(a=e.modelValue.length)=>({name:e.name,index:a}),b=()=>{c.value&&(c.value.value="")},y=a=>{if(b(),B(a,e.maxSize))if(Array.isArray(a)){const n=ue(a,e.maxSize);if(a=n.valid,r("oversize",n.invalid,v()),!a.length)return}else{r("oversize",a,v());return}a=oe(a),r("update:modelValue",[...e.modelValue,...D(a)]),e.afterRead&&e.afterRead(a,v())},h=a=>{const{maxCount:n,modelValue:d,resultType:s}=e;if(Array.isArray(a)){const g=+n-d.length;a.length>g&&(a=a.slice(0,g)),Promise.all(a.map(p=>S(p,s))).then(p=>{const q=a.map((G,z)=>{const C={file:G,status:"",message:""};return p[z]&&(C.content=p[z]),C});y(q)})}else S(a,s).then(g=>{const p={file:a,status:"",message:""};g&&(p.content=g),y(p)})},o=a=>{const{files:n}=a.target;if(e.disabled||!n||!n.length)return;const d=n.length===1?n[0]:[].slice.call(n);if(e.beforeRead){const s=e.beforeRead(d,v());if(!s){b();return}if(K(s)){s.then(g=>{h(g||d)}).catch(b);return}}h(d)};let u;const w=()=>r("closePreview"),f=a=>{if(e.previewFullImage){const n=e.modelValue.filter(O),d=n.map(s=>(s.file&&!s.url&&(s.url=URL.createObjectURL(s.file),m.push(s.url)),s.url)).filter(Boolean);u=ee(U({images:d,startPosition:n.indexOf(a),onClose:w},e.previewOptions))}},F=()=>{u&&u.close()},j=(a,n)=>{const d=e.modelValue.slice(0);d.splice(n,1),r("update:modelValue",d),r("delete",a,v(n))},N=(a,n)=>{const d=["imageFit","deletable","previewSize","beforeDelete"],s=U(A(e,d),A(a,d,!0));return t(me,ie({item:a,index:n,onClick:()=>r("clickPreview",a,v(n)),onDelete:()=>j(a,n),onPreview:()=>f(a)},A(e,["name","lazyLoad"]),s),{"preview-cover":i["preview-cover"]})},E=()=>{if(e.previewImage)return e.modelValue.map(N)},x=a=>r("clickUpload",a),M=()=>{if(e.modelValue.length>=e.maxCount||!e.showUpload)return;const a=e.readonly?null:t("input",{ref:c,type:"file",class:l("input"),accept:e.accept,capture:e.capture,multiple:e.multiple,disabled:e.disabled,onChange:o},null);return i.default?t("div",{class:l("input-wrapper"),onClick:x},[i.default(),a]):t("div",{class:l("upload",{readonly:e.readonly}),style:L(e.previewSize),onClick:x},[t(k,{name:e.uploadIcon,class:l("upload-icon")},null),e.uploadText&&t("span",{class:l("upload-text")},[e.uploadText]),a])},T=()=>{c.value&&!e.disabled&&c.value.click()};return le(()=>{m.forEach(a=>URL.revokeObjectURL(a))}),$({chooseFile:T,closeImagePreview:F}),X(()=>e.modelValue),()=>t("div",{class:l()},[t("div",{class:l("wrapper",{disabled:e.disabled})},[E(),M()])])}});const Ae=Z(ge);export{Ae as U};
