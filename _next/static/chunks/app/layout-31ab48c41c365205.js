(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4215:function(e,s,t){Promise.resolve().then(t.bind(t,386))},386:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return g}});var r=t(7437);t(115),t(8676);var n=t(2159),c=t(9240),a=t(4340),l=t(4262),o=t(3059);let i=(0,l.B1)({config:{initialColorMode:"light",useSystemColorMode:!1},components:{Badge:{baseStyle:{paddingY:"3px",paddingX:"8px"}}},fonts:{heading:"'Inter', sans-serif",body:"'Inter', sans-serif"},colors:{primary:{main:"#FFFFFF",50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"}},styles:{global:e=>({body:{bg:"#FFFBFF"},p:{color:"#33333"},h1:{color:"black"},h2:{color:"black"},h3:{color:"black"}})}},(0,o.A)({colorScheme:"purple"}));var d=t(2265);let h=(0,d.createContext)({activeNavItem:"/dashboard",setActiveNavItem:()=>{}});var m=function(e){let{children:s}=e,[t,n]=(0,d.useState)("/dashboard");return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(h.Provider,{value:{activeNavItem:t,setActiveNavItem:n},children:s})})},u=t(6788),x={logo:"conjure-cp-logo.png",title:"Nurse Rostering",author:"Aldiyar Ablyazov",author_github:"https://github.com/Aldiyazov",description:"This project is created as a dissertation project at the University of St Andrews to simplify and optimise nurse scheduling in healthcare facilities.",repo_url:"conjure-cp/task-allocation-demo",github:"https://github.com/conjure-cp/nurse-rostering-demo",license:"Mozilla Public License 2.0"};let p="conjure-cp/nurse-rostering-demo";var f=()=>{let[e,s]=(0,d.useState)([]),[t,n]=(0,d.useState)(""),{logo:c,title:a,author:l,description:o,author_github:i,repo_url:h,github:m,license:f}=x;(0,d.useEffect)(()=>{fetch("https://api.github.com/repos/".concat(p,"/contributors")).then(e=>e.json()).then(e=>{s(e.filter(e=>"Aldiyazov"!==e.login&&!e.login.endsWith("[bot]")&&!e.login.endsWith("-user")).map(e=>e.login))}).catch(e=>console.error("Error:",e)),fetch("https://api.github.com/repos/".concat(p)).then(e=>e.json()).then(e=>{let s=new Date(e.updated_at);n("".concat(s.getFullYear(),"-").concat(String(s.getMonth()+1).padStart(2,"0"),"-").concat(String(s.getDate()).padStart(2,"0")))}).catch(e=>console.error("Error:",e))},[]);let g=[];for(let s=0;s<e.length;s+=3)g.push(e.slice(s,s+3));return(0,r.jsx)("div",{className:"h-full p-4 m-4 bg-banner rounded-xl",children:(0,r.jsxs)("div",{className:" container m-auto grid grid-cols-5 grid-flow-col-dense gap-2",children:[(0,r.jsxs)("div",{className:"col-span-2 row-span-5 flex flex-col items-start p-4",children:[(0,r.jsxs)("div",{className:"flex items-center m-1",children:[(0,r.jsx)("img",{src:"".concat("/nurse-rostering-demo","/static/images/conjure-cp-logo.png"),alt:"conjure-cp",className:"w-16 h-16 "}),(0,r.jsx)("div",{className:"text-xl font-semibold ml-4",children:(0,r.jsx)("a",{href:"https://github.com/conjure-cp",target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:"conjure-cp"})})]}),(0,r.jsx)("div",{className:"text-2xl font-bold tracking-wide mb-4 m-1",children:a}),(0,r.jsx)("div",{className:"mb-2 m-1",children:o}),(0,r.jsxs)("div",{className:"mb-2 m-1",children:["License: ",f]})]}),(0,r.jsx)(u.i,{className:"col-span-2"}),(0,r.jsxs)("div",{className:"row-start-2 col-span-1 flex flex-col items-stretch",children:[(0,r.jsx)("span",{className:"text-lg font-semibold mb-2",children:"Project Author"}),(0,r.jsx)("div",{className:"grid grid-cols-2 grid-flow-col gap-2 overflow-auto",children:(0,r.jsx)("a",{href:i,className:"mb-1 hover:underline",children:l})})]}),(0,r.jsxs)("div",{className:"row-start-2 col-span-2 flex flex-col items-stretch",children:[(0,r.jsx)("span",{className:"text-lg font-semibold mb-2",children:"Project Contributors"}),(0,r.jsx)("p",{className:"text-sm",children:e.map((e,s)=>(0,r.jsx)("a",{href:"https://github.com/".concat(e),className:"mb-1 hover:underline pr-4",children:e},s))})]}),(0,r.jsx)(u.i,{className:"col-span-2"}),(0,r.jsxs)("div",{className:"row-start-4 col-span-1 flex flex-col items-stretch",children:[(0,r.jsx)("span",{className:"text-lg font-semibold mb-2",children:"Links"}),(0,r.jsx)("a",{href:"".concat(m),className:"mb-1 hover:underline",children:"Source code"}),(0,r.jsx)("a",{href:"".concat(m,"#readme"),className:"mb-1 hover:underline",children:"Documentation"}),(0,r.jsx)("a",{href:"".concat(m,"#user-interface"),className:"mb-1 hover:underline",children:"User Interface"})]}),(0,r.jsxs)("div",{className:"row-start-4 col-span-1 flex flex-col items-stretch",children:[(0,r.jsx)("span",{className:"text-lg font-semibold mb-2",children:"Contact us"}),(0,r.jsx)("a",{href:"".concat(m,"/issues/new"),className:"hover:underline",children:"Report an Issue"})]}),(0,r.jsx)(u.i,{className:"col-span-2"})]})})};function g(e){let{children:s}=e;return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("title",{children:"NRP"})]}),(0,r.jsx)("body",{children:(0,r.jsx)(m,{children:(0,r.jsx)(n.x,{theme:i,children:(0,r.jsxs)(c.k,{direction:"column",height:"120vh",justifyContent:"space-between",children:[(0,r.jsx)(a.xu,{children:s}),(0,r.jsx)(a.xu,{zIndex:2,height:"auto",color:"primaryText",children:(0,r.jsx)(f,{})})]})})})})]})}},115:function(){},8676:function(){}},function(e){e.O(0,[664,595,829,336,322,575,971,23,744],function(){return e(e.s=4215)}),_N_E=e.O()}]);