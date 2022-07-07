import{C as s}from"./index.0048e00b.js";import{C as D}from"./index.b8ac0b85.js";import{a as g}from"./use-translate.5c5bc340.js";import{r as k,o as x,c as b,w as p,e as n,B as o,z as R,H as T,a as w,F as S}from"./vue-libs.baee7c1f.js";import"./with-install.fb16276a.js";import"./use-route.e11a8d0e.js";import"./index.a980483d.js";import"./use-refs.ca732648.js";import"./use-expose.ee9c0d2a.js";import"./index.cdbdcd62.js";import"./constant.80c6de18.js";import"./interceptor.c431140c.js";import"./use-touch.ef0aabdc.js";import"./use-lazy-render.56018189.js";import"./on-popup-reopen.db5e5853.js";import"./index.f1edd6f0.js";import"./index.8ec72d7b.js";import"./index.39339e10.js";import"./function-call.db2e1bcf.js";import"./mount-component.d554f092.js";import"./utils.99dc7b6f.js";import"./Picker.01fdbdd4.js";import"./deep-clone.37e3d0fb.js";import"./use-height.09fd7353.js";const F={name:"TiledDisplay",setup(v){const i=new Date(2012,0,10),e=new Date(2012,2,20),f=g({"zh-CN":{calendar:"\u65E5\u5386",tiledDisplay:"\u5E73\u94FA\u5C55\u793A"},"en-US":{calendar:"Calendar",tiledDisplay:"Tiled display"}});return(C,a)=>{const c=k("demo-block");return x(),b(c,{card:"",title:o(f)("tiledDisplay")},{default:p(()=>[n(o(D),{title:o(f)("calendar"),poppable:!1,"show-confirm":!1,"min-date":o(i),"max-date":o(e),"default-date":o(i),style:{height:"500px"}},null,8,["title","min-date","max-date","default-date"])]),_:1},8,["title"])}}},_=R({name:"index",setup(v){const i=g({"zh-CN":{in:"\u5165\u5E97",out:"\u79BB\u5E97",today:"\u4ECA\u5929",laborDay:"\u52B3\u52A8\u8282",youthDay:"\u9752\u5E74\u8282",maxRange:"\u65E5\u671F\u533A\u95F4\u6700\u5927\u8303\u56F4",selectCount:t=>`\u9009\u62E9\u4E86 ${t} \u4E2A\u65E5\u671F`,selectSingle:"\u9009\u62E9\u5355\u4E2A\u65E5\u671F",selectMultiple:"\u9009\u62E9\u591A\u4E2A\u65E5\u671F",selectRange:"\u9009\u62E9\u65E5\u671F\u533A\u95F4",quickSelect:"\u5FEB\u6377\u9009\u62E9",confirmText:"\u5B8C\u6210",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customRange:"\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4",customConfirm:"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57",customDayText:"\u81EA\u5B9A\u4E49\u65E5\u671F\u6587\u6848",customPosition:"\u81EA\u5B9A\u4E49\u5F39\u51FA\u4F4D\u7F6E",customCalendar:"\u81EA\u5B9A\u4E49\u65E5\u5386",confirmDisabledText:"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4",firstDayOfWeek:"\u81EA\u5B9A\u4E49\u5468\u8D77\u59CB\u65E5"},"en-US":{in:"In",out:"Out",today:"Today",laborDay:"Labor day",youthDay:"Youth Day",maxRange:"Max Range",selectCount:t=>`${t} dates selected`,selectSingle:"Select Single Date",selectMultiple:"Select Multiple Date",selectRange:"Select Date Range",quickSelect:"Quick Select",confirmText:"OK",customColor:"Custom Color",customRange:"Custom Date Range",customConfirm:"Custom Confirm Text",customDayText:"Custom Day Text",customPosition:"Custom Position",customCalendar:"Custom Calendar",firstDayOfWeek:"Custom First Day Of Week",confirmDisabledText:"Select End Time"}}),e=T({date:{maxRange:[],selectSingle:null,selectRange:[],selectMultiple:[],quickSelect1:null,quickSelect2:[],customColor:[],customConfirm:[],customRange:null,customDayText:[],customPosition:null},type:"single",round:!0,color:void 0,minDate:void 0,maxDate:void 0,maxRange:void 0,position:void 0,formatter:void 0,showConfirm:!1,showCalendar:!1,confirmText:void 0,confirmDisabledText:void 0,firstDayOfWeek:0}),f=()=>{e.round=!0,e.color=void 0,e.minDate=void 0,e.maxDate=void 0,e.maxRange=void 0,e.position=void 0,e.formatter=void 0,e.showConfirm=!0,e.confirmText=void 0,e.confirmDisabledText=void 0,e.firstDayOfWeek=0},C=t=>{if(!t.date)return t;const l=t.date.getMonth()+1,r=t.date.getDate();return l===5&&(r===1?t.topInfo=i("laborDay"):r===4?t.topInfo=i("youthDay"):r===11&&(t.text=i("today"))),t.type==="start"?t.bottomInfo=i("in"):t.type==="end"&&(t.bottomInfo=i("out")),t},a=(t,l)=>{switch(f(),e.id=l,e.type=t,e.showCalendar=!0,l){case"quickSelect1":case"quickSelect2":e.showConfirm=!1;break;case"customColor":e.color="#1989fa";break;case"customConfirm":e.confirmText=i("confirmText"),e.confirmDisabledText=i("confirmDisabledText");break;case"customRange":e.minDate=new Date(2010,0,1),e.maxDate=new Date(2010,0,31);break;case"customDayText":e.minDate=new Date(2010,4,1),e.maxDate=new Date(2010,4,31),e.formatter=C;break;case"customPosition":e.round=!1,e.position="right";break;case"maxRange":e.maxRange=3;break;case"firstDayOfWeek":e.firstDayOfWeek=1;break}},c=t=>{if(t)return`${t.getMonth()+1}/${t.getDate()}`},d=t=>{if(t)return`${t.getFullYear()}/${c(t)}`},E=t=>{if(t.length)return i("selectCount",t.length)},m=t=>{if(t.length){const[l,r]=t;return`${c(l)} - ${c(r)}`}},y=t=>{e.showCalendar=!1,e.date[e.id]=t};return(t,l)=>{const r=k("demo-block");return x(),w(S,null,[n(r,{card:"",title:o(i)("basicUsage")},{default:p(()=>[n(o(s),{"is-link":"",title:o(i)("selectSingle"),value:d(e.date.selectSingle),onClick:l[0]||(l[0]=u=>a("single","selectSingle"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(i)("selectMultiple"),value:E(e.date.selectMultiple),onClick:l[1]||(l[1]=u=>a("multiple","selectMultiple"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(i)("selectRange"),value:m(e.date.selectRange),onClick:l[2]||(l[2]=u=>a("range","selectRange"))},null,8,["title","value"])]),_:1},8,["title"]),n(r,{card:"",title:o(i)("quickSelect")},{default:p(()=>[n(o(s),{"is-link":"",title:o(i)("selectSingle"),value:d(e.date.quickSelect1),onClick:l[3]||(l[3]=u=>a("single","quickSelect1"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(i)("selectRange"),value:m(e.date.quickSelect2),onClick:l[4]||(l[4]=u=>a("range","quickSelect2"))},null,8,["title","value"])]),_:1},8,["title"]),n(r,{card:"",title:o(i)("customCalendar")},{default:p(()=>[n(o(s),{"is-link":"",title:o(i)("customColor"),value:m(e.date.customColor),onClick:l[5]||(l[5]=u=>a("range","customColor"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(i)("customRange"),value:d(e.date.customRange),onClick:l[6]||(l[6]=u=>a("single","customRange"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(i)("customConfirm"),value:m(e.date.customConfirm),onClick:l[7]||(l[7]=u=>a("range","customConfirm"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(i)("customDayText"),value:m(e.date.customDayText),onClick:l[8]||(l[8]=u=>a("range","customDayText"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(i)("customPosition"),value:d(e.date.customPosition),onClick:l[9]||(l[9]=u=>a("single","customPosition"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(i)("maxRange"),value:m(e.date.maxRange),onClick:l[10]||(l[10]=u=>a("range","maxRange"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(i)("firstDayOfWeek"),onClick:l[11]||(l[11]=u=>a("single","firstDayOfWeek"))},null,8,["title"])]),_:1},8,["title"]),n(F),n(o(D),{show:e.showCalendar,"onUpdate:show":l[12]||(l[12]=u=>e.showCalendar=u),type:e.type,color:e.color,round:e.round,position:e.position,"min-date":e.minDate,"max-date":e.maxDate,"max-range":e.maxRange,formatter:e.formatter,"show-confirm":e.showConfirm,"confirm-text":e.confirmText,"first-day-of-week":e.firstDayOfWeek,"confirm-disabled-text":e.confirmDisabledText,onConfirm:y},null,8,["show","type","color","round","position","min-date","max-date","max-range","formatter","show-confirm","confirm-text","first-day-of-week","confirm-disabled-text"])],64)}}});export{_ as default};
