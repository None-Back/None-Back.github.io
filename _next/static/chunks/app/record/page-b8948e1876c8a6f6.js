(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{990:function(e,l,a){Promise.resolve().then(a.bind(a,9960))},9960:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return m}});var t=a(7437),s=a(8181),n=a(4033),r=a(2265),p=e=>{let{index:l,title:a,day:s,pathName:n,clicked:r,event:p}=e;return(0,t.jsxs)("div",{className:"".concat(r?"col-span-2":"col-span-1"," rounded-lg border border-slate-300 hover:border-slate-400 w-auto"),onClick:()=>p(l),children:[(0,t.jsxs)("div",{className:"p-1.5",children:[(0,t.jsx)("p",{className:"text-black font-medium text-lg",children:a}),(0,t.jsx)("p",{className:"text-slate-500 text-sm",children:s})]}),(0,t.jsx)("div",{className:"bg-[#f0f3f4] rounded-b-lg border-slate-300",children:(0,t.jsx)("audio",{className:"w-full",controls:!0,src:n})})]})},i=()=>{let[e,l]=(0,r.useState)([]),[a,s]=(0,r.useState)(1);return(0,r.useEffect)(()=>{l([{title:"example1",day:"2012-12-31 13:10",pathName:"./path/example/example.mp3"},{title:"example2",day:"2015-09-23 23:10",pathName:"./path/example/example.mp3"},{title:"example3",day:"2019-10-23 09:10",pathName:"./path/example/example.mp3"},{title:"example4",day:"2020-01-14 04:10",pathName:"./path/example/example.mp3"},{title:"example5",day:"2020-04-16 18:10",pathName:"./path/example/example.mp3"},{title:"example6",day:"2020-04-16 19:10",pathName:"./path/example/example.mp3"},{title:"example7",day:"2020-06-12 10:10",pathName:"./path/example/example.mp3"},{title:"example8",day:"2020-06-13 13:10",pathName:"./path/example/example.mp3"},{title:"example9",day:"2022-04-20 09:10",pathName:"./path/example/example.mp3"},{title:"example10",day:"2022-12-20 15:10",pathName:"./path/example/example.mp3"},{title:"example11",day:"2023-06-25 17:10",pathName:"./path/example/example.mp3"}])},[]),(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",gridAutoFlow:"dense",gap:"0.8rem"},children:e.map((e,l)=>(0,t.jsx)(p,{index:l+1,...e,event:s,clicked:a===l+1},l))})},m=()=>{let e=(0,n.usePathname)();return(0,t.jsxs)("div",{className:"flex w-full",children:[(0,t.jsx)(s.Z,{pathname:e}),(0,t.jsx)("main",{className:"w-full",children:(0,t.jsxs)("div",{className:"w-full px-14",children:[(0,t.jsx)("img",{src:"/dummp.png",alt:"dump"}),(0,t.jsx)(i,{})]})})]})}},8181:function(e,l,a){"use strict";a.d(l,{Z:function(){return x}});var t=a(7437),s=a(1396),n=a.n(s),r=e=>{let{pathname:l,href:a,title:s}=e;return(0,t.jsx)(n(),{href:a,className:"flex w-full items-center pt-7 px-6 rounded-xl ".concat(l===a?"bg-gray-200":""),children:(0,t.jsx)("ul",{className:"flex w-full justify-between items-center",children:(0,t.jsx)("span",{children:s})})})},p=a(2265),i=function(e){let[l,a]=(0,p.useState)(!1);(0,p.useEffect)(()=>{e&&a(!0)},[e]);let t=e&&l;return[()=>{e||a(!1)},t]},m=a(2410),x=e=>{let{pathname:l}=e,[a,s]=(0,p.useState)("group1"),[x,c]=(0,p.useState)(!1),[d,u]=i(x);return(0,t.jsxs)("aside",{className:"flex flex-col w-[22rem] h-screen px-2 bg-[#f9f9fc]",children:[(0,t.jsx)("div",{className:"flex items-center px-4 text-lg",children:(0,t.jsx)("div",{className:"flex items-center py-5 w-full border-b px-4",children:(0,t.jsx)(n(),{href:"/",children:(0,t.jsxs)("h1",{children:["Minute ",(0,t.jsx)("span",{className:"text-blue-300",children:"Mind"})]})})})}),(0,t.jsxs)(n(),{href:"/profile",className:"flex items-center px-6 py-4 my-2 rounded-lg ".concat("/profile"===l?"bg-gray-200":""),children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-full overflow-hidden",children:(0,t.jsx)("img",{src:"/profile.jpeg",alt:"profile"})}),(0,t.jsx)("span",{className:"ml-5",children:"현용재"})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-center items-center px-2 relative bg-slate-400 rounded-xl",children:[(0,t.jsxs)("div",{className:"flex justify-center items-center",children:[(0,t.jsx)(n(),{href:"/group",className:"px-4 py-2",children:a}),(0,t.jsx)("button",{type:"button",onClick:()=>{c(e=>!e)},children:x?(0,t.jsx)(m.RPR,{className:"mt-0.5"}):(0,t.jsx)(m.yQg,{className:"mt-0.5"})})]}),(0,t.jsx)("div",{onTransitionEnd:d,className:"overflow-hidden",children:(0,t.jsxs)("div",{className:"transition-all text-darkgray ".concat(u?"max-h-screen duration-[300ms] ease-in":"max-h-0 duration-[200ms] ease-out"),children:[(0,t.jsx)("button",{className:"flex w-full items-center px-6 py-2 rounded-xl",onClick:()=>s("group1"),children:(0,t.jsx)("span",{children:"group1"})}),(0,t.jsx)("button",{className:"flex w-full items-center px-6 py-2 rounded-xl",onClick:()=>s("group2"),children:(0,t.jsx)("span",{children:"group2"})}),(0,t.jsx)("button",{className:"flex w-full items-center px-6 py-2 rounded-xl",onClick:()=>s("group3"),children:(0,t.jsx)("span",{children:"group3"})}),(0,t.jsx)("button",{className:"flex w-full items-center px-6 py-2 rounded-xl",onClick:()=>s("group4"),children:(0,t.jsx)("span",{children:"group4"})})]})})]}),(0,t.jsxs)("nav",{children:[(0,t.jsx)(r,{pathname:l,title:"개요",href:"/overview"}),(0,t.jsx)(r,{pathname:l,title:"녹음",href:"/record"}),(0,t.jsx)(r,{pathname:l,title:"회의 기록",href:"/history"})]})]})}}},function(e){e.O(0,[400,234,971,596,744],function(){return e(e.s=990)}),_N_E=e.O()}]);