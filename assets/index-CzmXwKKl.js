(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Rx(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Lf={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function Cx(){if(Dg)return Mo;Dg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=e,Mo.jsx=i,Mo.jsxs=i,Mo}var Ug;function wx(){return Ug||(Ug=1,Lf.exports=Cx()),Lf.exports}var K=wx(),Of={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function Dx(){if(Ng)return oe;Ng=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,w={};function y(D,J,yt){this.props=D,this.context=J,this.refs=w,this.updater=yt||M}y.prototype.isReactComponent={},y.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=y.prototype;function P(D,J,yt){this.props=D,this.context=J,this.refs=w,this.updater=yt||M}var O=P.prototype=new _;O.constructor=P,R(O,y.prototype),O.isPureReactComponent=!0;var U=Array.isArray,H={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function F(D,J,yt,bt,X,mt){return yt=mt.ref,{$$typeof:s,type:D,key:J,ref:yt!==void 0?yt:null,props:mt}}function Q(D,J){return F(D.type,J,void 0,void 0,void 0,D.props)}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function b(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(yt){return J[yt]})}var z=/\/+/g;function lt(D,J){return typeof D=="object"&&D!==null&&D.key!=null?b(""+D.key):J.toString(36)}function at(){}function ht(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(at,at):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function ft(D,J,yt,bt,X){var mt=typeof D;(mt==="undefined"||mt==="boolean")&&(D=null);var Mt=!1;if(D===null)Mt=!0;else switch(mt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(D.$$typeof){case s:case e:Mt=!0;break;case g:return Mt=D._init,ft(Mt(D._payload),J,yt,bt,X)}}if(Mt)return X=X(D),Mt=bt===""?"."+lt(D,0):bt,U(X)?(yt="",Mt!=null&&(yt=Mt.replace(z,"$&/")+"/"),ft(X,J,yt,"",function(Qt){return Qt})):X!=null&&(C(X)&&(X=Q(X,yt+(X.key==null||D&&D.key===X.key?"":(""+X.key).replace(z,"$&/")+"/")+Mt)),J.push(X)),1;Mt=0;var At=bt===""?".":bt+":";if(U(D))for(var Ct=0;Ct<D.length;Ct++)bt=D[Ct],mt=At+lt(bt,Ct),Mt+=ft(bt,J,yt,mt,X);else if(Ct=v(D),typeof Ct=="function")for(D=Ct.call(D),Ct=0;!(bt=D.next()).done;)bt=bt.value,mt=At+lt(bt,Ct++),Mt+=ft(bt,J,yt,mt,X);else if(mt==="object"){if(typeof D.then=="function")return ft(ht(D),J,yt,bt,X);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function V(D,J,yt){if(D==null)return D;var bt=[],X=0;return ft(D,bt,"","",function(mt){return J.call(yt,mt,X++)}),bt}function rt(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(yt){(D._status===0||D._status===-1)&&(D._status=1,D._result=yt)},function(yt){(D._status===0||D._status===-1)&&(D._status=2,D._result=yt)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var Y=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function xt(){}return oe.Children={map:V,forEach:function(D,J,yt){V(D,function(){J.apply(this,arguments)},yt)},count:function(D){var J=0;return V(D,function(){J++}),J},toArray:function(D){return V(D,function(J){return J})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},oe.Component=y,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,oe.act=function(){throw Error("act(...) is not supported in production builds of React.")},oe.cache=function(D){return function(){return D.apply(null,arguments)}},oe.cloneElement=function(D,J,yt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var bt=R({},D.props),X=D.key,mt=void 0;if(J!=null)for(Mt in J.ref!==void 0&&(mt=void 0),J.key!==void 0&&(X=""+J.key),J)!I.call(J,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&J.ref===void 0||(bt[Mt]=J[Mt]);var Mt=arguments.length-2;if(Mt===1)bt.children=yt;else if(1<Mt){for(var At=Array(Mt),Ct=0;Ct<Mt;Ct++)At[Ct]=arguments[Ct+2];bt.children=At}return F(D.type,X,void 0,void 0,mt,bt)},oe.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},oe.createElement=function(D,J,yt){var bt,X={},mt=null;if(J!=null)for(bt in J.key!==void 0&&(mt=""+J.key),J)I.call(J,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(X[bt]=J[bt]);var Mt=arguments.length-2;if(Mt===1)X.children=yt;else if(1<Mt){for(var At=Array(Mt),Ct=0;Ct<Mt;Ct++)At[Ct]=arguments[Ct+2];X.children=At}if(D&&D.defaultProps)for(bt in Mt=D.defaultProps,Mt)X[bt]===void 0&&(X[bt]=Mt[bt]);return F(D,mt,void 0,void 0,null,X)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(D){return{$$typeof:d,render:D}},oe.isValidElement=C,oe.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:rt}},oe.memo=function(D,J){return{$$typeof:p,type:D,compare:J===void 0?null:J}},oe.startTransition=function(D){var J=H.T,yt={};H.T=yt;try{var bt=D(),X=H.S;X!==null&&X(yt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(xt,Y)}catch(mt){Y(mt)}finally{H.T=J}},oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},oe.use=function(D){return H.H.use(D)},oe.useActionState=function(D,J,yt){return H.H.useActionState(D,J,yt)},oe.useCallback=function(D,J){return H.H.useCallback(D,J)},oe.useContext=function(D){return H.H.useContext(D)},oe.useDebugValue=function(){},oe.useDeferredValue=function(D,J){return H.H.useDeferredValue(D,J)},oe.useEffect=function(D,J){return H.H.useEffect(D,J)},oe.useId=function(){return H.H.useId()},oe.useImperativeHandle=function(D,J,yt){return H.H.useImperativeHandle(D,J,yt)},oe.useInsertionEffect=function(D,J){return H.H.useInsertionEffect(D,J)},oe.useLayoutEffect=function(D,J){return H.H.useLayoutEffect(D,J)},oe.useMemo=function(D,J){return H.H.useMemo(D,J)},oe.useOptimistic=function(D,J){return H.H.useOptimistic(D,J)},oe.useReducer=function(D,J,yt){return H.H.useReducer(D,J,yt)},oe.useRef=function(D){return H.H.useRef(D)},oe.useState=function(D){return H.H.useState(D)},oe.useSyncExternalStore=function(D,J,yt){return H.H.useSyncExternalStore(D,J,yt)},oe.useTransition=function(){return H.H.useTransition()},oe.version="19.0.0",oe}var Lg;function ad(){return Lg||(Lg=1,Of.exports=Dx()),Of.exports}var Un=ad();const na=Rx(Un);var Pf={exports:{}},Eo={},zf={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function Ux(){return Og||(Og=1,function(s){function e(V,rt){var Y=V.length;V.push(rt);t:for(;0<Y;){var xt=Y-1>>>1,D=V[xt];if(0<l(D,rt))V[xt]=rt,V[Y]=D,Y=xt;else break t}}function i(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var rt=V[0],Y=V.pop();if(Y!==rt){V[0]=Y;t:for(var xt=0,D=V.length,J=D>>>1;xt<J;){var yt=2*(xt+1)-1,bt=V[yt],X=yt+1,mt=V[X];if(0>l(bt,Y))X<D&&0>l(mt,bt)?(V[xt]=mt,V[X]=Y,xt=X):(V[xt]=bt,V[yt]=Y,xt=yt);else if(X<D&&0>l(mt,Y))V[xt]=mt,V[X]=Y,xt=X;else break t}}return rt}function l(V,rt){var Y=V.sortIndex-rt.sortIndex;return Y!==0?Y:V.id-rt.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,v=3,M=!1,R=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(V){for(var rt=i(p);rt!==null;){if(rt.callback===null)r(p);else if(rt.startTime<=V)r(p),rt.sortIndex=rt.expirationTime,e(m,rt);else break;rt=i(p)}}function U(V){if(w=!1,O(V),!R)if(i(m)!==null)R=!0,ht();else{var rt=i(p);rt!==null&&ft(U,rt.startTime-V)}}var H=!1,I=-1,F=5,Q=-1;function C(){return!(s.unstable_now()-Q<F)}function b(){if(H){var V=s.unstable_now();Q=V;var rt=!0;try{t:{R=!1,w&&(w=!1,_(I),I=-1),M=!0;var Y=v;try{e:{for(O(V),x=i(m);x!==null&&!(x.expirationTime>V&&C());){var xt=x.callback;if(typeof xt=="function"){x.callback=null,v=x.priorityLevel;var D=xt(x.expirationTime<=V);if(V=s.unstable_now(),typeof D=="function"){x.callback=D,O(V),rt=!0;break e}x===i(m)&&r(m),O(V)}else r(m);x=i(m)}if(x!==null)rt=!0;else{var J=i(p);J!==null&&ft(U,J.startTime-V),rt=!1}}break t}finally{x=null,v=Y,M=!1}rt=void 0}}finally{rt?z():H=!1}}}var z;if(typeof P=="function")z=function(){P(b)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,at=lt.port2;lt.port1.onmessage=b,z=function(){at.postMessage(null)}}else z=function(){y(b,0)};function ht(){H||(H=!0,z())}function ft(V,rt){I=y(function(){V(s.unstable_now())},rt)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){R||M||(R=!0,ht())},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return i(m)},s.unstable_next=function(V){switch(v){case 1:case 2:case 3:var rt=3;break;default:rt=v}var Y=v;v=rt;try{return V()}finally{v=Y}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,rt){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Y=v;v=V;try{return rt()}finally{v=Y}},s.unstable_scheduleCallback=function(V,rt,Y){var xt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xt+Y:xt):Y=xt,V){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=Y+D,V={id:g++,callback:rt,priorityLevel:V,startTime:Y,expirationTime:D,sortIndex:-1},Y>xt?(V.sortIndex=Y,e(p,V),i(m)===null&&V===i(p)&&(w?(_(I),I=-1):w=!0,ft(U,Y-xt))):(V.sortIndex=D,e(m,V),R||M||(R=!0,ht())),V},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(V){var rt=v;return function(){var Y=v;v=rt;try{return V.apply(this,arguments)}finally{v=Y}}}}(Bf)),Bf}var Pg;function Nx(){return Pg||(Pg=1,zf.exports=Ux()),zf.exports}var Ff={exports:{}},yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function Lx(){if(zg)return yn;zg=1;var s=ad();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,yn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},yn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},yn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},yn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},yn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},yn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},yn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},yn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},yn.requestFormReset=function(m){r.d.r(m)},yn.unstable_batchedUpdates=function(m,p){return m(p)},yn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},yn.useFormStatus=function(){return h.H.useHostTransitionStatus()},yn.version="19.0.0",yn}var Bg;function Ox(){if(Bg)return Ff.exports;Bg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ff.exports=Lx(),Ff.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function Px(){if(Fg)return Eo;Fg=1;var s=Nx(),e=ad(),i=Ox();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),M=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),U=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function I(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var F=Symbol.for("react.client.reference");function Q(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===F?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case m:return"Fragment";case d:return"Portal";case g:return"Profiler";case p:return"StrictMode";case w:return"Suspense";case y:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M:return(t.displayName||"Context")+".Provider";case v:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _:return n=t.displayName||null,n!==null?n:Q(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return Q(t(n))}catch{}}return null}var C=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,b=Object.assign,z,lt;function at(t){if(z===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||"",lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+z+t+lt}var ht=!1;function ft(t,n){if(!t||ht)return"";ht=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var it=ct}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(ct){it=ct}t.call(vt.prototype)}}else{try{throw Error()}catch(ct){it=ct}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&it&&typeof ct.stack=="string")return[ct.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var L=S.split(`
`),k=T.split(`
`);for(c=o=0;o<L.length&&!L[o].includes("DetermineComponentFrameRoot");)o++;for(;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;if(o===L.length||c===k.length)for(o=L.length-1,c=k.length-1;1<=o&&0<=c&&L[o]!==k[c];)c--;for(;1<=o&&0<=c;o--,c--)if(L[o]!==k[c]){if(o!==1||c!==1)do if(o--,c--,0>c||L[o]!==k[c]){var ut=`
`+L[o].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=o&&0<=c);break}}}finally{ht=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?at(a):""}function V(t){switch(t.tag){case 26:case 27:case 5:return at(t.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return t=ft(t.type,!1),t;case 11:return t=ft(t.type.render,!1),t;case 1:return t=ft(t.type,!0),t;default:return""}}function rt(t){try{var n="";do n+=V(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Y(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function xt(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function D(t){if(Y(t)!==t)throw Error(r(188))}function J(t){var n=t.alternate;if(!n){if(n=Y(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return D(c),t;if(f===o)return D(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,o=f;break}if(T===o){S=!0,o=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,o=c;break}if(T===o){S=!0,o=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function yt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=yt(t),n!==null)return n;t=t.sibling}return null}var bt=Array.isArray,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mt={pending:!1,data:null,method:null,action:null},Mt=[],At=-1;function Ct(t){return{current:t}}function Qt(t){0>At||(t.current=Mt[At],Mt[At]=null,At--)}function zt(t,n){At++,Mt[At]=t.current,t.current=n}var ye=Ct(null),Re=Ct(null),ae=Ct(null),B=Ct(null);function pn(t,n){switch(zt(ae,n),zt(Re,t),zt(ye,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?rg(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=rg(t),n=sg(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Qt(ye),zt(ye,n)}function se(){Qt(ye),Qt(Re),Qt(ae)}function fe(t){t.memoizedState!==null&&zt(B,t);var n=ye.current,a=sg(n,t.type);n!==a&&(zt(Re,t),zt(ye,a))}function Xt(t){Re.current===t&&(Qt(ye),Qt(Re)),B.current===t&&(Qt(B),_o._currentValue=mt)}var Ce=Object.prototype.hasOwnProperty,Wt=s.unstable_scheduleCallback,N=s.unstable_cancelCallback,E=s.unstable_shouldYield,nt=s.unstable_requestPaint,dt=s.unstable_now,St=s.unstable_getCurrentPriorityLevel,pt=s.unstable_ImmediatePriority,Gt=s.unstable_UserBlockingPriority,Dt=s.unstable_NormalPriority,Bt=s.unstable_LowPriority,pe=s.unstable_IdlePriority,Tt=s.log,Ft=s.unstable_setDisableYieldValue,Yt=null,Vt=null;function It(t){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(Yt,t,void 0,(t.current.flags&128)===128)}catch{}}function re(t){if(typeof Tt=="function"&&Ft(t),Vt&&typeof Vt.setStrictMode=="function")try{Vt.setStrictMode(Yt,t)}catch{}}var Zt=Math.clz32?Math.clz32:Lt,De=Math.log,W=Math.LN2;function Lt(t){return t>>>=0,t===0?32:31-(De(t)/W|0)|0}var ot=128,_t=4194304;function wt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ut(t,n){var a=t.pendingLanes;if(a===0)return 0;var o=0,c=t.suspendedLanes,f=t.pingedLanes,S=t.warmLanes;t=t.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~c,a!==0?o=wt(a):(f&=T,f!==0?o=wt(f):t||(S=T&~S,S!==0&&(o=wt(S))))):(T=a&~c,T!==0?o=wt(T):f!==0?o=wt(f):t||(S=a&~S,S!==0&&(o=wt(S)))),o===0?0:n!==0&&n!==o&&!(n&c)&&(c=o&-o,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:o}function $t(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function He(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tn(){var t=ot;return ot<<=1,!(ot&4194176)&&(ot=128),t}function Me(){var t=_t;return _t<<=1,!(_t&62914560)&&(_t=4194304),t}function bn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Tn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Bo(t,n,a,o,c,f){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,L=t.expirationTimes,k=t.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-Zt(a),vt=1<<ut;T[ut]=0,L[ut]=-1;var it=k[ut];if(it!==null)for(k[ut]=null,ut=0;ut<it.length;ut++){var ct=it[ut];ct!==null&&(ct.lane&=-536870913)}a&=~vt}o!==0&&Rs(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(S&~n))}function Rs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Zt(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194218}function Si(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Zt(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function yr(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Cs(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:bg(t.type))}function Fo(t,n){var a=X.p;try{return X.p=t,n()}finally{X.p=a}}var Hn=Math.random().toString(36).slice(2),en="__reactFiber$"+Hn,nn="__reactProps$"+Hn,wi="__reactContainer$"+Hn,Mr="__reactEvents$"+Hn,Dc="__reactListeners$"+Hn,Uc="__reactHandles$"+Hn,Io="__reactResources$"+Hn,Ha="__reactMarker$"+Hn;function ws(t){delete t[en],delete t[nn],delete t[Mr],delete t[Dc],delete t[Uc]}function Di(t){var n=t[en];if(n)return n;for(var a=t.parentNode;a;){if(n=a[wi]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=cg(t);t!==null;){if(a=t[en])return a;t=cg(t)}return n}t=a,a=t.parentNode}return null}function A(t){if(t=t[en]||t[wi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function q(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function et(t){var n=t[Io];return n||(n=t[Io]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $(t){t[Ha]=!0}var j=new Set,Et={};function Rt(t,n){Pt(t,n),Pt(t+"Capture",n)}function Pt(t,n){for(Et[t]=n,t=0;t<n.length;t++)j.add(n[t])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},jt={};function me(t){return Ce.call(jt,t)?!0:Ce.call(ee,t)?!1:te.test(t)?jt[t]=!0:(ee[t]=!0,!1)}function ge(t,n,a){if(me(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ee(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ne(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function an(t){var n=Kt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function _e(t){t._valueTracker||(t._valueTracker=an(t))}function Nn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Kt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function oi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var An=/[\n"\\]/g;function cn(t){return t.replace(An,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ue(t,n,a,o,c,f,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ne(n)):t.value!==""+ne(n)&&(t.value=""+ne(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?xn(t,S,ne(n)):a!=null?xn(t,S,ne(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ne(T):t.removeAttribute("name")}function Rn(t,n,a,o,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S)}function xn(t,n,a){n==="number"&&oi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ke(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function mn(t,n,a){if(n!=null&&(n=""+ne(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ne(a):""}function Er(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(bt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ne(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Ln(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var b0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dd(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||b0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function pd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&dd(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&dd(t,f,n[f])}function Nc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var T0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),A0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(t){return A0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Lc=null;function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var br=null,Tr=null;function md(t){var n=A(t);if(n&&(t=n.stateNode)){var a=t[nn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ue(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+cn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[nn]||null;if(!c)throw Error(r(90));Ue(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Nn(o)}break t;case"textarea":mn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ke(t,!!a.multiple,n,!1)}}}var Pc=!1;function gd(t,n,a){if(Pc)return t(n,a);Pc=!0;try{var o=t(n);return o}finally{if(Pc=!1,(br!==null||Tr!==null)&&(El(),br&&(n=br,t=Tr,Tr=br=null,md(n),t)))for(n=0;n<t.length;n++)md(t[n])}}function Ds(t,n){var a=t.stateNode;if(a===null)return null;var o=a[nn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zc=!1;if(Ot)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){zc=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{zc=!1}var oa=null,Bc=null,Go=null;function _d(){if(Go)return Go;var t,n=Bc,a=n.length,o,c="value"in oa?oa.value:oa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return Go=c.slice(t,1<o?1-o:void 0)}function Vo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ko(){return!0}function vd(){return!1}function On(t){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ko:vd,this.isPropagationStopped=vd,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xo=On(Ga),Ns=b({},Ga,{view:0,detail:0}),R0=On(Ns),Fc,Ic,Ls,Wo=b({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ls&&(Ls&&t.type==="mousemove"?(Fc=t.screenX-Ls.screenX,Ic=t.screenY-Ls.screenY):Ic=Fc=0,Ls=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),xd=On(Wo),C0=b({},Wo,{dataTransfer:0}),w0=On(C0),D0=b({},Ns,{relatedTarget:0}),Hc=On(D0),U0=b({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),N0=On(U0),L0=b({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),O0=On(L0),P0=b({},Ga,{data:0}),Sd=On(P0),z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=F0[t])?!!n[t]:!1}function Gc(){return I0}var H0=b({},Ns,{key:function(t){if(t.key){var n=z0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?B0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G0=On(H0),V0=b({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=On(V0),k0=b({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),X0=On(k0),W0=b({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),q0=On(W0),Y0=b({},Wo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=On(Y0),Z0=b({},Ga,{newState:0,oldState:0}),K0=On(Z0),Q0=[9,13,27,32],Vc=Ot&&"CompositionEvent"in window,Os=null;Ot&&"documentMode"in document&&(Os=document.documentMode);var J0=Ot&&"TextEvent"in window&&!Os,Md=Ot&&(!Vc||Os&&8<Os&&11>=Os),Ed=" ",bd=!1;function Td(t,n){switch(t){case"keyup":return Q0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function $0(t,n){switch(t){case"compositionend":return Ad(n);case"keypress":return n.which!==32?null:(bd=!0,Ed);case"textInput":return t=n.data,t===Ed&&bd?null:t;default:return null}}function tv(t,n){if(Ar)return t==="compositionend"||!Vc&&Td(t,n)?(t=_d(),Go=Bc=oa=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Md&&n.locale!=="ko"?null:n.data;default:return null}}var ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ev[t.type]:n==="textarea"}function Cd(t,n,a,o){br?Tr?Tr.push(o):Tr=[o]:br=o,n=Cl(n,"onChange"),0<n.length&&(a=new Xo("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Ps=null,zs=null;function nv(t){tg(t,0)}function qo(t){var n=q(t);if(Nn(n))return t}function wd(t,n){if(t==="change")return n}var Dd=!1;if(Ot){var kc;if(Ot){var Xc="oninput"in document;if(!Xc){var Ud=document.createElement("div");Ud.setAttribute("oninput","return;"),Xc=typeof Ud.oninput=="function"}kc=Xc}else kc=!1;Dd=kc&&(!document.documentMode||9<document.documentMode)}function Nd(){Ps&&(Ps.detachEvent("onpropertychange",Ld),zs=Ps=null)}function Ld(t){if(t.propertyName==="value"&&qo(zs)){var n=[];Cd(n,zs,t,Oc(t)),gd(nv,n)}}function iv(t,n,a){t==="focusin"?(Nd(),Ps=n,zs=a,Ps.attachEvent("onpropertychange",Ld)):t==="focusout"&&Nd()}function av(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qo(zs)}function rv(t,n){if(t==="click")return qo(n)}function sv(t,n){if(t==="input"||t==="change")return qo(n)}function ov(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Gn=typeof Object.is=="function"?Object.is:ov;function Bs(t,n){if(Gn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ce.call(n,c)||!Gn(t[c],n[c]))return!1}return!0}function Od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pd(t,n){var a=Od(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Od(a)}}function zd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?zd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Bd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=oi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=oi(t.document)}return n}function Wc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function lv(t,n){var a=Bd(n);n=t.focusedElem;var o=t.selectionRange;if(a!==n&&n&&n.ownerDocument&&zd(n.ownerDocument.documentElement,n)){if(o!==null&&Wc(n)){if(t=o.start,a=o.end,a===void 0&&(a=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(a,n.value.length);else if(a=(t=n.ownerDocument||document)&&t.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(o.start,c);o=o.end===void 0?f:Math.min(o.end,c),!a.extend&&f>o&&(c=o,o=f,f=c),c=Pd(n,f);var S=Pd(n,o);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),a.removeAllRanges(),f>o?(a.addRange(t),a.extend(S.node,S.offset)):(t.setEnd(S.node,S.offset),a.addRange(t)))}}for(t=[],a=n;a=a.parentNode;)a.nodeType===1&&t.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)a=t[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var cv=Ot&&"documentMode"in document&&11>=document.documentMode,Rr=null,qc=null,Fs=null,Yc=!1;function Fd(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yc||Rr==null||Rr!==oi(o)||(o=Rr,"selectionStart"in o&&Wc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Fs&&Bs(Fs,o)||(Fs=o,o=Cl(qc,"onSelect"),0<o.length&&(n=new Xo("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Rr)))}function Va(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Cr={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},jc={},Id={};Ot&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function ka(t){if(jc[t])return jc[t];if(!Cr[t])return t;var n=Cr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Id)return jc[t]=n[a];return t}var Hd=ka("animationend"),Gd=ka("animationiteration"),Vd=ka("animationstart"),uv=ka("transitionrun"),fv=ka("transitionstart"),hv=ka("transitioncancel"),kd=ka("transitionend"),Xd=new Map,Wd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function li(t,n){Xd.set(t,n),Rt(n,[t])}var jn=[],wr=0,Zc=0;function Yo(){for(var t=wr,n=Zc=wr=0;n<t;){var a=jn[n];jn[n++]=null;var o=jn[n];jn[n++]=null;var c=jn[n];jn[n++]=null;var f=jn[n];if(jn[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&qd(a,c,f)}}function jo(t,n,a,o){jn[wr++]=t,jn[wr++]=n,jn[wr++]=a,jn[wr++]=o,Zc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Kc(t,n,a,o){return jo(t,n,a,o),Zo(t)}function la(t,n){return jo(t,null,null,n),Zo(t)}function qd(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;c&&n!==null&&t.tag===3&&(f=t.stateNode,c=31-Zt(a),f=f.hiddenUpdates,t=f[c],t===null?f[c]=[n]:t.push(n),n.lane=a|536870912)}function Zo(t){if(50<co)throw co=0,nf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Dr={},Yd=new WeakMap;function Zn(t,n){if(typeof t=="object"&&t!==null){var a=Yd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:rt(n)},Yd.set(t,n),n)}return{value:t,source:n,stack:rt(n)}}var Ur=[],Nr=0,Ko=null,Qo=0,Kn=[],Qn=0,Xa=null,Ui=1,Ni="";function Wa(t,n){Ur[Nr++]=Qo,Ur[Nr++]=Ko,Ko=t,Qo=n}function jd(t,n,a){Kn[Qn++]=Ui,Kn[Qn++]=Ni,Kn[Qn++]=Xa,Xa=t;var o=Ui;t=Ni;var c=32-Zt(o)-1;o&=~(1<<c),a+=1;var f=32-Zt(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Ui=1<<32-Zt(n)+c|a<<c|o,Ni=f+t}else Ui=1<<f|a<<c|o,Ni=t}function Qc(t){t.return!==null&&(Wa(t,1),jd(t,1,0))}function Jc(t){for(;t===Ko;)Ko=Ur[--Nr],Ur[Nr]=null,Qo=Ur[--Nr],Ur[Nr]=null;for(;t===Xa;)Xa=Kn[--Qn],Kn[Qn]=null,Ni=Kn[--Qn],Kn[Qn]=null,Ui=Kn[--Qn],Kn[Qn]=null}var Cn=null,gn=null,be=!1,ci=null,yi=!1,$c=Error(r(519));function qa(t){var n=Error(r(418,""));throw Gs(Zn(n,t)),$c}function Zd(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[en]=t,n[nn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<fo.length;a++)ve(fo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Rn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),_e(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Er(n,o.value,o.defaultValue,o.children),_e(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||ag(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=wl),n=!0):n=!1,n||qa(t)}function Kd(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 3:case 27:yi=!0;return;case 5:case 13:yi=!1;return;default:Cn=Cn.return}}function Is(t){if(t!==Cn)return!1;if(!be)return Kd(t),be=!0,!1;var n=!1,a;if((a=t.tag!==3&&t.tag!==27)&&((a=t.tag===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Sf(t.type,t.memoizedProps)),a=!a),a&&(n=!0),n&&gn&&qa(t),Kd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){gn=fi(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}gn=null}}else gn=Cn?fi(t.stateNode.nextSibling):null;return!0}function Hs(){gn=Cn=null,be=!1}function Gs(t){ci===null?ci=[t]:ci.push(t)}var Vs=Error(r(460)),Qd=Error(r(474)),tu={then:function(){}};function Jd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jo(){}function $d(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Jo,Jo),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Vs?Error(r(483)):t;default:if(typeof n.status=="string")n.then(Jo,Jo);else{if(t=Be,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===Vs?Error(r(483)):t}throw ks=n,Vs}}var ks=null;function tp(){if(ks===null)throw Error(r(459));var t=ks;return ks=null,t}var Lr=null,Xs=0;function $o(t){var n=Xs;return Xs+=1,Lr===null&&(Lr=[]),$d(Lr,t,n)}function Ws(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function tl(t,n){throw n.$$typeof===u?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function ep(t){var n=t._init;return n(t._payload)}function np(t){function n(Z,G){if(t){var tt=Z.deletions;tt===null?(Z.deletions=[G],Z.flags|=16):tt.push(G)}}function a(Z,G){if(!t)return null;for(;G!==null;)n(Z,G),G=G.sibling;return null}function o(Z){for(var G=new Map;Z!==null;)Z.key!==null?G.set(Z.key,Z):G.set(Z.index,Z),Z=Z.sibling;return G}function c(Z,G){return Z=Sa(Z,G),Z.index=0,Z.sibling=null,Z}function f(Z,G,tt){return Z.index=tt,t?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<G?(Z.flags|=33554434,G):tt):(Z.flags|=33554434,G)):(Z.flags|=1048576,G)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=33554434),Z}function T(Z,G,tt,gt){return G===null||G.tag!==6?(G=ju(tt,Z.mode,gt),G.return=Z,G):(G=c(G,tt),G.return=Z,G)}function L(Z,G,tt,gt){var Ht=tt.type;return Ht===m?ut(Z,G,tt.props.children,gt,tt.key):G!==null&&(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===P&&ep(Ht)===G.type)?(G=c(G,tt.props),Ws(G,tt),G.return=Z,G):(G=vl(tt.type,tt.key,tt.props,null,Z.mode,gt),Ws(G,tt),G.return=Z,G)}function k(Z,G,tt,gt){return G===null||G.tag!==4||G.stateNode.containerInfo!==tt.containerInfo||G.stateNode.implementation!==tt.implementation?(G=Zu(tt,Z.mode,gt),G.return=Z,G):(G=c(G,tt.children||[]),G.return=Z,G)}function ut(Z,G,tt,gt,Ht){return G===null||G.tag!==7?(G=nr(tt,Z.mode,gt,Ht),G.return=Z,G):(G=c(G,tt),G.return=Z,G)}function vt(Z,G,tt){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=ju(""+G,Z.mode,tt),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case h:return tt=vl(G.type,G.key,G.props,null,Z.mode,tt),Ws(tt,G),tt.return=Z,tt;case d:return G=Zu(G,Z.mode,tt),G.return=Z,G;case P:var gt=G._init;return G=gt(G._payload),vt(Z,G,tt)}if(bt(G)||I(G))return G=nr(G,Z.mode,tt,null),G.return=Z,G;if(typeof G.then=="function")return vt(Z,$o(G),tt);if(G.$$typeof===M)return vt(Z,ml(Z,G),tt);tl(Z,G)}return null}function it(Z,G,tt,gt){var Ht=G!==null?G.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Ht!==null?null:T(Z,G,""+tt,gt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case h:return tt.key===Ht?L(Z,G,tt,gt):null;case d:return tt.key===Ht?k(Z,G,tt,gt):null;case P:return Ht=tt._init,tt=Ht(tt._payload),it(Z,G,tt,gt)}if(bt(tt)||I(tt))return Ht!==null?null:ut(Z,G,tt,gt,null);if(typeof tt.then=="function")return it(Z,G,$o(tt),gt);if(tt.$$typeof===M)return it(Z,G,ml(Z,tt),gt);tl(Z,tt)}return null}function ct(Z,G,tt,gt,Ht){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get(tt)||null,T(G,Z,""+gt,Ht);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case h:return Z=Z.get(gt.key===null?tt:gt.key)||null,L(G,Z,gt,Ht);case d:return Z=Z.get(gt.key===null?tt:gt.key)||null,k(G,Z,gt,Ht);case P:var he=gt._init;return gt=he(gt._payload),ct(Z,G,tt,gt,Ht)}if(bt(gt)||I(gt))return Z=Z.get(tt)||null,ut(G,Z,gt,Ht,null);if(typeof gt.then=="function")return ct(Z,G,tt,$o(gt),Ht);if(gt.$$typeof===M)return ct(Z,G,tt,ml(G,gt),Ht);tl(G,gt)}return null}function kt(Z,G,tt,gt){for(var Ht=null,he=null,qt=G,Jt=G=0,hn=null;qt!==null&&Jt<tt.length;Jt++){qt.index>Jt?(hn=qt,qt=null):hn=qt.sibling;var Te=it(Z,qt,tt[Jt],gt);if(Te===null){qt===null&&(qt=hn);break}t&&qt&&Te.alternate===null&&n(Z,qt),G=f(Te,G,Jt),he===null?Ht=Te:he.sibling=Te,he=Te,qt=hn}if(Jt===tt.length)return a(Z,qt),be&&Wa(Z,Jt),Ht;if(qt===null){for(;Jt<tt.length;Jt++)qt=vt(Z,tt[Jt],gt),qt!==null&&(G=f(qt,G,Jt),he===null?Ht=qt:he.sibling=qt,he=qt);return be&&Wa(Z,Jt),Ht}for(qt=o(qt);Jt<tt.length;Jt++)hn=ct(qt,Z,Jt,tt[Jt],gt),hn!==null&&(t&&hn.alternate!==null&&qt.delete(hn.key===null?Jt:hn.key),G=f(hn,G,Jt),he===null?Ht=hn:he.sibling=hn,he=hn);return t&&qt.forEach(function(Ra){return n(Z,Ra)}),be&&Wa(Z,Jt),Ht}function ie(Z,G,tt,gt){if(tt==null)throw Error(r(151));for(var Ht=null,he=null,qt=G,Jt=G=0,hn=null,Te=tt.next();qt!==null&&!Te.done;Jt++,Te=tt.next()){qt.index>Jt?(hn=qt,qt=null):hn=qt.sibling;var Ra=it(Z,qt,Te.value,gt);if(Ra===null){qt===null&&(qt=hn);break}t&&qt&&Ra.alternate===null&&n(Z,qt),G=f(Ra,G,Jt),he===null?Ht=Ra:he.sibling=Ra,he=Ra,qt=hn}if(Te.done)return a(Z,qt),be&&Wa(Z,Jt),Ht;if(qt===null){for(;!Te.done;Jt++,Te=tt.next())Te=vt(Z,Te.value,gt),Te!==null&&(G=f(Te,G,Jt),he===null?Ht=Te:he.sibling=Te,he=Te);return be&&Wa(Z,Jt),Ht}for(qt=o(qt);!Te.done;Jt++,Te=tt.next())Te=ct(qt,Z,Jt,Te.value,gt),Te!==null&&(t&&Te.alternate!==null&&qt.delete(Te.key===null?Jt:Te.key),G=f(Te,G,Jt),he===null?Ht=Te:he.sibling=Te,he=Te);return t&&qt.forEach(function(Ax){return n(Z,Ax)}),be&&Wa(Z,Jt),Ht}function qe(Z,G,tt,gt){if(typeof tt=="object"&&tt!==null&&tt.type===m&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case h:t:{for(var Ht=tt.key;G!==null;){if(G.key===Ht){if(Ht=tt.type,Ht===m){if(G.tag===7){a(Z,G.sibling),gt=c(G,tt.props.children),gt.return=Z,Z=gt;break t}}else if(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===P&&ep(Ht)===G.type){a(Z,G.sibling),gt=c(G,tt.props),Ws(gt,tt),gt.return=Z,Z=gt;break t}a(Z,G);break}else n(Z,G);G=G.sibling}tt.type===m?(gt=nr(tt.props.children,Z.mode,gt,tt.key),gt.return=Z,Z=gt):(gt=vl(tt.type,tt.key,tt.props,null,Z.mode,gt),Ws(gt,tt),gt.return=Z,Z=gt)}return S(Z);case d:t:{for(Ht=tt.key;G!==null;){if(G.key===Ht)if(G.tag===4&&G.stateNode.containerInfo===tt.containerInfo&&G.stateNode.implementation===tt.implementation){a(Z,G.sibling),gt=c(G,tt.children||[]),gt.return=Z,Z=gt;break t}else{a(Z,G);break}else n(Z,G);G=G.sibling}gt=Zu(tt,Z.mode,gt),gt.return=Z,Z=gt}return S(Z);case P:return Ht=tt._init,tt=Ht(tt._payload),qe(Z,G,tt,gt)}if(bt(tt))return kt(Z,G,tt,gt);if(I(tt)){if(Ht=I(tt),typeof Ht!="function")throw Error(r(150));return tt=Ht.call(tt),ie(Z,G,tt,gt)}if(typeof tt.then=="function")return qe(Z,G,$o(tt),gt);if(tt.$$typeof===M)return qe(Z,G,ml(Z,tt),gt);tl(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,G!==null&&G.tag===6?(a(Z,G.sibling),gt=c(G,tt),gt.return=Z,Z=gt):(a(Z,G),gt=ju(tt,Z.mode,gt),gt.return=Z,Z=gt),S(Z)):a(Z,G)}return function(Z,G,tt,gt){try{Xs=0;var Ht=qe(Z,G,tt,gt);return Lr=null,Ht}catch(qt){if(qt===Vs)throw qt;var he=ei(29,qt,null,Z.mode);return he.lanes=gt,he.return=Z,he}finally{}}}var Ya=np(!0),ip=np(!1),Or=Ct(null),el=Ct(0);function ap(t,n){t=ki,zt(el,t),zt(Or,n),ki=t|n.baseLanes}function eu(){zt(el,ki),zt(Or,Or.current)}function nu(){ki=el.current,Qt(Or),Qt(el)}var Jn=Ct(null),Mi=null;function ca(t){var n=t.alternate;zt(rn,rn.current&1),zt(Jn,t),Mi===null&&(n===null||Or.current!==null||n.memoizedState!==null)&&(Mi=t)}function rp(t){if(t.tag===22){if(zt(rn,rn.current),zt(Jn,t),Mi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Mi=t)}}else ua()}function ua(){zt(rn,rn.current),zt(Jn,Jn.current)}function Li(t){Qt(Jn),Mi===t&&(Mi=null),Qt(rn)}var rn=Ct(0);function nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var dv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},pv=s.unstable_scheduleCallback,mv=s.unstable_NormalPriority,sn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function iu(){return{controller:new dv,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&pv(mv,function(){t.controller.abort()})}var Ys=null,au=0,Pr=0,zr=null;function gv(t,n){if(Ys===null){var a=Ys=[];au=0,Pr=ff(),zr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return au++,n.then(sp,sp),n}function sp(){if(--au===0&&Ys!==null){zr!==null&&(zr.status="fulfilled");var t=Ys;Ys=null,Pr=0,zr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function _v(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var op=C.S;C.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&gv(t,n),op!==null&&op(t,n)};var ja=Ct(null);function ru(){var t=ja.current;return t!==null?t:Be.pooledCache}function il(t,n){n===null?zt(ja,ja.current):zt(ja,n.pool)}function lp(){var t=ru();return t===null?null:{parent:sn._currentValue,pool:t}}var fa=0,ue=null,Ne=null,Ke=null,al=!1,Br=!1,Za=!1,rl=0,js=0,Fr=null,vv=0;function Ye(){throw Error(r(321))}function su(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Gn(t[a],n[a]))return!1;return!0}function ou(t,n,a,o,c,f){return fa=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=t===null||t.memoizedState===null?Ka:ha,Za=!1,f=a(o,c),Za=!1,Br&&(f=up(n,a,o,c)),cp(t),f}function cp(t){C.H=Ei;var n=Ne!==null&&Ne.next!==null;if(fa=0,Ke=Ne=ue=null,al=!1,js=0,Fr=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&pl(t)&&(un=!0))}function up(t,n,a,o){ue=t;var c=0;do{if(Br&&(Fr=null),js=0,Br=!1,25<=c)throw Error(r(301));if(c+=1,Ke=Ne=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}C.H=Qa,f=n(a,o)}while(Br);return f}function xv(){var t=C.H,n=t.useState()[0];return n=typeof n.then=="function"?Zs(n):n,t=t.useState()[0],(Ne!==null?Ne.memoizedState:null)!==t&&(ue.flags|=1024),n}function lu(){var t=rl!==0;return rl=0,t}function cu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function uu(t){if(al){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}al=!1}fa=0,Ke=Ne=ue=null,Br=!1,js=rl=0,Fr=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ue.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Qe(){if(Ne===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var n=Ke===null?ue.memoizedState:Ke.next;if(n!==null)Ke=n,Ne=t;else{if(t===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ke===null?ue.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}var sl;sl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Zs(t){var n=js;return js+=1,Fr===null&&(Fr=[]),t=$d(Fr,t,n),n=ue,(Ke===null?n.memoizedState:Ke.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?Ka:ha),t}function ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zs(t);if(t.$$typeof===M)return Sn(t)}throw Error(r(438,String(t)))}function fu(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=sl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=U;return n.index++,a}function Oi(t,n){return typeof n=="function"?n(t):n}function ll(t){var n=Qe();return hu(n,Ne,t)}function hu(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var T=S=null,L=null,k=n,ut=!1;do{var vt=k.lane&-536870913;if(vt!==k.lane?(Se&vt)===vt:(fa&vt)===vt){var it=k.revertLane;if(it===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),vt===Pr&&(ut=!0);else if((fa&it)===it){k=k.next,it===Pr&&(ut=!0);continue}else vt={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},L===null?(T=L=vt,S=f):L=L.next=vt,ue.lanes|=it,ya|=it;vt=k.action,Za&&a(f,vt),f=k.hasEagerState?k.eagerState:a(f,vt)}else it={lane:vt,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},L===null?(T=L=it,S=f):L=L.next=it,ue.lanes|=vt,ya|=vt;k=k.next}while(k!==null&&k!==n);if(L===null?S=f:L.next=T,!Gn(f,t.memoizedState)&&(un=!0,ut&&(a=zr,a!==null)))throw a;t.memoizedState=f,t.baseState=S,t.baseQueue=L,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function du(t){var n=Qe(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=t(f,S.action),S=S.next;while(S!==c);Gn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function fp(t,n,a){var o=ue,c=Qe(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Gn((Ne||c).memoizedState,a);if(S&&(c.memoizedState=a,un=!0),c=c.queue,gu(pp.bind(null,o,c,t),[t]),c.getSnapshot!==n||S||Ke!==null&&Ke.memoizedState.tag&1){if(o.flags|=2048,Ir(9,dp.bind(null,o,c,a,n),{destroy:void 0},null),Be===null)throw Error(r(349));f||fa&60||hp(o,n,a)}return a}function hp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=sl(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function dp(t,n,a,o){n.value=a,n.getSnapshot=o,mp(n)&&gp(t)}function pp(t,n,a){return a(function(){mp(n)&&gp(t)})}function mp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Gn(t,a)}catch{return!0}}function gp(t){var n=la(t,2);n!==null&&wn(n,t,2)}function pu(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),Za){re(!0);try{a()}finally{re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:t},n}function _p(t,n,a,o){return t.baseState=a,hu(t,Ne,typeof o=="function"?o:Oi)}function Sv(t,n,a,o,c){if(fl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};C.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,vp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function vp(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=C.T,S={};C.T=S;try{var T=a(c,o),L=C.S;L!==null&&L(S,T),xp(t,n,T)}catch(k){mu(t,n,k)}finally{C.T=f}}else try{f=a(c,o),xp(t,n,f)}catch(k){mu(t,n,k)}}function xp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Sp(t,n,o)},function(o){return mu(t,n,o)}):Sp(t,n,a)}function Sp(t,n,a){n.status="fulfilled",n.value=a,yp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,vp(t,a)))}function mu(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,yp(n),n=n.next;while(n!==o)}t.action=null}function yp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Mp(t,n){return n}function Ep(t,n){if(be){var a=Be.formState;if(a!==null){t:{var o=ue;if(be){if(gn){e:{for(var c=gn,f=yi;c.nodeType!==8;){if(!f){c=null;break e}if(c=fi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){gn=fi(c.nextSibling),o=c.data==="F!";break t}}qa(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mp,lastRenderedState:n},a.queue=o,a=Gp.bind(null,ue,o),o.dispatch=a,o=pu(!1),f=yu.bind(null,ue,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=Sv.bind(null,ue,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function bp(t){var n=Qe();return Tp(n,Ne,t)}function Tp(t,n,a){n=hu(t,n,Mp)[0],t=ll(Oi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Zs(n):n;var o=Qe(),c=o.queue,f=c.dispatch;return a!==o.memoizedState&&(ue.flags|=2048,Ir(9,yv.bind(null,c,a),{destroy:void 0},null)),[n,f,t]}function yv(t,n){t.action=n}function Ap(t){var n=Qe(),a=Ne;if(a!==null)return Tp(n,a,t);Qe(),n=n.memoizedState,a=Qe();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Ir(t,n,a,o){return t={tag:t,create:n,inst:a,deps:o,next:null},n=ue.updateQueue,n===null&&(n=sl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Rp(){return Qe().memoizedState}function cl(t,n,a,o){var c=Pn();ue.flags|=t,c.memoizedState=Ir(1|n,a,{destroy:void 0},o===void 0?null:o)}function ul(t,n,a,o){var c=Qe();o=o===void 0?null:o;var f=c.memoizedState.inst;Ne!==null&&o!==null&&su(o,Ne.memoizedState.deps)?c.memoizedState=Ir(n,a,f,o):(ue.flags|=t,c.memoizedState=Ir(1|n,a,f,o))}function Cp(t,n){cl(8390656,8,t,n)}function gu(t,n){ul(2048,8,t,n)}function wp(t,n){return ul(4,2,t,n)}function Dp(t,n){return ul(4,4,t,n)}function Up(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Np(t,n,a){a=a!=null?a.concat([t]):null,ul(4,4,Up.bind(null,n,t),a)}function _u(){}function Lp(t,n){var a=Qe();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&su(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Op(t,n){var a=Qe();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&su(n,o[1]))return o[0];if(o=t(),Za){re(!0);try{t()}finally{re(!1)}}return a.memoizedState=[o,n],o}function vu(t,n,a){return a===void 0||fa&1073741824?t.memoizedState=n:(t.memoizedState=a,t=zm(),ue.lanes|=t,ya|=t,a)}function Pp(t,n,a,o){return Gn(a,n)?a:Or.current!==null?(t=vu(t,a,o),Gn(t,n)||(un=!0),t):fa&42?(t=zm(),ue.lanes|=t,ya|=t,n):(un=!0,t.memoizedState=a)}function zp(t,n,a,o,c){var f=X.p;X.p=f!==0&&8>f?f:8;var S=C.T,T={};C.T=T,yu(t,!1,n,a);try{var L=c(),k=C.S;if(k!==null&&k(T,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var ut=_v(L,o);Ks(t,n,ut,Wn(t))}else Ks(t,n,o,Wn(t))}catch(vt){Ks(t,n,{then:function(){},status:"rejected",reason:vt},Wn())}finally{X.p=f,C.T=S}}function Mv(){}function xu(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=Bp(t).queue;zp(t,c,n,mt,a===null?Mv:function(){return Fp(t),a(o)})}function Bp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:mt,baseState:mt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:mt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Fp(t){var n=Bp(t).next.queue;Ks(t,n,{},Wn())}function Su(){return Sn(_o)}function Ip(){return Qe().memoizedState}function Hp(){return Qe().memoizedState}function Ev(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wn();t=ma(a);var o=ga(n,t,a);o!==null&&(wn(o,n,a),$s(o,n,a)),n={cache:iu()},t.payload=n;return}n=n.return}}function bv(t,n,a){var o=Wn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},fl(t)?Vp(n,a):(a=Kc(t,n,a,o),a!==null&&(wn(a,t,o),kp(a,n,o)))}function Gp(t,n,a){var o=Wn();Ks(t,n,a,o)}function Ks(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(fl(t))Vp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,Gn(T,S))return jo(t,n,c,0),Be===null&&Yo(),!1}catch{}finally{}if(a=Kc(t,n,c,o),a!==null)return wn(a,t,o),kp(a,n,o),!0}return!1}function yu(t,n,a,o){if(o={lane:2,revertLane:ff(),action:o,hasEagerState:!1,eagerState:null,next:null},fl(t)){if(n)throw Error(r(479))}else n=Kc(t,a,o,2),n!==null&&wn(n,t,2)}function fl(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function Vp(t,n){Br=al=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function kp(t,n,a){if(a&4194176){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Si(t,a)}}var Ei={readContext:Sn,use:ol,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye};Ei.useCacheRefresh=Ye,Ei.useMemoCache=Ye,Ei.useHostTransitionStatus=Ye,Ei.useFormState=Ye,Ei.useActionState=Ye,Ei.useOptimistic=Ye;var Ka={readContext:Sn,use:ol,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:Cp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,cl(4194308,4,Up.bind(null,n,t),a)},useLayoutEffect:function(t,n){return cl(4194308,4,t,n)},useInsertionEffect:function(t,n){cl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(Za){re(!0);try{t()}finally{re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(Za){re(!0);try{a(n)}finally{re(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=bv.bind(null,ue,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=pu(t);var n=t.queue,a=Gp.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:_u,useDeferredValue:function(t,n){var a=Pn();return vu(a,t,n)},useTransition:function(){var t=pu(!1);return t=zp.bind(null,ue,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ue,c=Pn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Be===null)throw Error(r(349));Se&60||hp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Cp(pp.bind(null,o,f,t),[t]),o.flags|=2048,Ir(9,dp.bind(null,o,f,a,n),{destroy:void 0},null),a},useId:function(){var t=Pn(),n=Be.identifierPrefix;if(be){var a=Ni,o=Ui;a=(o&~(1<<32-Zt(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=rl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=vv++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return Pn().memoizedState=Ev.bind(null,ue)}};Ka.useMemoCache=fu,Ka.useHostTransitionStatus=Su,Ka.useFormState=Ep,Ka.useActionState=Ep,Ka.useOptimistic=function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yu.bind(null,ue,!0,a),a.dispatch=n,[t,n]};var ha={readContext:Sn,use:ol,useCallback:Lp,useContext:Sn,useEffect:gu,useImperativeHandle:Np,useInsertionEffect:wp,useLayoutEffect:Dp,useMemo:Op,useReducer:ll,useRef:Rp,useState:function(){return ll(Oi)},useDebugValue:_u,useDeferredValue:function(t,n){var a=Qe();return Pp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=ll(Oi)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Zs(t),n]},useSyncExternalStore:fp,useId:Ip};ha.useCacheRefresh=Hp,ha.useMemoCache=fu,ha.useHostTransitionStatus=Su,ha.useFormState=bp,ha.useActionState=bp,ha.useOptimistic=function(t,n){var a=Qe();return _p(a,Ne,t,n)};var Qa={readContext:Sn,use:ol,useCallback:Lp,useContext:Sn,useEffect:gu,useImperativeHandle:Np,useInsertionEffect:wp,useLayoutEffect:Dp,useMemo:Op,useReducer:du,useRef:Rp,useState:function(){return du(Oi)},useDebugValue:_u,useDeferredValue:function(t,n){var a=Qe();return Ne===null?vu(a,t,n):Pp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=du(Oi)[0],n=Qe().memoizedState;return[typeof t=="boolean"?t:Zs(t),n]},useSyncExternalStore:fp,useId:Ip};Qa.useCacheRefresh=Hp,Qa.useMemoCache=fu,Qa.useHostTransitionStatus=Su,Qa.useFormState=Ap,Qa.useActionState=Ap,Qa.useOptimistic=function(t,n){var a=Qe();return Ne!==null?_p(a,Ne,t,n):(a.baseState=t,[t,a.queue.dispatch])};function Mu(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:b({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Eu={isMounted:function(t){return(t=t._reactInternals)?Y(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Wn(),c=ma(o);c.payload=n,a!=null&&(c.callback=a),n=ga(t,c,o),n!==null&&(wn(n,t,o),$s(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Wn(),c=ma(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ga(t,c,o),n!==null&&(wn(n,t,o),$s(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Wn(),o=ma(a);o.tag=2,n!=null&&(o.callback=n),n=ga(t,o,a),n!==null&&(wn(n,t,a),$s(n,t,a))}};function Xp(t,n,a,o,c,f,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Bs(a,o)||!Bs(c,f):!0}function Wp(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Eu.enqueueReplaceState(n,n.state,null)}function Ja(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=b({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function qp(t){hl(t)}function Yp(t){console.error(t)}function jp(t){hl(t)}function dl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Zp(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function bu(t,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){dl(t,n)},a}function Kp(t){return t=ma(t),t.tag=3,t}function Qp(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Zp(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Zp(n,a,o),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Tv(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Js(n,a,c,!0),a=Jn.current,a!==null){switch(a.tag){case 13:return Mi===null?sf():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===tu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),lf(t,o,c)),!1;case 22:return a.flags|=65536,o===tu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),lf(t,o,c)),!1}throw Error(r(435,a.tag))}return lf(t,o,c),sf(),!1}if(be)return n=Jn.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==$c&&(t=Error(r(422),{cause:o}),Gs(Zn(t,a)))):(o!==$c&&(n=Error(r(423),{cause:o}),Gs(Zn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=Zn(o,a),c=bu(t.stateNode,o,c),Iu(t,c),We!==4&&(We=2)),!1;var f=Error(r(520),{cause:o});if(f=Zn(f,a),oo===null?oo=[f]:oo.push(f),We!==4&&(We=2),n===null)return!0;o=Zn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=bu(a.stateNode,o,t),Iu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Kp(c),Qp(c,t,a,o),Iu(a,c),!1}a=a.return}while(a!==null);return!1}var Jp=Error(r(461)),un=!1;function _n(t,n,a,o){n.child=t===null?ip(n,null,a,o):Ya(n,t.child,a,o)}function $p(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return tr(n),o=ou(t,n,a,S,f,c),T=lu(),t!==null&&!un?(cu(t,n,c),Pi(t,n,c)):(be&&T&&Qc(n),n.flags|=1,_n(t,n,o,c),n.child)}function tm(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!Yu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,em(t,n,f,o,c)):(t=vl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Lu(t,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Bs,a(S,o)&&t.ref===n.ref)return Pi(t,n,c)}return n.flags|=1,t=Sa(f,o),t.ref=n.ref,t.return=n,n.child=t}function em(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Bs(f,o)&&t.ref===n.ref)if(un=!1,n.pendingProps=o=f,Lu(t,c))t.flags&131072&&(un=!0);else return n.lanes=t.lanes,Pi(t,n,c)}return Tu(t,n,a,o,c)}function nm(t,n,a){var o=n.pendingProps,c=o.children,f=(n.stateNode._pendingVisibility&2)!==0,S=t!==null?t.memoizedState:null;if(Qs(t,n),o.mode==="hidden"||f){if(n.flags&128){if(o=S!==null?S.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return im(t,n,o,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&il(n,S!==null?S.cachePool:null),S!==null?ap(n,S):eu(),rp(n);else return n.lanes=n.childLanes=536870912,im(t,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(il(n,S.cachePool),ap(n,S),ua(),n.memoizedState=null):(t!==null&&il(n,null),eu(),ua());return _n(t,n,c,a),n.child}function im(t,n,a,o){var c=ru();return c=c===null?null:{parent:sn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&il(n,null),eu(),rp(n),t!==null&&Js(t,n,o,!0),null}function Qs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=2097664)}}function Tu(t,n,a,o,c){return tr(n),a=ou(t,n,a,o,void 0,c),o=lu(),t!==null&&!un?(cu(t,n,c),Pi(t,n,c)):(be&&o&&Qc(n),n.flags|=1,_n(t,n,a,c),n.child)}function am(t,n,a,o,c,f){return tr(n),n.updateQueue=null,a=up(n,o,a,c),cp(t),o=lu(),t!==null&&!un?(cu(t,n,f),Pi(t,n,f)):(be&&o&&Qc(n),n.flags|=1,_n(t,n,a,f),n.child)}function rm(t,n,a,o,c){if(tr(n),n.stateNode===null){var f=Dr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Sn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Eu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Bu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Sn(S):Dr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Mu(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Eu.enqueueReplaceState(f,f.state,null),eo(n,o,f,c),to(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,L=Ja(a,T);f.props=L;var k=f.context,ut=a.contextType;S=Dr,typeof ut=="object"&&ut!==null&&(S=Sn(ut));var vt=a.getDerivedStateFromProps;ut=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||k!==S)&&Wp(n,f,o,S),pa=!1;var it=n.memoizedState;f.state=it,eo(n,o,f,c),to(),k=n.memoizedState,T||it!==k||pa?(typeof vt=="function"&&(Mu(n,a,vt,o),k=n.memoizedState),(L=pa||Xp(n,a,L,o,it,k,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=k),f.props=o,f.state=k,f.context=S,o=L):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Fu(t,n),S=n.memoizedProps,ut=Ja(a,S),f.props=ut,vt=n.pendingProps,it=f.context,k=a.contextType,L=Dr,typeof k=="object"&&k!==null&&(L=Sn(k)),T=a.getDerivedStateFromProps,(k=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==vt||it!==L)&&Wp(n,f,o,L),pa=!1,it=n.memoizedState,f.state=it,eo(n,o,f,c),to();var ct=n.memoizedState;S!==vt||it!==ct||pa||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof T=="function"&&(Mu(n,a,T,o),ct=n.memoizedState),(ut=pa||Xp(n,a,ut,o,it,ct,L)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(k||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ct,L),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ct,L)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),f.props=o,f.state=ct,f.context=L,o=ut):(typeof f.componentDidUpdate!="function"||S===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Qs(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ya(n,t.child,null,c),n.child=Ya(n,null,a,c)):_n(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Pi(t,n,c),t}function sm(t,n,a,o){return Hs(),n.flags|=256,_n(t,n,a,o),n.child}var Au={dehydrated:null,treeContext:null,retryLane:0};function Ru(t){return{baseLanes:t,cachePool:lp()}}function Cu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ni),t}function om(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?ca(n):ua(),be){var T=gn,L;if(L=T){t:{for(L=T,T=yi;L.nodeType!==8;){if(!T){T=null;break t}if(L=fi(L.nextSibling),L===null){T=null;break t}}T=L}T!==null?(n.memoizedState={dehydrated:T,treeContext:Xa!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912},L=ei(18,null,null,0),L.stateNode=T,L.return=n,n.child=L,Cn=n,gn=null,L=!0):L=!1}L||qa(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?n.lanes=16:n.lanes=536870912,null;Li(n)}return T=o.children,o=o.fallback,c?(ua(),c=n.mode,T=Du({mode:"hidden",children:T},c),o=nr(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=Ru(a),c.childLanes=Cu(t,S,a),n.memoizedState=Au,o):(ca(n),wu(n,T))}if(L=t.memoizedState,L!==null&&(T=L.dehydrated,T!==null)){if(f)n.flags&256?(ca(n),n.flags&=-257,n=Uu(t,n,a)):n.memoizedState!==null?(ua(),n.child=t.child,n.flags|=128,n=null):(ua(),c=o.fallback,T=n.mode,o=Du({mode:"visible",children:o.children},T),c=nr(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Ya(n,t.child,null,a),o=n.child,o.memoizedState=Ru(a),o.childLanes=Cu(t,S,a),n.memoizedState=Au,n=c);else if(ca(n),T.data==="$!"){if(S=T.nextSibling&&T.nextSibling.dataset,S)var k=S.dgst;S=k,o=Error(r(419)),o.stack="",o.digest=S,Gs({value:o,source:null,stack:null}),n=Uu(t,n,a)}else if(un||Js(t,n,a,!1),S=(a&t.childLanes)!==0,un||S){if(S=Be,S!==null){if(o=a&-a,o&42)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=o&(S.suspendedLanes|a)?0:o,o!==0&&o!==L.retryLane)throw L.retryLane=o,la(t,o),wn(S,t,o),Jp}T.data==="$?"||sf(),n=Uu(t,n,a)}else T.data==="$?"?(n.flags|=128,n.child=t.child,n=Hv.bind(null,t),T._reactRetry=n,n=null):(t=L.treeContext,gn=fi(T.nextSibling),Cn=n,be=!0,ci=null,yi=!1,t!==null&&(Kn[Qn++]=Ui,Kn[Qn++]=Ni,Kn[Qn++]=Xa,Ui=t.id,Ni=t.overflow,Xa=n),n=wu(n,o.children),n.flags|=4096);return n}return c?(ua(),c=o.fallback,T=n.mode,L=t.child,k=L.sibling,o=Sa(L,{mode:"hidden",children:o.children}),o.subtreeFlags=L.subtreeFlags&31457280,k!==null?c=Sa(k,c):(c=nr(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=t.child.memoizedState,T===null?T=Ru(a):(L=T.cachePool,L!==null?(k=sn._currentValue,L=L.parent!==k?{parent:k,pool:k}:L):L=lp(),T={baseLanes:T.baseLanes|a,cachePool:L}),c.memoizedState=T,c.childLanes=Cu(t,S,a),n.memoizedState=Au,o):(ca(n),a=t.child,t=a.sibling,a=Sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function wu(t,n){return n=Du({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Du(t,n){return Lm(t,n,0,null)}function Uu(t,n,a){return Ya(n,t.child,null,a),t=wu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function lm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Pu(t.return,n,a)}function Nu(t,n,a,o,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function cm(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(_n(t,n,o.children,a),o=rn.current,o&2)o=o&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lm(t,a,n);else if(t.tag===19)lm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(zt(rn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&nl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Nu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&nl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Nu(n,!0,a,null,f);break;case"together":Nu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Pi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,!(a&n.childLanes))if(t!==null){if(Js(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Sa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Sa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Lu(t,n){return t.lanes&n?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function Av(t,n,a){switch(n.tag){case 3:pn(n,n.stateNode.containerInfo),da(n,sn,t.memoizedState.cache),Hs();break;case 27:case 5:fe(n);break;case 4:pn(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ca(n),n.flags|=128,null):a&n.child.childLanes?om(t,n,a):(ca(n),t=Pi(t,n,a),t!==null?t.sibling:null);ca(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Js(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return cm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),zt(rn,rn.current),o)break;return null;case 22:case 23:return n.lanes=0,nm(t,n,a);case 24:da(n,sn,t.memoizedState.cache)}return Pi(t,n,a)}function um(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Lu(t,a)&&!(n.flags&128))return un=!1,Av(t,n,a);un=!!(t.flags&131072)}else un=!1,be&&n.flags&1048576&&jd(n,Qo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")Yu(o)?(t=Ja(o,t),n.tag=1,n=rm(null,n,o,t,a)):(n.tag=0,n=Tu(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===R){n.tag=11,n=$p(null,n,o,t,a);break t}else if(c===_){n.tag=14,n=tm(null,n,o,t,a);break t}}throw n=Q(o)||o,Error(r(306,n,""))}}return n;case 0:return Tu(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Ja(o,n.pendingProps),rm(t,n,o,c,a);case 3:t:{if(pn(n,n.stateNode.containerInfo),t===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,o=c.element,Fu(t,n),eo(n,f,null,a);var S=n.memoizedState;if(f=S.cache,da(n,sn,f),f!==c.cache&&zu(n,[sn],a,!0),to(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=sm(t,n,f,a);break t}else if(f!==o){o=Zn(Error(r(424)),n),Gs(o),n=sm(t,n,f,a);break t}else for(gn=fi(n.stateNode.containerInfo.firstChild),Cn=n,be=!0,ci=null,yi=!0,a=ip(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),f===o){n=Pi(t,n,a);break t}_n(t,n,f,a)}n=n.child}return n;case 26:return Qs(t,n),t===null?(a=dg(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,o=Dl(ae.current).createElement(a),o[en]=n,o[nn]=t,vn(o,a,t),$(o),n.stateNode=o):n.memoizedState=dg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return fe(n),t===null&&be&&(o=n.stateNode=ug(n.type,n.pendingProps,ae.current),Cn=n,yi=!0,gn=fi(o.firstChild)),o=n.pendingProps.children,t!==null||be?_n(t,n,o,a):n.child=Ya(n,null,o,a),Qs(t,n),n.child;case 5:return t===null&&be&&((c=o=gn)&&(o=nx(o,n.type,n.pendingProps,yi),o!==null?(n.stateNode=o,Cn=n,gn=fi(o.firstChild),yi=!1,c=!0):c=!1),c||qa(n)),fe(n),c=n.type,f=n.pendingProps,S=t!==null?t.memoizedProps:null,o=f.children,Sf(c,f)?o=null:S!==null&&Sf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=ou(t,n,xv,null,null,a),_o._currentValue=c),Qs(t,n),_n(t,n,o,a),n.child;case 6:return t===null&&be&&((t=a=gn)&&(a=ix(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Cn=n,gn=null,t=!0):t=!1),t||qa(n)),null;case 13:return om(t,n,a);case 4:return pn(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ya(n,null,o,a):_n(t,n,o,a),n.child;case 11:return $p(t,n,n.type,n.pendingProps,a);case 7:return _n(t,n,n.pendingProps,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,da(n,n.type,o.value),_n(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,tr(n),c=Sn(c),o=o(c),n.flags|=1,_n(t,n,o,a),n.child;case 14:return tm(t,n,n.type,n.pendingProps,a);case 15:return em(t,n,n.type,n.pendingProps,a);case 19:return cm(t,n,a);case 22:return nm(t,n,a);case 24:return tr(n),o=Sn(sn),t===null?(c=ru(),c===null&&(c=Be,f=iu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Bu(n),da(n,sn,c)):(t.lanes&a&&(Fu(t,n),eo(n,null,null,a),to()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),da(n,sn,o)):(o=f.cache,da(n,sn,o),o!==c.cache&&zu(n,[sn],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Ou=Ct(null),$a=null,zi=null;function da(t,n,a){zt(Ou,n._currentValue),n._currentValue=a}function Bi(t){t._currentValue=Ou.current,Qt(Ou)}function Pu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function zu(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var L=0;L<n.length;L++)if(T.context===n[L]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Pu(f.return,a,t),o||(S=null);break t}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Pu(S,a,t),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===t){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Js(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;Gn(c.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(c===B.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(_o):t=[_o])}c=c.return}t!==null&&zu(n,t,a,o),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!Gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function tr(t){$a=t,zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return fm($a,t)}function ml(t,n){return $a===null&&tr(t),fm(t,n)}function fm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(t===null)throw Error(r(308));zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else zi=zi.next=n;return a}var pa=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ga(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,Ve&2){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Zo(t),qd(t,null,a),n}return jo(t,o,n,a),Zo(t)}function $s(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Si(t,a)}}function Iu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Hu=!1;function to(){if(Hu){var t=zr;if(t!==null)throw t}}function eo(t,n,a,o){Hu=!1;var c=t.updateQueue;pa=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var L=T,k=L.next;L.next=null,S===null?f=k:S.next=k,S=L;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==S&&(T===null?ut.firstBaseUpdate=k:T.next=k,ut.lastBaseUpdate=L))}if(f!==null){var vt=c.baseState;S=0,ut=k=L=null,T=f;do{var it=T.lane&-536870913,ct=it!==T.lane;if(ct?(Se&it)===it:(o&it)===it){it!==0&&it===Pr&&(Hu=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var kt=t,ie=T;it=n;var qe=a;switch(ie.tag){case 1:if(kt=ie.payload,typeof kt=="function"){vt=kt.call(qe,vt,it);break t}vt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ie.payload,it=typeof kt=="function"?kt.call(qe,vt,it):kt,it==null)break t;vt=b({},vt,it);break t;case 2:pa=!0}}it=T.callback,it!==null&&(t.flags|=64,ct&&(t.flags|=8192),ct=c.callbacks,ct===null?c.callbacks=[it]:ct.push(it))}else ct={lane:it,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(k=ut=ct,L=vt):ut=ut.next=ct,S|=it;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ct=T,T=ct.next,ct.next=null,c.lastBaseUpdate=ct,c.shared.pending=null}}while(!0);ut===null&&(L=vt),c.baseState=L,c.firstBaseUpdate=k,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),ya|=S,t.lanes=S,t.memoizedState=vt}}function hm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function dm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)hm(a[t],n)}function no(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(T){Pe(n,n.return,T)}}function _a(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var L=a;try{T()}catch(k){Pe(c,L,k)}}}o=o.next}while(o!==f)}}catch(k){Pe(n,n.return,k)}}function pm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{dm(n,a)}catch(o){Pe(t,t.return,o)}}}function mm(t,n,a){a.props=Ja(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Pe(t,n,o)}}function er(t,n){try{var a=t.ref;if(a!==null){var o=t.stateNode;switch(t.tag){case 26:case 27:case 5:var c=o;break;default:c=o}typeof a=="function"?t.refCleanup=a(c):a.current=c}}catch(f){Pe(t,n,f)}}function Vn(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function gm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function _m(t,n,a){try{var o=t.stateNode;Qv(o,t.type,a,n),o[nn]=n}catch(c){Pe(t,t.return,c)}}function vm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Gu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=wl));else if(o!==4&&o!==27&&(t=t.child,t!==null))for(Vu(t,n,a),t=t.sibling;t!==null;)Vu(t,n,a),t=t.sibling}function gl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&o!==27&&(t=t.child,t!==null))for(gl(t,n,a),t=t.sibling;t!==null;)gl(t,n,a),t=t.sibling}var Fi=!1,Xe=!1,ku=!1,xm=typeof WeakSet=="function"?WeakSet:Set,fn=null,Sm=!1;function Rv(t,n){if(t=t.containerInfo,vf=zl,t=Bd(t),Wc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,T=-1,L=-1,k=0,ut=0,vt=t,it=null;e:for(;;){for(var ct;vt!==a||c!==0&&vt.nodeType!==3||(T=S+c),vt!==f||o!==0&&vt.nodeType!==3||(L=S+o),vt.nodeType===3&&(S+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)it=vt,vt=ct;for(;;){if(vt===t)break e;if(it===a&&++k===c&&(T=S),it===f&&++ut===o&&(L=S),(ct=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=ct}a=T===-1||L===-1?null:{start:T,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(xf={focusedElem:t,selectionRange:a},zl=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var kt=Ja(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(kt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ie){Pe(a,a.return,ie)}}break;case 3:if(t&1024){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Ef(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ef(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}return kt=Sm,Sm=!1,kt}function ym(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Hi(t,a),o&4&&no(5,a);break;case 1:if(Hi(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(T){Pe(a,a.return,T)}else{var c=Ja(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(T){Pe(a,a.return,T)}}o&64&&pm(a),o&512&&er(a,a.return);break;case 3:if(Hi(t,a),o&64&&(o=a.updateQueue,o!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{dm(o,t)}catch(T){Pe(a,a.return,T)}}break;case 26:Hi(t,a),o&512&&er(a,a.return);break;case 27:case 5:Hi(t,a),n===null&&o&4&&gm(a),o&512&&er(a,a.return);break;case 12:Hi(t,a);break;case 13:Hi(t,a),o&4&&bm(t,a);break;case 22:if(c=a.memoizedState!==null||Fi,!c){n=n!==null&&n.memoizedState!==null||Xe;var f=Fi,S=Xe;Fi=c,(Xe=n)&&!S?va(t,a,(a.subtreeFlags&8772)!==0):Hi(t,a),Fi=f,Xe=S}o&512&&(a.memoizedProps.mode==="manual"?er(a,a.return):Vn(a,a.return));break;default:Hi(t,a)}}function Mm(t){var n=t.alternate;n!==null&&(t.alternate=null,Mm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ws(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,kn=!1;function Ii(t,n,a){for(a=a.child;a!==null;)Em(t,n,a),a=a.sibling}function Em(t,n,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(Yt,a)}catch{}switch(a.tag){case 26:Xe||Vn(a,n),Ii(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Vn(a,n);var o=Je,c=kn;for(Je=a.stateNode,Ii(t,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);ws(a),Je=o,kn=c;break;case 5:Xe||Vn(a,n);case 6:c=Je;var f=kn;if(Je=null,Ii(t,n,a),Je=c,kn=f,Je!==null)if(kn)try{t=Je,o=a.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)}catch(S){Pe(a,n,S)}else try{Je.removeChild(a.stateNode)}catch(S){Pe(a,n,S)}break;case 18:Je!==null&&(kn?(n=Je,a=a.stateNode,n.nodeType===8?Mf(n.parentNode,a):n.nodeType===1&&Mf(n,a),yo(n)):Mf(Je,a.stateNode));break;case 4:o=Je,c=kn,Je=a.stateNode.containerInfo,kn=!0,Ii(t,n,a),Je=o,kn=c;break;case 0:case 11:case 14:case 15:Xe||_a(2,a,n),Xe||_a(4,a,n),Ii(t,n,a);break;case 1:Xe||(Vn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&mm(a,n,o)),Ii(t,n,a);break;case 21:Ii(t,n,a);break;case 22:Xe||Vn(a,n),Xe=(o=Xe)||a.memoizedState!==null,Ii(t,n,a),Xe=o;break;default:Ii(t,n,a)}}function bm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{yo(t)}catch(a){Pe(n,n.return,a)}}function Cv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new xm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new xm),n;default:throw Error(r(435,t.tag))}}function Xu(t,n){var a=Cv(t);n.forEach(function(o){var c=Gv.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function $n(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,S=n,T=S;t:for(;T!==null;){switch(T.tag){case 27:case 5:Je=T.stateNode,kn=!1;break t;case 3:Je=T.stateNode.containerInfo,kn=!0;break t;case 4:Je=T.stateNode.containerInfo,kn=!0;break t}T=T.return}if(Je===null)throw Error(r(160));Em(f,S,c),Je=null,kn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Tm(n,t),n=n.sibling}var ui=null;function Tm(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(n,t),ti(t),o&4&&(_a(3,t,t.return),no(3,t),_a(5,t,t.return));break;case 1:$n(n,t),ti(t),o&512&&(Xe||a===null||Vn(a,a.return)),o&64&&Fi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ui;if($n(n,t),ti(t),o&512&&(Xe||a===null||Vn(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ha]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),vn(f,o,a),f[en]=t,$(f),o=f;break t;case"link":var S=gg("link","href",c).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break e}}f=c.createElement(o),vn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=gg("meta","content",c).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break e}}f=c.createElement(o),vn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[en]=t,$(f),o=f}t.stateNode=o}else _g(c,t.type,t.stateNode);else t.stateNode=mg(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?_g(c,t.type,t.stateNode):mg(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&_m(t,t.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&t.alternate===null){c=t.stateNode,f=t.memoizedProps;try{for(var L=c.firstChild;L;){var k=L.nextSibling,ut=L.nodeName;L[Ha]||ut==="HEAD"||ut==="BODY"||ut==="SCRIPT"||ut==="STYLE"||ut==="LINK"&&L.rel.toLowerCase()==="stylesheet"||c.removeChild(L),L=k}for(var vt=t.type,it=c.attributes;it.length;)c.removeAttributeNode(it[0]);vn(c,vt,f),c[en]=t,c[nn]=f}catch(kt){Pe(t,t.return,kt)}}case 5:if($n(n,t),ti(t),o&512&&(Xe||a===null||Vn(a,a.return)),t.flags&32){c=t.stateNode;try{Ln(c,"")}catch(kt){Pe(t,t.return,kt)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,_m(t,c,a!==null?a.memoizedProps:c)),o&1024&&(ku=!0);break;case 6:if($n(n,t),ti(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(kt){Pe(t,t.return,kt)}}break;case 3:if(Ll=null,c=ui,ui=Ul(n.containerInfo),$n(n,t),ui=c,ti(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yo(n.containerInfo)}catch(kt){Pe(t,t.return,kt)}ku&&(ku=!1,Am(t));break;case 4:o=ui,ui=Ul(t.stateNode.containerInfo),$n(n,t),ti(t),ui=o;break;case 12:$n(n,t),ti(t);break;case 13:$n(n,t),ti(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($u=dt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xu(t,o)));break;case 22:if(o&512&&(Xe||a===null||Vn(a,a.return)),L=t.memoizedState!==null,k=a!==null&&a.memoizedState!==null,ut=Fi,vt=Xe,Fi=ut||L,Xe=vt||k,$n(n,t),Xe=vt,Fi=ut,ti(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=L?n._visibility&-2:n._visibility|1,L&&(n=Fi||Xe,a===null||k||n||Hr(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(a=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){k=a=n;try{if(c=k.stateNode,L)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=k.stateNode,T=k.memoizedProps.style;var ct=T!=null&&T.hasOwnProperty("display")?T.display:null;S.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(kt){Pe(k,k.return,kt)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=L?"":k.memoizedProps}catch(kt){Pe(k,k.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Xu(t,a))));break;case 19:$n(n,t),ti(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Xu(t,o)));break;case 21:break;default:$n(n,t),ti(t)}}function ti(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var a=t.return;a!==null;){if(vm(a)){var o=a;break t}a=a.return}throw Error(r(160))}switch(o.tag){case 27:var c=o.stateNode,f=Gu(t);gl(t,f,c);break;case 5:var S=o.stateNode;o.flags&32&&(Ln(S,""),o.flags&=-33);var T=Gu(t);gl(t,T,S);break;case 3:case 4:var L=o.stateNode.containerInfo,k=Gu(t);Vu(t,k,L);break;default:throw Error(r(161))}}}catch(ut){Pe(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Am(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Am(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Hi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ym(t,n.alternate,n),n=n.sibling}function Hr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),Hr(n);break;case 1:Vn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mm(n,n.return,a),Hr(n);break;case 26:case 27:case 5:Vn(n,n.return),Hr(n);break;case 22:Vn(n,n.return),n.memoizedState===null&&Hr(n);break;default:Hr(n)}t=t.sibling}}function va(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:va(c,f,a),no(4,f);break;case 1:if(va(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(k){Pe(o,o.return,k)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var L=c.shared.hiddenCallbacks;if(L!==null)for(c.shared.hiddenCallbacks=null,c=0;c<L.length;c++)hm(L[c],T)}catch(k){Pe(o,o.return,k)}}a&&S&64&&pm(f),er(f,f.return);break;case 26:case 27:case 5:va(c,f,a),a&&o===null&&S&4&&gm(f),er(f,f.return);break;case 12:va(c,f,a);break;case 13:va(c,f,a),a&&S&4&&bm(c,f);break;case 22:f.memoizedState===null&&va(c,f,a),er(f,f.return);break;default:va(c,f,a)}n=n.sibling}}function Wu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function qu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function xa(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Rm(t,n,a,o),n=n.sibling}function Rm(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xa(t,n,a,o),c&2048&&no(9,n);break;case 3:xa(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(c&2048){xa(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(L){Pe(n,n.return,L)}}else xa(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?xa(t,n,a,o):io(t,n):f._visibility&4?xa(t,n,a,o):(f._visibility|=4,Gr(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&Wu(n.alternate,n);break;case 24:xa(t,n,a,o),c&2048&&qu(n.alternate,n);break;default:xa(t,n,a,o)}}function Gr(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,S=n,T=a,L=o,k=S.flags;switch(S.tag){case 0:case 11:case 15:Gr(f,S,T,L,c),no(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&4?Gr(f,S,T,L,c):io(f,S):(ut._visibility|=4,Gr(f,S,T,L,c)),c&&k&2048&&Wu(S.alternate,S);break;case 24:Gr(f,S,T,L,c),c&&k&2048&&qu(S.alternate,S);break;default:Gr(f,S,T,L,c)}n=n.sibling}}function io(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:io(a,o),c&2048&&Wu(o.alternate,o);break;case 24:io(a,o),c&2048&&qu(o.alternate,o);break;default:io(a,o)}n=n.sibling}}var ao=8192;function Vr(t){if(t.subtreeFlags&ao)for(t=t.child;t!==null;)Cm(t),t=t.sibling}function Cm(t){switch(t.tag){case 26:Vr(t),t.flags&ao&&t.memoizedState!==null&&gx(ui,t.memoizedState,t.memoizedProps);break;case 5:Vr(t);break;case 3:case 4:var n=ui;ui=Ul(t.stateNode.containerInfo),Vr(t),ui=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=ao,ao=16777216,Vr(t),ao=n):Vr(t));break;default:Vr(t)}}function wm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ro(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];fn=o,Um(o,t)}wm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dm(t),t=t.sibling}function Dm(t){switch(t.tag){case 0:case 11:case 15:ro(t),t.flags&2048&&_a(9,t,t.return);break;case 3:ro(t);break;case 12:ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,_l(t)):ro(t);break;default:ro(t)}}function _l(t){var n=t.deletions;if(t.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];fn=o,Um(o,t)}wm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_a(8,n,n.return),_l(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,_l(n));break;default:_l(n)}t=t.sibling}}function Um(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:qs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,fn=o;else t:for(a=t;fn!==null;){o=fn;var c=o.sibling,f=o.return;if(Mm(o),o===a){fn=null;break t}if(c!==null){c.return=f,fn=c;break t}fn=f}}}function wv(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,o){return new wv(t,n,a,o)}function Yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Sa(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&31457280,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Nm(t,n){t.flags&=31457282;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function vl(t,n,a,o,c,f){var S=0;if(o=t,typeof t=="function")Yu(t)&&(S=1);else if(typeof t=="string")S=px(t,a,ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case m:return nr(a.children,c,f,n);case p:S=8,c|=24;break;case g:return t=ei(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case w:return t=ei(13,a,n,c),t.elementType=w,t.lanes=f,t;case y:return t=ei(19,a,n,c),t.elementType=y,t.lanes=f,t;case O:return Lm(a,c,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case M:S=10;break t;case v:S=9;break t;case R:S=11;break t;case _:S=14;break t;case P:S=16,o=null;break t}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ei(S,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function nr(t,n,a,o){return t=ei(7,t,o,n),t.lanes=a,t}function Lm(t,n,a,o){t=ei(22,t,o,n),t.elementType=O,t.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var S=la(f,2);S!==null&&(c._pendingVisibility|=2,wn(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var S=la(f,2);S!==null&&(c._pendingVisibility&=-3,wn(S,f,2))}}};return t.stateNode=c,t}function ju(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function Zu(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Gi(t){t.flags|=4}function Om(t,n){if(n.type!=="stylesheet"||n.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!vg(n)){if(n=Jn.current,n!==null&&((Se&4194176)===Se?Mi!==null:(Se&62914560)!==Se&&!(Se&536870912)||n!==Mi))throw ks=tu,Qd;t.flags|=8192}}function xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Me():536870912,t.lanes|=n,Xr|=n)}function so(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Ge(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&31457280,o|=c.flags&31457280,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Dv(t,n,a){var o=n.pendingProps;switch(Jc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(n),null;case 1:return Ge(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Bi(sn),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Is(n)?Gi(n):t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,ci!==null&&(af(ci),ci=null))),Ge(n),null;case 26:return a=n.memoizedState,t===null?(Gi(n),a!==null?(Ge(n),Om(n,a)):(Ge(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Gi(n),Ge(n),Om(n,a)):(Ge(n),n.flags&=-16777217):(t.memoizedProps!==o&&Gi(n),Ge(n),n.flags&=-16777217),null;case 27:Xt(n),a=ae.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Gi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}t=ye.current,Is(n)?Zd(n):(t=ug(c,o,a),n.stateNode=t,Gi(n))}return Ge(n),null;case 5:if(Xt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Gi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}if(t=ye.current,Is(n))Zd(n);else{switch(c=Dl(ae.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[en]=n,t[nn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(vn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Gi(n)}}return Ge(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Gi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ae.current,Is(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Cn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[en]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||ag(t.nodeValue,a)),t||qa(n)}else t=Dl(t).createTextNode(o),t[en]=n,n.stateNode=t}return Ge(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Is(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[en]=n}else Hs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ge(n),c=!1}else ci!==null&&(af(ci),ci=null),c=!0;if(!c)return n.flags&256?(Li(n),n):(Li(n),null)}if(Li(n),n.flags&128)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),xl(n,n.updateQueue),Ge(n),null;case 4:return se(),t===null&&mf(n.stateNode.containerInfo),Ge(n),null;case 10:return Bi(n.type),Ge(n),null;case 19:if(Qt(rn),c=n.memoizedState,c===null)return Ge(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)so(c,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(f=nl(t),f!==null){for(n.flags|=128,so(c,!1),t=f.updateQueue,n.updateQueue=t,xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Nm(a,t),a=a.sibling;return zt(rn,rn.current&1|2),n.child}t=t.sibling}c.tail!==null&&dt()>Sl&&(n.flags|=128,o=!0,so(c,!1),n.lanes=4194304)}else{if(!o)if(t=nl(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,xl(n,t),so(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return Ge(n),null}else 2*dt()-c.renderingStartTime>Sl&&a!==536870912&&(n.flags|=128,o=!0,so(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=dt(),n.sibling=null,t=rn.current,zt(rn,o?t&1|2:t&1),n):(Ge(n),null);case 22:case 23:return Li(n),nu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?a&536870912&&!(n.flags&128)&&(Ge(n),n.subtreeFlags&6&&(n.flags|=8192)):Ge(n),a=n.updateQueue,a!==null&&xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Qt(ja),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(sn),Ge(n),null;case 25:return null}throw Error(r(156,n.tag))}function Uv(t,n){switch(Jc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Bi(sn),se(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Xt(n),null;case 13:if(Li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Hs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Qt(rn),null;case 4:return se(),null;case 10:return Bi(n.type),null;case 22:case 23:return Li(n),nu(),t!==null&&Qt(ja),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Bi(sn),null;case 25:return null;default:return null}}function Pm(t,n){switch(Jc(n),n.tag){case 3:Bi(sn),se();break;case 26:case 27:case 5:Xt(n);break;case 4:se();break;case 13:Li(n);break;case 19:Qt(rn);break;case 10:Bi(n.type);break;case 22:case 23:Li(n),nu(),t!==null&&Qt(ja);break;case 24:Bi(sn)}}var Nv={getCacheForType:function(t){var n=Sn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Lv=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Be=null,de=null,Se=0,Fe=0,Xn=null,Vi=!1,kr=!1,Ku=!1,ki=0,We=0,ya=0,ir=0,Qu=0,ni=0,Xr=0,oo=null,bi=null,Ju=!1,$u=0,Sl=1/0,yl=null,Ma=null,Ml=!1,ar=null,lo=0,tf=0,ef=null,co=0,nf=null;function Wn(){if(Ve&2&&Se!==0)return Se&-Se;if(C.T!==null){var t=Pr;return t!==0?t:ff()}return Cs()}function zm(){ni===0&&(ni=!(Se&536870912)||be?tn():536870912);var t=Jn.current;return t!==null&&(t.flags|=32),ni}function wn(t,n,a){(t===Be&&Fe===2||t.cancelPendingCommit!==null)&&(Wr(t,0),Xi(t,Se,ni,!1)),Tn(t,a),(!(Ve&2)||t!==Be)&&(t===Be&&(!(Ve&2)&&(ir|=a),We===4&&Xi(t,Se,ni,!1)),Ti(t))}function Bm(t,n,a){if(Ve&6)throw Error(r(327));var o=!a&&(n&60)===0&&(n&t.expiredLanes)===0||$t(t,n),c=o?zv(t,n):of(t,n,!0),f=o;do{if(c===0){kr&&!o&&Xi(t,n,0,!1);break}else if(c===6)Xi(t,n,0,!Vi);else{if(a=t.current.alternate,f&&!Ov(a)){c=of(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var T=t;c=oo;var L=T.current.memoizedState.isDehydrated;if(L&&(Wr(T,S).flags|=256),S=of(T,S,!1),S!==2){if(Ku&&!L){T.errorRecoveryDisabledLanes|=f,ir|=f,c=4;break t}f=bi,bi=c,f!==null&&af(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){Wr(t,0),Xi(t,n,0,!0);break}t:{switch(o=t,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Xi(o,n,ni,!Vi);break t}break;case 2:bi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(f=$u+300-dt(),10<f)){if(Xi(o,n,ni,!Vi),Ut(o,0)!==0)break t;o.timeoutHandle=og(Fm.bind(null,o,a,bi,yl,Ju,n,ni,ir,Xr,Vi,2,-0,0),f);break t}Fm(o,a,bi,yl,Ju,n,ni,ir,Xr,Vi,0,-0,0)}}break}while(!0);Ti(t)}function af(t){bi===null?bi=t:bi.push.apply(bi,t)}function Fm(t,n,a,o,c,f,S,T,L,k,ut,vt,it){var ct=n.subtreeFlags;if((ct&8192||(ct&16785408)===16785408)&&(go={stylesheets:null,count:0,unsuspend:mx},Cm(n),n=_x(),n!==null)){t.cancelPendingCommit=n(Wm.bind(null,t,a,o,c,S,T,L,1,vt,it)),Xi(t,f,S,!k);return}Wm(t,a,o,c,S,T,L,ut,vt,it)}function Ov(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Gn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xi(t,n,a,o){n&=~Qu,n&=~ir,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Zt(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&Rs(t,a,n)}function El(){return Ve&6?!0:(uo(0),!1)}function rf(){if(de!==null){if(Fe===0)var t=de.return;else t=de,zi=$a=null,uu(t),Lr=null,Xs=0,t=de;for(;t!==null;)Pm(t.alternate,t),t=t.return;de=null}}function Wr(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,$v(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),rf(),Be=t,de=a=Sa(t.current,null),Se=n,Fe=0,Xn=null,Vi=!1,kr=$t(t,n),Ku=!1,Xr=ni=Qu=ir=ya=We=0,bi=oo=null,Ju=!1,n&8&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Zt(o),f=1<<c;n|=t[c],o&=~f}return ki=n,Yo(),a}function Im(t,n){ue=null,C.H=Ei,n===Vs?(n=tp(),Fe=3):n===Qd?(n=tp(),Fe=4):Fe=n===Jp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,de===null&&(We=1,dl(t,Zn(n,t.current)))}function Hm(){var t=C.H;return C.H=Ei,t===null?Ei:t}function Gm(){var t=C.A;return C.A=Nv,t}function sf(){We=4,Vi||(Se&4194176)!==Se&&Jn.current!==null||(kr=!0),!(ya&134217727)&&!(ir&134217727)||Be===null||Xi(Be,Se,ni,!1)}function of(t,n,a){var o=Ve;Ve|=2;var c=Hm(),f=Gm();(Be!==t||Se!==n)&&(yl=null,Wr(t,n)),n=!1;var S=We;t:do try{if(Fe!==0&&de!==null){var T=de,L=Xn;switch(Fe){case 8:rf(),S=6;break t;case 3:case 2:case 6:Jn.current===null&&(n=!0);var k=Fe;if(Fe=0,Xn=null,qr(t,T,L,k),a&&kr){S=0;break t}break;default:k=Fe,Fe=0,Xn=null,qr(t,T,L,k)}}Pv(),S=We;break}catch(ut){Im(t,ut)}while(!0);return n&&t.shellSuspendCounter++,zi=$a=null,Ve=o,C.H=c,C.A=f,de===null&&(Be=null,Se=0,Yo()),S}function Pv(){for(;de!==null;)Vm(de)}function zv(t,n){var a=Ve;Ve|=2;var o=Hm(),c=Gm();Be!==t||Se!==n?(yl=null,Sl=dt()+500,Wr(t,n)):kr=$t(t,n);t:do try{if(Fe!==0&&de!==null){n=de;var f=Xn;e:switch(Fe){case 1:Fe=0,Xn=null,qr(t,n,f,1);break;case 2:if(Jd(f)){Fe=0,Xn=null,km(n);break}n=function(){Fe===2&&Be===t&&(Fe=7),Ti(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Jd(f)?(Fe=0,Xn=null,km(n)):(Fe=0,Xn=null,qr(t,n,f,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var T=de;if(!S||vg(S)){Fe=0,Xn=null;var L=T.sibling;if(L!==null)de=L;else{var k=T.return;k!==null?(de=k,bl(k)):de=null}break e}}Fe=0,Xn=null,qr(t,n,f,5);break;case 6:Fe=0,Xn=null,qr(t,n,f,6);break;case 8:rf(),We=6;break t;default:throw Error(r(462))}}Bv();break}catch(ut){Im(t,ut)}while(!0);return zi=$a=null,C.H=o,C.A=c,Ve=a,de!==null?0:(Be=null,Se=0,Yo(),We)}function Bv(){for(;de!==null&&!E();)Vm(de)}function Vm(t){var n=um(t.alternate,t,ki);t.memoizedProps=t.pendingProps,n===null?bl(t):de=n}function km(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=am(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=am(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:uu(n);default:Pm(a,n),n=de=Nm(n,ki),n=um(a,n,ki)}t.memoizedProps=t.pendingProps,n===null?bl(t):de=n}function qr(t,n,a,o){zi=$a=null,uu(n),Lr=null,Xs=0;var c=n.return;try{if(Tv(t,c,n,a,Se)){We=1,dl(t,Zn(a,t.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;We=1,dl(t,Zn(a,t.current)),de=null;return}n.flags&32768?(be||o===1?t=!0:kr||Se&536870912?t=!1:(Vi=t=!0,(o===2||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Xm(n,t)):bl(n)}function bl(t){var n=t;do{if(n.flags&32768){Xm(n,Vi);return}t=n.return;var a=Dv(n.alternate,n,ki);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=t}while(n!==null);We===0&&(We=5)}function Xm(t,n){do{var a=Uv(t.alternate,t);if(a!==null){a.flags&=32767,de=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){de=t;return}de=t=a}while(t!==null);We=6,de=null}function Wm(t,n,a,o,c,f,S,T,L,k){var ut=C.T,vt=X.p;try{X.p=2,C.T=null,Fv(t,n,a,o,vt,c,f,S,T,L,k)}finally{C.T=ut,X.p=vt}}function Fv(t,n,a,o,c,f,S,T){do Yr();while(ar!==null);if(Ve&6)throw Error(r(327));var L=t.finishedWork;if(o=t.finishedLanes,L===null)return null;if(t.finishedWork=null,t.finishedLanes=0,L===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var k=L.lanes|L.childLanes;if(k|=Zc,Bo(t,o,k,f,S,T),t===Be&&(de=Be=null,Se=0),!(L.subtreeFlags&10256)&&!(L.flags&10256)||Ml||(Ml=!0,tf=k,ef=a,Vv(Dt,function(){return Yr(),null})),a=(L.flags&15990)!==0,L.subtreeFlags&15990||a?(a=C.T,C.T=null,f=X.p,X.p=2,S=Ve,Ve|=4,Rv(t,L),Tm(L,t),lv(xf,t.containerInfo),zl=!!vf,xf=vf=null,t.current=L,ym(t,L.alternate,L),nt(),Ve=S,X.p=f,C.T=a):t.current=L,Ml?(Ml=!1,ar=t,lo=o):qm(t,k),k=t.pendingLanes,k===0&&(Ma=null),It(L.stateNode),Ti(t),n!==null)for(c=t.onRecoverableError,L=0;L<n.length;L++)k=n[L],c(k.value,{componentStack:k.stack});return lo&3&&Yr(),k=t.pendingLanes,o&4194218&&k&42?t===nf?co++:(co=0,nf=t):co=0,uo(0),null}function qm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function Yr(){if(ar!==null){var t=ar,n=tf;tf=0;var a=yr(lo),o=C.T,c=X.p;try{if(X.p=32>a?32:a,C.T=null,ar===null)var f=!1;else{a=ef,ef=null;var S=ar,T=lo;if(ar=null,lo=0,Ve&6)throw Error(r(331));var L=Ve;if(Ve|=4,Dm(S.current),Rm(S,S.current,T,a),Ve=L,uo(0,!1),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(Yt,S)}catch{}f=!0}return f}finally{X.p=c,C.T=o,qm(t,n)}}return!1}function Ym(t,n,a){n=Zn(a,n),n=bu(t.stateNode,n,2),t=ga(t,n,2),t!==null&&(Tn(t,2),Ti(t))}function Pe(t,n,a){if(t.tag===3)Ym(t,t,a);else for(;n!==null;){if(n.tag===3){Ym(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ma===null||!Ma.has(o))){t=Zn(a,t),a=Kp(2),o=ga(n,a,2),o!==null&&(Qp(a,o,n,t),Tn(o,2),Ti(o));break}}n=n.return}}function lf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Lv;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Ku=!0,c.add(a),t=Iv.bind(null,t,n,a),n.then(t,t))}function Iv(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Be===t&&(Se&a)===a&&(We===4||We===3&&(Se&62914560)===Se&&300>dt()-$u?!(Ve&2)&&Wr(t,0):Qu|=a,Xr===Se&&(Xr=0)),Ti(t)}function jm(t,n){n===0&&(n=Me()),t=la(t,n),t!==null&&(Tn(t,n),Ti(t))}function Hv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),jm(t,a)}function Gv(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),jm(t,a)}function Vv(t,n){return Wt(t,n)}var Tl=null,jr=null,cf=!1,Al=!1,uf=!1,rr=0;function Ti(t){t!==jr&&t.next===null&&(jr===null?Tl=jr=t:jr=jr.next=t),Al=!0,cf||(cf=!0,Xv(kv))}function uo(t,n){if(!uf&&Al){uf=!0;do for(var a=!1,o=Tl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Zt(42|t)+1)-1,f&=c&~(S&~T),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,Qm(o,f))}else f=Se,f=Ut(o,o===Be?f:0),!(f&3)||$t(o,f)||(a=!0,Qm(o,f));o=o.next}while(a);uf=!1}}function kv(){Al=cf=!1;var t=0;rr!==0&&(Jv()&&(t=rr),rr=0);for(var n=dt(),a=null,o=Tl;o!==null;){var c=o.next,f=Zm(o,n);f===0?(o.next=null,a===null?Tl=c:a.next=c,c===null&&(jr=a)):(a=o,(t!==0||f&3)&&(Al=!0)),o=c}uo(t)}function Zm(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var S=31-Zt(f),T=1<<S,L=c[S];L===-1?(!(T&a)||T&o)&&(c[S]=He(T,n)):L<=n&&(t.expiredLanes|=T),f&=~T}if(n=Be,a=Se,a=Ut(t,t===n?a:0),o=t.callbackNode,a===0||t===n&&Fe===2||t.cancelPendingCommit!==null)return o!==null&&o!==null&&N(o),t.callbackNode=null,t.callbackPriority=0;if(!(a&3)||$t(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&N(o),yr(a)){case 2:case 8:a=Gt;break;case 32:a=Dt;break;case 268435456:a=pe;break;default:a=Dt}return o=Km.bind(null,t),a=Wt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&N(o),t.callbackPriority=2,t.callbackNode=null,2}function Km(t,n){var a=t.callbackNode;if(Yr()&&t.callbackNode!==a)return null;var o=Se;return o=Ut(t,t===Be?o:0),o===0?null:(Bm(t,o,n),Zm(t,dt()),t.callbackNode!=null&&t.callbackNode===a?Km.bind(null,t):null)}function Qm(t,n){if(Yr())return null;Bm(t,n,!0)}function Xv(t){tx(function(){Ve&6?Wt(pt,t):t()})}function ff(){return rr===0&&(rr=tn()),rr}function Jm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ho(""+t)}function $m(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Wv(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Jm((c[nn]||null).action),S=o.submitter;S&&(n=(n=S[nn]||null)?Jm(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new Xo("action","action",null,o,c);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(rr!==0){var L=S?$m(c,S):new FormData(c);xu(a,{pending:!0,data:L,method:c.method,action:f},null,L)}}else typeof f=="function"&&(T.preventDefault(),L=S?$m(c,S):new FormData(c),xu(a,{pending:!0,data:L,method:c.method,action:f},f,L))},currentTarget:c}]})}}for(var hf=0;hf<Wd.length;hf++){var df=Wd[hf],qv=df.toLowerCase(),Yv=df[0].toUpperCase()+df.slice(1);li(qv,"on"+Yv)}li(Hd,"onAnimationEnd"),li(Gd,"onAnimationIteration"),li(Vd,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(uv,"onTransitionRun"),li(fv,"onTransitionStart"),li(hv,"onTransitionCancel"),li(kd,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function tg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],L=T.instance,k=T.currentTarget;if(T=T.listener,L!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=k;try{f(c)}catch(ut){hl(ut)}c.currentTarget=null,f=L}else for(S=0;S<o.length;S++){if(T=o[S],L=T.instance,k=T.currentTarget,T=T.listener,L!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=k;try{f(c)}catch(ut){hl(ut)}c.currentTarget=null,f=L}}}}function ve(t,n){var a=n[Mr];a===void 0&&(a=n[Mr]=new Set);var o=t+"__bubble";a.has(o)||(eg(n,t,2,!1),a.add(o))}function pf(t,n,a){var o=0;n&&(o|=4),eg(a,t,o,n)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function mf(t){if(!t[Rl]){t[Rl]=!0,j.forEach(function(a){a!=="selectionchange"&&(jv.has(a)||pf(a,!1,t),pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Rl]||(n[Rl]=!0,pf("selectionchange",!1,n))}}function eg(t,n,a,o){switch(bg(n)){case 2:var c=Sx;break;case 8:c=yx;break;default:c=Cf}a=c.bind(null,n,a,t),c=void 0,!zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function gf(t,n,a,o,c){var f=o;if(!(n&1)&&!(n&2)&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===c||T.nodeType===8&&T.parentNode===c)break;if(S===4)for(S=o.return;S!==null;){var L=S.tag;if((L===3||L===4)&&(L=S.stateNode.containerInfo,L===c||L.nodeType===8&&L.parentNode===c))return;S=S.return}for(;T!==null;){if(S=Di(T),S===null)return;if(L=S.tag,L===5||L===6||L===26||L===27){o=f=S;continue t}T=T.parentNode}}o=o.return}gd(function(){var k=f,ut=Oc(a),vt=[];t:{var it=Xd.get(t);if(it!==void 0){var ct=Xo,kt=t;switch(t){case"keypress":if(Vo(a)===0)break t;case"keydown":case"keyup":ct=G0;break;case"focusin":kt="focus",ct=Hc;break;case"focusout":kt="blur",ct=Hc;break;case"beforeblur":case"afterblur":ct=Hc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=w0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=X0;break;case Hd:case Gd:case Vd:ct=N0;break;case kd:ct=q0;break;case"scroll":case"scrollend":ct=R0;break;case"wheel":ct=j0;break;case"copy":case"cut":case"paste":ct=O0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=yd;break;case"toggle":case"beforetoggle":ct=K0}var ie=(n&4)!==0,qe=!ie&&(t==="scroll"||t==="scrollend"),Z=ie?it!==null?it+"Capture":null:it;ie=[];for(var G=k,tt;G!==null;){var gt=G;if(tt=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||tt===null||Z===null||(gt=Ds(G,Z),gt!=null&&ie.push(ho(G,gt,tt))),qe)break;G=G.return}0<ie.length&&(it=new ct(it,kt,null,a,ut),vt.push({event:it,listeners:ie}))}}if(!(n&7)){t:{if(it=t==="mouseover"||t==="pointerover",ct=t==="mouseout"||t==="pointerout",it&&a!==Lc&&(kt=a.relatedTarget||a.fromElement)&&(Di(kt)||kt[wi]))break t;if((ct||it)&&(it=ut.window===ut?ut:(it=ut.ownerDocument)?it.defaultView||it.parentWindow:window,ct?(kt=a.relatedTarget||a.toElement,ct=k,kt=kt?Di(kt):null,kt!==null&&(qe=Y(kt),ie=kt.tag,kt!==qe||ie!==5&&ie!==27&&ie!==6)&&(kt=null)):(ct=null,kt=k),ct!==kt)){if(ie=xd,gt="onMouseLeave",Z="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(ie=yd,gt="onPointerLeave",Z="onPointerEnter",G="pointer"),qe=ct==null?it:q(ct),tt=kt==null?it:q(kt),it=new ie(gt,G+"leave",ct,a,ut),it.target=qe,it.relatedTarget=tt,gt=null,Di(ut)===k&&(ie=new ie(Z,G+"enter",kt,a,ut),ie.target=tt,ie.relatedTarget=qe,gt=ie),qe=gt,ct&&kt)e:{for(ie=ct,Z=kt,G=0,tt=ie;tt;tt=Zr(tt))G++;for(tt=0,gt=Z;gt;gt=Zr(gt))tt++;for(;0<G-tt;)ie=Zr(ie),G--;for(;0<tt-G;)Z=Zr(Z),tt--;for(;G--;){if(ie===Z||Z!==null&&ie===Z.alternate)break e;ie=Zr(ie),Z=Zr(Z)}ie=null}else ie=null;ct!==null&&ng(vt,it,ct,ie,!1),kt!==null&&qe!==null&&ng(vt,qe,kt,ie,!0)}}t:{if(it=k?q(k):window,ct=it.nodeName&&it.nodeName.toLowerCase(),ct==="select"||ct==="input"&&it.type==="file")var Ht=wd;else if(Rd(it))if(Dd)Ht=sv;else{Ht=av;var he=iv}else ct=it.nodeName,!ct||ct.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?k&&Nc(k.elementType)&&(Ht=wd):Ht=rv;if(Ht&&(Ht=Ht(t,k))){Cd(vt,Ht,a,ut);break t}he&&he(t,it,k),t==="focusout"&&k&&it.type==="number"&&k.memoizedProps.value!=null&&xn(it,"number",it.value)}switch(he=k?q(k):window,t){case"focusin":(Rd(he)||he.contentEditable==="true")&&(Rr=he,qc=k,Fs=null);break;case"focusout":Fs=qc=Rr=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,Fd(vt,a,ut);break;case"selectionchange":if(cv)break;case"keydown":case"keyup":Fd(vt,a,ut)}var qt;if(Vc)t:{switch(t){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Ar?Td(t,a)&&(Jt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(Md&&a.locale!=="ko"&&(Ar||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Ar&&(qt=_d()):(oa=ut,Bc="value"in oa?oa.value:oa.textContent,Ar=!0)),he=Cl(k,Jt),0<he.length&&(Jt=new Sd(Jt,t,null,a,ut),vt.push({event:Jt,listeners:he}),qt?Jt.data=qt:(qt=Ad(a),qt!==null&&(Jt.data=qt)))),(qt=J0?$0(t,a):tv(t,a))&&(Jt=Cl(k,"onBeforeInput"),0<Jt.length&&(he=new Sd("onBeforeInput","beforeinput",null,a,ut),vt.push({event:he,listeners:Jt}),he.data=qt)),Wv(vt,t,k,a,ut)}tg(vt,n)})}function ho(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Cl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ds(t,a),c!=null&&o.unshift(ho(t,c,f)),c=Ds(t,n),c!=null&&o.push(ho(t,c,f))),t=t.return}return o}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ng(t,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var T=a,L=T.alternate,k=T.stateNode;if(T=T.tag,L!==null&&L===o)break;T!==5&&T!==26&&T!==27||k===null||(L=k,c?(k=Ds(a,f),k!=null&&S.unshift(ho(a,k,L))):c||(k=Ds(a,f),k!=null&&S.push(ho(a,k,L)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var Zv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function ig(t){return(typeof t=="string"?t:""+t).replace(Zv,`
`).replace(Kv,"")}function ag(t,n){return n=ig(n),ig(t)===n}function wl(){}function Le(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ln(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ln(t,""+o);break;case"className":Ie(t,"class",o);break;case"tabIndex":Ie(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(t,a,o);break;case"style":pd(t,o,f);break;case"data":if(n!=="object"){Ie(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ho(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Le(t,n,"name",c.name,c,null),Le(t,n,"formEncType",c.formEncType,c,null),Le(t,n,"formMethod",c.formMethod,c,null),Le(t,n,"formTarget",c.formTarget,c,null)):(Le(t,n,"encType",c.encType,c,null),Le(t,n,"method",c.method,c,null),Le(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ho(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=wl);break;case"onScroll":o!=null&&ve("scroll",t);break;case"onScrollEnd":o!=null&&ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Ho(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":ve("beforetoggle",t),ve("toggle",t),ge(t,"popover",o);break;case"xlinkActuate":Ee(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ee(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ee(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ee(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ee(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ee(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ee(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ge(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=T0.get(a)||a,ge(t,a,o))}}function _f(t,n,a,o,c,f){switch(a){case"style":pd(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ln(t,o):(typeof o=="number"||typeof o=="bigint")&&Ln(t,""+o);break;case"onScroll":o!=null&&ve("scroll",t);break;case"onScrollEnd":o!=null&&ve("scrollend",t);break;case"onClick":o!=null&&(t.onclick=wl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Et.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ge(t,a,o)}}}function vn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",t),ve("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,f,S,a,null)}}c&&Le(t,n,"srcSet",a.srcSet,a,null),o&&Le(t,n,"src",a.src,a,null);return;case"input":ve("invalid",t);var T=f=S=c=null,L=null,k=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":c=ut;break;case"type":S=ut;break;case"checked":L=ut;break;case"defaultChecked":k=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Le(t,n,o,ut,a,null)}}Rn(t,f,T,L,k,S,c,!1),_e(t);return;case"select":ve("invalid",t),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:Le(t,n,c,T,a,null)}n=f,a=S,t.multiple=!!o,n!=null?ke(t,!!o,n,!1):a!=null&&ke(t,!!o,a,!0);return;case"textarea":ve("invalid",t),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Le(t,n,S,T,a,null)}Er(t,o,c,f),_e(t);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(o=a[L],o!=null))switch(L){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Le(t,n,L,o,a,null)}return;case"dialog":ve("cancel",t),ve("close",t);break;case"iframe":case"object":ve("load",t);break;case"video":case"audio":for(o=0;o<fo.length;o++)ve(fo[o],t);break;case"image":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"embed":case"source":case"link":ve("error",t),ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Le(t,n,k,o,a,null)}return;default:if(Nc(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&_f(t,n,ut,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Le(t,n,T,o,a,null))}function Qv(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,L=null,k=null,ut=null;for(ct in a){var vt=a[ct];if(a.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":L=vt;default:o.hasOwnProperty(ct)||Le(t,n,ct,null,o,vt)}}for(var it in o){var ct=o[it];if(vt=a[it],o.hasOwnProperty(it)&&(ct!=null||vt!=null))switch(it){case"type":f=ct;break;case"name":c=ct;break;case"checked":k=ct;break;case"defaultChecked":ut=ct;break;case"value":S=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==vt&&Le(t,n,it,ct,o,vt)}}Ue(t,S,T,L,k,ut,f,c);return;case"select":ct=S=T=it=null;for(f in a)if(L=a[f],a.hasOwnProperty(f)&&L!=null)switch(f){case"value":break;case"multiple":ct=L;default:o.hasOwnProperty(f)||Le(t,n,f,null,o,L)}for(c in o)if(f=o[c],L=a[c],o.hasOwnProperty(c)&&(f!=null||L!=null))switch(c){case"value":it=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==L&&Le(t,n,c,f,o,L)}n=T,a=S,o=ct,it!=null?ke(t,!!a,it,!1):!!o!=!!a&&(n!=null?ke(t,!!a,n,!0):ke(t,!!a,a?[]:"",!1));return;case"textarea":ct=it=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Le(t,n,T,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":it=c;break;case"defaultValue":ct=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Le(t,n,S,c,o,f)}mn(t,it,ct);return;case"option":for(var kt in a)if(it=a[kt],a.hasOwnProperty(kt)&&it!=null&&!o.hasOwnProperty(kt))switch(kt){case"selected":t.selected=!1;break;default:Le(t,n,kt,null,o,it)}for(L in o)if(it=o[L],ct=a[L],o.hasOwnProperty(L)&&it!==ct&&(it!=null||ct!=null))switch(L){case"selected":t.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Le(t,n,L,it,o,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)it=a[ie],a.hasOwnProperty(ie)&&it!=null&&!o.hasOwnProperty(ie)&&Le(t,n,ie,null,o,it);for(k in o)if(it=o[k],ct=a[k],o.hasOwnProperty(k)&&it!==ct&&(it!=null||ct!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Le(t,n,k,it,o,ct)}return;default:if(Nc(n)){for(var qe in a)it=a[qe],a.hasOwnProperty(qe)&&it!==void 0&&!o.hasOwnProperty(qe)&&_f(t,n,qe,void 0,o,it);for(ut in o)it=o[ut],ct=a[ut],!o.hasOwnProperty(ut)||it===ct||it===void 0&&ct===void 0||_f(t,n,ut,it,o,ct);return}}for(var Z in a)it=a[Z],a.hasOwnProperty(Z)&&it!=null&&!o.hasOwnProperty(Z)&&Le(t,n,Z,null,o,it);for(vt in o)it=o[vt],ct=a[vt],!o.hasOwnProperty(vt)||it===ct||it==null&&ct==null||Le(t,n,vt,it,o,ct)}var vf=null,xf=null;function Dl(t){return t.nodeType===9?t:t.ownerDocument}function rg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Sf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yf=null;function Jv(){var t=window.event;return t&&t.type==="popstate"?t===yf?!1:(yf=t,!0):(yf=null,!1)}var og=typeof setTimeout=="function"?setTimeout:void 0,$v=typeof clearTimeout=="function"?clearTimeout:void 0,lg=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof lg<"u"?function(t){return lg.resolve(null).then(t).catch(ex)}:og;function ex(t){setTimeout(function(){throw t})}function Mf(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(o===0){t.removeChild(c),yo(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=c}while(a);yo(n)}function Ef(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ef(a),ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function nx(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ha])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=fi(t.nextSibling),t===null)break}return null}function ix(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fi(t.nextSibling),t===null))return null;return t}function fi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function cg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function ug(t,n,a){switch(n=Dl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var ii=new Map,fg=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var Wi=X.d;X.d={f:ax,r:rx,D:sx,C:ox,L:lx,m:cx,X:fx,S:ux,M:hx};function ax(){var t=Wi.f(),n=El();return t||n}function rx(t){var n=A(t);n!==null&&n.tag===5&&n.type==="form"?Fp(n):Wi.r(t)}var Kr=typeof document>"u"?null:document;function hg(t,n,a){var o=Kr;if(o&&typeof n=="string"&&n){var c=cn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),fg.has(c)||(fg.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),vn(n,"link",t),$(n),o.head.appendChild(n)))}}function sx(t){Wi.D(t),hg("dns-prefetch",t,null)}function ox(t,n){Wi.C(t,n),hg("preconnect",t,n)}function lx(t,n,a){Wi.L(t,n,a);var o=Kr;if(o&&t&&n){var c='link[rel="preload"][as="'+cn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+cn(a.imageSizes)+'"]')):c+='[href="'+cn(t)+'"]';var f=c;switch(n){case"style":f=Qr(t);break;case"script":f=Jr(t)}ii.has(f)||(t=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ii.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(po(f))||n==="script"&&o.querySelector(mo(f))||(n=o.createElement("link"),vn(n,"link",t),$(n),o.head.appendChild(n)))}}function cx(t,n){Wi.m(t,n);var a=Kr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+cn(o)+'"][href="'+cn(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Jr(t)}if(!ii.has(f)&&(t=b({rel:"modulepreload",href:t},n),ii.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mo(f)))return}o=a.createElement("link"),vn(o,"link",t),$(o),a.head.appendChild(o)}}}function ux(t,n,a){Wi.S(t,n,a);var o=Kr;if(o&&t){var c=et(o).hoistableStyles,f=Qr(t);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(po(f)))T.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ii.get(f))&&bf(t,a);var L=S=o.createElement("link");$(L),vn(L,"link",t),L._p=new Promise(function(k,ut){L.onload=k,L.onerror=ut}),L.addEventListener("load",function(){T.loading|=1}),L.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Nl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function fx(t,n){Wi.X(t,n);var a=Kr;if(a&&t){var o=et(a).hoistableScripts,c=Jr(t),f=o.get(c);f||(f=a.querySelector(mo(c)),f||(t=b({src:t,async:!0},n),(n=ii.get(c))&&Tf(t,n),f=a.createElement("script"),$(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function hx(t,n){Wi.M(t,n);var a=Kr;if(a&&t){var o=et(a).hoistableScripts,c=Jr(t),f=o.get(c);f||(f=a.querySelector(mo(c)),f||(t=b({src:t,async:!0,type:"module"},n),(n=ii.get(c))&&Tf(t,n),f=a.createElement("script"),$(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function dg(t,n,a,o){var c=(c=ae.current)?Ul(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qr(a.href),a=et(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Qr(a.href);var f=et(c).hoistableStyles,S=f.get(t);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,S),(f=c.querySelector(po(t)))&&!f._p&&(S.instance=f,S.state.loading=5),ii.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(t,a),f||dx(c,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Jr(a),a=et(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Qr(t){return'href="'+cn(t)+'"'}function po(t){return'link[rel="stylesheet"]['+t+"]"}function pg(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function dx(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),vn(n,"link",a),$(n),t.head.appendChild(n))}function Jr(t){return'[src="'+cn(t)+'"]'}function mo(t){return"script[async]"+t}function mg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+cn(a.href)+'"]');if(o)return n.instance=o,$(o),o;var c=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),$(o),vn(o,"style",c),Nl(o,a.precedence,t),n.instance=o;case"stylesheet":c=Qr(a.href);var f=t.querySelector(po(c));if(f)return n.state.loading|=4,n.instance=f,$(f),f;o=pg(a),(c=ii.get(c))&&bf(o,c),f=(t.ownerDocument||t).createElement("link"),$(f);var S=f;return S._p=new Promise(function(T,L){S.onload=T,S.onerror=L}),vn(f,"link",o),n.state.loading|=4,Nl(f,a.precedence,t),n.instance=f;case"script":return f=Jr(a.src),(c=t.querySelector(mo(f)))?(n.instance=c,$(c),c):(o=a,(c=ii.get(f))&&(o=b({},a),Tf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),$(c),vn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(o=n.instance,n.state.loading|=4,Nl(o,a.precedence,t));return n.instance}function Nl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Tf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ll=null;function gg(t,n,a){if(Ll===null){var o=new Map,c=Ll=new Map;c.set(a,o)}else c=Ll,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Ha]||f[en]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=t+S;var T=o.get(S);T?T.push(f):o.set(S,[f])}}return o}function _g(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function px(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function vg(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var go=null;function mx(){}function gx(t,n,a){if(go===null)throw Error(r(475));var o=go;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=Qr(a.href),f=t.querySelector(po(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Ol.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,$(f);return}f=t.ownerDocument||t,a=pg(a),(c=ii.get(c))&&bf(a,c),f=f.createElement("link"),$(f);var S=f;S._p=new Promise(function(T,L){S.onload=T,S.onerror=L}),vn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(o.count++,n=Ol.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function _x(){if(go===null)throw Error(r(475));var t=go;return t.stylesheets&&t.count===0&&Af(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Af(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ol(){if(this.count--,this.count===0){if(this.stylesheets)Af(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pl=null;function Af(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pl=new Map,n.forEach(vx,t),Pl=null,Ol.call(t))}function vx(t,n){if(!(n.state.loading&4)){var a=Pl.get(t);if(a)var o=a.get(null);else{a=new Map,Pl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=Ol.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var _o={$$typeof:M,Provider:null,Consumer:null,_currentValue:mt,_currentValue2:mt,_threadCount:0};function xx(t,n,a,o,c,f,S,T){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.hiddenUpdates=bn(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function xg(t,n,a,o,c,f,S,T,L,k,ut,vt){return t=new xx(t,n,a,S,T,L,k,vt),n=1,f===!0&&(n|=24),f=ei(3,null,null,n),t.current=f,f.stateNode=t,n=iu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Bu(f),t}function Sg(t){return t?(t=Dr,t):Dr}function yg(t,n,a,o,c,f){c=Sg(c),o.context===null?o.context=c:o.pendingContext=c,o=ma(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ga(t,o,n),a!==null&&(wn(a,t,n),$s(a,t,n))}function Mg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Rf(t,n){Mg(t,n),(t=t.alternate)&&Mg(t,n)}function Eg(t){if(t.tag===13){var n=la(t,67108864);n!==null&&wn(n,t,67108864),Rf(t,67108864)}}var zl=!0;function Sx(t,n,a,o){var c=C.T;C.T=null;var f=X.p;try{X.p=2,Cf(t,n,a,o)}finally{X.p=f,C.T=c}}function yx(t,n,a,o){var c=C.T;C.T=null;var f=X.p;try{X.p=8,Cf(t,n,a,o)}finally{X.p=f,C.T=c}}function Cf(t,n,a,o){if(zl){var c=wf(o);if(c===null)gf(t,n,o,Bl,a),Tg(t,o);else if(Ex(c,t,n,a,o))o.stopPropagation();else if(Tg(t,o),n&4&&-1<Mx.indexOf(t)){for(;c!==null;){var f=A(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=wt(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var L=1<<31-Zt(S);T.entanglements[1]|=L,S&=~L}Ti(f),!(Ve&6)&&(Sl=dt()+500,uo(0))}}break;case 13:T=la(f,2),T!==null&&wn(T,f,2),El(),Rf(f,2)}if(f=wf(o),f===null&&gf(t,n,o,Bl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else gf(t,n,o,null,a)}}function wf(t){return t=Oc(t),Df(t)}var Bl=null;function Df(t){if(Bl=null,t=Di(t),t!==null){var n=Y(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=xt(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Bl=t,null}function bg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case pt:return 2;case Gt:return 8;case Dt:case Bt:return 32;case pe:return 268435456;default:return 32}default:return 32}}var Uf=!1,Ea=null,ba=null,Ta=null,vo=new Map,xo=new Map,Aa=[],Mx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tg(t,n){switch(t){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Ta=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(n.pointerId)}}function So(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=A(n),n!==null&&Eg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Ex(t,n,a,o,c){switch(n){case"focusin":return Ea=So(Ea,t,n,a,o,c),!0;case"dragenter":return ba=So(ba,t,n,a,o,c),!0;case"mouseover":return Ta=So(Ta,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return vo.set(f,So(vo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,xo.set(f,So(xo.get(f)||null,t,n,a,o,c)),!0}return!1}function Ag(t){var n=Di(t.target);if(n!==null){var a=Y(n);if(a!==null){if(n=a.tag,n===13){if(n=xt(a),n!==null){t.blockedOn=n,Fo(t.priority,function(){if(a.tag===13){var o=Wn(),c=la(a,o);c!==null&&wn(c,a,o),Rf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Lc=o,a.target.dispatchEvent(o),Lc=null}else return n=A(a),n!==null&&Eg(n),t.blockedOn=a,!1;n.shift()}return!0}function Rg(t,n,a){Fl(t)&&a.delete(n)}function bx(){Uf=!1,Ea!==null&&Fl(Ea)&&(Ea=null),ba!==null&&Fl(ba)&&(ba=null),Ta!==null&&Fl(Ta)&&(Ta=null),vo.forEach(Rg),xo.forEach(Rg)}function Il(t,n){t.blockedOn===n&&(t.blockedOn=null,Uf||(Uf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,bx)))}var Hl=null;function Cg(t){Hl!==t&&(Hl=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Hl===t&&(Hl=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Df(o||a)===null)continue;break}var f=A(a);f!==null&&(t.splice(n,3),n-=3,xu(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function yo(t){function n(L){return Il(L,t)}Ea!==null&&Il(Ea,t),ba!==null&&Il(ba,t),Ta!==null&&Il(Ta,t),vo.forEach(n),xo.forEach(n);for(var a=0;a<Aa.length;a++){var o=Aa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)Ag(a),a.blockedOn===null&&Aa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[nn]||null;if(typeof f=="function")S||Cg(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[nn]||null)T=S.formAction;else if(Df(c)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Cg(a)}}}function Nf(t){this._internalRoot=t}Gl.prototype.render=Nf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Wn();yg(a,o,t,n,null,null)},Gl.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Yr(),yg(t.current,2,null,t,null,null),El(),n[wi]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Cs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Aa.length&&n!==0&&n<Aa[a].priority;a++);Aa.splice(a,0,t),a===0&&Ag(t)}};var wg=e.version;if(wg!=="19.0.0")throw Error(r(527,wg,"19.0.0"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=J(n),t=t!==null?yt(t):null,t=t===null?null:t.stateNode,t};var Tx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:Di,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{Yt=Vl.inject(Tx),Vt=Vl}catch{}}return Eo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=qp,f=Yp,S=jp,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=xg(t,1,!1,null,null,a,o,c,f,S,T,null),t[wi]=n.current,mf(t.nodeType===8?t.parentNode:t),new Nf(n)},Eo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=qp,S=Yp,T=jp,L=null,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(L=a.unstable_transitionCallbacks),a.formState!==void 0&&(k=a.formState)),n=xg(t,1,!0,n,a??null,o,c,f,S,T,L,k),n.context=Sg(null),a=n.current,o=Wn(),c=ma(o),c.callback=null,ga(a,c,o),n.current.lanes=o,Tn(n,o),Ti(n),t[wi]=n.current,mf(t),new Gl(n)},Eo.version="19.0.0",Eo}var Ig;function zx(){if(Ig)return Pf.exports;Ig=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pf.exports=Px(),Pf.exports}var Bx=zx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rd="173",Fx=0,Hg=1,Ix=2,G_=1,Hx=2,Qi=3,Fa=0,Bn=1,Ji=2,Pa=0,ms=1,Gg=2,Vg=3,kg=4,Gx=5,pr=100,Vx=101,kx=102,Xx=103,Wx=104,qx=200,Yx=201,jx=202,Zx=203,mh=204,gh=205,Kx=206,Qx=207,Jx=208,$x=209,tS=210,eS=211,nS=212,iS=213,aS=214,_h=0,vh=1,xh=2,vs=3,Sh=4,yh=5,Mh=6,Eh=7,V_=0,rS=1,sS=2,za=0,oS=1,lS=2,cS=3,uS=4,fS=5,hS=6,dS=7,k_=300,xs=301,Ss=302,bh=303,Th=304,bc=306,Ah=1e3,gr=1001,Rh=1002,vi=1003,pS=1004,kl=1005,Ci=1006,If=1007,_r=1008,aa=1009,X_=1010,W_=1011,Do=1012,sd=1013,xr=1014,$i=1015,Uo=1016,od=1017,ld=1018,ys=1020,q_=35902,Y_=1021,j_=1022,_i=1023,Z_=1024,K_=1025,gs=1026,Ms=1027,Q_=1028,cd=1029,J_=1030,ud=1031,fd=1033,dc=33776,pc=33777,mc=33778,gc=33779,Ch=35840,wh=35841,Dh=35842,Uh=35843,Nh=36196,Lh=37492,Oh=37496,Ph=37808,zh=37809,Bh=37810,Fh=37811,Ih=37812,Hh=37813,Gh=37814,Vh=37815,kh=37816,Xh=37817,Wh=37818,qh=37819,Yh=37820,jh=37821,_c=36492,Zh=36494,Kh=36495,$_=36283,Qh=36284,Jh=36285,$h=36286,mS=3200,gS=3201,_S=0,vS=1,Oa="",ri="srgb",Es="srgb-linear",xc="linear",Oe="srgb",$r=7680,Xg=519,xS=512,SS=513,yS=514,t0=515,MS=516,ES=517,bS=518,TS=519,Wg=35044,qg="300 es",ta=2e3,Sc=2001;class Ts{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=Math.PI/180,td=180/Math.PI;function No(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[i&63|128]+Mn[i>>8&255]+"-"+Mn[i>>16&255]+Mn[i>>24&255]+Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]).toLowerCase()}function xe(s,e,i){return Math.max(e,Math.min(i,s))}function AS(s,e){return(s%e+e)%e}function Gf(s,e,i){return(1-i)*s+i*e}function bo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,i=0){ze.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(e,i,r,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],v=r[2],M=r[5],R=r[8],w=l[0],y=l[3],_=l[6],P=l[1],O=l[4],U=l[7],H=l[2],I=l[5],F=l[8];return u[0]=h*w+d*P+m*H,u[3]=h*y+d*O+m*I,u[6]=h*_+d*U+m*F,u[1]=p*w+g*P+x*H,u[4]=p*y+g*O+x*I,u[7]=p*_+g*U+x*F,u[2]=v*w+M*P+R*H,u[5]=v*y+M*O+R*I,u[8]=v*_+M*U+R*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=g*h-d*p,v=d*m-g*u,M=p*u-h*m,R=i*x+r*v+l*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=x*w,e[1]=(l*p-g*r)*w,e[2]=(d*r-l*h)*w,e[3]=v*w,e[4]=(g*i-l*m)*w,e[5]=(l*u-d*i)*w,e[6]=M*w,e[7]=(r*m-p*i)*w,e[8]=(h*i-r*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Vf.makeScale(e,i)),this}rotate(e){return this.premultiply(Vf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Vf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vf=new le;function e0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function RS(){const s=yc("canvas");return s.style.display="block",s}const Yg={};function ds(s){s in Yg||(Yg[s]=!0,console.warn(s))}function CS(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function wS(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function DS(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jg=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zg=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function US(){const s={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Oe&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Oe&&(l.r=_s(l.r),l.g=_s(l.g),l.b=_s(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Oa?xc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Es]:{primaries:e,whitePoint:r,transfer:xc,toXYZ:jg,fromXYZ:Zg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Oe,toXYZ:jg,fromXYZ:Zg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),s}const Ae=US();function ia(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ts;class NS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ts===void 0&&(ts=yc("canvas")),ts.width=e.width,ts.height=e.height;const r=ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ts}return i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=yc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ia(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ia(i[r]/255)*255):i[r]=ia(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LS=0;class n0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(kf(l[h].image)):u.push(kf(l[h]))}else u=kf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function kf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?NS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OS=0;class Fn extends Ts{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=gr,l=gr,u=Ci,h=_r,d=_i,m=aa,p=Fn.DEFAULT_ANISOTROPY,g=Oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=No(),this.name="",this.source=new n0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=k_;Fn.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,i=0,r=0,l=1){je.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],x=m[8],v=m[1],M=m[5],R=m[9],w=m[2],y=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-w)<.01&&Math.abs(R-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+w)<.1&&Math.abs(R+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,U=(M+1)/2,H=(_+1)/2,I=(g+v)/4,F=(x+w)/4,Q=(R+y)/4;return O>U&&O>H?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=I/r,u=F/r):U>H?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=I/l,u=Q/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=F/u,l=Q/u),this.set(r,l,u,i),this}let P=Math.sqrt((y-R)*(y-R)+(x-w)*(x-w)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(y-R)/P,this.y=(x-w)/P,this.z=(v-g)/P,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this.w=xe(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this.w=xe(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PS extends Ts{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new je(0,0,e,i),this.scissorTest=!1,this.viewport=new je(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Fn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const i=Object.assign({},e.texture.image);return this.texture.source=new n0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends PS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class i0 extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zS extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const v=u[h+0],M=u[h+1],R=u[h+2],w=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(d===1){e[i+0]=v,e[i+1]=M,e[i+2]=R,e[i+3]=w;return}if(x!==w||m!==v||p!==M||g!==R){let y=1-d;const _=m*v+p*M+g*R+x*w,P=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const H=Math.sqrt(O),I=Math.atan2(H,_*P);y=Math.sin(y*I)/H,d=Math.sin(d*I)/H}const U=d*P;if(m=m*y+v*U,p=p*y+M*U,g=g*y+R*U,x=x*y+w*U,y===1-d){const H=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=H,p*=H,g*=H,x*=H}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[h],v=u[h+1],M=u[h+2],R=u[h+3];return e[i]=d*R+g*x+m*M-p*v,e[i+1]=m*R+g*v+p*x-d*M,e[i+2]=p*R+g*M+d*v-m*x,e[i+3]=g*R-d*x-m*v-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(u/2),v=m(r/2),M=m(l/2),R=m(u/2);switch(h){case"XYZ":this._x=v*g*x+p*M*R,this._y=p*M*x-v*g*R,this._z=p*g*R+v*M*x,this._w=p*g*x-v*M*R;break;case"YXZ":this._x=v*g*x+p*M*R,this._y=p*M*x-v*g*R,this._z=p*g*R-v*M*x,this._w=p*g*x+v*M*R;break;case"ZXY":this._x=v*g*x-p*M*R,this._y=p*M*x+v*g*R,this._z=p*g*R+v*M*x,this._w=p*g*x-v*M*R;break;case"ZYX":this._x=v*g*x-p*M*R,this._y=p*M*x+v*g*R,this._z=p*g*R-v*M*x,this._w=p*g*x+v*M*R;break;case"YZX":this._x=v*g*x+p*M*R,this._y=p*M*x+v*g*R,this._z=p*g*R-v*M*x,this._w=p*g*x-v*M*R;break;case"XZY":this._x=v*g*x-p*M*R,this._y=p*M*x-v*g*R,this._z=p*g*R+v*M*x,this._w=p*g*x+v*M*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],v=r+d+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xe(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=h*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,i=0,r=0){st.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Kg.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Kg.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),g=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*g,this.y=r+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=xe(this.x,e.x,i.x),this.y=xe(this.y,e.y,i.y),this.z=xe(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=xe(this.x,e,i),this.y=xe(this.y,e,i),this.z=xe(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Xf.copy(this).projectOnVector(e),this.sub(Xf)}reflect(e){return this.sub(Xf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(xe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xf=new st,Kg=new Lo;class Oo{constructor(e=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,hi):hi.fromBufferAttribute(u,h),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Xl.copy(r.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),Wl.subVectors(this.max,To),es.subVectors(e.a,To),ns.subVectors(e.b,To),is.subVectors(e.c,To),Ca.subVectors(ns,es),wa.subVectors(is,ns),sr.subVectors(es,is);let i=[0,-Ca.z,Ca.y,0,-wa.z,wa.y,0,-sr.z,sr.y,Ca.z,0,-Ca.x,wa.z,0,-wa.x,sr.z,0,-sr.x,-Ca.y,Ca.x,0,-wa.y,wa.x,0,-sr.y,sr.x,0];return!Wf(i,es,ns,is,Wl)||(i=[1,0,0,0,1,0,0,0,1],!Wf(i,es,ns,is,Wl))?!1:(ql.crossVectors(Ca,wa),i=[ql.x,ql.y,ql.z],Wf(i,es,ns,is,Wl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new st,new st,new st,new st,new st,new st,new st,new st],hi=new st,Xl=new Oo,es=new st,ns=new st,is=new st,Ca=new st,wa=new st,sr=new st,To=new st,Wl=new st,ql=new st,or=new st;function Wf(s,e,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){or.fromArray(s,u);const d=l.x*Math.abs(or.x)+l.y*Math.abs(or.y)+l.z*Math.abs(or.z),m=e.dot(or),p=i.dot(or),g=r.dot(or);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const BS=new Oo,Ao=new st,qf=new st;class Tc{constructor(e=new st,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):BS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const i=Ao.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ao,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(qf)),this.expandByPoint(Ao.copy(e.center).sub(qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new st,Yf=new st,Yl=new st,Da=new st,jf=new st,jl=new st,Zf=new st;class a0{constructor(e=new st,i=new st(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Yi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,i),Yi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Yf.copy(e).add(i).multiplyScalar(.5),Yl.copy(i).sub(e).normalize(),Da.copy(this.origin).sub(Yf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(Yl),d=Da.dot(this.direction),m=-Da.dot(Yl),p=Da.lengthSq(),g=Math.abs(1-h*h);let x,v,M,R;if(g>0)if(x=h*m-d,v=h*d-m,R=u*g,x>=0)if(v>=-R)if(v<=R){const w=1/g;x*=w,v*=w,M=x*(x+h*v+2*d)+v*(h*x+v+2*m)+p}else v=u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;else v=-u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;else v<=-R?(x=Math.max(0,-(-h*u+d)),v=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+v*(v+2*m)+p):v<=R?(x=0,v=Math.min(Math.max(-u,-m),u),M=v*(v+2*m)+p):(x=Math.max(0,-(h*u+d)),v=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+v*(v+2*m)+p);else v=h>0?-u:u,x=Math.max(0,-(h*v+d)),M=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Yf).addScaledVector(Yl,v),M}intersectSphere(e,i){Yi.subVectors(e.center,this.origin);const r=Yi.dot(this.direction),l=Yi.dot(Yi)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),g>=0?(u=(e.min.y-v.y)*g,h=(e.max.y-v.y)*g):(u=(e.max.y-v.y)*g,h=(e.min.y-v.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-v.z)*x,m=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,m=(e.min.z-v.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,i,r,l,u){jf.subVectors(i,e),jl.subVectors(r,e),Zf.crossVectors(jf,jl);let h=this.direction.dot(Zf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Da.subVectors(this.origin,e);const m=d*this.direction.dot(jl.crossVectors(Da,jl));if(m<0)return null;const p=d*this.direction.dot(jf.cross(Da));if(p<0||m+p>h)return null;const g=-d*Da.dot(Zf);return g<0?null:this.at(g/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,i,r,l,u,h,d,m,p,g,x,v,M,R,w,y){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,g,x,v,M,R,w,y)}set(e,i,r,l,u,h,d,m,p,g,x,v,M,R,w,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=M,_[7]=R,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/as.setFromMatrixColumn(e,0).length(),u=1/as.setFromMatrixColumn(e,1).length(),h=1/as.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const v=h*g,M=h*x,R=d*g,w=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+R*p,i[5]=v-w*p,i[9]=-d*m,i[2]=w-v*p,i[6]=R+M*p,i[10]=h*m}else if(e.order==="YXZ"){const v=m*g,M=m*x,R=p*g,w=p*x;i[0]=v+w*d,i[4]=R*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=M*d-R,i[6]=w+v*d,i[10]=h*m}else if(e.order==="ZXY"){const v=m*g,M=m*x,R=p*g,w=p*x;i[0]=v-w*d,i[4]=-h*x,i[8]=R+M*d,i[1]=M+R*d,i[5]=h*g,i[9]=w-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const v=h*g,M=h*x,R=d*g,w=d*x;i[0]=m*g,i[4]=R*p-M,i[8]=v*p+w,i[1]=m*x,i[5]=w*p+v,i[9]=M*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const v=h*m,M=h*p,R=d*m,w=d*p;i[0]=m*g,i[4]=w-v*x,i[8]=R*x+M,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*x+R,i[10]=v-w*x}else if(e.order==="XZY"){const v=h*m,M=h*p,R=d*m,w=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=v*x+w,i[5]=h*g,i[9]=M*x-R,i[2]=R*x-M,i[6]=d*g,i[10]=w*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FS,e,IS)}lookAt(e,i,r){const l=this.elements;return qn.subVectors(e,i),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Ua.crossVectors(r,qn),Ua.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Ua.crossVectors(r,qn)),Ua.normalize(),Zl.crossVectors(qn,Ua),l[0]=Ua.x,l[4]=Zl.x,l[8]=qn.x,l[1]=Ua.y,l[5]=Zl.y,l[9]=qn.y,l[2]=Ua.z,l[6]=Zl.z,l[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],v=r[9],M=r[13],R=r[2],w=r[6],y=r[10],_=r[14],P=r[3],O=r[7],U=r[11],H=r[15],I=l[0],F=l[4],Q=l[8],C=l[12],b=l[1],z=l[5],lt=l[9],at=l[13],ht=l[2],ft=l[6],V=l[10],rt=l[14],Y=l[3],xt=l[7],D=l[11],J=l[15];return u[0]=h*I+d*b+m*ht+p*Y,u[4]=h*F+d*z+m*ft+p*xt,u[8]=h*Q+d*lt+m*V+p*D,u[12]=h*C+d*at+m*rt+p*J,u[1]=g*I+x*b+v*ht+M*Y,u[5]=g*F+x*z+v*ft+M*xt,u[9]=g*Q+x*lt+v*V+M*D,u[13]=g*C+x*at+v*rt+M*J,u[2]=R*I+w*b+y*ht+_*Y,u[6]=R*F+w*z+y*ft+_*xt,u[10]=R*Q+w*lt+y*V+_*D,u[14]=R*C+w*at+y*rt+_*J,u[3]=P*I+O*b+U*ht+H*Y,u[7]=P*F+O*z+U*ft+H*xt,u[11]=P*Q+O*lt+U*V+H*D,u[15]=P*C+O*at+U*rt+H*J,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],g=e[2],x=e[6],v=e[10],M=e[14],R=e[3],w=e[7],y=e[11],_=e[15];return R*(+u*m*x-l*p*x-u*d*v+r*p*v+l*d*M-r*m*M)+w*(+i*m*M-i*p*v+u*h*v-l*h*M+l*p*g-u*m*g)+y*(+i*p*x-i*d*M-u*h*x+r*h*M+u*d*g-r*p*g)+_*(-l*d*g-i*m*x+i*d*v+l*h*x-r*h*v+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],g=e[8],x=e[9],v=e[10],M=e[11],R=e[12],w=e[13],y=e[14],_=e[15],P=x*y*p-w*v*p+w*m*M-d*y*M-x*m*_+d*v*_,O=R*v*p-g*y*p-R*m*M+h*y*M+g*m*_-h*v*_,U=g*w*p-R*x*p+R*d*M-h*w*M-g*d*_+h*x*_,H=R*x*m-g*w*m-R*d*v+h*w*v+g*d*y-h*x*y,I=i*P+r*O+l*U+u*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=P*F,e[1]=(w*v*u-x*y*u-w*l*M+r*y*M+x*l*_-r*v*_)*F,e[2]=(d*y*u-w*m*u+w*l*p-r*y*p-d*l*_+r*m*_)*F,e[3]=(x*m*u-d*v*u-x*l*p+r*v*p+d*l*M-r*m*M)*F,e[4]=O*F,e[5]=(g*y*u-R*v*u+R*l*M-i*y*M-g*l*_+i*v*_)*F,e[6]=(R*m*u-h*y*u-R*l*p+i*y*p+h*l*_-i*m*_)*F,e[7]=(h*v*u-g*m*u+g*l*p-i*v*p-h*l*M+i*m*M)*F,e[8]=U*F,e[9]=(R*x*u-g*w*u-R*r*M+i*w*M+g*r*_-i*x*_)*F,e[10]=(h*w*u-R*d*u+R*r*p-i*w*p-h*r*_+i*d*_)*F,e[11]=(g*d*u-h*x*u-g*r*p+i*x*p+h*r*M-i*d*M)*F,e[12]=H*F,e[13]=(g*w*l-R*x*l+R*r*v-i*w*v-g*r*y+i*x*y)*F,e[14]=(R*d*l-h*w*l-R*r*m+i*w*m+h*r*y-i*d*y)*F,e[15]=(h*x*l-g*d*l+g*r*m-i*x*m-h*r*v+i*d*v)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,v=u*p,M=u*g,R=u*x,w=h*g,y=h*x,_=d*x,P=m*p,O=m*g,U=m*x,H=r.x,I=r.y,F=r.z;return l[0]=(1-(w+_))*H,l[1]=(M+U)*H,l[2]=(R-O)*H,l[3]=0,l[4]=(M-U)*I,l[5]=(1-(v+_))*I,l[6]=(y+P)*I,l[7]=0,l[8]=(R+O)*F,l[9]=(y-P)*F,l[10]=(1-(v+w))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=as.set(l[0],l[1],l[2]).length();const h=as.set(l[4],l[5],l[6]).length(),d=as.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],di.copy(this);const p=1/u,g=1/h,x=1/d;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=x,di.elements[9]*=x,di.elements[10]*=x,i.setFromRotationMatrix(di),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=ta){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),x=(i+e)/(i-e),v=(r+l)/(r-l);let M,R;if(d===ta)M=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===Sc)M=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=ta){const m=this.elements,p=1/(i-e),g=1/(r-l),x=1/(h-u),v=(i+e)*p,M=(r+l)*g;let R,w;if(d===ta)R=(h+u)*x,w=-2*x;else if(d===Sc)R=u*x,w=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=w,m[14]=-R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const as=new st,di=new Ze,FS=new st(0,0,0),IS=new st(1,1,1),Ua=new st,Zl=new st,qn=new st,Qg=new Ze,Jg=new Lo;class ra{constructor(e=0,i=0,r=0,l=ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-xe(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Qg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qg,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ra.DEFAULT_ORDER="XYZ";class r0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HS=0;const $g=new st,rs=new Lo,ji=new Ze,Kl=new st,Ro=new st,GS=new st,VS=new Lo,t_=new st(1,0,0),e_=new st(0,1,0),n_=new st(0,0,1),i_={type:"added"},kS={type:"removed"},ss={type:"childadded",child:null},Kf={type:"childremoved",child:null};class In extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new st,i=new ra,r=new Lo,l=new st(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new le}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return rs.setFromAxisAngle(e,i),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,i){return rs.setFromAxisAngle(e,i),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(t_,e)}rotateY(e){return this.rotateOnAxis(e_,e)}rotateZ(e){return this.rotateOnAxis(n_,e)}translateOnAxis(e,i){return $g.copy(e).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(t_,e)}translateY(e){return this.translateOnAxis(e_,e)}translateZ(e){return this.translateOnAxis(n_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Kl.copy(e):Kl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Ro,Kl,this.up):ji.lookAt(Kl,Ro,this.up),this.quaternion.setFromRotationMatrix(ji),l&&(ji.extractRotation(l.matrixWorld),rs.setFromRotationMatrix(ji),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i_),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(kS),Kf.child=e,this.dispatchEvent(Kf),Kf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i_),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,GS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,VS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),g=h(e.images),x=h(e.shapes),v=h(e.skeletons),M=h(e.animations),R=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),R.length>0&&(r.nodes=R)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}In.DEFAULT_UP=new st(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new st,Zi=new st,Qf=new st,Ki=new st,os=new st,ls=new st,a_=new st,Jf=new st,$f=new st,th=new st,eh=new je,nh=new je,ih=new je;class mi{constructor(e=new st,i=new st,r=new st){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),pi.subVectors(e,i),l.cross(pi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){pi.subVectors(l,i),Zi.subVectors(r,i),Qf.subVectors(e,i);const h=pi.dot(pi),d=pi.dot(Zi),m=pi.dot(Qf),p=Zi.dot(Zi),g=Zi.dot(Qf),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,M=(p*m-d*g)*v,R=(h*g-d*m)*v;return u.set(1-M-R,R,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,Ki)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ki.x),m.addScaledVector(h,Ki.y),m.addScaledVector(d,Ki.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(e,i),nh.fromBufferAttribute(e,r),ih.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(eh,u.x),h.addScaledVector(nh,u.y),h.addScaledVector(ih,u.z),h}static isFrontFacing(e,i,r,l){return pi.subVectors(r,i),Zi.subVectors(e,i),pi.cross(Zi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),pi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;os.subVectors(l,r),ls.subVectors(u,r),Jf.subVectors(e,r);const m=os.dot(Jf),p=ls.dot(Jf);if(m<=0&&p<=0)return i.copy(r);$f.subVectors(e,l);const g=os.dot($f),x=ls.dot($f);if(g>=0&&x<=g)return i.copy(l);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(os,h);th.subVectors(e,u);const M=os.dot(th),R=ls.dot(th);if(R>=0&&M<=R)return i.copy(u);const w=M*p-m*R;if(w<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(r).addScaledVector(ls,d);const y=g*R-M*x;if(y<=0&&x-g>=0&&M-R>=0)return a_.subVectors(u,l),d=(x-g)/(x-g+(M-R)),i.copy(l).addScaledVector(a_,d);const _=1/(y+w+v);return h=w*_,d=v*_,i.copy(r).addScaledVector(os,h).addScaledVector(ls,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const s0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function ah(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class we{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ae.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ae.workingColorSpace){if(e=AS(e,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=ah(h,u,e+1/3),this.g=ah(h,u,e),this.b=ah(h,u,e-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(e,i=ri){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const r=s0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Ae.fromWorkingColorSpace(En.copy(this),e),Math.round(xe(En.r*255,0,255))*65536+Math.round(xe(En.g*255,0,255))*256+Math.round(xe(En.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(En.copy(this),i);const r=En.r,l=En.g,u=En.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(En.copy(this),i),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=ri){Ae.fromWorkingColorSpace(En.copy(this),e);const i=En.r,r=En.g,l=En.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Na),this.setHSL(Na.h+e,Na.s+i,Na.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Na),e.getHSL(Ql);const r=Gf(Na.h,Ql.h,i),l=Gf(Na.s,Ql.s,i),u=Gf(Na.l,Ql.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new we;we.NAMES=s0;let XS=0;class Po extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=No(),this.name="",this.type="Material",this.blending=ms,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mh,this.blendDst=gh,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==mh&&(r.blendSrc=this.blendSrc),this.blendDst!==gh&&(r.blendDst=this.blendDst),this.blendEquation!==pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(r.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class o0 extends Po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=V_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new st,Jl=new ze;let WS=0;class xi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WS++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Wg,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Jl.fromBufferAttribute(this,i),Jl.applyMatrix3(e),this.setXY(i,Jl.x,Jl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix3(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix4(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyNormalMatrix(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.transformDirection(e),this.setXYZ(i,$e.x,$e.y,$e.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=bo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=bo(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=bo(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=bo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=bo(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),u=zn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wg&&(e.usage=this.usage),e}}class l0 extends xi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class c0 extends xi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class vr extends xi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let qS=0;const ai=new Ze,rh=new In,cs=new st,Yn=new Oo,Co=new Oo,dn=new st;class sa extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e0(e)?c0:l0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new le().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,i,r){return ai.makeTranslation(e,i,r),this.applyMatrix4(ai),this}scale(e,i,r){return ai.makeScale(e,i,r),this.applyMatrix4(ai),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Yn.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Co.setFromBufferAttribute(d),this.morphTargetsRelative?(dn.addVectors(Yn.min,Co.min),Yn.expandByPoint(dn),dn.addVectors(Yn.max,Co.max),Yn.expandByPoint(dn)):(Yn.expandByPoint(Co.min),Yn.expandByPoint(Co.max))}Yn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)dn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(dn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)dn.fromBufferAttribute(d,p),m&&(cs.fromBufferAttribute(e,p),dn.add(cs)),l=Math.max(l,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<r.count;Q++)d[Q]=new st,m[Q]=new st;const p=new st,g=new st,x=new st,v=new ze,M=new ze,R=new ze,w=new st,y=new st;function _(Q,C,b){p.fromBufferAttribute(r,Q),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,b),v.fromBufferAttribute(u,Q),M.fromBufferAttribute(u,C),R.fromBufferAttribute(u,b),g.sub(p),x.sub(p),M.sub(v),R.sub(v);const z=1/(M.x*R.y-R.x*M.y);isFinite(z)&&(w.copy(g).multiplyScalar(R.y).addScaledVector(x,-M.y).multiplyScalar(z),y.copy(x).multiplyScalar(M.x).addScaledVector(g,-R.x).multiplyScalar(z),d[Q].add(w),d[C].add(w),d[b].add(w),m[Q].add(y),m[C].add(y),m[b].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let Q=0,C=P.length;Q<C;++Q){const b=P[Q],z=b.start,lt=b.count;for(let at=z,ht=z+lt;at<ht;at+=3)_(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const O=new st,U=new st,H=new st,I=new st;function F(Q){H.fromBufferAttribute(l,Q),I.copy(H);const C=d[Q];O.copy(C),O.sub(H.multiplyScalar(H.dot(C))).normalize(),U.crossVectors(I,C);const z=U.dot(m[Q])<0?-1:1;h.setXYZW(Q,O.x,O.y,O.z,z)}for(let Q=0,C=P.length;Q<C;++Q){const b=P[Q],z=b.start,lt=b.count;for(let at=z,ht=z+lt;at<ht;at+=3)F(e.getX(at+0)),F(e.getX(at+1)),F(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,M=r.count;v<M;v++)r.setXYZ(v,0,0,0);const l=new st,u=new st,h=new st,d=new st,m=new st,p=new st,g=new st,x=new st;if(e)for(let v=0,M=e.count;v<M;v+=3){const R=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),d.add(g),m.add(g),p.add(g),r.setXYZ(R,d.x,d.y,d.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)dn.fromBufferAttribute(e,i),dn.normalize(),e.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,x=d.normalized,v=new p.constructor(m.length*g);let M=0,R=0;for(let w=0,y=m.length;w<y;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*g;for(let _=0;_<g;_++)v[R++]=p[M++]}return new xi(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new sa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const v=p[g],M=e(v,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const M=p[x];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],x=u[p];for(let v=0,M=x.length;v<M;v++)g.push(x[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r_=new Ze,lr=new a0,$l=new Tc,s_=new st,tc=new st,ec=new st,nc=new st,sh=new st,ic=new st,o_=new st,ac=new st;class ea extends In{constructor(e=new sa,i=new o0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){ic.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(sh.fromBufferAttribute(x,e),h?ic.addScaledVector(sh,g):ic.addScaledVector(sh.sub(i),g))}i.add(ic)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),$l.copy(r.boundingSphere),$l.applyMatrix4(u),lr.copy(e.ray).recast(e.near),!($l.containsPoint(lr.origin)===!1&&(lr.intersectSphere($l,s_)===null||lr.origin.distanceToSquared(s_)>(e.far-e.near)**2))&&(r_.copy(u).invert(),lr.copy(e.ray).applyMatrix4(r_),!(r.boundingBox!==null&&lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,lr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,v=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,w=v.length;R<w;R++){const y=v[R],_=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=P,H=O;U<H;U+=3){const I=d.getX(U),F=d.getX(U+1),Q=d.getX(U+2);l=rc(this,_,e,r,p,g,x,I,F,Q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=R,_=w;y<_;y+=3){const P=d.getX(y),O=d.getX(y+1),U=d.getX(y+2);l=rc(this,h,e,r,p,g,x,P,O,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,w=v.length;R<w;R++){const y=v[R],_=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=P,H=O;U<H;U+=3){const I=U,F=U+1,Q=U+2;l=rc(this,_,e,r,p,g,x,I,F,Q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=R,_=w;y<_;y+=3){const P=y,O=y+1,U=y+2;l=rc(this,h,e,r,p,g,x,P,O,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function YS(s,e,i,r,l,u,h,d){let m;if(e.side===Bn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Fa,d),m===null)return null;ac.copy(d),ac.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(ac);return p<i.near||p>i.far?null:{distance:p,point:ac.clone(),object:s}}function rc(s,e,i,r,l,u,h,d,m,p){s.getVertexPosition(d,tc),s.getVertexPosition(m,ec),s.getVertexPosition(p,nc);const g=YS(s,e,i,r,tc,ec,nc,o_);if(g){const x=new st;mi.getBarycoord(o_,tc,ec,nc,x),l&&(g.uv=mi.getInterpolatedAttribute(l,d,m,p,x,new ze)),u&&(g.uv1=mi.getInterpolatedAttribute(u,d,m,p,x,new ze)),h&&(g.normal=mi.getInterpolatedAttribute(h,d,m,p,x,new st),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new st,materialIndex:0};mi.getNormal(tc,ec,nc,v.normal),g.face=v,g.barycoord=x}return g}class zo extends sa{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let v=0,M=0;R("z","y","x",-1,-1,r,i,e,h,u,0),R("z","y","x",1,-1,r,i,-e,h,u,1),R("x","z","y",1,1,e,r,i,l,h,2),R("x","z","y",1,-1,e,r,-i,l,h,3),R("x","y","z",1,-1,e,i,r,l,u,4),R("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new vr(p,3)),this.setAttribute("normal",new vr(g,3)),this.setAttribute("uv",new vr(x,2));function R(w,y,_,P,O,U,H,I,F,Q,C){const b=U/F,z=H/Q,lt=U/2,at=H/2,ht=I/2,ft=F+1,V=Q+1;let rt=0,Y=0;const xt=new st;for(let D=0;D<V;D++){const J=D*z-at;for(let yt=0;yt<ft;yt++){const bt=yt*b-lt;xt[w]=bt*P,xt[y]=J*O,xt[_]=ht,p.push(xt.x,xt.y,xt.z),xt[w]=0,xt[y]=0,xt[_]=I>0?1:-1,g.push(xt.x,xt.y,xt.z),x.push(yt/F),x.push(1-D/Q),rt+=1}}for(let D=0;D<Q;D++)for(let J=0;J<F;J++){const yt=v+J+ft*D,bt=v+J+ft*(D+1),X=v+(J+1)+ft*(D+1),mt=v+(J+1)+ft*D;m.push(yt,bt,mt),m.push(bt,X,mt),Y+=6}d.addGroup(M,Y,C),M+=Y,v+=rt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Dn(s){const e={};for(let i=0;i<s.length;i++){const r=bs(s[i]);for(const l in r)e[l]=r[l]}return e}function jS(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function u0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const ZS={clone:bs,merge:Dn};var KS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends Po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=KS,this.fragmentShader=QS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=jS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class f0 extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=ta}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const La=new st,l_=new ze,c_=new ze;class si extends f0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=td*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return td*2*Math.atan(Math.tan(Hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){La.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(La.x,La.y).multiplyScalar(-e/La.z),La.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(La.x,La.y).multiplyScalar(-e/La.z)}getViewSize(e,i){return this.getViewBounds(e,l_,c_),i.subVectors(c_,l_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Hf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const us=-90,fs=1;class JS extends In{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(us,fs,e,i);l.layers=this.layers,this.add(l);const u=new si(us,fs,e,i);u.layers=this.layers,this.add(u);const h=new si(us,fs,e,i);h.layers=this.layers,this.add(h);const d=new si(us,fs,e,i);d.layers=this.layers,this.add(d);const m=new si(us,fs,e,i);m.layers=this.layers,this.add(m);const p=new si(us,fs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===ta)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Sc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(x,v,M),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class h0 extends Fn{constructor(e,i,r,l,u,h,d,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:xs,super(e,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $S extends Sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new h0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ci}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new zo(5,5,5),u=new Ia({name:"CubemapFromEquirect",uniforms:bs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Pa});u.uniforms.tEquirect.value=i;const h=new ea(l,u),d=i.minFilter;return i.minFilter===_r&&(i.minFilter=Ci),new JS(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class sc extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ty={type:"move"};class oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,r),_=this._getHandJoint(p,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),M=.02,R=.005;p.inputState.pinching&&v>M+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=M-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ty)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new sc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class ey extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const lh=new st,ny=new st,iy=new le;class hr{constructor(e=new st(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=lh.subVectors(r,i).cross(ny.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(lh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||iy.getNormalMatrix(e),l=this.coplanarPoint(lh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Tc,oc=new st;class d0{constructor(e=new hr,i=new hr,r=new hr,l=new hr,u=new hr,h=new hr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ta){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],x=l[6],v=l[7],M=l[8],R=l[9],w=l[10],y=l[11],_=l[12],P=l[13],O=l[14],U=l[15];if(r[0].setComponents(m-u,v-p,y-M,U-_).normalize(),r[1].setComponents(m+u,v+p,y+M,U+_).normalize(),r[2].setComponents(m+h,v+g,y+R,U+P).normalize(),r[3].setComponents(m-h,v-g,y-R,U-P).normalize(),r[4].setComponents(m-d,v-x,y-w,U-O).normalize(),i===ta)r[5].setComponents(m+d,v+x,y+w,U+O).normalize();else if(i===Sc)r[5].setComponents(d,x,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(oc.x=l.normal.x>0?e.max.x:e.min.x,oc.y=l.normal.y>0?e.max.y:e.min.y,oc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class p0 extends Po{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const u_=new Ze,ed=new a0,lc=new Tc,cc=new st;class ay extends In{constructor(e=new sa,i=new p0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(l),lc.radius+=u,e.ray.intersectsSphere(lc)===!1)return;u_.copy(l).invert(),ed.copy(e.ray).applyMatrix4(u_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,x=r.attributes.position;if(p!==null){const v=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let R=v,w=M;R<w;R++){const y=p.getX(R);cc.fromBufferAttribute(x,y),f_(cc,y,m,l,e,i,this)}}else{const v=Math.max(0,h.start),M=Math.min(x.count,h.start+h.count);for(let R=v,w=M;R<w;R++)cc.fromBufferAttribute(x,R),f_(cc,R,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function f_(s,e,i,r,l,u,h){const d=ed.distanceSqToPoint(s);if(d<i){const m=new st;ed.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class m0 extends Fn{constructor(e,i,r,l,u,h,d,m,p,g=gs){if(g!==gs&&g!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===gs&&(r=xr),r===void 0&&g===Ms&&(r=ys),super(null,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:vi,this.minFilter=m!==void 0?m:vi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ac extends sa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=e/d,v=i/m,M=[],R=[],w=[],y=[];for(let _=0;_<g;_++){const P=_*v-h;for(let O=0;O<p;O++){const U=O*x-u;R.push(U,-P,0),w.push(0,0,1),y.push(O/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<d;P++){const O=P+p*_,U=P+p*(_+1),H=P+1+p*(_+1),I=P+1+p*_;M.push(O,U,I),M.push(U,H,I)}this.setIndex(M),this.setAttribute("position",new vr(R,3)),this.setAttribute("normal",new vr(w,3)),this.setAttribute("uv",new vr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.widthSegments,e.heightSegments)}}class ry extends Po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sy extends Po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class oy extends f0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ly extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function h_(s,e,i,r){const l=cy(r);switch(i){case Y_:return s*e;case Z_:return s*e;case K_:return s*e*2;case Q_:return s*e/l.components*l.byteLength;case cd:return s*e/l.components*l.byteLength;case J_:return s*e*2/l.components*l.byteLength;case ud:return s*e*2/l.components*l.byteLength;case j_:return s*e*3/l.components*l.byteLength;case _i:return s*e*4/l.components*l.byteLength;case fd:return s*e*4/l.components*l.byteLength;case dc:case pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wh:case Uh:return Math.max(s,16)*Math.max(e,8)/4;case Ch:case Dh:return Math.max(s,8)*Math.max(e,8)/2;case Nh:case Lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _c:case Zh:case Kh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $_:case Qh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jh:case $h:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cy(s){switch(s){case aa:case X_:return{byteLength:1,components:1};case Do:case W_:case Uo:return{byteLength:2,components:1};case od:case ld:return{byteLength:2,components:4};case xr:case sd:case $i:return{byteLength:4,components:1};case q_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function g0(){let s=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function uy(s){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((M,R)=>M.start-R.start);let v=0;for(let M=1;M<x.length;M++){const R=x[v],w=x[M];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++v,x[v]=w)}x.length=v+1;for(let M=0,R=x.length;M<R;M++){const w=x[M];s.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,my=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_y=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,My=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ey=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,by=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ty=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Oy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Py=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$M=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_E=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:fy,alphahash_pars_fragment:hy,alphamap_fragment:dy,alphamap_pars_fragment:py,alphatest_fragment:my,alphatest_pars_fragment:gy,aomap_fragment:_y,aomap_pars_fragment:vy,batching_pars_vertex:xy,batching_vertex:Sy,begin_vertex:yy,beginnormal_vertex:My,bsdfs:Ey,iridescence_fragment:by,bumpmap_pars_fragment:Ty,clipping_planes_fragment:Ay,clipping_planes_pars_fragment:Ry,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:wy,color_fragment:Dy,color_pars_fragment:Uy,color_pars_vertex:Ny,color_vertex:Ly,common:Oy,cube_uv_reflection_fragment:Py,defaultnormal_vertex:zy,displacementmap_pars_vertex:By,displacementmap_vertex:Fy,emissivemap_fragment:Iy,emissivemap_pars_fragment:Hy,colorspace_fragment:Gy,colorspace_pars_fragment:Vy,envmap_fragment:ky,envmap_common_pars_fragment:Xy,envmap_pars_fragment:Wy,envmap_pars_vertex:qy,envmap_physical_pars_fragment:iM,envmap_vertex:Yy,fog_vertex:jy,fog_pars_vertex:Zy,fog_fragment:Ky,fog_pars_fragment:Qy,gradientmap_pars_fragment:Jy,lightmap_pars_fragment:$y,lights_lambert_fragment:tM,lights_lambert_pars_fragment:eM,lights_pars_begin:nM,lights_toon_fragment:aM,lights_toon_pars_fragment:rM,lights_phong_fragment:sM,lights_phong_pars_fragment:oM,lights_physical_fragment:lM,lights_physical_pars_fragment:cM,lights_fragment_begin:uM,lights_fragment_maps:fM,lights_fragment_end:hM,logdepthbuf_fragment:dM,logdepthbuf_pars_fragment:pM,logdepthbuf_pars_vertex:mM,logdepthbuf_vertex:gM,map_fragment:_M,map_pars_fragment:vM,map_particle_fragment:xM,map_particle_pars_fragment:SM,metalnessmap_fragment:yM,metalnessmap_pars_fragment:MM,morphinstance_vertex:EM,morphcolor_vertex:bM,morphnormal_vertex:TM,morphtarget_pars_vertex:AM,morphtarget_vertex:RM,normal_fragment_begin:CM,normal_fragment_maps:wM,normal_pars_fragment:DM,normal_pars_vertex:UM,normal_vertex:NM,normalmap_pars_fragment:LM,clearcoat_normal_fragment_begin:OM,clearcoat_normal_fragment_maps:PM,clearcoat_pars_fragment:zM,iridescence_pars_fragment:BM,opaque_fragment:FM,packing:IM,premultiplied_alpha_fragment:HM,project_vertex:GM,dithering_fragment:VM,dithering_pars_fragment:kM,roughnessmap_fragment:XM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:qM,shadowmap_pars_vertex:YM,shadowmap_vertex:jM,shadowmask_pars_fragment:ZM,skinbase_vertex:KM,skinning_pars_vertex:QM,skinning_vertex:JM,skinnormal_vertex:$M,specularmap_fragment:tE,specularmap_pars_fragment:eE,tonemapping_fragment:nE,tonemapping_pars_fragment:iE,transmission_fragment:aE,transmission_pars_fragment:rE,uv_pars_fragment:sE,uv_pars_vertex:oE,uv_vertex:lE,worldpos_vertex:cE,background_vert:uE,background_frag:fE,backgroundCube_vert:hE,backgroundCube_frag:dE,cube_vert:pE,cube_frag:mE,depth_vert:gE,depth_frag:_E,distanceRGBA_vert:vE,distanceRGBA_frag:xE,equirect_vert:SE,equirect_frag:yE,linedashed_vert:ME,linedashed_frag:EE,meshbasic_vert:bE,meshbasic_frag:TE,meshlambert_vert:AE,meshlambert_frag:RE,meshmatcap_vert:CE,meshmatcap_frag:wE,meshnormal_vert:DE,meshnormal_frag:UE,meshphong_vert:NE,meshphong_frag:LE,meshphysical_vert:OE,meshphysical_frag:PE,meshtoon_vert:zE,meshtoon_frag:BE,points_vert:FE,points_frag:IE,shadow_vert:HE,shadow_frag:GE,sprite_vert:VE,sprite_frag:kE},Nt={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ai={basic:{uniforms:Dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Dn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Dn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Dn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new we(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Dn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Dn([Nt.points,Nt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Dn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Dn([Nt.common,Nt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Dn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Dn([Nt.sprite,Nt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Dn([Nt.common,Nt.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Dn([Nt.lights,Nt.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ai.physical={uniforms:Dn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const uc={r:0,b:0,g:0},ur=new ra,XE=new Ze;function WE(s,e,i,r,l,u,h){const d=new we(0);let m=u===!0?0:1,p,g,x=null,v=0,M=null;function R(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function w(O){let U=!1;const H=R(O);H===null?_(d,m):H&&H.isColor&&(_(H,1),U=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(O,U){const H=R(U);H&&(H.isCubeTexture||H.mapping===bc)?(g===void 0&&(g=new ea(new zo(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:bs(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,F,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ur.copy(U.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(XE.makeRotationFromEuler(ur)),g.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Oe,(x!==H||v!==H.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,x=H,v=H.version,M=s.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new ea(new Ac(2,2),new Ia({name:"BackgroundMaterial",uniforms:bs(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Oe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(x!==H||v!==H.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,x=H,v=H.version,M=s.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,U){O.getRGB(uc,u0(s)),r.buffers.color.setClear(uc.r,uc.g,uc.b,U,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,U=1){d.set(O),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:w,addToRenderList:y,dispose:P}}function qE(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,h=!1;function d(b,z,lt,at,ht){let ft=!1;const V=x(at,lt,z);u!==V&&(u=V,p(u.object)),ft=M(b,at,lt,ht),ft&&R(b,at,lt,ht),ht!==null&&e.update(ht,s.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,U(b,z,lt,at),ht!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function m(){return s.createVertexArray()}function p(b){return s.bindVertexArray(b)}function g(b){return s.deleteVertexArray(b)}function x(b,z,lt){const at=lt.wireframe===!0;let ht=r[b.id];ht===void 0&&(ht={},r[b.id]=ht);let ft=ht[z.id];ft===void 0&&(ft={},ht[z.id]=ft);let V=ft[at];return V===void 0&&(V=v(m()),ft[at]=V),V}function v(b){const z=[],lt=[],at=[];for(let ht=0;ht<i;ht++)z[ht]=0,lt[ht]=0,at[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:lt,attributeDivisors:at,object:b,attributes:{},index:null}}function M(b,z,lt,at){const ht=u.attributes,ft=z.attributes;let V=0;const rt=lt.getAttributes();for(const Y in rt)if(rt[Y].location>=0){const D=ht[Y];let J=ft[Y];if(J===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(J=b.instanceColor)),D===void 0||D.attribute!==J||J&&D.data!==J.data)return!0;V++}return u.attributesNum!==V||u.index!==at}function R(b,z,lt,at){const ht={},ft=z.attributes;let V=0;const rt=lt.getAttributes();for(const Y in rt)if(rt[Y].location>=0){let D=ft[Y];D===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(D=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(D=b.instanceColor));const J={};J.attribute=D,D&&D.data&&(J.data=D.data),ht[Y]=J,V++}u.attributes=ht,u.attributesNum=V,u.index=at}function w(){const b=u.newAttributes;for(let z=0,lt=b.length;z<lt;z++)b[z]=0}function y(b){_(b,0)}function _(b,z){const lt=u.newAttributes,at=u.enabledAttributes,ht=u.attributeDivisors;lt[b]=1,at[b]===0&&(s.enableVertexAttribArray(b),at[b]=1),ht[b]!==z&&(s.vertexAttribDivisor(b,z),ht[b]=z)}function P(){const b=u.newAttributes,z=u.enabledAttributes;for(let lt=0,at=z.length;lt<at;lt++)z[lt]!==b[lt]&&(s.disableVertexAttribArray(lt),z[lt]=0)}function O(b,z,lt,at,ht,ft,V){V===!0?s.vertexAttribIPointer(b,z,lt,ht,ft):s.vertexAttribPointer(b,z,lt,at,ht,ft)}function U(b,z,lt,at){w();const ht=at.attributes,ft=lt.getAttributes(),V=z.defaultAttributeValues;for(const rt in ft){const Y=ft[rt];if(Y.location>=0){let xt=ht[rt];if(xt===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(xt=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(xt=b.instanceColor)),xt!==void 0){const D=xt.normalized,J=xt.itemSize,yt=e.get(xt);if(yt===void 0)continue;const bt=yt.buffer,X=yt.type,mt=yt.bytesPerElement,Mt=X===s.INT||X===s.UNSIGNED_INT||xt.gpuType===sd;if(xt.isInterleavedBufferAttribute){const At=xt.data,Ct=At.stride,Qt=xt.offset;if(At.isInstancedInterleavedBuffer){for(let zt=0;zt<Y.locationSize;zt++)_(Y.location+zt,At.meshPerAttribute);b.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let zt=0;zt<Y.locationSize;zt++)y(Y.location+zt);s.bindBuffer(s.ARRAY_BUFFER,bt);for(let zt=0;zt<Y.locationSize;zt++)O(Y.location+zt,J/Y.locationSize,X,D,Ct*mt,(Qt+J/Y.locationSize*zt)*mt,Mt)}else{if(xt.isInstancedBufferAttribute){for(let At=0;At<Y.locationSize;At++)_(Y.location+At,xt.meshPerAttribute);b.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let At=0;At<Y.locationSize;At++)y(Y.location+At);s.bindBuffer(s.ARRAY_BUFFER,bt);for(let At=0;At<Y.locationSize;At++)O(Y.location+At,J/Y.locationSize,X,D,J*mt,J/Y.locationSize*At*mt,Mt)}}else if(V!==void 0){const D=V[rt];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(Y.location,D);break;case 3:s.vertexAttrib3fv(Y.location,D);break;case 4:s.vertexAttrib4fv(Y.location,D);break;default:s.vertexAttrib1fv(Y.location,D)}}}}P()}function H(){Q();for(const b in r){const z=r[b];for(const lt in z){const at=z[lt];for(const ht in at)g(at[ht].object),delete at[ht];delete z[lt]}delete r[b]}}function I(b){if(r[b.id]===void 0)return;const z=r[b.id];for(const lt in z){const at=z[lt];for(const ht in at)g(at[ht].object),delete at[ht];delete z[lt]}delete r[b.id]}function F(b){for(const z in r){const lt=r[z];if(lt[b.id]===void 0)continue;const at=lt[b.id];for(const ht in at)g(at[ht].object),delete at[ht];delete lt[b.id]}}function Q(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function YE(s,e,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function d(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let M=0;for(let R=0;R<x;R++)M+=g[R];i.update(M,r,1)}function m(p,g,x,v){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let R=0;R<p.length;R++)h(p[R],g[R],v[R]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,x);let R=0;for(let w=0;w<x;w++)R+=g[w]*v[w];i.update(R,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function jE(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==_i&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const Q=F===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==aa&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==$i&&!Q)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=R>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:M,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:H,maxSamples:I}}function ZE(s){const e=this;let i=null,r=0,l=!1,u=!1;const h=new hr,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||r!==0||l;return l=v,r=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,M){const R=x.clippingPlanes,w=x.clipIntersection,y=x.clipShadows,_=s.get(x);if(!l||R===null||R.length===0||u&&!y)u?g(null):p();else{const P=u?0:r,O=P*4;let U=_.clippingState||null;m.value=U,U=g(R,v,O,M);for(let H=0;H!==O;++H)U[H]=i[H];_.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,v,M,R){const w=x!==null?x.length:0;let y=null;if(w!==0){if(y=m.value,R!==!0||y===null){const _=M+w*4,P=v.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<_)&&(y=new Float32Array(_));for(let O=0,U=M;O!==w;++O,U+=4)h.copy(x[O]).applyMatrix4(P,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function KE(s){let e=new WeakMap;function i(h,d){return d===bh?h.mapping=xs:d===Th&&(h.mapping=Ss),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===bh||d===Th)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new $S(m.height);return p.fromEquirectangularTexture(s,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ps=4,d_=[.125,.215,.35,.446,.526,.582],mr=20,ch=new oy,p_=new we;let uh=null,fh=0,hh=0,dh=!1;const dr=(1+Math.sqrt(5))/2,hs=1/dr,m_=[new st(-dr,hs,0),new st(dr,hs,0),new st(-hs,0,dr),new st(hs,0,dr),new st(0,dr,-hs),new st(0,dr,hs),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)];class g_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uh,fh,hh),this._renderer.xr.enabled=dh,e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===xs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Uo,format:_i,colorSpace:Es,depthBuffer:!1},l=__(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=__(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QE(u)),this._blurMaterial=JE(u,e,i)}return l}_compileMaterial(e){const i=new ea(this._lodPlanes[0],e);this._renderer.compile(i,ch)}_sceneToCubeUV(e,i,r,l){const d=new si(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,v=g.toneMapping;g.getClearColor(p_),g.toneMapping=za,g.autoClear=!1;const M=new o0({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),R=new ea(new zo,M);let w=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,w=!0):(M.color.copy(p_),w=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):P===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const O=this._cubeSize;fc(l,P*O,_>2?O:0,O,O),g.setRenderTarget(l),w&&g.render(R,d),g.render(e,d)}R.geometry.dispose(),R.material.dispose(),g.toneMapping=v,g.autoClear=x,e.background=y}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===xs||e.mapping===Ss;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=x_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=v_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new ea(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;fc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,ch)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=m_[(l-u-1)%m_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new ea(this._lodPlanes[l],p),v=p.uniforms,M=this._sizeLods[r]-1,R=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*mr-1),w=u/R,y=isFinite(u)?1+Math.floor(g*w):mr;y>mr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${mr}`);const _=[];let P=0;for(let F=0;F<mr;++F){const Q=F/w,C=Math.exp(-Q*Q/2);_.push(C),F===0?P+=C:F<y&&(P+=2*C)}for(let F=0;F<_.length;F++)_[F]=_[F]/P;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:O}=this;v.dTheta.value=R,v.mipInt.value=O-r;const U=this._sizeLods[l],H=3*U*(l>O-ps?l-O+ps:0),I=4*(this._cubeSize-U);fc(i,H,I,3*U,2*U),m.setRenderTarget(i),m.render(x,ch)}}function QE(s){const e=[],i=[],r=[];let l=s;const u=s-ps+1+d_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-ps?m=d_[h-s+ps-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,R=6,w=3,y=2,_=1,P=new Float32Array(w*R*M),O=new Float32Array(y*R*M),U=new Float32Array(_*R*M);for(let I=0;I<M;I++){const F=I%3*2/3-1,Q=I>2?0:-1,C=[F,Q,0,F+2/3,Q,0,F+2/3,Q+1,0,F,Q,0,F+2/3,Q+1,0,F,Q+1,0];P.set(C,w*R*I),O.set(v,y*R*I);const b=[I,I,I,I,I,I];U.set(b,_*R*I)}const H=new sa;H.setAttribute("position",new xi(P,w)),H.setAttribute("uv",new xi(O,y)),H.setAttribute("faceIndex",new xi(U,_)),e.push(H),l>ps&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function __(s,e,i){const r=new Sr(s,e,i);return r.texture.mapping=bc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fc(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function JE(s,e,i){const r=new Float32Array(mr),l=new st(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function v_(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function x_(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function hd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $E(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===bh||m===Th,g=m===xs||m===Ss;if(p||g){let x=e.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new g_(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new g_(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function tb(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ds("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function eb(s,e,i,r){const l={},u=new WeakMap;function h(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const R in v.attributes)e.remove(v.attributes[R]);v.removeEventListener("dispose",h),delete l[v.id];const M=u.get(v);M&&(e.remove(M),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const M in v)e.update(v[M],s.ARRAY_BUFFER)}function p(x){const v=[],M=x.index,R=x.attributes.position;let w=0;if(M!==null){const P=M.array;w=M.version;for(let O=0,U=P.length;O<U;O+=3){const H=P[O+0],I=P[O+1],F=P[O+2];v.push(H,I,I,F,F,H)}}else if(R!==void 0){const P=R.array;w=R.version;for(let O=0,U=P.length/3-1;O<U;O+=3){const H=O+0,I=O+1,F=O+2;v.push(H,I,I,F,F,H)}}else return;const y=new(e0(v)?c0:l0)(v,1);y.version=w;const _=u.get(x);_&&e.remove(_),u.set(x,y)}function g(x){const v=u.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function nb(s,e,i){let r;function l(v){r=v}let u,h;function d(v){u=v.type,h=v.bytesPerElement}function m(v,M){s.drawElements(r,M,u,v*h),i.update(M,r,1)}function p(v,M,R){R!==0&&(s.drawElementsInstanced(r,M,u,v*h,R),i.update(M,r,R))}function g(v,M,R){if(R===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,v,0,R);let y=0;for(let _=0;_<R;_++)y+=M[_];i.update(y,r,1)}function x(v,M,R,w){if(R===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)p(v[_]/h,M[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,v,0,w,0,R);let _=0;for(let P=0;P<R;P++)_+=M[P]*w[P];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function ib(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function ab(s,e,i){const r=new WeakMap,l=new je;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let b=function(){Q.dispose(),r.delete(d),d.removeEventListener("dispose",b)};var M=b;v!==void 0&&v.texture.dispose();const R=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let U=0;R===!0&&(U=1),w===!0&&(U=2),y===!0&&(U=3);let H=d.attributes.position.count*U,I=1;H>e.maxTextureSize&&(I=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const F=new Float32Array(H*I*4*x),Q=new i0(F,H,I,x);Q.type=$i,Q.needsUpdate=!0;const C=U*4;for(let z=0;z<x;z++){const lt=_[z],at=P[z],ht=O[z],ft=H*I*4*z;for(let V=0;V<lt.count;V++){const rt=V*C;R===!0&&(l.fromBufferAttribute(lt,V),F[ft+rt+0]=l.x,F[ft+rt+1]=l.y,F[ft+rt+2]=l.z,F[ft+rt+3]=0),w===!0&&(l.fromBufferAttribute(at,V),F[ft+rt+4]=l.x,F[ft+rt+5]=l.y,F[ft+rt+6]=l.z,F[ft+rt+7]=0),y===!0&&(l.fromBufferAttribute(ht,V),F[ft+rt+8]=l.x,F[ft+rt+9]=l.y,F[ft+rt+10]=l.z,F[ft+rt+11]=ht.itemSize===4?l.w:1)}}v={count:x,texture:Q,size:new ze(H,I)},r.set(d,v),d.addEventListener("dispose",b)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const w=d.morphTargetsRelative?1:1-R;m.getUniforms().setValue(s,"morphTargetBaseInfluence",w),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function rb(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const _0=new Fn,S_=new m0(1,1),v0=new i0,x0=new zS,S0=new h0,y_=[],M_=[],E_=new Float32Array(16),b_=new Float32Array(9),T_=new Float32Array(4);function As(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=y_[l];if(u===void 0&&(u=new Float32Array(l),y_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,s[h].toArray(u,d)}return u}function on(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function ln(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Rc(s,e){let i=M_[e];i===void 0&&(i=new Int32Array(e),M_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function sb(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function ob(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;s.uniform2fv(this.addr,e),ln(i,e)}}function lb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(on(i,e))return;s.uniform3fv(this.addr,e),ln(i,e)}}function cb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;s.uniform4fv(this.addr,e),ln(i,e)}}function ub(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;T_.set(r),s.uniformMatrix2fv(this.addr,!1,T_),ln(i,r)}}function fb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;b_.set(r),s.uniformMatrix3fv(this.addr,!1,b_),ln(i,r)}}function hb(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(on(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(i,e)}else{if(on(i,r))return;E_.set(r),s.uniformMatrix4fv(this.addr,!1,E_),ln(i,r)}}function db(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function pb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;s.uniform2iv(this.addr,e),ln(i,e)}}function mb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;s.uniform3iv(this.addr,e),ln(i,e)}}function gb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;s.uniform4iv(this.addr,e),ln(i,e)}}function _b(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function vb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(on(i,e))return;s.uniform2uiv(this.addr,e),ln(i,e)}}function xb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(on(i,e))return;s.uniform3uiv(this.addr,e),ln(i,e)}}function Sb(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(on(i,e))return;s.uniform4uiv(this.addr,e),ln(i,e)}}function yb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(S_.compareFunction=t0,u=S_):u=_0,i.setTexture2D(e||u,l)}function Mb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||x0,l)}function Eb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||S0,l)}function bb(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||v0,l)}function Tb(s){switch(s){case 5126:return sb;case 35664:return ob;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return fb;case 35676:return hb;case 5124:case 35670:return db;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return _b;case 36294:return vb;case 36295:return xb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return bb}}function Ab(s,e){s.uniform1fv(this.addr,e)}function Rb(s,e){const i=As(e,this.size,2);s.uniform2fv(this.addr,i)}function Cb(s,e){const i=As(e,this.size,3);s.uniform3fv(this.addr,i)}function wb(s,e){const i=As(e,this.size,4);s.uniform4fv(this.addr,i)}function Db(s,e){const i=As(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function Ub(s,e){const i=As(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function Nb(s,e){const i=As(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function Lb(s,e){s.uniform1iv(this.addr,e)}function Ob(s,e){s.uniform2iv(this.addr,e)}function Pb(s,e){s.uniform3iv(this.addr,e)}function zb(s,e){s.uniform4iv(this.addr,e)}function Bb(s,e){s.uniform1uiv(this.addr,e)}function Fb(s,e){s.uniform2uiv(this.addr,e)}function Ib(s,e){s.uniform3uiv(this.addr,e)}function Hb(s,e){s.uniform4uiv(this.addr,e)}function Gb(s,e,i){const r=this.cache,l=e.length,u=Rc(i,l);on(r,u)||(s.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||_0,u[h])}function Vb(s,e,i){const r=this.cache,l=e.length,u=Rc(i,l);on(r,u)||(s.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||x0,u[h])}function kb(s,e,i){const r=this.cache,l=e.length,u=Rc(i,l);on(r,u)||(s.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||S0,u[h])}function Xb(s,e,i){const r=this.cache,l=e.length,u=Rc(i,l);on(r,u)||(s.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||v0,u[h])}function Wb(s){switch(s){case 5126:return Ab;case 35664:return Rb;case 35665:return Cb;case 35666:return wb;case 35674:return Db;case 35675:return Ub;case 35676:return Nb;case 5124:case 35670:return Lb;case 35667:case 35671:return Ob;case 35668:case 35672:return Pb;case 35669:case 35673:return zb;case 5125:return Bb;case 36294:return Fb;case 36295:return Ib;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return Xb}}class qb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Tb(i.type)}}class Yb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Wb(i.type)}}class jb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const ph=/(\w+)(\])?(\[|\.)?/g;function A_(s,e){s.seq.push(e),s.map[e.id]=e}function Zb(s,e,i){const r=s.name,l=r.length;for(ph.lastIndex=0;;){const u=ph.exec(r),h=ph.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){A_(i,p===void 0?new qb(d,s,e):new Yb(d,s,e));break}else{let x=i.map[d];x===void 0&&(x=new jb(d),A_(i,x)),i=x}}}class vc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);Zb(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function R_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const Kb=37297;let Qb=0;function Jb(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const C_=new le;function $b(s){Ae._getMatrix(C_,Ae.workingColorSpace,s);const e=`mat3( ${C_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(s)){case xc:return[e,"LinearTransferOETF"];case Oe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function w_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Jb(s.getShaderSource(e),h)}else return l}function tT(s,e){const i=$b(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function eT(s,e){let i;switch(e){case oS:i="Linear";break;case lS:i="Reinhard";break;case cS:i="Cineon";break;case uS:i="ACESFilmic";break;case hS:i="AgX";break;case dS:i="Neutral";break;case fS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const hc=new st;function nT(){Ae.getLuminanceCoefficients(hc);const s=hc.x.toFixed(4),e=hc.y.toFixed(4),i=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function aT(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function rT(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(e,h),locationSize:d}}return i}function wo(s){return s!==""}function D_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sT=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(s){return s.replace(sT,lT)}const oT=new Map;function lT(s,e){let i=ce[e];if(i===void 0){const r=oT.get(e);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return nd(i)}const cT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N_(s){return s.replace(cT,uT)}function uT(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function L_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===G_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Hx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function hT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xs:case Ss:e="ENVMAP_TYPE_CUBE";break;case bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function pT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case V_:e="ENVMAP_BLENDING_MULTIPLY";break;case rS:e="ENVMAP_BLENDING_MIX";break;case sS:e="ENVMAP_BLENDING_ADD";break}return e}function mT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function gT(s,e,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=fT(i),p=hT(i),g=dT(i),x=pT(i),v=mT(i),M=iT(i),R=aT(u),w=l.createProgram();let y,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(wo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(wo).join(`
`),_.length>0&&(_+=`
`)):(y=[L_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),_=[L_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?ce.tonemapping_pars_fragment:"",i.toneMapping!==za?eT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,tT("linearToOutputTexel",i.outputColorSpace),nT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wo).join(`
`)),h=nd(h),h=D_(h,i),h=U_(h,i),d=nd(d),d=D_(d,i),d=U_(d,i),h=N_(h),d=N_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=P+y+h,U=P+_+d,H=R_(l,l.VERTEX_SHADER,O),I=R_(l,l.FRAGMENT_SHADER,U);l.attachShader(w,H),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function F(z){if(s.debug.checkShaderErrors){const lt=l.getProgramInfoLog(w).trim(),at=l.getShaderInfoLog(H).trim(),ht=l.getShaderInfoLog(I).trim();let ft=!0,V=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ft=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,H,I);else{const rt=w_(l,H,"vertex"),Y=w_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+lt+`
`+rt+`
`+Y)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(at===""||ht==="")&&(V=!1);V&&(z.diagnostics={runnable:ft,programLog:lt,vertexShader:{log:at,prefix:y},fragmentShader:{log:ht,prefix:_}})}l.deleteShader(H),l.deleteShader(I),Q=new vc(l,w),C=rT(l,w)}let Q;this.getUniforms=function(){return Q===void 0&&F(this),Q};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(w,Kb)),b},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Qb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=I,this}let _T=0;class vT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new xT(e),i.set(e,r)),r}}class xT{constructor(e){this.id=_T++,this.code=e,this.usedTimes=0}}function ST(s,e,i,r,l,u,h){const d=new r0,m=new vT,p=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let M=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,b,z,lt,at){const ht=lt.fog,ft=at.geometry,V=C.isMeshStandardMaterial?lt.environment:null,rt=(C.isMeshStandardMaterial?i:e).get(C.envMap||V),Y=rt&&rt.mapping===bc?rt.image.height:null,xt=R[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const D=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,J=D!==void 0?D.length:0;let yt=0;ft.morphAttributes.position!==void 0&&(yt=1),ft.morphAttributes.normal!==void 0&&(yt=2),ft.morphAttributes.color!==void 0&&(yt=3);let bt,X,mt,Mt;if(xt){const Me=Ai[xt];bt=Me.vertexShader,X=Me.fragmentShader}else bt=C.vertexShader,X=C.fragmentShader,m.update(C),mt=m.getVertexShaderID(C),Mt=m.getFragmentShaderID(C);const At=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),Qt=at.isInstancedMesh===!0,zt=at.isBatchedMesh===!0,ye=!!C.map,Re=!!C.matcap,ae=!!rt,B=!!C.aoMap,pn=!!C.lightMap,se=!!C.bumpMap,fe=!!C.normalMap,Xt=!!C.displacementMap,Ce=!!C.emissiveMap,Wt=!!C.metalnessMap,N=!!C.roughnessMap,E=C.anisotropy>0,nt=C.clearcoat>0,dt=C.dispersion>0,St=C.iridescence>0,pt=C.sheen>0,Gt=C.transmission>0,Dt=E&&!!C.anisotropyMap,Bt=nt&&!!C.clearcoatMap,pe=nt&&!!C.clearcoatNormalMap,Tt=nt&&!!C.clearcoatRoughnessMap,Ft=St&&!!C.iridescenceMap,Yt=St&&!!C.iridescenceThicknessMap,Vt=pt&&!!C.sheenColorMap,It=pt&&!!C.sheenRoughnessMap,re=!!C.specularMap,Zt=!!C.specularColorMap,De=!!C.specularIntensityMap,W=Gt&&!!C.transmissionMap,Lt=Gt&&!!C.thicknessMap,ot=!!C.gradientMap,_t=!!C.alphaMap,wt=C.alphaTest>0,Ut=!!C.alphaHash,$t=!!C.extensions;let He=za;C.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(He=s.toneMapping);const tn={shaderID:xt,shaderType:C.type,shaderName:C.name,vertexShader:bt,fragmentShader:X,defines:C.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:zt,batchingColor:zt&&at._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&at.instanceColor!==null,instancingMorph:Qt&&at.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Es,alphaToCoverage:!!C.alphaToCoverage,map:ye,matcap:Re,envMap:ae,envMapMode:ae&&rt.mapping,envMapCubeUVHeight:Y,aoMap:B,lightMap:pn,bumpMap:se,normalMap:fe,displacementMap:v&&Xt,emissiveMap:Ce,normalMapObjectSpace:fe&&C.normalMapType===vS,normalMapTangentSpace:fe&&C.normalMapType===_S,metalnessMap:Wt,roughnessMap:N,anisotropy:E,anisotropyMap:Dt,clearcoat:nt,clearcoatMap:Bt,clearcoatNormalMap:pe,clearcoatRoughnessMap:Tt,dispersion:dt,iridescence:St,iridescenceMap:Ft,iridescenceThicknessMap:Yt,sheen:pt,sheenColorMap:Vt,sheenRoughnessMap:It,specularMap:re,specularColorMap:Zt,specularIntensityMap:De,transmission:Gt,transmissionMap:W,thicknessMap:Lt,gradientMap:ot,opaque:C.transparent===!1&&C.blending===ms&&C.alphaToCoverage===!1,alphaMap:_t,alphaTest:wt,alphaHash:Ut,combine:C.combine,mapUv:ye&&w(C.map.channel),aoMapUv:B&&w(C.aoMap.channel),lightMapUv:pn&&w(C.lightMap.channel),bumpMapUv:se&&w(C.bumpMap.channel),normalMapUv:fe&&w(C.normalMap.channel),displacementMapUv:Xt&&w(C.displacementMap.channel),emissiveMapUv:Ce&&w(C.emissiveMap.channel),metalnessMapUv:Wt&&w(C.metalnessMap.channel),roughnessMapUv:N&&w(C.roughnessMap.channel),anisotropyMapUv:Dt&&w(C.anisotropyMap.channel),clearcoatMapUv:Bt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:pe&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:It&&w(C.sheenRoughnessMap.channel),specularMapUv:re&&w(C.specularMap.channel),specularColorMapUv:Zt&&w(C.specularColorMap.channel),specularIntensityMapUv:De&&w(C.specularIntensityMap.channel),transmissionMapUv:W&&w(C.transmissionMap.channel),thicknessMapUv:Lt&&w(C.thicknessMap.channel),alphaMapUv:_t&&w(C.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(fe||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ft.attributes.uv&&(ye||_t),fog:!!ht,useFog:C.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ct,skinning:at.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:yt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:He,decodeVideoTexture:ye&&C.map.isVideoTexture===!0&&Ae.getTransfer(C.map.colorSpace)===Oe,decodeVideoTextureEmissive:Ce&&C.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(C.emissiveMap.colorSpace)===Oe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ji,flipSided:C.side===Bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:$t&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&C.extensions.multiDraw===!0||zt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function _(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)b.push(z),b.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(P(b,C),O(b,C),b.push(s.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function P(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function O(C,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reverseDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const b=R[C.type];let z;if(b){const lt=Ai[b];z=ZS.clone(lt.uniforms)}else z=C.uniforms;return z}function H(C,b){let z;for(let lt=0,at=g.length;lt<at;lt++){const ht=g[lt];if(ht.cacheKey===b){z=ht,++z.usedTimes;break}}return z===void 0&&(z=new gT(s,b,C,u),g.push(z)),z}function I(C){if(--C.usedTimes===0){const b=g.indexOf(C);g[b]=g[g.length-1],g.pop(),C.destroy()}}function F(C){m.remove(C)}function Q(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:H,releaseProgram:I,releaseShaderCache:F,programs:g,dispose:Q}}function yT(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function MT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function O_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function P_(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(x,v,M,R,w,y){let _=s[e];return _===void 0?(_={id:x.id,object:x,geometry:v,material:M,groupOrder:R,renderOrder:x.renderOrder,z:w,group:y},s[e]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=M,_.groupOrder=R,_.renderOrder=x.renderOrder,_.z=w,_.group=y),e++,_}function d(x,v,M,R,w,y){const _=h(x,v,M,R,w,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,v,M,R,w,y){const _=h(x,v,M,R,w,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||MT),r.length>1&&r.sort(v||O_),l.length>1&&l.sort(v||O_)}function g(){for(let x=e,v=s.length;x<v;x++){const M=s[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function ET(){let s=new WeakMap;function e(r,l){const u=s.get(r);let h;return u===void 0?(h=new P_,s.set(r,[h])):l>=u.length?(h=new P_,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function bT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new st,color:new we};break;case"SpotLight":i={position:new st,direction:new st,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new st,halfWidth:new st,halfHeight:new st};break}return s[e.id]=i,i}}}function TT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let AT=0;function RT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function CT(s){const e=new bT,i=TT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new st);const l=new st,u=new Ze,h=new Ze;function d(p){let g=0,x=0,v=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,R=0,w=0,y=0,_=0,P=0,O=0,U=0,H=0,I=0,F=0;p.sort(RT);for(let C=0,b=p.length;C<b;C++){const z=p[C],lt=z.color,at=z.intensity,ht=z.distance,ft=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=lt.r*at,x+=lt.g*at,v+=lt.b*at;else if(z.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(z.sh.coefficients[V],at);F++}else if(z.isDirectionalLight){const V=e.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const rt=z.shadow,Y=i.get(z);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=ft,r.directionalShadowMatrix[M]=z.shadow.matrix,P++}r.directional[M]=V,M++}else if(z.isSpotLight){const V=e.get(z);V.position.setFromMatrixPosition(z.matrixWorld),V.color.copy(lt).multiplyScalar(at),V.distance=ht,V.coneCos=Math.cos(z.angle),V.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),V.decay=z.decay,r.spot[w]=V;const rt=z.shadow;if(z.map&&(r.spotLightMap[H]=z.map,H++,rt.updateMatrices(z),z.castShadow&&I++),r.spotLightMatrix[w]=rt.matrix,z.castShadow){const Y=i.get(z);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,r.spotShadow[w]=Y,r.spotShadowMap[w]=ft,U++}w++}else if(z.isRectAreaLight){const V=e.get(z);V.color.copy(lt).multiplyScalar(at),V.halfWidth.set(z.width*.5,0,0),V.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=V,y++}else if(z.isPointLight){const V=e.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity),V.distance=z.distance,V.decay=z.decay,z.castShadow){const rt=z.shadow,Y=i.get(z);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,Y.shadowCameraNear=rt.camera.near,Y.shadowCameraFar=rt.camera.far,r.pointShadow[R]=Y,r.pointShadowMap[R]=ft,r.pointShadowMatrix[R]=z.shadow.matrix,O++}r.point[R]=V,R++}else if(z.isHemisphereLight){const V=e.get(z);V.skyColor.copy(z.color).multiplyScalar(at),V.groundColor.copy(z.groundColor).multiplyScalar(at),r.hemi[_]=V,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const Q=r.hash;(Q.directionalLength!==M||Q.pointLength!==R||Q.spotLength!==w||Q.rectAreaLength!==y||Q.hemiLength!==_||Q.numDirectionalShadows!==P||Q.numPointShadows!==O||Q.numSpotShadows!==U||Q.numSpotMaps!==H||Q.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=y,r.point.length=R,r.hemi.length=_,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=U+H-I,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,Q.directionalLength=M,Q.pointLength=R,Q.spotLength=w,Q.rectAreaLength=y,Q.hemiLength=_,Q.numDirectionalShadows=P,Q.numPointShadows=O,Q.numSpotShadows=U,Q.numSpotMaps=H,Q.numLightProbes=F,r.version=AT++)}function m(p,g){let x=0,v=0,M=0,R=0,w=0;const y=g.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const O=p[_];if(O.isDirectionalLight){const U=r.directional[x];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),x++}else if(O.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const U=r.rectArea[R];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),h.identity(),u.copy(O.matrixWorld),u.premultiply(y),h.extractRotation(u),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),R++}else if(O.isPointLight){const U=r.point[v];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),v++}else if(O.isHemisphereLight){const U=r.hemi[w];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(y),w++}}}return{setup:d,setupView:m,state:r}}function z_(s){const e=new CT(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function wT(s){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new z_(s),e.set(l,[d])):u>=h.length?(d=new z_(s),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const DT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NT(s,e,i){let r=new d0;const l=new ze,u=new ze,h=new je,d=new ry({depthPacking:gS}),m=new sy,p={},g=i.maxTextureSize,x={[Fa]:Bn,[Bn]:Fa,[Ji]:Ji},v=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:DT,fragmentShader:UT}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const R=new sa;R.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ea(R,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=G_;let _=this.type;this.render=function(I,F,Q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const C=s.getRenderTarget(),b=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(Pa),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const at=_!==Qi&&this.type===Qi,ht=_===Qi&&this.type!==Qi;for(let ft=0,V=I.length;ft<V;ft++){const rt=I[ft],Y=rt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const xt=Y.getFrameExtents();if(l.multiply(xt),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/xt.x),l.x=u.x*xt.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/xt.y),l.y=u.y*xt.y,Y.mapSize.y=u.y)),Y.map===null||at===!0||ht===!0){const J=this.type!==Qi?{minFilter:vi,magFilter:vi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Sr(l.x,l.y,J),Y.map.texture.name=rt.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const D=Y.getViewportCount();for(let J=0;J<D;J++){const yt=Y.getViewport(J);h.set(u.x*yt.x,u.y*yt.y,u.x*yt.z,u.y*yt.w),lt.viewport(h),Y.updateMatrices(rt,J),r=Y.getFrustum(),U(F,Q,Y.camera,rt,this.type)}Y.isPointLightShadow!==!0&&this.type===Qi&&P(Y,Q),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(C,b,z)};function P(I,F){const Q=e.update(w);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Sr(l.x,l.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(F,null,Q,v,w,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(F,null,Q,M,w,null)}function O(I,F,Q,C){let b=null;const z=Q.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)b=z;else if(b=Q.isPointLight===!0?m:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const lt=b.uuid,at=F.uuid;let ht=p[lt];ht===void 0&&(ht={},p[lt]=ht);let ft=ht[at];ft===void 0&&(ft=b.clone(),ht[at]=ft,F.addEventListener("dispose",H)),b=ft}if(b.visible=F.visible,b.wireframe=F.wireframe,C===Qi?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:x[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,Q.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const lt=s.properties.get(b);lt.light=Q}return b}function U(I,F,Q,C,b){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===Qi)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,I.matrixWorld);const at=e.update(I),ht=I.material;if(Array.isArray(ht)){const ft=at.groups;for(let V=0,rt=ft.length;V<rt;V++){const Y=ft[V],xt=ht[Y.materialIndex];if(xt&&xt.visible){const D=O(I,xt,C,b);I.onBeforeShadow(s,I,F,Q,at,D,Y),s.renderBufferDirect(Q,null,at,D,I,Y),I.onAfterShadow(s,I,F,Q,at,D,Y)}}}else if(ht.visible){const ft=O(I,ht,C,b);I.onBeforeShadow(s,I,F,Q,at,ft,null),s.renderBufferDirect(Q,null,at,ft,I,null),I.onAfterShadow(s,I,F,Q,at,ft,null)}}const lt=I.children;for(let at=0,ht=lt.length;at<ht;at++)U(lt[at],F,Q,C,b)}function H(I){I.target.removeEventListener("dispose",H);for(const Q in p){const C=p[Q],b=I.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const LT={[_h]:vh,[xh]:Mh,[Sh]:Eh,[vs]:yh,[vh]:_h,[Mh]:xh,[Eh]:Sh,[yh]:vs};function OT(s,e){function i(){let W=!1;const Lt=new je;let ot=null;const _t=new je(0,0,0,0);return{setMask:function(wt){ot!==wt&&!W&&(s.colorMask(wt,wt,wt,wt),ot=wt)},setLocked:function(wt){W=wt},setClear:function(wt,Ut,$t,He,tn){tn===!0&&(wt*=He,Ut*=He,$t*=He),Lt.set(wt,Ut,$t,He),_t.equals(Lt)===!1&&(s.clearColor(wt,Ut,$t,He),_t.copy(Lt))},reset:function(){W=!1,ot=null,_t.set(-1,0,0,0)}}}function r(){let W=!1,Lt=!1,ot=null,_t=null,wt=null;return{setReversed:function(Ut){if(Lt!==Ut){const $t=e.get("EXT_clip_control");Lt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const He=wt;wt=null,this.setClear(He)}Lt=Ut},getReversed:function(){return Lt},setTest:function(Ut){Ut?At(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(Ut){ot!==Ut&&!W&&(s.depthMask(Ut),ot=Ut)},setFunc:function(Ut){if(Lt&&(Ut=LT[Ut]),_t!==Ut){switch(Ut){case _h:s.depthFunc(s.NEVER);break;case vh:s.depthFunc(s.ALWAYS);break;case xh:s.depthFunc(s.LESS);break;case vs:s.depthFunc(s.LEQUAL);break;case Sh:s.depthFunc(s.EQUAL);break;case yh:s.depthFunc(s.GEQUAL);break;case Mh:s.depthFunc(s.GREATER);break;case Eh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Ut}},setLocked:function(Ut){W=Ut},setClear:function(Ut){wt!==Ut&&(Lt&&(Ut=1-Ut),s.clearDepth(Ut),wt=Ut)},reset:function(){W=!1,ot=null,_t=null,wt=null,Lt=!1}}}function l(){let W=!1,Lt=null,ot=null,_t=null,wt=null,Ut=null,$t=null,He=null,tn=null;return{setTest:function(Me){W||(Me?At(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(Me){Lt!==Me&&!W&&(s.stencilMask(Me),Lt=Me)},setFunc:function(Me,bn,Tn){(ot!==Me||_t!==bn||wt!==Tn)&&(s.stencilFunc(Me,bn,Tn),ot=Me,_t=bn,wt=Tn)},setOp:function(Me,bn,Tn){(Ut!==Me||$t!==bn||He!==Tn)&&(s.stencilOp(Me,bn,Tn),Ut=Me,$t=bn,He=Tn)},setLocked:function(Me){W=Me},setClear:function(Me){tn!==Me&&(s.clearStencil(Me),tn=Me)},reset:function(){W=!1,Lt=null,ot=null,_t=null,wt=null,Ut=null,$t=null,He=null,tn=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,M=[],R=null,w=!1,y=null,_=null,P=null,O=null,U=null,H=null,I=null,F=new we(0,0,0),Q=0,C=!1,b=null,z=null,lt=null,at=null,ht=null;const ft=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,rt=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=rt>=1):Y.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=rt>=2);let xt=null,D={};const J=s.getParameter(s.SCISSOR_BOX),yt=s.getParameter(s.VIEWPORT),bt=new je().fromArray(J),X=new je().fromArray(yt);function mt(W,Lt,ot,_t){const wt=new Uint8Array(4),Ut=s.createTexture();s.bindTexture(W,Ut),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $t=0;$t<ot;$t++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Lt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(Lt+$t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return Ut}const Mt={};Mt[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),At(s.DEPTH_TEST),h.setFunc(vs),se(!1),fe(Hg),At(s.CULL_FACE),B(Pa);function At(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function Ct(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function Qt(W,Lt){return x[W]!==Lt?(s.bindFramebuffer(W,Lt),x[W]=Lt,W===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Lt),W===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Lt),!0):!1}function zt(W,Lt){let ot=M,_t=!1;if(W){ot=v.get(Lt),ot===void 0&&(ot=[],v.set(Lt,ot));const wt=W.textures;if(ot.length!==wt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let Ut=0,$t=wt.length;Ut<$t;Ut++)ot[Ut]=s.COLOR_ATTACHMENT0+Ut;ot.length=wt.length,_t=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,_t=!0);_t&&s.drawBuffers(ot)}function ye(W){return R!==W?(s.useProgram(W),R=W,!0):!1}const Re={[pr]:s.FUNC_ADD,[Vx]:s.FUNC_SUBTRACT,[kx]:s.FUNC_REVERSE_SUBTRACT};Re[Xx]=s.MIN,Re[Wx]=s.MAX;const ae={[qx]:s.ZERO,[Yx]:s.ONE,[jx]:s.SRC_COLOR,[mh]:s.SRC_ALPHA,[tS]:s.SRC_ALPHA_SATURATE,[Jx]:s.DST_COLOR,[Kx]:s.DST_ALPHA,[Zx]:s.ONE_MINUS_SRC_COLOR,[gh]:s.ONE_MINUS_SRC_ALPHA,[$x]:s.ONE_MINUS_DST_COLOR,[Qx]:s.ONE_MINUS_DST_ALPHA,[eS]:s.CONSTANT_COLOR,[nS]:s.ONE_MINUS_CONSTANT_COLOR,[iS]:s.CONSTANT_ALPHA,[aS]:s.ONE_MINUS_CONSTANT_ALPHA};function B(W,Lt,ot,_t,wt,Ut,$t,He,tn,Me){if(W===Pa){w===!0&&(Ct(s.BLEND),w=!1);return}if(w===!1&&(At(s.BLEND),w=!0),W!==Gx){if(W!==y||Me!==C){if((_!==pr||U!==pr)&&(s.blendEquation(s.FUNC_ADD),_=pr,U=pr),Me)switch(W){case ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gg:s.blendFunc(s.ONE,s.ONE);break;case Vg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kg:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gg:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kg:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}P=null,O=null,H=null,I=null,F.set(0,0,0),Q=0,y=W,C=Me}return}wt=wt||Lt,Ut=Ut||ot,$t=$t||_t,(Lt!==_||wt!==U)&&(s.blendEquationSeparate(Re[Lt],Re[wt]),_=Lt,U=wt),(ot!==P||_t!==O||Ut!==H||$t!==I)&&(s.blendFuncSeparate(ae[ot],ae[_t],ae[Ut],ae[$t]),P=ot,O=_t,H=Ut,I=$t),(He.equals(F)===!1||tn!==Q)&&(s.blendColor(He.r,He.g,He.b,tn),F.copy(He),Q=tn),y=W,C=!1}function pn(W,Lt){W.side===Ji?Ct(s.CULL_FACE):At(s.CULL_FACE);let ot=W.side===Bn;Lt&&(ot=!ot),se(ot),W.blending===ms&&W.transparent===!1?B(Pa):B(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const _t=W.stencilWrite;d.setTest(_t),_t&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ce(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?At(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){b!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),b=W)}function fe(W){W!==Fx?(At(s.CULL_FACE),W!==z&&(W===Hg?s.cullFace(s.BACK):W===Ix?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),z=W}function Xt(W){W!==lt&&(V&&s.lineWidth(W),lt=W)}function Ce(W,Lt,ot){W?(At(s.POLYGON_OFFSET_FILL),(at!==Lt||ht!==ot)&&(s.polygonOffset(Lt,ot),at=Lt,ht=ot)):Ct(s.POLYGON_OFFSET_FILL)}function Wt(W){W?At(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function N(W){W===void 0&&(W=s.TEXTURE0+ft-1),xt!==W&&(s.activeTexture(W),xt=W)}function E(W,Lt,ot){ot===void 0&&(xt===null?ot=s.TEXTURE0+ft-1:ot=xt);let _t=D[ot];_t===void 0&&(_t={type:void 0,texture:void 0},D[ot]=_t),(_t.type!==W||_t.texture!==Lt)&&(xt!==ot&&(s.activeTexture(ot),xt=ot),s.bindTexture(W,Lt||Mt[W]),_t.type=W,_t.texture=Lt)}function nt(){const W=D[xt];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function dt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Gt(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ft(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Yt(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Vt(W){bt.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),bt.copy(W))}function It(W){X.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),X.copy(W))}function re(W,Lt){let ot=p.get(Lt);ot===void 0&&(ot=new WeakMap,p.set(Lt,ot));let _t=ot.get(W);_t===void 0&&(_t=s.getUniformBlockIndex(Lt,W.name),ot.set(W,_t))}function Zt(W,Lt){const _t=p.get(Lt).get(W);m.get(Lt)!==_t&&(s.uniformBlockBinding(Lt,_t,W.__bindingPointIndex),m.set(Lt,_t))}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},xt=null,D={},x={},v=new WeakMap,M=[],R=null,w=!1,y=null,_=null,P=null,O=null,U=null,H=null,I=null,F=new we(0,0,0),Q=0,C=!1,b=null,z=null,lt=null,at=null,ht=null,bt.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:At,disable:Ct,bindFramebuffer:Qt,drawBuffers:zt,useProgram:ye,setBlending:B,setMaterial:pn,setFlipSided:se,setCullFace:fe,setLineWidth:Xt,setPolygonOffset:Ce,setScissorTest:Wt,activeTexture:N,bindTexture:E,unbindTexture:nt,compressedTexImage2D:dt,compressedTexImage3D:St,texImage2D:Ft,texImage3D:Yt,updateUBOMapping:re,uniformBlockBinding:Zt,texStorage2D:pe,texStorage3D:Tt,texSubImage2D:pt,texSubImage3D:Gt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Bt,scissor:Vt,viewport:It,reset:De}}function PT(s,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ze,g=new WeakMap;let x;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(N,E){return M?new OffscreenCanvas(N,E):yc("canvas")}function w(N,E,nt){let dt=1;const St=Wt(N);if((St.width>nt||St.height>nt)&&(dt=nt/Math.max(St.width,St.height)),dt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const pt=Math.floor(dt*St.width),Gt=Math.floor(dt*St.height);x===void 0&&(x=R(pt,Gt));const Dt=E?R(pt,Gt):x;return Dt.width=pt,Dt.height=Gt,Dt.getContext("2d").drawImage(N,0,0,pt,Gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+pt+"x"+Gt+")."),Dt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(N,E,nt,dt,St=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pt=E;if(E===s.RED&&(nt===s.FLOAT&&(pt=s.R32F),nt===s.HALF_FLOAT&&(pt=s.R16F),nt===s.UNSIGNED_BYTE&&(pt=s.R8)),E===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.R8UI),nt===s.UNSIGNED_SHORT&&(pt=s.R16UI),nt===s.UNSIGNED_INT&&(pt=s.R32UI),nt===s.BYTE&&(pt=s.R8I),nt===s.SHORT&&(pt=s.R16I),nt===s.INT&&(pt=s.R32I)),E===s.RG&&(nt===s.FLOAT&&(pt=s.RG32F),nt===s.HALF_FLOAT&&(pt=s.RG16F),nt===s.UNSIGNED_BYTE&&(pt=s.RG8)),E===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.RG8UI),nt===s.UNSIGNED_SHORT&&(pt=s.RG16UI),nt===s.UNSIGNED_INT&&(pt=s.RG32UI),nt===s.BYTE&&(pt=s.RG8I),nt===s.SHORT&&(pt=s.RG16I),nt===s.INT&&(pt=s.RG32I)),E===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(pt=s.RGB16UI),nt===s.UNSIGNED_INT&&(pt=s.RGB32UI),nt===s.BYTE&&(pt=s.RGB8I),nt===s.SHORT&&(pt=s.RGB16I),nt===s.INT&&(pt=s.RGB32I)),E===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(pt=s.RGBA16UI),nt===s.UNSIGNED_INT&&(pt=s.RGBA32UI),nt===s.BYTE&&(pt=s.RGBA8I),nt===s.SHORT&&(pt=s.RGBA16I),nt===s.INT&&(pt=s.RGBA32I)),E===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(pt=s.RGB9_E5),E===s.RGBA){const Gt=St?xc:Ae.getTransfer(dt);nt===s.FLOAT&&(pt=s.RGBA32F),nt===s.HALF_FLOAT&&(pt=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(pt=Gt===Oe?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(pt=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(pt=s.RGB5_A1)}return(pt===s.R16F||pt===s.R32F||pt===s.RG16F||pt===s.RG32F||pt===s.RGBA16F||pt===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function U(N,E){let nt;return N?E===null||E===xr||E===ys?nt=s.DEPTH24_STENCIL8:E===$i?nt=s.DEPTH32F_STENCIL8:E===Do&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xr||E===ys?nt=s.DEPTH_COMPONENT24:E===$i?nt=s.DEPTH_COMPONENT32F:E===Do&&(nt=s.DEPTH_COMPONENT16),nt}function H(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==vi&&N.minFilter!==Ci?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function I(N){const E=N.target;E.removeEventListener("dispose",I),Q(E),E.isVideoTexture&&g.delete(E)}function F(N){const E=N.target;E.removeEventListener("dispose",F),b(E)}function Q(N){const E=r.get(N);if(E.__webglInit===void 0)return;const nt=N.source,dt=v.get(nt);if(dt){const St=dt[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&C(N),Object.keys(dt).length===0&&v.delete(nt)}r.remove(N)}function C(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const nt=N.source,dt=v.get(nt);delete dt[E.__cacheKey],h.memory.textures--}function b(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let St=0;St<E.__webglFramebuffer[dt].length;St++)s.deleteFramebuffer(E.__webglFramebuffer[dt][St]);else s.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)s.deleteFramebuffer(E.__webglFramebuffer[dt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const nt=N.textures;for(let dt=0,St=nt.length;dt<St;dt++){const pt=r.get(nt[dt]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),h.memory.textures--),r.remove(nt[dt])}r.remove(N)}let z=0;function lt(){z=0}function at(){const N=z;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),z+=1,N}function ht(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ft(N,E){const nt=r.get(N);if(N.isVideoTexture&&Xt(N),N.isRenderTargetTexture===!1&&N.version>0&&nt.__version!==N.version){const dt=N.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(nt,N,E);return}}i.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+E)}function V(N,E){const nt=r.get(N);if(N.version>0&&nt.__version!==N.version){X(nt,N,E);return}i.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+E)}function rt(N,E){const nt=r.get(N);if(N.version>0&&nt.__version!==N.version){X(nt,N,E);return}i.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+E)}function Y(N,E){const nt=r.get(N);if(N.version>0&&nt.__version!==N.version){mt(nt,N,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+E)}const xt={[Ah]:s.REPEAT,[gr]:s.CLAMP_TO_EDGE,[Rh]:s.MIRRORED_REPEAT},D={[vi]:s.NEAREST,[pS]:s.NEAREST_MIPMAP_NEAREST,[kl]:s.NEAREST_MIPMAP_LINEAR,[Ci]:s.LINEAR,[If]:s.LINEAR_MIPMAP_NEAREST,[_r]:s.LINEAR_MIPMAP_LINEAR},J={[xS]:s.NEVER,[TS]:s.ALWAYS,[SS]:s.LESS,[t0]:s.LEQUAL,[yS]:s.EQUAL,[bS]:s.GEQUAL,[MS]:s.GREATER,[ES]:s.NOTEQUAL};function yt(N,E){if(E.type===$i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ci||E.magFilter===If||E.magFilter===kl||E.magFilter===_r||E.minFilter===Ci||E.minFilter===If||E.minFilter===kl||E.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,xt[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,xt[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,xt[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,D[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vi||E.minFilter!==kl&&E.minFilter!==_r||E.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function bt(N,E){let nt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",I));const dt=E.source;let St=v.get(dt);St===void 0&&(St={},v.set(dt,St));const pt=ht(E);if(pt!==N.__cacheKey){St[pt]===void 0&&(St[pt]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),St[pt].usedTimes++;const Gt=St[N.__cacheKey];Gt!==void 0&&(St[N.__cacheKey].usedTimes--,Gt.usedTimes===0&&C(E)),N.__cacheKey=pt,N.__webglTexture=St[pt].texture}return nt}function X(N,E,nt){let dt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=s.TEXTURE_3D);const St=bt(N,E),pt=E.source;i.bindTexture(dt,N.__webglTexture,s.TEXTURE0+nt);const Gt=r.get(pt);if(pt.version!==Gt.__version||St===!0){i.activeTexture(s.TEXTURE0+nt);const Dt=Ae.getPrimaries(Ae.workingColorSpace),Bt=E.colorSpace===Oa?null:Ae.getPrimaries(E.colorSpace),pe=E.colorSpace===Oa||Dt===Bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Tt=w(E.image,!1,l.maxTextureSize);Tt=Ce(E,Tt);const Ft=u.convert(E.format,E.colorSpace),Yt=u.convert(E.type);let Vt=O(E.internalFormat,Ft,Yt,E.colorSpace,E.isVideoTexture);yt(dt,E);let It;const re=E.mipmaps,Zt=E.isVideoTexture!==!0,De=Gt.__version===void 0||St===!0,W=pt.dataReady,Lt=H(E,Tt);if(E.isDepthTexture)Vt=U(E.format===Ms,E.type),De&&(Zt?i.texStorage2D(s.TEXTURE_2D,1,Vt,Tt.width,Tt.height):i.texImage2D(s.TEXTURE_2D,0,Vt,Tt.width,Tt.height,0,Ft,Yt,null));else if(E.isDataTexture)if(re.length>0){Zt&&De&&i.texStorage2D(s.TEXTURE_2D,Lt,Vt,re[0].width,re[0].height);for(let ot=0,_t=re.length;ot<_t;ot++)It=re[ot],Zt?W&&i.texSubImage2D(s.TEXTURE_2D,ot,0,0,It.width,It.height,Ft,Yt,It.data):i.texImage2D(s.TEXTURE_2D,ot,Vt,It.width,It.height,0,Ft,Yt,It.data);E.generateMipmaps=!1}else Zt?(De&&i.texStorage2D(s.TEXTURE_2D,Lt,Vt,Tt.width,Tt.height),W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Ft,Yt,Tt.data)):i.texImage2D(s.TEXTURE_2D,0,Vt,Tt.width,Tt.height,0,Ft,Yt,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Zt&&De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Vt,re[0].width,re[0].height,Tt.depth);for(let ot=0,_t=re.length;ot<_t;ot++)if(It=re[ot],E.format!==_i)if(Ft!==null)if(Zt){if(W)if(E.layerUpdates.size>0){const wt=h_(It.width,It.height,E.format,E.type);for(const Ut of E.layerUpdates){const $t=It.data.subarray(Ut*wt/It.data.BYTES_PER_ELEMENT,(Ut+1)*wt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,Ut,It.width,It.height,1,Ft,$t)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,It.width,It.height,Tt.depth,Ft,It.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,Vt,It.width,It.height,Tt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?W&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,It.width,It.height,Tt.depth,Ft,Yt,It.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ot,Vt,It.width,It.height,Tt.depth,0,Ft,Yt,It.data)}else{Zt&&De&&i.texStorage2D(s.TEXTURE_2D,Lt,Vt,re[0].width,re[0].height);for(let ot=0,_t=re.length;ot<_t;ot++)It=re[ot],E.format!==_i?Ft!==null?Zt?W&&i.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,It.width,It.height,Ft,It.data):i.compressedTexImage2D(s.TEXTURE_2D,ot,Vt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?W&&i.texSubImage2D(s.TEXTURE_2D,ot,0,0,It.width,It.height,Ft,Yt,It.data):i.texImage2D(s.TEXTURE_2D,ot,Vt,It.width,It.height,0,Ft,Yt,It.data)}else if(E.isDataArrayTexture)if(Zt){if(De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Vt,Tt.width,Tt.height,Tt.depth),W)if(E.layerUpdates.size>0){const ot=h_(Tt.width,Tt.height,E.format,E.type);for(const _t of E.layerUpdates){const wt=Tt.data.subarray(_t*ot/Tt.data.BYTES_PER_ELEMENT,(_t+1)*ot/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,Ft,Yt,wt)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,Yt,Tt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Vt,Tt.width,Tt.height,Tt.depth,0,Ft,Yt,Tt.data);else if(E.isData3DTexture)Zt?(De&&i.texStorage3D(s.TEXTURE_3D,Lt,Vt,Tt.width,Tt.height,Tt.depth),W&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,Yt,Tt.data)):i.texImage3D(s.TEXTURE_3D,0,Vt,Tt.width,Tt.height,Tt.depth,0,Ft,Yt,Tt.data);else if(E.isFramebufferTexture){if(De)if(Zt)i.texStorage2D(s.TEXTURE_2D,Lt,Vt,Tt.width,Tt.height);else{let ot=Tt.width,_t=Tt.height;for(let wt=0;wt<Lt;wt++)i.texImage2D(s.TEXTURE_2D,wt,Vt,ot,_t,0,Ft,Yt,null),ot>>=1,_t>>=1}}else if(re.length>0){if(Zt&&De){const ot=Wt(re[0]);i.texStorage2D(s.TEXTURE_2D,Lt,Vt,ot.width,ot.height)}for(let ot=0,_t=re.length;ot<_t;ot++)It=re[ot],Zt?W&&i.texSubImage2D(s.TEXTURE_2D,ot,0,0,Ft,Yt,It):i.texImage2D(s.TEXTURE_2D,ot,Vt,Ft,Yt,It);E.generateMipmaps=!1}else if(Zt){if(De){const ot=Wt(Tt);i.texStorage2D(s.TEXTURE_2D,Lt,Vt,ot.width,ot.height)}W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,Yt,Tt)}else i.texImage2D(s.TEXTURE_2D,0,Vt,Ft,Yt,Tt);y(E)&&_(dt),Gt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function mt(N,E,nt){if(E.image.length!==6)return;const dt=bt(N,E),St=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+nt);const pt=r.get(St);if(St.version!==pt.__version||dt===!0){i.activeTexture(s.TEXTURE0+nt);const Gt=Ae.getPrimaries(Ae.workingColorSpace),Dt=E.colorSpace===Oa?null:Ae.getPrimaries(E.colorSpace),Bt=E.colorSpace===Oa||Gt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const pe=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,Ft=[];for(let _t=0;_t<6;_t++)!pe&&!Tt?Ft[_t]=w(E.image[_t],!0,l.maxCubemapSize):Ft[_t]=Tt?E.image[_t].image:E.image[_t],Ft[_t]=Ce(E,Ft[_t]);const Yt=Ft[0],Vt=u.convert(E.format,E.colorSpace),It=u.convert(E.type),re=O(E.internalFormat,Vt,It,E.colorSpace),Zt=E.isVideoTexture!==!0,De=pt.__version===void 0||dt===!0,W=St.dataReady;let Lt=H(E,Yt);yt(s.TEXTURE_CUBE_MAP,E);let ot;if(pe){Zt&&De&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,re,Yt.width,Yt.height);for(let _t=0;_t<6;_t++){ot=Ft[_t].mipmaps;for(let wt=0;wt<ot.length;wt++){const Ut=ot[wt];E.format!==_i?Vt!==null?Zt?W&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Ut.width,Ut.height,Vt,Ut.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,re,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,0,0,Ut.width,Ut.height,Vt,It,Ut.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt,re,Ut.width,Ut.height,0,Vt,It,Ut.data)}}}else{if(ot=E.mipmaps,Zt&&De){ot.length>0&&Lt++;const _t=Wt(Ft[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,re,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){Zt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ft[_t].width,Ft[_t].height,Vt,It,Ft[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Ft[_t].width,Ft[_t].height,0,Vt,It,Ft[_t].data);for(let wt=0;wt<ot.length;wt++){const $t=ot[wt].image[_t].image;Zt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,$t.width,$t.height,Vt,It,$t.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,re,$t.width,$t.height,0,Vt,It,$t.data)}}else{Zt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt,It,Ft[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Vt,It,Ft[_t]);for(let wt=0;wt<ot.length;wt++){const Ut=ot[wt];Zt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,0,0,Vt,It,Ut.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,wt+1,re,Vt,It,Ut.image[_t])}}}y(E)&&_(s.TEXTURE_CUBE_MAP),pt.__version=St.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Mt(N,E,nt,dt,St,pt){const Gt=u.convert(nt.format,nt.colorSpace),Dt=u.convert(nt.type),Bt=O(nt.internalFormat,Gt,Dt,nt.colorSpace),pe=r.get(E),Tt=r.get(nt);if(Tt.__renderTarget=E,!pe.__hasExternalTextures){const Ft=Math.max(1,E.width>>pt),Yt=Math.max(1,E.height>>pt);St===s.TEXTURE_3D||St===s.TEXTURE_2D_ARRAY?i.texImage3D(St,pt,Bt,Ft,Yt,E.depth,0,Gt,Dt,null):i.texImage2D(St,pt,Bt,Ft,Yt,0,Gt,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),fe(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,St,Tt.__webglTexture,0,se(E)):(St===s.TEXTURE_2D||St>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,St,Tt.__webglTexture,pt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function At(N,E,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const dt=E.depthTexture,St=dt&&dt.isDepthTexture?dt.type:null,pt=U(E.stencilBuffer,St),Gt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=se(E);fe(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,pt,E.width,E.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,pt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Gt,s.RENDERBUFFER,N)}else{const dt=E.textures;for(let St=0;St<dt.length;St++){const pt=dt[St],Gt=u.convert(pt.format,pt.colorSpace),Dt=u.convert(pt.type),Bt=O(pt.internalFormat,Gt,Dt,pt.colorSpace),pe=se(E);nt&&fe(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,Bt,E.width,E.height):fe(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,Bt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Bt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(E.depthTexture);dt.__renderTarget=E,(!dt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const St=dt.__webglTexture,pt=se(E);if(E.depthTexture.format===gs)fe(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0);else if(E.depthTexture.format===Ms)fe(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Qt(N){const E=r.get(N),nt=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const dt=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",St)};dt.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=dt}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Ct(E.__webglFramebuffer,N)}else if(nt){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=s.createRenderbuffer(),At(E.__webglDepthbuffer[dt],N,!1);else{const St=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=E.__webglDepthbuffer[dt];s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),At(E.__webglDepthbuffer,N,!1);else{const dt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,St)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(N,E,nt){const dt=r.get(N);E!==void 0&&Mt(dt.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&Qt(N)}function ye(N){const E=N.texture,nt=r.get(N),dt=r.get(E);N.addEventListener("dispose",F);const St=N.textures,pt=N.isWebGLCubeRenderTarget===!0,Gt=St.length>1;if(Gt||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=E.version,h.memory.textures++),pt){nt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer[Dt]=[];for(let Bt=0;Bt<E.mipmaps.length;Bt++)nt.__webglFramebuffer[Dt][Bt]=s.createFramebuffer()}else nt.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)nt.__webglFramebuffer[Dt]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Gt)for(let Dt=0,Bt=St.length;Dt<Bt;Dt++){const pe=r.get(St[Dt]);pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture(),h.memory.textures++)}if(N.samples>0&&fe(N)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<St.length;Dt++){const Bt=St[Dt];nt.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt]);const pe=u.convert(Bt.format,Bt.colorSpace),Tt=u.convert(Bt.type),Ft=O(Bt.internalFormat,pe,Tt,Bt.colorSpace,N.isXRRenderTarget===!0),Yt=se(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,Ft,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),At(nt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){i.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),yt(s.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)Mt(nt.__webglFramebuffer[Dt][Bt],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Bt);else Mt(nt.__webglFramebuffer[Dt],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(E)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Gt){for(let Dt=0,Bt=St.length;Dt<Bt;Dt++){const pe=St[Dt],Tt=r.get(pe);i.bindTexture(s.TEXTURE_2D,Tt.__webglTexture),yt(s.TEXTURE_2D,pe),Mt(nt.__webglFramebuffer,N,pe,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,0),y(pe)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Dt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,dt.__webglTexture),yt(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Bt=0;Bt<E.mipmaps.length;Bt++)Mt(nt.__webglFramebuffer[Bt],N,E,s.COLOR_ATTACHMENT0,Dt,Bt);else Mt(nt.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,Dt,0);y(E)&&_(Dt),i.unbindTexture()}N.depthBuffer&&Qt(N)}function Re(N){const E=N.textures;for(let nt=0,dt=E.length;nt<dt;nt++){const St=E[nt];if(y(St)){const pt=P(N),Gt=r.get(St).__webglTexture;i.bindTexture(pt,Gt),_(pt),i.unbindTexture()}}}const ae=[],B=[];function pn(N){if(N.samples>0){if(fe(N)===!1){const E=N.textures,nt=N.width,dt=N.height;let St=s.COLOR_BUFFER_BIT;const pt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Gt=r.get(N),Dt=E.length>1;if(Dt)for(let Bt=0;Bt<E.length;Bt++)i.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Bt=0;Bt<E.length;Bt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(St|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(St|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const pe=r.get(E[Bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pe,0)}s.blitFramebuffer(0,0,nt,dt,0,0,nt,dt,St,s.NEAREST),m===!0&&(ae.length=0,B.length=0,ae.push(s.COLOR_ATTACHMENT0+Bt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ae.push(pt),B.push(pt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let Bt=0;Bt<E.length;Bt++){i.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,Gt.__webglColorRenderbuffer[Bt]);const pe=r.get(E[Bt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,pe,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function se(N){return Math.min(l.maxSamples,N.samples)}function fe(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Xt(N){const E=h.render.frame;g.get(N)!==E&&(g.set(N,E),N.update())}function Ce(N,E){const nt=N.colorSpace,dt=N.format,St=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||nt!==Es&&nt!==Oa&&(Ae.getTransfer(nt)===Oe?(dt!==_i||St!==aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),E}function Wt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=lt,this.setTexture2D=ft,this.setTexture2DArray=V,this.setTexture3D=rt,this.setTextureCube=Y,this.rebindTextures=zt,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=fe}function zT(s,e){function i(r,l=Oa){let u;const h=Ae.getTransfer(l);if(r===aa)return s.UNSIGNED_BYTE;if(r===od)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ld)return s.UNSIGNED_SHORT_5_5_5_1;if(r===q_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===X_)return s.BYTE;if(r===W_)return s.SHORT;if(r===Do)return s.UNSIGNED_SHORT;if(r===sd)return s.INT;if(r===xr)return s.UNSIGNED_INT;if(r===$i)return s.FLOAT;if(r===Uo)return s.HALF_FLOAT;if(r===Y_)return s.ALPHA;if(r===j_)return s.RGB;if(r===_i)return s.RGBA;if(r===Z_)return s.LUMINANCE;if(r===K_)return s.LUMINANCE_ALPHA;if(r===gs)return s.DEPTH_COMPONENT;if(r===Ms)return s.DEPTH_STENCIL;if(r===Q_)return s.RED;if(r===cd)return s.RED_INTEGER;if(r===J_)return s.RG;if(r===ud)return s.RG_INTEGER;if(r===fd)return s.RGBA_INTEGER;if(r===dc||r===pc||r===mc||r===gc)if(h===Oe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===dc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===dc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ch||r===wh||r===Dh||r===Uh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Ch)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Uh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nh||r===Lh||r===Oh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Nh||r===Lh)return h===Oe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Oh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ph||r===zh||r===Bh||r===Fh||r===Ih||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ph)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ih)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===_c||r===Zh||r===Kh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===_c)return h===Oe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$_||r===Qh||r===Jh||r===$h)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===_c)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Qh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$h)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ys?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const BT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class IT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Fn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ia({vertexShader:BT,fragmentShader:FT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ea(new Ac(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HT extends Ts{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,v=null,M=null,R=null;const w=new IT,y=i.getContextAttributes();let _=null,P=null;const O=[],U=[],H=new ze;let I=null;const F=new si;F.viewport=new je;const Q=new si;Q.viewport=new je;const C=[F,Q],b=new ly;let z=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let mt=O[X];return mt===void 0&&(mt=new oh,O[X]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(X){let mt=O[X];return mt===void 0&&(mt=new oh,O[X]=mt),mt.getGripSpace()},this.getHand=function(X){let mt=O[X];return mt===void 0&&(mt=new oh,O[X]=mt),mt.getHandSpace()};function at(X){const mt=U.indexOf(X.inputSource);if(mt===-1)return;const Mt=O[mt];Mt!==void 0&&(Mt.update(X.inputSource,X.frame,p||h),Mt.dispatchEvent({type:X.type,data:X.inputSource}))}function ht(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",ft);for(let X=0;X<O.length;X++){const mt=U[X];mt!==null&&(U[X]=null,O[X].disconnect(mt))}z=null,lt=null,w.reset(),e.setRenderTarget(_),M=null,v=null,x=null,l=null,P=null,bt.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){u=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",ft),y.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,At=null,Ct=null;y.depth&&(Ct=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=y.stencil?Ms:gs,At=y.stencil?ys:xr);const Qt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:u};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(Qt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new Sr(v.textureWidth,v.textureHeight,{format:_i,type:aa,depthTexture:new m0(v.textureWidth,v.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}else{const Mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Sr(M.framebufferWidth,M.framebufferHeight,{format:_i,type:aa,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),bt.setContext(l),bt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ft(X){for(let mt=0;mt<X.removed.length;mt++){const Mt=X.removed[mt],At=U.indexOf(Mt);At>=0&&(U[At]=null,O[At].disconnect(Mt))}for(let mt=0;mt<X.added.length;mt++){const Mt=X.added[mt];let At=U.indexOf(Mt);if(At===-1){for(let Qt=0;Qt<O.length;Qt++)if(Qt>=U.length){U.push(Mt),At=Qt;break}else if(U[Qt]===null){U[Qt]=Mt,At=Qt;break}if(At===-1)break}const Ct=O[At];Ct&&Ct.connect(Mt)}}const V=new st,rt=new st;function Y(X,mt,Mt){V.setFromMatrixPosition(mt.matrixWorld),rt.setFromMatrixPosition(Mt.matrixWorld);const At=V.distanceTo(rt),Ct=mt.projectionMatrix.elements,Qt=Mt.projectionMatrix.elements,zt=Ct[14]/(Ct[10]-1),ye=Ct[14]/(Ct[10]+1),Re=(Ct[9]+1)/Ct[5],ae=(Ct[9]-1)/Ct[5],B=(Ct[8]-1)/Ct[0],pn=(Qt[8]+1)/Qt[0],se=zt*B,fe=zt*pn,Xt=At/(-B+pn),Ce=Xt*-B;if(mt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ce),X.translateZ(Xt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ct[10]===-1)X.projectionMatrix.copy(mt.projectionMatrix),X.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Wt=zt+Xt,N=ye+Xt,E=se-Ce,nt=fe+(At-Ce),dt=Re*ye/N*Wt,St=ae*ye/N*Wt;X.projectionMatrix.makePerspective(E,nt,dt,St,Wt,N),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function xt(X,mt){mt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(mt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;let mt=X.near,Mt=X.far;w.texture!==null&&(w.depthNear>0&&(mt=w.depthNear),w.depthFar>0&&(Mt=w.depthFar)),b.near=Q.near=F.near=mt,b.far=Q.far=F.far=Mt,(z!==b.near||lt!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),z=b.near,lt=b.far),F.layers.mask=X.layers.mask|2,Q.layers.mask=X.layers.mask|4,b.layers.mask=F.layers.mask|Q.layers.mask;const At=X.parent,Ct=b.cameras;xt(b,At);for(let Qt=0;Qt<Ct.length;Qt++)xt(Ct[Qt],At);Ct.length===2?Y(b,F,Q):b.projectionMatrix.copy(F.projectionMatrix),D(X,b,At)};function D(X,mt,Mt){Mt===null?X.matrix.copy(mt.matrixWorld):(X.matrix.copy(Mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(mt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(mt.projectionMatrix),X.projectionMatrixInverse.copy(mt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=td*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(X){m=X,v!==null&&(v.fixedFoveation=X),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=X)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(b)};let J=null;function yt(X,mt){if(g=mt.getViewerPose(p||h),R=mt,g!==null){const Mt=g.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let At=!1;Mt.length!==b.cameras.length&&(b.cameras.length=0,At=!0);for(let zt=0;zt<Mt.length;zt++){const ye=Mt[zt];let Re=null;if(M!==null)Re=M.getViewport(ye);else{const B=x.getViewSubImage(v,ye);Re=B.viewport,zt===0&&(e.setRenderTargetTextures(P,B.colorTexture,v.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(P))}let ae=C[zt];ae===void 0&&(ae=new si,ae.layers.enable(zt),ae.viewport=new je,C[zt]=ae),ae.matrix.fromArray(ye.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ye.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Re.x,Re.y,Re.width,Re.height),zt===0&&(b.matrix.copy(ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),At===!0&&b.cameras.push(ae)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const zt=x.getDepthInformation(Mt[0]);zt&&zt.isValid&&zt.texture&&w.init(e,zt,l.renderState)}}for(let Mt=0;Mt<O.length;Mt++){const At=U[Mt],Ct=O[Mt];At!==null&&Ct!==void 0&&Ct.update(At,mt,p||h)}J&&J(X,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),R=null}const bt=new g0;bt.setAnimationLoop(yt),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}}const fr=new ra,GT=new Ze;function VT(s,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,u0(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,P,O,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),x(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),v(y,_),_.isMeshPhysicalMaterial&&M(y,_,U)):_.isMeshMatcapMaterial?(u(y,_),R(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),w(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,P,O):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Bn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Bn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const P=e.get(_),O=P.envMap,U=P.envMapRotation;O&&(y.envMap.value=O,fr.copy(U),fr.x*=-1,fr.y*=-1,fr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),y.envMapRotation.value.setFromMatrix4(GT.makeRotationFromEuler(fr)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,P,O){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*P,y.scale.value=O*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,P){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const P=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function kT(s,e,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const U=O.program;r.uniformBlockBinding(P,U)}function p(P,O){let U=l[P.id];U===void 0&&(R(P),U=g(P),l[P.id]=U,P.addEventListener("dispose",y));const H=O.program;r.updateUBOMapping(P,H);const I=e.render.frame;u[P.id]!==I&&(v(P),u[P.id]=I)}function g(P){const O=x();P.__bindingPointIndex=O;const U=s.createBuffer(),H=P.__size,I=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,H,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,U),U}function x(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const O=l[P.id],U=P.uniforms,H=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let I=0,F=U.length;I<F;I++){const Q=Array.isArray(U[I])?U[I]:[U[I]];for(let C=0,b=Q.length;C<b;C++){const z=Q[C];if(M(z,I,C,H)===!0){const lt=z.__offset,at=Array.isArray(z.value)?z.value:[z.value];let ht=0;for(let ft=0;ft<at.length;ft++){const V=at[ft],rt=w(V);typeof V=="number"||typeof V=="boolean"?(z.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,lt+ht,z.__data)):V.isMatrix3?(z.__data[0]=V.elements[0],z.__data[1]=V.elements[1],z.__data[2]=V.elements[2],z.__data[3]=0,z.__data[4]=V.elements[3],z.__data[5]=V.elements[4],z.__data[6]=V.elements[5],z.__data[7]=0,z.__data[8]=V.elements[6],z.__data[9]=V.elements[7],z.__data[10]=V.elements[8],z.__data[11]=0):(V.toArray(z.__data,ht),ht+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(P,O,U,H){const I=P.value,F=O+"_"+U;if(H[F]===void 0)return typeof I=="number"||typeof I=="boolean"?H[F]=I:H[F]=I.clone(),!0;{const Q=H[F];if(typeof I=="number"||typeof I=="boolean"){if(Q!==I)return H[F]=I,!0}else if(Q.equals(I)===!1)return Q.copy(I),!0}return!1}function R(P){const O=P.uniforms;let U=0;const H=16;for(let F=0,Q=O.length;F<Q;F++){const C=Array.isArray(O[F])?O[F]:[O[F]];for(let b=0,z=C.length;b<z;b++){const lt=C[b],at=Array.isArray(lt.value)?lt.value:[lt.value];for(let ht=0,ft=at.length;ht<ft;ht++){const V=at[ht],rt=w(V),Y=U%H,xt=Y%rt.boundary,D=Y+xt;U+=xt,D!==0&&H-D<rt.storage&&(U+=H-D),lt.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=U,U+=rt.storage}}}const I=U%H;return I>0&&(U+=H-I),P.__size=U,P.__cache={},this}function w(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const P in l)s.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class XT{constructor(e={}){const{canvas:i=RS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const R=new Uint32Array(4),w=new Int32Array(4);let y=null,_=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=za,this.toneMappingExposure=1;const U=this;let H=!1,I=0,F=0,Q=null,C=-1,b=null;const z=new je,lt=new je;let at=null;const ht=new we(0);let ft=0,V=i.width,rt=i.height,Y=1,xt=null,D=null;const J=new je(0,0,V,rt),yt=new je(0,0,V,rt);let bt=!1;const X=new d0;let mt=!1,Mt=!1;this.transmissionResolutionScale=1;const At=new Ze,Ct=new Ze,Qt=new st,zt=new je,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function ae(){return Q===null?Y:1}let B=r;function pn(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${rd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",wt,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),B===null){const q="webgl2";if(B=pn(q,A),B===null)throw pn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let se,fe,Xt,Ce,Wt,N,E,nt,dt,St,pt,Gt,Dt,Bt,pe,Tt,Ft,Yt,Vt,It,re,Zt,De,W;function Lt(){se=new tb(B),se.init(),Zt=new zT(B,se),fe=new jE(B,se,e,Zt),Xt=new OT(B,se),fe.reverseDepthBuffer&&v&&Xt.buffers.depth.setReversed(!0),Ce=new ib(B),Wt=new yT,N=new PT(B,se,Xt,Wt,fe,Zt,Ce),E=new KE(U),nt=new $E(U),dt=new uy(B),De=new qE(B,dt),St=new eb(B,dt,Ce,De),pt=new rb(B,St,dt,Ce),Vt=new ab(B,fe,N),Tt=new ZE(Wt),Gt=new ST(U,E,nt,se,fe,De,Tt),Dt=new VT(U,Wt),Bt=new ET,pe=new wT(se),Yt=new WE(U,E,nt,Xt,pt,M,m),Ft=new NT(U,pt,fe),W=new kT(B,Ce,fe,Xt),It=new YE(B,se,Ce),re=new nb(B,se,Ce),Ce.programs=Gt.programs,U.capabilities=fe,U.extensions=se,U.properties=Wt,U.renderLists=Bt,U.shadowMap=Ft,U.state=Xt,U.info=Ce}Lt();const ot=new HT(U,B);this.xr=ot,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(V,rt,!1))},this.getSize=function(A){return A.set(V,rt)},this.setSize=function(A,q,et=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,rt=q,i.width=Math.floor(A*Y),i.height=Math.floor(q*Y),et===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(V*Y,rt*Y).floor()},this.setDrawingBufferSize=function(A,q,et){V=A,rt=q,Y=et,i.width=Math.floor(A*et),i.height=Math.floor(q*et),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,q,et,$){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,q,et,$),Xt.viewport(z.copy(J).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(yt)},this.setScissor=function(A,q,et,$){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,q,et,$),Xt.scissor(lt.copy(yt).multiplyScalar(Y).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(A){Xt.setScissorTest(bt=A)},this.setOpaqueSort=function(A){xt=A},this.setTransparentSort=function(A){D=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(A=!0,q=!0,et=!0){let $=0;if(A){let j=!1;if(Q!==null){const Et=Q.texture.format;j=Et===fd||Et===ud||Et===cd}if(j){const Et=Q.texture.type,Rt=Et===aa||Et===xr||Et===Do||Et===ys||Et===od||Et===ld,Pt=Yt.getClearColor(),Ot=Yt.getClearAlpha(),te=Pt.r,ee=Pt.g,jt=Pt.b;Rt?(R[0]=te,R[1]=ee,R[2]=jt,R[3]=Ot,B.clearBufferuiv(B.COLOR,0,R)):(w[0]=te,w[1]=ee,w[2]=jt,w[3]=Ot,B.clearBufferiv(B.COLOR,0,w))}else $|=B.COLOR_BUFFER_BIT}q&&($|=B.DEPTH_BUFFER_BIT),et&&($|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",wt,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),Yt.dispose(),Bt.dispose(),pe.dispose(),Wt.dispose(),E.dispose(),nt.dispose(),pt.dispose(),De.dispose(),W.dispose(),Gt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Bo),ot.removeEventListener("sessionend",Rs),Si.stop()};function _t(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=Ce.autoReset,q=Ft.enabled,et=Ft.autoUpdate,$=Ft.needsUpdate,j=Ft.type;Lt(),Ce.autoReset=A,Ft.enabled=q,Ft.autoUpdate=et,Ft.needsUpdate=$,Ft.type=j}function Ut(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const q=A.target;q.removeEventListener("dispose",$t),He(q)}function He(A){tn(A),Wt.remove(A)}function tn(A){const q=Wt.get(A).programs;q!==void 0&&(q.forEach(function(et){Gt.releaseProgram(et)}),A.isShaderMaterial&&Gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,et,$,j,Et){q===null&&(q=ye);const Rt=j.isMesh&&j.matrixWorld.determinant()<0,Pt=Dc(A,q,et,$,j);Xt.setMaterial($,Rt);let Ot=et.index,te=1;if($.wireframe===!0){if(Ot=St.getWireframeAttribute(et),Ot===void 0)return;te=2}const ee=et.drawRange,jt=et.attributes.position;let me=ee.start*te,ge=(ee.start+ee.count)*te;Et!==null&&(me=Math.max(me,Et.start*te),ge=Math.min(ge,(Et.start+Et.count)*te)),Ot!==null?(me=Math.max(me,0),ge=Math.min(ge,Ot.count)):jt!=null&&(me=Math.max(me,0),ge=Math.min(ge,jt.count));const Ie=ge-me;if(Ie<0||Ie===1/0)return;De.setup(j,$,Pt,et,Ot);let Ee,ne=It;if(Ot!==null&&(Ee=dt.get(Ot),ne=re,ne.setIndex(Ee)),j.isMesh)$.wireframe===!0?(Xt.setLineWidth($.wireframeLinewidth*ae()),ne.setMode(B.LINES)):ne.setMode(B.TRIANGLES);else if(j.isLine){let Kt=$.linewidth;Kt===void 0&&(Kt=1),Xt.setLineWidth(Kt*ae()),j.isLineSegments?ne.setMode(B.LINES):j.isLineLoop?ne.setMode(B.LINE_LOOP):ne.setMode(B.LINE_STRIP)}else j.isPoints?ne.setMode(B.POINTS):j.isSprite&&ne.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ne.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ne.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Kt=j._multiDrawStarts,an=j._multiDrawCounts,_e=j._multiDrawCount,Nn=Ot?dt.get(Ot).bytesPerElement:1,oi=Wt.get($).currentProgram.getUniforms();for(let An=0;An<_e;An++)oi.setValue(B,"_gl_DrawID",An),ne.render(Kt[An]/Nn,an[An])}else if(j.isInstancedMesh)ne.renderInstances(me,Ie,j.count);else if(et.isInstancedBufferGeometry){const Kt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,an=Math.min(et.instanceCount,Kt);ne.renderInstances(me,Ie,an)}else ne.render(me,Ie)};function Me(A,q,et){A.transparent===!0&&A.side===Ji&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,nn(A,q,et),A.side=Fa,A.needsUpdate=!0,nn(A,q,et),A.side=Ji):nn(A,q,et)}this.compile=function(A,q,et=null){et===null&&(et=A),_=pe.get(et),_.init(q),O.push(_),et.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),A!==et&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const $=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Et=j.material;if(Et)if(Array.isArray(Et))for(let Rt=0;Rt<Et.length;Rt++){const Pt=Et[Rt];Me(Pt,et,j),$.add(Pt)}else Me(Et,et,j),$.add(Et)}),O.pop(),_=null,$},this.compileAsync=function(A,q,et=null){const $=this.compile(A,q,et);return new Promise(j=>{function Et(){if($.forEach(function(Rt){Wt.get(Rt).currentProgram.isReady()&&$.delete(Rt)}),$.size===0){j(A);return}setTimeout(Et,10)}se.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let bn=null;function Tn(A){bn&&bn(A)}function Bo(){Si.stop()}function Rs(){Si.start()}const Si=new g0;Si.setAnimationLoop(Tn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){bn=A,ot.setAnimationLoop(A),A===null?Si.stop():Si.start()},ot.addEventListener("sessionstart",Bo),ot.addEventListener("sessionend",Rs),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(q),q=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,q,Q),_=pe.get(A,O.length),_.init(q),O.push(_),Ct.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),X.setFromProjectionMatrix(Ct),Mt=this.localClippingEnabled,mt=Tt.init(this.clippingPlanes,Mt),y=Bt.get(A,P.length),y.init(),P.push(y),ot.enabled===!0&&ot.isPresenting===!0){const Et=U.xr.getDepthSensingMesh();Et!==null&&yr(Et,q,-1/0,U.sortObjects)}yr(A,q,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(xt,D),Re=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Re&&Yt.addToRenderList(y,A),this.info.render.frame++,mt===!0&&Tt.beginShadows();const et=_.state.shadowsArray;Ft.render(et,A,q),mt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=y.opaque,j=y.transmissive;if(_.setupLights(),q.isArrayCamera){const Et=q.cameras;if(j.length>0)for(let Rt=0,Pt=Et.length;Rt<Pt;Rt++){const Ot=Et[Rt];Fo($,j,A,Ot)}Re&&Yt.render(A);for(let Rt=0,Pt=Et.length;Rt<Pt;Rt++){const Ot=Et[Rt];Cs(y,A,Ot,Ot.viewport)}}else j.length>0&&Fo($,j,A,q),Re&&Yt.render(A),Cs(y,A,q);Q!==null&&F===0&&(N.updateMultisampleRenderTarget(Q),N.updateRenderTargetMipmap(Q)),A.isScene===!0&&A.onAfterRender(U,A,q),De.resetDefaultState(),C=-1,b=null,O.pop(),O.length>0?(_=O[O.length-1],mt===!0&&Tt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function yr(A,q,et,$){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)et=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||X.intersectsSprite(A)){$&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);const Rt=pt.update(A),Pt=A.material;Pt.visible&&y.push(A,Rt,Pt,et,zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||X.intersectsObject(A))){const Rt=pt.update(A),Pt=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),zt.copy(Rt.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(Pt)){const Ot=Rt.groups;for(let te=0,ee=Ot.length;te<ee;te++){const jt=Ot[te],me=Pt[jt.materialIndex];me&&me.visible&&y.push(A,Rt,me,et,zt.z,jt)}}else Pt.visible&&y.push(A,Rt,Pt,et,zt.z,null)}}const Et=A.children;for(let Rt=0,Pt=Et.length;Rt<Pt;Rt++)yr(Et[Rt],q,et,$)}function Cs(A,q,et,$){const j=A.opaque,Et=A.transmissive,Rt=A.transparent;_.setupLightsView(et),mt===!0&&Tt.setGlobalState(U.clippingPlanes,et),$&&Xt.viewport(z.copy($)),j.length>0&&Hn(j,q,et),Et.length>0&&Hn(Et,q,et),Rt.length>0&&Hn(Rt,q,et),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Fo(A,q,et,$){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[$.id]===void 0&&(_.state.transmissionRenderTarget[$.id]=new Sr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Uo:aa,minFilter:_r,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Et=_.state.transmissionRenderTarget[$.id],Rt=$.viewport||z;Et.setSize(Rt.z*U.transmissionResolutionScale,Rt.w*U.transmissionResolutionScale);const Pt=U.getRenderTarget();U.setRenderTarget(Et),U.getClearColor(ht),ft=U.getClearAlpha(),ft<1&&U.setClearColor(16777215,.5),U.clear(),Re&&Yt.render(et);const Ot=U.toneMapping;U.toneMapping=za;const te=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),_.setupLightsView($),mt===!0&&Tt.setGlobalState(U.clippingPlanes,$),Hn(A,et,$),N.updateMultisampleRenderTarget(Et),N.updateRenderTargetMipmap(Et),se.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let jt=0,me=q.length;jt<me;jt++){const ge=q[jt],Ie=ge.object,Ee=ge.geometry,ne=ge.material,Kt=ge.group;if(ne.side===Ji&&Ie.layers.test($.layers)){const an=ne.side;ne.side=Bn,ne.needsUpdate=!0,en(Ie,et,$,Ee,ne,Kt),ne.side=an,ne.needsUpdate=!0,ee=!0}}ee===!0&&(N.updateMultisampleRenderTarget(Et),N.updateRenderTargetMipmap(Et))}U.setRenderTarget(Pt),U.setClearColor(ht,ft),te!==void 0&&($.viewport=te),U.toneMapping=Ot}function Hn(A,q,et){const $=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Et=A.length;j<Et;j++){const Rt=A[j],Pt=Rt.object,Ot=Rt.geometry,te=$===null?Rt.material:$,ee=Rt.group;Pt.layers.test(et.layers)&&en(Pt,q,et,Ot,te,ee)}}function en(A,q,et,$,j,Et){A.onBeforeRender(U,q,et,$,j,Et),A.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(U,q,et,$,A,Et),j.transparent===!0&&j.side===Ji&&j.forceSinglePass===!1?(j.side=Bn,j.needsUpdate=!0,U.renderBufferDirect(et,q,$,j,A,Et),j.side=Fa,j.needsUpdate=!0,U.renderBufferDirect(et,q,$,j,A,Et),j.side=Ji):U.renderBufferDirect(et,q,$,j,A,Et),A.onAfterRender(U,q,et,$,j,Et)}function nn(A,q,et){q.isScene!==!0&&(q=ye);const $=Wt.get(A),j=_.state.lights,Et=_.state.shadowsArray,Rt=j.state.version,Pt=Gt.getParameters(A,j.state,Et,q,et),Ot=Gt.getProgramCacheKey(Pt);let te=$.programs;$.environment=A.isMeshStandardMaterial?q.environment:null,$.fog=q.fog,$.envMap=(A.isMeshStandardMaterial?nt:E).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,te===void 0&&(A.addEventListener("dispose",$t),te=new Map,$.programs=te);let ee=te.get(Ot);if(ee!==void 0){if($.currentProgram===ee&&$.lightsStateVersion===Rt)return Mr(A,Pt),ee}else Pt.uniforms=Gt.getUniforms(A),A.onBeforeCompile(Pt,U),ee=Gt.acquireProgram(Pt,Ot),te.set(Ot,ee),$.uniforms=Pt.uniforms;const jt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(jt.clippingPlanes=Tt.uniform),Mr(A,Pt),$.needsLights=Io(A),$.lightsStateVersion=Rt,$.needsLights&&(jt.ambientLightColor.value=j.state.ambient,jt.lightProbe.value=j.state.probe,jt.directionalLights.value=j.state.directional,jt.directionalLightShadows.value=j.state.directionalShadow,jt.spotLights.value=j.state.spot,jt.spotLightShadows.value=j.state.spotShadow,jt.rectAreaLights.value=j.state.rectArea,jt.ltc_1.value=j.state.rectAreaLTC1,jt.ltc_2.value=j.state.rectAreaLTC2,jt.pointLights.value=j.state.point,jt.pointLightShadows.value=j.state.pointShadow,jt.hemisphereLights.value=j.state.hemi,jt.directionalShadowMap.value=j.state.directionalShadowMap,jt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,jt.spotShadowMap.value=j.state.spotShadowMap,jt.spotLightMatrix.value=j.state.spotLightMatrix,jt.spotLightMap.value=j.state.spotLightMap,jt.pointShadowMap.value=j.state.pointShadowMap,jt.pointShadowMatrix.value=j.state.pointShadowMatrix),$.currentProgram=ee,$.uniformsList=null,ee}function wi(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=vc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Mr(A,q){const et=Wt.get(A);et.outputColorSpace=q.outputColorSpace,et.batching=q.batching,et.batchingColor=q.batchingColor,et.instancing=q.instancing,et.instancingColor=q.instancingColor,et.instancingMorph=q.instancingMorph,et.skinning=q.skinning,et.morphTargets=q.morphTargets,et.morphNormals=q.morphNormals,et.morphColors=q.morphColors,et.morphTargetsCount=q.morphTargetsCount,et.numClippingPlanes=q.numClippingPlanes,et.numIntersection=q.numClipIntersection,et.vertexAlphas=q.vertexAlphas,et.vertexTangents=q.vertexTangents,et.toneMapping=q.toneMapping}function Dc(A,q,et,$,j){q.isScene!==!0&&(q=ye),N.resetTextureUnits();const Et=q.fog,Rt=$.isMeshStandardMaterial?q.environment:null,Pt=Q===null?U.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Es,Ot=($.isMeshStandardMaterial?nt:E).get($.envMap||Rt),te=$.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ee=!!et.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),jt=!!et.morphAttributes.position,me=!!et.morphAttributes.normal,ge=!!et.morphAttributes.color;let Ie=za;$.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ie=U.toneMapping);const Ee=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,ne=Ee!==void 0?Ee.length:0,Kt=Wt.get($),an=_.state.lights;if(mt===!0&&(Mt===!0||A!==b)){const ke=A===b&&$.id===C;Tt.setState($,A,ke)}let _e=!1;$.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==an.state.version||Kt.outputColorSpace!==Pt||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==Ot||$.fog===!0&&Kt.fog!==Et||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Tt.numPlanes||Kt.numIntersection!==Tt.numIntersection)||Kt.vertexAlphas!==te||Kt.vertexTangents!==ee||Kt.morphTargets!==jt||Kt.morphNormals!==me||Kt.morphColors!==ge||Kt.toneMapping!==Ie||Kt.morphTargetsCount!==ne)&&(_e=!0):(_e=!0,Kt.__version=$.version);let Nn=Kt.currentProgram;_e===!0&&(Nn=nn($,q,j));let oi=!1,An=!1,cn=!1;const Ue=Nn.getUniforms(),Rn=Kt.uniforms;if(Xt.useProgram(Nn.program)&&(oi=!0,An=!0,cn=!0),$.id!==C&&(C=$.id,An=!0),oi||b!==A){Xt.buffers.depth.getReversed()?(At.copy(A.projectionMatrix),wS(At),DS(At),Ue.setValue(B,"projectionMatrix",At)):Ue.setValue(B,"projectionMatrix",A.projectionMatrix),Ue.setValue(B,"viewMatrix",A.matrixWorldInverse);const mn=Ue.map.cameraPosition;mn!==void 0&&mn.setValue(B,Qt.setFromMatrixPosition(A.matrixWorld)),fe.logarithmicDepthBuffer&&Ue.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ue.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,An=!0,cn=!0)}if(j.isSkinnedMesh){Ue.setOptional(B,j,"bindMatrix"),Ue.setOptional(B,j,"bindMatrixInverse");const ke=j.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Ue.setValue(B,"boneTexture",ke.boneTexture,N))}j.isBatchedMesh&&(Ue.setOptional(B,j,"batchingTexture"),Ue.setValue(B,"batchingTexture",j._matricesTexture,N),Ue.setOptional(B,j,"batchingIdTexture"),Ue.setValue(B,"batchingIdTexture",j._indirectTexture,N),Ue.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Ue.setValue(B,"batchingColorTexture",j._colorsTexture,N));const xn=et.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Vt.update(j,et,Nn),(An||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,Ue.setValue(B,"receiveShadow",j.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Rn.envMap.value=Ot,Rn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&q.environment!==null&&(Rn.envMapIntensity.value=q.environmentIntensity),An&&(Ue.setValue(B,"toneMappingExposure",U.toneMappingExposure),Kt.needsLights&&Uc(Rn,cn),Et&&$.fog===!0&&Dt.refreshFogUniforms(Rn,Et),Dt.refreshMaterialUniforms(Rn,$,Y,rt,_.state.transmissionRenderTarget[A.id]),vc.upload(B,wi(Kt),Rn,N)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(vc.upload(B,wi(Kt),Rn,N),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ue.setValue(B,"center",j.center),Ue.setValue(B,"modelViewMatrix",j.modelViewMatrix),Ue.setValue(B,"normalMatrix",j.normalMatrix),Ue.setValue(B,"modelMatrix",j.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const ke=$.uniformsGroups;for(let mn=0,Er=ke.length;mn<Er;mn++){const Ln=ke[mn];W.update(Ln,Nn),W.bind(Ln,Nn)}}return Nn}function Uc(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Io(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,q,et){Wt.get(A.texture).__webglTexture=q,Wt.get(A.depthTexture).__webglTexture=et;const $=Wt.get(A);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=et===void 0,$.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,q){const et=Wt.get(A);et.__webglFramebuffer=q,et.__useDefaultFramebuffer=q===void 0};const Ha=B.createFramebuffer();this.setRenderTarget=function(A,q=0,et=0){Q=A,I=q,F=et;let $=!0,j=null,Et=!1,Rt=!1;if(A){const Ot=Wt.get(A);if(Ot.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(B.FRAMEBUFFER,null),$=!1;else if(Ot.__webglFramebuffer===void 0)N.setupRenderTarget(A);else if(Ot.__hasExternalTextures)N.rebindTextures(A,Wt.get(A.texture).__webglTexture,Wt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const jt=A.depthTexture;if(Ot.__boundDepthTexture!==jt){if(jt!==null&&Wt.has(jt)&&(A.width!==jt.image.width||A.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Rt=!0);const ee=Wt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?j=ee[q][et]:j=ee[q],Et=!0):A.samples>0&&N.useMultisampledRTT(A)===!1?j=Wt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?j=ee[et]:j=ee,z.copy(A.viewport),lt.copy(A.scissor),at=A.scissorTest}else z.copy(J).multiplyScalar(Y).floor(),lt.copy(yt).multiplyScalar(Y).floor(),at=bt;if(et!==0&&(j=Ha),Xt.bindFramebuffer(B.FRAMEBUFFER,j)&&$&&Xt.drawBuffers(A,j),Xt.viewport(z),Xt.scissor(lt),Xt.setScissorTest(at),Et){const Ot=Wt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,et)}else if(Rt){const Ot=Wt.get(A.texture),te=q;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ot.__webglTexture,et,te)}else if(A!==null&&et!==0){const Ot=Wt.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ot.__webglTexture,et)}C=-1},this.readRenderTargetPixels=function(A,q,et,$,j,Et,Rt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){Xt.bindFramebuffer(B.FRAMEBUFFER,Pt);try{const Ot=A.texture,te=Ot.format,ee=Ot.type;if(!fe.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-$&&et>=0&&et<=A.height-j&&B.readPixels(q,et,$,j,Zt.convert(te),Zt.convert(ee),Et)}finally{const Ot=Q!==null?Wt.get(Q).__webglFramebuffer:null;Xt.bindFramebuffer(B.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(A,q,et,$,j,Et,Rt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Wt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){const Ot=A.texture,te=Ot.format,ee=Ot.type;if(!fe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=A.width-$&&et>=0&&et<=A.height-j){Xt.bindFramebuffer(B.FRAMEBUFFER,Pt);const jt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,jt),B.bufferData(B.PIXEL_PACK_BUFFER,Et.byteLength,B.STREAM_READ),B.readPixels(q,et,$,j,Zt.convert(te),Zt.convert(ee),0);const me=Q!==null?Wt.get(Q).__webglFramebuffer:null;Xt.bindFramebuffer(B.FRAMEBUFFER,me);const ge=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await CS(B,ge,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,jt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Et),B.deleteBuffer(jt),B.deleteSync(ge),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,q=null,et=0){A.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1]);const $=Math.pow(2,-et),j=Math.floor(A.image.width*$),Et=Math.floor(A.image.height*$),Rt=q!==null?q.x:0,Pt=q!==null?q.y:0;N.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,et,0,0,Rt,Pt,j,Et),Xt.unbindTexture()};const ws=B.createFramebuffer(),Di=B.createFramebuffer();this.copyTextureToTexture=function(A,q,et=null,$=null,j=0,Et=null){A.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1],q=arguments[2],Et=arguments[3]||0,et=null),Et===null&&(j!==0?(ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=j,j=0):Et=0);let Rt,Pt,Ot,te,ee,jt,me,ge,Ie;const Ee=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(et!==null)Rt=et.max.x-et.min.x,Pt=et.max.y-et.min.y,Ot=et.isBox3?et.max.z-et.min.z:1,te=et.min.x,ee=et.min.y,jt=et.isBox3?et.min.z:0;else{const xn=Math.pow(2,-j);Rt=Math.floor(Ee.width*xn),Pt=Math.floor(Ee.height*xn),A.isDataArrayTexture?Ot=Ee.depth:A.isData3DTexture?Ot=Math.floor(Ee.depth*xn):Ot=1,te=0,ee=0,jt=0}$!==null?(me=$.x,ge=$.y,Ie=$.z):(me=0,ge=0,Ie=0);const ne=Zt.convert(q.format),Kt=Zt.convert(q.type);let an;q.isData3DTexture?(N.setTexture3D(q,0),an=B.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(N.setTexture2DArray(q,0),an=B.TEXTURE_2D_ARRAY):(N.setTexture2D(q,0),an=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const _e=B.getParameter(B.UNPACK_ROW_LENGTH),Nn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),oi=B.getParameter(B.UNPACK_SKIP_PIXELS),An=B.getParameter(B.UNPACK_SKIP_ROWS),cn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ee.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ee.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,te),B.pixelStorei(B.UNPACK_SKIP_ROWS,ee),B.pixelStorei(B.UNPACK_SKIP_IMAGES,jt);const Ue=A.isDataArrayTexture||A.isData3DTexture,Rn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const xn=Wt.get(A),ke=Wt.get(q),mn=Wt.get(xn.__renderTarget),Er=Wt.get(ke.__renderTarget);Xt.bindFramebuffer(B.READ_FRAMEBUFFER,mn.__webglFramebuffer),Xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let Ln=0;Ln<Ot;Ln++)Ue&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Wt.get(A).__webglTexture,j,jt+Ln),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Wt.get(q).__webglTexture,Et,Ie+Ln)),B.blitFramebuffer(te,ee,Rt,Pt,me,ge,Rt,Pt,B.DEPTH_BUFFER_BIT,B.NEAREST);Xt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Wt.has(A)){const xn=Wt.get(A),ke=Wt.get(q);Xt.bindFramebuffer(B.READ_FRAMEBUFFER,ws),Xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Di);for(let mn=0;mn<Ot;mn++)Ue?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,xn.__webglTexture,j,jt+mn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,xn.__webglTexture,j),Rn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,Et,Ie+mn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ke.__webglTexture,Et),j!==0?B.blitFramebuffer(te,ee,Rt,Pt,me,ge,Rt,Pt,B.COLOR_BUFFER_BIT,B.NEAREST):Rn?B.copyTexSubImage3D(an,Et,me,ge,Ie+mn,te,ee,Rt,Pt):B.copyTexSubImage2D(an,Et,me,ge,te,ee,Rt,Pt);Xt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(an,Et,me,ge,Ie,Rt,Pt,Ot,ne,Kt,Ee.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(an,Et,me,ge,Ie,Rt,Pt,Ot,ne,Ee.data):B.texSubImage3D(an,Et,me,ge,Ie,Rt,Pt,Ot,ne,Kt,Ee):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Et,me,ge,Rt,Pt,ne,Kt,Ee.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Et,me,ge,Ee.width,Ee.height,ne,Ee.data):B.texSubImage2D(B.TEXTURE_2D,Et,me,ge,Rt,Pt,ne,Kt,Ee);B.pixelStorei(B.UNPACK_ROW_LENGTH,_e),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,oi),B.pixelStorei(B.UNPACK_SKIP_ROWS,An),B.pixelStorei(B.UNPACK_SKIP_IMAGES,cn),Et===0&&q.generateMipmaps&&B.generateMipmap(an),Xt.unbindTexture()},this.copyTextureToTexture3D=function(A,q,et=null,$=null,j=0){return A.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,$=arguments[1]||null,A=arguments[2],q=arguments[3],j=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,et,$,j)},this.initRenderTarget=function(A){Wt.get(A).__webglFramebuffer===void 0&&N.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?N.setTextureCube(A,0):A.isData3DTexture?N.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?N.setTexture2DArray(A,0):N.setTexture2D(A,0),Xt.unbindTexture()},this.resetState=function(){I=0,F=0,Q=null,Xt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}function WT(){const s=Un.useRef(null);return Un.useEffect(()=>{const e=new ey,i=new si(75,window.innerWidth/window.innerHeight,.1,1e3),r=new XT;r.setSize(window.innerWidth,window.innerHeight),s.current.appendChild(r.domElement),i.position.z=5;const l=new sa,u=1500,h=new Float32Array(u*3);for(let v=0;v<u*3;v++)h[v]=(Math.random()-.5)*100;l.setAttribute("position",new xi(h,3));const d=new p0({color:16777215,size:.1}),m=new ay(l,d);e.add(m);const p=v=>{const M=v.clientX/window.innerWidth*2-1,R=-(v.clientY/window.innerHeight)*2+1;m.rotation.x+=R*.01,m.rotation.y+=M*.01};window.addEventListener("mousemove",p);const g=()=>{const v=window.innerWidth,M=window.innerHeight;r.setSize(v,M),i.aspect=v/M,i.updateProjectionMatrix()};window.addEventListener("resize",g);const x=()=>{requestAnimationFrame(x),m.rotation.x+=.001,m.rotation.y+=.001,r.render(e,i)};return x(),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("resize",g)}},[]),K.jsx("div",{ref:s,className:"fixed inset-0 -z-1 w-full h-full"})}const qT=[{_id:1,data:"HOME",Link:"home"},{_id:2,data:"EDUCATION",Link:"education"},{_id:3,data:"SKILLS",Link:"skills"},{_id:4,data:"CETIFICATION",Link:"cetification"},{_id:5,data:"PROJECTS",Link:"projects"},{_id:6,data:"CONTACT",Link:"contacts"}],YT=()=>K.jsxs("div",{className:"fixed w-full flex justify-between",children:[K.jsx("a",{href:"#",className:"text-3xl font-extrabold p-4 text-red-600 animate-bounce hidden md:flex",children:"DK_DEV"}),K.jsx("nav",{className:"text-white py-2 pr-4 hidden md:flex",children:qT.map(s=>K.jsx("a",{href:`#${s.Link}`,className:"ml-8  font-medium text-lg hover:text-red-500 border-b-2 border-transparent hover:border-red-500",children:s.data},s._id))})]}),jT="/my-portfolio/assets/profile-CN-nKupd.png";function Cc(s,e,i,r){return new(i||(i=Promise))(function(l,u){function h(p){try{m(r.next(p))}catch(g){u(g)}}function d(p){try{m(r.throw(p))}catch(g){u(g)}}function m(p){var g;p.done?l(p.value):(g=p.value,g instanceof i?g:new i(function(x){x(g)})).then(h,d)}m((r=r.apply(s,[])).next())})}function Ba(s,e){var i,r,l,u,h={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return u={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function d(m){return function(p){return function(g){if(i)throw new TypeError("Generator is already executing.");for(;h;)try{if(i=1,r&&(l=2&g[0]?r.return:g[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,g[1])).done)return l;switch(r=0,l&&(g=[2&g[0],l.value]),g[0]){case 0:case 1:l=g;break;case 4:return h.label++,{value:g[1],done:!1};case 5:h.label++,r=g[1],g=[0];continue;case 7:g=h.ops.pop(),h.trys.pop();continue;default:if(l=h.trys,!((l=l.length>0&&l[l.length-1])||g[0]!==6&&g[0]!==2)){h=0;continue}if(g[0]===3&&(!l||g[1]>l[0]&&g[1]<l[3])){h.label=g[1];break}if(g[0]===6&&h.label<l[1]){h.label=l[1],l=g;break}if(l&&h.label<l[2]){h.label=l[2],h.ops.push(g);break}l[2]&&h.ops.pop(),h.trys.pop();continue}g=e.call(s,h)}catch(x){g=[6,x],r=0}finally{i=l=0}if(5&g[0])throw g[1];return{value:g[0]?g[1]:void 0,done:!0}}([m,p])}}}function id(s){var e=typeof Symbol=="function"&&Symbol.iterator,i=e&&s[e],r=0;if(i)return i.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&r>=s.length&&(s=void 0),{value:s&&s[r++],done:!s}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function gi(s,e){var i=typeof Symbol=="function"&&s[Symbol.iterator];if(!i)return s;var r,l,u=i.call(s),h=[];try{for(;(e===void 0||e-- >0)&&!(r=u.next()).done;)h.push(r.value)}catch(d){l={error:d}}finally{try{r&&!r.done&&(i=u.return)&&i.call(u)}finally{if(l)throw l.error}}return h}function Ri(s,e,i){if(arguments.length===2)for(var r,l=0,u=e.length;l<u;l++)!r&&l in e||(r||(r=Array.prototype.slice.call(e,0,l)),r[l]=e[l]);return s.concat(r||Array.prototype.slice.call(e))}function B_(s,e,i,r,l){for(var u=[],h=5;h<arguments.length;h++)u[h-5]=arguments[h];return Cc(this,void 0,void 0,function(){var d,m,p,g,x,v;return Ba(this,function(M){switch(M.label){case 0:M.trys.push([0,12,13,14]),d=id(u),m=d.next(),M.label=1;case 1:if(m.done)return[3,11];switch(p=m.value,typeof p){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,ZT(s,e,p,i,r,l)];case 3:return M.sent(),[3,10];case 4:return[4,y0(p)];case 5:return M.sent(),[3,10];case 6:return[4,p.apply(void 0,Ri([s,e,i,r,l],gi(u),!1))];case 7:return M.sent(),[3,10];case 8:return[4,p];case 9:M.sent(),M.label=10;case 10:return m=d.next(),[3,1];case 11:return[3,14];case 12:return g=M.sent(),x={error:g},[3,14];case 13:try{m&&!m.done&&(v=d.return)&&v.call(d)}finally{if(x)throw x.error}return[7];case 14:return[2]}})})}function ZT(s,e,i,r,l,u){return Cc(this,void 0,void 0,function(){var h,d;return Ba(this,function(m){switch(m.label){case 0:return h=s.textContent||"",d=function(p,g){var x=gi(g).slice(0);return Ri(Ri([],gi(p),!1),[NaN],!1).findIndex(function(v,M){return x[M]!==v})}(h,i),[4,KT(s,Ri(Ri([],gi(JT(h,e,d)),!1),gi(QT(i,e,d)),!1),r,l,u)];case 1:return m.sent(),[2]}})})}function y0(s){return Cc(this,void 0,void 0,function(){return Ba(this,function(e){switch(e.label){case 0:return[4,new Promise(function(i){return setTimeout(i,s)})];case 1:return e.sent(),[2]}})})}function KT(s,e,i,r,l){return Cc(this,void 0,void 0,function(){var u,h,d,m,p,g,x,v,M,R,w,y,_;return Ba(this,function(P){switch(P.label){case 0:if(u=e,l){for(h=0,d=1;d<e.length;d++)if(m=gi([e[d-1],e[d]],2),p=m[0],(g=m[1]).length>p.length||g===""){h=d;break}u=e.slice(h,e.length)}P.label=1;case 1:P.trys.push([1,6,7,8]),x=id(function(O){var U,H,I,F,Q,C,b;return Ba(this,function(z){switch(z.label){case 0:U=function(lt){return Ba(this,function(at){switch(at.label){case 0:return[4,{op:function(ht){return requestAnimationFrame(function(){return ht.textContent=lt})},opCode:function(ht){var ft=ht.textContent||"";return lt===""||ft.length>lt.length?"DELETE":"WRITING"}}];case 1:return at.sent(),[2]}})},z.label=1;case 1:z.trys.push([1,6,7,8]),H=id(O),I=H.next(),z.label=2;case 2:return I.done?[3,5]:(F=I.value,[5,U(F)]);case 3:z.sent(),z.label=4;case 4:return I=H.next(),[3,2];case 5:return[3,8];case 6:return Q=z.sent(),C={error:Q},[3,8];case 7:try{I&&!I.done&&(b=H.return)&&b.call(H)}finally{if(C)throw C.error}return[7];case 8:return[2]}})}(u)),v=x.next(),P.label=2;case 2:return v.done?[3,5]:(M=v.value,R=M.opCode(s)==="WRITING"?i+i*(Math.random()-.5):r+r*(Math.random()-.5),M.op(s),[4,y0(R)]);case 3:P.sent(),P.label=4;case 4:return v=x.next(),[3,2];case 5:return[3,8];case 6:return w=P.sent(),y={error:w},[3,8];case 7:try{v&&!v.done&&(_=x.return)&&_.call(x)}finally{if(y)throw y.error}return[7];case 8:return[2]}})})}function QT(s,e,i){var r,l;return i===void 0&&(i=0),Ba(this,function(u){switch(u.label){case 0:r=e(s),l=r.length,u.label=1;case 1:return i<l?[4,r.slice(0,++i).join("")]:[3,3];case 2:return u.sent(),[3,1];case 3:return[2]}})}function JT(s,e,i){var r,l;return i===void 0&&(i=0),Ba(this,function(u){switch(u.label){case 0:r=e(s),l=r.length,u.label=1;case 1:return l>i?[4,r.slice(0,--l).join("")]:[3,3];case 2:return u.sent(),[3,1];case 3:return[2]}})}var $T="index-module_type__E-SaG";(function(s,e){e===void 0&&(e={});var i=e.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",i==="top"&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=s:l.appendChild(document.createTextNode(s))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var t1=Un.memo(Un.forwardRef(function(s,e){var i=s.sequence,r=s.repeat,l=s.className,u=s.speed,h=u===void 0?40:u,d=s.deletionSpeed,m=s.omitDeletionAnimation,p=m!==void 0&&m,g=s.preRenderFirstString,x=g!==void 0&&g,v=s.wrapper,M=v===void 0?"span":v,R=s.splitter,w=R===void 0?function(D){return Ri([],gi(D),!1)}:R,y=s.cursor,_=y===void 0||y,P=s.style,O=function(D,J){var yt={};for(var bt in D)Object.prototype.hasOwnProperty.call(D,bt)&&J.indexOf(bt)<0&&(yt[bt]=D[bt]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function"){var X=0;for(bt=Object.getOwnPropertySymbols(D);X<bt.length;X++)J.indexOf(bt[X])<0&&Object.prototype.propertyIsEnumerable.call(D,bt[X])&&(yt[bt[X]]=D[bt[X]])}return yt}(s,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),U=O["aria-label"],H=O["aria-hidden"],I=O.role;d||(d=h);var F=new Array(2).fill(40);[h,d].forEach(function(D,J){switch(typeof D){case"number":F[J]=Math.abs(D-100);break;case"object":var yt=D.type,bt=D.value;if(typeof bt!="number")break;yt==="keyStrokeDelayInMs"&&(F[J]=bt)}});var Q,C,b,z,lt,at,ht=F[0],ft=F[1],V=function(D,J){J===void 0&&(J=null);var yt=Un.useRef(J);return Un.useEffect(function(){D&&(typeof D=="function"?D(yt.current):D.current=yt.current)},[D]),yt}(e),rt=$T;Q=l?"".concat(_?rt+" ":"").concat(l):_?rt:"",C=Un.useRef(function(){var D,J=i;r===1/0?D=B_:typeof r=="number"&&(J=Array(1+r).fill(i).flat());var yt=D?Ri(Ri([],gi(J),!1),[D],!1):Ri([],gi(J),!1);return B_.apply(void 0,Ri([V.current,w,ht,ft,p],gi(yt),!1)),function(){V.current}}),b=Un.useRef(),z=Un.useRef(!1),lt=Un.useRef(!1),at=gi(Un.useState(0),2)[1],z.current&&(lt.current=!0),Un.useEffect(function(){return z.current||(b.current=C.current(),z.current=!0),at(function(D){return D+1}),function(){lt.current&&b.current&&b.current()}},[]);var Y=M,xt=x?i.find(function(D){return typeof D=="string"})||"":null;return na.createElement(Y,{"aria-hidden":H,"aria-label":U,role:I,style:P,className:Q,children:U?na.createElement("span",{"aria-hidden":"true",ref:V,children:xt}):xt,ref:U?void 0:V})}),function(s,e){return!0}),M0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},F_=na.createContext&&na.createContext(M0),e1=["attr","size","title"];function n1(s,e){if(s==null)return{};var i=i1(s,e),r,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(s);for(l=0;l<u.length;l++)r=u[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(i[r]=s[r])}return i}function i1(s,e){if(s==null)return{};var i={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;i[r]=s[r]}return i}function Mc(){return Mc=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(s[r]=i[r])}return s},Mc.apply(this,arguments)}function I_(s,e){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(s,l).enumerable})),i.push.apply(i,r)}return i}function Ec(s){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?I_(Object(i),!0).forEach(function(r){a1(s,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):I_(Object(i)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(i,r))})}return s}function a1(s,e,i){return e=r1(e),e in s?Object.defineProperty(s,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[e]=i,s}function r1(s){var e=s1(s,"string");return typeof e=="symbol"?e:e+""}function s1(s,e){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var r=i.call(s,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function E0(s){return s&&s.map((e,i)=>na.createElement(e.tag,Ec({key:i},e.attr),E0(e.child)))}function wc(s){return e=>na.createElement(o1,Mc({attr:Ec({},s.attr)},e),E0(s.child))}function o1(s){var e=i=>{var{attr:r,size:l,title:u}=s,h=n1(s,e1),d=l||i.size||"1em",m;return i.className&&(m=i.className),s.className&&(m=(m?m+" ":"")+s.className),na.createElement("svg",Mc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,r,h,{className:m,style:Ec(Ec({color:s.color||i.color},i.style),s.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&na.createElement("title",null,u),s.children)};return F_!==void 0?na.createElement(F_.Consumer,null,i=>e(i)):e(M0)}function l1(s){return wc({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(s)}function c1(s){return wc({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function u1(s){return wc({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(s)}function f1(s){return wc({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(s)}const h1=[{href:"https://www.linkedin.com/in/dilshan-kavishka-npmrun/",components:K.jsx(f1,{})},{href:"https://github.com/Dilshan-Kavishaka-Karunarathna",components:K.jsx(c1,{})},{href:"https://www.instagram.com/dilshankavishka.50/",components:K.jsx(u1,{})},{href:"https://web.facebook.com/profile.php?id=100030895507852",components:K.jsx(l1,{})}],d1=()=>K.jsx("div",{className:"flex justify-center md:justify-start space-x-4 mb-6 sm:mb-6",children:h1.map((s,e)=>K.jsx("a",{href:s.href,className:"w-10 h-10 flex items-center justify-center border-2 border-red-500 rounded-full hover:text-red-500",children:s.components}))}),p1=()=>K.jsx("div",{children:K.jsx("a",{href:"/abc.pdf",download:"abc.pdf",children:K.jsx("button",{className:"border-2 border-red-500 rounded-full  p-4 text-red-500 font-semibold hover:bg-red-500 hover:text-black hover:scale-110",children:"Download CV"})})}),m1=()=>K.jsxs("section",{id:"home",className:"flex flex-col md:flex-row items-center justify-center min-h-screen px-6",children:[K.jsx("div",{className:"md:w-1/2 flex justify-center",children:K.jsx("img",{src:jT,alt:"DK_DEV",className:"rounded-full w-50 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300 "})}),K.jsxs("div",{className:"text-white md:w-1/2 text-center md:text-left mt-6 md:mt-0",children:[K.jsxs("h1",{className:"text-4xl font-bold sm:text-7xl mb-4",children:["Hi, It's ",K.jsx("span",{className:"text-red-600 font-bold",children:"DILSHAN"})]}),K.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold mb-4 mt-0",children:["I'm a ",K.jsx("span",{className:"text-red-600",children:K.jsx(t1,{sequence:["Frontend Developer",1e3,"Full Stack Developer",1e3,"Software Engineer",1e3],speed:50,style:{fontSize:"1re"},repeat:1/0})})]}),K.jsx("p",{className:"mr-1.5 text-sm sm:text-lg mb-6",children:"I am a dedicated undergraduate student at the Faculty of Technology, Rajarata University of Sri Lanka, with a strong foundation in programming, algorithms, and software engineering principles. Specializing in full-stack web development, I have hands-on experience in building dynamic web applications and interactive user interfaces. I am proficient in technologies such as HTML5, CSS, JavaScript, React, MongoDB, Firebase and I am skilled in managing projects and client relationships effectively."}),K.jsx(d1,{}),K.jsx(p1,{})]})]}),H_=({title:s,des:e})=>K.jsxs("div",{className:"transition duration-300 w-1/2 h-80 bg-gradient-to-br from-gray-800 via-gray-900 to-black mt-10 text-white hover:scale-110 rounded-3xl shadow-2xl border-gray-700 shadow-md rounded-lg p-6 text-center",children:[K.jsx("div",{className:"justify-center items-center flex p-4 font-bold font-serif text-3xl mt-6",children:s}),K.jsx("div",{className:"mx-4 items-center justify-center text-xl mt-6 font-semibold",children:e})]}),g1=()=>K.jsx("section",{id:"education",className:"text-white w-full h-[700px]  ",children:K.jsxs("div",{className:"pt-20",children:[K.jsx("div",{className:"text-4xl text-red-500 font-extrabold  flex flex-col items-center font-serif ",children:"EDUCATION"}),K.jsxs("div",{className:"flex gap-10 mx-10 mt-10",children:[K.jsx(H_,{title:"SCHOOL EDUCATION",des:`I studied Engineering Technology at Central College Kuliyapitiya from 2017 to 2019, where\r
         I gained a strong foundation in engineering concepts, problem-solving, and hands-on innovation.\r
          This experience fueled my passion for technology\r
        and equipped me with the skills to approach challenges with creativity and precision.`}),K.jsx(H_,{title:"UNIVERSITY EDUCATION",des:`Since 2021, I have been studying Information and Communication Technology at \r
        Rajarata University of Sri Lanka, gaining a strong foundation in computing, networking,\r
         and software development. This journey has enhanced my problem-solving skills and fueled\r
          my passion for creating impactful tech solutions.`})]})]})}),_1=()=>K.jsxs("section",{id:"skills",className:"w-full h-[820px] ",children:[K.jsx("div",{className:"p-12 font-serif font-bold",children:K.jsx("div",{children:K.jsx("h2",{className:"text-4xl text-red-500 items-center justify-center flex ",children:"MY SKILLS"})})}),K.jsxs("div",{className:"flex uppercase font-bold font-sans",children:[K.jsxs("div",{className:"w-1/2",children:[K.jsx("div",{className:"text-3xl text-white justify-center flex",children:"Technical Skills"}),K.jsxs("div",{className:"mt-7",children:[K.jsxs("div",{className:"text-white py-0 p-20 mb-8 ",children:[K.jsx("p",{children:"HTML"}),K.jsx("span",{className:"w-full h-2 bg-amber-50 inline-flex",children:K.jsx("span",{className:"w-[90%] h-2 bg-amber-600 inline-flex rounded-r-2xl relative",children:K.jsx("span",{className:"absolute -top-6 right-0",children:"90%"})})})]}),K.jsxs("div",{className:"text-white py-0 p-20 mt-2 mb-8",children:[K.jsx("p",{children:"CSS"}),K.jsx("span",{className:"w-full h-2 bg-amber-50 inline-flex",children:K.jsx("span",{className:"w-[70%] h-2 bg-amber-600 inline-flex rounded-r-2xl relative",children:K.jsx("span",{className:"absolute -top-6 right-0",children:"70%"})})})]}),K.jsxs("div",{className:"text-white py-0 p-20 mt-2 mb-8",children:[K.jsx("p",{children:"JAVASCRIPT"}),K.jsx("span",{className:"w-full h-2 bg-amber-50 inline-flex",children:K.jsx("span",{className:"w-[75%] h-2 bg-amber-600 inline-flex rounded-r-2xl relative",children:K.jsx("span",{className:"absolute -top-6 right-0",children:"75%"})})})]}),K.jsxs("div",{className:"text-white py-0 p-20 mt-2 mb-8",children:[K.jsx("p",{children:"REACT"}),K.jsx("span",{className:"w-full h-2 bg-amber-50 inline-flex",children:K.jsx("span",{className:"w-[70%] h-2 bg-amber-600 inline-flex rounded-r-2xl relative",children:K.jsx("span",{className:"absolute -top-6 right-0",children:"70%"})})})]}),K.jsxs("div",{className:"text-white py-0 p-20 mt-2 mb-8",children:[K.jsx("p",{children:"TAILWIND CSS"}),K.jsx("span",{className:"w-full h-2 bg-amber-50 inline-flex",children:K.jsx("span",{className:"w-[80%] h-2 bg-amber-600 inline-flex rounded-r-2xl relative",children:K.jsx("span",{className:"absolute -top-6 right-0",children:"80%"})})})]}),K.jsxs("div",{className:"text-white py-0 p-20 mt-2 mb-8",children:[K.jsx("p",{children:"FIREBASE"}),K.jsx("span",{className:"w-full h-2 bg-amber-50 inline-flex",children:K.jsx("span",{className:"w-[65%] h-2 bg-amber-600 inline-flex rounded-r-2xl relative",children:K.jsx("span",{className:"absolute -top-6 right-0",children:"65%"})})})]}),K.jsxs("div",{className:"text-white py-0 p-20 mt-2 mb-8",children:[K.jsx("p",{children:"MONGODB"}),K.jsx("span",{className:"w-full h-2 bg-amber-50 inline-flex",children:K.jsx("span",{className:"w-[20%] h-2 bg-amber-600 inline-flex rounded-r-2xl relative",children:K.jsx("span",{className:"absolute -top-6 right-0",children:"20%"})})})]})]})]}),K.jsxs("div",{className:"w-1/2",children:[K.jsx("div",{className:"text-3xl text-white justify-center flex",children:"Soft Skills"}),K.jsxs("div",{className:"mt-7",children:[K.jsxs("div",{className:"text-white py-0 p-20 mt-2 mb-8 uppercase",children:[K.jsx("p",{children:"Teamwork Problem Solving"}),K.jsx("span",{className:"w-full h-2 bg-amber-50 inline-flex",children:K.jsx("span",{className:"w-full h-2 bg-amber-600 inline-flex  relative",children:K.jsx("span",{className:"absolute -top-6 right-0",children:"100%"})})})]}),K.jsxs("div",{className:"text-white py-0 p-20 mt-2 mb-8 uppercase",children:[K.jsx("p",{children:"Ability to work under pressure"}),K.jsx("span",{className:"w-full h-2 bg-amber-50 inline-flex",children:K.jsx("span",{className:"w-[95%] h-2 bg-amber-600 inline-flex rounded-r-2xl relative",children:K.jsx("span",{className:"absolute -top-6 right-0",children:"95%"})})})]}),K.jsxs("div",{className:"text-white py-0 p-20 mt-2 mb-8 uppercase",children:[K.jsx("p",{children:"Active Listening"}),K.jsx("span",{className:"w-full h-2 bg-amber-50 inline-flex",children:K.jsx("span",{className:"w-full h-2 bg-amber-600 inline-flex  relative",children:K.jsx("span",{className:"absolute -top-6 right-0",children:"100%"})})})]}),K.jsxs("div",{className:"text-white py-0 p-20 mt-2 mb-8 uppercase",children:[K.jsx("p",{children:"Leadership Time Management"}),K.jsx("span",{className:"w-full h-2 bg-amber-50 inline-flex",children:K.jsx("span",{className:"w-[95%] h-2 bg-amber-600 inline-flex rounded-r-2xl relative",children:K.jsx("span",{className:"absolute -top-6 right-0",children:"95%"})})})]}),K.jsxs("div",{className:"text-white py-0 p-20 mt-2 mb-8 uppercase",children:[K.jsx("p",{children:"Time Management"}),K.jsx("span",{className:"w-full h-2 bg-amber-50 inline-flex",children:K.jsx("span",{className:"w-[97%] h-2 bg-amber-600 inline-flex rounded-r-2xl relative",children:K.jsx("span",{className:"absolute -top-6 right-0",children:"97%"})})})]}),K.jsxs("div",{className:"text-white py-0 p-20 mt-2 mb-8 uppercase",children:[K.jsx("p",{children:"Adaptability"}),K.jsx("span",{className:"w-full h-2 bg-amber-50 inline-flex",children:K.jsx("span",{className:"w-[93%] h-2 bg-amber-600 inline-flex rounded-r-2xl relative",children:K.jsx("span",{className:"absolute -top-6 right-0",children:"93%"})})})]})]})]})]})]}),v1=()=>K.jsx("section",{id:"cetification",className:"w-full h-[650px]",children:K.jsxs("div",{className:"flex",children:[K.jsxs("div",{className:"w-1/3 pl-30 items-center justify-center pt-50 flex-col",children:[K.jsx("h3",{className:"text-3xl font-semibold font-serif text-green-400",children:"Check out"}),K.jsx("h4",{className:"text-red-500 text-4xl mt-7 font-extrabold font-serif",children:"My Certificate"}),K.jsxs("p",{className:"text-white mt-7",children:["I have done various courses to ",K.jsx("br",{}),"increase my programing skills and I'm ",K.jsx("br",{}),"sharing few of them"]})]}),K.jsxs("div",{className:"flex gap-20 text-center pt-54 pl-20",children:[K.jsxs("div",{children:[K.jsx("img",{src:"/aaa.png",alt:"chatgpt web",className:"h-[180px] w-[250px] border-4 border-yellow-500 hover:scale-110 transition duration-300 rounded-xl"}),K.jsxs("p",{className:"text-white mt-3",children:["Introduction to web ",K.jsx("br",{}),"Development with CHATGPT"]}),K.jsxs("p",{className:"text-white text-xl",children:[K.jsx("span",{className:"text-yellow-300",children:"Simply"}),K.jsx("span",{className:"text-blue-400",children:"learn"})]})]}),K.jsxs("div",{className:"gap-20",children:[K.jsx("img",{src:"/bbb.png",alt:"chatgpt web",className:"h-[180px] w-[250px] border-4 border-yellow-500 hover:scale-110 transition duration-300 rounded-xl"}),K.jsx("p",{className:"text-white mt-3",children:"Introduction to DevOps "}),K.jsxs("p",{className:"text-white text-xl",children:[K.jsx("span",{className:"text-yellow-300",children:"Simply"}),K.jsx("span",{className:"text-blue-400",children:"learn"})]})]}),K.jsxs("div",{children:[K.jsx("img",{src:"/ccc.png",alt:"chatgpt web",className:"h-[180px] w-[250px] border-4 border-yellow-500 hover:scale-110 transition duration-300 rounded-xl"}),K.jsx("p",{className:"text-white mt-3",children:"JavaScript for Beginers"}),K.jsxs("p",{className:"text-white text-xl",children:[K.jsx("span",{className:"text-yellow-300",children:"Simply"}),K.jsx("span",{className:"text-blue-400",children:"learn"})]})]})]})]})}),x1=[{title:"Inventory-management-Mobile-App",description:"A user-friendly mobile application designed to help businesses efficiently track, manage, and organize inventory in real-time. Built with Flutter and integrated with Firebase, it offers features like stock monitoring,.",link:"https://github.com/Dilshan-Kavishaka-Karunarathna/Inventory-management-Mobile-App"},{title:"Tourism-Srilanka",description:"A modern, responsive website showcasing the beauty, culture, and attractions of Sri Lanka. Designed to help travelers explore destinations, plan trips, and discover local experiences with ease. Built using HTML and Tailwind CSS and Javascript for fast performance and a seamless user experience.",link:"https://github.com/Dilshan-Kavishaka-Karunarathna/Tourism-Srilanka"},{title:"E-Commerce-Site",description:"A modern, responsive e-commerce platform built with React, Tailwind CSS, and shadcn/ui, offering a smooth shopping experience with clean UI and fast performance. Currently in development.",link:"https://github.com/Dilshan-Kavishaka-Karunarathna/E-Commerce-Site"}],S1=()=>K.jsxs("section",{id:"projects",className:"py-10 ",children:[K.jsx("h2",{className:"text-4xl text-center mb-8 text-red-500 font-extrabold font-serif",children:"My Projects"}),K.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4",children:x1.map((s,e)=>K.jsxs("div",{className:"transition duration-300 bg-gradient-to-br from-gray-800 via-gray-900 to-black mt-10 text-white hover:scale-110 rounded-3xl shadow-2xl border-gray-700 shadow-md rounded-lg p-6 text-center",children:[K.jsx("h3",{className:"text-xl font-semibold mb-2",children:s.title}),K.jsx("p",{className:"text-gray-300 mb-4",children:s.description}),K.jsx("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:underline",children:"View Project"})]},e))})]}),y1=()=>{const[s,e]=Un.useState({name:"",email:"",message:""}),i=l=>{const{name:u,value:h}=l.target;e({...s,[u]:h})},r=l=>{l.preventDefault(),console.log("Form submitted:",s)};return K.jsxs("section",{className:"py-10",children:[K.jsx("h2",{className:"text-3xl font-bold text-center mb-8",children:"Contact Us"}),K.jsx("div",{className:"max-w-2xl mx-auto bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-md rounded-lg p-6",children:K.jsxs("form",{onSubmit:r,className:"space-y-4",children:[K.jsxs("div",{children:[K.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-300",children:"Name"}),K.jsx("input",{type:"text",id:"name",name:"name",value:s.name,onChange:i,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),K.jsxs("div",{children:[K.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-300",children:"Email"}),K.jsx("input",{type:"email",id:"email",name:"email",value:s.email,onChange:i,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500",required:!0})]}),K.jsxs("div",{children:[K.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-300",children:"Message"}),K.jsx("textarea",{id:"message",name:"message",value:s.message,onChange:i,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500",rows:"4",required:!0})]}),K.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",children:"Submit"})]})})]})};function M1(){return K.jsxs(K.Fragment,{children:[K.jsx(WT,{}),K.jsx(YT,{}),K.jsx(m1,{}),K.jsx(g1,{}),K.jsx(_1,{}),K.jsx(v1,{}),K.jsx(S1,{}),K.jsx(y1,{})]})}Bx.createRoot(document.getElementById("root")).render(K.jsx(Un.StrictMode,{children:K.jsx(M1,{})}));
