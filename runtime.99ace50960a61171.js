(()=>{"use strict";var e,g={},m={};function t(e){var d=m[e];if(void 0!==d)return d.exports;var a=m[e]={exports:{}};return g[e](a,a.exports,t),a.exports}t.m=g,e=[],t.O=(d,a,f,b)=>{if(!a){var r=1/0;for(c=0;c<e.length;c++){for(var[a,f,b]=e[c],l=!0,n=0;n<a.length;n++)(!1&b||r>=b)&&Object.keys(t.O).every(p=>t.O[p](a[n]))?a.splice(n--,1):(l=!1,b<r&&(r=b));if(l){e.splice(c--,1);var i=f();void 0!==i&&(d=i)}}return d}b=b||0;for(var c=e.length;c>0&&e[c-1][2]>b;c--)e[c]=e[c-1];e[c]=[a,f,b]},(()=>{var d,e=Object.getPrototypeOf?a=>Object.getPrototypeOf(a):a=>a.__proto__;t.t=function(a,f){if(1&f&&(a=this(a)),8&f||"object"==typeof a&&a&&(4&f&&a.__esModule||16&f&&"function"==typeof a.then))return a;var b=Object.create(null);t.r(b);var c={};d=d||[null,e({}),e([]),e(e)];for(var r=2&f&&a;"object"==typeof r&&!~d.indexOf(r);r=e(r))Object.getOwnPropertyNames(r).forEach(l=>c[l]=()=>a[l]);return c.default=()=>a,t.d(b,c),b}})(),t.d=(e,d)=>{for(var a in d)t.o(d,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:d[a]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((d,a)=>(t.f[a](e,d),d),[])),t.u=e=>(({2214:"polyfills-core-js",6748:"polyfills-dom",8592:"common"}[e]||e)+"."+{53:"ea109990fa04ee0e",388:"ed4f7bd3cb8a6187",438:"dcec5e68996a6399",657:"8f6482cdc8ff837f",1033:"ce9fef52c205cb00",1118:"a53a137d43883a95",1217:"b572d9d4a999597f",1536:"de1edef1f33f53af",1709:"9c429fd833005c87",2073:"59c855f055d2a294",2214:"9ed3e15e95dcc867",2349:"199564d4cbf2c258",2547:"04c21b907bb49c2c",2773:"c750015d411b182b",2933:"17d69ceeacccd9ff",3326:"6ad2022392028204",3583:"bef07dced40f755f",3648:"35d34dc4f343459c",3804:"d7a143da6c316abe",4174:"3bb744cb3e08f252",4330:"f34e9de4928603dc",4376:"26d6ad22d4281497",4432:"0d37319a1e617b6c",4711:"97d88242bd8882ea",4753:"abece4d1c03b69c3",4908:"06ee18edc29333fa",4959:"0d07124c3695d16e",5168:"c8acfb2b5c843ef9",5349:"f379b5c72380b073",5652:"11fbf91265de59b5",5836:"cda174ac3c5c0223",6120:"4e506d4bfa1b22fe",6560:"ec5b2d798ae3ad9b",6748:"a7f5e2166858fe40",7544:"c7a7227a05f1e519",7602:"467e7f1ed4a7e6e9",8034:"3d6715fb0955ba1c",8136:"a26141a77cc58333",8359:"0ceaa5e44d7d688a",8592:"d965b581b8ca4395",8594:"2b0d8c5ac53844da",8628:"a836a013ac62ca7d",8939:"045d4b258cf6901e",9016:"a22d7f92820fd400",9230:"6228d0a141aa1b1c",9292:"1f4f897744b7bce3",9325:"c6b7097ee68b8405",9434:"b7591b01ba5b721f",9522:"d7242b3c0a5fec2f",9536:"52dd43774fb297c7",9654:"c5e83578852169e6",9824:"f456f50a057a4fb8",9922:"725f8c3d4c0eab84",9958:"967b4578eb7978c6"}[e]+".js"),t.miniCssF=e=>{},t.o=(e,d)=>Object.prototype.hasOwnProperty.call(e,d),(()=>{var e={},d="spa-angular:";t.l=(a,f,b,c)=>{if(e[a])e[a].push(f);else{var r,l;if(void 0!==b)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var o=n[i];if(o.getAttribute("src")==a||o.getAttribute("data-webpack")==d+b){r=o;break}}r||(l=!0,(r=document.createElement("script")).type="module",r.charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",d+b),r.src=t.tu(a)),e[a]=[f];var u=(v,p)=>{r.onerror=r.onload=null,clearTimeout(s);var y=e[a];if(delete e[a],r.parentNode&&r.parentNode.removeChild(r),y&&y.forEach(_=>_(p)),v)return v(p)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=u.bind(null,r.onerror),r.onload=u.bind(null,r.onload),l&&document.head.appendChild(r)}}})(),t.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.tt=()=>(void 0===e&&(e={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),t.tu=e=>t.tt().createScriptURL(e),t.p="",(()=>{var e={3666:0};t.f.j=(f,b)=>{var c=t.o(e,f)?e[f]:void 0;if(0!==c)if(c)b.push(c[2]);else if(3666!=f){var r=new Promise((o,u)=>c=e[f]=[o,u]);b.push(c[2]=r);var l=t.p+t.u(f),n=new Error;t.l(l,o=>{if(t.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var u=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;n.message="Loading chunk "+f+" failed.\n("+u+": "+s+")",n.name="ChunkLoadError",n.type=u,n.request=s,c[1](n)}},"chunk-"+f,f)}else e[f]=0},t.O.j=f=>0===e[f];var d=(f,b)=>{var n,i,[c,r,l]=b,o=0;if(c.some(s=>0!==e[s])){for(n in r)t.o(r,n)&&(t.m[n]=r[n]);if(l)var u=l(t)}for(f&&f(b);o<c.length;o++)t.o(e,i=c[o])&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},a=self.webpackChunkspa_angular=self.webpackChunkspa_angular||[];a.forEach(d.bind(null,0)),a.push=d.bind(null,a.push.bind(a))})()})();