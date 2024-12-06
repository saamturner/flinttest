import{j as d}from"./jsx-runtime.CIMolHGP.js";import{r as n,R as b}from"./index.DddtCxX5.js";import{l as J,j as fe,H as me,i as F,c as ve,u as ee,p as be}from"./use-server-handoff-complete.4mbL8o-Z.js";import{n as N,M as ge,W as D,y as te,O as y,o as E,m as we,t as xe,H as ne,s as $e,u as re}from"./use-sync-refs.CsDxRvfL.js";import{F as pe}from"./XMarkIcon.FHGgCzxh.js";function je({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const Ce=n.forwardRef(je);function Ee(){let e=n.useRef(!1);return N(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function le(e){var t;return!!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||((t=e.as)!=null?t:ae)!==n.Fragment||b.Children.count(e.children)===1}let U=n.createContext(null);U.displayName="TransitionContext";var Re=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Re||{});function Te(){let e=n.useContext(U);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function ye(){let e=n.useContext(A);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let A=n.createContext(null);A.displayName="NestingContext";function I(e){return"children"in e?I(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function ie(e,t){let r=$e(e),a=n.useRef([]),m=Ee(),x=be(),l=E((u,i=y.Hidden)=>{let o=a.current.findIndex(({el:s})=>s===u);o!==-1&&(re(i,{[y.Unmount](){a.current.splice(o,1)},[y.Hidden](){a.current[o].state="hidden"}}),x.microTask(()=>{var s;!I(a)&&m.current&&((s=r.current)==null||s.call(r))}))}),R=E(u=>{let i=a.current.find(({el:o})=>o===u);return i?i.state!=="visible"&&(i.state="visible"):a.current.push({el:u,state:"visible"}),()=>l(u,y.Unmount)}),$=n.useRef([]),v=n.useRef(Promise.resolve()),g=n.useRef({enter:[],leave:[]}),p=E((u,i,o)=>{$.current.splice(0),t&&(t.chains.current[i]=t.chains.current[i].filter(([s])=>s!==u)),t?.chains.current[i].push([u,new Promise(s=>{$.current.push(s)})]),t?.chains.current[i].push([u,new Promise(s=>{Promise.all(g.current[i].map(([T,P])=>P)).then(()=>s())})]),i==="enter"?v.current=v.current.then(()=>t?.wait.current).then(()=>o(i)):o(i)}),j=E((u,i,o)=>{Promise.all(g.current[i].splice(0).map(([s,T])=>T)).then(()=>{var s;(s=$.current.shift())==null||s()}).then(()=>o(i))});return n.useMemo(()=>({children:a,register:R,unregister:l,onStart:p,onStop:j,wait:v,chains:g}),[R,l,a,p,j,g,v])}let ae=n.Fragment,se=ge.RenderStrategy;function Fe(e,t){var r,a;let{transition:m=!0,beforeEnter:x,afterEnter:l,beforeLeave:R,afterLeave:$,enter:v,enterFrom:g,enterTo:p,entered:j,leave:u,leaveFrom:i,leaveTo:o,...s}=e,[T,P]=n.useState(null),c=n.useRef(null),f=le(e),oe=te(...f?[c,t,P]:t===null?[]:[t]),G=(r=s.unmount)==null||r?y.Unmount:y.Hidden,{show:w,appear:K,initial:Q}=Te(),[C,B]=n.useState(w?"visible":"hidden"),V=ye(),{register:M,unregister:k}=V;N(()=>M(c),[M,c]),N(()=>{if(G===y.Hidden&&c.current){if(w&&C!=="visible"){B("visible");return}return re(C,{hidden:()=>k(c),visible:()=>M(c)})}},[C,c,M,k,w,G]);let W=J();N(()=>{if(f&&W&&C==="visible"&&c.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[c,C,W,f]);let de=Q&&!K,Y=K&&w&&Q,X=n.useRef(!1),L=ie(()=>{X.current||(B("hidden"),k(c))},V),Z=E(_=>{X.current=!0;let O=_?"enter":"leave";L.onStart(c,O,H=>{H==="enter"?x?.():H==="leave"&&R?.()})}),q=E(_=>{let O=_?"enter":"leave";X.current=!1,L.onStop(c,O,H=>{H==="enter"?l?.():H==="leave"&&$?.()}),O==="leave"&&!I(L)&&(B("hidden"),k(c))});n.useEffect(()=>{f&&m||(Z(w),q(w))},[w,f,m]);let ce=!(!m||!f||!W||de),[,h]=fe(ce,T,w,{start:Z,end:q}),he=we({ref:oe,className:((a=xe(s.className,Y&&v,Y&&g,h.enter&&v,h.enter&&h.closed&&g,h.enter&&!h.closed&&p,h.leave&&u,h.leave&&!h.closed&&i,h.leave&&h.closed&&o,!h.transition&&w&&j))==null?void 0:a.trim())||void 0,...me(h)}),S=0;return C==="visible"&&(S|=F.Open),C==="hidden"&&(S|=F.Closed),h.enter&&(S|=F.Opening),h.leave&&(S|=F.Closing),b.createElement(A.Provider,{value:L},b.createElement(ve,{value:S},ne({ourProps:he,theirProps:s,defaultTag:ae,features:se,visible:C==="visible",name:"Transition.Child"})))}function Ne(e,t){let{show:r,appear:a=!1,unmount:m=!0,...x}=e,l=n.useRef(null),R=le(e),$=te(...R?[l,t]:t===null?[]:[t]);J();let v=ee();if(r===void 0&&v!==null&&(r=(v&F.Open)===F.Open),r===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[g,p]=n.useState(r?"visible":"hidden"),j=ie(()=>{r||p("hidden")}),[u,i]=n.useState(!0),o=n.useRef([r]);N(()=>{u!==!1&&o.current[o.current.length-1]!==r&&(o.current.push(r),i(!1))},[o,r]);let s=n.useMemo(()=>({show:r,appear:a,initial:u}),[r,a,u]);N(()=>{r?p("visible"):!I(j)&&l.current!==null&&p("hidden")},[r,j]);let T={unmount:m},P=E(()=>{var f;u&&i(!1),(f=e.beforeEnter)==null||f.call(e)}),c=E(()=>{var f;u&&i(!1),(f=e.beforeLeave)==null||f.call(e)});return b.createElement(A.Provider,{value:j},b.createElement(U.Provider,{value:s},ne({ourProps:{...T,as:n.Fragment,children:b.createElement(ue,{ref:$,...T,...x,beforeEnter:P,beforeLeave:c})},theirProps:{},defaultTag:n.Fragment,features:se,visible:g==="visible",name:"Transition"})))}function Pe(e,t){let r=n.useContext(U)!==null,a=ee()!==null;return b.createElement(b.Fragment,null,!r&&a?b.createElement(z,{ref:t,...e}):b.createElement(ue,{ref:t,...e}))}let z=D(Ne),ue=D(Fe),Se=D(Pe),He=Object.assign(z,{Child:Se,Root:z});const Me=(e,t)=>e.data.autogenerate.type==="home"?t?`/${t}`:"/":e.data.autogenerate.enabled?`${t?`/${t}`:""}/events/${e.data.slug||e.id}`:`${t?`/${t}`:""}/pages/${e.data.slug||e.id}`,Ie=e=>{const[t,r]=n.useState(!1),a=n.useMemo(()=>e.pages.find(l=>l.data.autogenerate.type==="home")?.id,[e.pages]),m=n.useMemo(()=>`${e.baseUrl?`/${e.baseUrl}`:""}/tags`===e.url.pathname,[e.baseUrl,e.url]),x=l=>m?!1:!e.slug&&l.id===a?!0:e.slug&&(e.slug===l.data.slug||e.slug===l.id);return d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>r(!t),type:"button",children:d.jsx(Ce,{className:"w-8 h-8"})}),t&&d.jsx("div",{className:"absolute top-0 left-0 h-dvh w-dvw",onClick:()=>r(!1)}),d.jsx(He,{show:t,children:d.jsxs("div",{className:"shadow absolute top-0 left-0 h-dvh w-80 bg-white w-10 transition duration-200 ease-in-out data-[closed]:-translate-x-full text-black text-sm overflow-y-auto",children:[d.jsx("div",{className:"flex w-full h-24 justify-end px-8",children:d.jsx("button",{type:"button",onClick:()=>r(!1),children:d.jsx(pe,{className:"w-8 h-8"})})}),e.pages.map(l=>d.jsx("a",{href:Me(l,e.baseUrl),children:d.jsx("div",{className:"p-4 hover:bg-blue-hover",children:d.jsx("p",{className:`${x(l)?"font-bold":""} ${l.data.parent?"ml-6":""}`,title:l.data.title,children:l.data.title},l.id)})},l.id)),d.jsx("a",{href:`${e.baseUrl?`/${e.baseUrl}`:""}/tags`,children:d.jsx("div",{className:"p-4 hover:bg-blue-hover",children:d.jsx("p",{className:m?"font-bold":"",children:"Index"})})})]})})]})};export{Ie as default};
