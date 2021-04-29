var e,t,r,n,o=Object.defineProperty,s=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;import{u,d as f,_ as l}from"./index.172c7755.js";import{d as p,h as d,c as h}from"./element-plus.4f7931b9.js";class m{set(e,t){try{localStorage.setItem(e,t)}catch(r){throw"QuotaExceededError"===r.name?new Error("Out of Memory Limit Localstorage"):new Error(r.name)}}get(e){return localStorage.getItem(e)||""}remove(e){localStorage.removeItem(e)}setExpire(e,t,r){const n=(new Date).getTime();return this.set(e,JSON.stringify({val:t,time:n+r}))}getExpire(e){const t=this.get(e),r=JSON.parse(t);return(new Date).getTime()-r.time<0?r.val:(""!==r&&this.remove(e),"")}}class g{set(e,t){return sessionStorage.setItem(e,t)}get(e){return sessionStorage.getItem(e)||""}remove(e){return sessionStorage.removeItem(e)}}(t=e||(e={}))[t.LOGOUT=401]="LOGOUT",t[t.NO_PERMISSION=403]="NO_PERMISSION",(n=r||(r={})).LOCAL="local",n.SESSION="session";const y={baseURL:{VITE_APP_SERVICE_URL:{}.VITE_APP_SERVICE_URL}.VITE_APP_SERVICE_URL,httpTimeOut:1e4,storeLocation:r.LOCAL,errorCode:[401,403],successCode:[200,0],tokenName:"access_token",duration:3e3};const v=(()=>{let e;switch(y.storeLocation){case"local":e=m;break;case"session":e=g;break;default:e=m}return new e})(),b=u(),w=()=>v.get(y.tokenName),E=()=>{v.set(y.tokenName),b.push({name:"login"})},O={userName:"113123",sex:0,age:12,permission:[],token:w()},S=f({id:"user",state:()=>((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(a)for(var r of a(t))i.call(t,r)&&c(e,r,t[r]);return e})({},O),getters(){},actions:{logout(){E()}}});var C=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},R=Object.prototype.toString;function x(e){return"[object Array]"===R.call(e)}function N(e){return void 0===e}function j(e){return null!==e&&"object"==typeof e}function k(e){if("[object Object]"!==R.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function A(e){return"[object Function]"===R.call(e)}function L(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),x(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var T={isArray:x,isArrayBuffer:function(e){return"[object ArrayBuffer]"===R.call(e)},isBuffer:function(e){return null!==e&&!N(e)&&null!==e.constructor&&!N(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:j,isPlainObject:k,isUndefined:N,isDate:function(e){return"[object Date]"===R.call(e)},isFile:function(e){return"[object File]"===R.call(e)},isBlob:function(e){return"[object Blob]"===R.call(e)},isFunction:A,isStream:function(e){return j(e)&&A(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:L,merge:function e(){var t={};function r(r,n){k(t[n])&&k(r)?t[n]=e(t[n],r):k(r)?t[n]=e({},r):x(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)L(arguments[n],r);return t},extend:function(e,t,r){return L(t,(function(t,n){e[n]=r&&"function"==typeof t?C(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function P(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var U=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(T.isURLSearchParams(t))n=t.toString();else{var o=[];T.forEach(t,(function(e,t){null!=e&&(T.isArray(e)?t+="[]":e=[e],T.forEach(e,(function(e){T.isDate(e)?e=e.toISOString():T.isObject(e)&&(e=JSON.stringify(e)),o.push(P(t)+"="+P(e))})))})),n=o.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function B(){this.handlers=[]}B.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},B.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},B.prototype.forEach=function(e){T.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var I=B,q=function(e,t,r){return T.forEach(r,(function(r){e=r(e,t)})),e},_=function(e){return!(!e||!e.__CANCEL__)},D=function(e,t){T.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},F=function(e,t,r,n,o){return function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,r,n,o)},H=T.isStandardBrowserEnv()?{write:function(e,t,r,n,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),T.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),T.isString(n)&&a.push("path="+n),T.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},M=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],V=T.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=T.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},z=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;T.isFormData(n)&&delete o["Content-Type"],(T.isBlob(n)||T.isFile(n))&&n.type&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var a=e.auth.username||"",i=unescape(encodeURIComponent(e.auth.password))||"";o.Authorization="Basic "+btoa(a+":"+i)}var c,u,f=(c=e.baseURL,u=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,u):u);if(s.open(e.method.toUpperCase(),U(f,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var n,o,a,i,c,u="getAllResponseHeaders"in s?(n=s.getAllResponseHeaders(),c={},n?(T.forEach(n.split("\n"),(function(e){if(i=e.indexOf(":"),o=T.trim(e.substr(0,i)).toLowerCase(),a=T.trim(e.substr(i+1)),o){if(c[o]&&M.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([a]):c[o]?c[o]+", "+a:a}})),c):c):null,f={data:e.responseType&&"text"!==e.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:u,config:e,request:s};!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(F("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}(t,r,f),s=null}},s.onabort=function(){s&&(r(F("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){r(F("Network Error",e,null,s)),s=null},s.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(F(t,e,"ECONNABORTED",s)),s=null},T.isStandardBrowserEnv()){var l=(e.withCredentials||V(f))&&e.xsrfCookieName?H.read(e.xsrfCookieName):void 0;l&&(o[e.xsrfHeaderName]=l)}if("setRequestHeader"in s&&T.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:s.setRequestHeader(t,e)})),T.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),e.responseType)try{s.responseType=e.responseType}catch(p){if("json"!==e.responseType)throw p}"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){s&&(s.abort(),r(e),s=null)})),n||(n=null),s.send(n)}))},J={"Content-Type":"application/x-www-form-urlencoded"};function $(e,t){!T.isUndefined(e)&&T.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var X,G={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(X=z),X),transformRequest:[function(e,t){return D(t,"Accept"),D(t,"Content-Type"),T.isFormData(e)||T.isArrayBuffer(e)||T.isBuffer(e)||T.isStream(e)||T.isFile(e)||T.isBlob(e)?e:T.isArrayBufferView(e)?e.buffer:T.isURLSearchParams(e)?($(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):T.isObject(e)?($(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};G.headers={common:{Accept:"application/json, text/plain, */*"}},T.forEach(["delete","get","head"],(function(e){G.headers[e]={}})),T.forEach(["post","put","patch"],(function(e){G.headers[e]=T.merge(J)}));var K=G;function Q(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var W=function(e){return Q(e),e.headers=e.headers||{},e.data=q(e.data,e.headers,e.transformRequest),e.headers=T.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),T.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||K.adapter)(e).then((function(t){return Q(e),t.data=q(t.data,t.headers,e.transformResponse),t}),(function(t){return _(t)||(Q(e),t&&t.response&&(t.response.data=q(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Y=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function i(e,t){return T.isPlainObject(e)&&T.isPlainObject(t)?T.merge(e,t):T.isPlainObject(t)?T.merge({},t):T.isArray(t)?t.slice():t}function c(n){T.isUndefined(t[n])?T.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(e[n],t[n])}T.forEach(n,(function(e){T.isUndefined(t[e])||(r[e]=i(void 0,t[e]))})),T.forEach(o,c),T.forEach(s,(function(n){T.isUndefined(t[n])?T.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(void 0,t[n])})),T.forEach(a,(function(n){n in t?r[n]=i(e[n],t[n]):n in e&&(r[n]=i(void 0,e[n]))}));var u=n.concat(o).concat(s).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return T.forEach(f,c),r};function Z(e){this.defaults=e,this.interceptors={request:new I,response:new I}}Z.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=Y(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[W,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},Z.prototype.getUri=function(e){return e=Y(this.defaults,e),U(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},T.forEach(["delete","get","head","options"],(function(e){Z.prototype[e]=function(t,r){return this.request(Y(r||{},{method:e,url:t}))}})),T.forEach(["post","put","patch"],(function(e){Z.prototype[e]=function(t,r,n){return this.request(Y(n||{},{method:e,url:t,data:r}))}}));var ee=Z;function te(e){this.message=e}te.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},te.prototype.__CANCEL__=!0;var re=te;function ne(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new re(e),t(r.reason))}))}ne.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},ne.source=function(){var e;return{token:new ne((function(t){e=t})),cancel:e}};var oe=ne;function se(e){var t=new ee(e),r=C(ee.prototype.request,t);return T.extend(r,ee.prototype,t),T.extend(r,t),r}var ae=se(K);ae.Axios=ee,ae.create=function(e){return se(Y(ae.defaults,e))},ae.Cancel=re,ae.CancelToken=oe,ae.isCancel=_,ae.all=function(e){return Promise.all(e)},ae.spread=function(e){return function(t){return e.apply(null,t)}};var ie=ae,ce=ae;ie.default=ce;const ue=ie.create({baseURL:y.baseURL,timeout:y.httpTimeOut,withCredentials:!0}),fe=(e,t,r)=>{let n;switch(e){case 400:n="客户端请求的语法错误，服务器无法理解";break;case 401:n="登录鉴权过期,请重新登录",E();break;case 403:n="暂无权限！";break;case 404:n=`请求地址出错:${t.response.config.url}`;break;case 405:n="请求方式被禁止";break;case 408:n="请求超时";break;case 500:n="服务器内部错误，无法完成请求";break;case 501:n="服务器不支持请求的功能，无法完成请求";break;case 502:n="作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应";break;case 503:n="由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry";break;case 504:n="充当网关或代理的服务器，未及时从远端服务器获取请求";break;case 505:n="服务器不支持请求的HTTP协议的版本";break;default:n=`请求出错:${t.message}`}n=r||n,l({title:"提示",message:n,duration:y.duration,type:"error"})};ue.interceptors.request.use((e=>(w()&&(e.headers[y.tokenName]=w()),e))),ue.interceptors.response.use((e=>{const{data:t}=e,{code:r,message:n,data:o}=t;return(Array.isArray(y.successCode)?y.successCode.includes(r):r===y.successCode)?Promise.resolve(o):(fe(r,t,n),Promise.reject(t))}),(e=>{if(e&&e.response){const{status:t}=e.response;fe(t,e)}return Promise.reject(null==e?void 0:e.response)}));const le=p({setup(){d(0);const e=S();return ue({method:"get",url:"/api/use/info"}).then((e=>{console.log(e)})),()=>h("div",null,[h("a",{href:"#"},[e.userName])])}});export default le;