(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[557],{5886:function(e,s,l){Promise.resolve().then(l.bind(l,1646))},1646:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return o}});var t=l(7437),n=l(9348),a=e=>{let{title:s,value:l,unit:a,diffPercent:i,isPositive:r}=e;return(0,t.jsxs)("div",{className:"flex flex-col justify-between row-span-2 col-span-2 bg-[#f9f9fc] p-5 rounded-xl",children:[(0,t.jsx)("p",{className:"text-lg font-semibold text-gray-500",children:s}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{className:"flex items-end text-lg",children:[(0,t.jsx)("span",{className:"text-5xl",children:l}),(0,t.jsx)("span",{children:a}),r?(0,t.jsx)(n.bNO,{className:"h-4.5 text-emerald-400 mb-1 ml-2"}):(0,t.jsx)(n.x4Y,{className:"h-4.5 text-red-400 mb-1 ml-2"}),(0,t.jsx)("span",{className:"text-md ".concat(r?"text-emerald-400":"text-red-400"),children:i})]}),(0,t.jsx)("p",{className:"mt-1 text-sm text-gray-400",children:"전 달 대비 퍼센트"})]})]})},i=l(8181),r=l(105);l(500);var c=e=>{let{labels:s,datasets:l,title:n,backgroundColor:a,unit:i}=e;return(0,t.jsx)(r.$Q,{data:{labels:s,datasets:[{backgroundColor:a,data:l,barThickness:40}]},options:{layout:{padding:{top:10,left:20,right:20,bottom:20}},scales:{x:{ticks:{font:{size:15},maxTicksLimit:4},grid:{display:!1}},y:{display:!0}},plugins:{title:{display:!0,align:"start",text:n,font:{size:19},padding:{top:5,bottom:25}},legend:{display:!1},tooltip:{titleFont:{size:12},bodyFont:{size:14},backgroundColor:"rgba(0, 0, 0, 0.6)",boxPadding:20,callbacks:{label:function(e){let s=e.formattedValue||"";return"".concat(s).concat(i)}}},datalabels:{display:!0,anchor:"end",align:"end",offset:5,font:{size:13}}},responsive:!0,maintainAspectRatio:!1}})},d=l(4033),o=()=>{let e=(0,d.usePathname)();return(0,t.jsxs)("div",{className:"flex w-full",children:[(0,t.jsx)(i.Z,{pathname:e}),(0,t.jsx)("main",{className:"w-full",children:(0,t.jsxs)("section",{className:"grid grid-cols-6 grid-rows-8 h-screen p-14 gap-5",children:[(0,t.jsx)(a,{title:"총 회의 시간",value:4.8,unit:"시간",diffPercent:"13%",isPositive:!0}),(0,t.jsx)(a,{title:"평균 회의 시간",value:69,unit:"분",diffPercent:"10%",isPositive:!0}),(0,t.jsx)(a,{title:"평균 문자 수",value:15241,unit:"개",diffPercent:"8%",isPositive:!1}),(0,t.jsx)("div",{className:"flex flex-col justify-between row-span-4 col-span-3 bg-[#f9f9fc] p-5 rounded-xl",children:(0,t.jsx)(c,{labels:["9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10"],datasets:[.3,1,.8,1.2,.5,1.1,.6,1.8,1.3,1.2],title:"최근 회의 시간",unit:"시간",backgroundColor:"#34d399"})}),(0,t.jsx)("div",{className:"flex flex-col justify-between row-span-4 col-span-3 bg-[#f9f9fc] p-5 rounded-xl",children:(0,t.jsx)(c,{labels:["9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10","9/3 10:10"],datasets:[5e3,14e3,1e4,15e3,6e3,8e3,4e3,17e3,11e3,11500],title:"최근 회의 문자 수",unit:"개",backgroundColor:"#a8a29e"})})]})})]})}},8181:function(e,s,l){"use strict";l.d(s,{Z:function(){return o}});var t=l(7437),n=l(1396),a=l.n(n),i=e=>{let{pathname:s,href:l,title:n}=e;return(0,t.jsx)(a(),{href:l,className:"flex w-full items-center py-3.5 px-6 rounded-xl ".concat(s===l?"bg-gray-200":""),children:(0,t.jsx)("ul",{className:"flex w-full justify-between items-center",children:(0,t.jsx)("span",{children:n})})})},r=l(2265),c=function(e){let[s,l]=(0,r.useState)(!1);(0,r.useEffect)(()=>{e&&l(!0)},[e]);let t=e&&s;return[()=>{e||l(!1)},t]},d=l(2410),o=e=>{let{pathname:s}=e,[l,n]=(0,r.useState)("group1"),[o,x]=(0,r.useState)(!1),[u,f]=c(o);return(0,t.jsxs)("aside",{className:"flex flex-col w-[22rem] h-screen px-2 bg-[#f9f9fc]",children:[(0,t.jsx)("div",{className:"flex items-center px-4 text-lg",children:(0,t.jsx)("div",{className:"flex items-center py-5 w-full border-b px-4",children:(0,t.jsx)(a(),{href:"/",children:(0,t.jsxs)("h1",{children:["Minute ",(0,t.jsx)("span",{className:"text-blue-300",children:"Mind"})]})})})}),(0,t.jsxs)(a(),{href:"/profile",className:"flex items-center px-6 py-4 my-2 rounded-lg ".concat("/profile"===s?"bg-gray-200":""),children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-full overflow-hidden",children:(0,t.jsx)("img",{src:"/profile.jpeg",alt:"profile"})}),(0,t.jsx)("span",{className:"ml-5",children:"현용재"})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-center items-center px-2 relative bg-slate-400 rounded-xl mb-2",children:[(0,t.jsxs)("div",{className:"flex justify-center items-center",children:[(0,t.jsx)(a(),{href:"/group",className:"px-4 py-2",children:l}),(0,t.jsx)("button",{type:"button",onClick:()=>{x(e=>!e)},children:o?(0,t.jsx)(d.RPR,{className:"mt-0.5"}):(0,t.jsx)(d.yQg,{className:"mt-0.5"})})]}),(0,t.jsx)("div",{onTransitionEnd:u,className:"overflow-hidden",children:(0,t.jsxs)("div",{className:"transition-all text-darkgray ".concat(f?"max-h-screen duration-[300ms] ease-in":"max-h-0 duration-[200ms] ease-out"),children:[(0,t.jsx)("button",{className:"flex w-full items-center px-6 py-2 rounded-xl",onClick:()=>n("group1"),children:(0,t.jsx)("span",{children:"group1"})}),(0,t.jsx)("button",{className:"flex w-full items-center px-6 py-2 rounded-xl",onClick:()=>n("group2"),children:(0,t.jsx)("span",{children:"group2"})}),(0,t.jsx)("button",{className:"flex w-full items-center px-6 py-2 rounded-xl",onClick:()=>n("group3"),children:(0,t.jsx)("span",{children:"group3"})}),(0,t.jsx)("button",{className:"flex w-full items-center px-6 py-2 rounded-xl",onClick:()=>n("group4"),children:(0,t.jsx)("span",{children:"group4"})})]})})]}),(0,t.jsxs)("nav",{children:[(0,t.jsx)(i,{pathname:s,title:"개요",href:"/overview"}),(0,t.jsx)(i,{pathname:s,title:"녹음",href:"/record"}),(0,t.jsx)(i,{pathname:s,title:"회의 기록",href:"/history"})]})]})}}},function(e){e.O(0,[400,169,674,234,313,971,596,744],function(){return e(e.s=5886)}),_N_E=e.O()}]);