function S(e,t){e.classList.toggle(t)}function g(){return document.documentElement.getAttribute("data-theme")==="dark"}const _="modulepreload",M=function(e){return"/"+e},p={},a=function(t,n,s){let f=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");f=Promise.all(n.map(o=>{if(o=M(o),o in p)return;p[o]=!0;const c=o.endsWith(".css"),T=c?'[rel="stylesheet"]':"";if(!!s)for(let l=i.length-1;l>=0;l--){const d=i[l];if(d.href===o&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${T}`))return;const r=document.createElement("link");if(r.rel=c?"stylesheet":_,c||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),c)return new Promise((l,d)=>{r.addEventListener("load",l),r.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return f.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};typeof process<"u"&&process.stdout&&process.stdout.isTTY;const{replace:v}="",R=/[&<>'"]/g,C={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},B=e=>C[e],O=e=>v.call(e,R,B);function G(e){return!!e&&typeof e=="object"&&typeof e.then=="function"}async function*A(e){const t=e.getReader();try{for(;;){const{done:n,value:s}=await t.read();if(n)return;yield s}}finally{t.releaseLock()}}const V=O;class E extends Uint8Array{}Object.defineProperty(E.prototype,Symbol.toStringTag,{get(){return"HTMLBytes"}});class y extends String{get[Symbol.toStringTag](){return"HTMLString"}}const I=e=>e instanceof y?e:typeof e=="string"?new y(e):e;function $(e){return Object.prototype.toString.call(e)==="[object HTMLString]"}function P(e){return new E(e)}function w(e){return typeof e.getReader=="function"}async function*b(e){if(w(e))for await(const t of A(e))yield u(t);else for await(const t of e)yield u(t)}function*H(e){for(const t of e)yield u(t)}function u(e){if(e&&typeof e=="object"){if(e instanceof Uint8Array)return P(e);if(e instanceof Response&&e.body){const t=e.body;return b(t)}else{if(typeof e.then=="function")return Promise.resolve(e).then(t=>u(t));if(Symbol.iterator in e)return H(e);if(Symbol.asyncIterator in e||w(e))return b(e)}}return I(e)}new TextEncoder;new TextDecoder;function F(e){return!!e&&typeof e=="object"&&"render"in e&&typeof e.render=="function"}function h({globResult:e,contentDir:t}){const n={};for(const s in e){const i=s.replace(new RegExp(`^${t}`),"").split("/");if(i.length<=1)continue;const o=i[0];n[o]??={},n[o][s]=e[s]}return n}const m="/src/content/",k=Object.assign({"/src/content/post/async-await-in-cypress.md":()=>a(()=>import("./async-await-in-cypress.CKBKBsvw.js"),__vite__mapDeps([])),"/src/content/post/missing-content.md":()=>a(()=>import("./missing-content.BKBBDnIM.js"),__vite__mapDeps([]))});h({globResult:k,contentDir:m});const L=Object.assign({});h({globResult:L,contentDir:m});h({globResult:{...k,...L},contentDir:m});const D=Object.assign({"/src/content/post/async-await-in-cypress.md":()=>a(()=>import("./async-await-in-cypress.BA0oGZIw.js"),__vite__mapDeps([])),"/src/content/post/missing-content.md":()=>a(()=>import("./missing-content.CP8X5QiH.js"),__vite__mapDeps([]))});h({globResult:D,contentDir:m});const q="https://erikvandeursen.github.io";new URL(q).hostname;class x extends HTMLElement{headerEl;mobileButtonEl;menuOpen;constructor(){super(),this.headerEl=document.getElementById("main-header"),this.mobileButtonEl=this.querySelector("button"),this.menuOpen=!1,this.mobileButtonEl.addEventListener("click",this.toggleMobileMenu)}toggleMobileMenu=()=>{S(this.headerEl,"menu-open"),this.menuOpen=!this.menuOpen,this.mobileButtonEl.setAttribute("aria-expanded",this.menuOpen.toString())}}customElements.define("mobile-button",x);class U extends HTMLElement{#e;connectedCallback(){const t=this.querySelector("button");t.setAttribute("role","switch"),t.setAttribute("aria-checked",String(g()));const{signal:n}=this.#e=new AbortController;t.addEventListener("click",()=>{let s=new CustomEvent("theme-change",{detail:{theme:g()?"light":"dark"}});document.dispatchEvent(s),t.setAttribute("aria-checked",String(g()))},{signal:n})}disconnectedCallback(){this.#e?.abort()}}customElements.define("theme-toggle",U);class W extends HTMLElement{openBtn;closeBtn;dialog;dialogFrame;constructor(){super(),this.openBtn=this.querySelector("button[data-open-modal]"),this.closeBtn=this.querySelector("button[data-close-modal]"),this.dialog=this.querySelector("dialog"),this.dialogFrame=this.querySelector(".dialog-frame"),this.openBtn.addEventListener("click",this.openModal),this.openBtn.disabled=!1,this.closeBtn.addEventListener("click",this.closeModal)}connectedCallback(){window.addEventListener("keydown",this.onWindowKeydown),(window.requestIdleCallback||(n=>setTimeout(n,1)))(async()=>{const{PagefindUI:n}=await a(()=>import("./ui-core.DG5TsfNZ.js"),__vite__mapDeps([]));new n({element:"#cactus__search",baseUrl:"/",bundlePath:"/".replace(/\/$/,"")+"/pagefind/",showImages:!1,showSubResults:!0})})}disconnectedCallback(){window.removeEventListener("keydown",this.onWindowKeydown)}onWindowClick=t=>{("href"in(t.target||{})||document.body.contains(t.target)&&!this.dialogFrame.contains(t.target))&&this.closeModal()};onWindowKeydown=t=>{t.key==="/"&&!this.dialog.open&&(this.openModal(),t.preventDefault())};openModal=t=>{this.dialog.showModal(),this.querySelector("input")?.focus(),t?.stopPropagation(),window.addEventListener("click",this.onWindowClick)};closeModal=()=>{this.dialog.open&&(this.dialog.close(),window.removeEventListener("click",this.onWindowClick))}}customElements.define("site-search",W);export{y as H,a as _,F as a,G as b,V as e,$ as i,I as m,u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
