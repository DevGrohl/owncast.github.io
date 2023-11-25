(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9882],{26803:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"}},56338:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=_interopRequireDefault(n(5661));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default=a,e.exports=a},5661:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(42122)),o=_interopRequireWildcard(n(67294)),c=a(n(26803)),s=a(n(92074));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(a,o,c):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var UpOutlined=function(e,t){return o.createElement(s.default,(0,l.default)((0,l.default)({},e),{},{ref:t,icon:c.default}))};UpOutlined.displayName="UpOutlined";var u=o.forwardRef(UpOutlined);t.default=u},5789:function(e,t,n){"use strict";t.Z=void 0;var a=n(38614).Col;t.Z=a},8799:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;t.Z=void 0;var l=r(n(10434)),o=r(n(38416)),c=r(n(18698)),s=r(n(27424)),u=r(n(5085)),i=r(n(56338)),d=r(n(94184)),f=r(n(82122)),p=a(n(67294)),m=n(31929),v=r(n(93319)),h=r(n(3236)),y=n(51130),b=n(46549),g=n(47419),x=n(71434),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},C=p.forwardRef(function(e,t){var n=p.useContext(m.ConfigContext),a=n.getPrefixCls,r=n.direction,C=p.useContext(h.default),w=p.useState(!1),O=(0,s.default)(w,2),k=O[0],j=O[1],_=p.useRef(null);p.useImperativeHandle(t,function(){return _.current});var E=e.className,S=e.size,N=e.disabled,P=e.prefixCls,T=e.addonBefore,M=e.addonAfter,I=e.prefix,A=e.bordered,R=void 0===A||A,Z=e.readOnly,F=e.status,D=e.controls,U=__rest(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),W=a("input-number",P),q=(0,b.useCompactItemContext)(W,r),H=q.compactSize,z=q.compactItemClassnames,B=p.createElement(i.default,{className:"".concat(W,"-handler-up-inner")}),L=p.createElement(u.default,{className:"".concat(W,"-handler-down-inner")}),G="boolean"==typeof D?D:void 0;"object"===(0,c.default)(D)&&(B=void 0===D.upIcon?B:p.createElement("span",{className:"".concat(W,"-handler-up-inner")},D.upIcon),L=void 0===D.downIcon?L:p.createElement("span",{className:"".concat(W,"-handler-down-inner")},D.downIcon));var Q=(0,p.useContext)(y.FormItemInputContext),X=Q.hasFeedback,$=Q.status,K=Q.isFormItemInput,Y=Q.feedbackIcon,J=(0,x.getMergedStatus)($,F),V=H||S||C,ee=p.useContext(v.default),et=null!=N?N:ee,en=(0,d.default)((er={},(0,o.default)(er,"".concat(W,"-lg"),"large"===V),(0,o.default)(er,"".concat(W,"-sm"),"small"===V),(0,o.default)(er,"".concat(W,"-rtl"),"rtl"===r),(0,o.default)(er,"".concat(W,"-borderless"),!R),(0,o.default)(er,"".concat(W,"-in-form-item"),K),er),(0,x.getStatusClassNames)(W,J),z,E),ea=p.createElement(f.default,(0,l.default)({ref:_,disabled:et,className:en,upHandler:B,downHandler:L,prefixCls:W,readOnly:Z,controls:G},U));if(null!=I||X){var er,el,eo=(0,d.default)("".concat(W,"-affix-wrapper"),(0,x.getStatusClassNames)("".concat(W,"-affix-wrapper"),J,X),(el={},(0,o.default)(el,"".concat(W,"-affix-wrapper-focused"),k),(0,o.default)(el,"".concat(W,"-affix-wrapper-disabled"),e.disabled),(0,o.default)(el,"".concat(W,"-affix-wrapper-sm"),"small"===C),(0,o.default)(el,"".concat(W,"-affix-wrapper-lg"),"large"===C),(0,o.default)(el,"".concat(W,"-affix-wrapper-rtl"),"rtl"===r),(0,o.default)(el,"".concat(W,"-affix-wrapper-readonly"),Z),(0,o.default)(el,"".concat(W,"-affix-wrapper-borderless"),!R),(0,o.default)(el,"".concat(E),!(T||M)&&E),el));ea=p.createElement("div",{className:eo,style:e.style,onMouseUp:function(){return _.current.focus()}},I&&p.createElement("span",{className:"".concat(W,"-prefix")},I),(0,g.cloneElement)(ea,{style:null,value:e.value,onFocus:function(t){var n;j(!0),null===(n=e.onFocus)||void 0===n||n.call(e,t)},onBlur:function(t){var n;j(!1),null===(n=e.onBlur)||void 0===n||n.call(e,t)}}),X&&p.createElement("span",{className:"".concat(W,"-suffix")},Y))}if(null!=T||null!=M){var ec,es="".concat(W,"-group"),eu="".concat(es,"-addon"),ei=T?p.createElement("div",{className:eu},T):null,ed=M?p.createElement("div",{className:eu},M):null,ef=(0,d.default)("".concat(W,"-wrapper"),es,(0,o.default)({},"".concat(es,"-rtl"),"rtl"===r)),ep=(0,d.default)("".concat(W,"-group-wrapper"),(ec={},(0,o.default)(ec,"".concat(W,"-group-wrapper-sm"),"small"===C),(0,o.default)(ec,"".concat(W,"-group-wrapper-lg"),"large"===C),(0,o.default)(ec,"".concat(W,"-group-wrapper-rtl"),"rtl"===r),ec),(0,x.getStatusClassNames)("".concat(W,"-group-wrapper"),J,X),E);ea=p.createElement("div",{className:ep,style:e.style},p.createElement("div",{className:ef},ei&&p.createElement(b.NoCompactStyle,null,p.createElement(y.NoFormStyle,{status:!0,override:!0},ei)),(0,g.cloneElement)(ea,{style:null,disabled:et}),ed&&p.createElement(b.NoCompactStyle,null,p.createElement(y.NoFormStyle,{status:!0,override:!0},ed))))}return ea});t.Z=C},16373:function(e,t,n){"use strict";var a=n(64836).default,r=n(75263).default;t.default=void 0;var l=r(n(62704)),o=a(n(87412)),c=l.default;c.Header=l.Header,c.Footer=l.Footer,c.Content=l.Content,c.Sider=o.default,t.default=c},55673:function(e,t,n){"use strict";t.Z=void 0;var a=n(38614).Row;t.Z=a},83514:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),o=r(n(38416)),c=r(n(94184)),s=a(n(67294)),u=n(31929),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};t.default=function(e){var t,n=e.prefixCls,a=e.className,r=e.checked,i=e.onChange,d=e.onClick,f=__rest(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,s.useContext(u.ConfigContext).getPrefixCls)("tag",n),m=(0,c.default)(p,(t={},(0,o.default)(t,"".concat(p,"-checkable"),!0),(0,o.default)(t,"".concat(p,"-checkable-checked"),r),t),a);return s.createElement("span",(0,l.default)({},f,{className:m,onClick:function(e){null==i||i(!r),null==d||d(e)}}))}},59361:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;t.Z=void 0;var l=r(n(38416)),o=r(n(10434)),c=r(n(27424)),s=r(n(40753)),u=r(n(94184)),i=r(n(18475)),d=a(n(67294)),f=n(31929),p=n(45471),m=r(n(61539));r(n(13594));var v=r(n(83514)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},h=new RegExp("^(".concat(p.PresetColorTypes.join("|"),")(-inverse)?$")),y=new RegExp("^(".concat(p.PresetStatusColorTypes.join("|"),")$")),b=d.forwardRef(function(e,t){var n,a=e.prefixCls,r=e.className,p=e.style,v=e.children,b=e.icon,g=e.color,x=e.onClose,C=e.closeIcon,w=e.closable,O=void 0!==w&&w,k=__rest(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),j=d.useContext(f.ConfigContext),_=j.getPrefixCls,E=j.direction,S=d.useState(!0),N=(0,c.default)(S,2),P=N[0],T=N[1];d.useEffect(function(){"visible"in k&&T(k.visible)},[k.visible]);var isPresetColor=function(){return!!g&&(h.test(g)||y.test(g))},M=(0,o.default)({backgroundColor:g&&!isPresetColor()?g:void 0},p),I=isPresetColor(),A=_("tag",a),R=(0,u.default)(A,(n={},(0,l.default)(n,"".concat(A,"-").concat(g),I),(0,l.default)(n,"".concat(A,"-has-color"),g&&!I),(0,l.default)(n,"".concat(A,"-hidden"),!P),(0,l.default)(n,"".concat(A,"-rtl"),"rtl"===E),n),r),handleCloseClick=function(e){e.stopPropagation(),null==x||x(e),!e.defaultPrevented&&("visible"in k||T(!1))},Z="onClick"in k||v&&"a"===v.type,F=(0,i.default)(k,["visible"]),D=b||null,U=D?d.createElement(d.Fragment,null,D,d.createElement("span",null,v)):v,W=d.createElement("span",(0,o.default)({},F,{ref:t,className:R,style:M}),U,O?C?d.createElement("span",{className:"".concat(A,"-close-icon"),onClick:handleCloseClick},C):d.createElement(s.default,{className:"".concat(A,"-close-icon"),onClick:handleCloseClick}):null);return Z?d.createElement(m.default,null,W):W});b.CheckableTag=v.default,t.Z=b},89277:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434));r(n(18698));var o=a(n(67294));r(n(13594));var c=r(n(28460)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},s=o.forwardRef(function(e,t){var n=e.ellipsis,a=e.rel,r=__rest(e,["ellipsis","rel"]),s=(0,l.default)((0,l.default)({},r),{rel:void 0===a&&"_blank"===r.target?"noopener noreferrer":a});return delete s.navigate,o.createElement(c.default,(0,l.default)({},s,{ref:t,ellipsis:!!n,component:"a"}))});t.default=s},21987:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),o=a(n(67294)),c=r(n(28460)),s=o.forwardRef(function(e,t){return o.createElement(c.default,(0,l.default)({ref:t},e,{component:"div"}))});t.default=s},15394:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),o=r(n(18698)),c=r(n(18475)),s=a(n(67294));r(n(13594));var u=r(n(28460)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},i=s.forwardRef(function(e,t){var n=e.ellipsis,a=__rest(e,["ellipsis"]),r=s.useMemo(function(){return n&&"object"===(0,o.default)(n)?(0,c.default)(n,["expandable","rows"]):n},[n]);return s.createElement(u.default,(0,l.default)({ref:t},a,{ellipsis:r,component:"span"}))});t.default=i},53740:function(e,t,n){"use strict";var a=n(64836).default;t.default=void 0;var r=a(n(89277)),l=a(n(21987)),o=a(n(15394)),c=a(n(34528)),s=a(n(89652)).default;s.Text=o.default,s.Link=r.default,s.Title=c.default,s.Paragraph=l.default,t.default=s},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return getRoundingMethod}});var a={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function getRoundingMethod(e){return e?a[e]:a.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return differenceInMilliseconds}});var a=n(19013),r=n(13882);function differenceInMilliseconds(e,t){return(0,r.Z)(2,arguments),(0,a.Z)(e).getTime()-(0,a.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return differenceInSeconds}});var a=n(59910),r=n(13882),l=n(93645);function differenceInSeconds(e,t,n){(0,r.Z)(2,arguments);var o=(0,a.Z)(e,t)/1e3;return(0,l.u)(null==n?void 0:n.roundingMethod)(o)}},26562:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/access-tokens",function(){return n(61891)}])},61891:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(67294),l=n(2307),o=n(59361),c=n(74048),s=n(65400),u=n(56697),i=n(31059),d=n(51024),f=n(53740),p=n(55673),m=n(5789),v=n(94055),h=n(58091),y=n(5152),b=n.n(y),g=n(92863),x=n(15578);let{Title:C,Paragraph:w}=f.default,O=b()(()=>n.e(7949).then(n.t.bind(n,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),k={CAN_SEND_SYSTEM_MESSAGES:{name:"System messages",description:"Can send official messages on behalf of the system.",color:"purple"},CAN_SEND_MESSAGES:{name:"User chat messages",description:"Can send chat messages on behalf of the owner of this token.",color:"green"},HAS_ADMIN_ACCESS:{name:"Has admin access",description:"Can perform administrative actions such as moderation, get server statuses, etc.",color:"red"}};function convertScopeStringToTag(e){if(!e||!k[e])return null;let t=k[e];return(0,a.jsx)(v.default,{title:t.description,children:(0,a.jsx)(o.Z,{color:t.color,children:t.name})},e)}let NewTokenModal=e=>{let{onOk:t,onCancel:n,open:l}=e,[o,c]=(0,r.useState)([]),[f,v]=(0,r.useState)(""),h=Object.keys(k).map(e=>({value:e,label:k[e].description}));function onChange(e){c(e)}function saveToken(){t(f,o),c([]),v("")}let y={disabled:0===o.length||""===f};function selectAll(){c(Object.keys(k))}let b=h.map(e=>(0,a.jsx)(m.Z,{span:8,children:(0,a.jsx)(i.default,{value:e.value,children:e.label})},e.value));return(0,a.jsxs)(u.default,{title:"Create New Access token",open:l,onOk:saveToken,onCancel:n,okButtonProps:y,children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("p",{children:"The name will be displayed as the chat user when sending messages with this access token."}),(0,a.jsx)(d.default,{value:f,placeholder:"Name of bot, service, or integration",onChange:e=>v(e.currentTarget.value)})]}),(0,a.jsx)("p",{children:"Select the permissions this access token will have. It cannot be edited after it's created."}),(0,a.jsx)(i.default.Group,{style:{width:"100%"},value:o,onChange:onChange,children:(0,a.jsx)(p.Z,{children:b})}),(0,a.jsx)("p",{children:(0,a.jsx)(s.default,{type:"primary",onClick:selectAll,children:"Select all"})})]})},AccessTokens=()=>{let[e,t]=(0,r.useState)([]),[n,o]=(0,r.useState)(!1);function handleError(e){console.error("error",e)}async function getAccessTokens(){try{let e=await (0,g.rQ)(g.ms);t(e)}catch(e){handleError(e)}}async function handleDeleteToken(e){try{await (0,g.rQ)(g.Wr,{method:"POST",data:{token:e}}),getAccessTokens()}catch(e){handleError(e)}}async function handleSaveToken(n,a){try{let r=await (0,g.rQ)(g.IO,{method:"POST",data:{name:n,scopes:a}});t(e.concat(r))}catch(e){handleError(e)}}(0,r.useEffect)(()=>{getAccessTokens()},[]);let u=[{title:"",key:"delete",render:(e,t)=>(0,a.jsx)(c.default,{size:"middle",children:(0,a.jsx)(s.default,{onClick:()=>handleDeleteToken(t.accessToken),icon:(0,a.jsx)(O,{})})})},{title:"Name",dataIndex:"displayName",key:"displayName"},{title:"Token",dataIndex:"accessToken",key:"accessToken",render:e=>(0,a.jsx)(d.default.Password,{size:"small",bordered:!1,value:e})},{title:"Scopes",dataIndex:"scopes",key:"scopes",render:e=>(0,a.jsx)(a.Fragment,{children:e.map(e=>convertScopeStringToTag(e))})},{title:"Last Used",dataIndex:"lastUsed",key:"lastUsed",render:e=>{if(!e)return"Never";let t=new Date(e);return(0,h.Z)(t,"P p")}}];return(0,a.jsxs)("div",{children:[(0,a.jsx)(C,{children:"Access Tokens"}),(0,a.jsx)(w,{children:"Access tokens are used to allow external, 3rd party tools to perform specific actions on your Owncast server. They should be kept secure and never included in client code, instead they should be kept on a server that you control."}),(0,a.jsxs)(w,{children:["Read more about how to use these tokens, with examples, at"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/integrations/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,a.jsx)(l.Z,{rowKey:"token",columns:u,dataSource:e,pagination:!1}),(0,a.jsx)("br",{}),(0,a.jsx)(s.default,{type:"primary",onClick:()=>{o(!0)},children:"Create Access Token"}),(0,a.jsx)(NewTokenModal,{open:n,onOk:(e,t)=>{o(!1),handleSaveToken(e,t)},onCancel:()=>{o(!1)}})]})};AccessTokens.getLayout=function(e){return(0,a.jsx)(x.l,{page:e})},t.default=AccessTokens},11163:function(e,t,n){e.exports=n(59974)}},function(e){e.O(0,[5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,7752,5891,2891,4749,6627,8966,8091,5578,9774,2888,179],function(){return e(e.s=26562)}),_N_E=e.O()}]);