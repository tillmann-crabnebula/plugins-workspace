if("__TAURI__"in window){var __TAURI_PLUGIN_HTTP__=function(e){"use strict";async function t(e,t={},r){return window.__TAURI_INTERNALS__.invoke(e,t,r)}return"function"==typeof SuppressedError&&SuppressedError,e.fetch=async function(e,r){const n=r?.maxRedirections,i=r?.connectTimeout,a=r?.proxy;r&&(delete r.maxRedirections,delete r.connectTimeout,delete r.proxy);const o=r?.signal,s=new Request(e,r),u=await s.arrayBuffer(),c=u.byteLength?Array.from(new Uint8Array(u)):null,d=await t("plugin:http|fetch",{clientConfig:{method:s.method,url:s.url,headers:Array.from(s.headers.entries()),data:c,maxRedirections:n,connectTimeout:i,proxy:a}});o?.addEventListener("abort",(()=>{t("plugin:http|fetch_cancel",{rid:d})}));const{status:_,statusText:p,url:f,headers:l,rid:h}=await t("plugin:http|fetch_send",{rid:d}),y=await t("plugin:http|fetch_read_body",{rid:h}),T=new Response(new Uint8Array(y),{headers:l,status:_,statusText:p});return Object.defineProperty(T,"url",{value:f}),T},e}({});Object.defineProperty(window.__TAURI__,"http",{value:__TAURI_PLUGIN_HTTP__})}