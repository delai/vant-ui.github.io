import{c as x,f as Q,e as j,y as W,a as X}from"./use-translate.a029ce72.js";import{n as p,t as T,c as V,b as Z,w as ee}from"./with-install.1dc27775.js";import{A as R,u as C,e as r,F as ae,H as te,D as A,x as le,q as se,j as y,v as F,r as oe,o as re,c as ne,w as ue,C as E}from"./vue-libs.d5ee895a.js";import{u as ce}from"./use-expose.c6c7f4f7.js";import{A as L,a as de,b as ie}from"./index.esm.5c2f46ed.js";import{C as M}from"./index.b5076744.js";import{F as me}from"./index.71d045a5.js";import{F as S}from"./index.083d5244.js";import{P as he}from"./index.61c0c549.js";import{s as B}from"./index.6deecded.js";import{B as U}from"./index.223d383d.js";import{S as fe}from"./index.adf65dcf.js";import"./Picker.3f9aec87.js";import"./constant.e12a51b9.js";import"./index.cacc54a3.js";import"./use-touch.e8c4f7e8.js";import"./index.ab6be629.js";import"./use-id.283fca96.js";import"./use-route.55b36618.js";import"./index.6b625a87.js";import"./on-popup-reopen.5b484164.js";import"./interceptor.2257d115.js";import"./use-refs.9408eccb.js";import"./index.dde3479a.js";import"./index.3014f697.js";import"./index.7dc9d2c4.js";import"./index.0a9aad73.js";import"./use-lazy-render.8319bb4a.js";import"./index.45507804.js";import"./mount-component.a9874ea3.js";const[ve,I]=x("address-edit-detail"),N=x("address-edit")[2],De=R({name:ve,props:{show:Boolean,rows:p,value:String,rules:Array,focused:Boolean,maxlength:p,searchResult:Array,showSearchResult:Boolean},emits:["blur","focus","input","selectSearch"],setup(e,{emit:s}){const m=C(),h=()=>e.focused&&e.searchResult&&e.showSearchResult,t=u=>{s("selectSearch",u),s("input",`${u.address||""} ${u.name||""}`.trim())},d=()=>{if(!h())return;const{searchResult:u}=e;return u.map(c=>r(M,{clickable:!0,key:(c.name||"")+(c.address||""),icon:"location-o",title:c.name,label:c.address,class:I("search-item"),border:!1,onClick:()=>t(c)},null))},i=u=>s("blur",u),g=u=>s("focus",u),D=u=>s("input",u);return()=>{if(e.show)return r(ae,null,[r(S,{autosize:!0,clearable:!0,ref:m,class:I(),rows:e.rows,type:"textarea",rules:e.rules,label:N("addressDetail"),border:!h(),maxlength:e.maxlength,modelValue:e.value,placeholder:N("addressDetail"),onBlur:i,onFocus:g,"onUpdate:modelValue":D},null),d()])}}}),[Ce,v,n]=x("address-edit"),O={name:"",tel:"",city:"",county:"",country:"",province:"",areaCode:"",isDefault:!1,addressDetail:""},ge={areaList:Object,isSaving:Boolean,isDeleting:Boolean,validator:Function,showArea:T,showDetail:T,showDelete:Boolean,disableArea:Boolean,searchResult:Array,telMaxlength:p,showSetDefault:Boolean,saveButtonText:String,areaPlaceholder:String,deleteButtonText:String,showSearchResult:Boolean,detailRows:V(1),detailMaxlength:V(200),areaColumnsPlaceholder:Z(),addressInfo:{type:Object,default:()=>j({},O)},telValidator:{type:Function,default:W}},we=R({name:Ce,props:ge,emits:["save","focus","delete","clickArea","changeArea","changeDetail","selectSearch","changeDefault"],setup(e,{emit:s,slots:m}){const h=C(),t=te({}),d=C(!1),i=C(!1),g=A(()=>Q(e.areaList)&&Object.keys(e.areaList).length),D=A(()=>{const{province:a,city:o,county:l,areaCode:f}=t;if(f){const b=[a,o,l];return a&&a===o&&b.splice(1,1),b.filter(Boolean).join("/")}return""}),u=A(()=>{var a;return((a=e.searchResult)==null?void 0:a.length)&&i.value}),c=a=>{i.value=a==="addressDetail",s("focus",a)},w=A(()=>{const{validator:a,telValidator:o}=e,l=(f,b)=>({validator:k=>{if(a){const P=a(f,k);if(P)return P}return k?!0:b}});return{name:[l("name",n("nameEmpty"))],tel:[l("tel",n("telInvalid")),{validator:o,message:n("telInvalid")}],areaCode:[l("areaCode",n("areaEmpty"))],addressDetail:[l("addressDetail",n("addressEmpty"))]}}),$=()=>s("save",t),z=a=>{t.addressDetail=a,s("changeDetail",a)},_=a=>{t.province=a[0].text,t.city=a[1].text,t.county=a[2].text},H=({selectedValues:a,selectedOptions:o})=>{a.some(l=>l===L)?B(n("areaEmpty")):(d.value=!1,_(o),s("changeArea",o))},q=()=>s("delete",t),G=a=>{t.areaCode=a||""},Y=()=>{setTimeout(()=>{i.value=!1})},J=a=>{t.addressDetail=a},K=()=>{if(e.showSetDefault){const a={"right-icon":()=>r(fe,{modelValue:t.isDefault,"onUpdate:modelValue":o=>t.isDefault=o,onChange:o=>s("changeDefault",o)},null)};return y(r(M,{center:!0,title:n("defaultAddress"),class:v("default")},a),[[F,!u.value]])}};return ce({setAreaCode:G,setAddressDetail:J}),le(()=>e.addressInfo,a=>{j(t,O,a),se(()=>{var l;const o=(l=h.value)==null?void 0:l.getSelectedOptions();o&&o.every(f=>f&&f.value!==L)&&_(o)})},{deep:!0,immediate:!0}),()=>{const{disableArea:a}=e;return r(me,{class:v(),onSubmit:$},{default:()=>{var o;return[r("div",{class:v("fields")},[r(S,{modelValue:t.name,"onUpdate:modelValue":l=>t.name=l,clearable:!0,label:n("name"),rules:w.value.name,placeholder:n("name"),onFocus:()=>c("name")},null),r(S,{modelValue:t.tel,"onUpdate:modelValue":l=>t.tel=l,clearable:!0,type:"tel",label:n("tel"),rules:w.value.tel,maxlength:e.telMaxlength,placeholder:n("tel"),onFocus:()=>c("tel")},null),y(r(S,{readonly:!0,label:n("area"),"is-link":!a,modelValue:D.value,rules:w.value.areaCode,placeholder:e.areaPlaceholder||n("area"),onFocus:()=>c("areaCode"),onClick:()=>{s("clickArea"),d.value=!a}},null),[[F,e.showArea]]),r(De,{show:e.showDetail,rows:e.detailRows,rules:w.value.addressDetail,value:t.addressDetail,focused:i.value,maxlength:e.detailMaxlength,searchResult:e.searchResult,showSearchResult:e.showSearchResult,onBlur:Y,onFocus:()=>c("addressDetail"),onInput:z,onSelectSearch:l=>s("selectSearch",l)},null),(o=m.default)==null?void 0:o.call(m)]),K(),y(r("div",{class:v("buttons")},[r(U,{block:!0,round:!0,type:"primary",text:e.saveButtonText||n("save"),class:v("button"),loading:e.isSaving,nativeType:"submit"},null),e.showDelete&&r(U,{block:!0,round:!0,class:v("button"),loading:e.isDeleting,text:e.deleteButtonText||n("delete"),onClick:q},null)]),[[F,!u.value]]),r(he,{show:d.value,"onUpdate:show":l=>d.value=l,round:!0,teleport:"body",position:"bottom",lazyRender:!1},{default:()=>[r(de,{modelValue:t.areaCode,"onUpdate:modelValue":l=>t.areaCode=l,ref:h,loading:!g.value,areaList:e.areaList,columnsPlaceholder:e.areaColumnsPlaceholder,onConfirm:H,onCancel:()=>{d.value=!1}},null)]})]}})}}}),be=ee(we),We=R({__name:"index",setup(e){const s=X({"zh-CN":{areaColumnsPlaceholder:["\u8BF7\u9009\u62E9","\u8BF7\u9009\u62E9","\u8BF7\u9009\u62E9"],searchResult:[{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3",address:"\u676D\u5DDE\u5E02\u897F\u6E56\u533A"},{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3G\u5EA7"},{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3H\u5EA7",address:"\u676D\u5DDE\u5E02\u897F\u6E56\u533A"}]},"en-US":{areaColumnsPlaceholder:["Choose","Choose","Choose"],searchResult:[{name:"Name1",address:"Address"},{name:"Name2"},{name:"Name3",address:"Address"}]}}),m=C([]),h=()=>B(s("save")),t=()=>B(s("delete")),d=i=>{m.value=i?s("searchResult"):[]};return(i,g)=>{const D=oe("demo-block");return re(),ne(D,{title:E(s)("basicUsage")},{default:ue(()=>[r(E(be),{"area-list":E(ie),"show-delete":"","show-set-default":"","show-search-result":"","search-result":m.value,"area-columns-placeholder":E(s)("areaColumnsPlaceholder"),onSave:h,onDelete:t,onChangeDetail:d},null,8,["area-list","search-result","area-columns-placeholder"])]),_:1},8,["title"])}}});export{We as default};
