import{r as u,R as w,t as gt}from"./index.DddtCxX5.js";import{a as Ce,o as C,W,H as J,m as ht,n as U,s as re,u as Q,y as q,T as je,M as de,D as we,I as bt}from"./use-sync-refs.CsDxRvfL.js";import{r as ie}from"./index.Py3gQaBW.js";import{p as Re,o as Te,t as Et,l as yt,c as Pt,i as le,u as Ge,j as Ve,H as Ye,s as wt}from"./use-server-handoff-complete.4mbL8o-Z.js";import{$ as St,b as xt}from"./label.ca_X_wog.js";import{u as $t,i as fe,e as Ct,o as Ke,d as be,m as Ee,r as Rt,s as Tt,f as Mt,b as It,a as Ft}from"./floating-ui.react-dom.TQbKx63O.js";function se(e){return Ce.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function Ot(e){let t=e.width/2,n=e.height/2;return{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}function At(e,t){return!(!e||!t||e.right<t.left||e.left>t.right||e.bottom<t.top||e.top>t.bottom)}function Nt({disabled:e=!1}={}){let t=u.useRef(null),[n,r]=u.useState(!1),o=Re(),l=C(()=>{t.current=null,r(!1),o.dispose()}),s=C(i=>{if(o.dispose(),t.current===null){t.current=i.currentTarget,r(!0);{let a=se(i.currentTarget);o.addEventListener(a,"pointerup",l,!1),o.addEventListener(a,"pointermove",d=>{if(t.current){let c=Ot(d);r(At(c,t.current.getBoundingClientRect()))}},!1),o.addEventListener(a,"pointercancel",l,!1)}}});return{pressed:n,pressProps:e?{}:{onPointerDown:s,onPointerUp:l,onClick:l}}}function xr(e,t,n){let[r,o]=u.useState(n),l=e!==void 0,s=u.useRef(l),i=u.useRef(!1),a=u.useRef(!1);return l&&!s.current&&!i.current?(i.current=!0,s.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!l&&s.current&&!a.current&&(a.current=!0,s.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[l?e:r,C(d=>(l||o(d),t?.(d)))]}function $r(e){let[t]=u.useState(e);return t}function Xe(e={},t=null,n=[]){for(let[r,o]of Object.entries(e))Je(n,qe(t,r),o);return n}function qe(e,t){return e?e+"["+t+"]":t}function Je(e,t,n){if(Array.isArray(n))for(let[r,o]of n.entries())Je(e,qe(t,r.toString()),o);else n instanceof Date?e.push([t,n.toISOString()]):typeof n=="boolean"?e.push([t,n?"1":"0"]):typeof n=="string"?e.push([t,n]):typeof n=="number"?e.push([t,`${n}`]):n==null?e.push([t,""]):Xe(n,t,e)}function Cr(e){var t,n;let r=(t=e?.form)!=null?t:e.closest("form");if(r){for(let o of r.elements)if(o!==e&&(o.tagName==="INPUT"&&o.type==="submit"||o.tagName==="BUTTON"&&o.type==="submit"||o.nodeName==="INPUT"&&o.type==="image")){o.click();return}(n=r.requestSubmit)==null||n.call(r)}}let Lt="span";var Z=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Z||{});function Ht(e,t){var n;let{features:r=1,...o}=e,l={ref:t,"aria-hidden":(r&2)===2?!0:(n=o["aria-hidden"])!=null?n:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return J({ourProps:l,theirProps:o,slot:{},defaultTag:Lt,name:"Hidden"})}let oe=W(Ht),ze=u.createContext(null);function Rr(e){let[t,n]=u.useState(null);return w.createElement(ze.Provider,{value:{target:t}},e.children,w.createElement(oe,{features:Z.Hidden,ref:n}))}function Dt({children:e}){let t=u.useContext(ze);if(!t)return w.createElement(w.Fragment,null,e);let{target:n}=t;return n?ie.createPortal(w.createElement(w.Fragment,null,e),n):null}function Tr({data:e,form:t,disabled:n,onReset:r,overrides:o}){let[l,s]=u.useState(null),i=Re();return u.useEffect(()=>{if(r&&l)return i.addEventListener(l,"reset",r)},[l,t,r]),w.createElement(Dt,null,w.createElement(Bt,{setForm:s,formId:t}),Xe(e).map(([a,d])=>w.createElement(oe,{features:Z.Hidden,...ht({key:a,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:t,disabled:n,name:a,value:d,...o})})))}function Bt({setForm:e,formId:t}){return u.useEffect(()=>{if(t){let n=document.getElementById(t);n&&e(n)}},[e,t]),t?null:w.createElement(oe,{features:Z.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:n=>{if(!n)return;let r=n.closest("form");r&&e(r)}})}function Qe(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=t?.getAttribute("disabled")==="";return r&&kt(n)?!1:r}function kt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var z=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(z||{});let _t=u.createContext(()=>{});function Ut({value:e,children:t}){return w.createElement(_t.Provider,{value:e},t)}function Wt(e){if(e===null)return{width:0,height:0};let{width:t,height:n}=e.getBoundingClientRect();return{width:t,height:n}}function jt(e,t=!1){let[n,r]=u.useReducer(()=>({}),{}),o=u.useMemo(()=>Wt(e),[e,n]);return U(()=>{if(!e)return;let l=new ResizeObserver(r);return l.observe(e),()=>{l.disconnect()}},[e]),t?{width:`${o.width}px`,height:`${o.height}px`}:o}let Gt=class extends Map{constructor(t){super(),this.factory=t}get(t){let n=super.get(t);return n===void 0&&(n=this.factory(t),this.set(t,n)),n}};function Ze(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(o){return r.add(o),()=>r.delete(o)},dispatch(o,...l){let s=t[o].call(n,...l);s&&(n=s,r.forEach(i=>i()))}}}function et(e){return u.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getSnapshot)}let Vt=new Gt(()=>Ze(()=>[],{ADD(e){return this.includes(e)?this:[...this,e]},REMOVE(e){let t=this.indexOf(e);if(t===-1)return this;let n=this.slice();return n.splice(t,1),n}}));function tt(e,t){let n=Vt.get(t),r=u.useId(),o=et(n);if(U(()=>{if(e)return n.dispatch("ADD",r),()=>n.dispatch("REMOVE",r)},[n,e]),!e)return!1;let l=o.indexOf(r),s=o.length;return l===-1&&(l=s,s+=1),l===s-1}function Yt(e,t,n){let r=re(o=>{let l=o.getBoundingClientRect();l.x===0&&l.y===0&&l.width===0&&l.height===0&&n()});u.useEffect(()=>{if(!e)return;let o=t===null?null:t instanceof HTMLElement?t:t.current;if(!o)return;let l=Te();if(typeof ResizeObserver<"u"){let s=new ResizeObserver(()=>r.current(o));s.observe(o),l.add(()=>s.disconnect())}if(typeof IntersectionObserver<"u"){let s=new IntersectionObserver(()=>r.current(o));s.observe(o),l.add(()=>s.disconnect())}return()=>l.dispose()},[t,r,e])}let Se=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),Kt=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var K=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(K||{}),pe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(pe||{}),Xt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Xt||{});function me(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Se)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function qt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Kt)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Me=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Me||{});function nt(e,t=0){var n;return e===((n=se(e))==null?void 0:n.body)?!1:Q(t,{0(){return e.matches(Se)},1(){let r=e;for(;r!==null;){if(r.matches(Se))return!0;r=r.parentElement}return!1}})}var Jt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Jt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let zt=["textarea","input"].join(",");function Qt(e){var t,n;return(n=(t=e?.matches)==null?void 0:t.call(e,zt))!=null?n:!1}function Zt(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),l=t(r);if(o===null||l===null)return 0;let s=o.compareDocumentPosition(l);return s&Node.DOCUMENT_POSITION_FOLLOWING?-1:s&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function te(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?Zt(e):e:t&64?qt(e):me(e);o.length>0&&s.length>1&&(s=s.filter(f=>!o.some(p=>p!=null&&"current"in p?p?.current===f:p===f))),r=r??l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,s.indexOf(r))-1;if(t&4)return Math.max(0,s.indexOf(r))+1;if(t&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,b=s.length,m;do{if(c>=b||c+b<=0)return 0;let f=a+c;if(t&16)f=(f+b)%b;else{if(f<0)return 3;if(f>=b)return 1}m=s[f],m?.focus(d),c+=i}while(m!==l.activeElement);return t&6&&Qt(m)&&m.select(),2}function rt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function en(){return/Android/gi.test(window.navigator.userAgent)}function tn(){return rt()||en()}function ae(e,t,n,r){let o=re(n);u.useEffect(()=>{if(!e)return;function l(s){o.current(s)}return document.addEventListener(t,l,r),()=>document.removeEventListener(t,l,r)},[e,t,r])}function ot(e,t,n,r){let o=re(n);u.useEffect(()=>{if(!e)return;function l(s){o.current(s)}return window.addEventListener(t,l,r),()=>window.removeEventListener(t,l,r)},[e,t,r])}const Le=30;function nn(e,t,n){let r=tt(e,"outside-click"),o=re(n),l=u.useCallback(function(a,d){if(a.defaultPrevented)return;let c=d(a);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let b=function m(f){return typeof f=="function"?m(f()):Array.isArray(f)||f instanceof Set?f:[f]}(t);for(let m of b)if(m!==null&&(m.contains(c)||a.composed&&a.composedPath().includes(m)))return;return!nt(c,Me.Loose)&&c.tabIndex!==-1&&a.preventDefault(),o.current(a,c)},[o,t]),s=u.useRef(null);ae(r,"pointerdown",a=>{var d,c;s.current=((c=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:c[0])||a.target},!0),ae(r,"mousedown",a=>{var d,c;s.current=((c=(d=a.composedPath)==null?void 0:d.call(a))==null?void 0:c[0])||a.target},!0),ae(r,"click",a=>{tn()||s.current&&(l(a,()=>s.current),s.current=null)},!0);let i=u.useRef({x:0,y:0});ae(r,"touchstart",a=>{i.current.x=a.touches[0].clientX,i.current.y=a.touches[0].clientY},!0),ae(r,"touchend",a=>{let d={x:a.changedTouches[0].clientX,y:a.changedTouches[0].clientY};if(!(Math.abs(d.x-i.current.x)>=Le||Math.abs(d.y-i.current.y)>=Le))return l(a,()=>a.target instanceof HTMLElement?a.target:null)},!0),ot(r,"blur",a=>l(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ue(...e){return u.useMemo(()=>se(...e),[...e])}function rn(e,t,n,r){let o=re(n);u.useEffect(()=>{e=e??window;function l(s){o.current(s)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function on(e,t){return u.useMemo(()=>{var n;if(e.type)return e.type;let r=(n=e.as)!=null?n:"button";if(typeof r=="string"&&r.toLowerCase()==="button"||t?.tagName==="BUTTON"&&!t.hasAttribute("type"))return"button"},[e.type,e.as,t])}function ln(){let e;return{before({doc:t}){var n;let r=t.documentElement,o=(n=t.defaultView)!=null?n:window;e=Math.max(0,o.innerWidth-r.clientWidth)},after({doc:t,d:n}){let r=t.documentElement,o=Math.max(0,r.clientWidth-r.offsetWidth),l=Math.max(0,e-o);n.style(r,"paddingRight",`${l}px`)}}}function un(){return rt()?{before({doc:e,d:t,meta:n}){function r(o){return n.containers.flatMap(l=>l()).some(l=>l.contains(o))}t.microTask(()=>{var o;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=Te();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let l=(o=window.scrollY)!=null?o:window.pageYOffset,s=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let a=i.target.closest("a");if(!a)return;let{hash:d}=new URL(a.href),c=e.querySelector(d);c&&!r(c)&&(s=c)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(r(i.target)){let a=i.target;for(;a.parentElement&&r(a.parentElement);)a=a.parentElement;t.style(a,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement){if(i.target.tagName==="INPUT")return;if(r(i.target)){let a=i.target;for(;a.parentElement&&a.dataset.headlessuiPortal!==""&&!(a.scrollHeight>a.clientHeight||a.scrollWidth>a.clientWidth);)a=a.parentElement;a.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()}},{passive:!1}),t.add(()=>{var i;let a=(i=window.scrollY)!=null?i:window.pageYOffset;l!==a&&window.scrollTo(0,l),s&&s.isConnected&&(s.scrollIntoView({block:"nearest"}),s=null)})})}}:{}}function an(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function sn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let ne=Ze(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:Te(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:sn(n)},o=[un(),ln(),an()];o.forEach(({before:l})=>l?.(r)),o.forEach(({after:l})=>l?.(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});ne.subscribe(()=>{let e=ne.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",o=n.count!==0;(o&&!r||!o&&r)&&ne.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&ne.dispatch("TEARDOWN",n)}});function cn(e,t,n=()=>({containers:[]})){let r=et(ne),o=t?r.get(t):void 0,l=o?o.count>0:!1;return U(()=>{if(!(!t||!e))return ne.dispatch("PUSH",t,n),()=>ne.dispatch("POP",t,n)},[e,t]),l}function fn(e,t,n=()=>[document.body]){let r=tt(e,"scroll-lock");cn(r,t,o=>{var l;return{containers:[...(l=o.containers)!=null?l:[],n]}})}function dn(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>{let{brand:n,version:r}=t;return n+"/"+r}).join(" "):navigator.userAgent}const lt={...gt},pn=lt.useInsertionEffect,mn=pn||(e=>e());function ut(e){const t=u.useRef(()=>{});return mn(()=>{t.current=e}),u.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current==null?void 0:t.current(...r)},[])}var xe=typeof document<"u"?u.useLayoutEffect:u.useEffect;let He=!1,vn=0;const De=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+vn++;function gn(){const[e,t]=u.useState(()=>He?De():void 0);return xe(()=>{e==null&&t(De())},[]),u.useEffect(()=>{He=!0},[]),e}const hn=lt.useId,bn=hn||gn;function En(){const e=new Map;return{emit(t,n){var r;(r=e.get(t))==null||r.forEach(o=>o(n))},on(t,n){e.set(t,[...e.get(t)||[],n])},off(t,n){var r;e.set(t,((r=e.get(t))==null?void 0:r.filter(o=>o!==n))||[])}}}const yn=u.createContext(null),Pn=u.createContext(null),wn=()=>{var e;return((e=u.useContext(yn))==null?void 0:e.id)||null},Sn=()=>u.useContext(Pn),xn="data-floating-ui-focusable";function $n(e){const{open:t=!1,onOpenChange:n,elements:r}=e,o=bn(),l=u.useRef({}),[s]=u.useState(()=>En()),i=wn()!=null,[a,d]=u.useState(r.reference),c=ut((f,p,v)=>{l.current.openEvent=f?p:void 0,s.emit("openchange",{open:f,event:p,reason:v,nested:i}),n?.(f,p,v)}),b=u.useMemo(()=>({setPositionReference:d}),[]),m=u.useMemo(()=>({reference:a||r.reference||null,floating:r.floating||null,domReference:r.reference}),[a,r.reference,r.floating]);return u.useMemo(()=>({dataRef:l,open:t,onOpenChange:c,elements:m,events:s,floatingId:o,refs:b}),[t,c,m,s,o,b])}function Cn(e){e===void 0&&(e={});const{nodeId:t}=e,n=$n({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||n,o=r.elements,[l,s]=u.useState(null),[i,a]=u.useState(null),c=o?.reference||l,b=u.useRef(null),m=Sn();xe(()=>{c&&(b.current=c)},[c]);const f=$t({...e,elements:{...o,...i&&{reference:i}}}),p=u.useCallback(E=>{const T=fe(E)?{getBoundingClientRect:()=>E.getBoundingClientRect(),contextElement:E}:E;a(T),f.refs.setReference(T)},[f.refs]),v=u.useCallback(E=>{(fe(E)||E===null)&&(b.current=E,s(E)),(fe(f.refs.reference.current)||f.refs.reference.current===null||E!==null&&!fe(E))&&f.refs.setReference(E)},[f.refs]),g=u.useMemo(()=>({...f.refs,setReference:v,setPositionReference:p,domReference:b}),[f.refs,v,p]),P=u.useMemo(()=>({...f.elements,domReference:c}),[f.elements,c]),x=u.useMemo(()=>({...f,...r,refs:g,elements:P,nodeId:t}),[f,g,P,t,r]);return xe(()=>{r.dataRef.current.floatingContext=x;const E=m?.nodesRef.current.find(T=>T.id===t);E&&(E.context=x)}),u.useMemo(()=>({...f,context:x,refs:g,elements:P}),[f,g,P,x])}const Be="active",ke="selected";function ye(e,t,n){const r=new Map,o=n==="item";let l=e;if(o&&e){const{[Be]:s,[ke]:i,...a}=e;l=a}return{...n==="floating"&&{tabIndex:-1,[xn]:""},...l,...t.map(s=>{const i=s?s[n]:null;return typeof i=="function"?e?i(e):null:i}).concat(e).reduce((s,i)=>(i&&Object.entries(i).forEach(a=>{let[d,c]=a;if(!(o&&[Be,ke].includes(d)))if(d.indexOf("on")===0){if(r.has(d)||r.set(d,[]),typeof c=="function"){var b;(b=r.get(d))==null||b.push(c),s[d]=function(){for(var m,f=arguments.length,p=new Array(f),v=0;v<f;v++)p[v]=arguments[v];return(m=r.get(d))==null?void 0:m.map(g=>g(...p)).find(g=>g!==void 0)}}}else s[d]=c}),s),{})}}function Rn(e){e===void 0&&(e=[]);const t=e.map(i=>i?.reference),n=e.map(i=>i?.floating),r=e.map(i=>i?.item),o=u.useCallback(i=>ye(i,e,"reference"),t),l=u.useCallback(i=>ye(i,e,"floating"),n),s=u.useCallback(i=>ye(i,e,"item"),r);return u.useMemo(()=>({getReferenceProps:o,getFloatingProps:l,getItemProps:s}),[o,l,s])}function _e(e,t){return{...e,rects:{...e.rects,floating:{...e.rects.floating,height:t}}}}const Tn=e=>({name:"inner",options:e,async fn(t){const{listRef:n,overflowRef:r,onFallbackChange:o,offset:l=0,index:s=0,minItemsVisible:i=4,referenceOverflowThreshold:a=0,scrollRef:d,...c}=Ct(e,t),{rects:b,elements:{floating:m}}=t,f=n.current[s],p=d?.current||m,v=m.clientTop||p.clientTop,g=m.clientTop!==0,P=p.clientTop!==0,x=m===p;if(!f)return{};const E={...t,...await Ke(-f.offsetTop-m.clientTop-b.reference.height/2-f.offsetHeight/2-l).fn(t)},T=await be(_e(E,p.scrollHeight+v+m.clientTop),c),I=await be(E,{...c,elementContext:"reference"}),A=Ee(0,T.top),N=E.y+A,F=Rt(Ee(0,p.scrollHeight+(g&&x||P?v*2:0)-A-Ee(0,T.bottom)));if(p.style.maxHeight=F+"px",p.scrollTop=A,o){const k=p.scrollHeight>p.offsetHeight&&p.offsetHeight<f.offsetHeight*i-1||I.top>=-a||I.bottom>=-a;ie.flushSync(()=>o(k))}return r&&(r.current=await be(_e({...E,y:N},p.offsetHeight+v+m.clientTop),c)),{y:N}}});function Mn(e,t){const{open:n,elements:r}=e,{enabled:o=!0,overflowRef:l,scrollRef:s,onChange:i}=t,a=ut(i),d=u.useRef(!1),c=u.useRef(null),b=u.useRef(null);u.useEffect(()=>{if(!o)return;function f(v){if(v.ctrlKey||!p||l.current==null)return;const g=v.deltaY,P=l.current.top>=-.5,x=l.current.bottom>=-.5,E=p.scrollHeight-p.clientHeight,T=g<0?-1:1,I=g<0?"max":"min";p.scrollHeight<=p.clientHeight||(!P&&g>0||!x&&g<0?(v.preventDefault(),ie.flushSync(()=>{a(A=>A+Math[I](g,E*T))})):/firefox/i.test(dn())&&(p.scrollTop+=g))}const p=s?.current||r.floating;if(n&&p)return p.addEventListener("wheel",f),requestAnimationFrame(()=>{c.current=p.scrollTop,l.current!=null&&(b.current={...l.current})}),()=>{c.current=null,b.current=null,p.removeEventListener("wheel",f)}},[o,n,r.floating,l,s,a]);const m=u.useMemo(()=>({onKeyDown(){d.current=!0},onWheel(){d.current=!1},onPointerMove(){d.current=!1},onScroll(){const f=s?.current||r.floating;if(!(!l.current||!f||!d.current)){if(c.current!==null){const p=f.scrollTop-c.current;(l.current.bottom<-.5&&p<-1||l.current.top<-.5&&p>1)&&ie.flushSync(()=>a(v=>v+p))}requestAnimationFrame(()=>{c.current=f.scrollTop})}}}),[r.floating,a,l,s]);return u.useMemo(()=>o?{floating:m}:{},[o,m])}let ce=u.createContext({styles:void 0,setReference:()=>{},setFloating:()=>{},getReferenceProps:()=>({}),getFloatingProps:()=>({}),slot:{}});ce.displayName="FloatingContext";let Ie=u.createContext(null);Ie.displayName="PlacementContext";function In(e){return u.useMemo(()=>e?typeof e=="string"?{to:e}:e:null,[e])}function Fn(){return u.useContext(ce).setReference}function On(){let{getFloatingProps:e,slot:t}=u.useContext(ce);return u.useCallback((...n)=>Object.assign({},e(...n),{"data-anchor":t.anchor}),[e,t])}function An(e=null){e===!1&&(e=null),typeof e=="string"&&(e={to:e});let t=u.useContext(Ie),n=u.useMemo(()=>e,[JSON.stringify(e,typeof HTMLElement<"u"?(o,l)=>l instanceof HTMLElement?l.outerHTML:l:void 0)]);U(()=>{t?.(n??null)},[t,n]);let r=u.useContext(ce);return u.useMemo(()=>[r.setFloating,e?r.styles:{}],[r.setFloating,e,r.styles])}let Ue=4;function Nn({children:e,enabled:t=!0}){let[n,r]=u.useState(null),[o,l]=u.useState(0),s=u.useRef(null),[i,a]=u.useState(null);Ln(i);let d=t&&n!==null&&i!==null,{to:c="bottom",gap:b=0,offset:m=0,padding:f=0,inner:p}=Hn(n,i),[v,g="center"]=c.split(" ");U(()=>{d&&l(0)},[d]);let{refs:P,floatingStyles:x,context:E}=Cn({open:d,placement:v==="selection"?g==="center"?"bottom":`bottom-${g}`:g==="center"?`${v}`:`${v}-${g}`,strategy:"absolute",transform:!1,middleware:[Ke({mainAxis:v==="selection"?0:b,crossAxis:m}),Tt({padding:f}),v!=="selection"&&Mt({padding:f}),v==="selection"&&p?Tn({...p,padding:f,overflowRef:s,offset:o,minItemsVisible:Ue,referenceOverflowThreshold:f,onFallbackChange(M){var B,L;if(!M)return;let O=E.elements.floating;if(!O)return;let G=parseFloat(getComputedStyle(O).scrollPaddingBottom)||0,V=Math.min(Ue,O.childElementCount),_=0,S=0;for(let h of(L=(B=E.elements.floating)==null?void 0:B.childNodes)!=null?L:[])if(h instanceof HTMLElement){let y=h.offsetTop,R=y+h.clientHeight+G,$=O.scrollTop,H=$+O.clientHeight;if(y>=$&&R<=H)V--;else{S=Math.max(0,Math.min(R,H)-Math.max(y,$)),_=h.clientHeight;break}}V>=1&&l(h=>{let y=_*V-S+G;return h>=y?h:y})}}):null,It({padding:f,apply({availableWidth:M,availableHeight:B,elements:L}){Object.assign(L.floating.style,{overflow:"auto",maxWidth:`${M}px`,maxHeight:`min(var(--anchor-max-height, 100vh), ${B}px)`})}})].filter(Boolean),whileElementsMounted:Ft}),[T=v,I=g]=E.placement.split("-");v==="selection"&&(T="selection");let A=u.useMemo(()=>({anchor:[T,I].filter(Boolean).join(" ")}),[T,I]),N=Mn(E,{overflowRef:s,onChange:l}),{getReferenceProps:F,getFloatingProps:k}=Rn([N]),j=C(M=>{a(M),P.setFloating(M)});return u.createElement(Ie.Provider,{value:r},u.createElement(ce.Provider,{value:{setFloating:j,setReference:P.setReference,styles:x,getReferenceProps:F,getFloatingProps:k,slot:A}},e))}function Ln(e){U(()=>{if(!e)return;let t=new MutationObserver(()=>{let n=window.getComputedStyle(e).maxHeight,r=parseFloat(n);if(isNaN(r))return;let o=parseInt(n);isNaN(o)||r!==o&&(e.style.maxHeight=`${Math.ceil(r)}px`)});return t.observe(e,{attributes:!0,attributeFilter:["style"]}),()=>{t.disconnect()}},[e])}function Hn(e,t){var n,r,o;let l=Pe((n=e?.gap)!=null?n:"var(--anchor-gap, 0)",t),s=Pe((r=e?.offset)!=null?r:"var(--anchor-offset, 0)",t),i=Pe((o=e?.padding)!=null?o:"var(--anchor-padding, 0)",t);return{...e,gap:l,offset:s,padding:i}}function Pe(e,t,n=void 0){let r=Re(),o=C((a,d)=>{if(a==null)return[n,null];if(typeof a=="number")return[a,null];if(typeof a=="string"){if(!d)return[n,null];let c=We(a,d);return[c,b=>{let m=at(a);{let f=m.map(p=>window.getComputedStyle(d).getPropertyValue(p));r.requestAnimationFrame(function p(){r.nextFrame(p);let v=!1;for(let[P,x]of m.entries()){let E=window.getComputedStyle(d).getPropertyValue(x);if(f[P]!==E){f[P]=E,v=!0;break}}if(!v)return;let g=We(a,d);c!==g&&(b(g),c=g)})}return r.dispose}]}return[n,null]}),l=u.useMemo(()=>o(e,t)[0],[e,t]),[s=l,i]=u.useState();return U(()=>{let[a,d]=o(e,t);if(i(a),!!d)return d(i)},[e,t]),s}function at(e){let t=/var\((.*)\)/.exec(e);if(t){let n=t[1].indexOf(",");if(n===-1)return[t[1]];let r=t[1].slice(0,n).trim(),o=t[1].slice(n+1).trim();return o?[r,...at(o)]:[r]}return[]}function We(e,t){let n=document.createElement("div");t.appendChild(n),n.style.setProperty("margin-top","0px","important"),n.style.setProperty("margin-top",e,"important");let r=parseFloat(window.getComputedStyle(n).marginTop)||0;return t.removeChild(n),r}function Dn(e){let t=C(e),n=u.useRef(!1);u.useEffect(()=>(n.current=!1,()=>{n.current=!0,Et(()=>{n.current&&t()})}),[t])}let Bn=u.createContext(!1);function kn(){return u.useContext(Bn)}function _n(e){let t=kn(),n=u.useContext(st),r=ue(e),[o,l]=u.useState(()=>{var s;if(!t&&n!==null)return(s=n.current)!=null?s:null;if(Ce.isServer)return null;let i=r?.getElementById("headlessui-portal-root");if(i)return i;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return u.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),u.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),o}let it=u.Fragment,Un=W(function(e,t){let n=e,r=u.useRef(null),o=q(je(c=>{r.current=c}),t),l=ue(r),s=_n(r),[i]=u.useState(()=>{var c;return Ce.isServer?null:(c=l?.createElement("div"))!=null?c:null}),a=u.useContext($e),d=yt();return U(()=>{!s||!i||s.contains(i)||(i.setAttribute("data-headlessui-portal",""),s.appendChild(i))},[s,i]),U(()=>{if(i&&a)return a.register(i)},[a,i]),Dn(()=>{var c;!s||!i||(i instanceof Node&&s.contains(i)&&s.removeChild(i),s.childNodes.length<=0&&((c=s.parentElement)==null||c.removeChild(s)))}),d?!s||!i?null:ie.createPortal(J({ourProps:{ref:o},theirProps:n,slot:{},defaultTag:it,name:"Portal"}),i):null});function Wn(e,t){let n=q(t),{enabled:r=!0,...o}=e;return r?w.createElement(Un,{...o,ref:n}):J({ourProps:{ref:n},theirProps:o,slot:{},defaultTag:it,name:"Portal"})}let jn=u.Fragment,st=u.createContext(null);function Gn(e,t){let{target:n,...r}=e,o={ref:q(t)};return w.createElement(st.Provider,{value:n},J({ourProps:o,theirProps:r,defaultTag:jn,name:"Popover.Group"}))}let $e=u.createContext(null);function Vn(){let e=u.useContext($e),t=u.useRef([]),n=C(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=C(l=>{let s=t.current.indexOf(l);s!==-1&&t.current.splice(s,1),e&&e.unregister(l)}),o=u.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,u.useMemo(()=>function({children:l}){return w.createElement($e.Provider,{value:o},l)},[o])]}let Yn=W(Wn),Kn=W(Gn),Xn=Object.assign(Yn,{Group:Kn});function qn({defaultContainers:e=[],portals:t,mainTreeNode:n}={}){let r=ue(n),o=C(()=>{var l,s;let i=[];for(let a of e)a!==null&&(a instanceof HTMLElement?i.push(a):"current"in a&&a.current instanceof HTMLElement&&i.push(a.current));if(t!=null&&t.current)for(let a of t.current)i.push(a);for(let a of(l=r?.querySelectorAll("html > *, body > *"))!=null?l:[])a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a.id!=="headlessui-portal-root"&&(n&&(a.contains(n)||a.contains((s=n?.getRootNode())==null?void 0:s.host))||i.some(d=>a.contains(d))||i.push(a));return i});return{resolveContainers:o,contains:C(l=>o().some(s=>s.contains(l)))}}let ct=u.createContext(null);function ft({children:e,node:t}){let[n,r]=u.useState(null),o=dt(t??n);return w.createElement(ct.Provider,{value:o},e,o===null&&w.createElement(oe,{features:Z.Hidden,ref:l=>{var s,i;if(l){for(let a of(i=(s=se(l))==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?i:[])if(a!==document.body&&a!==document.head&&a instanceof HTMLElement&&a!=null&&a.contains(l)){r(a);break}}}}))}function dt(e=null){var t;return(t=u.useContext(ct))!=null?t:e}var X=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(X||{});function pt(){let e=u.useRef(0);return ot(!0,"keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}var Jn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Jn||{}),zn=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(zn||{});let Qn={0:e=>({...e,popoverState:Q(e.popoverState,{0:1,1:0}),__demoMode:!1}),1(e){return e.popoverState===1?e:{...e,popoverState:1,__demoMode:!1}},2(e,t){return e.button===t.button?e:{...e,button:t.button}},3(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},4(e,t){return e.panel===t.panel?e:{...e,panel:t.panel}},5(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},Fe=u.createContext(null);Fe.displayName="PopoverContext";function ve(e){let t=u.useContext(Fe);if(t===null){let n=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ve),n}return t}let ge=u.createContext(null);ge.displayName="PopoverAPIContext";function Oe(e){let t=u.useContext(ge);if(t===null){let n=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Oe),n}return t}let Ae=u.createContext(null);Ae.displayName="PopoverGroupContext";function mt(){return u.useContext(Ae)}let he=u.createContext(null);he.displayName="PopoverPanelContext";function Zn(){return u.useContext(he)}function er(e,t){return Q(t.type,Qn,e,t)}let tr="div";function nr(e,t){var n;let{__demoMode:r=!1,...o}=e,l=u.useRef(null),s=q(t,je(S=>{l.current=S})),i=u.useRef([]),a=u.useReducer(er,{__demoMode:r,popoverState:r?0:1,buttons:i,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:u.createRef(),afterPanelSentinel:u.createRef(),afterButtonSentinel:u.createRef()}),[{popoverState:d,button:c,buttonId:b,panel:m,panelId:f,beforePanelSentinel:p,afterPanelSentinel:v,afterButtonSentinel:g},P]=a,x=ue((n=l.current)!=null?n:c),E=u.useMemo(()=>{if(!c||!m)return!1;for(let D of document.querySelectorAll("body > *"))if(Number(D?.contains(c))^Number(D?.contains(m)))return!0;let S=me(),h=S.indexOf(c),y=(h+S.length-1)%S.length,R=(h+1)%S.length,$=S[y],H=S[R];return!m.contains($)&&!m.contains(H)},[c,m]),T=re(b),I=re(f),A=u.useMemo(()=>({buttonId:T,panelId:I,close:()=>P({type:1})}),[T,I,P]),N=mt(),F=N?.registerPopover,k=C(()=>{var S;return(S=N?.isFocusWithinPopoverGroup())!=null?S:x?.activeElement&&(c?.contains(x.activeElement)||m?.contains(x.activeElement))});u.useEffect(()=>F?.(A),[F,A]);let[j,M]=Vn(),B=dt(c),L=qn({mainTreeNode:B,portals:j,defaultContainers:[c,m]});rn(x?.defaultView,"focus",S=>{var h,y,R,$,H,D;S.target!==window&&S.target instanceof HTMLElement&&d===0&&(k()||c&&m&&(L.contains(S.target)||(y=(h=p.current)==null?void 0:h.contains)!=null&&y.call(h,S.target)||($=(R=v.current)==null?void 0:R.contains)!=null&&$.call(R,S.target)||(D=(H=g.current)==null?void 0:H.contains)!=null&&D.call(H,S.target)||P({type:1})))},!0),nn(d===0,L.resolveContainers,(S,h)=>{P({type:1}),nt(h,Me.Loose)||(S.preventDefault(),c?.focus())});let O=C(S=>{P({type:1});let h=S?S instanceof HTMLElement?S:"current"in S&&S.current instanceof HTMLElement?S.current:c:c;h?.focus()}),G=u.useMemo(()=>({close:O,isPortalled:E}),[O,E]),V=u.useMemo(()=>({open:d===0,close:O}),[d,O]),_={ref:s};return w.createElement(ft,{node:B},w.createElement(Nn,null,w.createElement(he.Provider,{value:null},w.createElement(Fe.Provider,{value:a},w.createElement(ge.Provider,{value:G},w.createElement(Ut,{value:O},w.createElement(Pt,{value:Q(d,{0:le.Open,1:le.Closed})},w.createElement(M,null,J({ourProps:_,theirProps:o,slot:V,defaultTag:tr,name:"Popover"})))))))))}let rr="button";function or(e,t){let n=u.useId(),{id:r=`headlessui-popover-button-${n}`,disabled:o=!1,autoFocus:l=!1,...s}=e,[i,a]=ve("Popover.Button"),{isPortalled:d}=Oe("Popover.Button"),c=u.useRef(null),b=`headlessui-focus-sentinel-${u.useId()}`,m=mt(),f=m?.closeOthers,p=Zn()!==null;u.useEffect(()=>{if(!p)return a({type:3,buttonId:r}),()=>{a({type:3,buttonId:null})}},[p,r,a]);let[v]=u.useState(()=>Symbol()),g=q(c,t,Fn(),p?null:C(h=>{if(h)i.buttons.current.push(v);else{let y=i.buttons.current.indexOf(v);y!==-1&&i.buttons.current.splice(y,1)}i.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),h&&a({type:2,button:h})})),P=q(c,t),x=ue(c),E=C(h=>{var y,R,$;if(p){if(i.popoverState===1)return;switch(h.key){case z.Space:case z.Enter:h.preventDefault(),(R=(y=h.target).click)==null||R.call(y),a({type:1}),($=i.button)==null||$.focus();break}}else switch(h.key){case z.Space:case z.Enter:h.preventDefault(),h.stopPropagation(),i.popoverState===1&&f?.(i.buttonId),a({type:0});break;case z.Escape:if(i.popoverState!==0)return f?.(i.buttonId);if(!c.current||x!=null&&x.activeElement&&!c.current.contains(x.activeElement))return;h.preventDefault(),h.stopPropagation(),a({type:1});break}}),T=C(h=>{p||h.key===z.Space&&h.preventDefault()}),I=C(h=>{var y,R;Qe(h.currentTarget)||o||(p?(a({type:1}),(y=i.button)==null||y.focus()):(h.preventDefault(),h.stopPropagation(),i.popoverState===1&&f?.(i.buttonId),a({type:0}),(R=i.button)==null||R.focus()))}),A=C(h=>{h.preventDefault(),h.stopPropagation()}),{isFocusVisible:N,focusProps:F}=St({autoFocus:l}),{isHovered:k,hoverProps:j}=xt({isDisabled:o}),{pressed:M,pressProps:B}=Nt({disabled:o}),L=i.popoverState===0,O=u.useMemo(()=>({open:L,active:M||L,disabled:o,hover:k,focus:N,autofocus:l}),[L,k,N,M,o,l]),G=on(e,i.button),V=p?we({ref:P,type:G,onKeyDown:E,onClick:I,disabled:o||void 0,autoFocus:l},F,j,B):we({ref:g,id:i.buttonId,type:G,"aria-expanded":i.popoverState===0,"aria-controls":i.panel?i.panelId:void 0,disabled:o||void 0,autoFocus:l,onKeyDown:E,onKeyUp:T,onClick:I,onMouseDown:A},F,j,B),_=pt(),S=C(()=>{let h=i.panel;if(!h)return;function y(){Q(_.current,{[X.Forwards]:()=>te(h,K.First),[X.Backwards]:()=>te(h,K.Last)})===pe.Error&&te(me().filter(R=>R.dataset.headlessuiFocusGuard!=="true"),Q(_.current,{[X.Forwards]:K.Next,[X.Backwards]:K.Previous}),{relativeTo:i.button})}y()});return w.createElement(w.Fragment,null,J({ourProps:V,theirProps:s,slot:O,defaultTag:rr,name:"Popover.Button"}),L&&!p&&d&&w.createElement(oe,{id:b,ref:i.afterButtonSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:S}))}let lr="div",ur=de.RenderStrategy|de.Static;function vt(e,t){let n=u.useId(),{id:r=`headlessui-popover-backdrop-${n}`,transition:o=!1,...l}=e,[{popoverState:s},i]=ve("Popover.Backdrop"),[a,d]=u.useState(null),c=q(t,d),b=Ge(),[m,f]=Ve(o,a,b!==null?(b&le.Open)===le.Open:s===0),p=C(P=>{if(Qe(P.currentTarget))return P.preventDefault();i({type:1})}),v=u.useMemo(()=>({open:s===0}),[s]),g={ref:c,id:r,"aria-hidden":!0,onClick:p,...Ye(f)};return J({ourProps:g,theirProps:l,slot:v,defaultTag:lr,features:ur,visible:m,name:"Popover.Backdrop"})}let ar="div",ir=de.RenderStrategy|de.Static;function sr(e,t){let n=u.useId(),{id:r=`headlessui-popover-panel-${n}`,focus:o=!1,anchor:l,portal:s=!1,modal:i=!1,transition:a=!1,...d}=e,[c,b]=ve("Popover.Panel"),{close:m,isPortalled:f}=Oe("Popover.Panel"),p=`headlessui-focus-sentinel-before-${n}`,v=`headlessui-focus-sentinel-after-${n}`,g=u.useRef(null),P=In(l),[x,E]=An(P),T=On();P&&(s=!0);let[I,A]=u.useState(null),N=q(g,t,P?x:null,C(y=>b({type:4,panel:y})),A),F=ue(g),k=bt();U(()=>(b({type:5,panelId:r}),()=>{b({type:5,panelId:null})}),[r,b]);let j=Ge(),[M,B]=Ve(a,I,j!==null?(j&le.Open)===le.Open:c.popoverState===0);Yt(M,c.button,()=>{b({type:1})});let L=c.__demoMode?!1:i&&M;fn(L,F);let O=C(y=>{var R;switch(y.key){case z.Escape:if(c.popoverState!==0||!g.current||F!=null&&F.activeElement&&!g.current.contains(F.activeElement))return;y.preventDefault(),y.stopPropagation(),b({type:1}),(R=c.button)==null||R.focus();break}});u.useEffect(()=>{var y;e.static||c.popoverState===1&&((y=e.unmount)==null||y)&&b({type:4,panel:null})},[c.popoverState,e.unmount,e.static,b]),u.useEffect(()=>{if(c.__demoMode||!o||c.popoverState!==0||!g.current)return;let y=F?.activeElement;g.current.contains(y)||te(g.current,K.First)},[c.__demoMode,o,g.current,c.popoverState]);let G=u.useMemo(()=>({open:c.popoverState===0,close:m}),[c.popoverState,m]),V=we(P?T():{},{ref:N,id:r,onKeyDown:O,onBlur:o&&c.popoverState===0?y=>{var R,$,H,D,ee;let Y=y.relatedTarget;Y&&g.current&&((R=g.current)!=null&&R.contains(Y)||(b({type:1}),((H=($=c.beforePanelSentinel.current)==null?void 0:$.contains)!=null&&H.call($,Y)||(ee=(D=c.afterPanelSentinel.current)==null?void 0:D.contains)!=null&&ee.call(D,Y))&&Y.focus({preventScroll:!0})))}:void 0,tabIndex:-1,style:{...d.style,...E,"--button-width":jt(c.button,!0).width},...Ye(B)}),_=pt(),S=C(()=>{let y=g.current;if(!y)return;function R(){Q(_.current,{[X.Forwards]:()=>{var $;te(y,K.First)===pe.Error&&(($=c.afterPanelSentinel.current)==null||$.focus())},[X.Backwards]:()=>{var $;($=c.button)==null||$.focus({preventScroll:!0})}})}R()}),h=C(()=>{let y=g.current;if(!y)return;function R(){Q(_.current,{[X.Forwards]:()=>{if(!c.button)return;let $=me(),H=$.indexOf(c.button),D=$.slice(0,H+1),ee=[...$.slice(H+1),...D];for(let Y of ee.slice())if(Y.dataset.headlessuiFocusGuard==="true"||I!=null&&I.contains(Y)){let Ne=ee.indexOf(Y);Ne!==-1&&ee.splice(Ne,1)}te(ee,K.First,{sorted:!1})},[X.Backwards]:()=>{var $;te(y,K.Previous)===pe.Error&&(($=c.button)==null||$.focus())}})}R()});return w.createElement(wt,null,w.createElement(he.Provider,{value:r},w.createElement(ge.Provider,{value:{close:m,isPortalled:f}},w.createElement(Xn,{enabled:s?e.static||M:!1},M&&f&&w.createElement(oe,{id:p,ref:c.beforePanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:S}),J({mergeRefs:k,ourProps:V,theirProps:d,slot:G,defaultTag:ar,features:ir,visible:M,name:"Popover.Panel"}),M&&f&&w.createElement(oe,{id:v,ref:c.afterPanelSentinel,features:Z.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:h})))))}let cr="div";function fr(e,t){let n=u.useRef(null),r=q(n,t),[o,l]=u.useState([]),s=C(p=>{l(v=>{let g=v.indexOf(p);if(g!==-1){let P=v.slice();return P.splice(g,1),P}return v})}),i=C(p=>(l(v=>[...v,p]),()=>s(p))),a=C(()=>{var p;let v=se(n);if(!v)return!1;let g=v.activeElement;return(p=n.current)!=null&&p.contains(g)?!0:o.some(P=>{var x,E;return((x=v.getElementById(P.buttonId.current))==null?void 0:x.contains(g))||((E=v.getElementById(P.panelId.current))==null?void 0:E.contains(g))})}),d=C(p=>{for(let v of o)v.buttonId.current!==p&&v.close()}),c=u.useMemo(()=>({registerPopover:i,unregisterPopover:s,isFocusWithinPopoverGroup:a,closeOthers:d}),[i,s,a,d]),b=u.useMemo(()=>({}),[]),m=e,f={ref:r};return w.createElement(ft,null,w.createElement(Ae.Provider,{value:c},J({ourProps:f,theirProps:m,slot:b,defaultTag:cr,name:"Popover.Group"})))}let dr=W(nr),pr=W(or),mr=W(vt),vr=W(vt),gr=W(sr),hr=W(fr),Ir=Object.assign(dr,{Button:pr,Backdrop:vr,Overlay:mr,Panel:gr,Group:hr});export{pr as A,gr as R,xr as T,Rr as W,Ir as a,on as e,Tr as j,$r as l,z as o,Cr as p,Qe as r,Nt as w};