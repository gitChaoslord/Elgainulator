if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const o=e=>s(e,r),f={module:{uri:r},exports:d,require:o};i[r]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(a(...e),d)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-DQYnjgZZ.js",revision:null},{url:"assets/index-JfvWHjSP.css",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"favicon.ico",revision:"9141eed62eb57640836d5032ae6b8e35"},{url:"favicon.svg",revision:"56fdefac7aa3fa5f4b7e008107234a33"},{url:"images/android-192x192.png",revision:"54329b41a260068af4f7bf517af359f7"},{url:"images/android-512x512.png",revision:"fd4ccc8a784eda1397a8b42ded2301dc"},{url:"images/apple-touch-icon.png",revision:"3837afd46dc881cd2f419deed78e1cb9"},{url:"images/maskable-192x192.png",revision:"3aa7daab8423652523efd49696ef1446"},{url:"images/maskable-512x512.png",revision:"6ab80b30d5cccb15b547e35b1dab131c"},{url:"index.html",revision:"559ffa30816f1d6213b2bf1eb9e9b135"},{url:"favicon.ico",revision:"9141eed62eb57640836d5032ae6b8e35"},{url:"images/android-192x192.png",revision:"54329b41a260068af4f7bf517af359f7"},{url:"images/android-512x512.png",revision:"fd4ccc8a784eda1397a8b42ded2301dc"},{url:"images/maskable-192x192.png",revision:"3aa7daab8423652523efd49696ef1446"},{url:"images/maskable-512x512.png",revision:"6ab80b30d5cccb15b547e35b1dab131c"},{url:"manifest.webmanifest",revision:"b82e5908d360191518e1ffbe6ed77c02"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
