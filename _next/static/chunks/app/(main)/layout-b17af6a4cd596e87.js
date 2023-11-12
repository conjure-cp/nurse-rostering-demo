(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{8019:function(e,n,t){Promise.resolve().then(t.bind(t,7927))},7927:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return MainLayout}});var l=t(7437),a=t(3621);t(2265);var s=t(8402),r=t(6621),i=t(5651),o=t(1851),c=t(6231),d=t(6248),u=t(5035),h=t(6876),f=t(2811),x=t(8910),m=t(1396),p=t.n(m),j=t(8920),b=t(876),g=t(4033);let C=[{name:"Dashboard",icon:x.JZ9,iconActive:x.bUq,href:"/dashboard"},{name:"Staff",icon:x.snE,iconActive:x.te,href:"/staff"},{name:"Qualifications",icon:x.Ze$,iconActive:x.MVI,href:"/qualifications"},{name:"Calendar",icon:x.CLb,iconActive:x.mbS,href:"/calendar"}];function SidebarWithHeader(e){let{children:n}=e,{isOpen:t,onOpen:c,onClose:d}=(0,s.q)();return(0,l.jsxs)(a.xu,{children:[(0,l.jsxs)(r.k,{children:[(0,l.jsx)(SidebarContent,{onClose:()=>d,display:{base:"none",md:"block"},className:"bg-surface m-4 rounded-xl"}),(0,l.jsx)(i.d,{autoFocus:!1,isOpen:t,placement:"left",onClose:d,returnFocusOnClose:!1,onOverlayClick:d,size:"full",children:(0,l.jsx)(o.s,{children:(0,l.jsx)(SidebarContent,{onClose:d})})}),(0,l.jsx)(MobileNav,{onOpen:c})]}),(0,l.jsx)(a.xu,{ml:{base:0,md:60},p:"4",children:n})]})}let SidebarContent=e=>{let{onClose:n,...t}=e;return(0,l.jsxs)(a.xu,{transition:"500ms ease",w:{base:"full",md:60},pos:"fixed",h:"75%",...t,children:[(0,l.jsxs)(r.k,{h:"20",alignItems:"center",mx:"8",justifyContent:"space-between",children:[(0,l.jsx)(p(),{className:"w-36 text-3xl font-bold pl-2",draggable:!1,href:"/",children:"NRP"}),(0,l.jsx)(c.P,{display:{base:"flex",md:"none"},onClick:n})]}),(0,l.jsx)(r.k,{flexDirection:"column",justifyContent:"space-between",className:"h-[calc(100%-10rem)]",children:(0,l.jsx)(a.xu,{className:"[& p]:mt-0",children:C.map(e=>(0,l.jsx)(NavItem,{icon:e.icon,iconActive:e.iconActive,href:e.href,onClick:n,children:e.name},e.name))})})]})},NavItem=e=>{let{icon:n,iconActive:t,href:a,children:s,...i}=e,o=(0,g.usePathname)();return(0,l.jsx)(p(),{href:a,style:{textDecoration:"none"},children:(0,l.jsxs)(r.k,{align:"center",py:"3",px:"6",mx:"4",my:"2",borderRadius:"400",role:"group",cursor:"pointer",width:"fit-content",_hover:{bg:"rgba(231, 233, 234, 0.5)"},className:hrefIncludesPath(a,o)?"bg-secondaryContainer text-primaryText":"",...i,children:[n&&(0,l.jsx)(d.J,{mr:"4",fontSize:"16",_groupHover:{},as:hrefIncludesPath(a,o)?t:n}),(0,l.jsx)("p",{className:hrefIncludesPath(a,o)?"font-bold":"",children:s})]})})},MobileNav=e=>{let{onOpen:n,...t}=e,{isOpen:a,onOpen:i,onClose:o}=(0,s.q)(),c=(0,g.usePathname)();return(0,l.jsxs)(r.k,{ml:{base:5,md:"275px"},px:{base:4,md:4},height:"14",width:"100%",alignItems:"center",className:"bg-surface1 rounded-xl mr-4 mt-4",borderBottomWidth:"1px",borderBottomColor:(0,u.ff)("gray.200","gray.800"),justifyContent:{base:"space-between",md:"flex-end"},...t,children:[(0,l.jsx)(h.h,{display:{base:"flex",md:"none"},onClick:n,variant:"outline","aria-label":"open menu",className:"border-none",icon:(0,l.jsx)(j.cur,{})}),(0,l.jsxs)(f.U,{className:"w-full justify-between pl-4",spacing:{base:"0",md:"6"},children:[(0,l.jsx)(r.k,{className:"uppercase font-bold",justifyContent:"space-between",children:(0,l.jsx)("p",{className:"text-bottom pt-1",children:c?getPageName(c):""})}),"STAFF"===getPageName(c)?(0,l.jsx)(h.h,{className:"bg-primary text-white","aria-label":"Add staff",icon:(0,l.jsx)(x.WZt,{}),onClick:i}):null]}),(0,l.jsx)(b.ZP,{isModalOpen:a,onModalOpen:i,onModalClose:o})]})};function getPageName(e){if(!e)return"";let n=e.substring(e.lastIndexOf("/")+1),t=n.split(".")[0],l=t.toUpperCase();return l}function hrefIncludesPath(e,n){return!!n&&e.includes(getPageName(n).toLowerCase())}var components_SideLayout=e=>{let{children:n}=e;return(0,l.jsx)(SidebarWithHeader,{children:n})};function MainLayout(e){let{children:n}=e;return(0,l.jsx)(a.xu,{zIndex:1,children:(0,l.jsx)(components_SideLayout,{children:n})})}},876:function(e,n,t){"use strict";t.d(n,{Cb:function(){return N},HU:function(){return getOptionArray}});var l=t(7437),a=t(954),s=t(6526),r=t(5405),i=t(3391),o=t(1629),c=t(4159),d=t(1091),u=t(6095),h=t(1107),f=t(3470),x=t(8003),m=t(4221),p=t(3621),j=t(6973),b=t(947),g=t(6621),C=t(6641),y=t(8610),v=t(1504),k=t(2265),S=t(1215);let N=[{label:"Preferred Shift Time",defaultIndex:0,selectedIndex:0,options:["Day","Night"]},{label:"Maximum Working Days in a Row",defaultIndex:3,selectedIndex:3,options:[...Array.from({length:4},(e,n)=>(n+0).toString())]}],getOptionArray=e=>{let n=[];return n.push((0,l.jsx)("option",{value:e.options[e.selectedIndex],disabled:!0,hidden:!0,children:e.options[e.selectedIndex]},"default")),e.options.forEach((e,t)=>{n.push((0,l.jsx)("option",{value:t,children:e},t))}),n};n.ZP=e=>{let{isModalOpen:n,onModalOpen:t,onModalClose:w}=e,{skillList:I,addStaffMember:P}=(0,S.Z)(),[O,A]=k.useState(""),[L,M]=k.useState(""),[U,Z]=(0,k.useState)(""),[_,F]=(0,k.useState)(["STAFF"]),E=k.useRef(null),handleSkillBadgeClick=e=>{"STAFF"!==e&&F(n=>n.includes(e)?n.filter(n=>n!==e):[...n,e])},handleCreateStaff=()=>{""!==O.trim()&&(P(O.trim(),_,N),A(""),M(""),F(["STAFF"]),w())};return(0,l.jsxs)(a.u_,{isOpen:n,onClose:w,children:[(0,l.jsx)(s.Z,{}),(0,l.jsxs)(r.h,{children:[(0,l.jsx)(i.x,{children:"Create staff member"}),(0,l.jsx)(o.o,{}),(0,l.jsx)(c.f,{children:(0,l.jsxs)("form",{className:"flex flex-col gap-4",onKeyPress:e=>{"Enter"===e.key&&handleCreateStaff()},children:[(0,l.jsx)(d.I,{onChange:e=>A(e.target.value),placeholder:"Name",value:O}),(0,l.jsx)(d.I,{onChange:e=>Z(e.target.value),onKeyDown:e=>{if("Enter"===e.key&&""!==U.trim()){e.preventDefault();let n=U.trim().toUpperCase();_.includes(n)||F(e=>[...e,n]),Z("")}},placeholder:"New Qualification",value:U}),(0,l.jsxs)(u.E,{children:[Object.keys(I).map((e,n)=>(0,l.jsx)(u.U,{children:(0,l.jsx)(h.C,{size:"l",onClick:()=>handleSkillBadgeClick(e),colorScheme:_.includes(e)?"purple":"gray",cursor:"pointer",children:e},n)},n)),_.filter(e=>!I.hasOwnProperty(e)).map((e,n)=>(0,l.jsx)(u.U,{children:(0,l.jsx)(h.C,{size:"l",onClick:()=>handleSkillBadgeClick(e),colorScheme:_.includes(e)?"purple":"gray",cursor:"pointer",children:e},"new-".concat(n))},n))]}),(0,l.jsx)(f.U,{allowToggle:!0,children:(0,l.jsxs)(x.Q,{children:[(0,l.jsx)("h2",{children:(0,l.jsxs)(m.K,{children:[(0,l.jsx)(p.xu,{flex:"1",textAlign:"left",children:"Constraints"}),(0,l.jsx)(j.X,{})]})}),(0,l.jsx)(b.H,{pb:4,children:N.map((e,n)=>(0,l.jsxs)("div",{className:"flex my-4 gap-4",children:[(0,l.jsx)(g.k,{className:"text-sm basis-[150%] items-center justify-end",children:(0,l.jsx)("label",{className:"align-right text-right",children:e.label})}),(0,l.jsx)(C.P,{className:"my-1",defaultValue:e.defaultIndex,onChange:n=>{e.selectedIndex=parseInt(n.target.value)},children:getOptionArray(e)},n)]},n))})]})})]})}),(0,l.jsxs)(y.m,{children:[(0,l.jsx)(v.z,{onClick:w,variant:"ghost",children:"Cancel"}),(0,l.jsx)(v.z,{className:"bg-primary text-white hover:shadow-lg hover:bg-opacity-80",mr:3,onClick:handleCreateStaff,disabled:""===O.trim(),ref:E,children:"Create"})]})]})]})}},1215:function(e,n,t){"use strict";t.d(n,{Z:function(){return useStaffList}});var l=t(9797),a=t(1872);function useStaffList(){let[e,n]=(0,l.Z)("staffList",{defaultValue:[]}),[t,s]=(0,l.Z)("skillList",{defaultValue:{}}),getUpdatedSkillList=(n,l)=>{let a=l.filter(e=>!t.hasOwnProperty(e));return a.forEach(e=>{t[e]={count:0,minCount:0}}),Object.entries(t).reduce((t,a)=>{var s,r;let[i,o]=a,c=null!==(r=null===(s=e.find(e=>e.id===n))||void 0===s?void 0:s.skills.filter(e=>e===i).length)&&void 0!==r?r:0,d=o.count-c,u=l.filter(e=>e===i).length;return{...t,...d+u>0?{[i]:{count:d+u,minCount:0}}:{}}},{})};return{staffList:e,skillList:t,addStaffMember:(l,r,i)=>{r=r.map(e=>e.toUpperCase());let o={id:(0,a.Z)(),name:l,skills:r,constraints:i};n([...e,o]),s({...t,...r.reduce((e,n)=>{var l;return{...e,[n]:{count:((null===(l=t[n])||void 0===l?void 0:l.count)||0)+1,minCount:0}}},{})})},removeStaffMember:t=>{let l=e.filter(e=>e.id!==t);n(l);let a=getUpdatedSkillList(t,[]);s(a)},updateStaffMember:(t,l,a,r)=>{let i=e.map(e=>e.id===t?{id:t,name:l,skills:a,constraints:r}:e);n(i);let o=getUpdatedSkillList(t,a);s(o)},countStaffMembers:()=>e.length,setSkillMinCount:(e,n)=>{t[e]?s({...t,[e]:{...t[e],minCount:n}}):console.warn('Skill "'.concat(e,'" not found in skillList.'))}}}}},function(e){e.O(0,[582,57,109,782,507,177,39,971,472,744],function(){return e(e.s=8019)}),_N_E=e.O()}]);