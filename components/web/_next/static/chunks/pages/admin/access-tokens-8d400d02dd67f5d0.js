(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9882],{57838:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(97685),o=n(67294);function c(){var e=o.useReducer(function(e){return e+1},0);return(0,r.Z)(e,2)[1]}},15746:function(e,t,n){"use strict";var r=n(21584);t.Z=r.Z},25378:function(e,t,n){"use strict";var r=n(67294),o=n(57838),c=n(24308);t.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,r.useRef)({}),n=(0,o.Z)();return(0,r.useEffect)(function(){var r=c.ZP.subscribe(function(r){t.current=r,e&&n()});return function(){return c.ZP.unsubscribe(r)}},[]),t.current}},97183:function(e,t,n){"use strict";var r=n(2897),o=n(7293),c=r.ZP;c.Header=r.h4,c.Footer=r.$_,c.Content=r.VY,c.Sider=o.Z,t.Z=c},71230:function(e,t,n){"use strict";var r=n(92820);t.Z=r.Z},20550:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(4942),o=n(87462),c=n(97685),i=n(97937),a=n(94184),s=n.n(a),l=n(98423),u=n(67294),f=n(53124),d=n(98787),p=n(68349),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},m=RegExp("^(".concat(d.Y.join("|"),")(-inverse)?$")),y=RegExp("^(".concat(d.E.join("|"),")$")),b=u.forwardRef(function(e,t){var n,a=e.prefixCls,d=e.className,h=e.style,b=e.children,x=e.icon,g=e.color,j=e.onClose,Z=e.closeIcon,k=e.closable,C=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),O=u.useContext(f.E_),S=O.getPrefixCls,w=O.direction,E=u.useState(!0),T=(0,c.Z)(E,2),N=T[0],_=T[1];u.useEffect(function(){"visible"in C&&_(C.visible)},[C.visible]);var P=function(){return!!g&&(m.test(g)||y.test(g))},A=(0,o.Z)({backgroundColor:g&&!P()?g:void 0},h),I=P(),M=S("tag",a),R=s()(M,(n={},(0,r.Z)(n,"".concat(M,"-").concat(g),I),(0,r.Z)(n,"".concat(M,"-has-color"),g&&!I),(0,r.Z)(n,"".concat(M,"-hidden"),!N),(0,r.Z)(n,"".concat(M,"-rtl"),"rtl"===w),n),d),$=function(e){e.stopPropagation(),null==j||j(e),!e.defaultPrevented&&("visible"in C||_(!1))},D="onClick"in C||b&&"a"===b.type,U=(0,l.Z)(C,["visible"]),F=x||null,G=F?u.createElement(u.Fragment,null,F,u.createElement("span",null,b)):b,H=u.createElement("span",(0,o.Z)({},U,{ref:t,className:R,style:A}),G,void 0!==k&&k?Z?u.createElement("span",{className:"".concat(M,"-close-icon"),onClick:$},Z):u.createElement(i.Z,{className:"".concat(M,"-close-icon"),onClick:$}):null);return D?u.createElement(p.Z,null,H):H});b.CheckableTag=function(e){var t,n=e.prefixCls,c=e.className,i=e.checked,a=e.onChange,l=e.onClick,d=h(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,u.useContext(f.E_).getPrefixCls)("tag",n),v=s()(p,(t={},(0,r.Z)(t,"".concat(p,"-checkable"),!0),(0,r.Z)(t,"".concat(p,"-checkable-checked"),i),t),c);return u.createElement("span",(0,o.Z)({},d,{className:v,onClick:function(e){null==a||a(!i),null==l||l(e)}}))};var x=b},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function o(e){return e?r[e]:r.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(19013),o=n(13882);function c(e,t){return(0,o.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(59910),o=n(13882),c=n(93645);function i(e,t,n){(0,o.Z)(2,arguments);var i=(0,r.Z)(e,t)/1e3;return(0,c.u)(null==n?void 0:n.roundingMethod)(i)}},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},44239:function(e,t,n){var r=n(62705),o=n(89607),c=n(2333),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):c(e)}},27561:function(e,t,n){var r=n(67990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),o=Object.prototype,c=o.hasOwnProperty,i=o.toString,a=r?r.toStringTag:void 0;e.exports=function(e){var t=c.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[a]=n:delete e[a]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();e.exports=c},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),o=n(7771),c=n(14841),i=Math.max,a=Math.min;e.exports=function(e,t,n){var s,l,u,f,d,p,h=0,v=!1,m=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var n=s,r=l;return s=l=void 0,h=t,f=e.apply(r,n)}function x(e){var n=e-p,r=e-h;return void 0===p||n>=t||n<0||m&&r>=u}function g(){var e,n,r,c=o();if(x(c))return j(c);d=setTimeout(g,(e=c-p,n=c-h,r=t-e,m?a(r,u-n):r))}function j(e){return(d=void 0,y&&s)?b(e):(s=l=void 0,f)}function Z(){var e,n=o(),r=x(n);if(s=arguments,l=this,p=n,r){if(void 0===d)return h=e=p,d=setTimeout(g,t),v?b(e):f;if(m)return clearTimeout(d),d=setTimeout(g,t),b(p)}return void 0===d&&(d=setTimeout(g,t)),f}return t=c(t)||0,r(n)&&(v=!!n.leading,u=(m="maxWait"in n)?i(c(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),Z.cancel=function(){void 0!==d&&clearTimeout(d),h=0,s=p=l=d=void 0},Z.flush=function(){return void 0===d?f:j(o())},Z}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),o=n(13218),c=n(33448),i=0/0,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(c(e))return i;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=s.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):a.test(e)?i:+e}},26562:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/access-tokens",function(){return n(67288)}])},67288:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(67294),c=n(85818),i=n(94199),a=n(20550),s=n(15746),l=n(32808),u=n(85402),f=n(79531),d=n(71230),p=n(71577),h=n(26713),v=n(54398),m=n(58091),y=n(5152),b=n.n(y),x=n(81453),g=n(34261);let{Title:j,Paragraph:Z}=c.Z,k=b()(()=>Promise.all([n.e(2074),n.e(7949)]).then(n.t.bind(n,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),C={CAN_SEND_SYSTEM_MESSAGES:{name:"System messages",description:"Can send official messages on behalf of the system.",color:"purple"},CAN_SEND_MESSAGES:{name:"User chat messages",description:"Can send chat messages on behalf of the owner of this token.",color:"green"},HAS_ADMIN_ACCESS:{name:"Has admin access",description:"Can perform administrative actions such as moderation, get server statuses, etc.",color:"red"}},O=e=>{let{onOk:t,onCancel:n,open:c}=e,[i,a]=(0,o.useState)([]),[h,v]=(0,o.useState)(""),m=Object.keys(C).map(e=>({value:e,label:C[e].description})),y={disabled:0===i.length||""===h},b=m.map(e=>(0,r.jsx)(s.Z,{span:8,children:(0,r.jsx)(l.Z,{value:e.value,children:e.label})},e.value));return(0,r.jsxs)(u.Z,{title:"Create New Access token",open:c,onOk:function(){t(h,i),a([]),v("")},onCancel:n,okButtonProps:y,children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("p",{children:"The name will be displayed as the chat user when sending messages with this access token."}),(0,r.jsx)(f.Z,{value:h,placeholder:"Name of bot, service, or integration",onChange:e=>v(e.currentTarget.value)})]}),(0,r.jsx)("p",{children:"Select the permissions this access token will have. It cannot be edited after it's created."}),(0,r.jsx)(l.Z.Group,{style:{width:"100%"},value:i,onChange:function(e){a(e)},children:(0,r.jsx)(d.Z,{children:b})}),(0,r.jsx)("p",{children:(0,r.jsx)(p.Z,{type:"primary",onClick:function(){a(Object.keys(C))},children:"Select all"})})]})},S=()=>{let[e,t]=(0,o.useState)([]),[n,c]=(0,o.useState)(!1);function s(e){console.error("error",e)}async function l(){try{let e=await (0,x.rQ)(x.ms);t(e)}catch(e){s(e)}}async function u(e){try{await (0,x.rQ)(x.Wr,{method:"POST",data:{token:e}}),l()}catch(e){s(e)}}async function d(n,r){try{let o=await (0,x.rQ)(x.IO,{method:"POST",data:{name:n,scopes:r}});t(e.concat(o))}catch(e){s(e)}}(0,o.useEffect)(()=>{l()},[]);let y=()=>{c(!0)},b=(e,t)=>{c(!1),d(e,t)},g=()=>{c(!1)};return(0,r.jsxs)("div",{children:[(0,r.jsx)(j,{children:"Access Tokens"}),(0,r.jsx)(Z,{children:"Access tokens are used to allow external, 3rd party tools to perform specific actions on your Owncast server. They should be kept secure and never included in client code, instead they should be kept on a server that you control."}),(0,r.jsxs)(Z,{children:["Read more about how to use these tokens, with examples, at"," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/integrations/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,r.jsx)(v.Z,{rowKey:"token",columns:[{title:"",key:"delete",render:(e,t)=>(0,r.jsx)(h.Z,{size:"middle",children:(0,r.jsx)(p.Z,{onClick:()=>u(t.accessToken),icon:(0,r.jsx)(k,{})})})},{title:"Name",dataIndex:"displayName",key:"displayName"},{title:"Token",dataIndex:"accessToken",key:"accessToken",render:e=>(0,r.jsx)(f.Z.Password,{size:"small",bordered:!1,value:e})},{title:"Scopes",dataIndex:"scopes",key:"scopes",render:e=>(0,r.jsx)(r.Fragment,{children:e.map(e=>(function(e){if(!e||!C[e])return null;let t=C[e];return(0,r.jsx)(i.Z,{title:t.description,children:(0,r.jsx)(a.Z,{color:t.color,children:t.name})},e)})(e))})},{title:"Last Used",dataIndex:"lastUsed",key:"lastUsed",render:e=>{if(!e)return"Never";let t=new Date(e);return(0,m.Z)(t,"P p")}}],dataSource:e,pagination:!1}),(0,r.jsx)("br",{}),(0,r.jsx)(p.Z,{type:"primary",onClick:y,children:"Create Access Token"}),(0,r.jsx)(O,{open:n,onOk:b,onCancel:g})]})};S.getLayout=function(e){return(0,r.jsx)(g.l,{page:e})},t.default=S},9008:function(e,t,n){e.exports=n(42636)},11163:function(e,t,n){e.exports=n(96885)}},function(e){e.O(0,[173,5874,2184,2364,4931,5402,5257,5818,1664,8014,9915,4041,3698,3013,4398,7940,8035,4261,9774,2888,179],function(){return e(e.s=26562)}),_N_E=e.O()}]);