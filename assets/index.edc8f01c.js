import{U as r}from"./index.68c74956.js";import{B as U}from"./index.16d2686f.js";import{a as w}from"./use-translate.fbf36f21.js";import{T as n}from"./function-call.e4fcbf95.js";import{z as x,D as d,r as _,o as y,a as z,e as t,w as o,B as e,h as B,t as j,d as D,F as S}from"./vue-libs.bf80eadf.js";import"./with-install.251697cd.js";import"./use-expose.8d47dba2.js";import"./index.f1bbf430.js";import"./function-call.43396c74.js";import"./mount-component.985a4079.js";import"./constant.80c6de18.js";import"./interceptor.12fa8767.js";import"./index.8f93d9c2.js";import"./use-touch.b6ff7b52.js";import"./on-popup-reopen.e08ee506.js";import"./index.6253c32e.js";import"./use-lazy-render.d79b7d1e.js";import"./index.c2caac4e.js";import"./index.7b063491.js";import"./index.d99a07cf.js";import"./use-route.9fd68ea8.js";const T={class:"preview-cover van-ellipsis"},ae=x({setup(N){const a=w({"zh-CN":{status:"\u4E0A\u4F20\u72B6\u6001",failed:"\u4E0A\u4F20\u5931\u8D25",upload:"\u4E0A\u4F20\u6587\u4EF6",preview:"\u6587\u4EF6\u9884\u89C8",maxSize:"\u9650\u5236\u4E0A\u4F20\u5927\u5C0F",disabled:"\u7981\u7528\u6587\u4EF6\u4E0A\u4F20",maxCount:"\u9650\u5236\u4E0A\u4F20\u6570\u91CF",uploading:"\u4E0A\u4F20\u4E2D...",imageName:"\u56FE\u7247\u540D\u79F0",beforeRead:"\u4E0A\u4F20\u524D\u7F6E\u5904\u7406",overSizeTip:"\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 500kb",invalidType:"\u8BF7\u4E0A\u4F20 jpg \u683C\u5F0F\u56FE\u7247",customUpload:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6837\u5F0F",previewCover:"\u81EA\u5B9A\u4E49\u9884\u89C8\u6837\u5F0F",customPreviewImage:"\u81EA\u5B9A\u4E49\u5355\u4E2A\u56FE\u7247\u9884\u89C8",deleteMessage:"\u5220\u9664\u524D\u7F6E\u5904\u7406"},"en-US":{status:"Upload Status",failed:"Failed",upload:"Upload File",preview:"Preview File",maxSize:"Max Size",disabled:"Disable Uploader",maxCount:"Max Count",uploading:"Uploading...",imageName:"Image Name",beforeRead:"Before Read",overSizeTip:"File size cannot exceed 500kb",invalidType:"Please upload an image in jpg format",customUpload:"Custom Upload Area",previewCover:"Preview Cover",customPreviewImage:"Custom single prevew image",deleteMessage:"Before Delete"}}),p=d([{url:"https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg"},{url:"https://cdn.jsdelivr.net/npm/@vant/assets/tree.jpeg"}]),m=d([{url:"https://cdn.jsdelivr.net/npm/@vant/assets/sand.jpeg"}]),v=d([]),f=d([{url:"https://cdn.jsdelivr.net/npm/@vant/assets/sand.jpeg"}]),g=d([{url:"https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg"},{url:"https://cdn.jsdelivr.net/npm/@vant/assets/sand.jpeg",deletable:!0,beforeDelete:()=>{n(a("deleteMessage"))}},{url:"https://cdn.jsdelivr.net/npm/@vant/assets/tree.jpeg",deletable:!0,imageFit:"contain",previewSize:120}]),F=d([{url:"https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg",status:"uploading",message:a("uploading")},{url:"https://cdn.jsdelivr.net/npm/@vant/assets/tree.jpeg",status:"failed",message:a("failed")}]),c=d([{url:"https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg",file:{name:a("imageName")}}]),C=u=>Array.isArray(u)?!0:u.type!=="image/jpeg"?(n(a("invalidType")),!1):!0,E=(u,l)=>{console.log(u,l)},V=u=>{u.status="uploading",u.message=a("uploading"),setTimeout(()=>{u.status="failed",u.message=a("failed")},1e3)},A=u=>{Array.isArray(u)?u.forEach(V):V(u)},b=(u,l)=>{console.log(u,l),n(a("overSizeTip"))};return(u,l)=>{const i=_("demo-block");return y(),z(S,null,[t(i,{title:e(a)("basicUsage")},{default:o(()=>[t(e(r),{"after-read":E})]),_:1},8,["title"]),t(i,{title:e(a)("preview")},{default:o(()=>[t(e(r),{modelValue:p.value,"onUpdate:modelValue":l[0]||(l[0]=s=>p.value=s),multiple:"",accept:"*"},null,8,["modelValue"])]),_:1},8,["title"]),t(i,{title:e(a)("status")},{default:o(()=>[t(e(r),{modelValue:F.value,"onUpdate:modelValue":l[1]||(l[1]=s=>F.value=s),"after-read":A},null,8,["modelValue"])]),_:1},8,["title"]),t(i,{title:e(a)("maxCount")},{default:o(()=>[t(e(r),{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=s=>m.value=s),multiple:"","max-count":2},null,8,["modelValue"])]),_:1},8,["title"]),t(i,{title:e(a)("maxSize")},{default:o(()=>[t(e(r),{modelValue:f.value,"onUpdate:modelValue":l[3]||(l[3]=s=>f.value=s),multiple:"","max-size":500*1024,onOversize:b},null,8,["modelValue"])]),_:1},8,["title"]),t(i,{title:e(a)("customUpload")},{default:o(()=>[t(e(r),null,{default:o(()=>[t(e(U),{type:"primary",icon:"plus"},{default:o(()=>[B(j(e(a)("upload")),1)]),_:1})]),_:1})]),_:1},8,["title"]),t(i,{title:e(a)("previewCover")},{default:o(()=>[t(e(r),{modelValue:c.value,"onUpdate:modelValue":l[4]||(l[4]=s=>c.value=s)},{"preview-cover":o(({file:s})=>[D("div",T,j(s.name),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(i,{title:e(a)("beforeRead")},{default:o(()=>[t(e(r),{modelValue:v.value,"onUpdate:modelValue":l[5]||(l[5]=s=>v.value=s),"before-read":C},null,8,["modelValue"])]),_:1},8,["title"]),t(i,{title:e(a)("disabled")},{default:o(()=>[t(e(r),{"after-read":E,disabled:""})]),_:1},8,["title"]),t(i,{title:e(a)("customPreviewImage")},{default:o(()=>[t(e(r),{modelValue:g.value,"onUpdate:modelValue":l[6]||(l[6]=s=>g.value=s),multiple:"",accept:"*",deletable:!1},null,8,["modelValue"])]),_:1},8,["title"])],64)}}});export{ae as default};
