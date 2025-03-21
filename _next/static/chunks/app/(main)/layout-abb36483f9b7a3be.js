(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{1247:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>I});var l=s(5155),t=s(4541);s(2115);var r=s(5504),a=s(4101),i=s(4201),o=s(2605),c=s(154),d=s(1695),u=s(9545),h=s(188),x=s(4544),m=s(2515),f=s(6874),p=s.n(f),j=s(351),b=s(3344),g=s(5695);let C=[{name:"Dashboard",icon:m.Qkn,iconActive:m.Uhn,href:"/dashboard"},{name:"Staff",icon:m.AYP,iconActive:m.Itr,href:"/staff"},{name:"Qualifications",icon:m._pB,iconActive:m.SeC,href:"/qualifications"},{name:"Calendar",icon:m.ISr,iconActive:m.GUB,href:"/calendar"}];function v(e){let{children:n}=e,{isOpen:s,onOpen:c,onClose:d}=(0,r.j)();return(0,l.jsxs)(t.az,{children:[(0,l.jsxs)(a.s,{children:[(0,l.jsx)(y,{onClose:()=>d,display:{base:"none",md:"block"},className:"bg-surface m-4 rounded-xl"}),(0,l.jsx)(i._,{autoFocus:!1,isOpen:s,placement:"left",onClose:d,returnFocusOnClose:!1,onOverlayClick:d,size:"full",children:(0,l.jsx)(o.z,{children:(0,l.jsx)(y,{onClose:d})})}),(0,l.jsx)(w,{onOpen:c})]}),(0,l.jsx)(t.az,{ml:{base:0,md:60},p:"4",children:n})]})}let y=e=>{let{onClose:n,...s}=e;return(0,l.jsxs)(t.az,{transition:"500ms ease",w:{base:"full",md:60},pos:"fixed",h:"75%",...s,children:[(0,l.jsxs)(a.s,{h:"20",alignItems:"center",mx:"8",justifyContent:"space-between",children:[(0,l.jsx)(p(),{className:"w-36 text-3xl font-bold pl-2",draggable:!1,href:"/",children:"NRP"}),(0,l.jsx)(c.J,{display:{base:"flex",md:"none"},onClick:n})]}),(0,l.jsx)(a.s,{flexDirection:"column",justifyContent:"space-between",className:"h-[calc(100%-10rem)]",children:(0,l.jsx)(t.az,{className:"[& p]:mt-0",children:C.map(e=>(0,l.jsx)(N,{icon:e.icon,iconActive:e.iconActive,href:e.href,onClick:n,children:e.name},e.name))})})]})},N=e=>{let{icon:n,iconActive:s,href:t,children:r,...i}=e,o=(0,g.usePathname)();return(0,l.jsx)(p(),{href:t,style:{textDecoration:"none"},children:(0,l.jsxs)(a.s,{align:"center",py:"3",px:"6",mx:"4",my:"2",borderRadius:"400",role:"group",cursor:"pointer",width:"fit-content",_hover:{bg:"rgba(231, 233, 234, 0.5)"},className:A(t,o)?"bg-secondaryContainer text-primaryText":"",...i,children:[n&&(0,l.jsx)(d.I,{mr:"4",fontSize:"16",_groupHover:{},as:A(t,o)?s:n}),(0,l.jsx)("p",{className:A(t,o)?"font-bold":"",children:r})]})})},w=e=>{let{onOpen:n,...s}=e,{isOpen:t,onOpen:i,onClose:o}=(0,r.j)(),c=(0,g.usePathname)();return(0,l.jsxs)(a.s,{ml:{base:5,md:"275px"},px:{base:4,md:4},height:"14",width:"100%",alignItems:"center",className:"bg-surface1 rounded-xl mr-4 mt-4",borderBottomWidth:"1px",borderBottomColor:(0,u.dU)("gray.200","gray.800"),justifyContent:{base:"space-between",md:"flex-end"},...s,children:[(0,l.jsx)(h.K,{display:{base:"flex",md:"none"},onClick:n,variant:"outline","aria-label":"open menu",className:"border-none",icon:(0,l.jsx)(j.ND1,{})}),(0,l.jsxs)(x.z,{className:"w-full justify-between pl-4",spacing:{base:"0",md:"6"},children:[(0,l.jsx)(a.s,{className:"uppercase font-bold",justifyContent:"space-between",children:(0,l.jsx)("p",{className:"text-bottom pt-1",children:c?k(c):""})}),"STAFF"===k(c)?(0,l.jsx)(h.K,{className:"bg-primary text-white","aria-label":"Add staff",icon:(0,l.jsx)(m.Raw,{}),onClick:i}):null]}),(0,l.jsx)(b.Ay,{isModalOpen:t,onModalOpen:i,onModalClose:o})]})};function k(e){return e?e.substring(e.lastIndexOf("/")+1).split(".")[0].toUpperCase():""}function A(e,n){return!!n&&e.includes(k(n).toLowerCase())}let S=e=>{let{children:n}=e;return(0,l.jsx)(v,{children:n})};function I(e){let{children:n}=e;return(0,l.jsx)(t.az,{zIndex:1,children:(0,l.jsx)(S,{children:n})})}},2734:(e,n,s)=>{"use strict";s.d(n,{A:()=>r});var l=s(9208),t=s(9737);function r(){let[e,n]=(0,l.A)("staffList",{defaultValue:[]}),[s,r]=(0,l.A)("skillList",{defaultValue:{}}),a=(n,l)=>(l.filter(e=>!s.hasOwnProperty(e)).forEach(e=>{s[e]={count:0,minCount:0}}),Object.entries(s).reduce((s,t)=>{var r,a;let[i,o]=t,c=null!==(a=null===(r=e.find(e=>e.id===n))||void 0===r?void 0:r.skills.filter(e=>e===i).length)&&void 0!==a?a:0,d=o.count-c,u=l.filter(e=>e===i).length;return{...s,...d+u>0?{[i]:{count:d+u,minCount:0}}:{}}},{}));return{staffList:e,skillList:s,addStaffMember:(l,a,i)=>{a=a.map(e=>e.toUpperCase()),n([...e,{id:(0,t.A)(),name:l,skills:a,constraints:i}]),r({...s,...a.reduce((e,n)=>{var l;return{...e,[n]:{count:((null===(l=s[n])||void 0===l?void 0:l.count)||0)+1,minCount:0}}},{})})},removeStaffMember:s=>{n(e.filter(e=>e.id!==s)),r(a(s,[]))},updateStaffMember:(s,l,t,i)=>{n(e.map(e=>e.id===s?{id:s,name:l,skills:t,constraints:i}:e)),r(a(s,t))},countStaffMembers:()=>e.length,setSkillMinCount:(e,n)=>{s[e]?r({...s,[e]:{...s[e],minCount:n}}):console.warn('Skill "'.concat(e,'" not found in skillList.'))}}}},3344:(e,n,s)=>{"use strict";let l;s.d(n,{Ay:()=>I,Pu:()=>A,ZH:()=>S});var t=s(5155),r=s(6391),a=s(5508),i=s(3092),o=s(6562),c=s(8815),d=s(2755),u=s(7766),h=s(4535),x=s(5551),m=s(520),f=s(7085),p=s(122),j=s(4541),b=s(7891),g=s(5796),C=s(4101),v=s(5091),y=s(5417),N=s(981),w=s(2115),k=s(2734);let A=[{label:"Preferred Shift Time",defaultIndex:0,selectedIndex:0,options:["Day","Night"]},{label:"Maximum Working Days in a Row",defaultIndex:3,selectedIndex:3,options:[...Array.from({length:4},(e,n)=>(n+0).toString())]}],S=e=>{let n=[];return n.push((0,t.jsx)("option",{value:e.options[e.selectedIndex],disabled:!0,hidden:!0,children:e.options[e.selectedIndex]},"default")),e.options.forEach((e,s)=>{n.push((0,t.jsx)("option",{value:s,children:e},s))}),n},I=e=>{let{isModalOpen:n,onModalOpen:s,onModalClose:l}=e,{skillList:I,addStaffMember:O}=(0,k.A)(),[z,F]=w.useState(""),[P,_]=w.useState(""),[E,M]=(0,w.useState)(""),[D,T]=(0,w.useState)(["STAFF"]),Q=w.useRef(null),U=e=>{"STAFF"!==e&&T(n=>n.includes(e)?n.filter(n=>n!==e):[...n,e])},B=()=>{""!==z.trim()&&(O(z.trim(),D,A),F(""),_(""),T(["STAFF"]),l())};return(0,t.jsxs)(r.aF,{isOpen:n,onClose:l,children:[(0,t.jsx)(a.m,{}),(0,t.jsxs)(i.$,{children:[(0,t.jsx)(o.r,{children:"Create staff member"}),(0,t.jsx)(c.s,{}),(0,t.jsx)(d.c,{children:(0,t.jsxs)("form",{className:"flex flex-col gap-4",onKeyPress:e=>{"Enter"===e.key&&B()},children:[(0,t.jsx)(u.p,{onChange:e=>F(e.target.value),placeholder:"Name",value:z}),(0,t.jsx)(u.p,{onChange:e=>M(e.target.value),onKeyDown:e=>{if("Enter"===e.key&&""!==E.trim()){e.preventDefault();let n=E.trim().toUpperCase();D.includes(n)||T(e=>[...e,n]),M("")}},placeholder:"New Qualification",value:E}),(0,t.jsxs)(h.B,{children:[Object.keys(I).map((e,n)=>(0,t.jsx)(h.Q,{children:(0,t.jsx)(x.E,{size:"l",onClick:()=>U(e),colorScheme:D.includes(e)?"purple":"gray",cursor:"pointer",children:e},n)},n)),D.filter(e=>!I.hasOwnProperty(e)).map((e,n)=>(0,t.jsx)(h.Q,{children:(0,t.jsx)(x.E,{size:"l",onClick:()=>U(e),colorScheme:D.includes(e)?"purple":"gray",cursor:"pointer",children:e},"new-".concat(n))},n))]}),(0,t.jsx)(m.n,{allowToggle:!0,children:(0,t.jsxs)(f.A,{children:[(0,t.jsx)("h2",{children:(0,t.jsxs)(p.J,{children:[(0,t.jsx)(j.az,{flex:"1",textAlign:"left",children:"Constraints"}),(0,t.jsx)(b.Q,{})]})}),(0,t.jsx)(g.v,{pb:4,children:A.map((e,n)=>(0,t.jsxs)("div",{className:"flex my-4 gap-4",children:[(0,t.jsx)(C.s,{className:"text-sm basis-[150%] items-center justify-end",children:(0,t.jsx)("label",{className:"align-right text-right",children:e.label})}),(0,t.jsx)(v.l,{className:"my-1",defaultValue:e.defaultIndex,onChange:n=>{e.selectedIndex=parseInt(n.target.value)},children:S(e)},n)]},n))})]})})]})}),(0,t.jsxs)(y.j,{children:[(0,t.jsx)(N.$,{onClick:l,variant:"ghost",children:"Cancel"}),(0,t.jsx)(N.$,{className:"bg-primary text-white hover:shadow-lg hover:bg-opacity-80",mr:3,onClick:B,disabled:""===z.trim(),ref:Q,children:"Create"})]})]})]})}},6018:(e,n,s)=>{Promise.resolve().then(s.bind(s,1247))}},e=>{var n=n=>e(e.s=n);e.O(0,[479,844,628,343,928,761,864,312,441,684,358],()=>n(6018)),_N_E=e.O()}]);