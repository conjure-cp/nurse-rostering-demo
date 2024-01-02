(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{2342:function(e,t,n){Promise.resolve().then(n.bind(n,5623))},5623:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(7437),i=n(2265),s=n(6278),a=n(7591),o=n(1999),l=n(9627),d=n(8402),c=n(3623),u=n(1504),f=n(954),h=n(6526),m=n(5405),p=n(6833),x=n(3109),g=n(9041),j=n(4548),w=n.n(j),b=n(9982),v=()=>{let{staffList:e,skillList:t}=(0,l.Z)(),{postSchedule:n,fetchSchedule:j,getSchedule:v,setSchedule:y}=(0,g.Z)(),{isOpen:k=!1,onOpen:S,onClose:_}=(0,d.q)(),C=(0,c.p)(),D=(0,i.useRef)(null),[E,N]=i.useState(0),[Z,O]=(0,i.useState)(null),{isOpen:I,onOpen:T,onClose:W}=(0,d.q)(),[P,A]=i.useState(""),H=e=>{let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);let n=(255&t)%128+127,r=(t>>8&255)%128+127,i=(t>>16&255)%128+127,s=n.toString(16).padStart(2,"0"),a=r.toString(16).padStart(2,"0"),o=i.toString(16).padStart(2,"0");return"#".concat(s).concat(a).concat(o)},L=(()=>{let t={};return e.forEach(e=>{t[e.id]=H(e.id)}),t})(),M=async()=>{let r=await n(e,t);S();let i=await j(r);i&&(_(),0===i[1].length?"cancelled"===i[0]?(C({title:"Rerunning schedule request",status:"info",duration:3e3,position:"top",isClosable:!0}),S()):"timeout"===i[0]?C({title:"Request timed out",description:"We couldn't find a schedule for your request in time. Please check your staff list and constraints and try again.",status:"warning",duration:9e3,position:"top",isClosable:!0}):"no-solution"===i[0]&&C({title:"No schedule found",description:"We couldn't find a schedule for the given constraints",status:"warning",duration:9e3,position:"top",isClosable:!0}):D.current.getApi().gotoDate(z()))},z=(0,i.useCallback)(()=>{let e=v().map(e=>e.start);if(e.length<=0)return w()().toDate();let t=e.reduce((e,t)=>w()(e).isBefore(w()(t))?e:t);return w()().isBefore(w()(t))?t:w()().toDate()},[v]),q=(0,i.useCallback)(e=>{A(e),T()},[T]);return(0,r.jsxs)("div",{suppressHydrationWarning:!0,children:[(0,r.jsx)("div",{className:"p-4 m-4 h-full bg-surface1 rounded-xl",children:(0,r.jsx)(s.Z,{schedulerLicenseKey:"CC-Attribution-NonCommercial-NoDerivatives",plugins:[a.Z,o.ZP],initialView:"resourceTimelineWeek",datesSet:()=>{N(E+1)},slotDuration:"12:00:00",slotMinTime:"07:00:00",eventDragStart:e=>{O(e.event._def.resourceIds[0])},eventAllow:e=>Z===e.resource.id,contentHeight:"auto",ref:D,resourceAreaWidth:"15%",resourceAreaHeaderContent:"Staff",defaultTimedEventDuration:"12:00:00",eventDrop:e=>{let{event:t,oldEvent:n}=e;y(v().map(e=>e.id===t.id?{...e,start:t.start,end:t.end,resourceId:e.resourceId}:e))},firstDay:1,editable:!0,resourceLabelContent:e=>{let t=e.resource.id;return(0,r.jsx)("span",{onClick:()=>q(t),style:{minHeight:"40px"},children:e.resource.title})},initialDate:z(),nowIndicator:!0,resources:e.map(e=>({id:e.id,title:e.name})),eventInteractive:!0,eventDisplay:"block",events:v().map(e=>({id:e.id,resourceId:e.resourceId,start:e.start,end:e.end,backgroundColor:L[e.resourceId],editable:!0,borderColor:"purple",overlap:!1}))})}),(0,r.jsx)(u.z,{className:"bg-primary text-white absolute top-2 right-4 m-4","aria-label":"Add event",onClick:M,children:"SCHEDULE"}),(0,r.jsx)("style",{suppressHydrationWarning:!0,children:"\n        @media only screen and (max-width: 800px) {\n          .fc-toolbar-title {\n            font-size: 1em !important;\n          }\n        }\n        .fc .fc-datagrid-cell-cushion {\n          overflow-x: scroll;\n          -ms-overflow-style: none;  /* IE and Edge */\n          scrollbar-width: none;  /* Firefox */\n        } \n         /* Hide scrollbar for Chrome, Safari and Opera */\n        .fc .fc-datagrid-cell-cushion ::-webkit-scrollbar {\n          display: none;\n        }\n\n        .fc-theme-standard .fc-scrollgrid { \n          border: none;\n        }\n        .fc-timeline-lane-frame:hover {\n          background-color: #e9e9e9;\n          transition-duration: 300ms;\n        }\n        .fc-datagrid-cell-main:hover { \n          cursor: pointer;\n          color: purple;\n        }\n        td > .fc-datagrid-cell-frame {\n          height: 40px !important;\n        }\n        tr > td > .fc-timeline-lane-frame {\n          height: 40px !important;\n        }\n        \n      "}),(0,r.jsxs)(f.u_,{isOpen:k,onClose:_,isCentered:!0,children:[(0,r.jsx)(h.Z,{}),(0,r.jsx)(m.h,{className:"w-20 h-20",children:(0,r.jsx)(p.M,{className:"h-full w-full flex justify-center",children:(0,r.jsx)(x.$,{size:"xl"})})})]}),(0,r.jsxs)(f.u_,{isOpen:I,onClose:W,children:[(0,r.jsx)(h.Z,{}),(0,r.jsx)(b.Z,{staffId:P})]})]})},y=n(2554),k=n(3470),S=n(8003),_=n(4221),C=n(3621),D=n(6973),E=n(947),N=()=>{let{staffList:e}=(0,l.Z)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(k.U,{allowMultiple:!0,children:e.map(e=>(0,r.jsxs)(S.Q,{className:"border-surface3",children:[(0,r.jsx)("h2",{children:(0,r.jsxs)(_.K,{children:[(0,r.jsx)(C.xu,{as:"span",flex:"1",textAlign:"left",children:(0,r.jsx)("h2",{className:"text-center",children:e.name})}),(0,r.jsx)(D.X,{})]})}),(0,r.jsx)(E.H,{pb:4,className:"bg-surface3 rounded-xl hover-shadow",children:(0,r.jsx)(y.Z,{staffId:e.id})})]},e.id))})})},Z=()=>{let[e,t]=(0,i.useState)(!0),n=()=>{t(window.innerWidth>650)};return(0,i.useEffect)(()=>(n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)),[]),(0,r.jsx)("main",{children:e?(0,r.jsx)(v,{}):(0,r.jsx)(N,{})})}},9982:function(e,t,n){"use strict";var r=n(7437),i=n(5405),s=n(3391),a=n(1629),o=n(4159);n(2265);var l=n(9627),d=n(2554);t.Z=e=>{let{staffId:t}=e,{staffList:n}=(0,l.Z)(),c=n.find(e=>e.id===t);return(0,r.jsxs)(i.h,{children:[(0,r.jsxs)(s.x,{children:[c&&c.name," Personal Timetable"]}),(0,r.jsx)(a.o,{}),(0,r.jsx)(o.f,{children:(0,r.jsx)(d.Z,{staffId:t})})]})}},2554:function(e,t,n){"use strict";var r=n(7437),i=n(839),s=n(7766);n(2265);var a=n(9627),o=n(9041),l=n(8910);t.Z=e=>{let{staffId:t}=e,{staffList:n}=(0,a.Z)(),{schedule:d}=(0,o.Z)();n.find(e=>e.id===t);let c=d.filter(e=>e.resourceId===t),u=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=new Date(e),r={month:"long",day:"numeric"};return t&&(r.weekday="long"),n.toLocaleString("en-US",r)},f=e=>e.getHours()>=19?(0,r.jsxs)("div",{className:"flex gap-2 leading-none",children:[(0,r.jsx)(l.v70,{}),(0,r.jsx)(i.x,{children:"Night Shift"})]}):(0,r.jsxs)("div",{className:"flex gap-2 leading-none",children:[(0,r.jsx)(l.Wn6,{}),(0,r.jsx)(i.x,{children:"Day Shift"})]}),h=(e=>{let t=e.sort((e,t)=>new Date(e.start).getTime()-new Date(t.start).getTime()),n={};return t.forEach(e=>{let t=new Date(e.start);t.setDate(t.getDate()-(t.getDay()+6)%7);let r=t.toISOString().slice(0,10);n[r]||(n[r]=[]),n[r].push(e)}),n})(c);return(0,r.jsx)("div",{children:Object.entries(h).map(e=>{let[t,n]=e;return(0,r.jsxs)(s.g,{spacing:1,align:"start",className:"my-4",children:[(0,r.jsxs)(i.x,{fontWeight:"bold",children:["Week of ",u(t,!1)]}),n.map(e=>(0,r.jsxs)("div",{className:"w-full flex justify-between",children:[(0,r.jsx)(i.x,{children:u(e.start)}),f(new Date(e.start))]},e.id))]},t)})})}},9041:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(9797),i=n(4548),s=n.n(i),a=n(8355),o=n.n(a),l=n(4487),d=n.n(l),c=n(2265);function u(){let e=(0,c.useRef)(-1),[t,n]=(0,r.Z)("schedule",{defaultValue:[]}),[i,a]=(0,c.useState)("");async function o(){let e=await fetch("./static/models/model.essence");a(await e.text())}(0,c.useEffect)(()=>{o()},[]);let l=async e=>await fetch("https://conjure-aas.cs.st-andrews.ac.uk/get",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jobid:e,appName:"nurse-rostering"})}).then(e=>e.json()).then(e=>e||null).catch(e=>(console.error(e),null)),d=async e=>(await o(),await fetch("https://conjure-aas.cs.st-andrews.ac.uk/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({appName:"nurse-rostering",solver:"kissat",model:i,data:e,conjure_options:["--savilerow-options","-sat-sum-mdd","--channelling=no","-aai","--responses=2"]})}).then(e=>e.json()).then(e=>e&&e.jobid?e.jobid:null).catch(e=>(console.error(e),null))),u=e=>new Promise(t=>setTimeout(t,e)),f=async t=>{e.current=t.jobid;let r=await l(t.jobid);if(!r)return null;let i=Date.now();for(;"wait"===r.status&&e.current==t.jobid;){if(Date.now()-i>=1e4)return["timeout",[]];await u(1e3),r=await l(t.jobid)}if(!r.solution)return["cancelled",[]];if(r.solution.length>0){let e=function(e,t){let n=s()(),r=1===n.weekday()&&n.isToday()?n:n.weekday(1),i=[7,0],a=[19,0];return["ok",e.map(e=>{let n=e[0][0],s=e[0][1],o=e[1],l=r.add(s-1,"day"),d=1===o?i:a,c=l.hour(d[0]).minute(d[1]).second(0),u=c.clone().add(432e5,"millisecond");return{id:"".concat(n,"-").concat(s,"-").concat(o),resourceId:"".concat(function(e){let t={};for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[e[n]]=n);return t}(t.staffEncoding)[n]),start:c.format(),end:u.format()}})]}(r.solution[0].assignment,t);return n(e[1]),e}return["no-solution",[]]};return{schedule:t,setSchedule:n,getSchedule:function(){return t},postSchedule:async(e,t)=>{let n=new Set;e.forEach(e=>{e.skills.forEach(e=>{n.add(e)})});let r={};e.forEach((e,t)=>{r[e.id]=t+1});let i={};Array.from(n).forEach((e,t)=>{i[e]=t+1});let s={nb_nurses:e.length,nb_weeks:4,nb_skills:n.size,preferred_shift_type:{},maximum_working_days_in_a_row:{},nurse_skills:{},skills_lower_bound:{},disallowed:[]};return e.forEach(e=>{let t=e.constraints.find(e=>"Preferred Shift Time"===e.label),n=(null==t?void 0:t.options[(null==t?void 0:t.selectedIndex)||0])||"Day";s.preferred_shift_type[r[e.id]]="Day"===n?1:2;let a=e.constraints.find(e=>"Maximum Working Days in a Row"===e.label);s.maximum_working_days_in_a_row[r[e.id]]=parseInt((null==a?void 0:a.options[(null==a?void 0:a.selectedIndex)||0])||"0",10),s.nurse_skills[r[e.id]]=e.skills.map(e=>i[e])}),Object.entries(t).forEach(e=>{s.skills_lower_bound[i[e[0]]]=e[1].minCount}),{jobid:await d(JSON.stringify(s)),staffEncoding:r,skillEncoding:i}},fetchSchedule:f}}s().extend(o()),s().extend(d())},9627:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9797),i=n(1872);function s(){let[e,t]=(0,r.Z)("staffList",{defaultValue:[]}),[n,s]=(0,r.Z)("skillList",{defaultValue:{}}),a=(t,r)=>(r.filter(e=>!n.hasOwnProperty(e)).forEach(e=>{n[e]={count:0,minCount:0}}),Object.entries(n).reduce((n,i)=>{var s,a;let[o,l]=i,d=null!==(a=null===(s=e.find(e=>e.id===t))||void 0===s?void 0:s.skills.filter(e=>e===o).length)&&void 0!==a?a:0,c=l.count-d,u=r.filter(e=>e===o).length;return{...n,...c+u>0?{[o]:{count:c+u,minCount:0}}:{}}},{}));return{staffList:e,skillList:n,addStaffMember:(r,a,o)=>{a=a.map(e=>e.toUpperCase()),t([...e,{id:(0,i.Z)(),name:r,skills:a,constraints:o}]),s({...n,...a.reduce((e,t)=>{var r;return{...e,[t]:{count:((null===(r=n[t])||void 0===r?void 0:r.count)||0)+1,minCount:0}}},{})})},removeStaffMember:n=>{t(e.filter(e=>e.id!==n)),s(a(n,[]))},updateStaffMember:(n,r,i,o)=>{t(e.map(e=>e.id===n?{id:n,name:r,skills:i,constraints:o}:e)),s(a(n,i))},countStaffMembers:()=>e.length,setSkillMinCount:(e,t)=>{n[e]?s({...n,[e]:{...n[e],minCount:t}}):console.warn('Skill "'.concat(e,'" not found in skillList.'))}}}}},function(e){e.O(0,[582,554,57,109,550,507,161,538,971,938,744],function(){return e(e.s=2342)}),_N_E=e.O()}]);