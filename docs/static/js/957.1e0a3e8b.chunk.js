"use strict";(self.webpackChunkreact_portfolio=self.webpackChunkreact_portfolio||[]).push([[957],{7634:function(e,t,n){n.d(t,{E9:function(){return a}});var r=JSON.parse('{"global":{"aboutAlb":"About Alberto","aboutCode":"Code","bloodsucker":"Bloodsucker","bubbleChart":"Bubble Chart","watches":"Watches","wordClock":"Word clock","test":"TEST"},"aboutAlberto":{"title":"Who i am?","title1":"...And why i am?!","linkedin":"https://www.linkedin.com/in/alberto-callegari-756314142/","profileCard":{"fullName":"Alberto Callegari","name":"Alberto","bDay":"06/09/1993","nationality":"Treviso, Italy","role":"Software Developer Engineer","secondRole":"FE Developer"},"aboutDescription":{"title":"Hello \ud83d\udc4b I\'m","feDev":"Front-end developer","swEng":"Software developer Engineer","swEngMobile":"SW Engineer","aboutDesc":"In my academic experience I have attended several courses in computer science and software engineering always trying to keep myself updated and learn new things. In my work experience instead I practiced the entire software lifecycle, from requirements discussions with customers to UI and UX analysis and processing with the design team to software distribution and maintenance. I have collaborated on interesting projects for big clients in Italy where I have learned a lot, I love my job day by day. I worked with many technologies, from simple landing pages with simple html, css and javascript to single page application using frameworks like React.js or Angular and I have had experiences with CMS such as Magnolia CMS, Open CMS, Wordpress and Adobe Experience Manager. Right now I\'m using React/Typescript, Node, Html, SASS (CSS), React.js or Angular as Frontend Framework, i also used in the past some html template engines like Pug/Jade to make the html templates building faster.","aboutDesc2":"This react project is meant to be a set of components that I have made over time."},"techCorner":{"title":"Tech-corner"}},"aboutCode":{"title":"I\'m collecting some","code":"{code}"},"bloodsucker":{"desc":"Bloodsucker was born in 2015 in a small apartment in Udine, designed and created by Alberto Callegari."}}'),a=function(e){var t,n=r;null===e||void 0===e||null===(t=e.split("."))||void 0===t||t.map((function(e){return n[e]&&(n=n[e]),e}));var a=(null===e||void 0===e?void 0:e.split(".").length)>1?n:null;return Object.keys(r).map((function(t){return a||(a=r[t][e]),t})),a||e}},3957:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(885),a=n(2797),i=n(6015),s=n(4882),c=n(8117),o=n(7634),l=n(6961),u=function(e){return{display:"flex",marginTop:"24px",flexDirection:e?"row":"column"}},d=function(e){return{".MuiTab-root":{color:"dark"===e?"white":"black",textTransform:"capitalize"},".MuiTab-root.Mui-selected":{color:"dark"===e?"white":"black"}}},h=n(562),m=n(4165),f=n(5861),v=n(2982),x=n(2791),g=n(8744),p=n(763),w=n.n(p),b=n(5921);function j(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function y(){var e=(0,x.useState)(j()),t=(0,r.Z)(e,2),n=t[0],a=t[1];return(0,x.useEffect)((function(){function e(){a(j())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var k,C=n(9434),Z=n(8202),S=(0,Z.wEe)(Z.kKJ,Z.xbD),D=n(3329),E="large",T=function(e){var t=e.containerStyle,n=e.size,r=(0,C.v9)((function(e){return"dark"===e.session.theme}));return(0,D.jsx)("div",{className:"loader_container",style:t,children:(0,D.jsx)("div",{className:"loader loader--".concat(n),style:{background:r?"conic-gradient(#000, #e70060)":"conic-gradient(#fff, #e70060)"}})})},N=function(e){var t=e.data,n=void 0===t?[]:t,i=e.hasLabels,s=void 0!==i&&i,c=e.width,o=void 0===c?void 0:c,l=e.height,u=void 0===l?void 0:l,d=(0,x.useRef)({minValue:1,maxValue:100,mounted:!1,simulation:void 0}),h=(0,C.v9)((function(e){return e.loader.visible})),m=y(),f=m.height,p=m.width,j=(0,C.v9)((function(e){return"dark"===e.session.theme})),k=(0,a.Z)("(min-width:".concat(b.Z["breakpoint-lg"],")")),Z=(0,a.Z)("(min-width:".concat(b.Z["breakpoint-md"],")")),N=(0,a.Z)("(max-width:".concat(b.Z["breakpoint-sm"],")")),M=(0,x.useState)(600),H=(0,r.Z)(M,2),_=H[0],A=H[1],B=(0,x.useState)(600),I=(0,r.Z)(B,2),O=I[0],W=I[1],L=(0,x.useState)([]),R=(0,r.Z)(L,2),U=R[0],V=R[1];(0,x.useEffect)((function(){o&&u?(A(o),W(u)):k?(A(z(85,p)),W(z(85,f))):Z&&!k?(A(z(80,p)),W(z(85,f))):N||Z?(A(z(84,p)),W(z(65,f))):(A(400),W(400))}),[o,u,Z,N]),(0,x.useEffect)((function(){return d.current.mounted=!0,n.length>0&&(d.current.minValue=.95*Math.min.apply(Math,(0,v.Z)(n.map((function(e){return e.v})))),d.current.maxValue=1.05*Math.max.apply(Math,(0,v.Z)(n.map((function(e){return e.v})))),J(n)),function(){d.current.mounted=!1}}),[n]);var z=function(e,t){return e*t/100},F=function(e){var t=d.current,n=t.minValue,r=t.maxValue;return e<0?(0,g.BYU)().domain([n,0]).interpolate(g.JHv).range(["#fc0000","#f7cbcb"])(e):(0,g.BYU)().domain([0,r]).interpolate(g.JHv).range(["#b3e8bc","#02db26"])(e)},P=function(e){(0,g.PUr)().range([25,130]).domain([d.current.minValue,d.current.maxValue]);return(N?(0,g.PUr)().range([15,30]).domain([d.current.minValue,d.current.maxValue]):N||Z?(0,g.PUr)().range([20,100]).domain([d.current.minValue,d.current.maxValue]):(0,g.PUr)().range([20,40]).domain([d.current.minValue,d.current.maxValue]))(e)},J=function(e){var t=w().clone(e);d.current.simulation=(0,g.A4v)().nodes(t).velocityDecay(.5).force("x",(0,g.RUJ)().strength(.05)).force("y",(0,g.Mrm)().strength(.05)).force("collide",(0,g.Hh)((function(e){return P(e.v)+2}))).on("tick",(function(){d.current.mounted&&V(w().clone(t))}))};return h||!U.length?(0,D.jsx)(T,{containerStyle:{width:_,height:O},size:E}):(0,D.jsx)("svg",{width:_,height:O,children:function(e){var t=d.current,n=t.minValue,r=t.maxValue,a=(0,g.BYU)().domain([n,r]).interpolate(g.JHv).range(["#fc0000","#02db26"]);if(!s){var i=w().map(e,(function(e,t){return(0,D.jsx)("circle",{r:P(e.v),cx:e.x,cy:e.y,fill:a(e.v),fillOpacity:"0.2",stroke:(0,g.B8C)(a(e.v)).toString(),strokeWidth:"2"},t)}));return(0,D.jsx)("g",{transform:"translate(".concat(_/2,", ").concat(O/2,")"),children:i})}return w().map(e,(function(e,t){var n,r=P(e.v)/3,a=e.l2?function(e){var t="".concat(e.split(".")[0],".").concat(e.split(".")[1].substring(0,2));return t.startsWith("-")?t:"+".concat(t)}(e.l2):"-",i=e.l?(n=e.l,S(n.split(" ")[1])?n:"".concat(n.split(" ")[0]," ").concat(n.split(" ")[1].charAt(0))):"-";return(0,D.jsxs)("g",{transform:"translate(".concat(_/2+e.x,", ").concat(O/2+e.y,")"),children:[(0,D.jsx)("circle",{r:P(e.v),fill:F(e.v),fillOpacity:"0.2",stroke:(0,g.B8C)(F(e.v)).toString(),strokeWidth:"2"}),r<=22&&(0,D.jsx)("image",{width:"20",height:"20",xlinkHref:e.img,x:"-0.6em",y:r>10?"-30px":"-10px"}),r>22&&(0,D.jsx)("image",{width:"20",height:"20",xlinkHref:e.img,x:"-0.6em",y:"-50px"}),r>10&&(0,D.jsxs)("text",{dy:"6",fill:j?"#fff":b.Z["color-magenta2"],textAnchor:"middle",fontSize:"".concat(r,"px"),fontWeight:"bold",x:"0",y:"0",children:[(0,D.jsx)("tspan",{children:e.l?"".concat(i):"-"}),(0,D.jsx)("tspan",{x:"0",dy:"1.2em",children:e.l2?"".concat(a,"%"):"-"})]})]},t)}))}(U)})},M=n(2388),H=function(){var e=(0,x.useState)([]),t=(0,r.Z)(e,2),n=t[0],a=t[1],i=(0,x.useMemo)((function(){var e=[];return null===n||void 0===n||n.forEach((function(t){var n={l:t.name,l2:"".concat(t.price_change_percentage_24h),img:t.image,v:t.price_change_percentage_24h};e.push(n)})),e}),[n]),s=function(){var e=(0,f.Z)((0,m.Z)().mark((function e(){var t,n;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.Z.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat("eur","&order=market_cap_desc&per_page=100&page=1&sparkline=false"));case 2:t=e.sent,n=t.data,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.useEffect)((function(){s()}),[]),(0,D.jsx)(N,{data:i,hasLabels:!0})},_=n(4565),A=function(){var e=(0,a.Z)("(min-width:".concat(b.Z["breakpoint-md"],")"));return(0,D.jsxs)(i.Z,{sx:{display:"flex",flexDirection:e?"row":"column",justifyContent:"center",gap:1},children:[(0,D.jsx)(_.Z,{sx:{fontSize:"2rem",fontWeight:"500",fontFamily:"Nunito, sans-serif"},children:(0,o.E9)("aboutCode.title")}),(0,D.jsx)(_.Z,{sx:{fontSize:"2rem"},fontFamily:"fira code, monospace",children:(0,o.E9)("aboutCode.code")})]})},B=n(1413),I=n(5987),O=["index","children","selectedTab"],W=function(e){var t=e.index,n=e.children,r=e.selectedTab,a=(0,I.Z)(e,O);return(0,D.jsx)("div",(0,B.Z)((0,B.Z)({className:"TabPanel",role:"tabpanel",hidden:r!==t,id:"simple-tabpanel-".concat(t),"aria-labelledby":"simple-tab-".concat(t)},a),{},{children:r===t&&n}))},L=function(){var e=y(),t=e.height,n=e.width,s=(0,a.Z)("(min-width:".concat(b.Z["breakpoint-md"],")")),c=(0,x.useState)(),o=(0,r.Z)(c,2),l=o[0],u=o[1],d=(0,x.useState)(),h=(0,r.Z)(d,2),m=h[0],f=h[1],v=(0,x.useState)(),g=(0,r.Z)(v,2),p=g[0],w=g[1],j=(0,x.useState)(),k=(0,r.Z)(j,2),C=k[0],Z=k[1],S=function(e,t){return e*t/100},E=function(e){return e<10?"0".concat(e):"".concat(e)},T=function(){var e=(new Date).getHours(),t=(new Date).getMinutes(),n=(new Date).getSeconds();f(E(t)),w(E(n)),u(E(e>12?e-12:e)),Z(e>=12?"PM":"AM")};return(0,x.useEffect)((function(){var e=(new Date).getHours(),t=(new Date).getMinutes(),n=(new Date).getSeconds();f(E(t)),w(E(n)),u(E(e>12?e-12:e)),Z(e>=12?"PM":"AM");var r=setInterval(T,1e3);return function(){clearInterval(r)}}),[]),(0,D.jsxs)(i.Z,{className:"watches",sx:{width:S(s?85:84,n),height:s?S(85,t):"none",boxSizing:"border-box",display:"flex",flexDirection:s?"row":"column",gap:"40px",justifyContent:"center",alignItems:"center"},children:[(0,D.jsxs)("div",{className:"watches_circle",children:[(0,D.jsx)("div",{className:"dots hrs-dot",style:{transform:"rotate(".concat(30*(new Date).getHours(),"deg)")}}),(0,D.jsxs)("svg",{children:[(0,D.jsx)("circle",{cx:"70",cy:"70",r:"70"}),(0,D.jsx)("circle",{style:{strokeDashoffset:(new Date).getHours()>12?440-440*((new Date).getHours()-12)/12:440-440*(new Date).getHours()/12},cx:"70",cy:"70",r:"70",id:"hh"})]}),(0,D.jsxs)("div",{id:"hour",children:[l,(0,D.jsx)("br",{}),(0,D.jsx)("span",{children:"Hours"})]})]}),(0,D.jsxs)("div",{className:"watches_circle",children:[(0,D.jsx)("div",{className:"dots min-dot",style:{transform:"rotate(".concat(6*(new Date).getMinutes(),"deg)")}}),(0,D.jsxs)("svg",{children:[(0,D.jsx)("circle",{cx:"70",cy:"70",r:"70"}),(0,D.jsx)("circle",{style:{strokeDashoffset:440-440*(new Date).getMinutes()/60},cx:"70",cy:"70",r:"70",id:"mm"})]}),(0,D.jsxs)("div",{id:"minutes",children:[m,(0,D.jsx)("br",{}),(0,D.jsx)("span",{children:"Minutes"})]})]}),(0,D.jsxs)("div",{className:"watches_circle",children:[(0,D.jsx)("div",{className:"dots sec-dot",style:{transform:"rotate(".concat(6*(new Date).getSeconds(),"deg)")}}),(0,D.jsxs)("svg",{children:[(0,D.jsx)("circle",{cx:"70",cy:"70",r:"70"}),(0,D.jsx)("circle",{style:{strokeDashoffset:440-440*(new Date).getSeconds()/60},cx:"70",cy:"70",r:"70",id:"ss"})]}),(0,D.jsxs)("div",{id:"seconds",children:[p,(0,D.jsx)("br",{}),(0,D.jsx)("span",{children:"Seconds"})]})]}),(0,D.jsx)("div",{className:"watches_ap",children:(0,D.jsx)("div",{className:"ampm",children:C})})]})};!function(e){e.BUBBLE_CHART="BUBBLE_CHART",e.WATCHES="WATCHES",e.WORD_CLOCK="WORD_CLOCK",e.TEST="TEST"}(k||(k={}));var R=function(){var e=new Date,t=new Date(e.valueOf()+3e4),n=5*Math.ceil(t.getMinutes()/5),r=new Date(t.valueOf());return r.setMinutes(n),r.setSeconds(0),r.setMilliseconds(0),r.valueOf()-e.valueOf()},U={1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve"},V={5:"five",55:"five",10:"ten",50:"ten",15:"quarter",45:"quarter",20:"twenty",40:"twenty",25:"twenty five",30:"half"},z=function(e){var t=e.getHours();return t=(t%=12)||12},F=function(){var e=new Date,t=e.getMinutes(),n=5*Math.floor(t/5);return{minutes:V[n],hour:n>30?U[z(e)+1]:U[z(e)],verb:n>30?"to":"past"}},P=function(){var e=(0,x.useState)(F()),t=(0,r.Z)(e,2),n=t[0],a=t[1];(0,x.useEffect)((function(){a(F());var e=setTimeout(u,R());return function(){clearInterval(e)}}),[]);var s=function(e,t){return(0,D.jsx)("div",{className:"col-sm ".concat(e?"active":""),children:t})},c=function(e){var t=(null===n||void 0===n?void 0:n.minutes)===e.toLowerCase()||"twenty five"===n.minutes&&("twenty"===e.toLowerCase()||"five"===e.toLowerCase());return s(t,e)},o=function(e){var t=n.minutes;return s(!!t&&n.verb===e.toLowerCase(),e)},l=function(e){return s(n.hour===e.toLowerCase(),e)},u=function(){a(F())};return(0,D.jsx)(i.Z,{sx:{width:"100%",display:"flex",justifyContent:"center"},children:(0,D.jsxs)("div",{className:"clock container",children:[(0,D.jsxs)("div",{className:"row",children:[(0,D.jsx)("div",{className:"col-sm active",children:"It"}),(0,D.jsx)("div",{className:"col-sm active",children:"Is"}),c("Half"),c("Ten")]}),(0,D.jsxs)("div",{className:"row",children:[c("Quarter"),c("Twenty")]}),(0,D.jsxs)("div",{className:"row",children:[c("Five"),(0,D.jsx)("div",{className:"col-sm ".concat(n.minutes&&"quarter"!==n.minutes&&"half"!==n.minutes?"active":""),children:"Minutes"}),o("To")]}),(0,D.jsxs)("div",{className:"row",children:[o("Past"),l("One"),l("Two")]}),(0,D.jsxs)("div",{className:"row",children:[l("Three"),l("Four"),l("Five")]}),(0,D.jsxs)("div",{className:"row",children:[l("Six"),l("Seven"),l("Eight")]}),(0,D.jsxs)("div",{className:"row",children:[l("Nine"),l("Ten"),l("Eleven")]}),(0,D.jsxs)("div",{className:"row",children:[l("Twelve"),(0,D.jsx)("div",{className:"col-sm active",children:"O'Clock"})]})]})})},J=function(){var e=(0,a.Z)("(prefers-color-scheme: dark)"),t=(0,a.Z)("(min-width:".concat(b.Z["breakpoint-md"],")")),n=(0,C.v9)((function(e){return e.session})).theme,m=(0,C.I0)(),f=(0,x.useState)(k.BUBBLE_CHART),v=(0,r.Z)(f,2),g=v[0],p=v[1];(0,x.useEffect)((function(){m(e?(0,h.Dc)("dark"):(0,h.Dc)("light"))}),[]),(0,x.useEffect)((function(){m(e?(0,h.Dc)("dark"):(0,h.Dc)("light"))}),[e]);return(0,D.jsx)(i.Z,{className:"aboutCode",children:(0,D.jsxs)(i.Z,{className:"aboutCode_container",children:[(0,D.jsx)(A,{}),(0,D.jsx)(l.Z,{}),(0,D.jsxs)(i.Z,{sx:u(t),children:[(0,D.jsx)(i.Z,{children:(0,D.jsxs)(s.Z,{sx:d(n),value:g,onChange:function(e,t){p(t)},"aria-label":"tab dettaglio elemento",orientation:t?"vertical":"horizontal",children:[(0,D.jsx)(c.Z,{value:k.BUBBLE_CHART,label:(0,o.E9)("global.bubbleChart")}),(0,D.jsx)(c.Z,{value:k.WATCHES,label:(0,o.E9)("global.watches")}),(0,D.jsx)(c.Z,{value:k.WORD_CLOCK,label:(0,o.E9)("global.wordClock")})]})}),(0,D.jsxs)(i.Z,{sx:{width:"100%"},children:[(0,D.jsx)(W,{value:k.BUBBLE_CHART,index:k.BUBBLE_CHART,selectedTab:g,children:(0,D.jsx)(H,{})}),(0,D.jsx)(W,{value:k.WATCHES,index:k.WATCHES,selectedTab:g,children:(0,D.jsx)(L,{})}),(0,D.jsx)(W,{value:k.WORD_CLOCK,index:k.WORD_CLOCK,selectedTab:g,children:(0,D.jsx)(P,{})})]})]})]})})}}}]);
//# sourceMappingURL=957.1e0a3e8b.chunk.js.map