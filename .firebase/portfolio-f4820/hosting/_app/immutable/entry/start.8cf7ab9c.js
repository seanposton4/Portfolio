import{o as qe,t as se}from"../chunks/index.e65d10ad.js";import{S as Je,a as Ke,I as q,g as Fe,f as He,b as me,c as ce,s as H,i as we,d as Q,e as G,P as Me,h as Ze}from"../chunks/singletons.a677c4c2.js";function Qe(t,o){return t==="/"||o==="ignore"?t:o==="never"?t.endsWith("/")?t.slice(0,-1):t:o==="always"&&!t.endsWith("/")?t+"/":t}function et(t){return t.split("%25").map(decodeURI).join("%25")}function tt(t){for(const o in t)t[o]=decodeURIComponent(t[o]);return t}const nt=["href","pathname","search","searchParams","toString","toJSON"];function at(t,o){const i=new URL(t);for(const c of nt){let f=i[c];Object.defineProperty(i,c,{get(){return o(),f},enumerable:!0,configurable:!0})}return rt(i),i}function rt(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ot="/__data.json";function it(t){return t.replace(/\/$/,"")+ot}function Be(t){try{return JSON.parse(sessionStorage[t])}catch{}}function Ve(t,o){const i=JSON.stringify(o);try{sessionStorage[t]=i}catch{}}function st(...t){let o=5381;for(const i of t)if(typeof i=="string"){let c=i.length;for(;c;)o=o*33^i.charCodeAt(--c)}else if(ArrayBuffer.isView(i)){const c=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let f=c.length;for(;f;)o=o*33^c[--f]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}let be=0;const le=window.fetch;function ct(){be+=1}function lt(){be-=1}{let t=!1;(async()=>{t=new Error().stack.includes("check_stack_trace")})(),window.fetch=(i,c)=>{const f=i instanceof Request?i.url:i.toString(),d=new Error().stack.split(`
`),R=d.findIndex(g=>g.includes("load@")||g.includes("at load")),u=d.slice(0,R+2).join(`
`);return(t?u.includes("src/runtime/client/client.js"):be)&&console.warn(`Loading ${f} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://kit.svelte.dev/docs/load#making-fetch-requests`),(i instanceof Request?i.method:(c==null?void 0:c.method)||"GET")!=="GET"&&te.delete(ke(i)),le(i,c)}}const te=new Map;function ft(t,o){const i=ke(t,o),c=document.querySelector(i);if(c!=null&&c.textContent){const{body:f,...d}=JSON.parse(c.textContent),R=c.getAttribute("data-ttl");return R&&te.set(i,{body:f,init:d,ttl:1e3*Number(R)}),Promise.resolve(new Response(f,d))}return le(t,o)}function ut(t,o,i){if(te.size>0){const c=ke(t,i),f=te.get(c);if(f){if(performance.now()<f.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(f.body,f.init);te.delete(c)}}return le(o,i)}function ke(t,o){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(o!=null&&o.headers||o!=null&&o.body){const f=[];o.headers&&f.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&f.push(o.body),c+=`[data-hash="${st(...f)}"]`}return c}const dt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ht(t){const o=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${gt(t).map(c=>{const f=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(f)return o.push({name:f[1],matcher:f[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(d)return o.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const R=c.split(/\[(.+?)\](?!\])/);return"/"+R.map((y,w)=>{if(w%2){if(y.startsWith("x+"))return ye(String.fromCharCode(parseInt(y.slice(2),16)));if(y.startsWith("u+"))return ye(String.fromCharCode(...y.slice(2).split("-").map(P=>parseInt(P,16))));const g=dt.exec(y);if(!g)throw new Error(`Invalid param: ${y}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,U,O,E,L]=g;return o.push({name:E,matcher:L,optional:!!U,rest:!!O,chained:O?w===1&&R[0]==="":!1}),O?"(.*?)":U?"([^/]*)?":"([^/]+?)"}return ye(y)}).join("")}).join("")}/?$`),params:o}}function pt(t){return!/^\([^)]+\)$/.test(t)}function gt(t){return t.slice(1).split("/").filter(pt)}function mt(t,o,i){const c={},f=t.slice(1);let d=0;for(let R=0;R<o.length;R+=1){const u=o[R],y=f[R-d];if(u.chained&&u.rest&&d){c[u.name]=f.slice(R-d,R+1).filter(w=>w).join("/"),d=0;continue}if(y===void 0){u.rest&&(c[u.name]="");continue}if(!u.matcher||i[u.matcher](y)){c[u.name]=y;const w=o[R+1],g=f[R+1];w&&!w.rest&&w.optional&&g&&(d=0);continue}if(u.optional&&u.chained){d++;continue}return}if(!d)return c}function ye(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function wt({nodes:t,server_loads:o,dictionary:i,matchers:c}){const f=new Set(o);return Object.entries(i).map(([u,[y,w,g]])=>{const{pattern:U,params:O}=ht(u),E={id:u,exec:L=>{const P=U.exec(L);if(P)return mt(P,O,c)},errors:[1,...g||[]].map(L=>t[L]),layouts:[0,...w||[]].map(R),leaf:d(y)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function d(u){const y=u<0;return y&&(u=~u),[y,t[u]]}function R(u){return u===void 0?u:[f.has(u),t[u]]}}let ee=class{constructor(o,i){this.status=o,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}},ze=class{constructor(o,i){this.status=o,this.location=i}};async function yt(t){var o;for(const i in t)if(typeof((o=t[i])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([c,f])=>[c,await f])));return t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const _t=-1,vt=-2,bt=-3,kt=-4,Et=-5,St=-6;function Rt(t,o){if(typeof t=="number")return f(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const i=t,c=Array(i.length);function f(d,R=!1){if(d===_t)return;if(d===bt)return NaN;if(d===kt)return 1/0;if(d===Et)return-1/0;if(d===St)return-0;if(R)throw new Error("Invalid input");if(d in c)return c[d];const u=i[d];if(!u||typeof u!="object")c[d]=u;else if(Array.isArray(u))if(typeof u[0]=="string"){const y=u[0],w=o==null?void 0:o[y];if(w)return c[d]=w(f(u[1]));switch(y){case"Date":c[d]=new Date(u[1]);break;case"Set":const g=new Set;c[d]=g;for(let E=1;E<u.length;E+=1)g.add(f(u[E]));break;case"Map":const U=new Map;c[d]=U;for(let E=1;E<u.length;E+=2)U.set(f(u[E]),f(u[E+1]));break;case"RegExp":c[d]=new RegExp(u[1],u[2]);break;case"Object":c[d]=Object(u[1]);break;case"BigInt":c[d]=BigInt(u[1]);break;case"null":const O=Object.create(null);c[d]=O;for(let E=1;E<u.length;E+=2)O[u[E]]=f(u[E+1]);break;default:throw new Error(`Unknown type ${y}`)}}else{const y=new Array(u.length);c[d]=y;for(let w=0;w<u.length;w+=1){const g=u[w];g!==vt&&(y[w]=f(g))}}else{const y={};c[d]=y;for(const w in u){const g=u[w];y[w]=f(g)}}return c[d]}return f(0)}function $t(t){const o=new Set(t);function i(c,f){if(c)for(const d in c){if(d[0]==="_"||o.has(d))continue;const R=It(d,f==null?void 0:f.slice(f.lastIndexOf(".")))??`valid exports are ${t.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${d}'${f?` in ${f}`:""} (${R})`)}}return i}function It(t,o=".js"){let i=[];if(Ye.includes(t)&&i.push(`+page${o}`),Pt.includes(t)&&i.push(`+page.server${o}`),Ot.includes(t)&&i.push(`+server${o}`),i.length>0)return`'${t}' is a valid export in ${i.join(" or ")}`}const Ye=["load","prerender","csr","ssr","trailingSlash","config"],Pt=["load","prerender","csr","ssr","actions","trailingSlash","config"],Ot=["GET","POST","PATCH","PUT","DELETE","OPTIONS","prerender","trailingSlash","config"],Lt=$t(Ye);function jt(t){return t.filter(o=>o!=null)}function At(t,o){const i=/^(moz-icon|view-source|jar):/.exec(o);i&&console.warn(`${t}: Calling \`depends('${o}')\` will throw an error in Firefox because \`${i[1]}\` is a special URI scheme`)}const J=Be(Je)??{},Z=Be(Ke)??{};function _e(t){J[t]=Q()}function xt(t,o){var Ne;const i=wt(t),c=t.nodes[0],f=t.nodes[1];c(),f();const d=document.documentElement,R=[],u=[];let y=null;const w={before_navigate:[],after_navigate:[]};let g={branch:[],error:null,url:null},U=!1,O=!1,E=!0,L=!1,P=!1,B=!1,M=!1,F,x=(Ne=history.state)==null?void 0:Ne[q];x||(x=Date.now(),history.replaceState({...history.state,[q]:x},"",location.href));const fe=J[x];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let V,Ee,ne;async function Se(){ne=ne||Promise.resolve(),await ne,ne=null;const n=new URL(location.href),e=W(n,!0);y=null,await Oe(e,n,[])}function Re(n){u.some(e=>e==null?void 0:e.snapshot)&&(Z[n]=u.map(e=>{var r;return(r=e==null?void 0:e.snapshot)==null?void 0:r.capture()}))}function $e(n){var e;(e=Z[n])==null||e.forEach((r,a)=>{var l,s;(s=(l=u[a])==null?void 0:l.snapshot)==null||s.restore(r)})}function Ie(){_e(x),Ve(Je,J),Re(x),Ve(Ke,Z)}async function ue(n,{noScroll:e=!1,replaceState:r=!1,keepFocus:a=!1,state:l={},invalidateAll:s=!1},p,h){return typeof n=="string"&&(n=new URL(n,Fe(document))),ie({url:n,scroll:e?Q():null,keepfocus:a,redirect_chain:p,details:{state:l,replaceState:r},nav_token:h,accepted:()=>{s&&(M=!0)},blocked:()=>{},type:"goto"})}async function Pe(n){return y={id:n.id,promise:Ae(n).then(e=>(e.type==="loaded"&&e.state.error&&(y=null),e))},y.promise}async function ae(...n){const r=i.filter(a=>n.some(l=>a.exec(l))).map(a=>Promise.all([...a.layouts,a.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(r)}async function Oe(n,e,r,a,l,s={},p){var v,m,$;Ee=s;let h=n&&await Ae(n);if(!h){if(we(e,G))return await K(e);h=await Ue(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(n==null?void 0:n.url)||e,Ee!==s)return!1;if(h.type==="redirect")if(r.length>10||r.includes(e.pathname))h=await re({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return ue(new URL(h.location,e).href,{},[...r,e.pathname],s),!1;else((v=h.props.page)==null?void 0:v.status)>=400&&await H.updated.check()&&await K(e);if(R.length=0,M=!1,L=!0,a&&(_e(a),Re(a)),(m=h.props.page)!=null&&m.url&&h.props.page.url.pathname!==e.pathname&&(e.pathname=($=h.props.page)==null?void 0:$.url.pathname),l&&l.details){const{details:b}=l,I=b.replaceState?0:1;if(b.state[q]=x+=I,history[b.replaceState?"replaceState":"pushState"](b.state,"",e),!b.replaceState){let k=x+1;for(;Z[k]||J[k];)delete Z[k],delete J[k],k+=1}}if(y=null,O?(g=h.state,h.props.page&&(h.props.page.url=e),F.$set(h.props)):Le(h),l){const{scroll:b,keepfocus:I}=l,{activeElement:k}=document;if(await se(),E){const j=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));b?scrollTo(b.x,b.y):j?j.scrollIntoView():scrollTo(0,0)}const _=document.activeElement!==k&&document.activeElement!==document.body;!I&&!_&&await ve()}else await se();E=!0,h.props.page&&(V=h.props.page),p&&p(),L=!1}function Le(n){var a;if(document.querySelector("vite-error-overlay"))return;g=n.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),V=n.props.page,F=new t.root({target:o,props:{...n.props,stores:H,components:u},hydrate:!0}),$e(x);const r={from:null,to:{params:g.params,route:{id:((a=g.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};w.after_navigate.forEach(l=>l(r)),O=!0}async function Y({url:n,params:e,branch:r,status:a,error:l,route:s,form:p}){let h="never";for(const k of r)(k==null?void 0:k.slash)!==void 0&&(h=k.slash);n.pathname=Qe(n.pathname,h),n.search=n.search;const v={type:"loaded",state:{url:n,params:e,branch:r,error:l,route:s},props:{constructors:jt(r).map(k=>k.node.component)}};p!==void 0&&(v.props.form=p);let m={},$=!V,b=0;for(let k=0;k<Math.max(r.length,g.branch.length);k+=1){const _=r[k],j=g.branch[k];(_==null?void 0:_.data)!==(j==null?void 0:j.data)&&($=!0),_&&(m={...m,..._.data},$&&(v.props[`data_${b}`]=m),b+=1)}return(!g.url||n.href!==g.url.href||g.error!==l||p!==void 0&&p!==V.form||$)&&(v.props.page={error:l,params:e,route:{id:(s==null?void 0:s.id)??null},status:a,url:new URL(n),form:p??null,data:$?m:V.data}),v}async function de({loader:n,parent:e,url:r,params:a,route:l,server_data_node:s}){var m,$,b;let p=null;const h={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await n();if(Lt(v.universal),(m=v.universal)!=null&&m.load){let I=function(..._){for(const j of _){At(l.id,j);const{href:D}=new URL(j,r);h.dependencies.add(D)}};const k={route:{get id(){return h.route=!0,l.id}},params:new Proxy(a,{get:(_,j)=>(h.params.add(j),_[j])}),data:(s==null?void 0:s.data)??null,url:at(r,()=>{h.url=!0}),async fetch(_,j){let D;_ instanceof Request?(D=_.url,j={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...j}):D=_;const C=new URL(D,r);return I(C.href),C.origin===r.origin&&(D=C.href.slice(r.origin.length)),O?ut(D,C.href,j):ft(D,j)},setHeaders:()=>{},depends:I,parent(){return h.parent=!0,e()}};try{if(ct(),p=await v.universal.load.call(null,k)??null,p!=null&&Object.getPrototypeOf(p)!==Object.prototype)throw new Error(`a load function related to route '${l.id}' returned ${typeof p!="object"?`a ${typeof p}`:p instanceof Response?"a Response object":Array.isArray(p)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{lt()}p=p?await yt(p):null}return{node:v,loader:n,server:s,universal:($=v.universal)!=null&&$.load?{type:"data",data:p,uses:h}:null,data:p??(s==null?void 0:s.data)??null,slash:((b=v.universal)==null?void 0:b.trailingSlash)??(s==null?void 0:s.slash)}}function je(n,e,r,a,l){if(M)return!0;if(!a)return!1;if(a.parent&&n||a.route&&e||a.url&&r)return!0;for(const s of a.params)if(l[s]!==g.params[s])return!0;for(const s of a.dependencies)if(R.some(p=>p(new URL(s))))return!0;return!1}function he(n,e){return(n==null?void 0:n.type)==="data"?n:(n==null?void 0:n.type)==="skip"?e??null:null}async function Ae({id:n,invalidating:e,url:r,params:a,route:l}){if((y==null?void 0:y.id)===n)return y.promise;const{errors:s,layouts:p,leaf:h}=l,v=[...p,h];s.forEach(S=>S==null?void 0:S().catch(()=>{})),v.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let m=null;const $=g.url?n!==g.url.pathname+g.url.search:!1,b=g.route?l.id!==g.route.id:!1;let I=!1;const k=v.map((S,N)=>{var z;const A=g.branch[N],T=!!(S!=null&&S[0])&&((A==null?void 0:A.loader)!==S[1]||je(I,b,$,(z=A.server)==null?void 0:z.uses,a));return T&&(I=!0),T});if(k.some(Boolean)){try{m=await Ge(r,k)}catch(S){return re({status:S instanceof ee?S.status:500,error:await X(S,{url:r,params:a,route:{id:l.id}}),url:r,route:l})}if(m.type==="redirect")return m}const _=m==null?void 0:m.nodes;let j=!1;const D=v.map(async(S,N)=>{var pe;if(!S)return;const A=g.branch[N],T=_==null?void 0:_[N];if((!T||T.type==="skip")&&S[1]===(A==null?void 0:A.loader)&&!je(j,b,$,(pe=A.universal)==null?void 0:pe.uses,a))return A;if(j=!0,(T==null?void 0:T.type)==="error")throw T;return de({loader:S[1],url:r,params:a,route:l,parent:async()=>{var Ce;const De={};for(let ge=0;ge<N;ge+=1)Object.assign(De,(Ce=await D[ge])==null?void 0:Ce.data);return De},server_data_node:he(T===void 0&&S[0]?{type:"skip"}:T??null,S[0]?A==null?void 0:A.server:void 0)})});for(const S of D)S.catch(()=>{});const C=[];for(let S=0;S<v.length;S+=1)if(v[S])try{C.push(await D[S])}catch(N){if(N instanceof ze)return{type:"redirect",location:N.location};let A=500,T;if(_!=null&&_.includes(N))A=N.status??A,T=N.error;else if(N instanceof ee)A=N.status,T=N.body;else{if(await H.updated.check())return await K(r);T=await X(N,{params:a,url:r,route:{id:l.id}})}const z=await xe(S,C,s);return z?await Y({url:r,params:a,branch:C.slice(0,z.idx).concat(z.node),status:A,error:T,route:l}):await Ue(r,{id:l.id},T,A)}else C.push(void 0);return await Y({url:r,params:a,branch:C,status:200,error:null,route:l,form:e?void 0:null})}async function xe(n,e,r){for(;n--;)if(r[n]){let a=n;for(;!e[a];)a-=1;try{return{idx:a+1,node:{node:await r[n](),loader:r[n],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:n,error:e,url:r,route:a}){const l={};let s=null;if(t.server_loads[0]===0)try{const m=await Ge(r,[!0]);if(m.type!=="data"||m.nodes[0]&&m.nodes[0].type!=="data")throw 0;s=m.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||U)&&await K(r)}const h=await de({loader:c,url:r,params:l,route:a,parent:()=>Promise.resolve({}),server_data_node:he(s)}),v={node:await f(),loader:f,universal:null,server:null,data:null};return await Y({url:r,params:l,branch:[h,v],status:n,error:e,route:null})}function W(n,e){if(we(n,G))return;const r=oe(n);for(const a of i){const l=a.exec(r);if(l)return{id:n.pathname+n.search,invalidating:e,route:a,params:tt(l),url:n}}}function oe(n){return et(n.pathname.slice(G.length)||"/")}function Te({url:n,type:e,intent:r,delta:a}){var h,v;let l=!1;const s={from:{params:g.params,route:{id:((h=g.route)==null?void 0:h.id)??null},url:g.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((v=r==null?void 0:r.route)==null?void 0:v.id)??null},url:n},willUnload:!r,type:e};a!==void 0&&(s.delta=a);const p={...s,cancel:()=>{l=!0}};return P||w.before_navigate.forEach(m=>m(p)),l?null:s}async function ie({url:n,scroll:e,keepfocus:r,redirect_chain:a,details:l,type:s,delta:p,nav_token:h,accepted:v,blocked:m}){const $=W(n,!1),b=Te({url:n,type:s,delta:p,intent:$});if(!b){m();return}const I=x;v(),P=!0,O&&H.navigating.set(b),await Oe($,n,a,I,{scroll:e,keepfocus:r,details:l},h,()=>{P=!1,w.after_navigate.forEach(k=>k(b)),H.navigating.set(null)})}async function Ue(n,e,r,a){if(n.origin===location.origin&&n.pathname===location.pathname&&!U)return await re({status:a,error:r,url:n,route:e});if(a!==404){console.error("An error occurred while loading the page. This will cause a full page reload. (This message will only appear during development.)");debugger}return await K(n)}function K(n){return location.href=n.href,new Promise(()=>{})}function Xe(){let n;d.addEventListener("mousemove",s=>{const p=s.target;clearTimeout(n),n=setTimeout(()=>{a(p,2)},20)});function e(s){a(s.composedPath()[0],1)}d.addEventListener("mousedown",e),d.addEventListener("touchstart",e,{passive:!0});const r=new IntersectionObserver(s=>{for(const p of s)p.isIntersecting&&(ae(oe(new URL(p.target.href))),r.unobserve(p.target))},{threshold:0});function a(s,p){const h=He(s,d);if(!h)return;const{url:v,external:m,download:$}=me(h,G);if(m||$)return;const b=ce(h);if(!b.reload)if(p<=b.preload_data){const I=W(v,!1);I&&Pe(I).then(k=>{k.type==="loaded"&&k.state.error&&console.warn(`Preloading data for ${I.url.pathname} failed with the following error: ${k.state.error.message}
If this error is transient, you can ignore it. Otherwise, consider disabling preloading for this route. This route was preloaded due to a data-sveltekit-preload-data attribute. See https://kit.svelte.dev/docs/link-options for more info`)})}else p<=b.preload_code&&ae(oe(v))}function l(){r.disconnect();for(const s of d.querySelectorAll("a")){const{url:p,external:h,download:v}=me(s,G);if(h||v)continue;const m=ce(s);m.reload||(m.preload_code===Me.viewport&&r.observe(s),m.preload_code===Me.eager&&ae(oe(p)))}}w.after_navigate.push(l),l()}function X(n,e){return n instanceof ee?n.body:(console.warn("The next HMR update will cause the page to reload"),t.hooks.handleError({error:n,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"})}return{after_navigate:n=>{qe(()=>(w.after_navigate.push(n),()=>{const e=w.after_navigate.indexOf(n);w.after_navigate.splice(e,1)}))},before_navigate:n=>{qe(()=>(w.before_navigate.push(n),()=>{const e=w.before_navigate.indexOf(n);w.before_navigate.splice(e,1)}))},disable_scroll_handling:()=>{if(O&&!L)throw new Error("Can only disable scroll handling during navigation");(L||!O)&&(E=!1)},goto:(n,e={})=>ue(n,e,[]),invalidate:n=>{if(typeof n=="function")R.push(n);else{const{href:e}=new URL(n,location.href);R.push(r=>r.href===e)}return Se()},invalidateAll:()=>(M=!0,Se()),preload_data:async n=>{const e=new URL(n,Fe(document)),r=W(e,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${e}`);await Pe(r)},preload_code:ae,apply_action:async n=>{if(n.type==="error"){const e=new URL(location.href),{branch:r,route:a}=g;if(!a)return;const l=await xe(g.branch.length,r,a.errors);if(l){const s=await Y({url:e,params:g.params,branch:r.slice(0,l.idx).concat(l.node),status:n.status??500,error:n.error,route:a});g=s.state,F.$set(s.props),se().then(ve)}}else n.type==="redirect"?ue(n.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...V,form:n.data,status:n.status}}),await se(),F.$set({form:n.data}),n.type==="success"&&ve())},_start_router:()=>{var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{var a;let r=!1;if(Ie(),!P){const l={from:{params:g.params,route:{id:((a=g.route)==null?void 0:a.id)??null},url:g.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};w.before_navigate.forEach(s=>s(l))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ie()}),(n=navigator.connection)!=null&&n.saveData||Xe(),d.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=He(e.composedPath()[0],d);if(!r)return;const{url:a,external:l,target:s,download:p}=me(r,G);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const h=ce(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||p)return;if(l||h.reload){Te({url:a,type:"link"})?P=!0:e.preventDefault();return}const[m,$]=a.href.split("#");if($!==void 0&&m===location.href.split("#")[0]){B=!0,_e(x),g.url=a,H.page.set({...V,url:a}),H.page.notify();return}ie({url:a,scroll:h.noscroll?Q():null,keepfocus:h.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:h.replace_state??a.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),d.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(we(s,G))return;const p=e.target,{keep_focus:h,noscroll:v,reload:m,replace_state:$}=ce(p);if(m)return;e.preventDefault(),e.stopPropagation();const b=new FormData(p),I=a==null?void 0:a.getAttribute("name");I&&b.append(I,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(b).toString(),ie({url:s,scroll:v?Q():null,keepfocus:h??!1,redirect_chain:[],details:{state:{},replaceState:$??s.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[q]){if(e.state[q]===x)return;const a=J[e.state[q]];if(g.url.href.split("#")[0]===location.href.split("#")[0]){J[x]=Q(),x=e.state[q],scrollTo(a.x,a.y);return}const l=e.state[q]-x;let s=!1;await ie({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{x=e.state[q]},blocked:()=>{history.go(-l),s=!0},type:"popstate",delta:l}),s||$e(x)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[q]:++x},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&H.navigating.set(null)})},_hydrate:async({status:n=200,error:e,node_ids:r,params:a,route:l,data:s,form:p})=>{U=!0;const h=new URL(location.href);({params:a={},route:l={id:null}}=W(h,!1)||{});let v;try{const m=r.map(async($,b)=>{const I=s[b];return I!=null&&I.uses&&(I.uses=We(I.uses)),de({loader:t.nodes[$],url:h,params:a,route:l,parent:async()=>{const k={};for(let _=0;_<b;_+=1)Object.assign(k,(await m[_]).data);return k},server_data_node:he(I)})});v=await Y({url:h,params:a,branch:await Promise.all(m),status:n,error:e,form:p,route:i.find(({id:$})=>$===l.id)??null})}catch(m){if(m instanceof ze){await K(new URL(m.location,location.href));return}v=await re({status:m instanceof ee?m.status:500,error:await X(m,{url:h,params:a,route:l}),url:h,route:l})}Le(v)}}}async function Ge(t,o){const i=new URL(t);if(i.pathname=it(t.pathname),t.searchParams.has("x-sveltekit-invalidated"))throw new Error('Cannot used reserved query parameter "x-sveltekit-invalidated"');i.searchParams.append("x-sveltekit-invalidated",o.map(f=>f?"1":"").join("_"));const c=await le(i.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async f=>{var g;const d=new Map,R=c.body.getReader(),u=new TextDecoder;function y(U){return Rt(U,{Promise:O=>new Promise((E,L)=>{d.set(O,{fulfil:E,reject:L})})})}let w="";for(;;){const{done:U,value:O}=await R.read();if(U&&!w)break;for(w+=!O&&w?`
`:u.decode(O);;){const E=w.indexOf(`
`);if(E===-1)break;const L=JSON.parse(w.slice(0,E));if(w=w.slice(E+1),L.type==="redirect")return f(L);if(L.type==="data")(g=L.nodes)==null||g.forEach(P=>{(P==null?void 0:P.type)==="data"&&(P.uses=We(P.uses),P.data=y(P.data))}),f(L);else if(L.type==="chunk"){const{id:P,data:B,error:M}=L,F=d.get(P);d.delete(P),M?F.reject(y(M)):F.fulfil(y(B))}}}})}function We(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function ve(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const o=document.body,i=o.getAttribute("tabindex");return o.tabIndex=-1,o.focus({preventScroll:!0}),i!==null?o.setAttribute("tabindex",i):o.removeAttribute("tabindex"),new Promise(c=>{setTimeout(()=>{var f;c((f=getSelection())==null?void 0:f.removeAllRanges())})})}}{const t=console.warn;console.warn=function(...i){i.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(i[0])||t(...i)}}async function Ct(t,o,i){o===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`);const c=xt(t,o);Ze({client:c}),i?await c._hydrate(i):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Ct as start};