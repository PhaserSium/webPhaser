(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const v of d)if(v.type==="childList")for(const g of v.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function f(d){const v={};return d.integrity&&(v.integrity=d.integrity),d.referrerPolicy&&(v.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?v.credentials="include":d.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function r(d){if(d.ep)return;d.ep=!0;const v=f(d);fetch(d.href,v)}})();function Sh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var mo={exports:{}},gu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function Uv(){if(Q0)return gu;Q0=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(r,d,v){var g=null;if(v!==void 0&&(g=""+v),d.key!==void 0&&(g=""+d.key),"key"in d){v={};for(var T in d)T!=="key"&&(v[T]=d[T])}else v=d;return d=v.ref,{$$typeof:n,type:r,key:g,ref:d!==void 0?d:null,props:v}}return gu.Fragment=c,gu.jsx=f,gu.jsxs=f,gu}var q0;function Nv(){return q0||(q0=1,mo.exports=Uv()),mo.exports}var ve=Nv(),vo={exports:{}},mt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function kv(){if(Y0)return mt;Y0=1;var n=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),g=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),D=Symbol.iterator;function B(p){return p===null||typeof p!="object"?null:(p=D&&p[D]||p["@@iterator"],typeof p=="function"?p:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,P={};function q(p,$,W){this.props=p,this.context=$,this.refs=P,this.updater=W||G}q.prototype.isReactComponent={},q.prototype.setState=function(p,$){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,$,"setState")},q.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function Q(){}Q.prototype=q.prototype;function k(p,$,W){this.props=p,this.context=$,this.refs=P,this.updater=W||G}var j=k.prototype=new Q;j.constructor=k,Z(j,q.prototype),j.isPureReactComponent=!0;var nt=Array.isArray,X={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function lt(p,$,W,L,H,tt){return W=tt.ref,{$$typeof:n,type:p,key:$,ref:W!==void 0?W:null,props:tt}}function Ot(p,$){return lt(p.type,$,void 0,void 0,void 0,p.props)}function F(p){return typeof p=="object"&&p!==null&&p.$$typeof===n}function ht(p){var $={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(W){return $[W]})}var Rt=/\/+/g;function Tt(p,$){return typeof p=="object"&&p!==null&&p.key!=null?ht(""+p.key):$.toString(36)}function Bt(){}function _t(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(Bt,Bt):(p.status="pending",p.then(function($){p.status==="pending"&&(p.status="fulfilled",p.value=$)},function($){p.status==="pending"&&(p.status="rejected",p.reason=$)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function St(p,$,W,L,H){var tt=typeof p;(tt==="undefined"||tt==="boolean")&&(p=null);var J=!1;if(p===null)J=!0;else switch(tt){case"bigint":case"string":case"number":J=!0;break;case"object":switch(p.$$typeof){case n:case c:J=!0;break;case M:return J=p._init,St(J(p._payload),$,W,L,H)}}if(J)return H=H(p),J=L===""?"."+Tt(p,0):L,nt(H)?(W="",J!=null&&(W=J.replace(Rt,"$&/")+"/"),St(H,$,W,"",function(C){return C})):H!=null&&(F(H)&&(H=Ot(H,W+(H.key==null||p&&p.key===H.key?"":(""+H.key).replace(Rt,"$&/")+"/")+J)),$.push(H)),1;J=0;var ot=L===""?".":L+":";if(nt(p))for(var st=0;st<p.length;st++)L=p[st],tt=ot+Tt(L,st),J+=St(L,$,W,tt,H);else if(st=B(p),typeof st=="function")for(p=st.call(p),st=0;!(L=p.next()).done;)L=L.value,tt=ot+Tt(L,st++),J+=St(L,$,W,tt,H);else if(tt==="object"){if(typeof p.then=="function")return St(_t(p),$,W,L,H);throw $=String(p),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return J}function Y(p,$,W){if(p==null)return p;var L=[],H=0;return St(p,L,"","",function(tt){return $.call(W,tt,H++)}),L}function it(p){if(p._status===-1){var $=p._result;$=$(),$.then(function(W){(p._status===0||p._status===-1)&&(p._status=1,p._result=W)},function(W){(p._status===0||p._status===-1)&&(p._status=2,p._result=W)}),p._status===-1&&(p._status=0,p._result=$)}if(p._status===1)return p._result.default;throw p._result}var V=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)};function rt(){}return mt.Children={map:Y,forEach:function(p,$,W){Y(p,function(){$.apply(this,arguments)},W)},count:function(p){var $=0;return Y(p,function(){$++}),$},toArray:function(p){return Y(p,function($){return $})||[]},only:function(p){if(!F(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},mt.Component=q,mt.Fragment=f,mt.Profiler=d,mt.PureComponent=k,mt.StrictMode=r,mt.Suspense=A,mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,mt.act=function(){throw Error("act(...) is not supported in production builds of React.")},mt.cache=function(p){return function(){return p.apply(null,arguments)}},mt.cloneElement=function(p,$,W){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var L=Z({},p.props),H=p.key,tt=void 0;if($!=null)for(J in $.ref!==void 0&&(tt=void 0),$.key!==void 0&&(H=""+$.key),$)!K.call($,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&$.ref===void 0||(L[J]=$[J]);var J=arguments.length-2;if(J===1)L.children=W;else if(1<J){for(var ot=Array(J),st=0;st<J;st++)ot[st]=arguments[st+2];L.children=ot}return lt(p.type,H,void 0,void 0,tt,L)},mt.createContext=function(p){return p={$$typeof:g,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:v,_context:p},p},mt.createElement=function(p,$,W){var L,H={},tt=null;if($!=null)for(L in $.key!==void 0&&(tt=""+$.key),$)K.call($,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(H[L]=$[L]);var J=arguments.length-2;if(J===1)H.children=W;else if(1<J){for(var ot=Array(J),st=0;st<J;st++)ot[st]=arguments[st+2];H.children=ot}if(p&&p.defaultProps)for(L in J=p.defaultProps,J)H[L]===void 0&&(H[L]=J[L]);return lt(p,tt,void 0,void 0,null,H)},mt.createRef=function(){return{current:null}},mt.forwardRef=function(p){return{$$typeof:T,render:p}},mt.isValidElement=F,mt.lazy=function(p){return{$$typeof:M,_payload:{_status:-1,_result:p},_init:it}},mt.memo=function(p,$){return{$$typeof:m,type:p,compare:$===void 0?null:$}},mt.startTransition=function(p){var $=X.T,W={};X.T=W;try{var L=p(),H=X.S;H!==null&&H(W,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(rt,V)}catch(tt){V(tt)}finally{X.T=$}},mt.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},mt.use=function(p){return X.H.use(p)},mt.useActionState=function(p,$,W){return X.H.useActionState(p,$,W)},mt.useCallback=function(p,$){return X.H.useCallback(p,$)},mt.useContext=function(p){return X.H.useContext(p)},mt.useDebugValue=function(){},mt.useDeferredValue=function(p,$){return X.H.useDeferredValue(p,$)},mt.useEffect=function(p,$){return X.H.useEffect(p,$)},mt.useId=function(){return X.H.useId()},mt.useImperativeHandle=function(p,$,W){return X.H.useImperativeHandle(p,$,W)},mt.useInsertionEffect=function(p,$){return X.H.useInsertionEffect(p,$)},mt.useLayoutEffect=function(p,$){return X.H.useLayoutEffect(p,$)},mt.useMemo=function(p,$){return X.H.useMemo(p,$)},mt.useOptimistic=function(p,$){return X.H.useOptimistic(p,$)},mt.useReducer=function(p,$,W){return X.H.useReducer(p,$,W)},mt.useRef=function(p){return X.H.useRef(p)},mt.useState=function(p){return X.H.useState(p)},mt.useSyncExternalStore=function(p,$,W){return X.H.useSyncExternalStore(p,$,W)},mt.useTransition=function(){return X.H.useTransition()},mt.version="19.0.0",mt}var G0;function qo(){return G0||(G0=1,vo.exports=kv()),vo.exports}var z=qo();const w=Sh(z);var bo={exports:{}},yu={},go={exports:{}},yo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function Lv(){return j0||(j0=1,function(n){function c(Y,it){var V=Y.length;Y.push(it);t:for(;0<V;){var rt=V-1>>>1,p=Y[rt];if(0<d(p,it))Y[rt]=it,Y[V]=p,V=rt;else break t}}function f(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var it=Y[0],V=Y.pop();if(V!==it){Y[0]=V;t:for(var rt=0,p=Y.length,$=p>>>1;rt<$;){var W=2*(rt+1)-1,L=Y[W],H=W+1,tt=Y[H];if(0>d(L,V))H<p&&0>d(tt,L)?(Y[rt]=tt,Y[H]=V,rt=H):(Y[rt]=L,Y[W]=V,rt=W);else if(H<p&&0>d(tt,V))Y[rt]=tt,Y[H]=V,rt=H;else break t}}return it}function d(Y,it){var V=Y.sortIndex-it.sortIndex;return V!==0?V:Y.id-it.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;n.unstable_now=function(){return v.now()}}else{var g=Date,T=g.now();n.unstable_now=function(){return g.now()-T}}var A=[],m=[],M=1,D=null,B=3,G=!1,Z=!1,P=!1,q=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function j(Y){for(var it=f(m);it!==null;){if(it.callback===null)r(m);else if(it.startTime<=Y)r(m),it.sortIndex=it.expirationTime,c(A,it);else break;it=f(m)}}function nt(Y){if(P=!1,j(Y),!Z)if(f(A)!==null)Z=!0,_t();else{var it=f(m);it!==null&&St(nt,it.startTime-Y)}}var X=!1,K=-1,lt=5,Ot=-1;function F(){return!(n.unstable_now()-Ot<lt)}function ht(){if(X){var Y=n.unstable_now();Ot=Y;var it=!0;try{t:{Z=!1,P&&(P=!1,Q(K),K=-1),G=!0;var V=B;try{e:{for(j(Y),D=f(A);D!==null&&!(D.expirationTime>Y&&F());){var rt=D.callback;if(typeof rt=="function"){D.callback=null,B=D.priorityLevel;var p=rt(D.expirationTime<=Y);if(Y=n.unstable_now(),typeof p=="function"){D.callback=p,j(Y),it=!0;break e}D===f(A)&&r(A),j(Y)}else r(A);D=f(A)}if(D!==null)it=!0;else{var $=f(m);$!==null&&St(nt,$.startTime-Y),it=!1}}break t}finally{D=null,B=V,G=!1}it=void 0}}finally{it?Rt():X=!1}}}var Rt;if(typeof k=="function")Rt=function(){k(ht)};else if(typeof MessageChannel<"u"){var Tt=new MessageChannel,Bt=Tt.port2;Tt.port1.onmessage=ht,Rt=function(){Bt.postMessage(null)}}else Rt=function(){q(ht,0)};function _t(){X||(X=!0,Rt())}function St(Y,it){K=q(function(){Y(n.unstable_now())},it)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_continueExecution=function(){Z||G||(Z=!0,_t())},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lt=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return B},n.unstable_getFirstCallbackNode=function(){return f(A)},n.unstable_next=function(Y){switch(B){case 1:case 2:case 3:var it=3;break;default:it=B}var V=B;B=it;try{return Y()}finally{B=V}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Y,it){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var V=B;B=Y;try{return it()}finally{B=V}},n.unstable_scheduleCallback=function(Y,it,V){var rt=n.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?rt+V:rt):V=rt,Y){case 1:var p=-1;break;case 2:p=250;break;case 5:p=1073741823;break;case 4:p=1e4;break;default:p=5e3}return p=V+p,Y={id:M++,callback:it,priorityLevel:Y,startTime:V,expirationTime:p,sortIndex:-1},V>rt?(Y.sortIndex=V,c(m,Y),f(A)===null&&Y===f(m)&&(P?(Q(K),K=-1):P=!0,St(nt,V-rt))):(Y.sortIndex=p,c(A,Y),Z||G||(Z=!0,_t())),Y},n.unstable_shouldYield=F,n.unstable_wrapCallback=function(Y){var it=B;return function(){var V=B;B=it;try{return Y.apply(this,arguments)}finally{B=V}}}}(yo)),yo}var X0;function Qv(){return X0||(X0=1,go.exports=Lv()),go.exports}var Ao={exports:{}},he={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function qv(){if(V0)return he;V0=1;var n=qo();function c(A){var m="https://react.dev/errors/"+A;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)m+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+A+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var r={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function v(A,m,M){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:D==null?null:""+D,children:A,containerInfo:m,implementation:M}}var g=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function T(A,m){if(A==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return he.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,he.createPortal=function(A,m){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(c(299));return v(A,m,null,M)},he.flushSync=function(A){var m=g.T,M=r.p;try{if(g.T=null,r.p=2,A)return A()}finally{g.T=m,r.p=M,r.d.f()}},he.preconnect=function(A,m){typeof A=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(A,m))},he.prefetchDNS=function(A){typeof A=="string"&&r.d.D(A)},he.preinit=function(A,m){if(typeof A=="string"&&m&&typeof m.as=="string"){var M=m.as,D=T(M,m.crossOrigin),B=typeof m.integrity=="string"?m.integrity:void 0,G=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;M==="style"?r.d.S(A,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:D,integrity:B,fetchPriority:G}):M==="script"&&r.d.X(A,{crossOrigin:D,integrity:B,fetchPriority:G,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},he.preinitModule=function(A,m){if(typeof A=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var M=T(m.as,m.crossOrigin);r.d.M(A,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(A)},he.preload=function(A,m){if(typeof A=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var M=m.as,D=T(M,m.crossOrigin);r.d.L(A,M,{crossOrigin:D,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},he.preloadModule=function(A,m){if(typeof A=="string")if(m){var M=T(m.as,m.crossOrigin);r.d.m(A,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(A)},he.requestFormReset=function(A){r.d.r(A)},he.unstable_batchedUpdates=function(A,m){return A(m)},he.useFormState=function(A,m,M){return g.H.useFormState(A,m,M)},he.useFormStatus=function(){return g.H.useHostTransitionStatus()},he.version="19.0.0",he}var Z0;function xh(){if(Z0)return Ao.exports;Z0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),Ao.exports=qv(),Ao.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function Yv(){if(K0)return yu;K0=1;var n=Qv(),c=qo(),f=xh();function r(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var v=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),G=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),nt=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function Ot(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case T:return"Portal";case M:return"Profiler";case m:return"StrictMode";case P:return"Suspense";case q:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G:return(t.displayName||"Context")+".Provider";case B:return(t._context.displayName||"Context")+".Consumer";case Z:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return e=t.displayName||null,e!==null?e:Ot(t.type)||"Memo";case k:e=t._payload,t=t._init;try{return Ot(t(e))}catch{}}return null}var F=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht=Object.assign,Rt,Tt;function Bt(t){if(Rt===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Rt=e&&e[1]||"",Tt=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+t+Tt}var _t=!1;function St(t,e){if(!t||_t)return"";_t=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(O){var E=O}Reflect.construct(t,[],U)}else{try{U.call()}catch(O){E=O}t.call(U.prototype)}}else{try{throw Error()}catch(O){E=O}(U=t())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(O){if(O&&E&&typeof O.stack=="string")return[O.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],s=i[1];if(o&&s){var h=o.split(`
`),y=s.split(`
`);for(u=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;u<y.length&&!y[u].includes("DetermineComponentFrameRoot");)u++;if(a===h.length||u===y.length)for(a=h.length-1,u=y.length-1;1<=a&&0<=u&&h[a]!==y[u];)u--;for(;1<=a&&0<=u;a--,u--)if(h[a]!==y[u]){if(a!==1||u!==1)do if(a--,u--,0>u||h[a]!==y[u]){var R=`
`+h[a].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=a&&0<=u);break}}}finally{_t=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Bt(l):""}function Y(t){switch(t.tag){case 26:case 27:case 5:return Bt(t.type);case 16:return Bt("Lazy");case 13:return Bt("Suspense");case 19:return Bt("SuspenseList");case 0:case 15:return t=St(t.type,!1),t;case 11:return t=St(t.type.render,!1),t;case 1:return t=St(t.type,!0),t;default:return""}}function it(t){try{var e="";do e+=Y(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function V(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function rt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(V(t)!==t)throw Error(r(188))}function $(t){var e=t.alternate;if(!e){if(e=V(t),e===null)throw Error(r(188));return e!==t?null:t}for(var l=t,a=e;;){var u=l.return;if(u===null)break;var i=u.alternate;if(i===null){if(a=u.return,a!==null){l=a;continue}break}if(u.child===i.child){for(i=u.child;i;){if(i===l)return p(u),t;if(i===a)return p(u),e;i=i.sibling}throw Error(r(188))}if(l.return!==a.return)l=u,a=i;else{for(var o=!1,s=u.child;s;){if(s===l){o=!0,l=u,a=i;break}if(s===a){o=!0,a=u,l=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===l){o=!0,l=i,a=u;break}if(s===a){o=!0,a=i,l=u;break}s=s.sibling}if(!o)throw Error(r(189))}}if(l.alternate!==a)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?t:e}function W(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=W(t),e!==null)return e;t=t.sibling}return null}var L=Array.isArray,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},J=[],ot=-1;function st(t){return{current:t}}function C(t){0>ot||(t.current=J[ot],J[ot]=null,ot--)}function et(t,e){ot++,J[ot]=t.current,t.current=e}var dt=st(null),gt=st(null),Dt=st(null),Yt=st(null);function Lt(t,e){switch(et(Dt,e),et(gt,t),et(dt,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?m0(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=m0(t),e=v0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(dt),et(dt,e)}function It(){C(dt),C(gt),C(Dt)}function Ae(t){t.memoizedState!==null&&et(Yt,t);var e=dt.current,l=v0(e,t.type);e!==l&&(et(gt,t),et(dt,l))}function Re(t){gt.current===t&&(C(dt),C(gt)),Yt.current===t&&(C(Yt),hu._currentValue=tt)}var Me=Object.prototype.hasOwnProperty,Il=n.unstable_scheduleCallback,Pl=n.unstable_cancelCallback,ta=n.unstable_shouldYield,zu=n.unstable_requestPaint,je=n.unstable_now,vp=n.unstable_getCurrentPriorityLevel,af=n.unstable_ImmediatePriority,nf=n.unstable_UserBlockingPriority,Ou=n.unstable_NormalPriority,bp=n.unstable_LowPriority,uf=n.unstable_IdlePriority,gp=n.log,yp=n.unstable_setDisableYieldValue,xn=null,Se=null;function Ap(t){if(Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(xn,t,void 0,(t.current.flags&128)===128)}catch{}}function Dl(t){if(typeof gp=="function"&&yp(t),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(xn,t)}catch{}}var xe=Math.clz32?Math.clz32:Ep,Sp=Math.log,xp=Math.LN2;function Ep(t){return t>>>=0,t===0?32:31-(Sp(t)/xp|0)|0}var Ru=128,Mu=4194304;function ea(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _u(t,e){var l=t.pendingLanes;if(l===0)return 0;var a=0,u=t.suspendedLanes,i=t.pingedLanes,o=t.warmLanes;t=t.finishedLanes!==0;var s=l&134217727;return s!==0?(l=s&~u,l!==0?a=ea(l):(i&=s,i!==0?a=ea(i):t||(o=s&~o,o!==0&&(a=ea(o))))):(s=l&~u,s!==0?a=ea(s):i!==0?a=ea(i):t||(o=l&~o,o!==0&&(a=ea(o)))),a===0?0:e!==0&&e!==a&&(e&u)===0&&(u=a&-a,o=e&-e,u>=o||u===32&&(o&4194176)!==0)?e:a}function En(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Tp(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cf(){var t=Ru;return Ru<<=1,(Ru&4194176)===0&&(Ru=128),t}function rf(){var t=Mu;return Mu<<=1,(Mu&62914560)===0&&(Mu=4194304),t}function oc(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Tn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Dp(t,e,l,a,u,i){var o=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,h=t.expirationTimes,y=t.hiddenUpdates;for(l=o&~l;0<l;){var R=31-xe(l),U=1<<R;s[R]=0,h[R]=-1;var E=y[R];if(E!==null)for(y[R]=null,R=0;R<E.length;R++){var O=E[R];O!==null&&(O.lane&=-536870913)}l&=~U}a!==0&&of(t,a,0),i!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=i&~(o&~e))}function of(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-xe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194218}function ff(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-xe(l),u=1<<a;u&e|t[a]&e&&(t[a]|=e),l&=~u}}function sf(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function df(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:B0(t.type))}function wp(t,e){var l=H.p;try{return H.p=t,e()}finally{H.p=l}}var wl=Math.random().toString(36).slice(2),se="__reactFiber$"+wl,be="__reactProps$"+wl,_a="__reactContainer$"+wl,fc="__reactEvents$"+wl,zp="__reactListeners$"+wl,Op="__reactHandles$"+wl,hf="__reactResources$"+wl,Dn="__reactMarker$"+wl;function sc(t){delete t[se],delete t[be],delete t[fc],delete t[zp],delete t[Op]}function la(t){var e=t[se];if(e)return e;for(var l=t.parentNode;l;){if(e=l[_a]||l[se]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=y0(t);t!==null;){if(l=t[se])return l;t=y0(t)}return e}t=l,l=t.parentNode}return null}function Ca(t){if(t=t[se]||t[_a]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function wn(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(r(33))}function $a(t){var e=t[hf];return e||(e=t[hf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ee(t){t[Dn]=!0}var pf=new Set,mf={};function aa(t,e){Ba(t,e),Ba(t+"Capture",e)}function Ba(t,e){for(mf[t]=e,t=0;t<e.length;t++)pf.add(e[t])}var il=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vf={},bf={};function Mp(t){return Me.call(bf,t)?!0:Me.call(vf,t)?!1:Rp.test(t)?bf[t]=!0:(vf[t]=!0,!1)}function Cu(t,e,l){if(Mp(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function $u(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function cl(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function _e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _p(t){var e=gf(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,i=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bu(t){t._valueTracker||(t._valueTracker=_p(t))}function yf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=gf(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Hu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Cp=/[\n"\\]/g;function Ce(t){return t.replace(Cp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function dc(t,e,l,a,u,i,o,s){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+_e(e)):t.value!==""+_e(e)&&(t.value=""+_e(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?hc(t,o,_e(e)):l!=null?hc(t,o,_e(l)):a!=null&&t.removeAttribute("value"),u==null&&i!=null&&(t.defaultChecked=!!i),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+_e(s):t.removeAttribute("name")}function Af(t,e,l,a,u,i,o,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null))return;l=l!=null?""+_e(l):"",e=e!=null?""+_e(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}a=a??u,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=s?t.checked:!!a,t.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o)}function hc(t,e,l){e==="number"&&Hu(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Ha(t,e,l,a){if(t=t.options,e){e={};for(var u=0;u<l.length;u++)e["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=e.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&a&&(t[l].defaultSelected=!0)}else{for(l=""+_e(l),e=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function Sf(t,e,l){if(e!=null&&(e=""+_e(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+_e(l):""}function xf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(r(92));if(L(a)){if(1<a.length)throw Error(r(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=_e(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Ua(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var $p=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ef(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||$p.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Tf(t,e,l){if(e!=null&&typeof e!="object")throw Error(r(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var u in e)a=e[u],e.hasOwnProperty(u)&&l[u]!==a&&Ef(t,u,a)}else for(var i in e)e.hasOwnProperty(i)&&Ef(t,i,e[i])}function pc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uu(t){return Hp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var mc=null;function vc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Na=null,ka=null;function Df(t){var e=Ca(t);if(e&&(t=e.stateNode)){var l=t[be]||null;t:switch(t=e.stateNode,e.type){case"input":if(dc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Ce(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var u=a[be]||null;if(!u)throw Error(r(90));dc(a,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&yf(a)}break t;case"textarea":Sf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Ha(t,!!l.multiple,e,!1)}}}var bc=!1;function wf(t,e,l){if(bc)return t(e,l);bc=!0;try{var a=t(e);return a}finally{if(bc=!1,(Na!==null||ka!==null)&&(yi(),Na&&(e=Na,t=ka,ka=Na=null,Df(e),t)))for(e=0;e<t.length;e++)Df(t[e])}}function zn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[be]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(r(231,e,typeof l));return l}var gc=!1;if(il)try{var On={};Object.defineProperty(On,"passive",{get:function(){gc=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{gc=!1}var zl=null,yc=null,Nu=null;function zf(){if(Nu)return Nu;var t,e=yc,l=e.length,a,u="value"in zl?zl.value:zl.textContent,i=u.length;for(t=0;t<l&&e[t]===u[t];t++);var o=l-t;for(a=1;a<=o&&e[l-a]===u[i-a];a++);return Nu=u.slice(t,1<a?1-a:void 0)}function ku(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Lu(){return!0}function Of(){return!1}function ge(t){function e(l,a,u,i,o){this._reactName=l,this._targetInst=u,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Lu:Of,this.isPropagationStopped=Of,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Lu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Lu)},persist:function(){},isPersistent:Lu}),e}var na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qu=ge(na),Rn=ht({},na,{view:0,detail:0}),Up=ge(Rn),Ac,Sc,Mn,qu=ht({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mn&&(Mn&&t.type==="mousemove"?(Ac=t.screenX-Mn.screenX,Sc=t.screenY-Mn.screenY):Sc=Ac=0,Mn=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),Rf=ge(qu),Np=ht({},qu,{dataTransfer:0}),kp=ge(Np),Lp=ht({},Rn,{relatedTarget:0}),xc=ge(Lp),Qp=ht({},na,{animationName:0,elapsedTime:0,pseudoElement:0}),qp=ge(Qp),Yp=ht({},na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gp=ge(Yp),jp=ht({},na,{data:0}),Mf=ge(jp),Xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kp(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zp[t])?!!e[t]:!1}function Ec(){return Kp}var Jp=ht({},Rn,{key:function(t){if(t.key){var e=Xp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ku(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(t){return t.type==="keypress"?ku(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ku(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wp=ge(Jp),Fp=ht({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=ge(Fp),Ip=ht({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),Pp=ge(Ip),tm=ht({},na,{propertyName:0,elapsedTime:0,pseudoElement:0}),em=ge(tm),lm=ht({},qu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),am=ge(lm),nm=ht({},na,{newState:0,oldState:0}),um=ge(nm),im=[9,13,27,32],Tc=il&&"CompositionEvent"in window,_n=null;il&&"documentMode"in document&&(_n=document.documentMode);var cm=il&&"TextEvent"in window&&!_n,Cf=il&&(!Tc||_n&&8<_n&&11>=_n),$f=" ",Bf=!1;function Hf(t,e){switch(t){case"keyup":return im.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var La=!1;function rm(t,e){switch(t){case"compositionend":return Uf(e);case"keypress":return e.which!==32?null:(Bf=!0,$f);case"textInput":return t=e.data,t===$f&&Bf?null:t;default:return null}}function om(t,e){if(La)return t==="compositionend"||!Tc&&Hf(t,e)?(t=zf(),Nu=yc=zl=null,La=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cf&&e.locale!=="ko"?null:e.data;default:return null}}var fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fm[t.type]:e==="textarea"}function kf(t,e,l,a){Na?ka?ka.push(a):ka=[a]:Na=a,e=Ti(e,"onChange"),0<e.length&&(l=new Qu("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Cn=null,$n=null;function sm(t){f0(t,0)}function Yu(t){var e=wn(t);if(yf(e))return t}function Lf(t,e){if(t==="change")return e}var Qf=!1;if(il){var Dc;if(il){var wc="oninput"in document;if(!wc){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),wc=typeof qf.oninput=="function"}Dc=wc}else Dc=!1;Qf=Dc&&(!document.documentMode||9<document.documentMode)}function Yf(){Cn&&(Cn.detachEvent("onpropertychange",Gf),$n=Cn=null)}function Gf(t){if(t.propertyName==="value"&&Yu($n)){var e=[];kf(e,$n,t,vc(t)),wf(sm,e)}}function dm(t,e,l){t==="focusin"?(Yf(),Cn=e,$n=l,Cn.attachEvent("onpropertychange",Gf)):t==="focusout"&&Yf()}function hm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yu($n)}function pm(t,e){if(t==="click")return Yu(e)}function mm(t,e){if(t==="input"||t==="change")return Yu(e)}function vm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ee=typeof Object.is=="function"?Object.is:vm;function Bn(t,e){if(Ee(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var u=l[a];if(!Me.call(e,u)||!Ee(t[u],e[u]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xf(t,e){var l=jf(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=jf(l)}}function Vf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Hu(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Hu(t.document)}return e}function zc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bm(t,e){var l=Zf(e);e=t.focusedElem;var a=t.selectionRange;if(l!==e&&e&&e.ownerDocument&&Vf(e.ownerDocument.documentElement,e)){if(a!==null&&zc(e)){if(t=a.start,l=a.end,l===void 0&&(l=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(l,e.value.length);else if(l=(t=e.ownerDocument||document)&&t.defaultView||window,l.getSelection){l=l.getSelection();var u=e.textContent.length,i=Math.min(a.start,u);a=a.end===void 0?i:Math.min(a.end,u),!l.extend&&i>a&&(u=a,a=i,i=u),u=Xf(e,i);var o=Xf(e,a);u&&o&&(l.rangeCount!==1||l.anchorNode!==u.node||l.anchorOffset!==u.offset||l.focusNode!==o.node||l.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),l.removeAllRanges(),i>a?(l.addRange(t),l.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),l.addRange(t)))}}for(t=[],l=e;l=l.parentNode;)l.nodeType===1&&t.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)l=t[e],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var gm=il&&"documentMode"in document&&11>=document.documentMode,Qa=null,Oc=null,Hn=null,Rc=!1;function Kf(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Rc||Qa==null||Qa!==Hu(a)||(a=Qa,"selectionStart"in a&&zc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Hn&&Bn(Hn,a)||(Hn=a,a=Ti(Oc,"onSelect"),0<a.length&&(e=new Qu("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Qa)))}function ua(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var qa={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionrun:ua("Transition","TransitionRun"),transitionstart:ua("Transition","TransitionStart"),transitioncancel:ua("Transition","TransitionCancel"),transitionend:ua("Transition","TransitionEnd")},Mc={},Jf={};il&&(Jf=document.createElement("div").style,"AnimationEvent"in window||(delete qa.animationend.animation,delete qa.animationiteration.animation,delete qa.animationstart.animation),"TransitionEvent"in window||delete qa.transitionend.transition);function ia(t){if(Mc[t])return Mc[t];if(!qa[t])return t;var e=qa[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Jf)return Mc[t]=e[l];return t}var Wf=ia("animationend"),Ff=ia("animationiteration"),If=ia("animationstart"),ym=ia("transitionrun"),Am=ia("transitionstart"),Sm=ia("transitioncancel"),Pf=ia("transitionend"),ts=new Map,es="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Xe(t,e){ts.set(t,e),aa(e,[t])}var $e=[],Ya=0,_c=0;function Gu(){for(var t=Ya,e=_c=Ya=0;e<t;){var l=$e[e];$e[e++]=null;var a=$e[e];$e[e++]=null;var u=$e[e];$e[e++]=null;var i=$e[e];if($e[e++]=null,a!==null&&u!==null){var o=a.pending;o===null?u.next=u:(u.next=o.next,o.next=u),a.pending=u}i!==0&&ls(l,u,i)}}function ju(t,e,l,a){$e[Ya++]=t,$e[Ya++]=e,$e[Ya++]=l,$e[Ya++]=a,_c|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Cc(t,e,l,a){return ju(t,e,l,a),Xu(t)}function Ol(t,e){return ju(t,null,null,e),Xu(t)}function ls(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var u=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(u=!0)),t=i,i=i.return;u&&e!==null&&t.tag===3&&(i=t.stateNode,u=31-xe(l),i=i.hiddenUpdates,t=i[u],t===null?i[u]=[e]:t.push(e),e.lane=l|536870912)}function Xu(t){if(50<iu)throw iu=0,kr=null,Error(r(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ga={},as=new WeakMap;function Be(t,e){if(typeof t=="object"&&t!==null){var l=as.get(t);return l!==void 0?l:(e={value:t,source:e,stack:it(e)},as.set(t,e),e)}return{value:t,source:e,stack:it(e)}}var ja=[],Xa=0,Vu=null,Zu=0,He=[],Ue=0,ca=null,rl=1,ol="";function ra(t,e){ja[Xa++]=Zu,ja[Xa++]=Vu,Vu=t,Zu=e}function ns(t,e,l){He[Ue++]=rl,He[Ue++]=ol,He[Ue++]=ca,ca=t;var a=rl;t=ol;var u=32-xe(a)-1;a&=~(1<<u),l+=1;var i=32-xe(e)+u;if(30<i){var o=u-u%5;i=(a&(1<<o)-1).toString(32),a>>=o,u-=o,rl=1<<32-xe(e)+u|l<<u|a,ol=i+t}else rl=1<<i|l<<u|a,ol=t}function $c(t){t.return!==null&&(ra(t,1),ns(t,1,0))}function Bc(t){for(;t===Vu;)Vu=ja[--Xa],ja[Xa]=null,Zu=ja[--Xa],ja[Xa]=null;for(;t===ca;)ca=He[--Ue],He[Ue]=null,ol=He[--Ue],He[Ue]=null,rl=He[--Ue],He[Ue]=null}var pe=null,ce=null,wt=!1,Ve=null,Ie=!1,Hc=Error(r(519));function oa(t){var e=Error(r(418,""));throw kn(Be(e,t)),Hc}function us(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[se]=t,e[be]=a,l){case"dialog":xt("cancel",e),xt("close",e);break;case"iframe":case"object":case"embed":xt("load",e);break;case"video":case"audio":for(l=0;l<ru.length;l++)xt(ru[l],e);break;case"source":xt("error",e);break;case"img":case"image":case"link":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"input":xt("invalid",e),Af(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Bu(e);break;case"select":xt("invalid",e);break;case"textarea":xt("invalid",e),xf(e,a.value,a.defaultValue,a.children),Bu(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||p0(e.textContent,l)?(a.popover!=null&&(xt("beforetoggle",e),xt("toggle",e)),a.onScroll!=null&&xt("scroll",e),a.onScrollEnd!=null&&xt("scrollend",e),a.onClick!=null&&(e.onclick=Di),e=!0):e=!1,e||oa(t)}function is(t){for(pe=t.return;pe;)switch(pe.tag){case 3:case 27:Ie=!0;return;case 5:case 13:Ie=!1;return;default:pe=pe.return}}function Un(t){if(t!==pe)return!1;if(!wt)return is(t),wt=!0,!1;var e=!1,l;if((l=t.tag!==3&&t.tag!==27)&&((l=t.tag===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||eo(t.type,t.memoizedProps)),l=!l),l&&(e=!0),e&&ce&&oa(t),is(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){ce=Ke(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}ce=null}}else ce=pe?Ke(t.stateNode.nextSibling):null;return!0}function Nn(){ce=pe=null,wt=!1}function kn(t){Ve===null?Ve=[t]:Ve.push(t)}var Ln=Error(r(460)),cs=Error(r(474)),Uc={then:function(){}};function rs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ku(){}function os(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Ku,Ku),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Ln?Error(r(483)):t;default:if(typeof e.status=="string")e.then(Ku,Ku);else{if(t=Ut,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=a}},function(a){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Ln?Error(r(483)):t}throw Qn=e,Ln}}var Qn=null;function fs(){if(Qn===null)throw Error(r(459));var t=Qn;return Qn=null,t}var Va=null,qn=0;function Ju(t){var e=qn;return qn+=1,Va===null&&(Va=[]),os(Va,t,e)}function Yn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Wu(t,e){throw e.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(e),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function ss(t){var e=t._init;return e(t._payload)}function ds(t){function e(S,b){if(t){var x=S.deletions;x===null?(S.deletions=[b],S.flags|=16):x.push(b)}}function l(S,b){if(!t)return null;for(;b!==null;)e(S,b),b=b.sibling;return null}function a(S){for(var b=new Map;S!==null;)S.key!==null?b.set(S.key,S):b.set(S.index,S),S=S.sibling;return b}function u(S,b){return S=Ql(S,b),S.index=0,S.sibling=null,S}function i(S,b,x){return S.index=x,t?(x=S.alternate,x!==null?(x=x.index,x<b?(S.flags|=33554434,b):x):(S.flags|=33554434,b)):(S.flags|=1048576,b)}function o(S){return t&&S.alternate===null&&(S.flags|=33554434),S}function s(S,b,x,_){return b===null||b.tag!==6?(b=Mr(x,S.mode,_),b.return=S,b):(b=u(b,x),b.return=S,b)}function h(S,b,x,_){var at=x.type;return at===A?R(S,b,x.props.children,_,x.key):b!==null&&(b.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===k&&ss(at)===b.type)?(b=u(b,x.props),Yn(b,x),b.return=S,b):(b=pi(x.type,x.key,x.props,null,S.mode,_),Yn(b,x),b.return=S,b)}function y(S,b,x,_){return b===null||b.tag!==4||b.stateNode.containerInfo!==x.containerInfo||b.stateNode.implementation!==x.implementation?(b=_r(x,S.mode,_),b.return=S,b):(b=u(b,x.children||[]),b.return=S,b)}function R(S,b,x,_,at){return b===null||b.tag!==7?(b=ya(x,S.mode,_,at),b.return=S,b):(b=u(b,x),b.return=S,b)}function U(S,b,x){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=Mr(""+b,S.mode,x),b.return=S,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case g:return x=pi(b.type,b.key,b.props,null,S.mode,x),Yn(x,b),x.return=S,x;case T:return b=_r(b,S.mode,x),b.return=S,b;case k:var _=b._init;return b=_(b._payload),U(S,b,x)}if(L(b)||K(b))return b=ya(b,S.mode,x,null),b.return=S,b;if(typeof b.then=="function")return U(S,Ju(b),x);if(b.$$typeof===G)return U(S,si(S,b),x);Wu(S,b)}return null}function E(S,b,x,_){var at=b!==null?b.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return at!==null?null:s(S,b,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case g:return x.key===at?h(S,b,x,_):null;case T:return x.key===at?y(S,b,x,_):null;case k:return at=x._init,x=at(x._payload),E(S,b,x,_)}if(L(x)||K(x))return at!==null?null:R(S,b,x,_,null);if(typeof x.then=="function")return E(S,b,Ju(x),_);if(x.$$typeof===G)return E(S,b,si(S,x),_);Wu(S,x)}return null}function O(S,b,x,_,at){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return S=S.get(x)||null,s(b,S,""+_,at);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case g:return S=S.get(_.key===null?x:_.key)||null,h(b,S,_,at);case T:return S=S.get(_.key===null?x:_.key)||null,y(b,S,_,at);case k:var yt=_._init;return _=yt(_._payload),O(S,b,x,_,at)}if(L(_)||K(_))return S=S.get(x)||null,R(b,S,_,at,null);if(typeof _.then=="function")return O(S,b,x,Ju(_),at);if(_.$$typeof===G)return O(S,b,x,si(b,_),at);Wu(b,_)}return null}function ut(S,b,x,_){for(var at=null,yt=null,ct=b,ft=b=0,ne=null;ct!==null&&ft<x.length;ft++){ct.index>ft?(ne=ct,ct=null):ne=ct.sibling;var zt=E(S,ct,x[ft],_);if(zt===null){ct===null&&(ct=ne);break}t&&ct&&zt.alternate===null&&e(S,ct),b=i(zt,b,ft),yt===null?at=zt:yt.sibling=zt,yt=zt,ct=ne}if(ft===x.length)return l(S,ct),wt&&ra(S,ft),at;if(ct===null){for(;ft<x.length;ft++)ct=U(S,x[ft],_),ct!==null&&(b=i(ct,b,ft),yt===null?at=ct:yt.sibling=ct,yt=ct);return wt&&ra(S,ft),at}for(ct=a(ct);ft<x.length;ft++)ne=O(ct,S,ft,x[ft],_),ne!==null&&(t&&ne.alternate!==null&&ct.delete(ne.key===null?ft:ne.key),b=i(ne,b,ft),yt===null?at=ne:yt.sibling=ne,yt=ne);return t&&ct.forEach(function(Zl){return e(S,Zl)}),wt&&ra(S,ft),at}function pt(S,b,x,_){if(x==null)throw Error(r(151));for(var at=null,yt=null,ct=b,ft=b=0,ne=null,zt=x.next();ct!==null&&!zt.done;ft++,zt=x.next()){ct.index>ft?(ne=ct,ct=null):ne=ct.sibling;var Zl=E(S,ct,zt.value,_);if(Zl===null){ct===null&&(ct=ne);break}t&&ct&&Zl.alternate===null&&e(S,ct),b=i(Zl,b,ft),yt===null?at=Zl:yt.sibling=Zl,yt=Zl,ct=ne}if(zt.done)return l(S,ct),wt&&ra(S,ft),at;if(ct===null){for(;!zt.done;ft++,zt=x.next())zt=U(S,zt.value,_),zt!==null&&(b=i(zt,b,ft),yt===null?at=zt:yt.sibling=zt,yt=zt);return wt&&ra(S,ft),at}for(ct=a(ct);!zt.done;ft++,zt=x.next())zt=O(ct,S,ft,zt.value,_),zt!==null&&(t&&zt.alternate!==null&&ct.delete(zt.key===null?ft:zt.key),b=i(zt,b,ft),yt===null?at=zt:yt.sibling=zt,yt=zt);return t&&ct.forEach(function(Hv){return e(S,Hv)}),wt&&ra(S,ft),at}function Xt(S,b,x,_){if(typeof x=="object"&&x!==null&&x.type===A&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case g:t:{for(var at=x.key;b!==null;){if(b.key===at){if(at=x.type,at===A){if(b.tag===7){l(S,b.sibling),_=u(b,x.props.children),_.return=S,S=_;break t}}else if(b.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===k&&ss(at)===b.type){l(S,b.sibling),_=u(b,x.props),Yn(_,x),_.return=S,S=_;break t}l(S,b);break}else e(S,b);b=b.sibling}x.type===A?(_=ya(x.props.children,S.mode,_,x.key),_.return=S,S=_):(_=pi(x.type,x.key,x.props,null,S.mode,_),Yn(_,x),_.return=S,S=_)}return o(S);case T:t:{for(at=x.key;b!==null;){if(b.key===at)if(b.tag===4&&b.stateNode.containerInfo===x.containerInfo&&b.stateNode.implementation===x.implementation){l(S,b.sibling),_=u(b,x.children||[]),_.return=S,S=_;break t}else{l(S,b);break}else e(S,b);b=b.sibling}_=_r(x,S.mode,_),_.return=S,S=_}return o(S);case k:return at=x._init,x=at(x._payload),Xt(S,b,x,_)}if(L(x))return ut(S,b,x,_);if(K(x)){if(at=K(x),typeof at!="function")throw Error(r(150));return x=at.call(x),pt(S,b,x,_)}if(typeof x.then=="function")return Xt(S,b,Ju(x),_);if(x.$$typeof===G)return Xt(S,b,si(S,x),_);Wu(S,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,b!==null&&b.tag===6?(l(S,b.sibling),_=u(b,x),_.return=S,S=_):(l(S,b),_=Mr(x,S.mode,_),_.return=S,S=_),o(S)):l(S,b)}return function(S,b,x,_){try{qn=0;var at=Xt(S,b,x,_);return Va=null,at}catch(ct){if(ct===Ln)throw ct;var yt=Qe(29,ct,null,S.mode);return yt.lanes=_,yt.return=S,yt}finally{}}}var fa=ds(!0),hs=ds(!1),Za=st(null),Fu=st(0);function ps(t,e){t=Al,et(Fu,t),et(Za,e),Al=t|e.baseLanes}function Nc(){et(Fu,Al),et(Za,Za.current)}function kc(){Al=Fu.current,C(Za),C(Fu)}var Ne=st(null),Pe=null;function Rl(t){var e=t.alternate;et(Pt,Pt.current&1),et(Ne,t),Pe===null&&(e===null||Za.current!==null||e.memoizedState!==null)&&(Pe=t)}function ms(t){if(t.tag===22){if(et(Pt,Pt.current),et(Ne,t),Pe===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Pe=t)}}else Ml()}function Ml(){et(Pt,Pt.current),et(Ne,Ne.current)}function fl(t){C(Ne),Pe===t&&(Pe=null),C(Pt)}var Pt=st(0);function Iu(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Em=n.unstable_scheduleCallback,Tm=n.unstable_NormalPriority,te={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lc(){return{controller:new xm,data:new Map,refCount:0}}function Gn(t){t.refCount--,t.refCount===0&&Em(Tm,function(){t.controller.abort()})}var jn=null,Qc=0,Ka=0,Ja=null;function Dm(t,e){if(jn===null){var l=jn=[];Qc=0,Ka=Vr(),Ja={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Qc++,e.then(vs,vs),e}function vs(){if(--Qc===0&&jn!==null){Ja!==null&&(Ja.status="fulfilled");var t=jn;jn=null,Ka=0,Ja=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function wm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var u=0;u<l.length;u++)(0,l[u])(e)},function(u){for(a.status="rejected",a.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),a}var bs=F.S;F.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Dm(t,e),bs!==null&&bs(t,e)};var sa=st(null);function qc(){var t=sa.current;return t!==null?t:Ut.pooledCache}function Pu(t,e){e===null?et(sa,sa.current):et(sa,e.pool)}function gs(){var t=qc();return t===null?null:{parent:te._currentValue,pool:t}}var _l=0,bt=null,Ct=null,Kt=null,ti=!1,Wa=!1,da=!1,ei=0,Xn=0,Fa=null,zm=0;function Zt(){throw Error(r(321))}function Yc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!Ee(t[l],e[l]))return!1;return!0}function Gc(t,e,l,a,u,i){return _l=i,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,F.H=t===null||t.memoizedState===null?ha:Cl,da=!1,i=l(a,u),da=!1,Wa&&(i=As(e,l,a,u)),ys(t),i}function ys(t){F.H=tl;var e=Ct!==null&&Ct.next!==null;if(_l=0,Kt=Ct=bt=null,ti=!1,Xn=0,Fa=null,e)throw Error(r(300));t===null||le||(t=t.dependencies,t!==null&&fi(t)&&(le=!0))}function As(t,e,l,a){bt=t;var u=0;do{if(Wa&&(Fa=null),Xn=0,Wa=!1,25<=u)throw Error(r(301));if(u+=1,Kt=Ct=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}F.H=pa,i=e(l,a)}while(Wa);return i}function Om(){var t=F.H,e=t.useState()[0];return e=typeof e.then=="function"?Vn(e):e,t=t.useState()[0],(Ct!==null?Ct.memoizedState:null)!==t&&(bt.flags|=1024),e}function jc(){var t=ei!==0;return ei=0,t}function Xc(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Vc(t){if(ti){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ti=!1}_l=0,Kt=Ct=bt=null,Wa=!1,Xn=ei=0,Fa=null}function ye(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?bt.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function Jt(){if(Ct===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Kt===null?bt.memoizedState:Kt.next;if(e!==null)Kt=e,Ct=t;else{if(t===null)throw bt.alternate===null?Error(r(467)):Error(r(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Kt===null?bt.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}var li;li=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Vn(t){var e=Xn;return Xn+=1,Fa===null&&(Fa=[]),t=os(Fa,t,e),e=bt,(Kt===null?e.memoizedState:Kt.next)===null&&(e=e.alternate,F.H=e===null||e.memoizedState===null?ha:Cl),t}function ai(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Vn(t);if(t.$$typeof===G)return de(t)}throw Error(r(438,String(t)))}function Zc(t){var e=null,l=bt.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=bt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=li(),bt.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=nt;return e.index++,l}function sl(t,e){return typeof e=="function"?e(t):e}function ni(t){var e=Jt();return Kc(e,Ct,t)}function Kc(t,e,l){var a=t.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=l;var u=t.baseQueue,i=a.pending;if(i!==null){if(u!==null){var o=u.next;u.next=i.next,i.next=o}e.baseQueue=u=i,a.pending=null}if(i=t.baseState,u===null)t.memoizedState=i;else{e=u.next;var s=o=null,h=null,y=e,R=!1;do{var U=y.lane&-536870913;if(U!==y.lane?(Et&U)===U:(_l&U)===U){var E=y.revertLane;if(E===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),U===Ka&&(R=!0);else if((_l&E)===E){y=y.next,E===Ka&&(R=!0);continue}else U={lane:0,revertLane:y.revertLane,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},h===null?(s=h=U,o=i):h=h.next=U,bt.lanes|=E,ql|=E;U=y.action,da&&l(i,U),i=y.hasEagerState?y.eagerState:l(i,U)}else E={lane:U,revertLane:y.revertLane,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},h===null?(s=h=E,o=i):h=h.next=E,bt.lanes|=U,ql|=U;y=y.next}while(y!==null&&y!==e);if(h===null?o=i:h.next=s,!Ee(i,t.memoizedState)&&(le=!0,R&&(l=Ja,l!==null)))throw l;t.memoizedState=i,t.baseState=o,t.baseQueue=h,a.lastRenderedState=i}return u===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Jc(t){var e=Jt(),l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=t;var a=l.dispatch,u=l.pending,i=e.memoizedState;if(u!==null){l.pending=null;var o=u=u.next;do i=t(i,o.action),o=o.next;while(o!==u);Ee(i,e.memoizedState)||(le=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function Ss(t,e,l){var a=bt,u=Jt(),i=wt;if(i){if(l===void 0)throw Error(r(407));l=l()}else l=e();var o=!Ee((Ct||u).memoizedState,l);if(o&&(u.memoizedState=l,le=!0),u=u.queue,Ic(Ts.bind(null,a,u,t),[t]),u.getSnapshot!==e||o||Kt!==null&&Kt.memoizedState.tag&1){if(a.flags|=2048,Ia(9,Es.bind(null,a,u,l,e),{destroy:void 0},null),Ut===null)throw Error(r(349));i||(_l&60)!==0||xs(a,e,l)}return l}function xs(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=bt.updateQueue,e===null?(e=li(),bt.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Es(t,e,l,a){e.value=l,e.getSnapshot=a,Ds(e)&&ws(t)}function Ts(t,e,l){return l(function(){Ds(e)&&ws(t)})}function Ds(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!Ee(t,l)}catch{return!0}}function ws(t){var e=Ol(t,2);e!==null&&me(e,t,2)}function Wc(t){var e=ye();if(typeof t=="function"){var l=t;if(t=l(),da){Dl(!0);try{l()}finally{Dl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:t},e}function zs(t,e,l,a){return t.baseState=l,Kc(t,Ct,typeof a=="function"?a:sl)}function Rm(t,e,l,a,u){if(ci(t))throw Error(r(485));if(t=e.action,t!==null){var i={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};F.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,Os(e,i)):(i.next=l.next,e.pending=l.next=i)}}function Os(t,e){var l=e.action,a=e.payload,u=t.state;if(e.isTransition){var i=F.T,o={};F.T=o;try{var s=l(u,a),h=F.S;h!==null&&h(o,s),Rs(t,e,s)}catch(y){Fc(t,e,y)}finally{F.T=i}}else try{i=l(u,a),Rs(t,e,i)}catch(y){Fc(t,e,y)}}function Rs(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Ms(t,e,a)},function(a){return Fc(t,e,a)}):Ms(t,e,l)}function Ms(t,e,l){e.status="fulfilled",e.value=l,_s(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Os(t,l)))}function Fc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,_s(e),e=e.next;while(e!==a)}t.action=null}function _s(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Cs(t,e){return e}function $s(t,e){if(wt){var l=Ut.formState;if(l!==null){t:{var a=bt;if(wt){if(ce){e:{for(var u=ce,i=Ie;u.nodeType!==8;){if(!i){u=null;break e}if(u=Ke(u.nextSibling),u===null){u=null;break e}}i=u.data,u=i==="F!"||i==="F"?u:null}if(u){ce=Ke(u.nextSibling),a=u.data==="F!";break t}}oa(a)}a=!1}a&&(e=l[0])}}return l=ye(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:e},l.queue=a,l=Fs.bind(null,bt,a),a.dispatch=l,a=Wc(!1),i=ar.bind(null,bt,!1,a.queue),a=ye(),u={state:e,dispatch:null,action:t,pending:null},a.queue=u,l=Rm.bind(null,bt,u,i,l),u.dispatch=l,a.memoizedState=t,[e,l,!1]}function Bs(t){var e=Jt();return Hs(e,Ct,t)}function Hs(t,e,l){e=Kc(t,e,Cs)[0],t=ni(sl)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?Vn(e):e;var a=Jt(),u=a.queue,i=u.dispatch;return l!==a.memoizedState&&(bt.flags|=2048,Ia(9,Mm.bind(null,u,l),{destroy:void 0},null)),[e,i,t]}function Mm(t,e){t.action=e}function Us(t){var e=Jt(),l=Ct;if(l!==null)return Hs(e,l,t);Jt(),e=e.memoizedState,l=Jt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Ia(t,e,l,a){return t={tag:t,create:e,inst:l,deps:a,next:null},e=bt.updateQueue,e===null&&(e=li(),bt.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Ns(){return Jt().memoizedState}function ui(t,e,l,a){var u=ye();bt.flags|=t,u.memoizedState=Ia(1|e,l,{destroy:void 0},a===void 0?null:a)}function ii(t,e,l,a){var u=Jt();a=a===void 0?null:a;var i=u.memoizedState.inst;Ct!==null&&a!==null&&Yc(a,Ct.memoizedState.deps)?u.memoizedState=Ia(e,l,i,a):(bt.flags|=t,u.memoizedState=Ia(1|e,l,i,a))}function ks(t,e){ui(8390656,8,t,e)}function Ic(t,e){ii(2048,8,t,e)}function Ls(t,e){return ii(4,2,t,e)}function Qs(t,e){return ii(4,4,t,e)}function qs(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ys(t,e,l){l=l!=null?l.concat([t]):null,ii(4,4,qs.bind(null,e,t),l)}function Pc(){}function Gs(t,e){var l=Jt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Yc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function js(t,e){var l=Jt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Yc(e,a[1]))return a[0];if(a=t(),da){Dl(!0);try{t()}finally{Dl(!1)}}return l.memoizedState=[a,e],a}function tr(t,e,l){return l===void 0||(_l&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=Vd(),bt.lanes|=t,ql|=t,l)}function Xs(t,e,l,a){return Ee(l,e)?l:Za.current!==null?(t=tr(t,l,a),Ee(t,e)||(le=!0),t):(_l&42)===0?(le=!0,t.memoizedState=l):(t=Vd(),bt.lanes|=t,ql|=t,e)}function Vs(t,e,l,a,u){var i=H.p;H.p=i!==0&&8>i?i:8;var o=F.T,s={};F.T=s,ar(t,!1,e,l);try{var h=u(),y=F.S;if(y!==null&&y(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var R=wm(h,a);Zn(t,e,R,ze(t))}else Zn(t,e,a,ze(t))}catch(U){Zn(t,e,{then:function(){},status:"rejected",reason:U},ze())}finally{H.p=i,F.T=o}}function _m(){}function er(t,e,l,a){if(t.tag!==5)throw Error(r(476));var u=Zs(t).queue;Vs(t,u,e,tt,l===null?_m:function(){return Ks(t),l(a)})}function Zs(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:tt},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Ks(t){var e=Zs(t).next.queue;Zn(t,e,{},ze())}function lr(){return de(hu)}function Js(){return Jt().memoizedState}function Ws(){return Jt().memoizedState}function Cm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=ze();t=Hl(l);var a=Ul(e,t,l);a!==null&&(me(a,e,l),Wn(a,e,l)),e={cache:Lc()},t.payload=e;return}e=e.return}}function $m(t,e,l){var a=ze();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},ci(t)?Is(e,l):(l=Cc(t,e,l,a),l!==null&&(me(l,t,a),Ps(l,e,a)))}function Fs(t,e,l){var a=ze();Zn(t,e,l,a)}function Zn(t,e,l,a){var u={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(ci(t))Is(e,u);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,s=i(o,l);if(u.hasEagerState=!0,u.eagerState=s,Ee(s,o))return ju(t,e,u,0),Ut===null&&Gu(),!1}catch{}finally{}if(l=Cc(t,e,u,a),l!==null)return me(l,t,a),Ps(l,e,a),!0}return!1}function ar(t,e,l,a){if(a={lane:2,revertLane:Vr(),action:a,hasEagerState:!1,eagerState:null,next:null},ci(t)){if(e)throw Error(r(479))}else e=Cc(t,l,a,2),e!==null&&me(e,t,2)}function ci(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function Is(t,e){Wa=ti=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Ps(t,e,l){if((l&4194176)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,ff(t,l)}}var tl={readContext:de,use:ai,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useLayoutEffect:Zt,useInsertionEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useSyncExternalStore:Zt,useId:Zt};tl.useCacheRefresh=Zt,tl.useMemoCache=Zt,tl.useHostTransitionStatus=Zt,tl.useFormState=Zt,tl.useActionState=Zt,tl.useOptimistic=Zt;var ha={readContext:de,use:ai,useCallback:function(t,e){return ye().memoizedState=[t,e===void 0?null:e],t},useContext:de,useEffect:ks,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ui(4194308,4,qs.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ui(4194308,4,t,e)},useInsertionEffect:function(t,e){ui(4,2,t,e)},useMemo:function(t,e){var l=ye();e=e===void 0?null:e;var a=t();if(da){Dl(!0);try{t()}finally{Dl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=ye();if(l!==void 0){var u=l(e);if(da){Dl(!0);try{l(e)}finally{Dl(!1)}}}else u=e;return a.memoizedState=a.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},a.queue=t,t=t.dispatch=$m.bind(null,bt,t),[a.memoizedState,t]},useRef:function(t){var e=ye();return t={current:t},e.memoizedState=t},useState:function(t){t=Wc(t);var e=t.queue,l=Fs.bind(null,bt,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Pc,useDeferredValue:function(t,e){var l=ye();return tr(l,t,e)},useTransition:function(){var t=Wc(!1);return t=Vs.bind(null,bt,t.queue,!0,!1),ye().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=bt,u=ye();if(wt){if(l===void 0)throw Error(r(407));l=l()}else{if(l=e(),Ut===null)throw Error(r(349));(Et&60)!==0||xs(a,e,l)}u.memoizedState=l;var i={value:l,getSnapshot:e};return u.queue=i,ks(Ts.bind(null,a,i,t),[t]),a.flags|=2048,Ia(9,Es.bind(null,a,i,l,e),{destroy:void 0},null),l},useId:function(){var t=ye(),e=Ut.identifierPrefix;if(wt){var l=ol,a=rl;l=(a&~(1<<32-xe(a)-1)).toString(32)+l,e=":"+e+"R"+l,l=ei++,0<l&&(e+="H"+l.toString(32)),e+=":"}else l=zm++,e=":"+e+"r"+l.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return ye().memoizedState=Cm.bind(null,bt)}};ha.useMemoCache=Zc,ha.useHostTransitionStatus=lr,ha.useFormState=$s,ha.useActionState=$s,ha.useOptimistic=function(t){var e=ye();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=ar.bind(null,bt,!0,l),l.dispatch=e,[t,e]};var Cl={readContext:de,use:ai,useCallback:Gs,useContext:de,useEffect:Ic,useImperativeHandle:Ys,useInsertionEffect:Ls,useLayoutEffect:Qs,useMemo:js,useReducer:ni,useRef:Ns,useState:function(){return ni(sl)},useDebugValue:Pc,useDeferredValue:function(t,e){var l=Jt();return Xs(l,Ct.memoizedState,t,e)},useTransition:function(){var t=ni(sl)[0],e=Jt().memoizedState;return[typeof t=="boolean"?t:Vn(t),e]},useSyncExternalStore:Ss,useId:Js};Cl.useCacheRefresh=Ws,Cl.useMemoCache=Zc,Cl.useHostTransitionStatus=lr,Cl.useFormState=Bs,Cl.useActionState=Bs,Cl.useOptimistic=function(t,e){var l=Jt();return zs(l,Ct,t,e)};var pa={readContext:de,use:ai,useCallback:Gs,useContext:de,useEffect:Ic,useImperativeHandle:Ys,useInsertionEffect:Ls,useLayoutEffect:Qs,useMemo:js,useReducer:Jc,useRef:Ns,useState:function(){return Jc(sl)},useDebugValue:Pc,useDeferredValue:function(t,e){var l=Jt();return Ct===null?tr(l,t,e):Xs(l,Ct.memoizedState,t,e)},useTransition:function(){var t=Jc(sl)[0],e=Jt().memoizedState;return[typeof t=="boolean"?t:Vn(t),e]},useSyncExternalStore:Ss,useId:Js};pa.useCacheRefresh=Ws,pa.useMemoCache=Zc,pa.useHostTransitionStatus=lr,pa.useFormState=Us,pa.useActionState=Us,pa.useOptimistic=function(t,e){var l=Jt();return Ct!==null?zs(l,Ct,t,e):(l.baseState=t,[t,l.queue.dispatch])};function nr(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:ht({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var ur={isMounted:function(t){return(t=t._reactInternals)?V(t)===t:!1},enqueueSetState:function(t,e,l){t=t._reactInternals;var a=ze(),u=Hl(a);u.payload=e,l!=null&&(u.callback=l),e=Ul(t,u,a),e!==null&&(me(e,t,a),Wn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=ze(),u=Hl(a);u.tag=1,u.payload=e,l!=null&&(u.callback=l),e=Ul(t,u,a),e!==null&&(me(e,t,a),Wn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=ze(),a=Hl(l);a.tag=2,e!=null&&(a.callback=e),e=Ul(t,a,l),e!==null&&(me(e,t,l),Wn(e,t,l))}};function td(t,e,l,a,u,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,o):e.prototype&&e.prototype.isPureReactComponent?!Bn(l,a)||!Bn(u,i):!0}function ed(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&ur.enqueueReplaceState(e,e.state,null)}function ma(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=ht({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}var ri=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function ld(t){ri(t)}function ad(t){console.error(t)}function nd(t){ri(t)}function oi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function ud(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ir(t,e,l){return l=Hl(l),l.tag=3,l.payload={element:null},l.callback=function(){oi(t,e)},l}function id(t){return t=Hl(t),t.tag=3,t}function cd(t,e,l,a){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var i=a.value;t.payload=function(){return u(i)},t.callback=function(){ud(e,l,a)}}var o=l.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){ud(e,l,a),typeof u!="function"&&(Yl===null?Yl=new Set([this]):Yl.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function Bm(t,e,l,a,u){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Jn(e,l,u,!0),l=Ne.current,l!==null){switch(l.tag){case 13:return Pe===null?qr():l.alternate===null&&jt===0&&(jt=3),l.flags&=-257,l.flags|=65536,l.lanes=u,a===Uc?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Gr(t,a,u)),!1;case 22:return l.flags|=65536,a===Uc?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Gr(t,a,u)),!1}throw Error(r(435,l.tag))}return Gr(t,a,u),qr(),!1}if(wt)return e=Ne.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,a!==Hc&&(t=Error(r(422),{cause:a}),kn(Be(t,l)))):(a!==Hc&&(e=Error(r(423),{cause:a}),kn(Be(e,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,a=Be(a,l),u=ir(t.stateNode,a,u),Sr(t,u),jt!==4&&(jt=2)),!1;var i=Error(r(520),{cause:a});if(i=Be(i,l),nu===null?nu=[i]:nu.push(i),jt!==4&&(jt=2),e===null)return!0;a=Be(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=ir(l.stateNode,a,t),Sr(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Yl===null||!Yl.has(i))))return l.flags|=65536,u&=-u,l.lanes|=u,u=id(u),cd(u,t,l,a),Sr(l,u),!1}l=l.return}while(l!==null);return!1}var rd=Error(r(461)),le=!1;function re(t,e,l,a){e.child=t===null?hs(e,null,l,a):fa(e,t.child,l,a)}function od(t,e,l,a,u){l=l.render;var i=e.ref;if("ref"in a){var o={};for(var s in a)s!=="ref"&&(o[s]=a[s])}else o=a;return ba(e),a=Gc(t,e,l,o,i,u),s=jc(),t!==null&&!le?(Xc(t,e,u),dl(t,e,u)):(wt&&s&&$c(e),e.flags|=1,re(t,e,a,u),e.child)}function fd(t,e,l,a,u){if(t===null){var i=l.type;return typeof i=="function"&&!Rr(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,sd(t,e,i,a,u)):(t=pi(l.type,null,a,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!mr(t,u)){var o=i.memoizedProps;if(l=l.compare,l=l!==null?l:Bn,l(o,a)&&t.ref===e.ref)return dl(t,e,u)}return e.flags|=1,t=Ql(i,a),t.ref=e.ref,t.return=e,e.child=t}function sd(t,e,l,a,u){if(t!==null){var i=t.memoizedProps;if(Bn(i,a)&&t.ref===e.ref)if(le=!1,e.pendingProps=a=i,mr(t,u))(t.flags&131072)!==0&&(le=!0);else return e.lanes=t.lanes,dl(t,e,u)}return cr(t,e,l,a,u)}function dd(t,e,l){var a=e.pendingProps,u=a.children,i=(e.stateNode._pendingVisibility&2)!==0,o=t!==null?t.memoizedState:null;if(Kn(t,e),a.mode==="hidden"||i){if((e.flags&128)!==0){if(a=o!==null?o.baseLanes|l:l,t!==null){for(u=e.child=t.child,i=0;u!==null;)i=i|u.lanes|u.childLanes,u=u.sibling;e.childLanes=i&~a}else e.childLanes=0,e.child=null;return hd(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pu(e,o!==null?o.cachePool:null),o!==null?ps(e,o):Nc(),ms(e);else return e.lanes=e.childLanes=536870912,hd(t,e,o!==null?o.baseLanes|l:l,l)}else o!==null?(Pu(e,o.cachePool),ps(e,o),Ml(),e.memoizedState=null):(t!==null&&Pu(e,null),Nc(),Ml());return re(t,e,u,l),e.child}function hd(t,e,l,a){var u=qc();return u=u===null?null:{parent:te._currentValue,pool:u},e.memoizedState={baseLanes:l,cachePool:u},t!==null&&Pu(e,null),Nc(),ms(e),t!==null&&Jn(t,e,a,!0),null}function Kn(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(t===null||t.ref!==l)&&(e.flags|=2097664)}}function cr(t,e,l,a,u){return ba(e),l=Gc(t,e,l,a,void 0,u),a=jc(),t!==null&&!le?(Xc(t,e,u),dl(t,e,u)):(wt&&a&&$c(e),e.flags|=1,re(t,e,l,u),e.child)}function pd(t,e,l,a,u,i){return ba(e),e.updateQueue=null,l=As(e,a,l,u),ys(t),a=jc(),t!==null&&!le?(Xc(t,e,i),dl(t,e,i)):(wt&&a&&$c(e),e.flags|=1,re(t,e,l,i),e.child)}function md(t,e,l,a,u){if(ba(e),e.stateNode===null){var i=Ga,o=l.contextType;typeof o=="object"&&o!==null&&(i=de(o)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ur,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},yr(e),o=l.contextType,i.context=typeof o=="object"&&o!==null?de(o):Ga,i.state=e.memoizedState,o=l.getDerivedStateFromProps,typeof o=="function"&&(nr(e,l,o,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&ur.enqueueReplaceState(i,i.state,null),In(e,a,i,u),Fn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,h=ma(l,s);i.props=h;var y=i.context,R=l.contextType;o=Ga,typeof R=="object"&&R!==null&&(o=de(R));var U=l.getDerivedStateFromProps;R=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,R||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||y!==o)&&ed(e,i,a,o),Bl=!1;var E=e.memoizedState;i.state=E,In(e,a,i,u),Fn(),y=e.memoizedState,s||E!==y||Bl?(typeof U=="function"&&(nr(e,l,U,a),y=e.memoizedState),(h=Bl||td(e,l,h,a,E,y,o))?(R||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=y),i.props=a,i.state=y,i.context=o,a=h):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Ar(t,e),o=e.memoizedProps,R=ma(l,o),i.props=R,U=e.pendingProps,E=i.context,y=l.contextType,h=Ga,typeof y=="object"&&y!==null&&(h=de(y)),s=l.getDerivedStateFromProps,(y=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==U||E!==h)&&ed(e,i,a,h),Bl=!1,E=e.memoizedState,i.state=E,In(e,a,i,u),Fn();var O=e.memoizedState;o!==U||E!==O||Bl||t!==null&&t.dependencies!==null&&fi(t.dependencies)?(typeof s=="function"&&(nr(e,l,s,a),O=e.memoizedState),(R=Bl||td(e,l,R,a,E,O,h)||t!==null&&t.dependencies!==null&&fi(t.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,O,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,O,h)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=O),i.props=a,i.state=O,i.context=h,a=R):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Kn(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=fa(e,t.child,null,u),e.child=fa(e,null,l,u)):re(t,e,l,u),e.memoizedState=i.state,t=e.child):t=dl(t,e,u),t}function vd(t,e,l,a){return Nn(),e.flags|=256,re(t,e,l,a),e.child}var rr={dehydrated:null,treeContext:null,retryLane:0};function or(t){return{baseLanes:t,cachePool:gs()}}function fr(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=qe),t}function bd(t,e,l){var a=e.pendingProps,u=!1,i=(e.flags&128)!==0,o;if((o=i)||(o=t!==null&&t.memoizedState===null?!1:(Pt.current&2)!==0),o&&(u=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(wt){if(u?Rl(e):Ml(),wt){var s=ce,h;if(h=s){t:{for(h=s,s=Ie;h.nodeType!==8;){if(!s){s=null;break t}if(h=Ke(h.nextSibling),h===null){s=null;break t}}s=h}s!==null?(e.memoizedState={dehydrated:s,treeContext:ca!==null?{id:rl,overflow:ol}:null,retryLane:536870912},h=Qe(18,null,null,0),h.stateNode=s,h.return=e,e.child=h,pe=e,ce=null,h=!0):h=!1}h||oa(e)}if(s=e.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return s.data==="$!"?e.lanes=16:e.lanes=536870912,null;fl(e)}return s=a.children,a=a.fallback,u?(Ml(),u=e.mode,s=dr({mode:"hidden",children:s},u),a=ya(a,u,l,null),s.return=e,a.return=e,s.sibling=a,e.child=s,u=e.child,u.memoizedState=or(l),u.childLanes=fr(t,o,l),e.memoizedState=rr,a):(Rl(e),sr(e,s))}if(h=t.memoizedState,h!==null&&(s=h.dehydrated,s!==null)){if(i)e.flags&256?(Rl(e),e.flags&=-257,e=hr(t,e,l)):e.memoizedState!==null?(Ml(),e.child=t.child,e.flags|=128,e=null):(Ml(),u=a.fallback,s=e.mode,a=dr({mode:"visible",children:a.children},s),u=ya(u,s,l,null),u.flags|=2,a.return=e,u.return=e,a.sibling=u,e.child=a,fa(e,t.child,null,l),a=e.child,a.memoizedState=or(l),a.childLanes=fr(t,o,l),e.memoizedState=rr,e=u);else if(Rl(e),s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var y=o.dgst;o=y,a=Error(r(419)),a.stack="",a.digest=o,kn({value:a,source:null,stack:null}),e=hr(t,e,l)}else if(le||Jn(t,e,l,!1),o=(l&t.childLanes)!==0,le||o){if(o=Ut,o!==null){if(a=l&-l,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(o.suspendedLanes|l))!==0?0:a,a!==0&&a!==h.retryLane)throw h.retryLane=a,Ol(t,a),me(o,t,a),rd}s.data==="$?"||qr(),e=hr(t,e,l)}else s.data==="$?"?(e.flags|=128,e.child=t.child,e=Jm.bind(null,t),s._reactRetry=e,e=null):(t=h.treeContext,ce=Ke(s.nextSibling),pe=e,wt=!0,Ve=null,Ie=!1,t!==null&&(He[Ue++]=rl,He[Ue++]=ol,He[Ue++]=ca,rl=t.id,ol=t.overflow,ca=e),e=sr(e,a.children),e.flags|=4096);return e}return u?(Ml(),u=a.fallback,s=e.mode,h=t.child,y=h.sibling,a=Ql(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&31457280,y!==null?u=Ql(y,u):(u=ya(u,s,l,null),u.flags|=2),u.return=e,a.return=e,a.sibling=u,e.child=a,a=u,u=e.child,s=t.child.memoizedState,s===null?s=or(l):(h=s.cachePool,h!==null?(y=te._currentValue,h=h.parent!==y?{parent:y,pool:y}:h):h=gs(),s={baseLanes:s.baseLanes|l,cachePool:h}),u.memoizedState=s,u.childLanes=fr(t,o,l),e.memoizedState=rr,a):(Rl(e),l=t.child,t=l.sibling,l=Ql(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=l,e.memoizedState=null,l)}function sr(t,e){return e=dr({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function dr(t,e){return Gd(t,e,0,null)}function hr(t,e,l){return fa(e,t.child,null,l),t=sr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gd(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),br(t.return,e,l)}function pr(t,e,l,a,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:u}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=l,i.tailMode=u)}function yd(t,e,l){var a=e.pendingProps,u=a.revealOrder,i=a.tail;if(re(t,e,a.children,l),a=Pt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gd(t,l,e);else if(t.tag===19)gd(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(et(Pt,a),u){case"forwards":for(l=e.child,u=null;l!==null;)t=l.alternate,t!==null&&Iu(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=e.child,e.child=null):(u=l.sibling,l.sibling=null),pr(e,!1,u,l,i);break;case"backwards":for(l=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&Iu(t)===null){e.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}pr(e,!0,l,null,i);break;case"together":pr(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function dl(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),ql|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Jn(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(r(153));if(e.child!==null){for(t=e.child,l=Ql(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Ql(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function mr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&fi(t)))}function Hm(t,e,l){switch(e.tag){case 3:Lt(e,e.stateNode.containerInfo),$l(e,te,t.memoizedState.cache),Nn();break;case 27:case 5:Ae(e);break;case 4:Lt(e,e.stateNode.containerInfo);break;case 10:$l(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Rl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?bd(t,e,l):(Rl(e),t=dl(t,e,l),t!==null?t.sibling:null);Rl(e);break;case 19:var u=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Jn(t,e,l,!1),a=(l&e.childLanes)!==0),u){if(a)return yd(t,e,l);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),et(Pt,Pt.current),a)break;return null;case 22:case 23:return e.lanes=0,dd(t,e,l);case 24:$l(e,te,t.memoizedState.cache)}return dl(t,e,l)}function Ad(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)le=!0;else{if(!mr(t,l)&&(e.flags&128)===0)return le=!1,Hm(t,e,l);le=(t.flags&131072)!==0}else le=!1,wt&&(e.flags&1048576)!==0&&ns(e,Zu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,u=a._init;if(a=u(a._payload),e.type=a,typeof a=="function")Rr(a)?(t=ma(a,t),e.tag=1,e=md(null,e,a,t,l)):(e.tag=0,e=cr(null,e,a,t,l));else{if(a!=null){if(u=a.$$typeof,u===Z){e.tag=11,e=od(null,e,a,t,l);break t}else if(u===Q){e.tag=14,e=fd(null,e,a,t,l);break t}}throw e=Ot(a)||a,Error(r(306,e,""))}}return e;case 0:return cr(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,u=ma(a,e.pendingProps),md(t,e,a,u,l);case 3:t:{if(Lt(e,e.stateNode.containerInfo),t===null)throw Error(r(387));var i=e.pendingProps;u=e.memoizedState,a=u.element,Ar(t,e),In(e,i,null,l);var o=e.memoizedState;if(i=o.cache,$l(e,te,i),i!==u.cache&&gr(e,[te],l,!0),Fn(),i=o.element,u.isDehydrated)if(u={element:i,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=vd(t,e,i,l);break t}else if(i!==a){a=Be(Error(r(424)),e),kn(a),e=vd(t,e,i,l);break t}else for(ce=Ke(e.stateNode.containerInfo.firstChild),pe=e,wt=!0,Ve=null,Ie=!0,l=hs(e,null,i,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Nn(),i===a){e=dl(t,e,l);break t}re(t,e,i,l)}e=e.child}return e;case 26:return Kn(t,e),t===null?(l=E0(e.type,null,e.pendingProps,null))?e.memoizedState=l:wt||(l=e.type,t=e.pendingProps,a=wi(Dt.current).createElement(l),a[se]=e,a[be]=t,oe(a,l,t),ee(a),e.stateNode=a):e.memoizedState=E0(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Ae(e),t===null&&wt&&(a=e.stateNode=A0(e.type,e.pendingProps,Dt.current),pe=e,Ie=!0,ce=Ke(a.firstChild)),a=e.pendingProps.children,t!==null||wt?re(t,e,a,l):e.child=fa(e,null,a,l),Kn(t,e),e.child;case 5:return t===null&&wt&&((u=a=ce)&&(a=sv(a,e.type,e.pendingProps,Ie),a!==null?(e.stateNode=a,pe=e,ce=Ke(a.firstChild),Ie=!1,u=!0):u=!1),u||oa(e)),Ae(e),u=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,a=i.children,eo(u,i)?a=null:o!==null&&eo(u,o)&&(e.flags|=32),e.memoizedState!==null&&(u=Gc(t,e,Om,null,null,l),hu._currentValue=u),Kn(t,e),re(t,e,a,l),e.child;case 6:return t===null&&wt&&((t=l=ce)&&(l=dv(l,e.pendingProps,Ie),l!==null?(e.stateNode=l,pe=e,ce=null,t=!0):t=!1),t||oa(e)),null;case 13:return bd(t,e,l);case 4:return Lt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=fa(e,null,a,l):re(t,e,a,l),e.child;case 11:return od(t,e,e.type,e.pendingProps,l);case 7:return re(t,e,e.pendingProps,l),e.child;case 8:return re(t,e,e.pendingProps.children,l),e.child;case 12:return re(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,$l(e,e.type,a.value),re(t,e,a.children,l),e.child;case 9:return u=e.type._context,a=e.pendingProps.children,ba(e),u=de(u),a=a(u),e.flags|=1,re(t,e,a,l),e.child;case 14:return fd(t,e,e.type,e.pendingProps,l);case 15:return sd(t,e,e.type,e.pendingProps,l);case 19:return yd(t,e,l);case 22:return dd(t,e,l);case 24:return ba(e),a=de(te),t===null?(u=qc(),u===null&&(u=Ut,i=Lc(),u.pooledCache=i,i.refCount++,i!==null&&(u.pooledCacheLanes|=l),u=i),e.memoizedState={parent:a,cache:u},yr(e),$l(e,te,u)):((t.lanes&l)!==0&&(Ar(t,e),In(e,null,null,l),Fn()),u=t.memoizedState,i=e.memoizedState,u.parent!==a?(u={parent:a,cache:a},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),$l(e,te,a)):(a=i.cache,$l(e,te,a),a!==u.cache&&gr(e,[te],l,!0))),re(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(r(156,e.tag))}var vr=st(null),va=null,hl=null;function $l(t,e,l){et(vr,e._currentValue),e._currentValue=l}function pl(t){t._currentValue=vr.current,C(vr)}function br(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function gr(t,e,l,a){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var i=u.dependencies;if(i!==null){var o=u.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=u;for(var h=0;h<e.length;h++)if(s.context===e[h]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),br(i.return,l,t),a||(o=null);break t}i=s.next}}else if(u.tag===18){if(o=u.return,o===null)throw Error(r(341));o.lanes|=l,i=o.alternate,i!==null&&(i.lanes|=l),br(o,l,t),o=null}else o=u.child;if(o!==null)o.return=u;else for(o=u;o!==null;){if(o===t){o=null;break}if(u=o.sibling,u!==null){u.return=o.return,o=u;break}o=o.return}u=o}}function Jn(t,e,l,a){t=null;for(var u=e,i=!1;u!==null;){if(!i){if((u.flags&524288)!==0)i=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var o=u.alternate;if(o===null)throw Error(r(387));if(o=o.memoizedProps,o!==null){var s=u.type;Ee(u.pendingProps.value,o.value)||(t!==null?t.push(s):t=[s])}}else if(u===Yt.current){if(o=u.alternate,o===null)throw Error(r(387));o.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(hu):t=[hu])}u=u.return}t!==null&&gr(e,t,l,a),e.flags|=262144}function fi(t){for(t=t.firstContext;t!==null;){if(!Ee(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ba(t){va=t,hl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function de(t){return Sd(va,t)}function si(t,e){return va===null&&ba(t),Sd(t,e)}function Sd(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},hl===null){if(t===null)throw Error(r(308));hl=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else hl=hl.next=e;return l}var Bl=!1;function yr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ar(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Hl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ul(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(qt&2)!==0){var u=a.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),a.pending=e,e=Xu(t),ls(t,null,l),e}return ju(t,a,e,l),Xu(t)}function Wn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194176)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,ff(t,l)}}function Sr(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var u=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var o={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?u=i=o:i=i.next=o,l=l.next}while(l!==null);i===null?u=i=e:i=i.next=e}else u=i=e;l={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var xr=!1;function Fn(){if(xr){var t=Ja;if(t!==null)throw t}}function In(t,e,l,a){xr=!1;var u=t.updateQueue;Bl=!1;var i=u.firstBaseUpdate,o=u.lastBaseUpdate,s=u.shared.pending;if(s!==null){u.shared.pending=null;var h=s,y=h.next;h.next=null,o===null?i=y:o.next=y,o=h;var R=t.alternate;R!==null&&(R=R.updateQueue,s=R.lastBaseUpdate,s!==o&&(s===null?R.firstBaseUpdate=y:s.next=y,R.lastBaseUpdate=h))}if(i!==null){var U=u.baseState;o=0,R=y=h=null,s=i;do{var E=s.lane&-536870913,O=E!==s.lane;if(O?(Et&E)===E:(a&E)===E){E!==0&&E===Ka&&(xr=!0),R!==null&&(R=R.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var ut=t,pt=s;E=e;var Xt=l;switch(pt.tag){case 1:if(ut=pt.payload,typeof ut=="function"){U=ut.call(Xt,U,E);break t}U=ut;break t;case 3:ut.flags=ut.flags&-65537|128;case 0:if(ut=pt.payload,E=typeof ut=="function"?ut.call(Xt,U,E):ut,E==null)break t;U=ht({},U,E);break t;case 2:Bl=!0}}E=s.callback,E!==null&&(t.flags|=64,O&&(t.flags|=8192),O=u.callbacks,O===null?u.callbacks=[E]:O.push(E))}else O={lane:E,tag:s.tag,payload:s.payload,callback:s.callback,next:null},R===null?(y=R=O,h=U):R=R.next=O,o|=E;if(s=s.next,s===null){if(s=u.shared.pending,s===null)break;O=s,s=O.next,O.next=null,u.lastBaseUpdate=O,u.shared.pending=null}}while(!0);R===null&&(h=U),u.baseState=h,u.firstBaseUpdate=y,u.lastBaseUpdate=R,i===null&&(u.shared.lanes=0),ql|=o,t.lanes=o,t.memoizedState=U}}function xd(t,e){if(typeof t!="function")throw Error(r(191,t));t.call(e)}function Ed(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)xd(l[t],e)}function Pn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var u=a.next;l=u;do{if((l.tag&t)===t){a=void 0;var i=l.create,o=l.inst;a=i(),o.destroy=a}l=l.next}while(l!==u)}}catch(s){Ht(e,e.return,s)}}function Nl(t,e,l){try{var a=e.updateQueue,u=a!==null?a.lastEffect:null;if(u!==null){var i=u.next;a=i;do{if((a.tag&t)===t){var o=a.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,u=e;var h=l;try{s()}catch(y){Ht(u,h,y)}}}a=a.next}while(a!==i)}}catch(y){Ht(e,e.return,y)}}function Td(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Ed(e,l)}catch(a){Ht(t,t.return,a)}}}function Dd(t,e,l){l.props=ma(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){Ht(t,e,a)}}function ga(t,e){try{var l=t.ref;if(l!==null){var a=t.stateNode;switch(t.tag){case 26:case 27:case 5:var u=a;break;default:u=a}typeof l=="function"?t.refCleanup=l(u):l.current=u}}catch(i){Ht(t,e,i)}}function Te(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(u){Ht(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){Ht(t,e,u)}else l.current=null}function wd(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(u){Ht(t,t.return,u)}}function zd(t,e,l){try{var a=t.stateNode;iv(a,t.type,l,e),a[be]=e}catch(u){Ht(t,t.return,u)}}function Od(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Er(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Od(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tr(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.nodeType===8?l.parentNode.insertBefore(t,e):l.insertBefore(t,e):(l.nodeType===8?(e=l.parentNode,e.insertBefore(t,l)):(e=l,e.appendChild(t)),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Di));else if(a!==4&&a!==27&&(t=t.child,t!==null))for(Tr(t,e,l),t=t.sibling;t!==null;)Tr(t,e,l),t=t.sibling}function di(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&a!==27&&(t=t.child,t!==null))for(di(t,e,l),t=t.sibling;t!==null;)di(t,e,l),t=t.sibling}var ml=!1,Gt=!1,Dr=!1,Rd=typeof WeakSet=="function"?WeakSet:Set,ae=null,Md=!1;function Um(t,e){if(t=t.containerInfo,Pr=Ci,t=Zf(t),zc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var u=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var o=0,s=-1,h=-1,y=0,R=0,U=t,E=null;e:for(;;){for(var O;U!==l||u!==0&&U.nodeType!==3||(s=o+u),U!==i||a!==0&&U.nodeType!==3||(h=o+a),U.nodeType===3&&(o+=U.nodeValue.length),(O=U.firstChild)!==null;)E=U,U=O;for(;;){if(U===t)break e;if(E===l&&++y===u&&(s=o),E===i&&++R===a&&(h=o),(O=U.nextSibling)!==null)break;U=E,E=U.parentNode}U=O}l=s===-1||h===-1?null:{start:s,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(to={focusedElem:t,selectionRange:l},Ci=!1,ae=e;ae!==null;)if(e=ae,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ae=t;else for(;ae!==null;){switch(e=ae,i=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,u=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var ut=ma(l.type,u,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(ut,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(pt){Ht(l,l.return,pt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)no(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":no(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=e.sibling,t!==null){t.return=e.return,ae=t;break}ae=e.return}return ut=Md,Md=!1,ut}function _d(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:bl(t,l),a&4&&Pn(5,l);break;case 1:if(bl(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(s){Ht(l,l.return,s)}else{var u=ma(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Ht(l,l.return,s)}}a&64&&Td(l),a&512&&ga(l,l.return);break;case 3:if(bl(t,l),a&64&&(a=l.updateQueue,a!==null)){if(t=null,l.child!==null)switch(l.child.tag){case 27:case 5:t=l.child.stateNode;break;case 1:t=l.child.stateNode}try{Ed(a,t)}catch(s){Ht(l,l.return,s)}}break;case 26:bl(t,l),a&512&&ga(l,l.return);break;case 27:case 5:bl(t,l),e===null&&a&4&&wd(l),a&512&&ga(l,l.return);break;case 12:bl(t,l);break;case 13:bl(t,l),a&4&&Bd(t,l);break;case 22:if(u=l.memoizedState!==null||ml,!u){e=e!==null&&e.memoizedState!==null||Gt;var i=ml,o=Gt;ml=u,(Gt=e)&&!o?kl(t,l,(l.subtreeFlags&8772)!==0):bl(t,l),ml=i,Gt=o}a&512&&(l.memoizedProps.mode==="manual"?ga(l,l.return):Te(l,l.return));break;default:bl(t,l)}}function Cd(t){var e=t.alternate;e!==null&&(t.alternate=null,Cd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&sc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Wt=null,De=!1;function vl(t,e,l){for(l=l.child;l!==null;)$d(t,e,l),l=l.sibling}function $d(t,e,l){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(xn,l)}catch{}switch(l.tag){case 26:Gt||Te(l,e),vl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Gt||Te(l,e);var a=Wt,u=De;for(Wt=l.stateNode,vl(t,e,l),l=l.stateNode,e=l.attributes;e.length;)l.removeAttributeNode(e[0]);sc(l),Wt=a,De=u;break;case 5:Gt||Te(l,e);case 6:u=Wt;var i=De;if(Wt=null,vl(t,e,l),Wt=u,De=i,Wt!==null)if(De)try{t=Wt,a=l.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)}catch(o){Ht(l,e,o)}else try{Wt.removeChild(l.stateNode)}catch(o){Ht(l,e,o)}break;case 18:Wt!==null&&(De?(e=Wt,l=l.stateNode,e.nodeType===8?ao(e.parentNode,l):e.nodeType===1&&ao(e,l),bu(e)):ao(Wt,l.stateNode));break;case 4:a=Wt,u=De,Wt=l.stateNode.containerInfo,De=!0,vl(t,e,l),Wt=a,De=u;break;case 0:case 11:case 14:case 15:Gt||Nl(2,l,e),Gt||Nl(4,l,e),vl(t,e,l);break;case 1:Gt||(Te(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Dd(l,e,a)),vl(t,e,l);break;case 21:vl(t,e,l);break;case 22:Gt||Te(l,e),Gt=(a=Gt)||l.memoizedState!==null,vl(t,e,l),Gt=a;break;default:vl(t,e,l)}}function Bd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bu(t)}catch(l){Ht(e,e.return,l)}}function Nm(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Rd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Rd),e;default:throw Error(r(435,t.tag))}}function wr(t,e){var l=Nm(t);e.forEach(function(a){var u=Wm.bind(null,t,a);l.has(a)||(l.add(a),a.then(u,u))})}function ke(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var u=l[a],i=t,o=e,s=o;t:for(;s!==null;){switch(s.tag){case 27:case 5:Wt=s.stateNode,De=!1;break t;case 3:Wt=s.stateNode.containerInfo,De=!0;break t;case 4:Wt=s.stateNode.containerInfo,De=!0;break t}s=s.return}if(Wt===null)throw Error(r(160));$d(i,o,u),Wt=null,De=!1,i=u.alternate,i!==null&&(i.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Hd(e,t),e=e.sibling}var Ze=null;function Hd(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ke(e,t),Le(t),a&4&&(Nl(3,t,t.return),Pn(3,t),Nl(5,t,t.return));break;case 1:ke(e,t),Le(t),a&512&&(Gt||l===null||Te(l,l.return)),a&64&&ml&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var u=Ze;if(ke(e,t),Le(t),a&512&&(Gt||l===null||Te(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,u=u.ownerDocument||u;e:switch(a){case"title":i=u.getElementsByTagName("title")[0],(!i||i[Dn]||i[se]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=u.createElement(a),u.head.insertBefore(i,u.querySelector("head > title"))),oe(i,a,l),i[se]=t,ee(i),a=i;break t;case"link":var o=w0("link","href",u).get(a+(l.href||""));if(o){for(var s=0;s<o.length;s++)if(i=o[s],i.getAttribute("href")===(l.href==null?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){o.splice(s,1);break e}}i=u.createElement(a),oe(i,a,l),u.head.appendChild(i);break;case"meta":if(o=w0("meta","content",u).get(a+(l.content||""))){for(s=0;s<o.length;s++)if(i=o[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){o.splice(s,1);break e}}i=u.createElement(a),oe(i,a,l),u.head.appendChild(i);break;default:throw Error(r(468,a))}i[se]=t,ee(i),a=i}t.stateNode=a}else z0(u,t.type,t.stateNode);else t.stateNode=D0(u,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?z0(u,t.type,t.stateNode):D0(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&zd(t,t.memoizedProps,l.memoizedProps)}break;case 27:if(a&4&&t.alternate===null){u=t.stateNode,i=t.memoizedProps;try{for(var h=u.firstChild;h;){var y=h.nextSibling,R=h.nodeName;h[Dn]||R==="HEAD"||R==="BODY"||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||u.removeChild(h),h=y}for(var U=t.type,E=u.attributes;E.length;)u.removeAttributeNode(E[0]);oe(u,U,i),u[se]=t,u[be]=i}catch(ut){Ht(t,t.return,ut)}}case 5:if(ke(e,t),Le(t),a&512&&(Gt||l===null||Te(l,l.return)),t.flags&32){u=t.stateNode;try{Ua(u,"")}catch(ut){Ht(t,t.return,ut)}}a&4&&t.stateNode!=null&&(u=t.memoizedProps,zd(t,u,l!==null?l.memoizedProps:u)),a&1024&&(Dr=!0);break;case 6:if(ke(e,t),Le(t),a&4){if(t.stateNode===null)throw Error(r(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(ut){Ht(t,t.return,ut)}}break;case 3:if(Ri=null,u=Ze,Ze=zi(e.containerInfo),ke(e,t),Ze=u,Le(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{bu(e.containerInfo)}catch(ut){Ht(t,t.return,ut)}Dr&&(Dr=!1,Ud(t));break;case 4:a=Ze,Ze=zi(t.stateNode.containerInfo),ke(e,t),Le(t),Ze=a;break;case 12:ke(e,t),Le(t);break;case 13:ke(e,t),Le(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Hr=je()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,wr(t,a)));break;case 22:if(a&512&&(Gt||l===null||Te(l,l.return)),h=t.memoizedState!==null,y=l!==null&&l.memoizedState!==null,R=ml,U=Gt,ml=R||h,Gt=U||y,ke(e,t),Gt=U,ml=R,Le(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,a&8192&&(e._visibility=h?e._visibility&-2:e._visibility|1,h&&(e=ml||Gt,l===null||y||e||Pa(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(l=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(l===null){y=l=e;try{if(u=y.stateNode,h)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=y.stateNode,s=y.memoizedProps.style;var O=s!=null&&s.hasOwnProperty("display")?s.display:null;o.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(ut){Ht(y,y.return,ut)}}}else if(e.tag===6){if(l===null){y=e;try{y.stateNode.nodeValue=h?"":y.memoizedProps}catch(ut){Ht(y,y.return,ut)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,wr(t,l))));break;case 19:ke(e,t),Le(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,wr(t,a)));break;case 21:break;default:ke(e,t),Le(t)}}function Le(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var l=t.return;l!==null;){if(Od(l)){var a=l;break t}l=l.return}throw Error(r(160))}switch(a.tag){case 27:var u=a.stateNode,i=Er(t);di(t,i,u);break;case 5:var o=a.stateNode;a.flags&32&&(Ua(o,""),a.flags&=-33);var s=Er(t);di(t,s,o);break;case 3:case 4:var h=a.stateNode.containerInfo,y=Er(t);Tr(t,y,h);break;default:throw Error(r(161))}}}catch(R){Ht(t,t.return,R)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ud(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Ud(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function bl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)_d(t,e.alternate,e),e=e.sibling}function Pa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Nl(4,e,e.return),Pa(e);break;case 1:Te(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Dd(e,e.return,l),Pa(e);break;case 26:case 27:case 5:Te(e,e.return),Pa(e);break;case 22:Te(e,e.return),e.memoizedState===null&&Pa(e);break;default:Pa(e)}t=t.sibling}}function kl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,u=t,i=e,o=i.flags;switch(i.tag){case 0:case 11:case 15:kl(u,i,l),Pn(4,i);break;case 1:if(kl(u,i,l),a=i,u=a.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(y){Ht(a,a.return,y)}if(a=i,u=a.updateQueue,u!==null){var s=a.stateNode;try{var h=u.shared.hiddenCallbacks;if(h!==null)for(u.shared.hiddenCallbacks=null,u=0;u<h.length;u++)xd(h[u],s)}catch(y){Ht(a,a.return,y)}}l&&o&64&&Td(i),ga(i,i.return);break;case 26:case 27:case 5:kl(u,i,l),l&&a===null&&o&4&&wd(i),ga(i,i.return);break;case 12:kl(u,i,l);break;case 13:kl(u,i,l),l&&o&4&&Bd(u,i);break;case 22:i.memoizedState===null&&kl(u,i,l),ga(i,i.return);break;default:kl(u,i,l)}e=e.sibling}}function zr(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Gn(l))}function Or(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Gn(t))}function Ll(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nd(t,e,l,a),e=e.sibling}function Nd(t,e,l,a){var u=e.flags;switch(e.tag){case 0:case 11:case 15:Ll(t,e,l,a),u&2048&&Pn(9,e);break;case 3:Ll(t,e,l,a),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Gn(t)));break;case 12:if(u&2048){Ll(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,o=i.id,s=i.onPostCommit;typeof s=="function"&&s(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){Ht(e,e.return,h)}}else Ll(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,e.memoizedState!==null?i._visibility&4?Ll(t,e,l,a):tu(t,e):i._visibility&4?Ll(t,e,l,a):(i._visibility|=4,tn(t,e,l,a,(e.subtreeFlags&10256)!==0)),u&2048&&zr(e.alternate,e);break;case 24:Ll(t,e,l,a),u&2048&&Or(e.alternate,e);break;default:Ll(t,e,l,a)}}function tn(t,e,l,a,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var i=t,o=e,s=l,h=a,y=o.flags;switch(o.tag){case 0:case 11:case 15:tn(i,o,s,h,u),Pn(8,o);break;case 23:break;case 22:var R=o.stateNode;o.memoizedState!==null?R._visibility&4?tn(i,o,s,h,u):tu(i,o):(R._visibility|=4,tn(i,o,s,h,u)),u&&y&2048&&zr(o.alternate,o);break;case 24:tn(i,o,s,h,u),u&&y&2048&&Or(o.alternate,o);break;default:tn(i,o,s,h,u)}e=e.sibling}}function tu(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,u=a.flags;switch(a.tag){case 22:tu(l,a),u&2048&&zr(a.alternate,a);break;case 24:tu(l,a),u&2048&&Or(a.alternate,a);break;default:tu(l,a)}e=e.sibling}}var eu=8192;function en(t){if(t.subtreeFlags&eu)for(t=t.child;t!==null;)kd(t),t=t.sibling}function kd(t){switch(t.tag){case 26:en(t),t.flags&eu&&t.memoizedState!==null&&Dv(Ze,t.memoizedState,t.memoizedProps);break;case 5:en(t);break;case 3:case 4:var e=Ze;Ze=zi(t.stateNode.containerInfo),en(t),Ze=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=eu,eu=16777216,en(t),eu=e):en(t));break;default:en(t)}}function Ld(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function lu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ae=a,qd(a,t)}Ld(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Qd(t),t=t.sibling}function Qd(t){switch(t.tag){case 0:case 11:case 15:lu(t),t.flags&2048&&Nl(9,t,t.return);break;case 3:lu(t);break;case 12:lu(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,hi(t)):lu(t);break;default:lu(t)}}function hi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];ae=a,qd(a,t)}Ld(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Nl(8,e,e.return),hi(e);break;case 22:l=e.stateNode,l._visibility&4&&(l._visibility&=-5,hi(e));break;default:hi(e)}t=t.sibling}}function qd(t,e){for(;ae!==null;){var l=ae;switch(l.tag){case 0:case 11:case 15:Nl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Gn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,ae=a;else t:for(l=t;ae!==null;){a=ae;var u=a.sibling,i=a.return;if(Cd(a),a===l){ae=null;break t}if(u!==null){u.return=i,ae=u;break t}ae=i}}}function km(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(t,e,l,a){return new km(t,e,l,a)}function Rr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ql(t,e){var l=t.alternate;return l===null?(l=Qe(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&31457280,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Yd(t,e){t.flags&=31457282;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function pi(t,e,l,a,u,i){var o=0;if(a=t,typeof t=="function")Rr(t)&&(o=1);else if(typeof t=="string")o=Ev(t,l,dt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case A:return ya(l.children,u,i,e);case m:o=8,u|=24;break;case M:return t=Qe(12,l,e,u|2),t.elementType=M,t.lanes=i,t;case P:return t=Qe(13,l,e,u),t.elementType=P,t.lanes=i,t;case q:return t=Qe(19,l,e,u),t.elementType=q,t.lanes=i,t;case j:return Gd(l,u,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:case G:o=10;break t;case B:o=9;break t;case Z:o=11;break t;case Q:o=14;break t;case k:o=16,a=null;break t}o=29,l=Error(r(130,t===null?"null":typeof t,"")),a=null}return e=Qe(o,l,e,u),e.elementType=t,e.type=a,e.lanes=i,e}function ya(t,e,l,a){return t=Qe(7,t,a,e),t.lanes=l,t}function Gd(t,e,l,a){t=Qe(22,t,a,e),t.elementType=j,t.lanes=l;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var i=u._current;if(i===null)throw Error(r(456));if((u._pendingVisibility&2)===0){var o=Ol(i,2);o!==null&&(u._pendingVisibility|=2,me(o,i,2))}},attach:function(){var i=u._current;if(i===null)throw Error(r(456));if((u._pendingVisibility&2)!==0){var o=Ol(i,2);o!==null&&(u._pendingVisibility&=-3,me(o,i,2))}}};return t.stateNode=u,t}function Mr(t,e,l){return t=Qe(6,t,null,e),t.lanes=l,t}function _r(t,e,l){return e=Qe(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gl(t){t.flags|=4}function jd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!O0(e)){if(e=Ne.current,e!==null&&((Et&4194176)===Et?Pe!==null:(Et&62914560)!==Et&&(Et&536870912)===0||e!==Pe))throw Qn=Uc,cs;t.flags|=8192}}function mi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?rf():536870912,t.lanes|=e,an|=e)}function au(t,e){if(!wt)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags&31457280,a|=u.flags&31457280,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Lm(t,e,l){var a=e.pendingProps;switch(Bc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Qt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),pl(te),It(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Un(e)?gl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ve!==null&&(Lr(Ve),Ve=null))),Qt(e),null;case 26:return l=e.memoizedState,t===null?(gl(e),l!==null?(Qt(e),jd(e,l)):(Qt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(gl(e),Qt(e),jd(e,l)):(Qt(e),e.flags&=-16777217):(t.memoizedProps!==a&&gl(e),Qt(e),e.flags&=-16777217),null;case 27:Re(e),l=Dt.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&gl(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Qt(e),null}t=dt.current,Un(e)?us(e):(t=A0(u,a,l),e.stateNode=t,gl(e))}return Qt(e),null;case 5:if(Re(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&gl(e);else{if(!a){if(e.stateNode===null)throw Error(r(166));return Qt(e),null}if(t=dt.current,Un(e))us(e);else{switch(u=wi(Dt.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?u.createElement(l,{is:a.is}):u.createElement(l)}}t[se]=e,t[be]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(oe(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&gl(e)}}return Qt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&gl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(r(166));if(t=Dt.current,Un(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,u=pe,u!==null)switch(u.tag){case 27:case 5:a=u.memoizedProps}t[se]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||p0(t.nodeValue,l)),t||oa(e)}else t=wi(t).createTextNode(a),t[se]=e,e.stateNode=t}return Qt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Un(e),a!==null&&a.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[se]=e}else Nn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qt(e),u=!1}else Ve!==null&&(Lr(Ve),Ve=null),u=!0;if(!u)return e.flags&256?(fl(e),e):(fl(e),null)}if(fl(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,u=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(u=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==u&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),mi(e,e.updateQueue),Qt(e),null;case 4:return It(),t===null&&Wr(e.stateNode.containerInfo),Qt(e),null;case 10:return pl(e.type),Qt(e),null;case 19:if(C(Pt),u=e.memoizedState,u===null)return Qt(e),null;if(a=(e.flags&128)!==0,i=u.rendering,i===null)if(a)au(u,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Iu(t),i!==null){for(e.flags|=128,au(u,!1),t=i.updateQueue,e.updateQueue=t,mi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Yd(l,t),l=l.sibling;return et(Pt,Pt.current&1|2),e.child}t=t.sibling}u.tail!==null&&je()>vi&&(e.flags|=128,a=!0,au(u,!1),e.lanes=4194304)}else{if(!a)if(t=Iu(i),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,mi(e,t),au(u,!0),u.tail===null&&u.tailMode==="hidden"&&!i.alternate&&!wt)return Qt(e),null}else 2*je()-u.renderingStartTime>vi&&l!==536870912&&(e.flags|=128,a=!0,au(u,!1),e.lanes=4194304);u.isBackwards?(i.sibling=e.child,e.child=i):(t=u.last,t!==null?t.sibling=i:e.child=i,u.last=i)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=je(),e.sibling=null,t=Pt.current,et(Pt,a?t&1|2:t&1),e):(Qt(e),null);case 22:case 23:return fl(e),kc(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),l=e.updateQueue,l!==null&&mi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&C(sa),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),pl(te),Qt(e),null;case 25:return null}throw Error(r(156,e.tag))}function Qm(t,e){switch(Bc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pl(te),It(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Re(e),null;case 13:if(fl(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(r(340));Nn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return C(Pt),null;case 4:return It(),null;case 10:return pl(e.type),null;case 22:case 23:return fl(e),kc(),t!==null&&C(sa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return pl(te),null;case 25:return null;default:return null}}function Xd(t,e){switch(Bc(e),e.tag){case 3:pl(te),It();break;case 26:case 27:case 5:Re(e);break;case 4:It();break;case 13:fl(e);break;case 19:C(Pt);break;case 10:pl(e.type);break;case 22:case 23:fl(e),kc(),t!==null&&C(sa);break;case 24:pl(te)}}var qm={getCacheForType:function(t){var e=de(te),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},Ym=typeof WeakMap=="function"?WeakMap:Map,qt=0,Ut=null,At=null,Et=0,Nt=0,we=null,yl=!1,ln=!1,Cr=!1,Al=0,jt=0,ql=0,Aa=0,$r=0,qe=0,an=0,nu=null,el=null,Br=!1,Hr=0,vi=1/0,bi=null,Yl=null,gi=!1,Sa=null,uu=0,Ur=0,Nr=null,iu=0,kr=null;function ze(){if((qt&2)!==0&&Et!==0)return Et&-Et;if(F.T!==null){var t=Ka;return t!==0?t:Vr()}return df()}function Vd(){qe===0&&(qe=(Et&536870912)===0||wt?cf():536870912);var t=Ne.current;return t!==null&&(t.flags|=32),qe}function me(t,e,l){(t===Ut&&Nt===2||t.cancelPendingCommit!==null)&&(nn(t,0),Sl(t,Et,qe,!1)),Tn(t,l),((qt&2)===0||t!==Ut)&&(t===Ut&&((qt&2)===0&&(Aa|=l),jt===4&&Sl(t,Et,qe,!1)),ll(t))}function Zd(t,e,l){if((qt&6)!==0)throw Error(r(327));var a=!l&&(e&60)===0&&(e&t.expiredLanes)===0||En(t,e),u=a?Xm(t,e):Yr(t,e,!0),i=a;do{if(u===0){ln&&!a&&Sl(t,e,0,!1);break}else if(u===6)Sl(t,e,0,!yl);else{if(l=t.current.alternate,i&&!Gm(l)){u=Yr(t,e,!1),i=!1;continue}if(u===2){if(i=e,t.errorRecoveryDisabledLanes&i)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var s=t;u=nu;var h=s.current.memoizedState.isDehydrated;if(h&&(nn(s,o).flags|=256),o=Yr(s,o,!1),o!==2){if(Cr&&!h){s.errorRecoveryDisabledLanes|=i,Aa|=i,u=4;break t}i=el,el=u,i!==null&&Lr(i)}u=o}if(i=!1,u!==2)continue}}if(u===1){nn(t,0),Sl(t,e,0,!0);break}t:{switch(a=t,u){case 0:case 1:throw Error(r(345));case 4:if((e&4194176)===e){Sl(a,e,qe,!yl);break t}break;case 2:el=null;break;case 3:case 5:break;default:throw Error(r(329))}if(a.finishedWork=l,a.finishedLanes=e,(e&62914560)===e&&(i=Hr+300-je(),10<i)){if(Sl(a,e,qe,!yl),_u(a,0)!==0)break t;a.timeoutHandle=b0(Kd.bind(null,a,l,el,bi,Br,e,qe,Aa,an,yl,2,-0,0),i);break t}Kd(a,l,el,bi,Br,e,qe,Aa,an,yl,0,-0,0)}}break}while(!0);ll(t)}function Lr(t){el===null?el=t:el.push.apply(el,t)}function Kd(t,e,l,a,u,i,o,s,h,y,R,U,E){var O=e.subtreeFlags;if((O&8192||(O&16785408)===16785408)&&(du={stylesheets:null,count:0,unsuspend:Tv},kd(e),e=wv(),e!==null)){t.cancelPendingCommit=e(e0.bind(null,t,l,a,u,o,s,h,1,U,E)),Sl(t,i,o,!y);return}e0(t,l,a,u,o,s,h,R,U,E)}function Gm(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var u=l[a],i=u.getSnapshot;u=u.value;try{if(!Ee(i(),u))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sl(t,e,l,a){e&=~$r,e&=~Aa,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var u=e;0<u;){var i=31-xe(u),o=1<<i;a[i]=-1,u&=~o}l!==0&&of(t,l,e)}function yi(){return(qt&6)===0?(cu(0),!1):!0}function Qr(){if(At!==null){if(Nt===0)var t=At.return;else t=At,hl=va=null,Vc(t),Va=null,qn=0,t=At;for(;t!==null;)Xd(t.alternate,t),t=t.return;At=null}}function nn(t,e){t.finishedWork=null,t.finishedLanes=0;var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,rv(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Qr(),Ut=t,At=l=Ql(t.current,null),Et=e,Nt=0,we=null,yl=!1,ln=En(t,e),Cr=!1,an=qe=$r=Aa=ql=jt=0,el=nu=null,Br=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var u=31-xe(a),i=1<<u;e|=t[u],a&=~i}return Al=e,Gu(),l}function Jd(t,e){bt=null,F.H=tl,e===Ln?(e=fs(),Nt=3):e===cs?(e=fs(),Nt=4):Nt=e===rd?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,we=e,At===null&&(jt=1,oi(t,Be(e,t.current)))}function Wd(){var t=F.H;return F.H=tl,t===null?tl:t}function Fd(){var t=F.A;return F.A=qm,t}function qr(){jt=4,yl||(Et&4194176)!==Et&&Ne.current!==null||(ln=!0),(ql&134217727)===0&&(Aa&134217727)===0||Ut===null||Sl(Ut,Et,qe,!1)}function Yr(t,e,l){var a=qt;qt|=2;var u=Wd(),i=Fd();(Ut!==t||Et!==e)&&(bi=null,nn(t,e)),e=!1;var o=jt;t:do try{if(Nt!==0&&At!==null){var s=At,h=we;switch(Nt){case 8:Qr(),o=6;break t;case 3:case 2:case 6:Ne.current===null&&(e=!0);var y=Nt;if(Nt=0,we=null,un(t,s,h,y),l&&ln){o=0;break t}break;default:y=Nt,Nt=0,we=null,un(t,s,h,y)}}jm(),o=jt;break}catch(R){Jd(t,R)}while(!0);return e&&t.shellSuspendCounter++,hl=va=null,qt=a,F.H=u,F.A=i,At===null&&(Ut=null,Et=0,Gu()),o}function jm(){for(;At!==null;)Id(At)}function Xm(t,e){var l=qt;qt|=2;var a=Wd(),u=Fd();Ut!==t||Et!==e?(bi=null,vi=je()+500,nn(t,e)):ln=En(t,e);t:do try{if(Nt!==0&&At!==null){e=At;var i=we;e:switch(Nt){case 1:Nt=0,we=null,un(t,e,i,1);break;case 2:if(rs(i)){Nt=0,we=null,Pd(e);break}e=function(){Nt===2&&Ut===t&&(Nt=7),ll(t)},i.then(e,e);break t;case 3:Nt=7;break t;case 4:Nt=5;break t;case 7:rs(i)?(Nt=0,we=null,Pd(e)):(Nt=0,we=null,un(t,e,i,7));break;case 5:var o=null;switch(At.tag){case 26:o=At.memoizedState;case 5:case 27:var s=At;if(!o||O0(o)){Nt=0,we=null;var h=s.sibling;if(h!==null)At=h;else{var y=s.return;y!==null?(At=y,Ai(y)):At=null}break e}}Nt=0,we=null,un(t,e,i,5);break;case 6:Nt=0,we=null,un(t,e,i,6);break;case 8:Qr(),jt=6;break t;default:throw Error(r(462))}}Vm();break}catch(R){Jd(t,R)}while(!0);return hl=va=null,F.H=a,F.A=u,qt=l,At!==null?0:(Ut=null,Et=0,Gu(),jt)}function Vm(){for(;At!==null&&!ta();)Id(At)}function Id(t){var e=Ad(t.alternate,t,Al);t.memoizedProps=t.pendingProps,e===null?Ai(t):At=e}function Pd(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=pd(l,e,e.pendingProps,e.type,void 0,Et);break;case 11:e=pd(l,e,e.pendingProps,e.type.render,e.ref,Et);break;case 5:Vc(e);default:Xd(l,e),e=At=Yd(e,Al),e=Ad(l,e,Al)}t.memoizedProps=t.pendingProps,e===null?Ai(t):At=e}function un(t,e,l,a){hl=va=null,Vc(e),Va=null,qn=0;var u=e.return;try{if(Bm(t,u,e,l,Et)){jt=1,oi(t,Be(l,t.current)),At=null;return}}catch(i){if(u!==null)throw At=u,i;jt=1,oi(t,Be(l,t.current)),At=null;return}e.flags&32768?(wt||a===1?t=!0:ln||(Et&536870912)!==0?t=!1:(yl=t=!0,(a===2||a===3||a===6)&&(a=Ne.current,a!==null&&a.tag===13&&(a.flags|=16384))),t0(e,t)):Ai(e)}function Ai(t){var e=t;do{if((e.flags&32768)!==0){t0(e,yl);return}t=e.return;var l=Lm(e.alternate,e,Al);if(l!==null){At=l;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);jt===0&&(jt=5)}function t0(t,e){do{var l=Qm(t.alternate,t);if(l!==null){l.flags&=32767,At=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){At=t;return}At=t=l}while(t!==null);jt=6,At=null}function e0(t,e,l,a,u,i,o,s,h,y){var R=F.T,U=H.p;try{H.p=2,F.T=null,Zm(t,e,l,a,U,u,i,o,s,h,y)}finally{F.T=R,H.p=U}}function Zm(t,e,l,a,u,i,o,s){do cn();while(Sa!==null);if((qt&6)!==0)throw Error(r(327));var h=t.finishedWork;if(a=t.finishedLanes,h===null)return null;if(t.finishedWork=null,t.finishedLanes=0,h===t.current)throw Error(r(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var y=h.lanes|h.childLanes;if(y|=_c,Dp(t,a,y,i,o,s),t===Ut&&(At=Ut=null,Et=0),(h.subtreeFlags&10256)===0&&(h.flags&10256)===0||gi||(gi=!0,Ur=y,Nr=l,Fm(Ou,function(){return cn(),null})),l=(h.flags&15990)!==0,(h.subtreeFlags&15990)!==0||l?(l=F.T,F.T=null,i=H.p,H.p=2,o=qt,qt|=4,Um(t,h),Hd(h,t),bm(to,t.containerInfo),Ci=!!Pr,to=Pr=null,t.current=h,_d(t,h.alternate,h),zu(),qt=o,H.p=i,F.T=l):t.current=h,gi?(gi=!1,Sa=t,uu=a):l0(t,y),y=t.pendingLanes,y===0&&(Yl=null),Ap(h.stateNode),ll(t),e!==null)for(u=t.onRecoverableError,h=0;h<e.length;h++)y=e[h],u(y.value,{componentStack:y.stack});return(uu&3)!==0&&cn(),y=t.pendingLanes,(a&4194218)!==0&&(y&42)!==0?t===kr?iu++:(iu=0,kr=t):iu=0,cu(0),null}function l0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Gn(e)))}function cn(){if(Sa!==null){var t=Sa,e=Ur;Ur=0;var l=sf(uu),a=F.T,u=H.p;try{if(H.p=32>l?32:l,F.T=null,Sa===null)var i=!1;else{l=Nr,Nr=null;var o=Sa,s=uu;if(Sa=null,uu=0,(qt&6)!==0)throw Error(r(331));var h=qt;if(qt|=4,Qd(o.current),Nd(o,o.current,s,l),qt=h,cu(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(xn,o)}catch{}i=!0}return i}finally{H.p=u,F.T=a,l0(t,e)}}return!1}function a0(t,e,l){e=Be(l,e),e=ir(t.stateNode,e,2),t=Ul(t,e,2),t!==null&&(Tn(t,2),ll(t))}function Ht(t,e,l){if(t.tag===3)a0(t,t,l);else for(;e!==null;){if(e.tag===3){a0(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Yl===null||!Yl.has(a))){t=Be(l,t),l=id(2),a=Ul(e,l,2),a!==null&&(cd(l,a,e,t),Tn(a,2),ll(a));break}}e=e.return}}function Gr(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Ym;var u=new Set;a.set(e,u)}else u=a.get(e),u===void 0&&(u=new Set,a.set(e,u));u.has(l)||(Cr=!0,u.add(l),t=Km.bind(null,t,e,l),e.then(t,t))}function Km(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,Ut===t&&(Et&l)===l&&(jt===4||jt===3&&(Et&62914560)===Et&&300>je()-Hr?(qt&2)===0&&nn(t,0):$r|=l,an===Et&&(an=0)),ll(t)}function n0(t,e){e===0&&(e=rf()),t=Ol(t,e),t!==null&&(Tn(t,e),ll(t))}function Jm(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),n0(t,l)}function Wm(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(r(314))}a!==null&&a.delete(e),n0(t,l)}function Fm(t,e){return Il(t,e)}var Si=null,rn=null,jr=!1,xi=!1,Xr=!1,xa=0;function ll(t){t!==rn&&t.next===null&&(rn===null?Si=rn=t:rn=rn.next=t),xi=!0,jr||(jr=!0,Pm(Im))}function cu(t,e){if(!Xr&&xi){Xr=!0;do for(var l=!1,a=Si;a!==null;){if(t!==0){var u=a.pendingLanes;if(u===0)var i=0;else{var o=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-xe(42|t)+1)-1,i&=u&~(o&~s),i=i&201326677?i&201326677|1:i?i|2:0}i!==0&&(l=!0,c0(a,i))}else i=Et,i=_u(a,a===Ut?i:0),(i&3)===0||En(a,i)||(l=!0,c0(a,i));a=a.next}while(l);Xr=!1}}function Im(){xi=jr=!1;var t=0;xa!==0&&(cv()&&(t=xa),xa=0);for(var e=je(),l=null,a=Si;a!==null;){var u=a.next,i=u0(a,e);i===0?(a.next=null,l===null?Si=u:l.next=u,u===null&&(rn=l)):(l=a,(t!==0||(i&3)!==0)&&(xi=!0)),a=u}cu(t)}function u0(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var o=31-xe(i),s=1<<o,h=u[o];h===-1?((s&l)===0||(s&a)!==0)&&(u[o]=Tp(s,e)):h<=e&&(t.expiredLanes|=s),i&=~s}if(e=Ut,l=Et,l=_u(t,t===e?l:0),a=t.callbackNode,l===0||t===e&&Nt===2||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Pl(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||En(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Pl(a),sf(l)){case 2:case 8:l=nf;break;case 32:l=Ou;break;case 268435456:l=uf;break;default:l=Ou}return a=i0.bind(null,t),l=Il(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Pl(a),t.callbackPriority=2,t.callbackNode=null,2}function i0(t,e){var l=t.callbackNode;if(cn()&&t.callbackNode!==l)return null;var a=Et;return a=_u(t,t===Ut?a:0),a===0?null:(Zd(t,a,e),u0(t,je()),t.callbackNode!=null&&t.callbackNode===l?i0.bind(null,t):null)}function c0(t,e){if(cn())return null;Zd(t,e,!0)}function Pm(t){ov(function(){(qt&6)!==0?Il(af,t):t()})}function Vr(){return xa===0&&(xa=cf()),xa}function r0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Uu(""+t)}function o0(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function tv(t,e,l,a,u){if(e==="submit"&&l&&l.stateNode===u){var i=r0((u[be]||null).action),o=a.submitter;o&&(e=(e=o[be]||null)?r0(e.formAction):o.getAttribute("formAction"),e!==null&&(i=e,o=null));var s=new Qu("action","action",null,a,u);t.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(xa!==0){var h=o?o0(u,o):new FormData(u);er(l,{pending:!0,data:h,method:u.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=o?o0(u,o):new FormData(u),er(l,{pending:!0,data:h,method:u.method,action:i},i,h))},currentTarget:u}]})}}for(var Zr=0;Zr<es.length;Zr++){var Kr=es[Zr],ev=Kr.toLowerCase(),lv=Kr[0].toUpperCase()+Kr.slice(1);Xe(ev,"on"+lv)}Xe(Wf,"onAnimationEnd"),Xe(Ff,"onAnimationIteration"),Xe(If,"onAnimationStart"),Xe("dblclick","onDoubleClick"),Xe("focusin","onFocus"),Xe("focusout","onBlur"),Xe(ym,"onTransitionRun"),Xe(Am,"onTransitionStart"),Xe(Sm,"onTransitionCancel"),Xe(Pf,"onTransitionEnd"),Ba("onMouseEnter",["mouseout","mouseover"]),Ba("onMouseLeave",["mouseout","mouseover"]),Ba("onPointerEnter",["pointerout","pointerover"]),Ba("onPointerLeave",["pointerout","pointerover"]),aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),av=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ru));function f0(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],u=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var o=a.length-1;0<=o;o--){var s=a[o],h=s.instance,y=s.currentTarget;if(s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=y;try{i(u)}catch(R){ri(R)}u.currentTarget=null,i=h}else for(o=0;o<a.length;o++){if(s=a[o],h=s.instance,y=s.currentTarget,s=s.listener,h!==i&&u.isPropagationStopped())break t;i=s,u.currentTarget=y;try{i(u)}catch(R){ri(R)}u.currentTarget=null,i=h}}}}function xt(t,e){var l=e[fc];l===void 0&&(l=e[fc]=new Set);var a=t+"__bubble";l.has(a)||(s0(e,t,2,!1),l.add(a))}function Jr(t,e,l){var a=0;e&&(a|=4),s0(l,t,a,e)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function Wr(t){if(!t[Ei]){t[Ei]=!0,pf.forEach(function(l){l!=="selectionchange"&&(av.has(l)||Jr(l,!1,t),Jr(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ei]||(e[Ei]=!0,Jr("selectionchange",!1,e))}}function s0(t,e,l,a){switch(B0(e)){case 2:var u=Rv;break;case 8:u=Mv;break;default:u=oo}l=u.bind(null,e,l,t),u=void 0,!gc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(e,l,{capture:!0,passive:u}):t.addEventListener(e,l,!0):u!==void 0?t.addEventListener(e,l,{passive:u}):t.addEventListener(e,l,!1)}function Fr(t,e,l,a,u){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var s=a.stateNode.containerInfo;if(s===u||s.nodeType===8&&s.parentNode===u)break;if(o===4)for(o=a.return;o!==null;){var h=o.tag;if((h===3||h===4)&&(h=o.stateNode.containerInfo,h===u||h.nodeType===8&&h.parentNode===u))return;o=o.return}for(;s!==null;){if(o=la(s),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){a=i=o;continue t}s=s.parentNode}}a=a.return}wf(function(){var y=i,R=vc(l),U=[];t:{var E=ts.get(t);if(E!==void 0){var O=Qu,ut=t;switch(t){case"keypress":if(ku(l)===0)break t;case"keydown":case"keyup":O=Wp;break;case"focusin":ut="focus",O=xc;break;case"focusout":ut="blur",O=xc;break;case"beforeblur":case"afterblur":O=xc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=kp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Pp;break;case Wf:case Ff:case If:O=qp;break;case Pf:O=em;break;case"scroll":case"scrollend":O=Up;break;case"wheel":O=am;break;case"copy":case"cut":case"paste":O=Gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=_f;break;case"toggle":case"beforetoggle":O=um}var pt=(e&4)!==0,Xt=!pt&&(t==="scroll"||t==="scrollend"),S=pt?E!==null?E+"Capture":null:E;pt=[];for(var b=y,x;b!==null;){var _=b;if(x=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||x===null||S===null||(_=zn(b,S),_!=null&&pt.push(ou(b,_,x))),Xt)break;b=b.return}0<pt.length&&(E=new O(E,ut,null,l,R),U.push({event:E,listeners:pt}))}}if((e&7)===0){t:{if(E=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",E&&l!==mc&&(ut=l.relatedTarget||l.fromElement)&&(la(ut)||ut[_a]))break t;if((O||E)&&(E=R.window===R?R:(E=R.ownerDocument)?E.defaultView||E.parentWindow:window,O?(ut=l.relatedTarget||l.toElement,O=y,ut=ut?la(ut):null,ut!==null&&(Xt=V(ut),pt=ut.tag,ut!==Xt||pt!==5&&pt!==27&&pt!==6)&&(ut=null)):(O=null,ut=y),O!==ut)){if(pt=Rf,_="onMouseLeave",S="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(pt=_f,_="onPointerLeave",S="onPointerEnter",b="pointer"),Xt=O==null?E:wn(O),x=ut==null?E:wn(ut),E=new pt(_,b+"leave",O,l,R),E.target=Xt,E.relatedTarget=x,_=null,la(R)===y&&(pt=new pt(S,b+"enter",ut,l,R),pt.target=x,pt.relatedTarget=Xt,_=pt),Xt=_,O&&ut)e:{for(pt=O,S=ut,b=0,x=pt;x;x=on(x))b++;for(x=0,_=S;_;_=on(_))x++;for(;0<b-x;)pt=on(pt),b--;for(;0<x-b;)S=on(S),x--;for(;b--;){if(pt===S||S!==null&&pt===S.alternate)break e;pt=on(pt),S=on(S)}pt=null}else pt=null;O!==null&&d0(U,E,O,pt,!1),ut!==null&&Xt!==null&&d0(U,Xt,ut,pt,!0)}}t:{if(E=y?wn(y):window,O=E.nodeName&&E.nodeName.toLowerCase(),O==="select"||O==="input"&&E.type==="file")var at=Lf;else if(Nf(E))if(Qf)at=mm;else{at=hm;var yt=dm}else O=E.nodeName,!O||O.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?y&&pc(y.elementType)&&(at=Lf):at=pm;if(at&&(at=at(t,y))){kf(U,at,l,R);break t}yt&&yt(t,E,y),t==="focusout"&&y&&E.type==="number"&&y.memoizedProps.value!=null&&hc(E,"number",E.value)}switch(yt=y?wn(y):window,t){case"focusin":(Nf(yt)||yt.contentEditable==="true")&&(Qa=yt,Oc=y,Hn=null);break;case"focusout":Hn=Oc=Qa=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,Kf(U,l,R);break;case"selectionchange":if(gm)break;case"keydown":case"keyup":Kf(U,l,R)}var ct;if(Tc)t:{switch(t){case"compositionstart":var ft="onCompositionStart";break t;case"compositionend":ft="onCompositionEnd";break t;case"compositionupdate":ft="onCompositionUpdate";break t}ft=void 0}else La?Hf(t,l)&&(ft="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(ft="onCompositionStart");ft&&(Cf&&l.locale!=="ko"&&(La||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&La&&(ct=zf()):(zl=R,yc="value"in zl?zl.value:zl.textContent,La=!0)),yt=Ti(y,ft),0<yt.length&&(ft=new Mf(ft,t,null,l,R),U.push({event:ft,listeners:yt}),ct?ft.data=ct:(ct=Uf(l),ct!==null&&(ft.data=ct)))),(ct=cm?rm(t,l):om(t,l))&&(ft=Ti(y,"onBeforeInput"),0<ft.length&&(yt=new Mf("onBeforeInput","beforeinput",null,l,R),U.push({event:yt,listeners:ft}),yt.data=ct)),tv(U,t,y,l,R)}f0(U,e)})}function ou(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Ti(t,e){for(var l=e+"Capture",a=[];t!==null;){var u=t,i=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||i===null||(u=zn(t,l),u!=null&&a.unshift(ou(t,u,i)),u=zn(t,e),u!=null&&a.push(ou(t,u,i))),t=t.return}return a}function on(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function d0(t,e,l,a,u){for(var i=e._reactName,o=[];l!==null&&l!==a;){var s=l,h=s.alternate,y=s.stateNode;if(s=s.tag,h!==null&&h===a)break;s!==5&&s!==26&&s!==27||y===null||(h=y,u?(y=zn(l,i),y!=null&&o.unshift(ou(l,y,h))):u||(y=zn(l,i),y!=null&&o.push(ou(l,y,h)))),l=l.return}o.length!==0&&t.push({event:e,listeners:o})}var nv=/\r\n?/g,uv=/\u0000|\uFFFD/g;function h0(t){return(typeof t=="string"?t:""+t).replace(nv,`
`).replace(uv,"")}function p0(t,e){return e=h0(e),h0(t)===e}function Di(){}function $t(t,e,l,a,u,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Ua(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Ua(t,""+a);break;case"className":$u(t,"class",a);break;case"tabIndex":$u(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":$u(t,l,a);break;case"style":Tf(t,a,i);break;case"data":if(e!=="object"){$u(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Uu(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&$t(t,e,"name",u.name,u,null),$t(t,e,"formEncType",u.formEncType,u,null),$t(t,e,"formMethod",u.formMethod,u,null),$t(t,e,"formTarget",u.formTarget,u,null)):($t(t,e,"encType",u.encType,u,null),$t(t,e,"method",u.method,u,null),$t(t,e,"target",u.target,u,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Uu(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Di);break;case"onScroll":a!=null&&xt("scroll",t);break;case"onScrollEnd":a!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Uu(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Cu(t,"popover",a);break;case"xlinkActuate":cl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":cl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":cl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":cl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":cl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":cl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":cl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":cl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":cl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Cu(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Bp.get(l)||l,Cu(t,l,a))}}function Ir(t,e,l,a,u,i){switch(l){case"style":Tf(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(r(61));if(l=a.__html,l!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Ua(t,a):(typeof a=="number"||typeof a=="bigint")&&Ua(t,""+a);break;case"onScroll":a!=null&&xt("scroll",t);break;case"onScrollEnd":a!=null&&xt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Di);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mf.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),e=l.slice(2,u?l.length-7:void 0),i=t[be]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,u),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,u);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Cu(t,l,a)}}}function oe(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var a=!1,u=!1,i;for(i in l)if(l.hasOwnProperty(i)){var o=l[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:$t(t,e,i,o,l,null)}}u&&$t(t,e,"srcSet",l.srcSet,l,null),a&&$t(t,e,"src",l.src,l,null);return;case"input":xt("invalid",t);var s=i=o=u=null,h=null,y=null;for(a in l)if(l.hasOwnProperty(a)){var R=l[a];if(R!=null)switch(a){case"name":u=R;break;case"type":o=R;break;case"checked":h=R;break;case"defaultChecked":y=R;break;case"value":i=R;break;case"defaultValue":s=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(137,e));break;default:$t(t,e,a,R,l,null)}}Af(t,i,s,h,y,o,u,!1),Bu(t);return;case"select":xt("invalid",t),a=o=i=null;for(u in l)if(l.hasOwnProperty(u)&&(s=l[u],s!=null))switch(u){case"value":i=s;break;case"defaultValue":o=s;break;case"multiple":a=s;default:$t(t,e,u,s,l,null)}e=i,l=o,t.multiple=!!a,e!=null?Ha(t,!!a,e,!1):l!=null&&Ha(t,!!a,l,!0);return;case"textarea":xt("invalid",t),i=u=a=null;for(o in l)if(l.hasOwnProperty(o)&&(s=l[o],s!=null))switch(o){case"value":a=s;break;case"defaultValue":u=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(r(91));break;default:$t(t,e,o,s,l,null)}xf(t,a,u,i),Bu(t);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:$t(t,e,h,a,l,null)}return;case"dialog":xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(a=0;a<ru.length;a++)xt(ru[a],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in l)if(l.hasOwnProperty(y)&&(a=l[y],a!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,e));default:$t(t,e,y,a,l,null)}return;default:if(pc(e)){for(R in l)l.hasOwnProperty(R)&&(a=l[R],a!==void 0&&Ir(t,e,R,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&$t(t,e,s,a,l,null))}function iv(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,i=null,o=null,s=null,h=null,y=null,R=null;for(O in l){var U=l[O];if(l.hasOwnProperty(O)&&U!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":h=U;default:a.hasOwnProperty(O)||$t(t,e,O,null,a,U)}}for(var E in a){var O=a[E];if(U=l[E],a.hasOwnProperty(E)&&(O!=null||U!=null))switch(E){case"type":i=O;break;case"name":u=O;break;case"checked":y=O;break;case"defaultChecked":R=O;break;case"value":o=O;break;case"defaultValue":s=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(r(137,e));break;default:O!==U&&$t(t,e,E,O,a,U)}}dc(t,o,s,h,y,R,i,u);return;case"select":O=o=s=E=null;for(i in l)if(h=l[i],l.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":O=h;default:a.hasOwnProperty(i)||$t(t,e,i,null,a,h)}for(u in a)if(i=a[u],h=l[u],a.hasOwnProperty(u)&&(i!=null||h!=null))switch(u){case"value":E=i;break;case"defaultValue":s=i;break;case"multiple":o=i;default:i!==h&&$t(t,e,u,i,a,h)}e=s,l=o,a=O,E!=null?Ha(t,!!l,E,!1):!!a!=!!l&&(e!=null?Ha(t,!!l,e,!0):Ha(t,!!l,l?[]:"",!1));return;case"textarea":O=E=null;for(s in l)if(u=l[s],l.hasOwnProperty(s)&&u!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:$t(t,e,s,null,a,u)}for(o in a)if(u=a[o],i=l[o],a.hasOwnProperty(o)&&(u!=null||i!=null))switch(o){case"value":E=u;break;case"defaultValue":O=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==i&&$t(t,e,o,u,a,i)}Sf(t,E,O);return;case"option":for(var ut in l)if(E=l[ut],l.hasOwnProperty(ut)&&E!=null&&!a.hasOwnProperty(ut))switch(ut){case"selected":t.selected=!1;break;default:$t(t,e,ut,null,a,E)}for(h in a)if(E=a[h],O=l[h],a.hasOwnProperty(h)&&E!==O&&(E!=null||O!=null))switch(h){case"selected":t.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:$t(t,e,h,E,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pt in l)E=l[pt],l.hasOwnProperty(pt)&&E!=null&&!a.hasOwnProperty(pt)&&$t(t,e,pt,null,a,E);for(y in a)if(E=a[y],O=l[y],a.hasOwnProperty(y)&&E!==O&&(E!=null||O!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(137,e));break;default:$t(t,e,y,E,a,O)}return;default:if(pc(e)){for(var Xt in l)E=l[Xt],l.hasOwnProperty(Xt)&&E!==void 0&&!a.hasOwnProperty(Xt)&&Ir(t,e,Xt,void 0,a,E);for(R in a)E=a[R],O=l[R],!a.hasOwnProperty(R)||E===O||E===void 0&&O===void 0||Ir(t,e,R,E,a,O);return}}for(var S in l)E=l[S],l.hasOwnProperty(S)&&E!=null&&!a.hasOwnProperty(S)&&$t(t,e,S,null,a,E);for(U in a)E=a[U],O=l[U],!a.hasOwnProperty(U)||E===O||E==null&&O==null||$t(t,e,U,E,a,O)}var Pr=null,to=null;function wi(t){return t.nodeType===9?t:t.ownerDocument}function m0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function v0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function eo(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var lo=null;function cv(){var t=window.event;return t&&t.type==="popstate"?t===lo?!1:(lo=t,!0):(lo=null,!1)}var b0=typeof setTimeout=="function"?setTimeout:void 0,rv=typeof clearTimeout=="function"?clearTimeout:void 0,g0=typeof Promise=="function"?Promise:void 0,ov=typeof queueMicrotask=="function"?queueMicrotask:typeof g0<"u"?function(t){return g0.resolve(null).then(t).catch(fv)}:b0;function fv(t){setTimeout(function(){throw t})}function ao(t,e){var l=e,a=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"){if(a===0){t.removeChild(u),bu(e);return}a--}else l!=="$"&&l!=="$?"&&l!=="$!"||a++;l=u}while(l);bu(e)}function no(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":no(l),sc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function sv(t,e,l,a){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Dn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==u.rel||t.getAttribute("href")!==(u.href==null?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ke(t.nextSibling),t===null)break}return null}function dv(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ke(t.nextSibling),t===null))return null;return t}function Ke(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function y0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function A0(t,e,l){switch(e=wi(l),t){case"html":if(t=e.documentElement,!t)throw Error(r(452));return t;case"head":if(t=e.head,!t)throw Error(r(453));return t;case"body":if(t=e.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}var Ye=new Map,S0=new Set;function zi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var xl=H.d;H.d={f:hv,r:pv,D:mv,C:vv,L:bv,m:gv,X:Av,S:yv,M:Sv};function hv(){var t=xl.f(),e=yi();return t||e}function pv(t){var e=Ca(t);e!==null&&e.tag===5&&e.type==="form"?Ks(e):xl.r(t)}var fn=typeof document>"u"?null:document;function x0(t,e,l){var a=fn;if(a&&typeof e=="string"&&e){var u=Ce(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),S0.has(u)||(S0.add(u),t={rel:t,crossOrigin:l,href:e},a.querySelector(u)===null&&(e=a.createElement("link"),oe(e,"link",t),ee(e),a.head.appendChild(e)))}}function mv(t){xl.D(t),x0("dns-prefetch",t,null)}function vv(t,e){xl.C(t,e),x0("preconnect",t,e)}function bv(t,e,l){xl.L(t,e,l);var a=fn;if(a&&t&&e){var u='link[rel="preload"][as="'+Ce(e)+'"]';e==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+Ce(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+Ce(l.imageSizes)+'"]')):u+='[href="'+Ce(t)+'"]';var i=u;switch(e){case"style":i=sn(t);break;case"script":i=dn(t)}Ye.has(i)||(t=ht({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Ye.set(i,t),a.querySelector(u)!==null||e==="style"&&a.querySelector(fu(i))||e==="script"&&a.querySelector(su(i))||(e=a.createElement("link"),oe(e,"link",t),ee(e),a.head.appendChild(e)))}}function gv(t,e){xl.m(t,e);var l=fn;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+Ce(a)+'"][href="'+Ce(t)+'"]',i=u;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=dn(t)}if(!Ye.has(i)&&(t=ht({rel:"modulepreload",href:t},e),Ye.set(i,t),l.querySelector(u)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(su(i)))return}a=l.createElement("link"),oe(a,"link",t),ee(a),l.head.appendChild(a)}}}function yv(t,e,l){xl.S(t,e,l);var a=fn;if(a&&t){var u=$a(a).hoistableStyles,i=sn(t);e=e||"default";var o=u.get(i);if(!o){var s={loading:0,preload:null};if(o=a.querySelector(fu(i)))s.loading=5;else{t=ht({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Ye.get(i))&&uo(t,l);var h=o=a.createElement("link");ee(h),oe(h,"link",t),h._p=new Promise(function(y,R){h.onload=y,h.onerror=R}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Oi(o,e,a)}o={type:"stylesheet",instance:o,count:1,state:s},u.set(i,o)}}}function Av(t,e){xl.X(t,e);var l=fn;if(l&&t){var a=$a(l).hoistableScripts,u=dn(t),i=a.get(u);i||(i=l.querySelector(su(u)),i||(t=ht({src:t,async:!0},e),(e=Ye.get(u))&&io(t,e),i=l.createElement("script"),ee(i),oe(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function Sv(t,e){xl.M(t,e);var l=fn;if(l&&t){var a=$a(l).hoistableScripts,u=dn(t),i=a.get(u);i||(i=l.querySelector(su(u)),i||(t=ht({src:t,async:!0,type:"module"},e),(e=Ye.get(u))&&io(t,e),i=l.createElement("script"),ee(i),oe(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(u,i))}}function E0(t,e,l,a){var u=(u=Dt.current)?zi(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=sn(l.href),l=$a(u).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=sn(l.href);var i=$a(u).hoistableStyles,o=i.get(t);if(o||(u=u.ownerDocument||u,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,o),(i=u.querySelector(fu(t)))&&!i._p&&(o.instance=i,o.state.loading=5),Ye.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Ye.set(t,l),i||xv(u,t,l,o.state))),e&&a===null)throw Error(r(528,""));return o}if(e&&a!==null)throw Error(r(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=dn(l),l=$a(u).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function sn(t){return'href="'+Ce(t)+'"'}function fu(t){return'link[rel="stylesheet"]['+t+"]"}function T0(t){return ht({},t,{"data-precedence":t.precedence,precedence:null})}function xv(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),oe(e,"link",l),ee(e),t.head.appendChild(e))}function dn(t){return'[src="'+Ce(t)+'"]'}function su(t){return"script[async]"+t}function D0(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Ce(l.href)+'"]');if(a)return e.instance=a,ee(a),a;var u=ht({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),ee(a),oe(a,"style",u),Oi(a,l.precedence,t),e.instance=a;case"stylesheet":u=sn(l.href);var i=t.querySelector(fu(u));if(i)return e.state.loading|=4,e.instance=i,ee(i),i;a=T0(l),(u=Ye.get(u))&&uo(a,u),i=(t.ownerDocument||t).createElement("link"),ee(i);var o=i;return o._p=new Promise(function(s,h){o.onload=s,o.onerror=h}),oe(i,"link",a),e.state.loading|=4,Oi(i,l.precedence,t),e.instance=i;case"script":return i=dn(l.src),(u=t.querySelector(su(i)))?(e.instance=u,ee(u),u):(a=l,(u=Ye.get(i))&&(a=ht({},l),io(a,u)),t=t.ownerDocument||t,u=t.createElement("script"),ee(u),oe(u,"link",a),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(r(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Oi(a,l.precedence,t));return e.instance}function Oi(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=a.length?a[a.length-1]:null,i=u,o=0;o<a.length;o++){var s=a[o];if(s.dataset.precedence===e)i=s;else if(i!==u)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function uo(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function io(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ri=null;function w0(t,e,l){if(Ri===null){var a=new Map,u=Ri=new Map;u.set(l,a)}else u=Ri,a=u.get(l),a||(a=new Map,u.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var i=l[u];if(!(i[Dn]||i[se]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(e)||"";o=t+o;var s=a.get(o);s?s.push(i):a.set(o,[i])}}return a}function z0(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Ev(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function O0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var du=null;function Tv(){}function Dv(t,e,l){if(du===null)throw Error(r(475));var a=du;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=sn(l.href),i=t.querySelector(fu(u));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Mi.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=i,ee(i);return}i=t.ownerDocument||t,l=T0(l),(u=Ye.get(u))&&uo(l,u),i=i.createElement("link"),ee(i);var o=i;o._p=new Promise(function(s,h){o.onload=s,o.onerror=h}),oe(i,"link",l),e.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Mi.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function wv(){if(du===null)throw Error(r(475));var t=du;return t.stylesheets&&t.count===0&&co(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&co(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Mi(){if(this.count--,this.count===0){if(this.stylesheets)co(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _i=null;function co(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_i=new Map,e.forEach(zv,t),_i=null,Mi.call(t))}function zv(t,e){if(!(e.state.loading&4)){var l=_i.get(t);if(l)var a=l.get(null);else{l=new Map,_i.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<u.length;i++){var o=u[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(l.set(o.dataset.precedence,o),a=o)}a&&l.set(null,a)}u=e.instance,o=u.getAttribute("data-precedence"),i=l.get(o)||a,i===a&&l.set(null,u),l.set(o,u),this.count++,a=Mi.bind(this),u.addEventListener("load",a),u.addEventListener("error",a),i?i.parentNode.insertBefore(u,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var hu={$$typeof:G,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function Ov(t,e,l,a,u,i,o,s){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=oc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.hiddenUpdates=oc(null),this.identifierPrefix=a,this.onUncaughtError=u,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function R0(t,e,l,a,u,i,o,s,h,y,R,U){return t=new Ov(t,e,l,o,s,h,y,U),e=1,i===!0&&(e|=24),i=Qe(3,null,null,e),t.current=i,i.stateNode=t,e=Lc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},yr(i),t}function M0(t){return t?(t=Ga,t):Ga}function _0(t,e,l,a,u,i){u=M0(u),a.context===null?a.context=u:a.pendingContext=u,a=Hl(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=Ul(t,a,e),l!==null&&(me(l,t,e),Wn(l,t,e))}function C0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function ro(t,e){C0(t,e),(t=t.alternate)&&C0(t,e)}function $0(t){if(t.tag===13){var e=Ol(t,67108864);e!==null&&me(e,t,67108864),ro(t,67108864)}}var Ci=!0;function Rv(t,e,l,a){var u=F.T;F.T=null;var i=H.p;try{H.p=2,oo(t,e,l,a)}finally{H.p=i,F.T=u}}function Mv(t,e,l,a){var u=F.T;F.T=null;var i=H.p;try{H.p=8,oo(t,e,l,a)}finally{H.p=i,F.T=u}}function oo(t,e,l,a){if(Ci){var u=fo(a);if(u===null)Fr(t,e,a,$i,l),H0(t,a);else if(Cv(u,t,e,l,a))a.stopPropagation();else if(H0(t,a),e&4&&-1<_v.indexOf(t)){for(;u!==null;){var i=Ca(u);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=ea(i.pendingLanes);if(o!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var h=1<<31-xe(o);s.entanglements[1]|=h,o&=~h}ll(i),(qt&6)===0&&(vi=je()+500,cu(0))}}break;case 13:s=Ol(i,2),s!==null&&me(s,i,2),yi(),ro(i,2)}if(i=fo(a),i===null&&Fr(t,e,a,$i,l),i===u)break;u=i}u!==null&&a.stopPropagation()}else Fr(t,e,a,null,l)}}function fo(t){return t=vc(t),so(t)}var $i=null;function so(t){if($i=null,t=la(t),t!==null){var e=V(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=rt(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return $i=t,null}function B0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vp()){case af:return 2;case nf:return 8;case Ou:case bp:return 32;case uf:return 268435456;default:return 32}default:return 32}}var ho=!1,Gl=null,jl=null,Xl=null,pu=new Map,mu=new Map,Vl=[],_v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H0(t,e){switch(t){case"focusin":case"focusout":Gl=null;break;case"dragenter":case"dragleave":jl=null;break;case"mouseover":case"mouseout":Xl=null;break;case"pointerover":case"pointerout":pu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mu.delete(e.pointerId)}}function vu(t,e,l,a,u,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[u]},e!==null&&(e=Ca(e),e!==null&&$0(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function Cv(t,e,l,a,u){switch(e){case"focusin":return Gl=vu(Gl,t,e,l,a,u),!0;case"dragenter":return jl=vu(jl,t,e,l,a,u),!0;case"mouseover":return Xl=vu(Xl,t,e,l,a,u),!0;case"pointerover":var i=u.pointerId;return pu.set(i,vu(pu.get(i)||null,t,e,l,a,u)),!0;case"gotpointercapture":return i=u.pointerId,mu.set(i,vu(mu.get(i)||null,t,e,l,a,u)),!0}return!1}function U0(t){var e=la(t.target);if(e!==null){var l=V(e);if(l!==null){if(e=l.tag,e===13){if(e=rt(l),e!==null){t.blockedOn=e,wp(t.priority,function(){if(l.tag===13){var a=ze(),u=Ol(l,a);u!==null&&me(u,l,a),ro(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=fo(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);mc=a,l.target.dispatchEvent(a),mc=null}else return e=Ca(l),e!==null&&$0(e),t.blockedOn=l,!1;e.shift()}return!0}function N0(t,e,l){Bi(t)&&l.delete(e)}function $v(){ho=!1,Gl!==null&&Bi(Gl)&&(Gl=null),jl!==null&&Bi(jl)&&(jl=null),Xl!==null&&Bi(Xl)&&(Xl=null),pu.forEach(N0),mu.forEach(N0)}function Hi(t,e){t.blockedOn===e&&(t.blockedOn=null,ho||(ho=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,$v)))}var Ui=null;function k0(t){Ui!==t&&(Ui=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ui===t&&(Ui=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],u=t[e+2];if(typeof a!="function"){if(so(a||l)===null)continue;break}var i=Ca(l);i!==null&&(t.splice(e,3),e-=3,er(i,{pending:!0,data:u,method:l.method,action:a},a,u))}}))}function bu(t){function e(h){return Hi(h,t)}Gl!==null&&Hi(Gl,t),jl!==null&&Hi(jl,t),Xl!==null&&Hi(Xl,t),pu.forEach(e),mu.forEach(e);for(var l=0;l<Vl.length;l++){var a=Vl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Vl.length&&(l=Vl[0],l.blockedOn===null);)U0(l),l.blockedOn===null&&Vl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var u=l[a],i=l[a+1],o=u[be]||null;if(typeof i=="function")o||k0(l);else if(o){var s=null;if(i&&i.hasAttribute("formAction")){if(u=i,o=i[be]||null)s=o.formAction;else if(so(u)!==null)continue}else s=o.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),k0(l)}}}function po(t){this._internalRoot=t}Ni.prototype.render=po.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(r(409));var l=e.current,a=ze();_0(l,a,t,e,null,null)},Ni.prototype.unmount=po.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&cn(),_0(t.current,2,null,t,null,null),yi(),e[_a]=null}};function Ni(t){this._internalRoot=t}Ni.prototype.unstable_scheduleHydration=function(t){if(t){var e=df();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Vl.length&&e!==0&&e<Vl[l].priority;l++);Vl.splice(l,0,t),l===0&&U0(t)}};var L0=c.version;if(L0!=="19.0.0")throw Error(r(527,L0,"19.0.0"));H.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=$(e),t=t!==null?W(t):null,t=t===null?null:t.stateNode,t};var Bv={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:F,findFiberByHostInstance:la,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{xn=ki.inject(Bv),Se=ki}catch{}}return yu.createRoot=function(t,e){if(!d(t))throw Error(r(299));var l=!1,a="",u=ld,i=ad,o=nd,s=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(s=e.unstable_transitionCallbacks)),e=R0(t,1,!1,null,null,l,a,u,i,o,s,null),t[_a]=e.current,Wr(t.nodeType===8?t.parentNode:t),new po(e)},yu.hydrateRoot=function(t,e,l){if(!d(t))throw Error(r(299));var a=!1,u="",i=ld,o=ad,s=nd,h=null,y=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(o=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(h=l.unstable_transitionCallbacks),l.formState!==void 0&&(y=l.formState)),e=R0(t,1,!0,e,l??null,a,u,i,o,s,h,y),e.context=M0(null),l=e.current,a=ze(),u=Hl(a),u.callback=null,Ul(l,u,a),e.current.lanes=a,Tn(e,a),ll(e),t[_a]=e.current,Wr(t),new Ni(e)},yu.version="19.0.0",yu}var J0;function Gv(){if(J0)return bo.exports;J0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(c){console.error(c)}}return n(),bo.exports=Yv(),bo.exports}var jv=Gv(),ie=function(){return ie=Object.assign||function(c){for(var f,r=1,d=arguments.length;r<d;r++){f=arguments[r];for(var v in f)Object.prototype.hasOwnProperty.call(f,v)&&(c[v]=f[v])}return c},ie.apply(this,arguments)};function xu(n,c,f){if(f||arguments.length===2)for(var r=0,d=c.length,v;r<d;r++)(v||!(r in c))&&(v||(v=Array.prototype.slice.call(c,0,r)),v[r]=c[r]);return n.concat(v||Array.prototype.slice.call(c))}var kt="-ms-",Su="-moz-",Mt="-webkit-",Eh="comm",ec="rule",Yo="decl",Xv="@import",Th="@keyframes",Vv="@layer",Dh=Math.abs,Go=String.fromCharCode,zo=Object.assign;function Zv(n,c){return ue(n,0)^45?(((c<<2^ue(n,0))<<2^ue(n,1))<<2^ue(n,2))<<2^ue(n,3):0}function wh(n){return n.trim()}function Tl(n,c){return(n=c.exec(n))?n[0]:n}function vt(n,c,f){return n.replace(c,f)}function ji(n,c,f){return n.indexOf(c,f)}function ue(n,c){return n.charCodeAt(c)|0}function vn(n,c,f){return n.slice(c,f)}function al(n){return n.length}function zh(n){return n.length}function Au(n,c){return c.push(n),n}function Kv(n,c){return n.map(c).join("")}function W0(n,c){return n.filter(function(f){return!Tl(f,c)})}var lc=1,bn=1,Oh=0,Ge=0,Ft=0,Sn="";function ac(n,c,f,r,d,v,g,T){return{value:n,root:c,parent:f,type:r,props:d,children:v,line:lc,column:bn,length:g,return:"",siblings:T}}function Kl(n,c){return zo(ac("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},c)}function hn(n){for(;n.root;)n=Kl(n.root,{children:[n]});Au(n,n.siblings)}function Jv(){return Ft}function Wv(){return Ft=Ge>0?ue(Sn,--Ge):0,bn--,Ft===10&&(bn=1,lc--),Ft}function Je(){return Ft=Ge<Oh?ue(Sn,Ge++):0,bn++,Ft===10&&(bn=1,lc++),Ft}function wa(){return ue(Sn,Ge)}function Xi(){return Ge}function nc(n,c){return vn(Sn,n,c)}function Oo(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fv(n){return lc=bn=1,Oh=al(Sn=n),Ge=0,[]}function Iv(n){return Sn="",n}function So(n){return wh(nc(Ge-1,Ro(n===91?n+2:n===40?n+1:n)))}function Pv(n){for(;(Ft=wa())&&Ft<33;)Je();return Oo(n)>2||Oo(Ft)>3?"":" "}function tb(n,c){for(;--c&&Je()&&!(Ft<48||Ft>102||Ft>57&&Ft<65||Ft>70&&Ft<97););return nc(n,Xi()+(c<6&&wa()==32&&Je()==32))}function Ro(n){for(;Je();)switch(Ft){case n:return Ge;case 34:case 39:n!==34&&n!==39&&Ro(Ft);break;case 40:n===41&&Ro(n);break;case 92:Je();break}return Ge}function eb(n,c){for(;Je()&&n+Ft!==57;)if(n+Ft===84&&wa()===47)break;return"/*"+nc(c,Ge-1)+"*"+Go(n===47?n:Je())}function lb(n){for(;!Oo(wa());)Je();return nc(n,Ge)}function ab(n){return Iv(Vi("",null,null,null,[""],n=Fv(n),0,[0],n))}function Vi(n,c,f,r,d,v,g,T,A){for(var m=0,M=0,D=g,B=0,G=0,Z=0,P=1,q=1,Q=1,k=0,j="",nt=d,X=v,K=r,lt=j;q;)switch(Z=k,k=Je()){case 40:if(Z!=108&&ue(lt,D-1)==58){ji(lt+=vt(So(k),"&","&\f"),"&\f",Dh(m?T[m-1]:0))!=-1&&(Q=-1);break}case 34:case 39:case 91:lt+=So(k);break;case 9:case 10:case 13:case 32:lt+=Pv(Z);break;case 92:lt+=tb(Xi()-1,7);continue;case 47:switch(wa()){case 42:case 47:Au(nb(eb(Je(),Xi()),c,f,A),A);break;default:lt+="/"}break;case 123*P:T[m++]=al(lt)*Q;case 125*P:case 59:case 0:switch(k){case 0:case 125:q=0;case 59+M:Q==-1&&(lt=vt(lt,/\f/g,"")),G>0&&al(lt)-D&&Au(G>32?I0(lt+";",r,f,D-1,A):I0(vt(lt," ","")+";",r,f,D-2,A),A);break;case 59:lt+=";";default:if(Au(K=F0(lt,c,f,m,M,d,T,j,nt=[],X=[],D,v),v),k===123)if(M===0)Vi(lt,c,K,K,nt,v,D,T,X);else switch(B===99&&ue(lt,3)===110?100:B){case 100:case 108:case 109:case 115:Vi(n,K,K,r&&Au(F0(n,K,K,0,0,d,T,j,d,nt=[],D,X),X),d,X,D,T,r?nt:X);break;default:Vi(lt,K,K,K,[""],X,0,T,X)}}m=M=G=0,P=Q=1,j=lt="",D=g;break;case 58:D=1+al(lt),G=Z;default:if(P<1){if(k==123)--P;else if(k==125&&P++==0&&Wv()==125)continue}switch(lt+=Go(k),k*P){case 38:Q=M>0?1:(lt+="\f",-1);break;case 44:T[m++]=(al(lt)-1)*Q,Q=1;break;case 64:wa()===45&&(lt+=So(Je())),B=wa(),M=D=al(j=lt+=lb(Xi())),k++;break;case 45:Z===45&&al(lt)==2&&(P=0)}}return v}function F0(n,c,f,r,d,v,g,T,A,m,M,D){for(var B=d-1,G=d===0?v:[""],Z=zh(G),P=0,q=0,Q=0;P<r;++P)for(var k=0,j=vn(n,B+1,B=Dh(q=g[P])),nt=n;k<Z;++k)(nt=wh(q>0?G[k]+" "+j:vt(j,/&\f/g,G[k])))&&(A[Q++]=nt);return ac(n,c,f,d===0?ec:T,A,m,M,D)}function nb(n,c,f,r){return ac(n,c,f,Eh,Go(Jv()),vn(n,2,-2),0,r)}function I0(n,c,f,r,d){return ac(n,c,f,Yo,vn(n,0,r),vn(n,r+1,-1),r,d)}function Rh(n,c,f){switch(Zv(n,c)){case 5103:return Mt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Mt+n+n;case 4789:return Su+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Mt+n+Su+n+kt+n+n;case 5936:switch(ue(n,c+11)){case 114:return Mt+n+kt+vt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Mt+n+kt+vt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Mt+n+kt+vt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Mt+n+kt+n+n;case 6165:return Mt+n+kt+"flex-"+n+n;case 5187:return Mt+n+vt(n,/(\w+).+(:[^]+)/,Mt+"box-$1$2"+kt+"flex-$1$2")+n;case 5443:return Mt+n+kt+"flex-item-"+vt(n,/flex-|-self/g,"")+(Tl(n,/flex-|baseline/)?"":kt+"grid-row-"+vt(n,/flex-|-self/g,""))+n;case 4675:return Mt+n+kt+"flex-line-pack"+vt(n,/align-content|flex-|-self/g,"")+n;case 5548:return Mt+n+kt+vt(n,"shrink","negative")+n;case 5292:return Mt+n+kt+vt(n,"basis","preferred-size")+n;case 6060:return Mt+"box-"+vt(n,"-grow","")+Mt+n+kt+vt(n,"grow","positive")+n;case 4554:return Mt+vt(n,/([^-])(transform)/g,"$1"+Mt+"$2")+n;case 6187:return vt(vt(vt(n,/(zoom-|grab)/,Mt+"$1"),/(image-set)/,Mt+"$1"),n,"")+n;case 5495:case 3959:return vt(n,/(image-set\([^]*)/,Mt+"$1$`$1");case 4968:return vt(vt(n,/(.+:)(flex-)?(.*)/,Mt+"box-pack:$3"+kt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Mt+n+n;case 4200:if(!Tl(n,/flex-|baseline/))return kt+"grid-column-align"+vn(n,c)+n;break;case 2592:case 3360:return kt+vt(n,"template-","")+n;case 4384:case 3616:return f&&f.some(function(r,d){return c=d,Tl(r.props,/grid-\w+-end/)})?~ji(n+(f=f[c].value),"span",0)?n:kt+vt(n,"-start","")+n+kt+"grid-row-span:"+(~ji(f,"span",0)?Tl(f,/\d+/):+Tl(f,/\d+/)-+Tl(n,/\d+/))+";":kt+vt(n,"-start","")+n;case 4896:case 4128:return f&&f.some(function(r){return Tl(r.props,/grid-\w+-start/)})?n:kt+vt(vt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return vt(n,/(.+)-inline(.+)/,Mt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(al(n)-1-c>6)switch(ue(n,c+1)){case 109:if(ue(n,c+4)!==45)break;case 102:return vt(n,/(.+:)(.+)-([^]+)/,"$1"+Mt+"$2-$3$1"+Su+(ue(n,c+3)==108?"$3":"$2-$3"))+n;case 115:return~ji(n,"stretch",0)?Rh(vt(n,"stretch","fill-available"),c,f)+n:n}break;case 5152:case 5920:return vt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,d,v,g,T,A,m){return kt+d+":"+v+m+(g?kt+d+"-span:"+(T?A:+A-+v)+m:"")+n});case 4949:if(ue(n,c+6)===121)return vt(n,":",":"+Mt)+n;break;case 6444:switch(ue(n,ue(n,14)===45?18:11)){case 120:return vt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Mt+(ue(n,14)===45?"inline-":"")+"box$3$1"+Mt+"$2$3$1"+kt+"$2box$3")+n;case 100:return vt(n,":",":"+kt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return vt(n,"scroll-","scroll-snap-")+n}return n}function Ji(n,c){for(var f="",r=0;r<n.length;r++)f+=c(n[r],r,n,c)||"";return f}function ub(n,c,f,r){switch(n.type){case Vv:if(n.children.length)break;case Xv:case Yo:return n.return=n.return||n.value;case Eh:return"";case Th:return n.return=n.value+"{"+Ji(n.children,r)+"}";case ec:if(!al(n.value=n.props.join(",")))return""}return al(f=Ji(n.children,r))?n.return=n.value+"{"+f+"}":""}function ib(n){var c=zh(n);return function(f,r,d,v){for(var g="",T=0;T<c;T++)g+=n[T](f,r,d,v)||"";return g}}function cb(n){return function(c){c.root||(c=c.return)&&n(c)}}function rb(n,c,f,r){if(n.length>-1&&!n.return)switch(n.type){case Yo:n.return=Rh(n.value,n.length,f);return;case Th:return Ji([Kl(n,{value:vt(n.value,"@","@"+Mt)})],r);case ec:if(n.length)return Kv(f=n.props,function(d){switch(Tl(d,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":hn(Kl(n,{props:[vt(d,/:(read-\w+)/,":"+Su+"$1")]})),hn(Kl(n,{props:[d]})),zo(n,{props:W0(f,r)});break;case"::placeholder":hn(Kl(n,{props:[vt(d,/:(plac\w+)/,":"+Mt+"input-$1")]})),hn(Kl(n,{props:[vt(d,/:(plac\w+)/,":"+Su+"$1")]})),hn(Kl(n,{props:[vt(d,/:(plac\w+)/,kt+"input-$1")]})),hn(Kl(n,{props:[d]})),zo(n,{props:W0(f,r)});break}return""})}}var ob={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Oe={},gn=typeof process<"u"&&Oe!==void 0&&(Oe.REACT_APP_SC_ATTR||Oe.SC_ATTR)||"data-styled",Mh="active",_h="data-styled-version",uc="6.1.16",jo=`/*!sc*/
`,Wi=typeof window<"u"&&"HTMLElement"in window,fb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Oe.REACT_APP_SC_DISABLE_SPEEDY!==""?Oe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Oe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Oe!==void 0&&Oe.SC_DISABLE_SPEEDY!==void 0&&Oe.SC_DISABLE_SPEEDY!==""&&Oe.SC_DISABLE_SPEEDY!=="false"&&Oe.SC_DISABLE_SPEEDY),sb={},ic=Object.freeze([]),yn=Object.freeze({});function Ch(n,c,f){return f===void 0&&(f=yn),n.theme!==f.theme&&n.theme||c||f.theme}var $h=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),db=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hb=/(^-|-$)/g;function P0(n){return n.replace(db,"-").replace(hb,"")}var pb=/(a)(d)/gi,Li=52,th=function(n){return String.fromCharCode(n+(n>25?39:97))};function Mo(n){var c,f="";for(c=Math.abs(n);c>Li;c=c/Li|0)f=th(c%Li)+f;return(th(c%Li)+f).replace(pb,"$1-$2")}var xo,Bh=5381,mn=function(n,c){for(var f=c.length;f;)n=33*n^c.charCodeAt(--f);return n},Hh=function(n){return mn(Bh,n)};function Uh(n){return Mo(Hh(n)>>>0)}function mb(n){return n.displayName||n.name||"Component"}function Eo(n){return typeof n=="string"&&!0}var Nh=typeof Symbol=="function"&&Symbol.for,kh=Nh?Symbol.for("react.memo"):60115,vb=Nh?Symbol.for("react.forward_ref"):60112,bb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yb=((xo={})[vb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xo[kh]=Lh,xo);function eh(n){return("type"in(c=n)&&c.type.$$typeof)===kh?Lh:"$$typeof"in n?yb[n.$$typeof]:bb;var c}var Ab=Object.defineProperty,Sb=Object.getOwnPropertyNames,lh=Object.getOwnPropertySymbols,xb=Object.getOwnPropertyDescriptor,Eb=Object.getPrototypeOf,ah=Object.prototype;function Qh(n,c,f){if(typeof c!="string"){if(ah){var r=Eb(c);r&&r!==ah&&Qh(n,r,f)}var d=Sb(c);lh&&(d=d.concat(lh(c)));for(var v=eh(n),g=eh(c),T=0;T<d.length;++T){var A=d[T];if(!(A in gb||f&&f[A]||g&&A in g||v&&A in v)){var m=xb(c,A);try{Ab(n,A,m)}catch{}}}}return n}function za(n){return typeof n=="function"}function Xo(n){return typeof n=="object"&&"styledComponentId"in n}function Ta(n,c){return n&&c?"".concat(n," ").concat(c):n||c||""}function _o(n,c){if(n.length===0)return"";for(var f=n[0],r=1;r<n.length;r++)f+=n[r];return f}function Eu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Co(n,c,f){if(f===void 0&&(f=!1),!f&&!Eu(n)&&!Array.isArray(n))return c;if(Array.isArray(c))for(var r=0;r<c.length;r++)n[r]=Co(n[r],c[r]);else if(Eu(c))for(var r in c)n[r]=Co(n[r],c[r]);return n}function Vo(n,c){Object.defineProperty(n,"toString",{value:c})}function Oa(n){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Tb=function(){function n(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return n.prototype.indexOfGroup=function(c){for(var f=0,r=0;r<c;r++)f+=this.groupSizes[r];return f},n.prototype.insertRules=function(c,f){if(c>=this.groupSizes.length){for(var r=this.groupSizes,d=r.length,v=d;c>=v;)if((v<<=1)<0)throw Oa(16,"".concat(c));this.groupSizes=new Uint32Array(v),this.groupSizes.set(r),this.length=v;for(var g=d;g<v;g++)this.groupSizes[g]=0}for(var T=this.indexOfGroup(c+1),A=(g=0,f.length);g<A;g++)this.tag.insertRule(T,f[g])&&(this.groupSizes[c]++,T++)},n.prototype.clearGroup=function(c){if(c<this.length){var f=this.groupSizes[c],r=this.indexOfGroup(c),d=r+f;this.groupSizes[c]=0;for(var v=r;v<d;v++)this.tag.deleteRule(r)}},n.prototype.getGroup=function(c){var f="";if(c>=this.length||this.groupSizes[c]===0)return f;for(var r=this.groupSizes[c],d=this.indexOfGroup(c),v=d+r,g=d;g<v;g++)f+="".concat(this.tag.getRule(g)).concat(jo);return f},n}(),Zi=new Map,Fi=new Map,Ki=1,Qi=function(n){if(Zi.has(n))return Zi.get(n);for(;Fi.has(Ki);)Ki++;var c=Ki++;return Zi.set(n,c),Fi.set(c,n),c},Db=function(n,c){Ki=c+1,Zi.set(n,c),Fi.set(c,n)},wb="style[".concat(gn,"][").concat(_h,'="').concat(uc,'"]'),zb=new RegExp("^".concat(gn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ob=function(n,c,f){for(var r,d=f.split(","),v=0,g=d.length;v<g;v++)(r=d[v])&&n.registerName(c,r)},Rb=function(n,c){for(var f,r=((f=c.textContent)!==null&&f!==void 0?f:"").split(jo),d=[],v=0,g=r.length;v<g;v++){var T=r[v].trim();if(T){var A=T.match(zb);if(A){var m=0|parseInt(A[1],10),M=A[2];m!==0&&(Db(M,m),Ob(n,M,A[3]),n.getTag().insertRules(m,d)),d.length=0}else d.push(T)}}},nh=function(n){for(var c=document.querySelectorAll(wb),f=0,r=c.length;f<r;f++){var d=c[f];d&&d.getAttribute(gn)!==Mh&&(Rb(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function Mb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qh=function(n){var c=document.head,f=n||c,r=document.createElement("style"),d=function(T){var A=Array.from(T.querySelectorAll("style[".concat(gn,"]")));return A[A.length-1]}(f),v=d!==void 0?d.nextSibling:null;r.setAttribute(gn,Mh),r.setAttribute(_h,uc);var g=Mb();return g&&r.setAttribute("nonce",g),f.insertBefore(r,v),r},_b=function(){function n(c){this.element=qh(c),this.element.appendChild(document.createTextNode("")),this.sheet=function(f){if(f.sheet)return f.sheet;for(var r=document.styleSheets,d=0,v=r.length;d<v;d++){var g=r[d];if(g.ownerNode===f)return g}throw Oa(17)}(this.element),this.length=0}return n.prototype.insertRule=function(c,f){try{return this.sheet.insertRule(f,c),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},n.prototype.getRule=function(c){var f=this.sheet.cssRules[c];return f&&f.cssText?f.cssText:""},n}(),Cb=function(){function n(c){this.element=qh(c),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(c,f){if(c<=this.length&&c>=0){var r=document.createTextNode(f);return this.element.insertBefore(r,this.nodes[c]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},n.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},n}(),$b=function(){function n(c){this.rules=[],this.length=0}return n.prototype.insertRule=function(c,f){return c<=this.length&&(this.rules.splice(c,0,f),this.length++,!0)},n.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},n.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},n}(),uh=Wi,Bb={isServer:!Wi,useCSSOMInjection:!fb},Ii=function(){function n(c,f,r){c===void 0&&(c=yn),f===void 0&&(f={});var d=this;this.options=ie(ie({},Bb),c),this.gs=f,this.names=new Map(r),this.server=!!c.isServer,!this.server&&Wi&&uh&&(uh=!1,nh(this)),Vo(this,function(){return function(v){for(var g=v.getTag(),T=g.length,A="",m=function(D){var B=function(Q){return Fi.get(Q)}(D);if(B===void 0)return"continue";var G=v.names.get(B),Z=g.getGroup(D);if(G===void 0||!G.size||Z.length===0)return"continue";var P="".concat(gn,".g").concat(D,'[id="').concat(B,'"]'),q="";G!==void 0&&G.forEach(function(Q){Q.length>0&&(q+="".concat(Q,","))}),A+="".concat(Z).concat(P,'{content:"').concat(q,'"}').concat(jo)},M=0;M<T;M++)m(M);return A}(d)})}return n.registerId=function(c){return Qi(c)},n.prototype.rehydrate=function(){!this.server&&Wi&&nh(this)},n.prototype.reconstructWithOptions=function(c,f){return f===void 0&&(f=!0),new n(ie(ie({},this.options),c),this.gs,f&&this.names||void 0)},n.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(c=function(f){var r=f.useCSSOMInjection,d=f.target;return f.isServer?new $b(d):r?new _b(d):new Cb(d)}(this.options),new Tb(c)));var c},n.prototype.hasNameForId=function(c,f){return this.names.has(c)&&this.names.get(c).has(f)},n.prototype.registerName=function(c,f){if(Qi(c),this.names.has(c))this.names.get(c).add(f);else{var r=new Set;r.add(f),this.names.set(c,r)}},n.prototype.insertRules=function(c,f,r){this.registerName(c,f),this.getTag().insertRules(Qi(c),r)},n.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},n.prototype.clearRules=function(c){this.getTag().clearGroup(Qi(c)),this.clearNames(c)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Hb=/&/g,Ub=/^\s*\/\/.*$/gm;function Yh(n,c){return n.map(function(f){return f.type==="rule"&&(f.value="".concat(c," ").concat(f.value),f.value=f.value.replaceAll(",",",".concat(c," ")),f.props=f.props.map(function(r){return"".concat(c," ").concat(r)})),Array.isArray(f.children)&&f.type!=="@keyframes"&&(f.children=Yh(f.children,c)),f})}function Nb(n){var c,f,r,d=yn,v=d.options,g=v===void 0?yn:v,T=d.plugins,A=T===void 0?ic:T,m=function(B,G,Z){return Z.startsWith(f)&&Z.endsWith(f)&&Z.replaceAll(f,"").length>0?".".concat(c):B},M=A.slice();M.push(function(B){B.type===ec&&B.value.includes("&")&&(B.props[0]=B.props[0].replace(Hb,f).replace(r,m))}),g.prefix&&M.push(rb),M.push(ub);var D=function(B,G,Z,P){G===void 0&&(G=""),Z===void 0&&(Z=""),P===void 0&&(P="&"),c=P,f=G,r=new RegExp("\\".concat(f,"\\b"),"g");var q=B.replace(Ub,""),Q=ab(Z||G?"".concat(Z," ").concat(G," { ").concat(q," }"):q);g.namespace&&(Q=Yh(Q,g.namespace));var k=[];return Ji(Q,ib(M.concat(cb(function(j){return k.push(j)})))),k};return D.hash=A.length?A.reduce(function(B,G){return G.name||Oa(15),mn(B,G.name)},Bh).toString():"",D}var kb=new Ii,$o=Nb(),Gh=w.createContext({shouldForwardProp:void 0,styleSheet:kb,stylis:$o});Gh.Consumer;w.createContext(void 0);function Bo(){return z.useContext(Gh)}var Lb=function(){function n(c,f){var r=this;this.inject=function(d,v){v===void 0&&(v=$o);var g=r.name+v.hash;d.hasNameForId(r.id,g)||d.insertRules(r.id,g,v(r.rules,g,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=f,Vo(this,function(){throw Oa(12,String(r.name))})}return n.prototype.getName=function(c){return c===void 0&&(c=$o),this.name+c.hash},n}(),Qb=function(n){return n>="A"&&n<="Z"};function ih(n){for(var c="",f=0;f<n.length;f++){var r=n[f];if(f===1&&r==="-"&&n[0]==="-")return n;Qb(r)?c+="-"+r.toLowerCase():c+=r}return c.startsWith("ms-")?"-"+c:c}var jh=function(n){return n==null||n===!1||n===""},Xh=function(n){var c,f,r=[];for(var d in n){var v=n[d];n.hasOwnProperty(d)&&!jh(v)&&(Array.isArray(v)&&v.isCss||za(v)?r.push("".concat(ih(d),":"),v,";"):Eu(v)?r.push.apply(r,xu(xu(["".concat(d," {")],Xh(v),!1),["}"],!1)):r.push("".concat(ih(d),": ").concat((c=d,(f=v)==null||typeof f=="boolean"||f===""?"":typeof f!="number"||f===0||c in ob||c.startsWith("--")?String(f).trim():"".concat(f,"px")),";")))}return r};function Jl(n,c,f,r){if(jh(n))return[];if(Xo(n))return[".".concat(n.styledComponentId)];if(za(n)){if(!za(v=n)||v.prototype&&v.prototype.isReactComponent||!c)return[n];var d=n(c);return Jl(d,c,f,r)}var v;return n instanceof Lb?f?(n.inject(f,r),[n.getName(r)]):[n]:Eu(n)?Xh(n):Array.isArray(n)?Array.prototype.concat.apply(ic,n.map(function(g){return Jl(g,c,f,r)})):[n.toString()]}function Vh(n){for(var c=0;c<n.length;c+=1){var f=n[c];if(za(f)&&!Xo(f))return!1}return!0}var qb=Hh(uc),Yb=function(){function n(c,f,r){this.rules=c,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Vh(c),this.componentId=f,this.baseHash=mn(qb,f),this.baseStyle=r,Ii.registerId(f)}return n.prototype.generateAndInjectStyles=function(c,f,r){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,f,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&f.hasNameForId(this.componentId,this.staticRulesId))d=Ta(d,this.staticRulesId);else{var v=_o(Jl(this.rules,c,f,r)),g=Mo(mn(this.baseHash,v)>>>0);if(!f.hasNameForId(this.componentId,g)){var T=r(v,".".concat(g),void 0,this.componentId);f.insertRules(this.componentId,g,T)}d=Ta(d,g),this.staticRulesId=g}else{for(var A=mn(this.baseHash,r.hash),m="",M=0;M<this.rules.length;M++){var D=this.rules[M];if(typeof D=="string")m+=D;else if(D){var B=_o(Jl(D,c,f,r));A=mn(A,B+M),m+=B}}if(m){var G=Mo(A>>>0);f.hasNameForId(this.componentId,G)||f.insertRules(this.componentId,G,r(m,".".concat(G),void 0,this.componentId)),d=Ta(d,G)}}return d},n}(),Tu=w.createContext(void 0);Tu.Consumer;function Gb(n){var c=w.useContext(Tu),f=z.useMemo(function(){return function(r,d){if(!r)throw Oa(14);if(za(r)){var v=r(d);return v}if(Array.isArray(r)||typeof r!="object")throw Oa(8);return d?ie(ie({},d),r):r}(n.theme,c)},[n.theme,c]);return n.children?w.createElement(Tu.Provider,{value:f},n.children):null}var To={};function jb(n,c,f){var r=Xo(n),d=n,v=!Eo(n),g=c.attrs,T=g===void 0?ic:g,A=c.componentId,m=A===void 0?function(nt,X){var K=typeof nt!="string"?"sc":P0(nt);To[K]=(To[K]||0)+1;var lt="".concat(K,"-").concat(Uh(uc+K+To[K]));return X?"".concat(X,"-").concat(lt):lt}(c.displayName,c.parentComponentId):A,M=c.displayName,D=M===void 0?function(nt){return Eo(nt)?"styled.".concat(nt):"Styled(".concat(mb(nt),")")}(n):M,B=c.displayName&&c.componentId?"".concat(P0(c.displayName),"-").concat(c.componentId):c.componentId||m,G=r&&d.attrs?d.attrs.concat(T).filter(Boolean):T,Z=c.shouldForwardProp;if(r&&d.shouldForwardProp){var P=d.shouldForwardProp;if(c.shouldForwardProp){var q=c.shouldForwardProp;Z=function(nt,X){return P(nt,X)&&q(nt,X)}}else Z=P}var Q=new Yb(f,B,r?d.componentStyle:void 0);function k(nt,X){return function(K,lt,Ot){var F=K.attrs,ht=K.componentStyle,Rt=K.defaultProps,Tt=K.foldedComponentIds,Bt=K.styledComponentId,_t=K.target,St=w.useContext(Tu),Y=Bo(),it=K.shouldForwardProp||Y.shouldForwardProp,V=Ch(lt,St,Rt)||yn,rt=function(tt,J,ot){for(var st,C=ie(ie({},J),{className:void 0,theme:ot}),et=0;et<tt.length;et+=1){var dt=za(st=tt[et])?st(C):st;for(var gt in dt)C[gt]=gt==="className"?Ta(C[gt],dt[gt]):gt==="style"?ie(ie({},C[gt]),dt[gt]):dt[gt]}return J.className&&(C.className=Ta(C.className,J.className)),C}(F,lt,V),p=rt.as||_t,$={};for(var W in rt)rt[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&rt.theme===V||(W==="forwardedAs"?$.as=rt.forwardedAs:it&&!it(W,p)||($[W]=rt[W]));var L=function(tt,J){var ot=Bo(),st=tt.generateAndInjectStyles(J,ot.styleSheet,ot.stylis);return st}(ht,rt),H=Ta(Tt,Bt);return L&&(H+=" "+L),rt.className&&(H+=" "+rt.className),$[Eo(p)&&!$h.has(p)?"class":"className"]=H,Ot&&($.ref=Ot),z.createElement(p,$)}(j,nt,X)}k.displayName=D;var j=w.forwardRef(k);return j.attrs=G,j.componentStyle=Q,j.displayName=D,j.shouldForwardProp=Z,j.foldedComponentIds=r?Ta(d.foldedComponentIds,d.styledComponentId):"",j.styledComponentId=B,j.target=r?d.target:n,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(nt){this._foldedDefaultProps=r?function(X){for(var K=[],lt=1;lt<arguments.length;lt++)K[lt-1]=arguments[lt];for(var Ot=0,F=K;Ot<F.length;Ot++)Co(X,F[Ot],!0);return X}({},d.defaultProps,nt):nt}}),Vo(j,function(){return".".concat(j.styledComponentId)}),v&&Qh(j,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function ch(n,c){for(var f=[n[0]],r=0,d=c.length;r<d;r+=1)f.push(c[r],n[r+1]);return f}var rh=function(n){return Object.assign(n,{isCss:!0})};function I(n){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];if(za(n)||Eu(n))return rh(Jl(ch(ic,xu([n],c,!0))));var r=n;return c.length===0&&r.length===1&&typeof r[0]=="string"?Jl(r):rh(Jl(ch(r,c)))}function Ho(n,c,f){if(f===void 0&&(f=yn),!c)throw Oa(1,c);var r=function(d){for(var v=[],g=1;g<arguments.length;g++)v[g-1]=arguments[g];return n(c,f,I.apply(void 0,xu([d],v,!1)))};return r.attrs=function(d){return Ho(n,c,ie(ie({},f),{attrs:Array.prototype.concat(f.attrs,d).filter(Boolean)}))},r.withConfig=function(d){return Ho(n,c,ie(ie({},f),d))},r}var Zh=function(n){return Ho(jb,n)},N=Zh;$h.forEach(function(n){N[n]=Zh(n)});var Xb=function(){function n(c,f){this.rules=c,this.componentId=f,this.isStatic=Vh(c),Ii.registerId(this.componentId+1)}return n.prototype.createStyles=function(c,f,r,d){var v=d(_o(Jl(this.rules,f,r,d)),""),g=this.componentId+c;r.insertRules(g,g,v)},n.prototype.removeStyles=function(c,f){f.clearRules(this.componentId+c)},n.prototype.renderStyles=function(c,f,r,d){c>2&&Ii.registerId(this.componentId+c),this.removeStyles(c,r),this.createStyles(c,f,r,d)},n}();function Vb(n){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];var r=I.apply(void 0,xu([n],c,!1)),d="sc-global-".concat(Uh(JSON.stringify(r))),v=new Xb(r,d),g=function(A){var m=Bo(),M=w.useContext(Tu),D=w.useRef(m.styleSheet.allocateGSInstance(d)).current;return m.styleSheet.server&&T(D,A,m.styleSheet,M,m.stylis),w.useLayoutEffect(function(){if(!m.styleSheet.server)return T(D,A,m.styleSheet,M,m.stylis),function(){return v.removeStyles(D,m.styleSheet)}},[D,A,m.styleSheet,M,m.stylis]),null};function T(A,m,M,D,B){if(v.isStatic)v.renderStyles(A,sb,M,B);else{var G=ie(ie({},m),{theme:Ch(m,D,g.defaultProps)});v.renderStyles(A,G,M,B)}}return w.memo(g)}const Zo="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Ko="inset 2px 2px 3px rgba(0,0,0,0.2)",We=()=>I`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Fe=({background:n="material",color:c="materialText"}={})=>I`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:f})=>f[n]};
  color: ${({theme:f})=>f[c]};
`,wu=({mainColor:n="black",secondaryColor:c="transparent",pixelSize:f=2})=>I`
  background-image: ${[`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`,`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`].join(",")};
  background-color: ${c};
  background-size: ${`${f*2}px ${f*2}px`};
  background-position: 0 0, ${`${f}px ${f}px`};
`,Ra=()=>I`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,pn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Zb=({theme:n,topLeftInner:c,bottomRightInner:f,hasShadow:r=!1,hasInsetShadow:d=!1})=>[r?Zo:!1,d?Ko:!1,c!==null?`inset 1px 1px 0px 1px ${n[c]}`:!1,f!==null?`inset -1px -1px 0 1px ${n[f]}`:!1].filter(Boolean).join(", "),Vt=({invert:n=!1,style:c="button"}={})=>{const f={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return I`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[pn[c][f.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[pn[c][f.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[pn[c][f.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[pn[c][f.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:d})=>Zb({theme:r,topLeftInner:pn[c][f.topLeftInner],bottomRightInner:pn[c][f.bottomRightInner],hasShadow:d})};
  `},An=()=>I`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,Kb=n=>Buffer.from(n).toString("base64"),Jb=typeof btoa<"u"?btoa:Kb,qi=(n,c=0)=>{const f=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${c} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Jb(f)})`},Jo=(n="default")=>I`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:c})=>wu({mainColor:n==="flat"?c.flatLight:c.material,secondaryColor:n==="flat"?c.canvas:c.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Fe()}
    ${n==="flat"?Ra():Vt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:c})=>c.material};
  }
  ::-webkit-scrollbar-button {
    ${Fe()}
    ${n==="flat"?Ra():Vt({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${n==="default"?Vt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:c})=>qi(c.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:c})=>qi(c.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:c})=>qi(c.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:c})=>qi(c.materialText,0)};
  }
`,Wb=N.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,Fb=z.forwardRef(({children:n,underline:c=!0,...f},r)=>w.createElement(Wb,{ref:r,underline:c,...f},n));Fb.displayName="Anchor";const Ib=N.header`
  ${Vt()};
  ${Fe()};

  position: ${n=>{var c;return(c=n.position)!==null&&c!==void 0?c:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Pb=z.forwardRef(({children:n,fixed:c=!0,position:f="fixed",...r},d)=>w.createElement(Ib,{fixed:c,position:c!==!1?f:void 0,ref:d,...r},n));Pb.displayName="AppBar";const Ma=()=>{};function Da(n,c,f){return f!==null&&n>f?f:c!==null&&n<c?c:n}function tg(n){if(Math.abs(n)<1){const f=n.toExponential().split("e-"),r=f[0].split(".")[1];return(r?r.length:0)+parseInt(f[1],10)}const c=n.toString().split(".")[1];return c?c.length:0}function oh(n,c,f){const r=Math.round((n-f)/c)*c+f;return Number(r.toFixed(tg(c)))}function Wl(n){return typeof n=="number"?`${n}px`:n}const eg=N.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:n})=>`
    height: ${n};
    width: ${n};
    `}
  border-radius: ${({square:n})=>n?0:"50%"};
  overflow: hidden;
  ${({noBorder:n,theme:c})=>!n&&`
    border-top: 2px solid ${c.borderDark};
    border-left: 2px solid ${c.borderDark};
    border-bottom: 2px solid ${c.borderLightest};
    border-right: 2px solid ${c.borderLightest};
    background: ${c.material};
  `}
  ${({src:n})=>!n&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,lg=N.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Kh=z.forwardRef(({alt:n="",children:c,noBorder:f=!1,size:r=35,square:d=!1,src:v,...g},T)=>w.createElement(eg,{noBorder:f,ref:T,size:Wl(r),square:d,src:v,...g},v?w.createElement(lg,{src:v,alt:n}):c));Kh.displayName="Avatar";const fe={sm:"28px",md:"36px",lg:"44px"},ag=I`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>fe[n]};
  width: ${({fullWidth:n,size:c="md",square:f})=>n?"100%":f?fe[c]:"auto"};
  padding: ${({square:n})=>n?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:n})=>!n&&"2px"};
  }
  padding-top: ${({active:n,disabled:c})=>n&&!c&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,cc=N.button`
  ${({active:n,disabled:c,primary:f,theme:r,variant:d})=>d==="flat"?I`
          ${Ra()}
          ${f?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!n&&!c&&An}
            outline-offset: -4px;
          }
        `:d==="menu"||d==="thin"?I`
          ${Fe()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!c&&!n&&Vt({style:"buttonThin"})}
          }
          &:active {
            ${!c&&Vt({style:"buttonThinPressed"})}
          }
          ${n&&Vt({style:"buttonThinPressed"})}
          ${c&&We()}
        `:I`
          ${Fe()};
          border: none;
          ${c&&We()}
          ${n?wu({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${f?I`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:I`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Vt(n?{style:d==="raised"?"window":"button",invert:!0}:{style:d==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!c&&Vt({style:d==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!n&&!c&&An}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${ag}
`,Du=z.forwardRef(({onClick:n,disabled:c=!1,children:f,type:r="button",fullWidth:d=!1,size:v="md",square:g=!1,active:T=!1,onTouchStart:A=Ma,primary:m=!1,variant:M="default",...D},B)=>w.createElement(cc,{active:T,disabled:c,$disabled:c,fullWidth:d,onClick:c?void 0:n,onTouchStart:A,primary:m,ref:B,size:v,square:g,type:r,variant:M,...D},f));Du.displayName="Button";function Fl({defaultValue:n,onChange:c,onChangePropName:f="onChange",readOnly:r,value:d,valuePropName:v="value"}){const g=d!==void 0,[T,A]=z.useState(n),m=z.useCallback(M=>{g||A(M)},[g]);if(g&&typeof c!="function"&&!r){const M=`Warning: You provided a \`${v}\` prop to a component without an \`${f}\` handler.${v==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${f}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${f}\` function that updates \`${v}\`.`}`;console.warn(M)}return[g?d:T,m]}const Uo=N.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>fe[n.size]};
  width: ${n=>n.square?fe[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>fe[n.size]};
  color: ${({theme:n})=>n.materialText};
  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
  font-weight: ${({primary:n})=>n?"bold":"normal"};
  &:hover {
    ${({theme:n,$disabled:c})=>!c&&`
        color: ${n.materialTextInvert};
        background: ${n.hoverBackground};
      `}

    cursor: default;
  }
  ${n=>n.$disabled&&We()}
`,ng=z.forwardRef(({size:n="lg",disabled:c,square:f,children:r,onClick:d,primary:v,...g},T)=>w.createElement(Uo,{$disabled:c,size:n,square:f,onClick:c?void 0:d,primary:v,role:"menuitem",ref:T,"aria-disabled":c,...g},r));ng.displayName="MenuListItem";const ug=N.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Vt({style:"window"})}
  ${Fe()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;ug.displayName="MenuList";const nl=20,Pi=N.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${nl}px;
  height: ${nl}px;
  opacity: 0;
  z-index: -1;
`,Wo=N.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&We()}

  ${Uo} & {
    margin: 0;
    height: 100%;
  }
  ${Uo}:hover & {
    ${({$disabled:n,theme:c})=>!n&&I`
        color: ${c.materialTextInvert};
      `};
  }
`,Fo=N.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Pi}:focus ~ & {
    ${An}
  }
  ${Pi}:not(:disabled) ~ &:active {
    ${An}
  }
`,ul=N.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:n})=>n.borderDark};
  border-top-color: ${({theme:n})=>n.borderDark};
  border-right-color: ${({theme:n})=>n.borderLightest};
  border-bottom-color: ${({theme:n})=>n.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:n})=>n.borderDarkest};
    border-top-color: ${({theme:n})=>n.borderDarkest};
    border-right-color: ${({theme:n})=>n.borderLight};
    border-bottom-color: ${({theme:n})=>n.borderLight};

    pointer-events: none;
    ${n=>n.shadow&&`box-shadow:${Ko};`}
  }
`,ig=N.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Jo()}
`,Jh=z.forwardRef(({children:n,shadow:c=!0,...f},r)=>w.createElement(ul,{ref:r,shadow:c,...f},w.createElement(ig,null,n)));Jh.displayName="ScrollView";const Wh=I`
  width: ${nl}px;
  height: ${nl}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,cg=N(ul)`
  ${Wh}
  width: ${nl}px;
  height: ${nl}px;
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
  &:before {
    box-shadow: none;
  }
`,rg=N.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  ${Wh}
  width: ${nl-4}px;
  height: ${nl-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
`,og=N.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:n,theme:c})=>n?c.checkmarkDisabled:c.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
  }
`,fg=N.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:c})=>wu({mainColor:n?c.checkmarkDisabled:c.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,sg={flat:rg,default:cg},dg=z.forwardRef(({checked:n,className:c="",defaultChecked:f=!1,disabled:r=!1,indeterminate:d=!1,label:v="",onChange:g=Ma,style:T={},value:A,variant:m="default",...M},D)=>{var B;const[G,Z]=Fl({defaultValue:f,onChange:g,readOnly:(B=M.readOnly)!==null&&B!==void 0?B:r,value:n}),P=z.useCallback(k=>{const j=k.target.checked;Z(j),g(k)},[g,Z]),q=sg[m];let Q=null;return d?Q=fg:G&&(Q=og),w.createElement(Wo,{$disabled:r,className:c,style:T},w.createElement(Pi,{disabled:r,onChange:r?void 0:P,readOnly:r,type:"checkbox",value:A,checked:G,"data-indeterminate":d,ref:D,...M}),w.createElement(q,{$disabled:r,role:"presentation"},Q&&w.createElement(Q,{$disabled:r,variant:m})),v&&w.createElement(Fo,null,v))});dg.displayName="Checkbox";const Fh=N.div`
  ${({orientation:n,theme:c,size:f="100%"})=>n==="vertical"?`
    height: ${Wl(f)};
    border-left: 2px solid ${c.borderDark};
    border-right: 2px solid ${c.borderLightest};
    margin: 0;
    `:`
    width: ${Wl(f)};
    border-bottom: 2px solid ${c.borderLightest};
    border-top: 2px solid ${c.borderDark};
    margin: 0;
    `}
`;Fh.displayName="Separator";const hg=N(cc)`
  padding-left: 8px;
`,pg=N(Fh)`
  height: 21px;
  position: relative;
  top: 0;
`,Ih=N.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,mg=N.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?I`
          border: 2px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:I`
          border: 2px solid ${({theme:c})=>c.materialText};
        `}
  ${Ih}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${An}
    outline-offset: -8px;
  }
`,vg=N.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?I`
          border-top: 6px solid ${({theme:c})=>c.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:c})=>c.materialTextDisabledShadow}
          );
        `:I`
          border-top: 6px solid ${({theme:c})=>c.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:n})=>n==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,bg=z.forwardRef(({value:n,defaultValue:c,onChange:f=Ma,disabled:r=!1,variant:d="default",...v},g)=>{var T;const[A,m]=Fl({defaultValue:c,onChange:f,readOnly:(T=v.readOnly)!==null&&T!==void 0?T:r,value:n}),M=D=>{const B=D.target.value;m(B),f(D)};return w.createElement(hg,{disabled:r,as:"div",variant:d,size:"md"},w.createElement(Ih,{onChange:M,readOnly:r,disabled:r,value:A??"#008080",type:"color",ref:g,...v}),w.createElement(mg,{$disabled:r,color:A??"#008080",role:"presentation"}),d==="default"&&w.createElement(pg,{orientation:"vertical"}),w.createElement(vg,{$disabled:r,variant:d}))});bg.displayName="ColorInput";const gg=N.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:n})=>I`
    width: ${11*n}px;
    height: ${21*n}px;
    margin: ${n}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${wu({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${n}px;
      width: ${9*n}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${n}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${n*2}px);
      top: ${2*n}px;
      left: ${n}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${n}px;
      width: ${9*n}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${n}px;
    }
    span.center:after {
      bottom: ${n}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${n}px;
      border-top: ${n}px solid var(--react95-digit-bg-color);
      border-bottom: ${n}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*n}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${n}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${n*2}px);
      top: ${n}px;
      left: ${n*2}px;
    }
  `}
`,fh=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],yg=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Ag({digit:n=0,pixelSize:c=2,...f}){const r=yg[Number(n)].map((d,v)=>d?`${fh[v]} active`:fh[v]);return w.createElement(gg,{pixelSize:c,...f},r.map((d,v)=>w.createElement("span",{className:d,key:v})))}const Sg=N.div`
  ${Vt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,xg={sm:1,md:2,lg:3,xl:4},Eg=z.forwardRef(({value:n=0,minLength:c=3,size:f="md",...r},d)=>{const v=z.useMemo(()=>n.toString().padStart(c,"0").split(""),[c,n]);return w.createElement(Sg,{ref:d,...r},v.map((g,T)=>w.createElement(Ag,{digit:g,pixelSize:xg[f],key:T})))});Eg.displayName="Counter";const Ph=I`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${fe.md};
`,Tg=N(ul).attrs({"data-testid":"variant-default"})`
  ${Ph}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};
`,Dg=N.div.attrs({"data-testid":"variant-flat"})`
  ${Ra()}
  ${Ph}
  position: relative;
`,tp=I`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:n})=>n.canvasText};
  ${({disabled:n,variant:c})=>c!=="flat"&&n&&We()}
`,wg=N.input`
  ${tp}
  padding: 0 8px;
`,zg=N.textarea`
  ${tp}
  padding: 8px;
  resize: none;
  ${({variant:n})=>Jo(n)}
`,Io=z.forwardRef(({className:n,disabled:c=!1,fullWidth:f,onChange:r=Ma,shadow:d=!0,style:v,variant:g="default",...T},A)=>{const m=g==="flat"?Dg:Tg,M=z.useMemo(()=>{var D;return T.multiline?w.createElement(zg,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:A,variant:g,...T}):w.createElement(wg,{disabled:c,onChange:c?void 0:r,readOnly:c,ref:A,type:(D=T.type)!==null&&D!==void 0?D:"text",variant:g,...T})},[c,r,T,A,g]);return w.createElement(m,{className:n,fullWidth:f,$disabled:c,shadow:d,style:v},M)});Io.displayName="TextInput";const Og=N.div`
  display: inline-flex;
  align-items: center;
`,No=N(Du)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?I`
          height: calc(50% - 1px);
        `:I`
          height: 50%;
        `}
`,Rg=N.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?I`
          height: calc(${fe.md} - 4px);
        `:I`
          height: ${fe.md};
          margin-left: 2px;
        `}
`,sh=N.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?I`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:c})=>c.materialText};
        `:I`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:c})=>c.materialText};
        `}
  ${No}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?I`
            border-bottom-color: ${({theme:c})=>c.materialTextDisabled};
          `:I`
            border-top-color: ${({theme:c})=>c.materialTextDisabled};
          `}
  }
`,ep=z.forwardRef(({className:n,defaultValue:c,disabled:f=!1,max:r,min:d,onChange:v,readOnly:g,step:T=1,style:A,value:m,variant:M="default",width:D,...B},G)=>{const[Z,P]=Fl({defaultValue:c,onChange:v,readOnly:g,value:m}),q=z.useCallback(K=>{const lt=parseFloat(K.target.value);P(lt)},[P]),Q=z.useCallback(K=>{const lt=Da(parseFloat(((Z??0)+K).toFixed(2)),d??null,r??null);P(lt),v==null||v(lt)},[r,d,v,P,Z]),k=z.useCallback(()=>{Z!==void 0&&(v==null||v(Z))},[v,Z]),j=z.useCallback(()=>{Q(T)},[Q,T]),nt=z.useCallback(()=>{Q(-T)},[Q,T]),X=M==="flat"?"flat":"raised";return w.createElement(Og,{className:n,style:{...A,width:D!==void 0?Wl(D):"auto"},...B},w.createElement(Io,{value:Z,variant:M,onChange:q,disabled:f,type:"number",readOnly:g,ref:G,fullWidth:!0,onBlur:k}),w.createElement(Rg,{variant:M},w.createElement(No,{"data-testid":"increment",variant:X,disabled:f||g,onClick:j},w.createElement(sh,{invert:!0})),w.createElement(No,{"data-testid":"decrement",variant:X,disabled:f||g,onClick:nt},w.createElement(sh,null))))});ep.displayName="NumberInput";function Mg(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let c="";for(let f=0;f<10;f+=1)c+=n[Math.floor(Math.random()*n.length)];return c}const lp=n=>z.useMemo(()=>Mg(),[n]),ap=I`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,np=I`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,Po=N.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,_g=N.div`
  ${ap}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Po}:focus & {
    ${np}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,up=I`
  height: ${fe.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:c})=>n?We():c.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,Cg=N(ul)`
  ${up}
  background: ${({$disabled:n=!1,theme:c})=>n?c.material:c.canvas};
  &:focus {
    outline: 0;
  }
`,$g=N.div`
  ${Ra()}
  ${up}
  background: ${({$disabled:n=!1,theme:c})=>n?c.flatLight:c.canvas};
`,Bg=N.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${ap}
  cursor: pointer;
  &:disabled {
    ${We()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,ip=N(cc).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?I`
          height: 100%;
          margin-right: 0;
        `:I`
          height: 100%;
        `}
  ${({native:n=!1,variant:c="default"})=>n&&(c==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:n=!1,native:c=!1})=>n||c?"none":"auto"}
`,Hg=N.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:n=!1,theme:c})=>n?c.materialTextDisabled:c.materialText};
  ${({$disabled:n=!1,theme:c})=>n&&`
    filter: drop-shadow(1px 1px 0px ${c.materialTextDisabledShadow});
    border-top-color: ${c.materialTextDisabled};
    `}
  ${ip}:active & {
    margin-top: 2px;
  }
`,Ug=N.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:n})=>n.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Zo};
  ${({variant:n="default"})=>n==="flat"?I`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:c})=>c.flatDark};
        `:I`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:c})=>c.borderDarkest};
        `}
  ${({variant:n="default"})=>Jo(n)}
`,Ng=N.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${fe.md} - 4px);
  line-height: calc(${fe.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?np:""}
  user-select: none;
`,kg=[],cp=({className:n,defaultValue:c,disabled:f,native:r,onChange:d,options:v=kg,readOnly:g,style:T,value:A,variant:m,width:M})=>{var D;const B=z.useMemo(()=>v.filter(Boolean),[v]),[G,Z]=Fl({defaultValue:c??((D=B==null?void 0:B[0])===null||D===void 0?void 0:D.value),onChange:d,readOnly:g,value:A}),P=!(f||g),q=z.useMemo(()=>({className:n,style:{...T,width:M}}),[n,T,M]),Q=z.useMemo(()=>w.createElement(ip,{as:"div","data-testid":"select-button",$disabled:f,native:r,tabIndex:-1,variant:m==="flat"?"flat":"raised"},w.createElement(Hg,{"data-testid":"select-icon",$disabled:f})),[f,r,m]),k=z.useMemo(()=>m==="flat"?$g:Cg,[m]);return z.useMemo(()=>({isEnabled:P,options:B,value:G,setValue:Z,wrapperProps:q,DropdownButton:Q,Wrapper:k}),[Q,k,P,B,Z,G,q])},Lg={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Qg=1e3,qg=({onBlur:n,onChange:c,onClose:f,onFocus:r,onKeyDown:d,onMouseDown:v,onOpen:g,open:T,options:A,readOnly:m,value:M,selectRef:D,setValue:B,wrapperRef:G})=>{const Z=z.useRef(null),P=z.useRef([]),q=z.useRef(0),Q=z.useRef(0),k=z.useRef(),j=z.useRef("search"),nt=z.useRef(""),X=z.useRef(),[K,lt]=Fl({defaultValue:!1,onChange:g,onChangePropName:"onOpen",readOnly:m,value:T,valuePropName:"open"}),Ot=z.useMemo(()=>{const C=A.findIndex(et=>et.value===M);return q.current=Da(C,0,null),A[C]},[A,M]),[F,ht]=z.useState(A[0]),Rt=z.useCallback(C=>{const et=Z.current,dt=P.current[C];if(!dt||!et){k.current=C;return}k.current=void 0;const gt=et.clientHeight,Dt=et.scrollTop,Yt=et.scrollTop+gt,Lt=dt.offsetTop,It=dt.offsetHeight,Ae=dt.offsetTop+dt.offsetHeight;Lt<Dt&&et.scrollTo(0,Lt),Ae>Yt&&et.scrollTo(0,Lt-gt+It),dt.focus({preventScroll:!0})},[Z]),Tt=z.useCallback((C,{scroll:et}={})=>{var dt;const gt=A.length-1;let Dt;switch(C){case"first":{Dt=0;break}case"last":{Dt=gt;break}case"next":{Dt=Da(Q.current+1,0,gt);break}case"previous":{Dt=Da(Q.current-1,0,gt);break}case"selected":{Dt=Da((dt=q.current)!==null&&dt!==void 0?dt:0,0,gt);break}default:Dt=C}Q.current=Dt,ht(A[Dt]),et&&Rt(Dt)},[Q,A,Rt]),Bt=z.useCallback(({fromEvent:C})=>{lt(!0),Tt("selected",{scroll:!0}),g==null||g({fromEvent:C})},[Tt,g,lt]),_t=z.useCallback(()=>{j.current="search",nt.current="",clearTimeout(X.current)},[]),St=z.useCallback(({focusSelect:C,fromEvent:et})=>{var dt;f==null||f({fromEvent:et}),lt(!1),ht(A[0]),_t(),k.current=void 0,C&&((dt=D.current)===null||dt===void 0||dt.focus())},[_t,f,A,D,lt]),Y=z.useCallback(({fromEvent:C})=>{K?St({focusSelect:!1,fromEvent:C}):Bt({fromEvent:C})},[St,Bt,K]),it=z.useCallback((C,{fromEvent:et})=>{q.current!==C&&(q.current=C,B(A[C].value),c==null||c(A[C],{fromEvent:et}))},[c,A,B]),V=z.useCallback(({focusSelect:C,fromEvent:et})=>{it(Q.current,{fromEvent:et}),St({focusSelect:C,fromEvent:et})},[St,it]),rt=z.useCallback((C,{fromEvent:et,select:dt})=>{var gt;switch(j.current==="cycleFirstLetter"&&C!==nt.current&&(j.current="search"),C===nt.current?j.current="cycleFirstLetter":nt.current+=C,j.current){case"search":{let Dt=A.findIndex(Yt=>{var Lt;return((Lt=Yt.label)===null||Lt===void 0?void 0:Lt.toLocaleUpperCase().indexOf(nt.current))===0});Dt<0&&(Dt=A.findIndex(Yt=>{var Lt;return((Lt=Yt.label)===null||Lt===void 0?void 0:Lt.toLocaleUpperCase().indexOf(C))===0}),nt.current=C),Dt>=0&&(dt?it(Dt,{fromEvent:et}):Tt(Dt,{scroll:!0}));break}case"cycleFirstLetter":{const Dt=dt?(gt=q.current)!==null&&gt!==void 0?gt:-1:Q.current;let Yt=A.findIndex((Lt,It)=>{var Ae;return It>Dt&&((Ae=Lt.label)===null||Ae===void 0?void 0:Ae.toLocaleUpperCase().indexOf(C))===0});Yt<0&&(Yt=A.findIndex(Lt=>{var It;return((It=Lt.label)===null||It===void 0?void 0:It.toLocaleUpperCase().indexOf(C))===0})),Yt>=0&&(dt?it(Yt,{fromEvent:et}):Tt(Yt,{scroll:!0}));break}}clearTimeout(X.current),X.current=setTimeout(()=>{j.current==="search"&&(nt.current="")},Qg)},[Tt,A,it]),p=z.useCallback(C=>{var et;C.button===0&&(C.preventDefault(),(et=D.current)===null||et===void 0||et.focus(),Y({fromEvent:C}),v==null||v(C))},[v,D,Y]),$=z.useCallback(C=>{V({focusSelect:!0,fromEvent:C})},[V]),W=z.useCallback(C=>{const{altKey:et,code:dt,ctrlKey:gt,metaKey:Dt,shiftKey:Yt}=C,{ARROW_DOWN:Lt,ARROW_UP:It,END:Ae,ENTER:Re,ESC:Me,HOME:Il,SPACE:Pl,TAB:ta}=Lg,zu=et||gt||Dt||Yt;if(!(dt===ta&&(et||gt||Dt)||dt!==ta&&zu))switch(dt){case Lt:{if(C.preventDefault(),!K){Bt({fromEvent:C});return}Tt("next",{scroll:!0});break}case It:{if(C.preventDefault(),!K){Bt({fromEvent:C});return}Tt("previous",{scroll:!0});break}case Ae:{if(C.preventDefault(),!K){Bt({fromEvent:C});return}Tt("last",{scroll:!0});break}case Re:{if(!K)return;C.preventDefault(),V({focusSelect:!0,fromEvent:C});break}case Me:{if(!K)return;C.preventDefault(),St({focusSelect:!0,fromEvent:C});break}case Il:{if(C.preventDefault(),!K){Bt({fromEvent:C});return}Tt("first",{scroll:!0});break}case Pl:{C.preventDefault(),K?V({focusSelect:!0,fromEvent:C}):Bt({fromEvent:C});break}case ta:{if(!K)return;Yt||C.preventDefault(),V({focusSelect:!Yt,fromEvent:C});break}default:!zu&&dt.match(/^Key/)&&(C.preventDefault(),C.stopPropagation(),rt(dt.replace(/^Key/,""),{select:!K,fromEvent:C}))}},[Tt,St,K,Bt,rt,V]),L=z.useCallback(C=>{W(C),d==null||d(C)},[W,d]),H=z.useCallback(C=>{Tt(C)},[Tt]),tt=z.useCallback(C=>{K||(_t(),n==null||n(C))},[_t,n,K]),J=z.useCallback(C=>{_t(),r==null||r(C)},[_t,r]),ot=z.useCallback(C=>{Z.current=C,k.current!==void 0&&Rt(k.current)},[Rt]),st=z.useCallback((C,et)=>{P.current[et]=C,k.current===et&&Rt(k.current)},[Rt]);return z.useEffect(()=>{if(!K)return()=>{};const C=et=>{var dt;const gt=et.target;!((dt=G.current)===null||dt===void 0)&&dt.contains(gt)||(et.preventDefault(),St({focusSelect:!1,fromEvent:et}))};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[St,K,G]),z.useMemo(()=>({activeOption:F,handleActivateOptionIndex:H,handleBlur:tt,handleButtonKeyDown:L,handleDropdownKeyDown:W,handleFocus:J,handleMouseDown:p,handleOptionClick:$,handleSetDropdownRef:ot,handleSetOptionRef:st,open:K,selectedOption:Ot}),[F,H,tt,L,J,W,p,$,ot,st,K,Ot])},Yg=z.forwardRef(({className:n,defaultValue:c,disabled:f,onChange:r,options:d,readOnly:v,style:g,value:T,variant:A,width:m,...M},D)=>{const{isEnabled:B,options:G,setValue:Z,value:P,DropdownButton:q,Wrapper:Q}=cp({defaultValue:c,disabled:f,native:!0,onChange:r,options:d,readOnly:v,value:T,variant:A}),k=z.useCallback(j=>{const nt=G.find(X=>X.value===j.target.value);nt&&(Z(nt.value),r==null||r(nt,{fromEvent:j}))},[r,G,Z]);return w.createElement(Q,{className:n,style:{...g,width:m}},w.createElement(Po,null,w.createElement(Bg,{...M,disabled:f,onChange:B?k:Ma,ref:D,value:P},G.map((j,nt)=>{var X;return w.createElement("option",{key:`${j.value}-${nt}`,value:j.value},(X=j.label)!==null&&X!==void 0?X:j.value)})),q))});Yg.displayName="SelectNative";function Gg({activateOptionIndex:n,active:c,index:f,onClick:r,option:d,selected:v,setRef:g}){const T=z.useCallback(()=>{n(f)},[n,f]),A=z.useCallback(M=>{g(M,f)},[f,g]),m=lp();return w.createElement(Ng,{active:c,"aria-selected":v?"true":void 0,"data-value":d.value,id:m,onClick:r,onMouseEnter:T,ref:A,role:"option",tabIndex:0},d.label)}function jg({"aria-label":n,"aria-labelledby":c,className:f,defaultValue:r,disabled:d=!1,formatDisplay:v,inputProps:g,labelId:T,menuMaxHeight:A,name:m,onBlur:M,onChange:D,onClose:B,onFocus:G,onKeyDown:Z,onMouseDown:P,onOpen:q,open:Q,options:k,readOnly:j,shadow:nt=!0,style:X,variant:K="default",value:lt,width:Ot="auto",...F},ht){const{isEnabled:Rt,options:Tt,setValue:Bt,value:_t,wrapperProps:St,DropdownButton:Y,Wrapper:it}=cp({className:f,defaultValue:r,disabled:d,native:!1,onChange:D,options:k,style:X,readOnly:j,value:lt,variant:K,width:Ot}),V=z.useRef(null),rt=z.useRef(null),p=z.useRef(null),{activeOption:$,handleActivateOptionIndex:W,handleBlur:L,handleButtonKeyDown:H,handleDropdownKeyDown:tt,handleFocus:J,handleMouseDown:ot,handleOptionClick:st,handleSetDropdownRef:C,handleSetOptionRef:et,open:dt,selectedOption:gt}=qg({onBlur:M,onChange:D,onClose:B,onFocus:G,onKeyDown:Z,onMouseDown:P,onOpen:q,open:Q,options:Tt,value:_t,selectRef:rt,setValue:Bt,wrapperRef:p});z.useImperativeHandle(ht,()=>({focus:Re=>{var Me;(Me=rt.current)===null||Me===void 0||Me.focus(Re)},node:V.current,value:String(_t)}),[_t]);const Dt=z.useMemo(()=>gt?typeof v=="function"?v(gt):gt.label:"",[v,gt]),Yt=Rt?1:void 0,Lt=z.useMemo(()=>A?{overflow:"auto",maxHeight:A}:void 0,[A]),It=lp(),Ae=z.useMemo(()=>Tt.map((Re,Me)=>{const Il=`${_t}-${Me}`,Pl=Re===$,ta=Re===gt;return w.createElement(Gg,{activateOptionIndex:W,active:Pl,index:Me,key:Il,onClick:st,option:Re,selected:ta,setRef:et})}),[$,W,st,et,Tt,gt,_t]);return w.createElement(it,{...St,$disabled:d,ref:p,shadow:nt,style:{...X,width:Ot}},w.createElement("input",{name:m,ref:V,type:"hidden",value:String(_t),...g}),w.createElement(Po,{"aria-disabled":d,"aria-expanded":dt,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":c??T,"aria-owns":Rt&&dt?It:void 0,onBlur:L,onFocus:J,onKeyDown:H,onMouseDown:Rt?ot:P,ref:rt,role:"button",tabIndex:Yt,...F},w.createElement(_g,null,Dt),Y),Rt&&dt&&w.createElement(Ug,{id:It,onKeyDown:tt,ref:C,role:"listbox",style:Lt,tabIndex:0,variant:K},Ae))}const rp=z.forwardRef(jg);rp.displayName="Select";const Xg=N.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,ko=z.forwardRef(function({children:c,noPadding:f=!1,...r},d){return w.createElement(Xg,{noPadding:f,ref:d,...r},c)});ko.displayName="Toolbar";const Vg=N.div`
  padding: 16px;
`,tf=z.forwardRef(function({children:c,...f},r){return w.createElement(Vg,{ref:r,...f},c)});tf.displayName="WindowContent";const Zg=N.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?I`
          background: ${({theme:c})=>c.headerNotActiveBackground};
          color: ${({theme:c})=>c.headerNotActiveText};
        `:I`
          background: ${({theme:c})=>c.headerBackground};
          color: ${({theme:c})=>c.headerText};
        `}

  ${cc} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,ef=z.forwardRef(function({active:c=!0,children:f,...r},d){return w.createElement(Zg,{active:c,ref:d,...r},f)});ef.displayName="WindowHeader";const Kg=N.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Vt({style:"window"})}
  ${Fe()}
`,Jg=N.span`
  ${({theme:n})=>I`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${n.borderLightest} 16.67%,
      ${n.material} 16.67%,
      ${n.material} 33.33%,
      ${n.borderDark} 33.33%,
      ${n.borderDark} 50%,
      ${n.borderLightest} 50%,
      ${n.borderLightest} 66.67%,
      ${n.material} 66.67%,
      ${n.material} 83.33%,
      ${n.borderDark} 83.33%,
      ${n.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,lf=z.forwardRef(({children:n,resizable:c=!1,resizeRef:f,shadow:r=!0,...d},v)=>w.createElement(Kg,{ref:v,shadow:r,...d},n,c&&w.createElement(Jg,{"data-testid":"resizeHandle",ref:f})));lf.displayName="Window";const Wg=N(Jh)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,Fg=N.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,Ig=N.div`
  display: flex;
  flex-wrap: wrap;
`,El=N.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Pg=N.span`
  cursor: pointer;

  background: ${({active:n,theme:c})=>n?c.hoverBackground:"transparent"};
  color: ${({active:n,theme:c})=>n?c.canvasTextInvert:c.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:c})=>c?"none":n.materialDark};
  }
`,ty=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function ey(n,c){return new Date(n,c+1,0).getDate()}function ly(n,c,f){return new Date(n,c,f).getDay()}function ay(n){const c=new Date(Date.parse(n)),f=c.getUTCDate(),r=c.getUTCMonth(),d=c.getUTCFullYear();return{day:f,month:r,year:d}}const ny=z.forwardRef(({className:n,date:c=new Date().toISOString(),onAccept:f,onCancel:r,shadow:d=!0},v)=>{const[g,T]=z.useState(()=>ay(c)),{year:A,month:m,day:M}=g,D=z.useCallback(({value:q})=>{T(Q=>({...Q,month:q}))},[]),B=z.useCallback(q=>{T(Q=>({...Q,year:q}))},[]),G=z.useCallback(q=>{T(Q=>({...Q,day:q}))},[]),Z=z.useCallback(()=>{const q=[g.year,g.month+1,g.day].map(Q=>String(Q).padStart(2,"0")).join("-");f==null||f(q)},[g.day,g.month,g.year,f]),P=z.useMemo(()=>{const q=Array.from({length:42}),Q=ly(A,m,1);let k=M;const j=ey(A,m);return k=k<j?k:j,q.forEach((nt,X)=>{if(X>=Q&&X<j+Q){const K=X-Q+1;q[X]=w.createElement(El,{key:X,onClick:()=>{G(K)}},w.createElement(Pg,{active:K===k},K))}else q[X]=w.createElement(El,{key:X})}),q},[M,G,m,A]);return w.createElement(lf,{className:n,ref:v,shadow:d,style:{margin:20}},w.createElement(ef,null,w.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),w.createElement(tf,null,w.createElement(ko,{noPadding:!0,style:{justifyContent:"space-between"}},w.createElement(rp,{options:ty,value:m,onChange:D,width:128,menuMaxHeight:200}),w.createElement(ep,{value:A,onChange:B,width:100})),w.createElement(Wg,null,w.createElement(Fg,null,w.createElement(El,null,"S"),w.createElement(El,null,"M"),w.createElement(El,null,"T"),w.createElement(El,null,"W"),w.createElement(El,null,"T"),w.createElement(El,null,"F"),w.createElement(El,null,"S")),w.createElement(Ig,null,P)),w.createElement(ko,{noPadding:!0,style:{justifyContent:"space-between"}},w.createElement(Du,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),w.createElement(Du,{fullWidth:!0,onClick:f?Z:void 0,disabled:!f},"OK"))))});ny.displayName="DatePicker";const uy=n=>{switch(n){case"status":case"well":return I`
        ${Vt({style:"status"})}
      `;case"window":case"outside":return I`
        ${Vt({style:"window"})}
      `;case"field":return I`
        ${Vt({style:"field"})}
      `;default:return I`
        ${Vt()}
      `}},iy=N.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>uy(n)}
  ${({variant:n})=>Fe(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,op=z.forwardRef(({children:n,shadow:c=!1,variant:f="window",...r},d)=>w.createElement(iy,{ref:d,shadow:c,variant:f,...r},n));op.displayName="Frame";const cy=N.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:c})=>c==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&I`
      box-shadow: -1px -1px 0 1px ${({theme:c})=>c.borderDark},
        inset -1px -1px 0 1px ${({theme:c})=>c.borderDark};
    `}
  ${n=>n.$disabled&&We()}
`,ry=N.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:c})=>c==="flat"?n.canvas:n.material};
`,oy=z.forwardRef(({label:n,disabled:c=!1,variant:f="default",children:r,...d},v)=>w.createElement(cy,{"aria-disabled":c,$disabled:c,variant:f,ref:v,...d},n&&w.createElement(ry,{variant:f},n),r));oy.displayName="GroupBox";const fy=N.div`
  ${({theme:n,size:c="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Wl(c)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;fy.displayName="Handle";const sy="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",dy=N.div`
  display: inline-block;
  height: ${({size:n})=>Wl(n)};
  width: ${({size:n})=>Wl(n)};
`,hy=N.span`
  display: block;
  background: ${sy};
  background-size: cover;
  width: 100%;
  height: 100%;
`,py=z.forwardRef(({size:n=30,...c},f)=>w.createElement(dy,{size:n,ref:f,...c},w.createElement(hy,null)));py.displayName="Hourglass";const my=N.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,vy=N.div`
  position: relative;
`,by=N.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:n})=>n.material};
  border-top: 4px solid ${({theme:n})=>n.borderLightest};
  border-left: 4px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 4px solid ${({theme:n})=>n.borderDark};
  border-right: 4px solid ${({theme:n})=>n.borderDark};

  outline: 1px dotted ${({theme:n})=>n.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:n})=>n.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:n})=>n.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,gy=N(ul).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,yy=N.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:n})=>n.material};
  border-left: 2px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 2px solid ${({theme:n})=>n.borderDarkest};
  border-right: 2px solid ${({theme:n})=>n.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:n})=>n.material};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:n})=>n.material};
    border: 2px solid ${({theme:n})=>n.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:n})=>n.borderLightest},
      1px 1px 0 1px ${({theme:n})=>n.borderDarkest};
  }
`,Ay=z.forwardRef(({backgroundStyles:n,children:c,...f},r)=>w.createElement(my,{ref:r,...f},w.createElement(vy,null,w.createElement(by,null,w.createElement(gy,{style:n},c)),w.createElement(yy,null))));Ay.displayName="Monitor";const Sy=N.div`
  display: inline-block;
  height: ${fe.md};
  width: 100%;
`,xy=N(ul)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,fp=I`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Ey=N.div`
  position: relative;
  top: 4px;
  ${fp}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,Ty=N.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${fp}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Dy=N.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,sp=17,wy=N.span`
  display: inline-block;
  width: ${sp}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,zy=z.forwardRef(({hideValue:n=!1,shadow:c=!0,value:f,variant:r="default",...d},v)=>{const g=n?null:`${f}%`,T=z.useRef(null),[A,m]=z.useState([]),M=z.useCallback(()=>{if(!T.current||f===void 0)return;const D=T.current.getBoundingClientRect().width,B=Math.round(f/100*D/sp);m(Array.from({length:B}))},[f]);return z.useEffect(()=>(M(),window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)),[M]),w.createElement(Sy,{"aria-valuenow":f!==void 0?Math.round(f):void 0,ref:v,role:"progressbar",variant:r,...d},w.createElement(xy,{variant:r,shadow:c},r==="default"?w.createElement(w.Fragment,null,w.createElement(Ey,{"data-testid":"defaultProgress1"},g),w.createElement(Ty,{"data-testid":"defaultProgress2",value:f},g)):w.createElement(Dy,{ref:T,"data-testid":"tileProgress"},A.map((D,B)=>w.createElement(wy,{key:B})))))});zy.displayName="ProgressBar";const dp=I`
  width: ${nl}px;
  height: ${nl}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Oy=N(ul)`
  ${dp}
  background: ${({$disabled:n,theme:c})=>n?c.material:c.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,Ry=N.div`
  ${Ra()}
  ${dp}
  outline: none;
  background: ${({$disabled:n,theme:c})=>n?c.flatLight:c.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:n})=>n.flatDark};
    border-radius: 50%;
  }
`,My=N.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
`,_y={flat:Ry,default:Oy},Cy=z.forwardRef(({checked:n,className:c="",disabled:f=!1,label:r="",onChange:d,style:v={},variant:g="default",...T},A)=>{const m=_y[g];return w.createElement(Wo,{$disabled:f,className:c,style:v},w.createElement(m,{$disabled:f,role:"presentation"},n&&w.createElement(My,{$disabled:f,variant:g})),w.createElement(Pi,{disabled:f,onChange:f?void 0:d,readOnly:f,type:"radio",checked:n,ref:A,...T}),r&&w.createElement(Fo,null,r))});Cy.displayName="Radio";const $y=typeof window<"u"?z.useLayoutEffect:z.useEffect;function Ea(n){const c=z.useRef(n);return $y(()=>{c.current=n}),z.useCallback((...f)=>(0,c.current)(...f),[])}function dh(n,c){typeof n=="function"?n(c):n&&(n.current=c)}function hh(n,c){return z.useMemo(()=>n==null&&c==null?null:f=>{dh(n,f),dh(c,f)},[n,c])}var By=xh();let rc=!0,Lo=!1,ph;const Hy={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Uy(n){if("type"in n){const{type:c,tagName:f}=n;if(f==="INPUT"&&Hy[c]&&!n.readOnly||f==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function Ny(n){n.metaKey||n.altKey||n.ctrlKey||(rc=!0)}function Do(){rc=!1}function ky(){this.visibilityState==="hidden"&&Lo&&(rc=!0)}function Ly(n){n.addEventListener("keydown",Ny,!0),n.addEventListener("mousedown",Do,!0),n.addEventListener("pointerdown",Do,!0),n.addEventListener("touchstart",Do,!0),n.addEventListener("visibilitychange",ky,!0)}function Qy(n){const{target:c}=n;try{return c.matches(":focus-visible")}catch{}return rc||Uy(c)}function qy(){Lo=!0,window.clearTimeout(ph),ph=window.setTimeout(()=>{Lo=!1},100)}function Yy(){const n=z.useCallback(c=>{const f=By.findDOMNode(c);f!=null&&Ly(f.ownerDocument)},[]);return{isFocusVisible:Qy,onBlurVisible:qy,ref:n}}function Gy(n,c,f){return(f-c)*n+c}function Yi(n,c){if(c!==void 0&&"changedTouches"in n){for(let f=0;f<n.changedTouches.length;f+=1){const r=n.changedTouches[f];if(r.identifier===c)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Gi(n){return n&&n.ownerDocument||document}function jy(n,c){var f;const{index:r}=(f=n.reduce((d,v,g)=>{const T=Math.abs(c-v);return d===null||T<d.distance||T===d.distance?{distance:T,index:g}:d},null))!==null&&f!==void 0?f:{};return r??-1}const Xy=N.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:n})=>n?"41px":"39px"};
    ${({isFocused:n,theme:c})=>n&&`
        outline: 2px dotted ${c.materialText};
        `}
  }

  ${({orientation:n,size:c})=>n==="vertical"?I`
          height: ${c};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:f})=>f?"41px":"39px"};
          }
        `:I`
          width: ${c};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:f})=>f?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
`,hp=()=>I`
  position: absolute;
  ${({orientation:n})=>n==="vertical"?I`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:I`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,Vy=N(ul)`
  ${hp()}
`,Zy=N(ul)`
  ${hp()}

  border-left-color: ${({theme:n})=>n.flatLight};
  border-top-color: ${({theme:n})=>n.flatLight};
  border-right-color: ${({theme:n})=>n.canvas};
  border-bottom-color: ${({theme:n})=>n.canvas};
  &:before {
    border-left-color: ${({theme:n})=>n.flatDark};
    border-top-color: ${({theme:n})=>n.flatDark};
    border-right-color: ${({theme:n})=>n.flatLight};
    border-bottom-color: ${({theme:n})=>n.flatLight};
  }
`,Ky=N.span`
  position: relative;
  ${({orientation:n})=>n==="vertical"?I`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:I`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:n})=>n==="flat"?I`
          ${Ra()}
          outline: 2px solid ${({theme:c})=>c.flatDark};
          background: ${({theme:c})=>c.flatLight};
        `:I`
          ${Fe()}
          ${Vt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:c})=>n&&wu({mainColor:c.material,secondaryColor:c.borderLightest})}
`,tc=6,Jy=N.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?I`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${tc}px;
          border-bottom: 2px solid ${({theme:c})=>c.materialText};
        `:I`
          bottom: ${-6}px;
          height: ${tc}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:c})=>c.materialText};
          border-right: 1px solid ${({theme:c})=>c.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:c})=>n&&I`
      ${We()}
      box-shadow: 1px 1px 0px ${c.materialTextDisabledShadow};
      border-color: ${c.materialTextDisabled};
    `}
`,Wy=N.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?I`
          transform: translate(${tc+2}px, ${tc+1}px);
        `:I`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Fy=z.forwardRef(({defaultValue:n,disabled:c=!1,marks:f=!1,max:r=100,min:d=0,name:v,onChange:g,onChangeCommitted:T,onMouseDown:A,orientation:m="horizontal",size:M="100%",step:D=1,value:B,variant:G="default",...Z},P)=>{const q=G==="flat"?Zy:Vy,Q=m==="vertical",[k=d,j]=Fl({defaultValue:n,onChange:g??T,value:B}),{isFocusVisible:nt,onBlurVisible:X,ref:K}=Yy(),[lt,Ot]=z.useState(!1),F=z.useRef(),ht=z.useRef(null),Rt=hh(K,F),Tt=hh(P,Rt),Bt=Ea(L=>{nt(L)&&Ot(!0)}),_t=Ea(()=>{lt!==!1&&(Ot(!1),X())}),St=z.useRef(),Y=z.useMemo(()=>f===!0&&Number.isFinite(D)?[...Array(Math.round((r-d)/D)+1)].map((L,H)=>({label:void 0,value:d+D*H})):Array.isArray(f)?f:[],[f,r,d,D]),it=Ea(L=>{const H=(r-d)/10,tt=Y.map(st=>st.value),J=tt.indexOf(k);let ot=0;switch(L.key){case"Home":ot=d;break;case"End":ot=r;break;case"PageUp":D&&(ot=k+H);break;case"PageDown":D&&(ot=k-H);break;case"ArrowRight":case"ArrowUp":D?ot=k+D:ot=tt[J+1]||tt[tt.length-1];break;case"ArrowLeft":case"ArrowDown":D?ot=k-D:ot=tt[J-1]||tt[0];break;default:return}L.preventDefault(),D&&(ot=oh(ot,D,d)),ot=Da(ot,d,r),j(ot),Ot(!0),g==null||g(ot),T==null||T(ot)}),V=z.useCallback(L=>{if(!F.current)return 0;const H=F.current.getBoundingClientRect();let tt;Q?tt=(H.bottom-L.y)/H.height:tt=(L.x-H.left)/H.width;let J;if(J=Gy(tt,d,r),D)J=oh(J,D,d);else{const ot=Y.map(C=>C.value),st=jy(ot,J);J=ot[st]}return J=Da(J,d,r),J},[Y,r,d,D,Q]),rt=Ea(L=>{var H;const tt=Yi(L,St.current);if(!tt)return;const J=V(tt);(H=ht.current)===null||H===void 0||H.focus(),j(J),Ot(!0),g==null||g(J)}),p=Ea(L=>{const H=Yi(L,St.current);if(!H)return;const tt=V(H);T==null||T(tt),St.current=void 0;const J=Gi(F.current);J.removeEventListener("mousemove",rt),J.removeEventListener("mouseup",p),J.removeEventListener("touchmove",rt),J.removeEventListener("touchend",p)}),$=Ea(L=>{var H;A==null||A(L),L.preventDefault(),(H=ht.current)===null||H===void 0||H.focus(),Ot(!0);const tt=Yi(L,St.current);if(tt){const ot=V(tt);j(ot),g==null||g(ot)}const J=Gi(F.current);J.addEventListener("mousemove",rt),J.addEventListener("mouseup",p)}),W=Ea(L=>{var H;L.preventDefault();const tt=L.changedTouches[0];tt!=null&&(St.current=tt.identifier),(H=ht.current)===null||H===void 0||H.focus(),Ot(!0);const J=Yi(L,St.current);if(J){const st=V(J);j(st),g==null||g(st)}const ot=Gi(F.current);ot.addEventListener("touchmove",rt),ot.addEventListener("touchend",p)});return z.useEffect(()=>{const{current:L}=F;L==null||L.addEventListener("touchstart",W);const H=Gi(L);return()=>{L==null||L.removeEventListener("touchstart",W),H.removeEventListener("mousemove",rt),H.removeEventListener("mouseup",p),H.removeEventListener("touchmove",rt),H.removeEventListener("touchend",p)}},[p,rt,W]),w.createElement(Xy,{$disabled:c,hasMarks:!!Y.length,isFocused:lt,onMouseDown:$,orientation:m,ref:Tt,size:Wl(M),...Z},w.createElement("input",{disabled:c,name:v,type:"hidden",value:k??0}),Y&&Y.map(L=>w.createElement(Jy,{$disabled:c,"data-testid":"tick",key:L.value/(r-d)*100,orientation:m,style:{[Q?"bottom":"left"]:`${(L.value-d)/(r-d)*100}%`}},L.label&&w.createElement(Wy,{"aria-hidden":!0,"data-testid":"mark",orientation:m},L.label))),w.createElement(q,{orientation:m,variant:G}),w.createElement(Ky,{$disabled:c,"aria-disabled":c?!0:void 0,"aria-orientation":m,"aria-valuemax":r,"aria-valuemin":d,"aria-valuenow":k,onBlur:_t,onFocus:Bt,onKeyDown:it,orientation:m,ref:ht,role:"slider",style:{[Q?"bottom":"left"]:`${(Q?-100:0)+100*(k-d)/(r-d)}%`},tabIndex:c?void 0:0,variant:G}))});Fy.displayName="Slider";const Iy=N.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${Ko};
  overflow-y: auto;
`,Py=z.forwardRef(function({children:c,...f},r){return w.createElement(Iy,{ref:r,...f},c)});Py.displayName="TableBody";const t1=N.td`
  padding: 0 8px;
`,e1=z.forwardRef(function({children:c,...f},r){return w.createElement(t1,{ref:r,...f},c)});e1.displayName="TableDataCell";const l1=N.thead`
  display: table-header-group;
`,a1=z.forwardRef(function({children:c,...f},r){return w.createElement(l1,{ref:r,...f},c)});a1.displayName="TableHead";const n1=N.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:n})=>n.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Vt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:n})=>!n&&I`
      &:active {
        &:before {
          ${Vt({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:n})=>n.materialText};
  ${({$disabled:n})=>n&&We()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&We()}
  }
`,u1=z.forwardRef(function({disabled:c=!1,children:f,onClick:r,onTouchStart:d=Ma,sort:v,...g},T){const A=v==="asc"?"ascending":v==="desc"?"descending":void 0;return w.createElement(n1,{$disabled:c,"aria-disabled":c,"aria-sort":A,onClick:c?void 0:r,onTouchStart:c?void 0:d,ref:T,...g},w.createElement("div",null,f))});u1.displayName="TableHeadCell";const i1=N.tr`
  color: inherit;
  display: table-row;
  height: calc(${fe.md} - 2px);
  line-height: calc(${fe.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:n})=>n.canvasText};
  &:hover {
    background: ${({theme:n})=>n.hoverBackground};
    color: ${({theme:n})=>n.canvasTextInvert};
  }
`,c1=z.forwardRef(function({children:c,...f},r){return w.createElement(i1,{ref:r,...f},c)});c1.displayName="TableRow";const r1=N.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,o1=N(ul)`
  &:before {
    box-shadow: none;
  }
`,f1=z.forwardRef(({children:n,...c},f)=>w.createElement(o1,null,w.createElement(r1,{ref:f,...c},n)));f1.displayName="Table";const s1=N.button`
  ${Fe()}
  ${Vt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${fe.md};
  line-height: ${fe.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${An}
    outline-offset: -6px;
  }
  ${n=>n.selected&&`
    z-index: 1;
    height: calc(${fe.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:n})=>n.material};
    bottom: -4px;
    left: 2px;
  }
`,d1=z.forwardRef(({value:n,onClick:c,selected:f=!1,children:r,...d},v)=>w.createElement(s1,{"aria-selected":f,selected:f,onClick:g=>c==null?void 0:c(n,g),ref:v,role:"tab",...d},r));d1.displayName="Tab";const h1=N.div`
  ${Fe()}
  ${Vt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,p1=z.forwardRef(({children:n,...c},f)=>w.createElement(h1,{ref:f,...c},n));p1.displayName="TabBody";const m1=N.div`
  position: relative;
  ${({isMultiRow:n,theme:c})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${c.borderDark};
  }
  `}
`,v1=N.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
  }
`;function b1(n,c){const f=[];for(let r=c;r>0;r-=1)f.push(n.splice(0,Math.ceil(n.length/r)));return f}const g1=z.forwardRef(({value:n,onChange:c=Ma,children:f,rows:r=1,...d},v)=>{const g=z.useMemo(()=>{var T;const A=(T=w.Children.map(f,D=>{if(!w.isValidElement(D))return null;const B={selected:D.props.value===n,onClick:c};return w.cloneElement(D,B)}))!==null&&T!==void 0?T:[],m=b1(A,r).map((D,B)=>({key:B,tabs:D})),M=m.findIndex(D=>D.tabs.some(B=>B.props.selected));return m.push(m.splice(M,1)[0]),m},[f,c,r,n]);return w.createElement(m1,{...d,isMultiRow:r>1,role:"tablist",ref:v},g.map(T=>w.createElement(v1,{key:T.key},T.tabs)))});g1.displayName="Tabs";const y1=["blur","focus"],A1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function mh(n){return"nativeEvent"in n&&y1.includes(n.type)}function vh(n){return"nativeEvent"in n&&A1.includes(n.type)}const S1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},x1=N.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${Zo};
  text-align: center;
  font-size: 1rem;
  ${n=>S1[n.position]}
`,E1=N.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,T1=z.forwardRef(({className:n,children:c,disableFocusListener:f=!1,disableMouseListener:r=!1,enterDelay:d=1e3,leaveDelay:v=0,onBlur:g,onClose:T,onFocus:A,onMouseEnter:m,onMouseLeave:M,onOpen:D,style:B,text:G,position:Z="top",...P},q)=>{const[Q,k]=z.useState(!1),[j,nt]=z.useState(),[X,K]=z.useState(),lt=!f,Ot=!r,F=V=>{window.clearTimeout(j),window.clearTimeout(X);const rt=window.setTimeout(()=>{k(!0),D==null||D(V)},d);nt(rt)},ht=V=>{V.persist(),mh(V)?A==null||A(V):vh(V)&&(m==null||m(V)),F(V)},Rt=V=>{window.clearTimeout(j),window.clearTimeout(X);const rt=window.setTimeout(()=>{k(!1),T==null||T(V)},v);K(rt)},Tt=V=>{V.persist(),mh(V)?g==null||g(V):vh(V)&&(M==null||M(V)),Rt(V)},Bt=lt?Tt:void 0,_t=lt?ht:void 0,St=Ot?ht:void 0,Y=Ot?Tt:void 0,it=lt?0:void 0;return w.createElement(E1,{"data-testid":"tooltip-wrapper",onBlur:Bt,onFocus:_t,onMouseEnter:St,onMouseLeave:Y,tabIndex:it},w.createElement(x1,{className:n,"data-testid":"tooltip",position:Z,ref:q,show:Q,style:B,...P},G),c)});T1.displayName="Tooltip";const Qo=N(Fo)`
  white-space: nowrap;
`,pp=I`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":I`
          cursor: pointer;

          :focus {
            ${Qo} {
              background: ${({theme:c})=>c.hoverBackground};
              color: ${({theme:c})=>c.materialTextInvert};
              outline: 2px dotted ${({theme:c})=>c.focusSecondary};
            }
          }
        `}
`,D1=N.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:n})=>n&&I`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:c})=>c.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:n})=>n.borderDark};
      font-size: 12px;
    }
  }
`,w1=N.li`
  position: relative;
  padding-left: ${({hasItems:n})=>n?"0":"13px"};

  ${({isRootLevel:n})=>n?I`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:c})=>c.material};
            }
          }
        `:I`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:c})=>c.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:n})=>n.borderDark};
    }
  }
`,z1=N.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,O1=N.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${pp};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,bh=N(Wo)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${pp};
`,R1=N.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function gh(n,c){return n.includes(c)?n.filter(f=>f!==c):[...n,c]}function yh(n){n.preventDefault()}function mp({className:n,disabled:c,expanded:f,innerRef:r,level:d,select:v,selected:g,style:T,tree:A=[]}){const m=d===0,M=z.useCallback(D=>{var B,G;const Z=!!(D.items&&D.items.length>0),P=f.includes(D.id),q=(B=c||D.disabled)!==null&&B!==void 0?B:!1,Q=q?yh:X=>v(X,D),k=q?yh:X=>v(X,D),j=g===D.id,nt=w.createElement(R1,{"aria-hidden":!0},D.icon);return w.createElement(w1,{key:D.label,isRootLevel:m,role:"treeitem","aria-expanded":P,"aria-selected":j,hasItems:Z},Z?w.createElement(z1,{open:P},w.createElement(O1,{onClick:Q,$disabled:q},w.createElement(bh,{$disabled:q},nt,w.createElement(Qo,null,D.label))),P&&w.createElement(mp,{className:n,disabled:q,expanded:f,level:d+1,select:v,selected:g,style:T,tree:(G=D.items)!==null&&G!==void 0?G:[]})):w.createElement(bh,{as:"button",$disabled:q,onClick:k},nt,w.createElement(Qo,null,D.label)))},[n,c,f,m,d,v,g,T]);return w.createElement(D1,{className:m?n:void 0,style:m?T:void 0,ref:m?r:void 0,role:m?"tree":"group",isRootLevel:m},A.map(M))}function M1({className:n,defaultExpanded:c=[],defaultSelected:f,disabled:r=!1,expanded:d,onNodeSelect:v,onNodeToggle:g,selected:T,style:A,tree:m=[]},M){const[D,B]=Fl({defaultValue:c,onChange:g,onChangePropName:"onNodeToggle",value:d,valuePropName:"expanded"}),[G,Z]=Fl({defaultValue:f,onChange:v,onChangePropName:"onNodeSelect",value:T,valuePropName:"selected"}),P=z.useCallback((k,j)=>{if(g){const nt=gh(D,j);g(k,nt)}B(nt=>gh(nt,j))},[D,g,B]),q=z.useCallback((k,j)=>{Z(j),v&&v(k,j)},[v,Z]),Q=z.useCallback((k,j)=>{k.preventDefault(),q(k,j.id),j.items&&j.items.length&&P(k,j.id)},[q,P]);return w.createElement(mp,{className:n,disabled:r,expanded:D,level:0,innerRef:M,select:Q,selected:G,style:A,tree:m})}const _1=z.forwardRef(M1);_1.displayName="TreeView";var wo,Ah;function C1(){if(Ah)return wo;Ah=1;var n={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return wo=n,wo}var $1=C1();const B1=Sh($1),H1="/assets/ms_sans_serif-Du8rjN1q.woff2",U1="/assets/ms_sans_serif_bold-D5dpRRHG.woff2",N1=Vb`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${H1}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${U1}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgb(21, 19, 19);
  }
`,k1=()=>{const[n,c]=z.useState(""),[f,r]=z.useState([]),[d,v]=z.useState([]),[g,T]=z.useState(!1),[A,m]=z.useState(!1),[M,D]=z.useState(!1),B=z.useRef(null),G=q=>{const Q=q.toLowerCase();return Q.includes("salita")?"Ogni percorso inizia dal basso e procede verso l'alto. Anche il tuo percorso sarà in salita, quindi continua e non fermarti mai.":Q.includes("precisione")?"La precisione perfeziona ogni passo, ma non hai tempo ed energie per eseguire la perfezione.":Q.includes("distruzione")?"La distruzione del vecchio lascia spazio al nuovo, ma non hai niente da distruggere se c'è solo il vuoto.":Q.includes("movimento")?"Non fermarti mai. Muoviti avanti, muoviti indietro, ma muoviti senza sosta e non ti perderai mai.":Q.includes("illusione")?"L'illusione può darti uno strappo alla monotonia, ma sai bene che non durerà a lungo.":Q.includes("confusione")?"Non ti perderai mai se segui il tuo percorso. Anche quando attraverserai la nebbia della confusione, diventerai la tua stessa luce.":"Sembra che questo non ti sarà utile. Prova con qualcosa di diverso."},Z=["salita","movimento","confusione"],P=()=>{if(n.trim()==="")return;const q={sender:"user",text:n};let Q;if(g)n.toLowerCase()==="percorso"?(Q={sender:"bot",text:"codice rosso",style:{color:"red",fontWeight:"bold"}},D(!0),T(!1)):Q={sender:"bot",text:"Di solito, puoi fidarti della sola metà dei consigli che ti sono dati"};else{Q={sender:"bot",text:G(n)};const k=n.toLowerCase();Z.includes(k)&&!d.includes(k)&&v(j=>[...j,k])}r(k=>[...k,q,Q]),c("")};return z.useEffect(()=>{d.length===3&&!A&&(r(q=>[...q,{sender:"bot",text:"Con l'esperienza che hai acquisito, rispondi a questo dilemma con una singola parola. Qual è il senso dell'avventura?"}]),T(!0),m(!0))},[d,A]),z.useEffect(()=>{},[M]),z.useEffect(()=>{var q;(q=B.current)==null||q.scrollTo({top:B.current.scrollHeight,behavior:"smooth"})},[f]),ve.jsxs(Gb,{theme:B1,children:[ve.jsx(N1,{}),ve.jsxs(lf,{style:{width:350,height:400,display:"flex",flexDirection:"column"},children:[ve.jsxs(ef,{style:{display:"flex",alignItems:"center",gap:"8px"},children:[ve.jsx(Kh,{square:!0,size:30,src:"https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"}),"cmd.2060"]}),ve.jsxs(tf,{style:{flexGrow:1,display:"flex",flexDirection:"column"},children:[ve.jsx("div",{ref:B,style:{flexGrow:1,overflowY:"auto",background:"#C3C7CB",padding:"10px",display:"flex",flexDirection:"column",gap:"5px",maxHeight:"230px"},children:f.map((q,Q)=>ve.jsx("div",{style:{display:"flex",alignItems:"center",gap:"30px",justifyContent:q.sender==="user"?"flex-end":"flex-start"},children:ve.jsx(op,{style:{padding:"5px",background:q.sender==="bot"?"#F0F0F0":"#D0E4F7",maxWidth:"70%",textAlign:"left"},children:ve.jsx("span",{style:q.style||{},children:q.text})})},Q))}),ve.jsxs("div",{style:{display:"flex",gap:"5px",paddingTop:"5px",marginTop:"auto"},children:[ve.jsx(Io,{value:n,onChange:q=>c(q.target.value),onKeyDown:q=>q.key==="Enter"&&P(),placeholder:"> digita le parole...",style:{flexGrow:1}}),ve.jsx(Du,{onClick:P,children:"Invia"})]})]})]})]})};jv.createRoot(document.getElementById("root")).render(ve.jsx(z.StrictMode,{children:ve.jsx(k1,{})}));
