"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3068],{93068:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var a=n(87462),o=n(4942),r=n(1413),i=n(97685),c=n(71002),l=n(45987),u=n(67294),s=n(94184),f=n.n(s),d=n(31131),v=n(21770),b=n(82225),m=(0,u.createContext)(null),p=u.forwardRef(function(e,t){var n=e.prefixCls,a=e.className,o=e.style,r=e.id,i=e.active,c=e.tabKey,l=e.children;return u.createElement("div",{id:r&&"".concat(r,"-panel-").concat(c),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":r&&"".concat(r,"-tab-").concat(c),"aria-hidden":!i,style:o,className:f()(n,i&&"".concat(n,"-active"),a),ref:t},l)}),h=["key","forceRender","style","className"];function TabPanelList(e){var t=e.id,n=e.activeKey,i=e.animated,c=e.tabPosition,s=e.destroyInactiveTabPane,d=u.useContext(m),v=d.prefixCls,y=d.tabs,g=i.tabPane,E="".concat(v,"-tabpane");return u.createElement("div",{className:f()("".concat(v,"-content-holder"))},u.createElement("div",{className:f()("".concat(v,"-content"),"".concat(v,"-content-").concat(c),(0,o.Z)({},"".concat(v,"-content-animated"),g))},y.map(function(e){var o=e.key,c=e.forceRender,d=e.style,v=e.className,m=(0,l.Z)(e,h),y=o===n;return u.createElement(b.default,(0,a.Z)({key:o,visible:y,forceRender:c,removeOnLeave:!!s,leavedClassName:"".concat(E,"-hidden")},i.tabPaneMotion),function(e,n){var i=e.style,c=e.className;return u.createElement(p,(0,a.Z)({},m,{prefixCls:E,id:t,tabKey:o,animated:g,active:y,style:(0,r.Z)((0,r.Z)({},d),i),className:f()(v,c),ref:n}))})})))}var y=n(74902),g=n(48555),E=n(66680),Z=n(75164),k=n(42550),T={width:0,height:0,left:0,top:0};function useOffsets(e,t,n){return(0,u.useMemo)(function(){for(var n=new Map,a=t.get(null===(c=e[0])||void 0===c?void 0:c.key)||T,o=a.left+a.width,i=0;i<e.length;i+=1){var c,l,u=e[i].key,s=t.get(u);s||(s=t.get(null===(l=e[i-1])||void 0===l?void 0:l.key)||T);var f=n.get(u)||(0,r.Z)({},s);f.right=o-f.left-f.width,n.set(u,f)}return n},[e.map(function(e){return e.key}).join("_"),t,n])}function useSyncState(e,t){var n=u.useRef(e),a=u.useState({}),o=(0,i.Z)(a,2)[1];function setState(e){var a="function"==typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,o({})}return[n.current,setState]}function useTouchMove(e,t){var n=(0,u.useState)(),a=(0,i.Z)(n,2),o=a[0],r=a[1],c=(0,u.useState)(0),l=(0,i.Z)(c,2),s=l[0],f=l[1],d=(0,u.useState)(0),v=(0,i.Z)(d,2),b=v[0],m=v[1],p=(0,u.useState)(),h=(0,i.Z)(p,2),y=h[0],g=h[1],E=(0,u.useRef)();function onTouchStart(e){var t=e.touches[0];r({x:t.screenX,y:t.screenY}),window.clearInterval(E.current)}function onTouchMove(e){if(o){e.preventDefault();var n=e.touches[0],a=n.screenX,i=n.screenY;r({x:a,y:i});var c=a-o.x,l=i-o.y;t(c,l);var u=Date.now();f(u),m(u-s),g({x:c,y:l})}}function onTouchEnd(){if(o&&(r(null),g(null),y)){var e=y.x/b,n=y.y/b;if(!(.1>Math.max(Math.abs(e),Math.abs(n)))){var a=e,i=n;E.current=window.setInterval(function(){if(.01>Math.abs(a)&&.01>Math.abs(i)){window.clearInterval(E.current);return}a*=.9046104802746175,i*=.9046104802746175,t(20*a,20*i)},20)}}}var Z=(0,u.useRef)();function onWheel(e){var n=e.deltaX,a=e.deltaY,o=0,r=Math.abs(n),i=Math.abs(a);r===i?o="x"===Z.current?n:a:r>i?(o=n,Z.current="x"):(o=a,Z.current="y"),t(-o,-o)&&e.preventDefault()}var k=(0,u.useRef)(null);k.current={onTouchStart:onTouchStart,onTouchMove:onTouchMove,onTouchEnd:onTouchEnd,onWheel:onWheel},u.useEffect(function(){function onProxyTouchStart(e){k.current.onTouchStart(e)}function onProxyTouchMove(e){k.current.onTouchMove(e)}function onProxyTouchEnd(e){k.current.onTouchEnd(e)}function onProxyWheel(e){k.current.onWheel(e)}return document.addEventListener("touchmove",onProxyTouchMove,{passive:!1}),document.addEventListener("touchend",onProxyTouchEnd,{passive:!1}),e.current.addEventListener("touchstart",onProxyTouchStart,{passive:!1}),e.current.addEventListener("wheel",onProxyWheel),function(){document.removeEventListener("touchmove",onProxyTouchMove),document.removeEventListener("touchend",onProxyTouchEnd)}},[])}var x=n(8410);function useUpdate(e){var t=(0,u.useState)(0),n=(0,i.Z)(t,2),a=n[0],o=n[1],r=(0,u.useRef)(0),c=(0,u.useRef)();return c.current=e,(0,x.o)(function(){var e;null===(e=c.current)||void 0===e||e.call(c)},[a]),function(){r.current===a&&(r.current+=1,o(r.current))}}function useUpdateState(e){var t=(0,u.useRef)([]),n=(0,u.useState)({}),a=(0,i.Z)(n,2)[1],o=(0,u.useRef)("function"==typeof e?e():e),r=useUpdate(function(){var e=o.current;t.current.forEach(function(t){e=t(e)}),t.current=[],o.current=e,a({})});function updater(e){t.current.push(e),r()}return[o.current,updater]}var C={width:0,height:0,left:0,top:0,right:0};function useVisibleRange(e,t,n,a,o,r,i){var c,l,s,f=i.tabs,d=i.tabPosition,v=i.rtl;return["top","bottom"].includes(d)?(c="width",l=v?"right":"left",s=Math.abs(n)):(c="height",l="top",s=-n),(0,u.useMemo)(function(){if(!f.length)return[0,0];for(var n=f.length,a=n,o=0;o<n;o+=1){var r=e.get(f[o].key)||C;if(r[l]+r[c]>s+t){a=o-1;break}}for(var i=0,u=n-1;u>=0;u-=1)if((e.get(f[u].key)||C)[l]<s){i=u+1;break}return[i,a]},[e,t,a,o,r,s,d,f.map(function(e){return e.key}).join("_"),v])}function stringify(e){var t;return e instanceof Map?(t={},e.forEach(function(e,n){t[n]=e})):t=e,JSON.stringify(t)}function genDataNodeKey(e){return String(e).replace(/"/g,"TABS_DQ")}function AddButton(e,t){var n=e.prefixCls,a=e.editable,o=e.locale,r=e.style;return a&&!1!==a.showAdd?u.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:r,"aria-label":(null==o?void 0:o.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var N=u.forwardRef(AddButton),S=u.forwardRef(function(e,t){var n,a=e.position,o=e.prefixCls,r=e.extra;if(!r)return null;var i={};return"object"!==(0,c.Z)(r)||u.isValidElement(r)?i.right=r:i=r,"right"===a&&(n=i.right),"left"===a&&(n=i.left),n?u.createElement("div",{className:"".concat(o,"-extra-content"),ref:t},n):null}),w=n(60057),P=n(97868),R=n(15105);function OperationNode(e,t){var n=e.prefixCls,a=e.id,r=e.tabs,c=e.locale,l=e.mobile,s=e.moreIcon,d=void 0===s?"More":s,v=e.moreTransitionName,b=e.style,m=e.className,p=e.editable,h=e.tabBarGutter,y=e.rtl,g=e.removeAriaLabel,E=e.onTabClick,Z=e.getPopupContainer,k=e.popupClassName,T=(0,u.useState)(!1),x=(0,i.Z)(T,2),C=x[0],S=x[1],I=(0,u.useState)(null),M=(0,i.Z)(I,2),L=M[0],B=M[1],A="".concat(a,"-more-popup"),D="".concat(n,"-dropdown"),K=null!==L?"".concat(A,"-").concat(L):null,W=null==c?void 0:c.dropdownAriaLabel;function onRemoveTab(e,t){e.preventDefault(),e.stopPropagation(),p.onEdit("remove",{key:t,event:e})}var z=u.createElement(P.default,{onClick:function(e){E(e.key,e.domEvent),S(!1)},prefixCls:"".concat(D,"-menu"),id:A,tabIndex:-1,role:"listbox","aria-activedescendant":K,selectedKeys:[L],"aria-label":void 0!==W?W:"expanded dropdown"},r.map(function(e){var t=p&&!1!==e.closable&&!e.disabled;return u.createElement(P.MenuItem,{key:e.key,id:"".concat(A,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},u.createElement("span",null,e.label),t&&u.createElement("button",{type:"button","aria-label":g||"remove",tabIndex:0,className:"".concat(D,"-menu-item-remove"),onClick:function(t){t.stopPropagation(),onRemoveTab(t,e.key)}},e.closeIcon||p.removeIcon||"\xd7"))}));function selectOffset(e){for(var t=r.filter(function(e){return!e.disabled}),n=t.findIndex(function(e){return e.key===L})||0,a=t.length,o=0;o<a;o+=1){var i=t[n=(n+e+a)%a];if(!i.disabled){B(i.key);return}}}function onKeyDown(e){var t=e.which;if(!C){[R.Z.DOWN,R.Z.SPACE,R.Z.ENTER].includes(t)&&(S(!0),e.preventDefault());return}switch(t){case R.Z.UP:selectOffset(-1),e.preventDefault();break;case R.Z.DOWN:selectOffset(1),e.preventDefault();break;case R.Z.ESC:S(!1);break;case R.Z.SPACE:case R.Z.ENTER:null!==L&&E(L,e)}}(0,u.useEffect)(function(){var e=document.getElementById(K);e&&e.scrollIntoView&&e.scrollIntoView(!1)},[L]),(0,u.useEffect)(function(){C||B(null)},[C]);var V=(0,o.Z)({},y?"marginRight":"marginLeft",h);r.length||(V.visibility="hidden",V.order=1);var O=f()((0,o.Z)({},"".concat(D,"-rtl"),y)),U=l?null:u.createElement(w.default,{prefixCls:D,overlay:z,trigger:["hover"],visible:!!r.length&&C,transitionName:v,onVisibleChange:S,overlayClassName:f()(O,k),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:Z},u.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:V,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":A,id:"".concat(a,"-more"),"aria-expanded":C,onKeyDown:onKeyDown},d));return u.createElement("div",{className:f()("".concat(n,"-nav-operations"),m),style:b,ref:t},U,u.createElement(N,{prefixCls:n,locale:c,editable:p}))}var I=u.memo(u.forwardRef(OperationNode),function(e,t){return t.tabMoving}),TabNavList_TabNode=function(e){var t,n=e.prefixCls,a=e.id,r=e.active,i=e.tab,c=i.key,l=i.label,s=i.disabled,d=i.closeIcon,v=e.closable,b=e.renderWrapper,m=e.removeAriaLabel,p=e.editable,h=e.onClick,y=e.onFocus,g=e.style,E="".concat(n,"-tab"),Z=p&&!1!==v&&!s;function onInternalClick(e){s||h(e)}function onRemoveTab(e){e.preventDefault(),e.stopPropagation(),p.onEdit("remove",{key:c,event:e})}var k=u.createElement("div",{key:c,"data-node-key":genDataNodeKey(c),className:f()(E,(t={},(0,o.Z)(t,"".concat(E,"-with-remove"),Z),(0,o.Z)(t,"".concat(E,"-active"),r),(0,o.Z)(t,"".concat(E,"-disabled"),s),t)),style:g,onClick:onInternalClick},u.createElement("div",{role:"tab","aria-selected":r,id:a&&"".concat(a,"-tab-").concat(c),className:"".concat(E,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(c),"aria-disabled":s,tabIndex:s?null:0,onClick:function(e){e.stopPropagation(),onInternalClick(e)},onKeyDown:function(e){[R.Z.SPACE,R.Z.ENTER].includes(e.which)&&(e.preventDefault(),onInternalClick(e))},onFocus:y},l),Z&&u.createElement("button",{type:"button","aria-label":m||"remove",tabIndex:0,className:"".concat(E,"-remove"),onClick:function(e){e.stopPropagation(),onRemoveTab(e)}},d||p.removeIcon||"\xd7"));return b?b(k):k},getSize=function(e){var t=e.current||{},n=t.offsetWidth,a=t.offsetHeight;return[void 0===n?0:n,void 0===a?0:a]},getUnitValue=function(e,t){return e[t?0:1]};function TabNavList(e,t){var n,c,l,s,d,v=u.useContext(m),b=v.prefixCls,p=v.tabs,h=e.className,T=e.style,x=e.id,C=e.animated,w=e.activeKey,P=e.rtl,R=e.extra,M=e.editable,L=e.locale,B=e.tabPosition,A=e.tabBarGutter,D=e.children,K=e.onTabClick,W=e.onTabScroll,z=(0,u.useRef)(),V=(0,u.useRef)(),O=(0,u.useRef)(),U=(0,u.useRef)(),_=(0,u.useRef)(),j=(0,u.useRef)(),G=(0,u.useRef)(),F="top"===B||"bottom"===B,X=useSyncState(0,function(e,t){F&&W&&W({direction:e>t?"left":"right"})}),Y=(0,i.Z)(X,2),H=Y[0],q=Y[1],J=useSyncState(0,function(e,t){!F&&W&&W({direction:e>t?"top":"bottom"})}),Q=(0,i.Z)(J,2),$=Q[0],ee=Q[1],et=(0,u.useState)([0,0]),en=(0,i.Z)(et,2),ea=en[0],eo=en[1],er=(0,u.useState)([0,0]),ei=(0,i.Z)(er,2),ec=ei[0],el=ei[1],eu=(0,u.useState)([0,0]),es=(0,i.Z)(eu,2),ef=es[0],ed=es[1],ev=(0,u.useState)([0,0]),eb=(0,i.Z)(ev,2),em=eb[0],ep=eb[1],eh=useUpdateState(new Map),ey=(0,i.Z)(eh,2),eg=ey[0],eE=ey[1],eZ=useOffsets(p,eg,ec[0]),ek=getUnitValue(ea,F),eT=getUnitValue(ec,F),ex=getUnitValue(ef,F),eC=getUnitValue(em,F),eN=ek<eT+ex,eS=eN?ek-eC:ek-ex,ew="".concat(b,"-nav-operations-hidden"),eP=0,eR=0;function alignInRange(e){return e<eP?eP:e>eR?eR:e}F&&P?(eP=0,eR=Math.max(0,eT-eS)):(eP=Math.min(0,eS-eT),eR=0);var eI=(0,u.useRef)(),eM=(0,u.useState)(),eL=(0,i.Z)(eM,2),eB=eL[0],eA=eL[1];function doLockAnimation(){eA(Date.now())}function clearTouchMoving(){window.clearTimeout(eI.current)}useTouchMove(U,function(e,t){function doMove(e,t){e(function(e){return alignInRange(e+t)})}return!!eN&&(F?doMove(q,e):doMove(ee,t),clearTouchMoving(),doLockAnimation(),!0)}),(0,u.useEffect)(function(){return clearTouchMoving(),eB&&(eI.current=window.setTimeout(function(){eA(0)},100)),clearTouchMoving},[eB]);var eD=useVisibleRange(eZ,eS,F?H:$,eT,ex,eC,(0,r.Z)((0,r.Z)({},e),{},{tabs:p})),eK=(0,i.Z)(eD,2),eW=eK[0],ez=eK[1],eV=(0,E.Z)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=eZ.get(e)||{width:0,height:0,left:0,right:0,top:0};if(F){var n=H;P?t.right<H?n=t.right:t.right+t.width>H+eS&&(n=t.right+t.width-eS):t.left<-H?n=-t.left:t.left+t.width>-H+eS&&(n=-(t.left+t.width-eS)),ee(0),q(alignInRange(n))}else{var a=$;t.top<-$?a=-t.top:t.top+t.height>-$+eS&&(a=-(t.top+t.height-eS)),q(0),ee(alignInRange(a))}}),eO={};"top"===B||"bottom"===B?eO[P?"marginRight":"marginLeft"]=A:eO.marginTop=A;var eU=p.map(function(e,t){var n=e.key;return u.createElement(TabNavList_TabNode,{id:x,prefixCls:b,key:n,tab:e,style:0===t?void 0:eO,closable:e.closable,editable:M,active:n===w,renderWrapper:D,removeAriaLabel:null==L?void 0:L.removeAriaLabel,onClick:function(e){K(n,e)},onFocus:function(){eV(n),doLockAnimation(),U.current&&(P||(U.current.scrollLeft=0),U.current.scrollTop=0)}})}),updateTabSizes=function(){return eE(function(){var e=new Map;return p.forEach(function(t){var n,a=t.key,o=null===(n=_.current)||void 0===n?void 0:n.querySelector('[data-node-key="'.concat(genDataNodeKey(a),'"]'));o&&e.set(a,{width:o.offsetWidth,height:o.offsetHeight,left:o.offsetLeft,top:o.offsetTop})}),e})};(0,u.useEffect)(function(){updateTabSizes()},[p.map(function(e){return e.key}).join("_")]);var e_=useUpdate(function(){var e=getSize(z),t=getSize(V),n=getSize(O);eo([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=getSize(G);ed(a),ep(getSize(j));var o=getSize(_);el([o[0]-a[0],o[1]-a[1]]),updateTabSizes()}),ej=p.slice(0,eW),eG=p.slice(ez+1),eF=[].concat((0,y.Z)(ej),(0,y.Z)(eG)),eX=(0,u.useState)(),eY=(0,i.Z)(eX,2),eH=eY[0],eq=eY[1],eJ=eZ.get(w),eQ=(0,u.useRef)();function cleanInkBarRaf(){Z.Z.cancel(eQ.current)}(0,u.useEffect)(function(){var e={};return eJ&&(F?(P?e.right=eJ.right:e.left=eJ.left,e.width=eJ.width):(e.top=eJ.top,e.height=eJ.height)),cleanInkBarRaf(),eQ.current=(0,Z.Z)(function(){eq(e)}),cleanInkBarRaf},[eJ,F,P]),(0,u.useEffect)(function(){eV()},[w,eP,eR,stringify(eJ),stringify(eZ),F]),(0,u.useEffect)(function(){e_()},[P]);var e$=!!eF.length,e0="".concat(b,"-nav-wrap");return F?P?(l=H>0,c=H!==eR):(c=H<0,l=H!==eP):(s=$<0,d=$!==eP),u.createElement(g.default,{onResize:e_},u.createElement("div",{ref:(0,k.x1)(t,z),role:"tablist",className:f()("".concat(b,"-nav"),h),style:T,onKeyDown:function(){doLockAnimation()}},u.createElement(S,{ref:V,position:"left",extra:R,prefixCls:b}),u.createElement("div",{className:f()(e0,(n={},(0,o.Z)(n,"".concat(e0,"-ping-left"),c),(0,o.Z)(n,"".concat(e0,"-ping-right"),l),(0,o.Z)(n,"".concat(e0,"-ping-top"),s),(0,o.Z)(n,"".concat(e0,"-ping-bottom"),d),n)),ref:U},u.createElement(g.default,{onResize:e_},u.createElement("div",{ref:_,className:"".concat(b,"-nav-list"),style:{transform:"translate(".concat(H,"px, ").concat($,"px)"),transition:eB?"none":void 0}},eU,u.createElement(N,{ref:G,prefixCls:b,locale:L,editable:M,style:(0,r.Z)((0,r.Z)({},0===eU.length?void 0:eO),{},{visibility:e$?"hidden":null})}),u.createElement("div",{className:f()("".concat(b,"-ink-bar"),(0,o.Z)({},"".concat(b,"-ink-bar-animated"),C.inkBar)),style:eH})))),u.createElement(I,(0,a.Z)({},e,{removeAriaLabel:null==L?void 0:L.removeAriaLabel,ref:j,prefixCls:b,tabs:eF,className:!e$&&ew,tabMoving:!!eB})),u.createElement(S,{ref:O,position:"right",extra:R,prefixCls:b})))}var M=u.forwardRef(TabNavList),L=["renderTabBar"],B=["label","key"];function TabNavListWrapper(e){var t=e.renderTabBar,n=(0,l.Z)(e,L),o=u.useContext(m).tabs;return t?t((0,r.Z)((0,r.Z)({},n),{},{panes:o.map(function(e){var t=e.label,n=e.key,o=(0,l.Z)(e,B);return u.createElement(p,(0,a.Z)({tab:t,key:n,tabKey:n},o))})}),M):u.createElement(M,n)}function useAnimateConfig(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===t?{inkBar:!1,tabPane:!1}:!0===t?{inkBar:!0,tabPane:!1}:(0,r.Z)({inkBar:!0},"object"===(0,c.Z)(t)?t:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}n(80334);var A=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],D=0;function Tabs(e,t){var n,s,b=e.id,p=e.prefixCls,h=void 0===p?"rc-tabs":p,y=e.className,g=e.items,E=e.direction,Z=e.activeKey,k=e.defaultActiveKey,T=e.editable,x=e.animated,C=e.tabPosition,N=void 0===C?"top":C,S=e.tabBarGutter,w=e.tabBarStyle,P=e.tabBarExtraContent,R=e.locale,I=e.moreIcon,M=e.moreTransitionName,L=e.destroyInactiveTabPane,B=e.renderTabBar,K=e.onChange,W=e.onTabClick,z=e.onTabScroll,V=e.getPopupContainer,O=e.popupClassName,U=(0,l.Z)(e,A),_=u.useMemo(function(){return(g||[]).filter(function(e){return e&&"object"===(0,c.Z)(e)&&"key"in e})},[g]),j="rtl"===E,G=useAnimateConfig(x),F=(0,u.useState)(!1),X=(0,i.Z)(F,2),Y=X[0],H=X[1];(0,u.useEffect)(function(){H((0,d.Z)())},[]);var q=(0,v.Z)(function(){var e;return null===(e=_[0])||void 0===e?void 0:e.key},{value:Z,defaultValue:k}),J=(0,i.Z)(q,2),Q=J[0],$=J[1],ee=(0,u.useState)(function(){return _.findIndex(function(e){return e.key===Q})}),et=(0,i.Z)(ee,2),en=et[0],ea=et[1];(0,u.useEffect)(function(){var e,t=_.findIndex(function(e){return e.key===Q});-1===t&&(t=Math.max(0,Math.min(en,_.length-1)),$(null===(e=_[t])||void 0===e?void 0:e.key)),ea(t)},[_.map(function(e){return e.key}).join("_"),Q,en]);var eo=(0,v.Z)(null,{value:b}),er=(0,i.Z)(eo,2),ei=er[0],ec=er[1];function onInternalTabClick(e,t){null==W||W(e,t);var n=e!==Q;$(e),n&&(null==K||K(e))}(0,u.useEffect)(function(){b||(ec("rc-tabs-".concat(D)),D+=1)},[]);var el={id:ei,activeKey:Q,animated:G,tabPosition:N,rtl:j,mobile:Y},eu=(0,r.Z)((0,r.Z)({},el),{},{editable:T,locale:R,moreIcon:I,moreTransitionName:M,tabBarGutter:S,onTabClick:onInternalTabClick,onTabScroll:z,extra:P,style:w,panes:null,getPopupContainer:V,popupClassName:O});return u.createElement(m.Provider,{value:{tabs:_,prefixCls:h}},u.createElement("div",(0,a.Z)({ref:t,id:b,className:f()(h,"".concat(h,"-").concat(N),(n={},(0,o.Z)(n,"".concat(h,"-mobile"),Y),(0,o.Z)(n,"".concat(h,"-editable"),T),(0,o.Z)(n,"".concat(h,"-rtl"),j),n),y)},U),s,u.createElement(TabNavListWrapper,(0,a.Z)({},eu,{renderTabBar:B})),u.createElement(TabPanelList,(0,a.Z)({destroyInactiveTabPane:L},el,{animated:G}))))}var K=u.forwardRef(Tabs)}}]);