"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2122],{82122:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r=n(87462),i=n(4942),a=n(71002),u=n(97685),l=n(45987),c=n(67294),o=n(94184),s=n.n(o),m=n(15105),f=n(8410),g=n(42550),d=n(15671),v=n(43144);function supportBigInt(){return"function"==typeof BigInt}function trimNumber(e){var t=e.trim(),n=t.startsWith("-");n&&(t=t.slice(1)),(t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,"")).startsWith(".")&&(t="0".concat(t));var r=t||"0",i=r.split("."),a=i[0]||"0",u=i[1]||"0";"0"===a&&"0"===u&&(n=!1);var l=n?"-":"";return{negative:n,negativeStr:l,trimStr:r,integerStr:a,decimalStr:u,fullStr:"".concat(l).concat(r)}}function isE(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function getNumberPrecision(e){var t=String(e);if(isE(e)){var n=Number(t.slice(t.indexOf("e-")+2)),r=t.match(/\.(\d+)/);return(null==r?void 0:r[1])&&(n+=r[1].length),n}return t.includes(".")&&validateNumber(t)?t.length-t.indexOf(".")-1:0}function num2str(e){var t=String(e);if(isE(e)){if(e>Number.MAX_SAFE_INTEGER)return String(supportBigInt()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(supportBigInt()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(getNumberPrecision(t))}return trimNumber(t).fullStr}function validateNumber(e){return"number"==typeof e?!Number.isNaN(e):!!e&&(/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e))}function getDecupleSteps(e){var t="number"==typeof e?num2str(e):trimNumber(e).fullStr;return t.includes(".")?trimNumber(t.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var p=function(){function NumberDecimal(e){if((0,d.Z)(this,NumberDecimal),this.origin="",this.number=void 0,this.empty=void 0,!e&&0!==e||!String(e).trim()){this.empty=!0;return}this.origin=String(e),this.number=Number(e)}return(0,v.Z)(NumberDecimal,[{key:"negate",value:function(){return new NumberDecimal(-this.toNumber())}},{key:"add",value:function(e){if(this.isInvalidate())return new NumberDecimal(e);var t=Number(e);if(Number.isNaN(t))return this;var n=this.number+t;if(n>Number.MAX_SAFE_INTEGER)return new NumberDecimal(Number.MAX_SAFE_INTEGER);if(n<Number.MIN_SAFE_INTEGER)return new NumberDecimal(Number.MIN_SAFE_INTEGER);var r=Math.max(getNumberPrecision(this.number),getNumberPrecision(t));return new NumberDecimal(n.toFixed(r))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toNumber()===(null==e?void 0:e.toNumber())}},{key:"lessEquals",value:function(e){return 0>=this.add(e.negate().toString()).toNumber()}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return e?this.isInvalidate()?"":num2str(this.number):this.origin}}]),NumberDecimal}(),N=function(){function BigIntDecimal(e){if((0,d.Z)(this,BigIntDecimal),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,!e&&0!==e||!String(e).trim()){this.empty=!0;return}if(this.origin=String(e),"-"===e){this.nan=!0;return}var t=e;if(isE(t)&&(t=Number(t)),validateNumber(t="string"==typeof t?t:num2str(t))){var n=trimNumber(t);this.negative=n.negative;var r=n.trimStr.split(".");this.integer=BigInt(r[0]);var i=r[1]||"0";this.decimal=BigInt(i),this.decimalLen=i.length}else this.nan=!0}return(0,v.Z)(BigIntDecimal,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(e){return BigInt("".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(e,"0")))}},{key:"negate",value:function(){var e=new BigIntDecimal(this.toString());return e.negative=!e.negative,e}},{key:"add",value:function(e){if(this.isInvalidate())return new BigIntDecimal(e);var t=new BigIntDecimal(e);if(t.isInvalidate())return this;var n=Math.max(this.getDecimalStr().length,t.getDecimalStr().length),r=trimNumber((this.alignDecimal(n)+t.alignDecimal(n)).toString()),i=r.negativeStr,a=r.trimStr,u="".concat(i).concat(a.padStart(n+1,"0"));return new BigIntDecimal("".concat(u.slice(0,-n),".").concat(u.slice(-n)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toString()===(null==e?void 0:e.toString())}},{key:"lessEquals",value:function(e){return 0>=this.add(e.negate().toString()).toNumber()}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return e?this.isInvalidate()?"":trimNumber("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),BigIntDecimal}();function getMiniDecimal(e){return supportBigInt()?new N(e):new p(e)}function toFixed(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(""===e)return"";var i=trimNumber(e),a=i.negativeStr,u=i.integerStr,l=i.decimalStr,c="".concat(t).concat(l),o="".concat(a).concat(u);if(n>=0){var s=Number(l[n]);return s>=5&&!r?toFixed(getMiniDecimal(e).add("".concat(a,"0.").concat("0".repeat(n)).concat(10-s)).toString(),t,n,r):0===n?o:"".concat(o).concat(t).concat(l.padEnd(n,"0").slice(0,n))}return".0"===c?o:"".concat(o).concat(c)}var h=n(31131);function StepHandler(e){var t=e.prefixCls,n=e.upNode,a=e.downNode,u=e.upDisabled,l=e.downDisabled,o=e.onStep,m=c.useRef(),f=c.useRef();f.current=o;var onStepMouseDown=function(e,t){function loopStep(){f.current(t),m.current=setTimeout(loopStep,200)}e.preventDefault(),f.current(t),m.current=setTimeout(loopStep,600)},onStopStep=function(){clearTimeout(m.current)};if(c.useEffect(function(){return onStopStep},[]),(0,h.Z)())return null;var g="".concat(t,"-handler"),d=s()(g,"".concat(g,"-up"),(0,i.Z)({},"".concat(g,"-up-disabled"),u)),v=s()(g,"".concat(g,"-down"),(0,i.Z)({},"".concat(g,"-down-disabled"),l)),p={unselectable:"on",role:"button",onMouseUp:onStopStep,onMouseLeave:onStopStep};return c.createElement("div",{className:"".concat(g,"-wrap")},c.createElement("span",(0,r.Z)({},p,{onMouseDown:function(e){onStepMouseDown(e,!0)},"aria-label":"Increase Value","aria-disabled":u,className:d}),n||c.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-up-inner")})),c.createElement("span",(0,r.Z)({},p,{onMouseDown:function(e){onStepMouseDown(e,!1)},"aria-label":"Decrease Value","aria-disabled":l,className:v}),a||c.createElement("span",{unselectable:"on",className:"".concat(t,"-handler-down-inner")})))}var b=n(80334);function useCursor(e,t){var n=(0,c.useRef)(null);return[function(){try{var t=e.selectionStart,r=e.selectionEnd,i=e.value,a=i.substring(0,t),u=i.substring(r);n.current={start:t,end:r,value:i,beforeTxt:a,afterTxt:u}}catch(e){}},function(){if(e&&n.current&&t)try{var r=e.value,i=n.current,a=i.beforeTxt,u=i.afterTxt,l=i.start,c=r.length;if(r.endsWith(u))c=r.length-n.current.afterTxt.length;else if(r.startsWith(a))c=a.length;else{var o=a[l-1],s=r.indexOf(o,l-1);-1!==s&&(c=s+1)}e.setSelectionRange(c,c)}catch(e){(0,b.ZP)(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(e.message))}}]}var S=n(75164),useFrame=function(){var e=(0,c.useRef)(0),cleanUp=function(){S.Z.cancel(e.current)};return(0,c.useEffect)(function(){return cleanUp},[]),function(t){cleanUp(),e.current=(0,S.Z)(function(){t()})}},I=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],getDecimalValue=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},getDecimalIfValidate=function(e){var t=getMiniDecimal(e);return t.isInvalidate()?null:t},E=c.forwardRef(function(e,t){var n,o=e.prefixCls,d=void 0===o?"rc-input-number":o,v=e.className,p=e.style,N=e.min,h=e.max,b=e.step,S=void 0===b?1:b,E=e.defaultValue,D=e.value,y=e.disabled,M=e.readOnly,w=e.upHandler,k=e.downHandler,V=e.keyboard,Z=e.controls,R=void 0===Z||Z,x=e.stringMode,B=e.parser,_=e.formatter,F=e.precision,T=e.decimalSeparator,C=e.onChange,U=e.onInput,A=e.onPressEnter,P=e.onStep,q=(0,l.Z)(e,I),G="".concat(d,"-input"),$=c.useRef(null),O=c.useState(!1),H=(0,u.Z)(O,2),W=H[0],L=H[1],X=c.useRef(!1),K=c.useRef(!1),Q=c.useRef(!1),j=c.useState(function(){return getMiniDecimal(null!=D?D:E)}),z=(0,u.Z)(j,2),J=z[0],Y=z[1];function setUncontrolledDecimalValue(e){void 0===D&&Y(e)}var ee=c.useCallback(function(e,t){return t?void 0:F>=0?F:Math.max(getNumberPrecision(e),getNumberPrecision(S))},[F,S]),et=c.useCallback(function(e){var t=String(e);if(B)return B(t);var n=t;return T&&(n=n.replace(T,".")),n.replace(/[^\w.-]+/g,"")},[B,T]),en=c.useRef(""),er=c.useCallback(function(e,t){if(_)return _(e,{userTyping:t,input:String(en.current)});var n="number"==typeof e?num2str(e):e;if(!t){var r=ee(n,t);validateNumber(n)&&(T||r>=0)&&(n=toFixed(n,T||".",r))}return n},[_,ee,T]),ei=c.useState(function(){var e=null!=E?E:D;return J.isInvalidate()&&["string","number"].includes((0,a.Z)(e))?Number.isNaN(e)?"":e:er(J.toString(),!1)}),ea=(0,u.Z)(ei,2),eu=ea[0],el=ea[1];function setInputValue(e,t){el(er(e.isInvalidate()?e.toString(!1):e.toString(!t),t))}en.current=eu;var ec=c.useMemo(function(){return getDecimalIfValidate(h)},[h,F]),eo=c.useMemo(function(){return getDecimalIfValidate(N)},[N,F]),es=c.useMemo(function(){return!(!ec||!J||J.isInvalidate())&&ec.lessEquals(J)},[ec,J]),em=c.useMemo(function(){return!(!eo||!J||J.isInvalidate())&&J.lessEquals(eo)},[eo,J]),ef=useCursor($.current,W),eg=(0,u.Z)(ef,2),ed=eg[0],ev=eg[1],getRangeValue=function(e){return ec&&!e.lessEquals(ec)?ec:eo&&!eo.lessEquals(e)?eo:null},isInRange=function(e){return!getRangeValue(e)},triggerValueUpdate=function(e,t){var n=e,r=isInRange(n)||n.isEmpty();if(n.isEmpty()||t||(n=getRangeValue(n)||n,r=!0),!M&&!y&&r){var i=n.toString(),a=ee(i,t);return a>=0&&!isInRange(n=getMiniDecimal(toFixed(i,".",a)))&&(n=getMiniDecimal(toFixed(i,".",a,!0))),n.equals(J)||(setUncontrolledDecimalValue(n),null==C||C(n.isEmpty()?null:getDecimalValue(x,n)),void 0===D&&setInputValue(n,t)),n}return J},ep=useFrame(),collectInputValue=function collectInputValue(e){if(ed(),el(e),!K.current){var t=getMiniDecimal(et(e));t.isNaN()||triggerValueUpdate(t,!0)}null==U||U(e),ep(function(){var t=e;B||(t=e.replace(/。/g,".")),t!==e&&collectInputValue(t)})},onInternalStep=function(e){if((!e||!es)&&(e||!em)){X.current=!1;var t,n=getMiniDecimal(Q.current?getDecupleSteps(S):S);e||(n=n.negate());var r=triggerValueUpdate((J||getMiniDecimal(0)).add(n.toString()),!1);null==P||P(getDecimalValue(x,r),{offset:Q.current?getDecupleSteps(S):S,type:e?"up":"down"}),null===(t=$.current)||void 0===t||t.focus()}},flushInputValue=function(e){var t=getMiniDecimal(et(eu)),n=t;n=t.isNaN()?J:triggerValueUpdate(t,e),void 0!==D?setInputValue(J,!1):n.isNaN()||setInputValue(n,!1)};return(0,f.o)(function(){J.isInvalidate()||setInputValue(J,!1)},[F]),(0,f.o)(function(){var e=getMiniDecimal(D);Y(e);var t=getMiniDecimal(et(eu));e.equals(t)&&X.current&&!_||setInputValue(e,X.current)},[D]),(0,f.o)(function(){_&&ev()},[eu]),c.createElement("div",{className:s()(d,v,(n={},(0,i.Z)(n,"".concat(d,"-focused"),W),(0,i.Z)(n,"".concat(d,"-disabled"),y),(0,i.Z)(n,"".concat(d,"-readonly"),M),(0,i.Z)(n,"".concat(d,"-not-a-number"),J.isNaN()),(0,i.Z)(n,"".concat(d,"-out-of-range"),!J.isInvalidate()&&!isInRange(J)),n)),style:p,onFocus:function(){L(!0)},onBlur:function(){flushInputValue(!1),L(!1),X.current=!1},onKeyDown:function(e){var t=e.which,n=e.shiftKey;X.current=!0,n?Q.current=!0:Q.current=!1,t===m.Z.ENTER&&(K.current||(X.current=!1),flushInputValue(!1),null==A||A(e)),!1!==V&&!K.current&&[m.Z.UP,m.Z.DOWN].includes(t)&&(onInternalStep(m.Z.UP===t),e.preventDefault())},onKeyUp:function(){X.current=!1,Q.current=!1},onCompositionStart:function(){K.current=!0},onCompositionEnd:function(){K.current=!1,collectInputValue($.current.value)},onBeforeInput:function(){X.current=!0}},R&&c.createElement(StepHandler,{prefixCls:d,upNode:w,downNode:k,upDisabled:es,downDisabled:em,onStep:onInternalStep}),c.createElement("div",{className:"".concat(G,"-wrap")},c.createElement("input",(0,r.Z)({autoComplete:"off",role:"spinbutton","aria-valuemin":N,"aria-valuemax":h,"aria-valuenow":J.isInvalidate()?null:J.toString(),step:S},q,{ref:(0,g.sQ)($,t),className:G,value:eu,onChange:function(e){collectInputValue(e.target.value)},disabled:y,readOnly:M}))))});E.displayName="InputNumber";var D=E}}]);