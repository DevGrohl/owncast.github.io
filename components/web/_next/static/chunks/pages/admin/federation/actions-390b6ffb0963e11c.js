(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4976],{57838:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(97685),o=n(67294);function i(){var t=o.useReducer(function(t){return t+1},0);return(0,r.Z)(t,2)[1]}},25378:function(t,e,n){"use strict";var r=n(67294),o=n(57838),i=n(24308);e.Z=function(){var t=!(arguments.length>0)||void 0===arguments[0]||arguments[0],e=(0,r.useRef)({}),n=(0,o.Z)();return(0,r.useEffect)(function(){var r=i.ZP.subscribe(function(r){e.current=r,t&&n()});return function(){return i.ZP.unsubscribe(r)}},[]),e.current}},97183:function(t,e,n){"use strict";var r=n(2897),o=n(7293),i=r.ZP;i.Header=r.h4,i.Footer=r.$_,i.Content=r.VY,i.Sider=o.Z,e.Z=i},93645:function(t,e,n){"use strict";n.d(e,{u:function(){return o}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(t){return t<0?Math.ceil(t):Math.floor(t)}};function o(t){return t?r[t]:r.trunc}},59910:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(19013),o=n(13882);function i(t,e){return(0,o.Z)(2,arguments),(0,r.Z)(t).getTime()-(0,r.Z)(e).getTime()}},11699:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(59910),o=n(13882),i=n(93645);function u(t,e,n){(0,o.Z)(2,arguments);var u=(0,r.Z)(t,e)/1e3;return(0,i.u)(null==n?void 0:n.roundingMethod)(u)}},62705:function(t,e,n){var r=n(55639).Symbol;t.exports=r},44239:function(t,e,n){var r=n(62705),o=n(89607),i=n(2333),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},27561:function(t,e,n){var r=n(67990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},31957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},89607:function(t,e,n){var r=n(62705),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},55639:function(t,e,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},67990:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},23279:function(t,e,n){var r=n(13218),o=n(7771),i=n(14841),u=Math.max,c=Math.min;t.exports=function(t,e,n){var a,f,s,l,d,v,p=0,h=!1,g=!1,m=!0;if("function"!=typeof t)throw TypeError("Expected a function");function x(e){var n=a,r=f;return a=f=void 0,p=e,l=t.apply(r,n)}function y(t){var n=t-v,r=t-p;return void 0===v||n>=e||n<0||g&&r>=s}function b(){var t,n,r,i=o();if(y(i))return E(i);d=setTimeout(b,(t=i-v,n=i-p,r=e-t,g?c(r,s-n):r))}function E(t){return(d=void 0,m&&a)?x(t):(a=f=void 0,l)}function j(){var t,n=o(),r=y(n);if(a=arguments,f=this,v=n,r){if(void 0===d)return p=t=v,d=setTimeout(b,e),h?x(t):l;if(g)return clearTimeout(d),d=setTimeout(b,e),x(v)}return void 0===d&&(d=setTimeout(b,e)),l}return e=i(e)||0,r(n)&&(h=!!n.leading,s=(g="maxWait"in n)?u(i(n.maxWait)||0,e):s,m="trailing"in n?!!n.trailing:m),j.cancel=function(){void 0!==d&&clearTimeout(d),p=0,a=v=f=d=void 0},j.flush=function(){return void 0===d?l:E(o())},j}},13218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},37005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},33448:function(t,e,n){var r=n(44239),o=n(37005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},7771:function(t,e,n){var r=n(55639);t.exports=function(){return r.Date.now()}},14841:function(t,e,n){var r=n(27561),o=n(13218),i=n(33448),u=0/0,c=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return u;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=a.test(t);return n||f.test(t)?s(t.slice(2),n?2:8):c.test(t)?u:+t}},10203:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/federation/actions",function(){return n(19949)}])},19949:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return v}});var r=n(85893),o=n(67294),i=n(85818),u=n(54398),c=n(58091),a=n(81453),f=n(37135),s=n(34261);let{Title:l,Paragraph:d}=i.Z;function v(){let[t,e]=(0,o.useState)([]),[n,i]=(0,o.useState)(0),[s,v]=(0,o.useState)(0),p=async()=>{try{let t="".concat(a.op,"?offset=").concat(50*s,"&limit=").concat(50),n=await (0,a.rQ)(t,{auth:!0}),{results:r,total:o}=n;i(o),(0,f.Qr)(r)?e([]):e(r)}catch(t){console.log("==== error",t)}};(0,o.useEffect)(()=>{p()},[s]);let h=[{title:"Action",dataIndex:"type",key:"type",width:50,render:(t,e)=>{let n,o;switch(e.type){case"FEDIVERSE_ENGAGEMENT_REPOST":n="/img/repost.svg",o="Share";break;case"FEDIVERSE_ENGAGEMENT_LIKE":n="/img/like.svg",o="Like";break;case"FEDIVERSE_ENGAGEMENT_FOLLOW":n="/img/follow.svg",o="Follow";break;default:n=""}return(0,r.jsxs)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[(0,r.jsx)("img",{src:n,width:"70%",alt:o,title:o}),(0,r.jsx)("div",{style:{fontSize:"0.7rem"},children:o})]})}},{title:"From",dataIndex:"actorIRI",key:"from",render:(t,e)=>(0,r.jsx)("a",{href:e.actorIRI,children:e.actorIRI})},{title:"When",dataIndex:"timestamp",key:"timestamp",render:(t,e)=>{let n=new Date(e.timestamp);return(0,c.Z)(n,"P pp")}}];return(0,r.jsxs)("div",{children:[(0,r.jsx)(l,{level:3,children:"Fediverse Actions"}),(0,r.jsx)(d,{children:"Below is a list of actions that were taken by others in response to your posts as well as people who requested to follow you."}),(0,r.jsx)(u.Z,{dataSource:t,columns:h,size:"small",rowKey:t=>t.iri,pagination:{pageSize:50,hideOnSinglePage:!0,showSizeChanger:!1,total:n},onChange:t=>{let e=t.current;v(e)}})]})}v.getLayout=function(t){return(0,r.jsx)(s.l,{page:t})}},9008:function(t,e,n){t.exports=n(42636)},11163:function(t,e,n){t.exports=n(96885)}},function(t){t.O(0,[173,5874,2184,2364,4931,5402,5257,5818,1664,8014,9915,4041,3698,3013,4398,7940,8035,4261,9774,2888,179],function(){return t(t.s=10203)}),_N_E=t.O()}]);