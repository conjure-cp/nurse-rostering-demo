(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{3807:function(e,s,l){Promise.resolve().then(l.bind(l,5025))},5025:function(e,s,l){"use strict";l.r(s);var n=l(7437),r=l(9627),a=l(5941),i=l(2332),t=l(8411),c=l(5347),d=l(9103),o=l(8308),x=l(5384),m=l(3770),u=l(2265),f=l(9682);s.default=()=>{let{staffList:e,skillList:s,setSkillMinCount:l}=(0,r.Z)(),[h,p]=(0,u.useState)(""),{isOpen:j,onOpen:b,onClose:N}=(0,a.q)();return(0,n.jsxs)("main",{children:[(0,n.jsx)("h2",{className:"ml-1 md:ml-5 p-4 text-center mb-4",children:"Set the minimum number of nurses with a certain qualification that must be on the clock at all times."}),(0,n.jsxs)("div",{className:"ml-1 md:ml-5 bg-surface1 rounded-xl p-4",children:[(0,n.jsx)(i.U,{className:"flex flex-col gap-2",allowMultiple:!0,children:Object.entries(s).map(s=>(0,n.jsxs)("div",{className:"flex w-full gap-4",children:[(0,n.jsxs)(t.Y2,{defaultValue:s[1].minCount,min:0,className:"max-w-[80px] max-h-[40px]",onChange:e=>{e.trim()&&parseInt(e.trim())>=0&&l(s[0],parseInt(e.trim()))},children:[(0,n.jsx)(t.zu,{}),(0,n.jsxs)(t.Fi,{children:[(0,n.jsx)(t.WQ,{}),(0,n.jsx)(t.Y_,{})]})]}),(0,n.jsxs)(c.Q,{className:"w-full border-b-0 border-t-0",children:[(0,n.jsx)("h2",{children:(0,n.jsxs)(d.K,{className:"rounded-xl",children:[(0,n.jsx)(o.xu,{flex:"1",textAlign:"left",fontWeight:"bold",children:s[0]}),(0,n.jsx)(x.X,{})]})}),(0,n.jsx)(m.H,{pb:4,className:"flex flex-col rounded-xl justify-between border-l-4 border-surface2 py-2",children:e.filter(e=>e.skills.includes(s[0])).map(e=>(0,n.jsx)("div",{className:"hover:bg-surface1 py-2 px-4 rounded-xl cursor-pointer text-primaryText",onClick:()=>{p(e.id),b()},children:e.name},e.name))})]})]},s[0]))})," ",(0,n.jsx)(f.Z,{staffId:h,isModalOpen:j,onModalOpen:b,onModalClose:N})]})]})}}},function(e){e.O(0,[51,571,633,232,714,844,411,682,971,69,744],function(){return e(e.s=3807)}),_N_E=e.O()}]);