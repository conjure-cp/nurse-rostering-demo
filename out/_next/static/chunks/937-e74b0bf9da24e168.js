"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[937],{3634:function(e,t,n){n.d(t,{Cb:function(){return S},HU:function(){return N}});var l=n(9268),s=n(2132),i=n(9414),r=n(5368),a=n(3998),o=n(6626),c=n(9109),d=n(4651),h=n(32),u=n(5834),x=n(3302),f=n(9015),j=n(1304),m=n(6470),p=n(9058),g=n(5136),y=n(2103),b=n(8271),v=n(686),w=n(1747),C=n(6006),k=n(9727);let S=[{label:"Preferred Shift Time",defaultIndex:0,selectedIndex:0,options:["Day","Night"]},{label:"Maximum Working Days in a Row",defaultIndex:3,selectedIndex:3,options:[...Array.from({length:4},(e,t)=>(t+0).toString())]}],N=e=>{let t=[];return t.push((0,l.jsx)("option",{value:e.options[e.selectedIndex],disabled:!0,hidden:!0,children:e.options[e.selectedIndex]},"default")),e.options.forEach((e,n)=>{t.push((0,l.jsx)("option",{value:n,children:e},n))}),t},_=e=>{let{isModalOpen:t,onModalOpen:n,onModalClose:_}=e,{skillList:I,addStaffMember:E}=(0,k.Z)(),[D,Z]=C.useState(""),[T,O]=C.useState(""),[P,U]=(0,C.useState)(""),[z,A]=(0,C.useState)(["STAFF"]),F=C.useRef(null),H=e=>{"STAFF"!==e&&A(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},K=e=>{if("Enter"===e.key&&""!==P.trim()){e.preventDefault();let t=P.trim().toUpperCase();z.includes(t)||A(e=>[...e,t]),U("")}},M=()=>{""!==D.trim()&&(E(D.trim(),z,S),Z(""),O(""),A(["STAFF"]),_())},Q=e=>{"Enter"===e.key&&M()};return(0,l.jsxs)(s.u_,{isOpen:t,onClose:_,children:[(0,l.jsx)(i.Z,{}),(0,l.jsxs)(r.h,{children:[(0,l.jsx)(a.x,{children:"Create staff member"}),(0,l.jsx)(o.o,{}),(0,l.jsx)(c.f,{children:(0,l.jsxs)("form",{className:"flex flex-col gap-4",onKeyPress:Q,children:[(0,l.jsx)(d.I,{onChange:e=>Z(e.target.value),placeholder:"Name",value:D}),(0,l.jsx)(d.I,{onChange:e=>U(e.target.value),onKeyDown:K,placeholder:"New Qualification",value:P}),(0,l.jsxs)(h.E,{children:[Object.keys(I).map((e,t)=>(0,l.jsx)(h.U,{children:(0,l.jsx)(u.C,{size:"l",onClick:()=>H(e),colorScheme:z.includes(e)?"purple":"gray",cursor:"pointer",children:e},t)},t)),z.filter(e=>!I.hasOwnProperty(e)).map((e,t)=>(0,l.jsx)(h.U,{children:(0,l.jsx)(u.C,{size:"l",onClick:()=>H(e),colorScheme:z.includes(e)?"purple":"gray",cursor:"pointer",children:e},"new-".concat(t))},t))]}),(0,l.jsx)(x.U,{allowToggle:!0,children:(0,l.jsxs)(f.Q,{children:[(0,l.jsx)("h2",{children:(0,l.jsxs)(j.K,{children:[(0,l.jsx)(m.xu,{flex:"1",textAlign:"left",children:"Constraints"}),(0,l.jsx)(p.X,{})]})}),(0,l.jsx)(g.H,{pb:4,children:S.map((e,t)=>(0,l.jsxs)("div",{className:"flex my-4 gap-4",children:[(0,l.jsx)(y.k,{className:"text-sm basis-[150%] items-center justify-end",children:(0,l.jsx)("label",{className:"align-right text-right",children:e.label})}),(0,l.jsx)(b.P,{className:"my-1",defaultValue:e.defaultIndex,onChange:t=>{e.selectedIndex=parseInt(t.target.value)},children:N(e)},t)]},t))})]})})]})}),(0,l.jsxs)(v.m,{children:[(0,l.jsx)(w.z,{onClick:_,variant:"ghost",children:"Cancel"}),(0,l.jsx)(w.z,{className:"bg-primary text-white hover:shadow-lg hover:bg-opacity-80",mr:3,onClick:M,disabled:""===D.trim(),ref:F,children:"Create"})]})]})]})};t.ZP=_},3937:function(e,t,n){n.d(t,{Z:function(){return O}});var l=n(9268),s=n(2132),i=n(9414),r=n(6006),a=n(5368),o=n(3998),c=n(6626),d=n(9109),h=n(4651),u=n(32),x=n(5834),f=n(3302),j=n(9015),m=n(1304),p=n(6470),g=n(9058),y=n(5136),b=n(2103),v=n(8271),w=n(686),C=n(1747),k=n(3634),S=n(9727);let N=e=>{let{onModalClose:t,staffId:n}=e,{staffList:s,skillList:i,updateStaffMember:N}=(0,S.Z)(),_=s.find(e=>e.id===n),[I,E]=(0,r.useState)(_&&_.name),[D,Z]=(0,r.useState)(""),[T,O]=(0,r.useState)(_?_.skills:[]),P=e=>{"STAFF"!==e&&O(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},U=e=>{if("Enter"===e.key&&""!==D.trim()){e.preventDefault();let t=D.trim().toUpperCase();O(e=>[...e,t]),Z("")}},z=()=>{I&&""!==I.trim()&&(N(n,I.trim(),T,k.Cb),t())},A=e=>{"Enter"===e.key&&z()};return(0,l.jsxs)(a.h,{children:[(0,l.jsx)(o.x,{children:"Edit staff member"}),(0,l.jsx)(c.o,{}),(0,l.jsx)(d.f,{children:(0,l.jsxs)("form",{className:"flex flex-col gap-4",onKeyPress:A,children:[(0,l.jsx)(h.I,{placeholder:"Name",value:I,onChange:e=>E(e.target.value)}),(0,l.jsx)(h.I,{onChange:e=>Z(e.target.value),onKeyDown:U,placeholder:"New Qualification",value:D}),(0,l.jsxs)(u.E,{children:[Object.keys(i).map((e,t)=>(0,l.jsx)(u.U,{children:(0,l.jsx)(x.C,{size:"xl",onClick:()=>P(e),colorScheme:T.includes(e)?"purple":"gray",cursor:"pointer",children:e},t)},t)),T.filter(e=>!i.hasOwnProperty(e)).map((e,t)=>(0,l.jsx)(u.U,{children:(0,l.jsx)(x.C,{size:"xl",onClick:()=>P(e),colorScheme:T.includes(e)?"purple":"gray",cursor:"pointer",children:e},"new-".concat(t))},t))]}),(0,l.jsx)(f.U,{allowToggle:!0,children:(0,l.jsxs)(j.Q,{children:[(0,l.jsx)("h2",{children:(0,l.jsxs)(m.K,{children:[(0,l.jsx)(p.xu,{flex:"1",textAlign:"left",children:"Constraints"}),(0,l.jsx)(g.X,{})]})}),(0,l.jsx)(y.H,{pb:4,children:k.Cb.map((e,t)=>(0,l.jsxs)("div",{className:"flex my-4 gap-4",children:[(0,l.jsx)(b.k,{className:"text-sm basis_[150%] items-center justify-end",children:(0,l.jsx)("label",{className:"align-right text-right",children:e.label})}),(0,l.jsx)(v.P,{className:"my-1",defaultValue:e.selectedIndex,onChange:t=>{e.selectedIndex=parseInt(t.target.value)},children:(0,k.HU)(e)},t)]},t))})]})})]})}),(0,l.jsxs)(w.m,{children:[(0,l.jsx)(C.z,{onClick:t,variant:"ghost",children:"Cancel"}),(0,l.jsx)(C.z,{className:"bg-primary text-white hover:shadow-lg hover:bg-opacity-80",mr:3,onClick:z,disabled:!I||""===I.trim(),children:"Save"})]})]})};var _=n(4821),I=n(1480);let E=()=>{let[e,t]=(0,r.useState)(!1),n=()=>t(!0),h=()=>t(!1),u=()=>(0,l.jsx)(I.h,{children:(0,l.jsxs)(s.u_,{isOpen:e,onClose:h,children:[(0,l.jsx)(i.Z,{}),(0,l.jsxs)(a.h,{children:[(0,l.jsx)(o.x,{children:"Chakra UI Modal"}),(0,l.jsx)(c.o,{}),(0,l.jsx)(d.f,{children:"Here is some content for the modal."}),(0,l.jsx)(w.m,{children:(0,l.jsx)(C.z,{colorScheme:"blue",onClick:h,children:"Close"})})]})]})});return{ModalComponent:u,openModal:n,closeModal:h}},D=e=>{let{onModalClose:t,setType:n,staffId:s}=e,{staffList:i,removeStaffMember:r}=(0,S.Z)(),h=i.find(e=>e.id===s),{ModalComponent:b,openModal:v}=E(),k=()=>{n("edit")},N=()=>{t(),r(s)},I=()=>{n("timetable")};return(0,l.jsxs)(a.h,{children:[(0,l.jsx)(o.x,{children:h&&h.name}),(0,l.jsx)(c.o,{}),(0,l.jsx)(d.f,{children:(0,l.jsxs)("form",{className:"flex flex-col gap-4",children:[(0,l.jsxs)(p.xu,{className:"flex justify-between gap-4",children:[(0,l.jsx)("strong",{children:"Qualifications:"}),(0,l.jsx)(u.E,{children:h&&h.skills.map((e,t)=>(0,l.jsx)(u.U,{children:(0,l.jsx)(x.C,{size:"lg",children:e})},t))})]}),(0,l.jsx)(f.U,{allowToggle:!0,children:(0,l.jsxs)(j.Q,{children:[(0,l.jsx)("h2",{children:(0,l.jsxs)(m.K,{children:[(0,l.jsx)(p.xu,{flex:"1",textAlign:"left",children:"Constraints"}),(0,l.jsx)(g.X,{})]})}),(0,l.jsx)(y.H,{pb:4,children:h&&h.constraints.map((e,t)=>(0,l.jsxs)("div",{className:"flex my-4 gap-4 justify-between",children:[(0,l.jsx)("label",{className:"align-right w-fit",children:e.label}),(0,l.jsx)("p",{className:"font-bold",children:e.options[e.selectedIndex]})]},t))})]})})]})}),(0,l.jsxs)(w.m,{className:"flex justify-between",children:[(0,l.jsx)(C.z,{variant:"ghost",color:"red",onClick:N,children:"Delete"}),(0,l.jsx)(C.z,{leftIcon:(0,l.jsx)(_.CLb,{}),variant:"ghost",onClick:I,children:"Timetable"}),(0,l.jsx)(C.z,{variant:"outline",onClick:k,children:"Edit"})]}),(0,l.jsx)(b,{})]})};var Z=n(6698);let T=e=>{let{staffId:t,isModalOpen:n,onModalOpen:a,onModalClose:o}=e,[c,d]=(0,r.useState)("display");return(0,r.useEffect)(()=>{d("display")},[n]),(0,l.jsxs)(s.u_,{isOpen:n,onClose:o,children:[(0,l.jsx)(i.Z,{}),"edit"===c?(0,l.jsx)(N,{onModalClose:o,staffId:t}):"timetable"===c?(0,l.jsx)(Z.Z,{staffId:t}):(0,l.jsx)(D,{onModalClose:o,setType:d,staffId:t})]})};var O=T},6698:function(e,t,n){var l=n(9268),s=n(5368),i=n(3998),r=n(6626),a=n(9109);n(6006);var o=n(9727),c=n(1723);let d=e=>{let{staffId:t}=e,{staffList:n}=(0,o.Z)(),d=n.find(e=>e.id===t);return(0,l.jsxs)(s.h,{children:[(0,l.jsxs)(i.x,{children:[d&&d.name," Personal Timetable"]}),(0,l.jsx)(r.o,{}),(0,l.jsx)(a.f,{children:(0,l.jsx)(c.Z,{staffId:t})})]})};t.Z=d},1723:function(e,t,n){var l=n(9268),s=n(7668),i=n(7779);n(6006);var r=n(9727),a=n(8618),o=n(4821);let c=e=>{let{staffId:t}=e,{staffList:n}=(0,r.Z)(),{schedule:c}=(0,a.Z)();n.find(e=>e.id===t);let d=c.filter(e=>e.resourceId===t),h=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=new Date(e),l={month:"long",day:"numeric"};return t&&(l.weekday="long"),n.toLocaleString("en-US",l)},u=e=>e.getHours()>=19?(0,l.jsxs)("div",{className:"flex gap-2 leading-none",children:[(0,l.jsx)(o.v70,{}),(0,l.jsx)(s.x,{children:"Night Shift"})]}):(0,l.jsxs)("div",{className:"flex gap-2 leading-none",children:[(0,l.jsx)(o.Wn6,{}),(0,l.jsx)(s.x,{children:"Day Shift"})]}),x=(e=>{let t=e.sort((e,t)=>new Date(e.start).getTime()-new Date(t.start).getTime()),n={};return t.forEach(e=>{let t=new Date(e.start);t.setDate(t.getDate()-(t.getDay()+6)%7);let l=t.toISOString().slice(0,10);n[l]||(n[l]=[]),n[l].push(e)}),n})(d);return(0,l.jsx)("div",{children:Object.entries(x).map(e=>{let[t,n]=e;return(0,l.jsxs)(i.g,{spacing:1,align:"start",className:"my-4",children:[(0,l.jsxs)(s.x,{fontWeight:"bold",children:["Week of ",h(t,!1)]}),n.map(e=>(0,l.jsxs)("div",{className:"w-full flex justify-between",children:[(0,l.jsx)(s.x,{children:h(e.start)}),u(new Date(e.start))]},e.id))]},t)})})};t.Z=c},8618:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(5793),s=n(6902),i=n.n(s),r=n(9697),a=n.n(r),o=n(1808),c=n.n(o),d=n(6006);function h(){let e=(0,d.useRef)(-1),[t,n]=(0,l.Z)("schedule",{defaultValue:[]}),[s,r]=(0,d.useState)("");(0,d.useEffect)(()=>{!async function(){let e=await fetch("/static/models/model.essence"),t=await e.text();r(t)}()},[]);let a=async e=>await fetch("https://demos.constraintmodelling.org/server/get",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jobid:e})}).then(e=>e.json()).then(e=>e||null).catch(e=>(console.error(e),null)),o=async e=>await fetch("https://demos.constraintmodelling.org/server/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({solver:"kissat",model:s,data:e,conjure_options:["--savilerow-options","-sat-sum-mdd","--channelling=no","-aai","--responses=2"]})}).then(e=>e.json()).then(e=>e&&e.jobid?e.jobid:null).catch(e=>(console.error(e),null)),c=async(e,t)=>{let n=new Set;e.forEach(e=>{e.skills.forEach(e=>{n.add(e)})});let l={};e.forEach((e,t)=>{l[e.id]=t+1});let s={};Array.from(n).forEach((e,t)=>{s[e]=t+1});let i={nb_nurses:e.length,nb_weeks:4,nb_skills:n.size,preferred_shift_type:{},maximum_working_days_in_a_row:{},nurse_skills:{},skills_lower_bound:{},disallowed:[]};e.forEach(e=>{let t=e.constraints.find(e=>"Preferred Shift Time"===e.label),n=(null==t?void 0:t.options[(null==t?void 0:t.selectedIndex)||0])||"Day";i.preferred_shift_type[l[e.id]]="Day"===n?1:2;let r=e.constraints.find(e=>"Maximum Working Days in a Row"===e.label);i.maximum_working_days_in_a_row[l[e.id]]=parseInt((null==r?void 0:r.options[(null==r?void 0:r.selectedIndex)||0])||"0",10),i.nurse_skills[l[e.id]]=e.skills.map(e=>s[e])}),Object.entries(t).forEach(e=>{i.skills_lower_bound[s[e[0]]]=e[1].minCount});let r=await o(JSON.stringify(i));return{jobid:r,staffEncoding:l,skillEncoding:s}},h=e=>new Promise(t=>setTimeout(t,e)),u=async t=>{e.current=t.jobid;let l=await a(t.jobid);if(!l)return null;let s=Date.now();for(;"wait"===l.status&&e.current==t.jobid;){if(Date.now()-s>=1e4)return["timeout",[]];await h(1e3),l=await a(t.jobid)}if(!l.solution)return["cancelled",[]];if(l.solution.length>0){let e=function(e,t){let n=i()(),l=1===n.weekday()&&n.isToday()?n:n.weekday(1),s=[7,0],r=[19,0],a=e.map(e=>{let n=e[0][0],i=e[0][1],a=e[1],o=l.add(i-1,"day"),c=1===a?s:r,d=o.hour(c[0]).minute(c[1]).second(0),h=d.clone().add(432e5,"millisecond");return{id:"".concat(n,"-").concat(i,"-").concat(a),resourceId:"".concat(function(e){let t={};for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)){let l=e[n];t[l]=n}return t}(t.staffEncoding)[n]),start:d.format(),end:h.format()}});return["ok",a]}(l.solution[0].assignment,t);return n(e[1]),e}return["no-solution",[]]};return{schedule:t,setSchedule:n,getSchedule:function(){return t},postSchedule:c,fetchSchedule:u}}i().extend(a()),i().extend(c())},9727:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(5793),s=n(6462);function i(){let[e,t]=(0,l.Z)("staffList",{defaultValue:[]}),[n,i]=(0,l.Z)("skillList",{defaultValue:{}}),r=(l,r,a)=>{r=r.map(e=>e.toUpperCase());let o={id:(0,s.Z)(),name:l,skills:r,constraints:a};t([...e,o]),i({...n,...r.reduce((e,t)=>{var l;return{...e,[t]:{count:((null===(l=n[t])||void 0===l?void 0:l.count)||0)+1,minCount:0}}},{})})},a=n=>{let l=e.filter(e=>e.id!==n);t(l);let s=c(n,[]);i(s)},o=(n,l,s,r)=>{let a=e.map(e=>e.id===n?{id:n,name:l,skills:s,constraints:r}:e);t(a);let o=c(n,s);i(o)},c=(t,l)=>{let s=l.filter(e=>!n.hasOwnProperty(e));return s.forEach(e=>{n[e]={count:0,minCount:0}}),Object.entries(n).reduce((n,s)=>{var i,r;let[a,o]=s,c=null!==(r=null===(i=e.find(e=>e.id===t))||void 0===i?void 0:i.skills.filter(e=>e===a).length)&&void 0!==r?r:0,d=o.count-c,h=l.filter(e=>e===a).length;return{...n,...d+h>0?{[a]:{count:d+h,minCount:0}}:{}}},{})},d=(e,t)=>{n[e]?i({...n,[e]:{...n[e],minCount:t}}):console.warn('Skill "'.concat(e,'" not found in skillList.'))};return{staffList:e,skillList:n,addStaffMember:r,removeStaffMember:a,updateStaffMember:o,countStaffMembers:()=>e.length,setSkillMinCount:d}}}}]);