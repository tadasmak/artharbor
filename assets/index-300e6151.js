(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Zl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const we={},rs=[],Lt=()=>{},Qv=()=>!1,Yv=/^on[^a-z]/,ya=t=>Yv.test(t),eu=t=>t.startsWith("onUpdate:"),Qe=Object.assign,tu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jv=Object.prototype.hasOwnProperty,ie=(t,e)=>Jv.call(t,e),K=Array.isArray,ss=t=>wa(t)==="[object Map]",Dp=t=>wa(t)==="[object Set]",Z=t=>typeof t=="function",Ue=t=>typeof t=="string",va=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Np=t=>(Te(t)||Z(t))&&Z(t.then)&&Z(t.catch),Op=Object.prototype.toString,wa=t=>Op.call(t),Xv=t=>wa(t).slice(8,-1),xp=t=>wa(t)==="[object Object]",nu=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Po=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zv=/-(\w)/g,un=Ea(t=>t.replace(Zv,(e,n)=>n?n.toUpperCase():"")),ew=/\B([A-Z])/g,Rs=Ea(t=>t.replace(ew,"-$1").toLowerCase()),Ia=Ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),Tc=Ea(t=>t?`on${Ia(t)}`:""),Rr=(t,e)=>!Object.is(t,e),Co=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},qo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},nl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xh;const rl=()=>Xh||(Xh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ds(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?sw(r):ds(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Te(t))return t}const tw=/;(?![^(]*\))/g,nw=/:([^]+)/,rw=/\/\*[^]*?\*\//g;function sw(t){const e={};return t.replace(rw,"").split(tw).forEach(n=>{if(n){const r=n.split(nw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $n(t){let e="";if(Ue(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const r=$n(t[n]);r&&(e+=r+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const iw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ow=Zl(iw);function Vp(t){return!!t||t===""}const ce=t=>Ue(t)?t:t==null?"":K(t)||Te(t)&&(t.toString===Op||!Z(t.toString))?JSON.stringify(t,Lp,2):String(t),Lp=(t,e)=>e&&e.__v_isRef?Lp(t,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Dp(e)?{[`Set(${e.size})`]:[...e.values()]}:Te(e)&&!K(e)&&!xp(e)?String(e):e;let Dt;class aw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function cw(t,e=Dt){e&&e.active&&e.effects.push(t)}function lw(){return Dt}const ru=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Mp=t=>(t.w&Kn)>0,Up=t=>(t.n&Kn)>0,uw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Kn},hw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Mp(s)&&!Up(s)?s.delete(t):e[n++]=s,s.w&=~Kn,s.n&=~Kn}e.length=n}},sl=new WeakMap;let Ws=0,Kn=1;const il=30;let Nt;const yr=Symbol(""),ol=Symbol("");class su{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,cw(this,r)}run(){if(!this.active)return this.fn();let e=Nt,n=jn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Nt,Nt=this,jn=!0,Kn=1<<++Ws,Ws<=il?uw(this):Zh(this),this.fn()}finally{Ws<=il&&hw(this),Kn=1<<--Ws,Nt=this.parent,jn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Nt===this?this.deferStop=!0:this.active&&(Zh(this),this.onStop&&this.onStop(),this.active=!1)}}function Zh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let jn=!0;const Fp=[];function Ss(){Fp.push(jn),jn=!1}function Ps(){const t=Fp.pop();jn=t===void 0?!0:t}function yt(t,e,n){if(jn&&Nt){let r=sl.get(t);r||sl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=ru()),$p(s)}}function $p(t,e){let n=!1;Ws<=il?Up(t)||(t.n|=Kn,n=!Mp(t)):n=!t.has(Nt),n&&(t.add(Nt),Nt.deps.push(t))}function vn(t,e,n,r,s,i){const o=sl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!va(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?nu(n)&&a.push(o.get("length")):(a.push(o.get(yr)),ss(t)&&a.push(o.get(ol)));break;case"delete":K(t)||(a.push(o.get(yr)),ss(t)&&a.push(o.get(ol)));break;case"set":ss(t)&&a.push(o.get(yr));break}if(a.length===1)a[0]&&al(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);al(ru(c))}}function al(t,e){const n=K(t)?t:[...t];for(const r of n)r.computed&&ed(r);for(const r of n)r.computed||ed(r)}function ed(t,e){(t!==Nt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const dw=Zl("__proto__,__v_isRef,__isVue"),Bp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(va)),td=fw();function fw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)yt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ss();const r=le(this)[e].apply(this,n);return Ps(),r}}),t}function pw(t){const e=le(this);return yt(e,"has",t),e.hasOwnProperty(t)}class jp{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?Sw:zp:i?Wp:Hp).get(e))return e;const o=K(e);if(!s){if(o&&ie(td,n))return Reflect.get(td,n,r);if(n==="hasOwnProperty")return pw}const a=Reflect.get(e,n,r);return(va(n)?Bp.has(n):dw(n))||(s||yt(e,"get",n),i)?a:nt(a)?o&&nu(n)?a:a.value:Te(a)?s?Gp(a):Aa(a):a}}class qp extends jp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(fs(i)&&nt(i)&&!nt(r))return!1;if(!this._shallow&&(!Ho(r)&&!fs(r)&&(i=le(i),r=le(r)),!K(e)&&nt(i)&&!nt(r)))return i.value=r,!0;const o=K(e)&&nu(n)?Number(n)<e.length:ie(e,n),a=Reflect.set(e,n,r,s);return e===le(s)&&(o?Rr(r,i)&&vn(e,"set",n,r):vn(e,"add",n,r)),a}deleteProperty(e,n){const r=ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&vn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!va(n)||!Bp.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",K(e)?"length":yr),Reflect.ownKeys(e)}}class mw extends jp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gw=new qp,_w=new mw,yw=new qp(!0),iu=t=>t,Ta=t=>Reflect.getPrototypeOf(t);function uo(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);n||(Rr(e,i)&&yt(s,"get",e),yt(s,"get",i));const{has:o}=Ta(s),a=r?iu:n?cu:fi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ho(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return e||(Rr(t,s)&&yt(r,"has",t),yt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function fo(t,e=!1){return t=t.__v_raw,!e&&yt(le(t),"iterate",yr),Reflect.get(t,"size",t)}function nd(t){t=le(t);const e=le(this);return Ta(e).has.call(e,t)||(e.add(t),vn(e,"add",t,t)),this}function rd(t,e){e=le(e);const n=le(this),{has:r,get:s}=Ta(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Rr(e,o)&&vn(n,"set",t,e):vn(n,"add",t,e),this}function sd(t){const e=le(this),{has:n,get:r}=Ta(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&vn(e,"delete",t,void 0),i}function id(){const t=le(this),e=t.size!==0,n=t.clear();return e&&vn(t,"clear",void 0,void 0),n}function po(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),c=e?iu:t?cu:fi;return!t&&yt(a,"iterate",yr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function mo(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=ss(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?iu:e?cu:fi;return!e&&yt(i,"iterate",c?ol:yr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function kn(t){return function(...e){return t==="delete"?!1:this}}function vw(){const t={get(i){return uo(this,i)},get size(){return fo(this)},has:ho,add:nd,set:rd,delete:sd,clear:id,forEach:po(!1,!1)},e={get(i){return uo(this,i,!1,!0)},get size(){return fo(this)},has:ho,add:nd,set:rd,delete:sd,clear:id,forEach:po(!1,!0)},n={get(i){return uo(this,i,!0)},get size(){return fo(this,!0)},has(i){return ho.call(this,i,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:po(!0,!1)},r={get(i){return uo(this,i,!0,!0)},get size(){return fo(this,!0)},has(i){return ho.call(this,i,!0)},add:kn("add"),set:kn("set"),delete:kn("delete"),clear:kn("clear"),forEach:po(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=mo(i,!1,!1),n[i]=mo(i,!0,!1),e[i]=mo(i,!1,!0),r[i]=mo(i,!0,!0)}),[t,n,e,r]}const[ww,Ew,Iw,Tw]=vw();function ou(t,e){const n=e?t?Tw:Iw:t?Ew:ww;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const Aw={get:ou(!1,!1)},bw={get:ou(!1,!0)},Rw={get:ou(!0,!1)},Hp=new WeakMap,Wp=new WeakMap,zp=new WeakMap,Sw=new WeakMap;function Pw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cw(t){return t.__v_skip||!Object.isExtensible(t)?0:Pw(Xv(t))}function Aa(t){return fs(t)?t:au(t,!1,gw,Aw,Hp)}function Kp(t){return au(t,!1,yw,bw,Wp)}function Gp(t){return au(t,!0,_w,Rw,zp)}function au(t,e,n,r,s){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Cw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function is(t){return fs(t)?is(t.__v_raw):!!(t&&t.__v_isReactive)}function fs(t){return!!(t&&t.__v_isReadonly)}function Ho(t){return!!(t&&t.__v_isShallow)}function Qp(t){return is(t)||fs(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function Yp(t){return qo(t,"__v_skip",!0),t}const fi=t=>Te(t)?Aa(t):t,cu=t=>Te(t)?Gp(t):t;function Jp(t){jn&&Nt&&(t=le(t),$p(t.dep||(t.dep=ru())))}function Xp(t,e){t=le(t);const n=t.dep;n&&al(n)}function nt(t){return!!(t&&t.__v_isRef===!0)}function kw(t){return Zp(t,!1)}function Dw(t){return Zp(t,!0)}function Zp(t,e){return nt(t)?t:new Nw(t,e)}class Nw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:fi(e)}get value(){return Jp(this),this._value}set value(e){const n=this.__v_isShallow||Ho(e)||fs(e);e=n?e:le(e),Rr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:fi(e),Xp(this))}}function vr(t){return nt(t)?t.value:t}const Ow={get:(t,e,n)=>vr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return nt(s)&&!nt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function em(t){return is(t)?t:new Proxy(t,Ow)}class xw{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new su(e,()=>{this._dirty||(this._dirty=!0,Xp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return Jp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Vw(t,e,n=!1){let r,s;const i=Z(t);return i?(r=t,s=Lt):(r=t.get,s=t.set),new xw(r,s,i||!s,n)}function qn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ba(i,e,n)}return s}function Mt(t,e,n,r){if(Z(t)){const i=qn(t,e,n,r);return i&&Np(i)&&i.catch(o=>{ba(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Mt(t[i],e,n,r));return s}function ba(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){qn(c,null,10,[t,o,a]);return}}Lw(t,n,s,r)}function Lw(t,e,n,r=!0){console.error(t)}let pi=!1,cl=!1;const tt=[];let Zt=0;const os=[];let mn=null,lr=0;const tm=Promise.resolve();let lu=null;function nm(t){const e=lu||tm;return t?e.then(this?t.bind(this):t):e}function Mw(t){let e=Zt+1,n=tt.length;for(;e<n;){const r=e+n>>>1,s=tt[r],i=mi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function uu(t){(!tt.length||!tt.includes(t,pi&&t.allowRecurse?Zt+1:Zt))&&(t.id==null?tt.push(t):tt.splice(Mw(t.id),0,t),rm())}function rm(){!pi&&!cl&&(cl=!0,lu=tm.then(im))}function Uw(t){const e=tt.indexOf(t);e>Zt&&tt.splice(e,1)}function Fw(t){K(t)?os.push(...t):(!mn||!mn.includes(t,t.allowRecurse?lr+1:lr))&&os.push(t),rm()}function od(t,e=pi?Zt+1:0){for(;e<tt.length;e++){const n=tt[e];n&&n.pre&&(tt.splice(e,1),e--,n())}}function sm(t){if(os.length){const e=[...new Set(os)];if(os.length=0,mn){mn.push(...e);return}for(mn=e,mn.sort((n,r)=>mi(n)-mi(r)),lr=0;lr<mn.length;lr++)mn[lr]();mn=null,lr=0}}const mi=t=>t.id==null?1/0:t.id,$w=(t,e)=>{const n=mi(t)-mi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function im(t){cl=!1,pi=!0,tt.sort($w);const e=Lt;try{for(Zt=0;Zt<tt.length;Zt++){const n=tt[Zt];n&&n.active!==!1&&qn(n,null,14)}}finally{Zt=0,tt.length=0,sm(),pi=!1,lu=null,(tt.length||os.length)&&im()}}function Bw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||we;d&&(s=n.map(p=>Ue(p)?p.trim():p)),h&&(s=n.map(nl))}let a,c=r[a=Tc(e)]||r[a=Tc(un(e))];!c&&i&&(c=r[a=Tc(Rs(e))]),c&&Mt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Mt(l,t,6,s)}}function om(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=om(l,e,!0);u&&(a=!0,Qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Te(t)&&r.set(t,null),null):(K(i)?i.forEach(c=>o[c]=null):Qe(o,i),Te(t)&&r.set(t,o),o)}function Ra(t,e){return!t||!ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Rs(e))||ie(t,e))}let St=null,Sa=null;function Wo(t){const e=St;return St=t,Sa=t&&t.type.__scopeId||null,e}function zt(t){Sa=t}function Kt(){Sa=null}function xt(t,e=St,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&_d(-1);const i=Wo(e);let o;try{o=t(...s)}finally{Wo(i),r._d&&_d(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ac(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:y,inheritAttrs:A}=t;let w,C;const k=Wo(t);try{if(n.shapeFlag&4){const D=s||r;w=Xt(u.call(D,D,h,i,p,d,y)),C=c}else{const D=e;w=Xt(D.length>1?D(i,{attrs:c,slots:a,emit:l}):D(i,null)),C=e.props?c:jw(c)}}catch(D){ti.length=0,ba(D,t,1),w=oe(Sr)}let F=w;if(C&&A!==!1){const D=Object.keys(C),{shapeFlag:fe}=F;D.length&&fe&7&&(o&&D.some(eu)&&(C=qw(C,o)),F=ps(F,C))}return n.dirs&&(F=ps(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),w=F,Wo(k),w}const jw=t=>{let e;for(const n in t)(n==="class"||n==="style"||ya(n))&&((e||(e={}))[n]=t[n]);return e},qw=(t,e)=>{const n={};for(const r in t)(!eu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Hw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ad(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ra(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ad(r,o,l):!0:!!o;return!1}function ad(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ra(n,i))return!0}return!1}function Ww({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const am="components";function pt(t,e){return Kw(am,t,!0,e)||t}const zw=Symbol.for("v-ndc");function Kw(t,e,n=!0,r=!1){const s=St||We;if(s){const i=s.type;if(t===am){const a=UE(i,!1);if(a&&(a===e||a===un(e)||a===Ia(un(e))))return i}const o=cd(s[t]||i[t],e)||cd(s.appContext[t],e);return!o&&r?i:o}}function cd(t,e){return t&&(t[e]||t[un(e)]||t[Ia(un(e))])}const Gw=t=>t.__isSuspense;function Qw(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):Fw(t)}const go={};function ko(t,e,n){return cm(t,e,n)}function cm(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=we){var a;const c=lw()===((a=We)==null?void 0:a.scope)?We:null;let l,u=!1,h=!1;if(nt(t)?(l=()=>t.value,u=Ho(t)):is(t)?(l=()=>t,r=!0):K(t)?(h=!0,u=t.some(D=>is(D)||Ho(D)),l=()=>t.map(D=>{if(nt(D))return D.value;if(is(D))return dr(D);if(Z(D))return qn(D,c,2)})):Z(t)?e?l=()=>qn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Mt(t,c,3,[p])}:l=Lt,e&&r){const D=l;l=()=>dr(D())}let d,p=D=>{d=k.onStop=()=>{qn(D,c,4)}},y;if(_i)if(p=Lt,e?n&&Mt(e,c,3,[l(),h?[]:void 0,p]):l(),s==="sync"){const D=BE();y=D.__watcherHandles||(D.__watcherHandles=[])}else return Lt;let A=h?new Array(t.length).fill(go):go;const w=()=>{if(k.active)if(e){const D=k.run();(r||u||(h?D.some((fe,ue)=>Rr(fe,A[ue])):Rr(D,A)))&&(d&&d(),Mt(e,c,3,[D,A===go?void 0:h&&A[0]===go?[]:A,p]),A=D)}else k.run()};w.allowRecurse=!!e;let C;s==="sync"?C=w:s==="post"?C=()=>dt(w,c&&c.suspense):(w.pre=!0,c&&(w.id=c.uid),C=()=>uu(w));const k=new su(l,C);e?n?w():A=k.run():s==="post"?dt(k.run.bind(k),c&&c.suspense):k.run();const F=()=>{k.stop(),c&&c.scope&&tu(c.scope.effects,k)};return y&&y.push(F),F}function Yw(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?lm(r,t):()=>r[t]:t.bind(r,r);let i;Z(e)?i=e:(i=e.handler,n=e);const o=We;ms(this);const a=cm(s,i.bind(r),n);return o?ms(o):Er(),a}function lm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function dr(t,e){if(!Te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),nt(t))dr(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)dr(t[n],e);else if(Dp(t)||ss(t))t.forEach(n=>{dr(n,e)});else if(xp(t))for(const n in t)dr(t[n],e);return t}function wr(t,e){const n=St;if(n===null)return t;const r=Da(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&dr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function or(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ss(),Mt(c,n,8,[t.el,a,t,e]),Ps())}}/*! #__NO_SIDE_EFFECTS__ */function um(t,e){return Z(t)?(()=>Qe({name:t.name},e,{setup:t}))():t}const Do=t=>!!t.type.__asyncLoader,hm=t=>t.type.__isKeepAlive;function Jw(t,e){dm(t,"a",e)}function Xw(t,e){dm(t,"da",e)}function dm(t,e,n=We){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Pa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)hm(s.parent.vnode)&&Zw(r,e,n,s),s=s.parent}}function Zw(t,e,n,r){const s=Pa(e,t,r,!0);fm(()=>{tu(r[e],s)},n)}function Pa(t,e,n=We,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ss(),ms(n);const a=Mt(e,n,t,o);return Er(),Ps(),a});return r?s.unshift(i):s.push(i),i}}const Sn=t=>(e,n=We)=>(!_i||t==="sp")&&Pa(t,(...r)=>e(...r),n),eE=Sn("bm"),tE=Sn("m"),nE=Sn("bu"),rE=Sn("u"),sE=Sn("bum"),fm=Sn("um"),iE=Sn("sp"),oE=Sn("rtg"),aE=Sn("rtc");function cE(t,e=We){Pa("ec",t,e)}function En(t,e,n,r){let s;const i=n&&n[r];if(K(t)||Ue(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Te(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const ll=t=>t?bm(t)?Da(t)||t.proxy:ll(t.parent):null,ei=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ll(t.parent),$root:t=>ll(t.root),$emit:t=>t.emit,$options:t=>hu(t),$forceUpdate:t=>t.f||(t.f=()=>uu(t.update)),$nextTick:t=>t.n||(t.n=nm.bind(t.proxy)),$watch:t=>Yw.bind(t)}),bc=(t,e)=>t!==we&&!t.__isScriptSetup&&ie(t,e),lE={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(bc(r,e))return o[e]=1,r[e];if(s!==we&&ie(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==we&&ie(n,e))return o[e]=4,n[e];ul&&(o[e]=0)}}const u=ei[e];let h,d;if(u)return e==="$attrs"&&yt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ie(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ie(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return bc(s,e)?(s[e]=n,!0):r!==we&&ie(r,e)?(r[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ie(t,o)||bc(e,o)||(a=i[0])&&ie(a,o)||ie(r,o)||ie(ei,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ld(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ul=!0;function uE(t){const e=hu(t),n=t.proxy,r=t.ctx;ul=!1,e.beforeCreate&&ud(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:y,activated:A,deactivated:w,beforeDestroy:C,beforeUnmount:k,destroyed:F,unmounted:D,render:fe,renderTracked:ue,renderTriggered:Ce,errorCaptured:Ye,serverPrefetch:bt,expose:at,inheritAttrs:Pn,components:ir,directives:Gt,filters:Ms}=e;if(l&&hE(l,r,null),o)for(const _e in o){const he=o[_e];Z(he)&&(r[_e]=he.bind(n))}if(s){const _e=s.call(n,n);Te(_e)&&(t.data=Aa(_e))}if(ul=!0,i)for(const _e in i){const he=i[_e],fn=Z(he)?he.bind(n,n):Z(he.get)?he.get.bind(n,n):Lt,Cn=!Z(he)&&Z(he.set)?he.set.bind(n):Lt,Qt=Ot({get:fn,set:Cn});Object.defineProperty(r,_e,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:ht=>Qt.value=ht})}if(a)for(const _e in a)pm(a[_e],r,n,_e);if(c){const _e=Z(c)?c.call(n):c;Reflect.ownKeys(_e).forEach(he=>{No(he,_e[he])})}u&&ud(u,t,"c");function Fe(_e,he){K(he)?he.forEach(fn=>_e(fn.bind(n))):he&&_e(he.bind(n))}if(Fe(eE,h),Fe(tE,d),Fe(nE,p),Fe(rE,y),Fe(Jw,A),Fe(Xw,w),Fe(cE,Ye),Fe(aE,ue),Fe(oE,Ce),Fe(sE,k),Fe(fm,D),Fe(iE,bt),K(at))if(at.length){const _e=t.exposed||(t.exposed={});at.forEach(he=>{Object.defineProperty(_e,he,{get:()=>n[he],set:fn=>n[he]=fn})})}else t.exposed||(t.exposed={});fe&&t.render===Lt&&(t.render=fe),Pn!=null&&(t.inheritAttrs=Pn),ir&&(t.components=ir),Gt&&(t.directives=Gt)}function hE(t,e,n=Lt){K(t)&&(t=hl(t));for(const r in t){const s=t[r];let i;Te(s)?"default"in s?i=wn(s.from||r,s.default,!0):i=wn(s.from||r):i=wn(s),nt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ud(t,e,n){Mt(K(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function pm(t,e,n,r){const s=r.includes(".")?lm(n,r):()=>n[r];if(Ue(t)){const i=e[t];Z(i)&&ko(s,i)}else if(Z(t))ko(s,t.bind(n));else if(Te(t))if(K(t))t.forEach(i=>pm(i,e,n,r));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&ko(s,i,t)}}function hu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>zo(c,l,o,!0)),zo(c,e,o)),Te(e)&&i.set(e,c),c}function zo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&zo(t,i,n,!0),s&&s.forEach(o=>zo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=dE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const dE={data:hd,props:dd,emits:dd,methods:zs,computed:zs,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:zs,directives:zs,watch:pE,provide:hd,inject:fE};function hd(t,e){return e?t?function(){return Qe(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function fE(t,e){return zs(hl(t),hl(e))}function hl(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function zs(t,e){return t?Qe(Object.create(null),t,e):e}function dd(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:Qe(Object.create(null),ld(t),ld(e??{})):e}function pE(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function mm(){return{app:null,config:{isNativeTag:Qv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mE=0;function gE(t,e){return function(r,s=null){Z(r)||(r=Qe({},r)),s!=null&&!Te(s)&&(s=null);const i=mm(),o=new WeakSet;let a=!1;const c=i.app={_uid:mE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:jE,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=oe(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Da(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Ko=c;try{return l()}finally{Ko=null}}};return c}}let Ko=null;function No(t,e){if(We){let n=We.provides;const r=We.parent&&We.parent.provides;r===n&&(n=We.provides=Object.create(r)),n[t]=e}}function wn(t,e,n=!1){const r=We||St;if(r||Ko){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ko._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(r&&r.proxy):e}}function _E(t,e,n,r=!1){const s={},i={};qo(i,ka,1),t.propsDefaults=Object.create(null),gm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Kp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function yE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ra(t.emitsOptions,d))continue;const p=e[d];if(c)if(ie(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const y=un(d);s[y]=dl(c,a,y,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{gm(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=Rs(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=dl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],l=!0)}l&&vn(t,"set","$attrs")}function gm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Po(c))continue;const l=e[c];let u;s&&ie(s,u=un(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ra(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=le(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=dl(s,c,h,l[h],t,!ie(l,h))}}return o}function dl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(ms(s),r=l[n]=c.call(null,e),Er())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rs(n))&&(r=!0))}return r}function _m(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[d,p]=_m(h,e,!0);Qe(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Te(t)&&r.set(t,rs),rs;if(K(i))for(let u=0;u<i.length;u++){const h=un(i[u]);fd(h)&&(o[h]=we)}else if(i)for(const u in i){const h=un(u);if(fd(h)){const d=i[u],p=o[h]=K(d)||Z(d)?{type:d}:Qe({},d);if(p){const y=gd(Boolean,p.type),A=gd(String,p.type);p[0]=y>-1,p[1]=A<0||y<A,(y>-1||ie(p,"default"))&&a.push(h)}}}const l=[o,a];return Te(t)&&r.set(t,l),l}function fd(t){return t[0]!=="$"}function pd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function md(t,e){return pd(t)===pd(e)}function gd(t,e){return K(e)?e.findIndex(n=>md(n,t)):Z(e)&&md(e,t)?0:-1}const ym=t=>t[0]==="_"||t==="$stable",du=t=>K(t)?t.map(Xt):[Xt(t)],vE=(t,e,n)=>{if(e._n)return e;const r=xt((...s)=>du(e(...s)),n);return r._c=!1,r},vm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ym(s))continue;const i=t[s];if(Z(i))e[s]=vE(s,i,r);else if(i!=null){const o=du(i);e[s]=()=>o}}},wm=(t,e)=>{const n=du(e);t.slots.default=()=>n},wE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),qo(e,"_",n)):vm(e,t.slots={})}else t.slots={},e&&wm(t,e);qo(t.slots,ka,1)},EE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Qe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,vm(e,s)),o=e}else e&&(wm(t,e),o={default:1});if(i)for(const a in s)!ym(a)&&o[a]==null&&delete s[a]};function fl(t,e,n,r,s=!1){if(K(t)){t.forEach((d,p)=>fl(d,e&&(K(e)?e[p]:e),n,r,s));return}if(Do(r)&&!s)return;const i=r.shapeFlag&4?Da(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ue(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):nt(l)&&(l.value=null)),Z(c))qn(c,a,12,[o,u]);else{const d=Ue(c),p=nt(c);if(d||p){const y=()=>{if(t.f){const A=d?ie(h,c)?h[c]:u[c]:c.value;s?K(A)&&tu(A,i):K(A)?A.includes(i)||A.push(i):d?(u[c]=[i],ie(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ie(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,dt(y,n)):y()}}}const dt=Qw;function IE(t){return TE(t)}function TE(t,e){const n=rl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Lt,insertStaticContent:y}=t,A=(f,m,_,v=null,b=null,R=null,M=!1,P=null,N=!!m.dynamicChildren)=>{if(f===m)return;f&&!Fs(f,m)&&(v=I(f),ht(f,b,R,!0),f=null),m.patchFlag===-2&&(N=!1,m.dynamicChildren=null);const{type:S,ref:q,shapeFlag:$}=m;switch(S){case Ca:w(f,m,_,v);break;case Sr:C(f,m,_,v);break;case Oo:f==null&&k(m,_,v,M);break;case Oe:ir(f,m,_,v,b,R,M,P,N);break;default:$&1?fe(f,m,_,v,b,R,M,P,N):$&6?Gt(f,m,_,v,b,R,M,P,N):($&64||$&128)&&S.process(f,m,_,v,b,R,M,P,N,O)}q!=null&&b&&fl(q,f&&f.ref,R,m||f,!m)},w=(f,m,_,v)=>{if(f==null)r(m.el=a(m.children),_,v);else{const b=m.el=f.el;m.children!==f.children&&l(b,m.children)}},C=(f,m,_,v)=>{f==null?r(m.el=c(m.children||""),_,v):m.el=f.el},k=(f,m,_,v)=>{[f.el,f.anchor]=y(f.children,m,_,v,f.el,f.anchor)},F=({el:f,anchor:m},_,v)=>{let b;for(;f&&f!==m;)b=d(f),r(f,_,v),f=b;r(m,_,v)},D=({el:f,anchor:m})=>{let _;for(;f&&f!==m;)_=d(f),s(f),f=_;s(m)},fe=(f,m,_,v,b,R,M,P,N)=>{M=M||m.type==="svg",f==null?ue(m,_,v,b,R,M,P,N):bt(f,m,b,R,M,P,N)},ue=(f,m,_,v,b,R,M,P)=>{let N,S;const{type:q,props:$,shapeFlag:H,transition:J,dirs:te}=f;if(N=f.el=o(f.type,R,$&&$.is,$),H&8?u(N,f.children):H&16&&Ye(f.children,N,null,v,b,R&&q!=="foreignObject",M,P),te&&or(f,null,v,"created"),Ce(N,f,f.scopeId,M,v),$){for(const ge in $)ge!=="value"&&!Po(ge)&&i(N,ge,null,$[ge],R,f.children,v,b,Je);"value"in $&&i(N,"value",null,$.value),(S=$.onVnodeBeforeMount)&&Jt(S,v,f)}te&&or(f,null,v,"beforeMount");const ye=AE(b,J);ye&&J.beforeEnter(N),r(N,m,_),((S=$&&$.onVnodeMounted)||ye||te)&&dt(()=>{S&&Jt(S,v,f),ye&&J.enter(N),te&&or(f,null,v,"mounted")},b)},Ce=(f,m,_,v,b)=>{if(_&&p(f,_),v)for(let R=0;R<v.length;R++)p(f,v[R]);if(b){let R=b.subTree;if(m===R){const M=b.vnode;Ce(f,M,M.scopeId,M.slotScopeIds,b.parent)}}},Ye=(f,m,_,v,b,R,M,P,N=0)=>{for(let S=N;S<f.length;S++){const q=f[S]=P?On(f[S]):Xt(f[S]);A(null,q,m,_,v,b,R,M,P)}},bt=(f,m,_,v,b,R,M)=>{const P=m.el=f.el;let{patchFlag:N,dynamicChildren:S,dirs:q}=m;N|=f.patchFlag&16;const $=f.props||we,H=m.props||we;let J;_&&ar(_,!1),(J=H.onVnodeBeforeUpdate)&&Jt(J,_,m,f),q&&or(m,f,_,"beforeUpdate"),_&&ar(_,!0);const te=b&&m.type!=="foreignObject";if(S?at(f.dynamicChildren,S,P,_,v,te,R):M||he(f,m,P,null,_,v,te,R,!1),N>0){if(N&16)Pn(P,m,$,H,_,v,b);else if(N&2&&$.class!==H.class&&i(P,"class",null,H.class,b),N&4&&i(P,"style",$.style,H.style,b),N&8){const ye=m.dynamicProps;for(let ge=0;ge<ye.length;ge++){const ke=ye[ge],kt=$[ke],Kr=H[ke];(Kr!==kt||ke==="value")&&i(P,ke,kt,Kr,b,f.children,_,v,Je)}}N&1&&f.children!==m.children&&u(P,m.children)}else!M&&S==null&&Pn(P,m,$,H,_,v,b);((J=H.onVnodeUpdated)||q)&&dt(()=>{J&&Jt(J,_,m,f),q&&or(m,f,_,"updated")},v)},at=(f,m,_,v,b,R,M)=>{for(let P=0;P<m.length;P++){const N=f[P],S=m[P],q=N.el&&(N.type===Oe||!Fs(N,S)||N.shapeFlag&70)?h(N.el):_;A(N,S,q,null,v,b,R,M,!0)}},Pn=(f,m,_,v,b,R,M)=>{if(_!==v){if(_!==we)for(const P in _)!Po(P)&&!(P in v)&&i(f,P,_[P],null,M,m.children,b,R,Je);for(const P in v){if(Po(P))continue;const N=v[P],S=_[P];N!==S&&P!=="value"&&i(f,P,S,N,M,m.children,b,R,Je)}"value"in v&&i(f,"value",_.value,v.value)}},ir=(f,m,_,v,b,R,M,P,N)=>{const S=m.el=f?f.el:a(""),q=m.anchor=f?f.anchor:a("");let{patchFlag:$,dynamicChildren:H,slotScopeIds:J}=m;J&&(P=P?P.concat(J):J),f==null?(r(S,_,v),r(q,_,v),Ye(m.children,_,q,b,R,M,P,N)):$>0&&$&64&&H&&f.dynamicChildren?(at(f.dynamicChildren,H,_,b,R,M,P),(m.key!=null||b&&m===b.subTree)&&Em(f,m,!0)):he(f,m,_,q,b,R,M,P,N)},Gt=(f,m,_,v,b,R,M,P,N)=>{m.slotScopeIds=P,f==null?m.shapeFlag&512?b.ctx.activate(m,_,v,M,N):Ms(m,_,v,b,R,M,N):Hr(f,m,N)},Ms=(f,m,_,v,b,R,M)=>{const P=f.component=OE(f,v,b);if(hm(f)&&(P.ctx.renderer=O),xE(P),P.asyncDep){if(b&&b.registerDep(P,Fe),!f.el){const N=P.subTree=oe(Sr);C(null,N,m,_)}return}Fe(P,f,m,_,b,R,M)},Hr=(f,m,_)=>{const v=m.component=f.component;if(Hw(f,m,_))if(v.asyncDep&&!v.asyncResolved){_e(v,m,_);return}else v.next=m,Uw(v.update),v.update();else m.el=f.el,v.vnode=m},Fe=(f,m,_,v,b,R,M)=>{const P=()=>{if(f.isMounted){let{next:q,bu:$,u:H,parent:J,vnode:te}=f,ye=q,ge;ar(f,!1),q?(q.el=te.el,_e(f,q,M)):q=te,$&&Co($),(ge=q.props&&q.props.onVnodeBeforeUpdate)&&Jt(ge,J,q,te),ar(f,!0);const ke=Ac(f),kt=f.subTree;f.subTree=ke,A(kt,ke,h(kt.el),I(kt),f,b,R),q.el=ke.el,ye===null&&Ww(f,ke.el),H&&dt(H,b),(ge=q.props&&q.props.onVnodeUpdated)&&dt(()=>Jt(ge,J,q,te),b)}else{let q;const{el:$,props:H}=m,{bm:J,m:te,parent:ye}=f,ge=Do(m);if(ar(f,!1),J&&Co(J),!ge&&(q=H&&H.onVnodeBeforeMount)&&Jt(q,ye,m),ar(f,!0),$&&de){const ke=()=>{f.subTree=Ac(f),de($,f.subTree,f,b,null)};ge?m.type.__asyncLoader().then(()=>!f.isUnmounted&&ke()):ke()}else{const ke=f.subTree=Ac(f);A(null,ke,_,v,f,b,R),m.el=ke.el}if(te&&dt(te,b),!ge&&(q=H&&H.onVnodeMounted)){const ke=m;dt(()=>Jt(q,ye,ke),b)}(m.shapeFlag&256||ye&&Do(ye.vnode)&&ye.vnode.shapeFlag&256)&&f.a&&dt(f.a,b),f.isMounted=!0,m=_=v=null}},N=f.effect=new su(P,()=>uu(S),f.scope),S=f.update=()=>N.run();S.id=f.uid,ar(f,!0),S()},_e=(f,m,_)=>{m.component=f;const v=f.vnode.props;f.vnode=m,f.next=null,yE(f,m.props,v,_),EE(f,m.children,_),Ss(),od(),Ps()},he=(f,m,_,v,b,R,M,P,N=!1)=>{const S=f&&f.children,q=f?f.shapeFlag:0,$=m.children,{patchFlag:H,shapeFlag:J}=m;if(H>0){if(H&128){Cn(S,$,_,v,b,R,M,P,N);return}else if(H&256){fn(S,$,_,v,b,R,M,P,N);return}}J&8?(q&16&&Je(S,b,R),$!==S&&u(_,$)):q&16?J&16?Cn(S,$,_,v,b,R,M,P,N):Je(S,b,R,!0):(q&8&&u(_,""),J&16&&Ye($,_,v,b,R,M,P,N))},fn=(f,m,_,v,b,R,M,P,N)=>{f=f||rs,m=m||rs;const S=f.length,q=m.length,$=Math.min(S,q);let H;for(H=0;H<$;H++){const J=m[H]=N?On(m[H]):Xt(m[H]);A(f[H],J,_,null,b,R,M,P,N)}S>q?Je(f,b,R,!0,!1,$):Ye(m,_,v,b,R,M,P,N,$)},Cn=(f,m,_,v,b,R,M,P,N)=>{let S=0;const q=m.length;let $=f.length-1,H=q-1;for(;S<=$&&S<=H;){const J=f[S],te=m[S]=N?On(m[S]):Xt(m[S]);if(Fs(J,te))A(J,te,_,null,b,R,M,P,N);else break;S++}for(;S<=$&&S<=H;){const J=f[$],te=m[H]=N?On(m[H]):Xt(m[H]);if(Fs(J,te))A(J,te,_,null,b,R,M,P,N);else break;$--,H--}if(S>$){if(S<=H){const J=H+1,te=J<q?m[J].el:v;for(;S<=H;)A(null,m[S]=N?On(m[S]):Xt(m[S]),_,te,b,R,M,P,N),S++}}else if(S>H)for(;S<=$;)ht(f[S],b,R,!0),S++;else{const J=S,te=S,ye=new Map;for(S=te;S<=H;S++){const vt=m[S]=N?On(m[S]):Xt(m[S]);vt.key!=null&&ye.set(vt.key,S)}let ge,ke=0;const kt=H-te+1;let Kr=!1,Qh=0;const Us=new Array(kt);for(S=0;S<kt;S++)Us[S]=0;for(S=J;S<=$;S++){const vt=f[S];if(ke>=kt){ht(vt,b,R,!0);continue}let Yt;if(vt.key!=null)Yt=ye.get(vt.key);else for(ge=te;ge<=H;ge++)if(Us[ge-te]===0&&Fs(vt,m[ge])){Yt=ge;break}Yt===void 0?ht(vt,b,R,!0):(Us[Yt-te]=S+1,Yt>=Qh?Qh=Yt:Kr=!0,A(vt,m[Yt],_,null,b,R,M,P,N),ke++)}const Yh=Kr?bE(Us):rs;for(ge=Yh.length-1,S=kt-1;S>=0;S--){const vt=te+S,Yt=m[vt],Jh=vt+1<q?m[vt+1].el:v;Us[S]===0?A(null,Yt,_,Jh,b,R,M,P,N):Kr&&(ge<0||S!==Yh[ge]?Qt(Yt,_,Jh,2):ge--)}}},Qt=(f,m,_,v,b=null)=>{const{el:R,type:M,transition:P,children:N,shapeFlag:S}=f;if(S&6){Qt(f.component.subTree,m,_,v);return}if(S&128){f.suspense.move(m,_,v);return}if(S&64){M.move(f,m,_,O);return}if(M===Oe){r(R,m,_);for(let $=0;$<N.length;$++)Qt(N[$],m,_,v);r(f.anchor,m,_);return}if(M===Oo){F(f,m,_);return}if(v!==2&&S&1&&P)if(v===0)P.beforeEnter(R),r(R,m,_),dt(()=>P.enter(R),b);else{const{leave:$,delayLeave:H,afterLeave:J}=P,te=()=>r(R,m,_),ye=()=>{$(R,()=>{te(),J&&J()})};H?H(R,te,ye):ye()}else r(R,m,_)},ht=(f,m,_,v=!1,b=!1)=>{const{type:R,props:M,ref:P,children:N,dynamicChildren:S,shapeFlag:q,patchFlag:$,dirs:H}=f;if(P!=null&&fl(P,null,_,f,!0),q&256){m.ctx.deactivate(f);return}const J=q&1&&H,te=!Do(f);let ye;if(te&&(ye=M&&M.onVnodeBeforeUnmount)&&Jt(ye,m,f),q&6)lo(f.component,_,v);else{if(q&128){f.suspense.unmount(_,v);return}J&&or(f,null,m,"beforeUnmount"),q&64?f.type.remove(f,m,_,b,O,v):S&&(R!==Oe||$>0&&$&64)?Je(S,m,_,!1,!0):(R===Oe&&$&384||!b&&q&16)&&Je(N,m,_),v&&Wr(f)}(te&&(ye=M&&M.onVnodeUnmounted)||J)&&dt(()=>{ye&&Jt(ye,m,f),J&&or(f,null,m,"unmounted")},_)},Wr=f=>{const{type:m,el:_,anchor:v,transition:b}=f;if(m===Oe){zr(_,v);return}if(m===Oo){D(f);return}const R=()=>{s(_),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:M,delayLeave:P}=b,N=()=>M(_,R);P?P(f.el,R,N):N()}else R()},zr=(f,m)=>{let _;for(;f!==m;)_=d(f),s(f),f=_;s(m)},lo=(f,m,_)=>{const{bum:v,scope:b,update:R,subTree:M,um:P}=f;v&&Co(v),b.stop(),R&&(R.active=!1,ht(M,f,m,_)),P&&dt(P,m),dt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},Je=(f,m,_,v=!1,b=!1,R=0)=>{for(let M=R;M<f.length;M++)ht(f[M],m,_,v,b)},I=f=>f.shapeFlag&6?I(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),U=(f,m,_)=>{f==null?m._vnode&&ht(m._vnode,null,null,!0):A(m._vnode||null,f,m,null,null,null,_),od(),sm(),m._vnode=f},O={p:A,um:ht,m:Qt,r:Wr,mt:Ms,mc:Ye,pc:he,pbc:at,n:I,o:t};let B,de;return e&&([B,de]=e(O)),{render:U,hydrate:B,createApp:gE(U,B)}}function ar({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function AE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Em(t,e,n=!1){const r=t.children,s=e.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=On(s[i]),a.el=o.el),n||Em(o,a)),a.type===Ca&&(a.el=o.el)}}function bE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const RE=t=>t.__isTeleport,Oe=Symbol.for("v-fgt"),Ca=Symbol.for("v-txt"),Sr=Symbol.for("v-cmt"),Oo=Symbol.for("v-stc"),ti=[];let Vt=null;function Q(t=!1){ti.push(Vt=t?null:[])}function SE(){ti.pop(),Vt=ti[ti.length-1]||null}let gi=1;function _d(t){gi+=t}function Im(t){return t.dynamicChildren=gi>0?Vt||rs:null,SE(),gi>0&&Vt&&Vt.push(t),t}function X(t,e,n,r,s,i){return Im(g(t,e,n,r,s,i,!0))}function Tm(t,e,n,r,s){return Im(oe(t,e,n,r,s,!0))}function pl(t){return t?t.__v_isVNode===!0:!1}function Fs(t,e){return t.type===e.type&&t.key===e.key}const ka="__vInternal",Am=({key:t})=>t??null,xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||nt(t)||Z(t)?{i:St,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,s=null,i=t===Oe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Am(e),ref:e&&xo(e),scopeId:Sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:St};return a?(fu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),gi>0&&!o&&Vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Vt.push(c),c}const oe=PE;function PE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===zw)&&(t=Sr),pl(t)){const a=ps(t,e,!0);return n&&fu(a,n),gi>0&&!i&&Vt&&(a.shapeFlag&6?Vt[Vt.indexOf(t)]=a:Vt.push(a)),a.patchFlag|=-2,a}if(FE(t)&&(t=t.__vccOpts),e){e=CE(e);let{class:a,style:c}=e;a&&!Ue(a)&&(e.class=$n(a)),Te(c)&&(Qp(c)&&!K(c)&&(c=Qe({},c)),e.style=ds(c))}const o=Ue(t)?1:Gw(t)?128:RE(t)?64:Te(t)?4:Z(t)?2:0;return g(t,e,n,r,s,o,i,!0)}function CE(t){return t?Qp(t)||ka in t?Qe({},t):t:null}function ps(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?kE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Am(a),ref:e&&e.ref?n&&s?K(s)?s.concat(xo(e)):[s,xo(e)]:xo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Oe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ps(t.ssContent),ssFallback:t.ssFallback&&ps(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Le(t=" ",e=0){return oe(Ca,null,t,e)}function Fi(t,e){const n=oe(Oo,null,t);return n.staticCount=e,n}function Ut(t="",e=!1){return e?(Q(),Tm(Sr,null,t)):oe(Sr,null,t)}function Xt(t){return t==null||typeof t=="boolean"?oe(Sr):K(t)?oe(Oe,null,t.slice()):typeof t=="object"?On(t):oe(Ca,null,String(t))}function On(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ps(t)}function fu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ka in e)?e._ctx=St:s===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:St},n=32):(e=String(e),r&64?(n=16,e=[Le(e)]):n=8);t.children=e,t.shapeFlag|=n}function kE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=$n([e.class,r.class]));else if(s==="style")e.style=ds([e.style,r.style]);else if(ya(s)){const i=e[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Jt(t,e,n,r=null){Mt(t,e,7,[n,r])}const DE=mm();let NE=0;function OE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||DE,i={uid:NE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new aw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_m(r,s),emitsOptions:om(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Bw.bind(null,i),t.ce&&t.ce(i),i}let We=null,pu,Gr,yd="__VUE_INSTANCE_SETTERS__";(Gr=rl()[yd])||(Gr=rl()[yd]=[]),Gr.push(t=>We=t),pu=t=>{Gr.length>1?Gr.forEach(e=>e(t)):Gr[0](t)};const ms=t=>{pu(t),t.scope.on()},Er=()=>{We&&We.scope.off(),pu(null)};function bm(t){return t.vnode.shapeFlag&4}let _i=!1;function xE(t,e=!1){_i=e;const{props:n,children:r}=t.vnode,s=bm(t);_E(t,n,s,e),wE(t,r);const i=s?VE(t,e):void 0;return _i=!1,i}function VE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Yp(new Proxy(t.ctx,lE));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ME(t):null;ms(t),Ss();const i=qn(r,t,0,[t.props,s]);if(Ps(),Er(),Np(i)){if(i.then(Er,Er),e)return i.then(o=>{vd(t,o,e)}).catch(o=>{ba(o,t,0)});t.asyncDep=i}else vd(t,i,e)}else Rm(t,e)}function vd(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=em(e)),Rm(t,n)}let wd;function Rm(t,e,n){const r=t.type;if(!t.render){if(!e&&wd&&!r.render){const s=r.template||hu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Qe(Qe({isCustomElement:i,delimiters:a},o),c);r.render=wd(s,l)}}t.render=r.render||Lt}{ms(t),Ss();try{uE(t)}finally{Ps(),Er()}}}function LE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return yt(t,"get","$attrs"),e[n]}}))}function ME(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return LE(t)},slots:t.slots,emit:t.emit,expose:e}}function Da(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(em(Yp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ei)return ei[n](t)},has(e,n){return n in e||n in ei}}))}function UE(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function FE(t){return Z(t)&&"__vccOpts"in t}const Ot=(t,e)=>Vw(t,e,_i);function Sm(t,e,n){const r=arguments.length;return r===2?Te(e)&&!K(e)?pl(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&pl(n)&&(n=[n]),oe(t,e,n))}const $E=Symbol.for("v-scx"),BE=()=>wn($E),jE="3.3.8",qE="http://www.w3.org/2000/svg",ur=typeof document<"u"?document:null,Ed=ur&&ur.createElement("template"),HE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ur.createElementNS(qE,t):ur.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ur.createTextNode(t),createComment:t=>ur.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ur.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ed.innerHTML=r?`<svg>${t}</svg>`:t;const a=Ed.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},WE=Symbol("_vtc");function zE(t,e,n){const r=t[WE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const KE=Symbol("_vod");function GE(t,e,n){const r=t.style,s=Ue(n);if(n&&!s){if(e&&!Ue(e))for(const i in e)n[i]==null&&ml(r,i,"");for(const i in n)ml(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),KE in t&&(r.display=i)}}const Id=/\s*!important$/;function ml(t,e,n){if(K(n))n.forEach(r=>ml(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=QE(t,e);Id.test(n)?t.setProperty(Rs(r),n.replace(Id,""),"important"):t[r]=n}}const Td=["Webkit","Moz","ms"],Rc={};function QE(t,e){const n=Rc[e];if(n)return n;let r=un(e);if(r!=="filter"&&r in t)return Rc[e]=r;r=Ia(r);for(let s=0;s<Td.length;s++){const i=Td[s]+r;if(i in t)return Rc[e]=i}return e}const Ad="http://www.w3.org/1999/xlink";function YE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ad,e.slice(6,e.length)):t.setAttributeNS(Ad,e,n);else{const i=ow(e);n==null||i&&!Vp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function JE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Vp(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Yr(t,e,n,r){t.addEventListener(e,n,r)}function XE(t,e,n,r){t.removeEventListener(e,n,r)}const bd=Symbol("_vei");function ZE(t,e,n,r,s=null){const i=t[bd]||(t[bd]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=eI(e);if(r){const l=i[e]=rI(r,s);Yr(t,a,l,c)}else o&&(XE(t,a,o,c),i[e]=void 0)}}const Rd=/(?:Once|Passive|Capture)$/;function eI(t){let e;if(Rd.test(t)){e={};let r;for(;r=t.match(Rd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rs(t.slice(2)),e]}let Sc=0;const tI=Promise.resolve(),nI=()=>Sc||(tI.then(()=>Sc=0),Sc=Date.now());function rI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Mt(sI(r,n.value),e,5,[r])};return n.value=t,n.attached=nI(),n}function sI(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Sd=/^on[a-z]/,iI=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?zE(t,r,s):e==="style"?GE(t,n,r):ya(e)?eu(e)||ZE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):oI(t,e,r,s))?JE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),YE(t,e,r,s))};function oI(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Sd.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Sd.test(e)&&Ue(n)?!1:e in t}const Pd=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>Co(e,n):e};function aI(t){t.target.composing=!0}function Cd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Pc=Symbol("_assign"),Ir={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Pc]=Pd(s);const i=r||s.props&&s.props.type==="number";Yr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=nl(a)),t[Pc](a)}),n&&Yr(t,"change",()=>{t.value=t.value.trim()}),e||(Yr(t,"compositionstart",aI),Yr(t,"compositionend",Cd),Yr(t,"change",Cd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Pc]=Pd(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&nl(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},cI=["ctrl","shift","alt","meta"],lI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>cI.some(n=>t[`${n}Key`]&&!e.includes(n))},Pm=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=lI[e[s]];if(i&&i(n,e))return}return t(n,...r)},uI=Qe({patchProp:iI},HE);let kd;function hI(){return kd||(kd=IE(uI))}const dI=(...t)=>{const e=hI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=fI(r);if(!s)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function fI(t){return Ue(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Jr=typeof window<"u";function pI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Cc(t,e){const n={};for(const r in e){const s=e[r];n[r]=$t(s)?s.map(t):t(s)}return n}const ni=()=>{},$t=Array.isArray,mI=/\/$/,gI=t=>t.replace(mI,"");function kc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=wI(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function _I(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Dd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yI(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&gs(e.matched[r],n.matched[s])&&Cm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Cm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vI(t[n],e[n]))return!1;return!0}function vI(t,e){return $t(t)?Nd(t,e):$t(e)?Nd(e,t):t===e}function Nd(t,e){return $t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function wI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var yi;(function(t){t.pop="pop",t.push="push"})(yi||(yi={}));var ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ri||(ri={}));function EI(t){if(!t)if(Jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gI(t)}const II=/^[^#]+#/;function TI(t,e){return t.replace(II,"#")+e}function AI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Na=()=>({left:window.pageXOffset,top:window.pageYOffset});function bI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=AI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Od(t,e){return(history.state?history.state.position-e:-1)+t}const gl=new Map;function RI(t,e){gl.set(t,e)}function SI(t){const e=gl.get(t);return gl.delete(t),e}let PI=()=>location.protocol+"//"+location.host;function km(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Dd(c,"")}return Dd(n,t)+r+s}function CI(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=km(t,location),y=n.value,A=e.value;let w=0;if(d){if(n.value=p,e.value=d,o&&o===y){o=null;return}w=A?d.position-A.position:0}else r(p);s.forEach(C=>{C(n.value,y,{delta:w,type:yi.pop,direction:w?w>0?ri.forward:ri.back:ri.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(pe({},d.state,{scroll:Na()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function xd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Na():null}}function kI(t){const{history:e,location:n}=window,r={value:km(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:PI()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=pe({},e.state,xd(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=pe({},s.value,e.state,{forward:c,scroll:Na()});i(u.current,u,!0);const h=pe({},xd(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function DI(t){t=EI(t);const e=kI(t),n=CI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=pe({location:"",base:t,go:r,createHref:TI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function NI(t){return typeof t=="string"||t&&typeof t=="object"}function Dm(t){return typeof t=="string"||typeof t=="symbol"}const Dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nm=Symbol("");var Vd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vd||(Vd={}));function _s(t,e){return pe(new Error,{type:t,[Nm]:!0},e)}function pn(t,e){return t instanceof Error&&Nm in t&&(e==null||!!(t.type&e))}const Ld="[^/]+?",OI={sensitive:!1,strict:!1,start:!0,end:!0},xI=/[.+*?^${}()[\]/\\]/g;function VI(t,e){const n=pe({},OI,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(xI,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:A,optional:w,regexp:C}=d;i.push({name:y,repeatable:A,optional:w});const k=C||Ld;if(k!==Ld){p+=10;try{new RegExp(`(${k})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+D.message)}}let F=A?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(F=w&&l.length<2?`(?:/${F})`:"/"+F),w&&(F+="?"),s+=F,p+=20,w&&(p+=-8),A&&(p+=-20),k===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",y=i[d-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:A,optional:w}=p,C=y in l?l[y]:"";if($t(C)&&!A)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=$t(C)?C.join("/"):C;if(!k)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function LI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function MI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=LI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Md(r))return 1;if(Md(s))return-1}return s.length-r.length}function Md(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const UI={type:0,value:""},FI=/[a-zA-Z0-9_]/;function $I(t){if(!t)return[[]];if(t==="/")return[[UI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:FI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function BI(t,e,n){const r=VI($I(t.path),n),s=pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function jI(t,e){const n=[],r=new Map;e=$d({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,y=qI(u);y.aliasOf=d&&d.record;const A=$d(e,u),w=[y];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of F)w.push(pe({},y,{components:d?d.record.components:y.components,path:D,aliasOf:d?d.record:y}))}let C,k;for(const F of w){const{path:D}=F;if(h&&D[0]!=="/"){const fe=h.record.path,ue=fe[fe.length-1]==="/"?"":"/";F.path=h.record.path+(D&&ue+D)}if(C=BI(F,h,A),d?d.alias.push(C):(k=k||C,k!==C&&k.alias.push(C),p&&u.name&&!Fd(C)&&o(u.name)),y.children){const fe=y.children;for(let ue=0;ue<fe.length;ue++)i(fe[ue],C,d&&d.children[ue])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return k?()=>{o(k)}:ni}function o(u){if(Dm(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&MI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Om(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Fd(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},y,A;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw _s(1,{location:u});A=d.record.name,p=pe(Ud(h.params,d.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&Ud(u.params,d.keys.map(k=>k.name))),y=d.stringify(p)}else if("path"in u)y=u.path,d=n.find(k=>k.re.test(y)),d&&(p=d.parse(y),A=d.record.name);else{if(d=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!d)throw _s(1,{location:u,currentLocation:h});A=d.record.name,p=pe({},h.params,u.params),y=d.stringify(p)}const w=[];let C=d;for(;C;)w.unshift(C.record),C=C.parent;return{name:A,path:y,params:p,matched:w,meta:WI(w)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ud(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function qI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:HI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function HI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Fd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function WI(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function $d(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Om(t,e){return e.children.some(n=>n===t||Om(t,n))}const xm=/#/g,zI=/&/g,KI=/\//g,GI=/=/g,QI=/\?/g,Vm=/\+/g,YI=/%5B/g,JI=/%5D/g,Lm=/%5E/g,XI=/%60/g,Mm=/%7B/g,ZI=/%7C/g,Um=/%7D/g,eT=/%20/g;function mu(t){return encodeURI(""+t).replace(ZI,"|").replace(YI,"[").replace(JI,"]")}function tT(t){return mu(t).replace(Mm,"{").replace(Um,"}").replace(Lm,"^")}function _l(t){return mu(t).replace(Vm,"%2B").replace(eT,"+").replace(xm,"%23").replace(zI,"%26").replace(XI,"`").replace(Mm,"{").replace(Um,"}").replace(Lm,"^")}function nT(t){return _l(t).replace(GI,"%3D")}function rT(t){return mu(t).replace(xm,"%23").replace(QI,"%3F")}function sT(t){return t==null?"":rT(t).replace(KI,"%2F")}function Go(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function iT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Vm," "),o=i.indexOf("="),a=Go(o<0?i:i.slice(0,o)),c=o<0?null:Go(i.slice(o+1));if(a in e){let l=e[a];$t(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Bd(t){let e="";for(let n in t){const r=t[n];if(n=nT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(r)?r.map(i=>i&&_l(i)):[r&&_l(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function oT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const aT=Symbol(""),jd=Symbol(""),gu=Symbol(""),Fm=Symbol(""),yl=Symbol("");function $s(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(_s(4,{from:n,to:e})):h instanceof Error?a(h):NI(h)?a(_s(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Dc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(cT(a)){const l=(a.__vccOpts||a)[e];l&&s.push(xn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=pI(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&xn(d,n,r,i,o)()}))}}return s}function cT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qd(t){const e=wn(gu),n=wn(Fm),r=Ot(()=>e.resolve(vr(t.to))),s=Ot(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(gs.bind(null,u));if(d>-1)return d;const p=Hd(c[l-2]);return l>1&&Hd(u)===p&&h[h.length-1].path!==p?h.findIndex(gs.bind(null,c[l-2])):d}),i=Ot(()=>s.value>-1&&dT(n.params,r.value.params)),o=Ot(()=>s.value>-1&&s.value===n.matched.length-1&&Cm(n.params,r.value.params));function a(c={}){return hT(c)?e[vr(t.replace)?"replace":"push"](vr(t.to)).catch(ni):Promise.resolve()}return{route:r,href:Ot(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const lT=um({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qd,setup(t,{slots:e}){const n=Aa(qd(t)),{options:r}=wn(gu),s=Ot(()=>({[Wd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Wd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Sm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),uT=lT;function hT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$t(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Hd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wd=(t,e,n)=>t??e??n,fT=um({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=wn(yl),s=Ot(()=>t.route||r.value),i=wn(jd,0),o=Ot(()=>{let l=vr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ot(()=>s.value.matched[o.value]);No(jd,Ot(()=>o.value+1)),No(aT,a),No(yl,s);const c=kw();return ko(()=>[c.value,a.value,t.name],([l,u,h],[d,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!gs(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return zd(n.default,{Component:d,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,w=Sm(d,pe({},y,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return zd(n.default,{Component:w,route:l})||w}}});function zd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $m=fT;function pT(t){const e=jI(t.routes,t),n=t.parseQuery||iT,r=t.stringifyQuery||Bd,s=t.history,i=$s(),o=$s(),a=$s(),c=Dw(Dn);let l=Dn;Jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Cc.bind(null,I=>""+I),h=Cc.bind(null,sT),d=Cc.bind(null,Go);function p(I,U){let O,B;return Dm(I)?(O=e.getRecordMatcher(I),B=U):B=I,e.addRoute(B,O)}function y(I){const U=e.getRecordMatcher(I);U&&e.removeRoute(U)}function A(){return e.getRoutes().map(I=>I.record)}function w(I){return!!e.getRecordMatcher(I)}function C(I,U){if(U=pe({},U||c.value),typeof I=="string"){const _=kc(n,I,U.path),v=e.resolve({path:_.path},U),b=s.createHref(_.fullPath);return pe(_,v,{params:d(v.params),hash:Go(_.hash),redirectedFrom:void 0,href:b})}let O;if("path"in I)O=pe({},I,{path:kc(n,I.path,U.path).path});else{const _=pe({},I.params);for(const v in _)_[v]==null&&delete _[v];O=pe({},I,{params:h(_)}),U.params=h(U.params)}const B=e.resolve(O,U),de=I.hash||"";B.params=u(d(B.params));const f=_I(r,pe({},I,{hash:tT(de),path:B.path})),m=s.createHref(f);return pe({fullPath:f,hash:de,query:r===Bd?oT(I.query):I.query||{}},B,{redirectedFrom:void 0,href:m})}function k(I){return typeof I=="string"?kc(n,I,c.value.path):pe({},I)}function F(I,U){if(l!==I)return _s(8,{from:U,to:I})}function D(I){return Ce(I)}function fe(I){return D(pe(k(I),{replace:!0}))}function ue(I){const U=I.matched[I.matched.length-1];if(U&&U.redirect){const{redirect:O}=U;let B=typeof O=="function"?O(I):O;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=k(B):{path:B},B.params={}),pe({query:I.query,hash:I.hash,params:"path"in B?{}:I.params},B)}}function Ce(I,U){const O=l=C(I),B=c.value,de=I.state,f=I.force,m=I.replace===!0,_=ue(O);if(_)return Ce(pe(k(_),{state:typeof _=="object"?pe({},de,_.state):de,force:f,replace:m}),U||O);const v=O;v.redirectedFrom=U;let b;return!f&&yI(r,B,O)&&(b=_s(16,{to:v,from:B}),Qt(B,B,!0,!1)),(b?Promise.resolve(b):at(v,B)).catch(R=>pn(R)?pn(R,2)?R:Cn(R):he(R,v,B)).then(R=>{if(R){if(pn(R,2))return Ce(pe({replace:m},k(R.to),{state:typeof R.to=="object"?pe({},de,R.to.state):de,force:f}),U||v)}else R=ir(v,B,!0,m,de);return Pn(v,B,R),R})}function Ye(I,U){const O=F(I,U);return O?Promise.reject(O):Promise.resolve()}function bt(I){const U=zr.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(I):I()}function at(I,U){let O;const[B,de,f]=mT(I,U);O=Dc(B.reverse(),"beforeRouteLeave",I,U);for(const _ of B)_.leaveGuards.forEach(v=>{O.push(xn(v,I,U))});const m=Ye.bind(null,I,U);return O.push(m),Je(O).then(()=>{O=[];for(const _ of i.list())O.push(xn(_,I,U));return O.push(m),Je(O)}).then(()=>{O=Dc(de,"beforeRouteUpdate",I,U);for(const _ of de)_.updateGuards.forEach(v=>{O.push(xn(v,I,U))});return O.push(m),Je(O)}).then(()=>{O=[];for(const _ of f)if(_.beforeEnter)if($t(_.beforeEnter))for(const v of _.beforeEnter)O.push(xn(v,I,U));else O.push(xn(_.beforeEnter,I,U));return O.push(m),Je(O)}).then(()=>(I.matched.forEach(_=>_.enterCallbacks={}),O=Dc(f,"beforeRouteEnter",I,U),O.push(m),Je(O))).then(()=>{O=[];for(const _ of o.list())O.push(xn(_,I,U));return O.push(m),Je(O)}).catch(_=>pn(_,8)?_:Promise.reject(_))}function Pn(I,U,O){a.list().forEach(B=>bt(()=>B(I,U,O)))}function ir(I,U,O,B,de){const f=F(I,U);if(f)return f;const m=U===Dn,_=Jr?history.state:{};O&&(B||m?s.replace(I.fullPath,pe({scroll:m&&_&&_.scroll},de)):s.push(I.fullPath,de)),c.value=I,Qt(I,U,O,m),Cn()}let Gt;function Ms(){Gt||(Gt=s.listen((I,U,O)=>{if(!lo.listening)return;const B=C(I),de=ue(B);if(de){Ce(pe(de,{replace:!0}),B).catch(ni);return}l=B;const f=c.value;Jr&&RI(Od(f.fullPath,O.delta),Na()),at(B,f).catch(m=>pn(m,12)?m:pn(m,2)?(Ce(m.to,B).then(_=>{pn(_,20)&&!O.delta&&O.type===yi.pop&&s.go(-1,!1)}).catch(ni),Promise.reject()):(O.delta&&s.go(-O.delta,!1),he(m,B,f))).then(m=>{m=m||ir(B,f,!1),m&&(O.delta&&!pn(m,8)?s.go(-O.delta,!1):O.type===yi.pop&&pn(m,20)&&s.go(-1,!1)),Pn(B,f,m)}).catch(ni)}))}let Hr=$s(),Fe=$s(),_e;function he(I,U,O){Cn(I);const B=Fe.list();return B.length?B.forEach(de=>de(I,U,O)):console.error(I),Promise.reject(I)}function fn(){return _e&&c.value!==Dn?Promise.resolve():new Promise((I,U)=>{Hr.add([I,U])})}function Cn(I){return _e||(_e=!I,Ms(),Hr.list().forEach(([U,O])=>I?O(I):U()),Hr.reset()),I}function Qt(I,U,O,B){const{scrollBehavior:de}=t;if(!Jr||!de)return Promise.resolve();const f=!O&&SI(Od(I.fullPath,0))||(B||!O)&&history.state&&history.state.scroll||null;return nm().then(()=>de(I,U,f)).then(m=>m&&bI(m)).catch(m=>he(m,I,U))}const ht=I=>s.go(I);let Wr;const zr=new Set,lo={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:w,getRoutes:A,resolve:C,options:t,push:D,replace:fe,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Fe.add,isReady:fn,install(I){const U=this;I.component("RouterLink",uT),I.component("RouterView",$m),I.config.globalProperties.$router=U,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>vr(c)}),Jr&&!Wr&&c.value===Dn&&(Wr=!0,D(s.location).catch(de=>{}));const O={};for(const de in Dn)Object.defineProperty(O,de,{get:()=>c.value[de],enumerable:!0});I.provide(gu,U),I.provide(Fm,Kp(O)),I.provide(yl,c);const B=I.unmount;zr.add(I),I.unmount=function(){zr.delete(I),zr.size<1&&(l=Dn,Gt&&Gt(),Gt=null,c.value=Dn,Wr=!1,_e=!1),B()}}};function Je(I){return I.reduce((U,O)=>U.then(()=>bt(O)),Promise.resolve())}return lo}function mT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>gs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>gs(l,c))||s.push(c))}return[n,r,s]}function gT(t){localStorage.setItem("userData",JSON.stringify(t))}function Oa(){const t=localStorage.getItem("userData");return t?JSON.parse(t).firebaseId:null}function _T(){localStorage.removeItem("userData")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new vT;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wT=function(t){const e=Bm(t);return jm.encodeByteArray(e,!0)},Qo=function(t){return wT(t).replace(/\./g,"")},qm=function(t){try{return jm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=()=>ET().__FIREBASE_DEFAULTS__,TT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qm(t[1]);return e&&JSON.parse(e)},xa=()=>{try{return IT()||TT()||AT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hm=t=>{var e,n;return(n=(e=xa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wm=t=>{const e=Hm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zm=()=>{var t;return(t=xa())===null||t===void 0?void 0:t.config},Km=t=>{var e;return(e=xa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function ST(){var t;const e=(t=xa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CT(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kT(){return!ST()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _u(){try{return typeof indexedDB=="object"}catch{return!1}}function Ym(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function DT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NT,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?OT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ct(s,a,r)}}function OT(t,e){return t.replace(xT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xT=/\{\$([^}]+)}/g;function VT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Kd(i)&&Kd(o)){if(!vi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Kd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Gs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function LT(t,e){const n=new MT(t,e);return n.subscribe.bind(n)}class MT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Nc),s.error===void 0&&(s.error=Nc),s.complete===void 0&&(s.complete=Nc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=1e3,$T=2,BT=4*60*60*1e3,jT=.5;function Gd(t,e=FT,n=$T){const r=e*Math.pow(n,t),s=Math.round(jT*r*(Math.random()-.5)*2);return Math.min(BT,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){return t&&t._delegate?t._delegate:t}class Pt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WT(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HT(t){return t===cr?void 0:t}function WT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const KT={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},GT=re.INFO,QT={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},YT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=QT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Va{constructor(e){this.name=e,this._logLevel=GT,this._logHandler=YT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const JT=(t,e)=>e.some(n=>t instanceof n);let Qd,Yd;function XT(){return Qd||(Qd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZT(){return Yd||(Yd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jm=new WeakMap,vl=new WeakMap,Xm=new WeakMap,Oc=new WeakMap,yu=new WeakMap;function eA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jm.set(n,t)}).catch(()=>{}),yu.set(e,t),e}function tA(t){if(vl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vl.set(t,e)}let wl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nA(t){wl=t(wl)}function rA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xc(this),e,...n);return Xm.set(r,e.sort?e.sort():[e]),Hn(r)}:ZT().includes(t)?function(...e){return t.apply(xc(this),e),Hn(Jm.get(this))}:function(...e){return Hn(t.apply(xc(this),e))}}function sA(t){return typeof t=="function"?rA(t):(t instanceof IDBTransaction&&tA(t),JT(t,XT())?new Proxy(t,wl):t)}function Hn(t){if(t instanceof IDBRequest)return eA(t);if(Oc.has(t))return Oc.get(t);const e=sA(t);return e!==t&&(Oc.set(t,e),yu.set(e,t)),e}const xc=t=>yu.get(t);function Zm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Hn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Hn(o.result),c.oldVersion,c.newVersion,Hn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const iA=["get","getKey","getAll","getAllKeys","count"],oA=["put","add","delete","clear"],Vc=new Map;function Jd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vc.get(e))return Vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=oA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||iA.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Vc.set(e,i),i}nA(t=>({...t,get:(e,n,r)=>Jd(e,n)||t.get(e,n,r),has:(e,n)=>!!Jd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const El="@firebase/app",Xd="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Va("@firebase/app"),lA="@firebase/app-compat",uA="@firebase/analytics-compat",hA="@firebase/analytics",dA="@firebase/app-check-compat",fA="@firebase/app-check",pA="@firebase/auth",mA="@firebase/auth-compat",gA="@firebase/database",_A="@firebase/database-compat",yA="@firebase/functions",vA="@firebase/functions-compat",wA="@firebase/installations",EA="@firebase/installations-compat",IA="@firebase/messaging",TA="@firebase/messaging-compat",AA="@firebase/performance",bA="@firebase/performance-compat",RA="@firebase/remote-config",SA="@firebase/remote-config-compat",PA="@firebase/storage",CA="@firebase/storage-compat",kA="@firebase/firestore",DA="@firebase/firestore-compat",NA="firebase",OA="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="[DEFAULT]",xA={[El]:"fire-core",[lA]:"fire-core-compat",[hA]:"fire-analytics",[uA]:"fire-analytics-compat",[fA]:"fire-app-check",[dA]:"fire-app-check-compat",[pA]:"fire-auth",[mA]:"fire-auth-compat",[gA]:"fire-rtdb",[_A]:"fire-rtdb-compat",[yA]:"fire-fn",[vA]:"fire-fn-compat",[wA]:"fire-iid",[EA]:"fire-iid-compat",[IA]:"fire-fcm",[TA]:"fire-fcm-compat",[AA]:"fire-perf",[bA]:"fire-perf-compat",[RA]:"fire-rc",[SA]:"fire-rc-compat",[PA]:"fire-gcs",[CA]:"fire-gcs-compat",[kA]:"fire-fst",[DA]:"fire-fst-compat","fire-js":"fire-js",[NA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new Map,Tl=new Map;function VA(t,e){try{t.container.addComponent(e)}catch(n){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bt(t){const e=t.name;if(Tl.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;Tl.set(e,t);for(const n of Yo.values())VA(n,t);return!0}function Jn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wn=new Ur("app","Firebase",LA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=OA;function eg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Il,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(n||(n=zm()),!n)throw Wn.create("no-options");const i=Yo.get(s);if(i){if(vi(n,i.options)&&vi(r,i.config))return i;throw Wn.create("duplicate-app",{appName:s})}const o=new zT(s);for(const c of Tl.values())o.addComponent(c);const a=new MA(n,r,o);return Yo.set(s,a),a}function La(t=Il){const e=Yo.get(t);if(!e&&t===Il&&zm())return eg();if(!e)throw Wn.create("no-app",{appName:t});return e}function mt(t,e,n){var r;let s=(r=xA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(a.join(" "));return}Bt(new Pt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="firebase-heartbeat-database",FA=1,wi="firebase-heartbeat-store";let Lc=null;function tg(){return Lc||(Lc=Zm(UA,FA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),Lc}async function $A(t){try{const n=(await tg()).transaction(wi),r=await n.objectStore(wi).get(ng(t));return await n.done,r}catch(e){if(e instanceof Ct)Pr.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(n.message)}}}async function Zd(t,e){try{const r=(await tg()).transaction(wi,"readwrite");await r.objectStore(wi).put(e,ng(t)),await r.done}catch(n){if(n instanceof Ct)Pr.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pr.warn(r.message)}}}function ng(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=1024,jA=30*24*60*60*1e3;class qA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ef();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=jA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ef(),{heartbeatsToSend:r,unsentEntries:s}=HA(this._heartbeatsCache.heartbeats),i=Qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ef(){return new Date().toISOString().substring(0,10)}function HA(t,e=BA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),tf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),tf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _u()?Ym().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $A(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tf(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){Bt(new Pt("platform-logger",e=>new aA(e),"PRIVATE")),Bt(new Pt("heartbeat",e=>new qA(e),"PRIVATE")),mt(El,Xd,t),mt(El,Xd,"esm2017"),mt("fire-js","")}zA("");var KA="firebase",GA="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt(KA,GA,"app");var QA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,vu=vu||{},G=QA||self;function Ma(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Bi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function YA(t){return Object.prototype.hasOwnProperty.call(t,Mc)&&t[Mc]||(t[Mc]=++JA)}var Mc="closure_uid_"+(1e9*Math.random()>>>0),JA=0;function XA(t,e,n){return t.call.apply(t.bind,arguments)}function ZA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=XA:rt=ZA,rt.apply(null,arguments)}function _o(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Xn(){this.s=this.s,this.o=this.o}var e0=0;Xn.prototype.s=!1;Xn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),e0!=0)&&YA(this)};Xn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function wu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function nf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ma(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var t0=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};G.addEventListener("test",n,e),G.removeEventListener("test",n,e)}catch{}return t}();function Ei(t){return/^[\s\xa0]*$/.test(t)}function Ua(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function en(t){return Ua().indexOf(t)!=-1}function Eu(t){return Eu[" "](t),t}Eu[" "]=function(){};function n0(t,e){var n=G0;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var r0=en("Opera"),ys=en("Trident")||en("MSIE"),sg=en("Edge"),Al=sg||ys,ig=en("Gecko")&&!(Ua().toLowerCase().indexOf("webkit")!=-1&&!en("Edge"))&&!(en("Trident")||en("MSIE"))&&!en("Edge"),s0=Ua().toLowerCase().indexOf("webkit")!=-1&&!en("Edge");function og(){var t=G.document;return t?t.documentMode:void 0}var bl;e:{var Uc="",Fc=function(){var t=Ua();if(ig)return/rv:([^\);]+)(\)|;)/.exec(t);if(sg)return/Edge\/([\d\.]+)/.exec(t);if(ys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(s0)return/WebKit\/(\S+)/.exec(t);if(r0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Fc&&(Uc=Fc?Fc[1]:""),ys){var $c=og();if($c!=null&&$c>parseFloat(Uc)){bl=String($c);break e}}bl=Uc}var Rl;if(G.document&&ys){var rf=og();Rl=rf||parseInt(bl,10)||void 0}else Rl=void 0;var i0=Rl;function Ii(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ig){e:{try{Eu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:o0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ii.$.h.call(this)}}je(Ii,st);var o0={2:"touch",3:"pen",4:"mouse"};Ii.prototype.h=function(){Ii.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ji="closure_listenable_"+(1e6*Math.random()|0),a0=0;function c0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++a0,this.fa=this.ia=!1}function Fa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Iu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function l0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function ag(t){const e={};for(const n in t)e[n]=t[n];return e}const sf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<sf.length;i++)n=sf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $a(t){this.src=t,this.g={},this.h=0}$a.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Pl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new c0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Sl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=rg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Fa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Tu="closure_lm_"+(1e6*Math.random()|0),Bc={};function lg(t,e,n,r,s){if(r&&r.once)return hg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)lg(t,e[i],n,r,s);return null}return n=Ru(n),t&&t[ji]?t.O(e,n,Bi(r)?!!r.capture:!!r,s):ug(t,e,n,!1,r,s)}function ug(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Bi(s)?!!s.capture:!!s,a=bu(t);if(a||(t[Tu]=a=new $a(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=u0(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)t0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(fg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function u0(){function t(n){return e.call(t.src,t.listener,n)}const e=h0;return t}function hg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)hg(t,e[i],n,r,s);return null}return n=Ru(n),t&&t[ji]?t.P(e,n,Bi(r)?!!r.capture:!!r,s):ug(t,e,n,!0,r,s)}function dg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)dg(t,e[i],n,r,s);else r=Bi(r)?!!r.capture:!!r,n=Ru(n),t&&t[ji]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Pl(i,n,r,s),-1<n&&(Fa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=bu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pl(e,n,r,s)),(n=-1<t?e[t]:null)&&Au(n))}function Au(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ji])Sl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(fg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bu(e))?(Sl(n,t),n.h==0&&(n.src=null,e[Tu]=null)):Fa(t)}}}function fg(t){return t in Bc?Bc[t]:Bc[t]="on"+t}function h0(t,e){if(t.fa)t=!0;else{e=new Ii(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Au(t),t=n.call(r,e)}return t}function bu(t){return t=t[Tu],t instanceof $a?t:null}var jc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ru(t){return typeof t=="function"?t:(t[jc]||(t[jc]=function(e){return t.handleEvent(e)}),t[jc])}function Be(){Xn.call(this),this.i=new $a(this),this.S=this,this.J=null}je(Be,Xn);Be.prototype[ji]=!0;Be.prototype.removeEventListener=function(t,e,n,r){dg(this,t,e,n,r)};function Ke(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var s=e;e=new st(r,t),cg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=yo(o,r,!0,e)&&s}if(o=e.g=t,s=yo(o,r,!0,e)&&s,s=yo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=yo(o,r,!1,e)&&s}Be.prototype.N=function(){if(Be.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fa(n[r]);delete t.g[e],t.h--}}this.J=null};Be.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Be.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Sl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Su=G.JSON.stringify;class d0{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function f0(){var t=Pu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class p0{constructor(){this.h=this.g=null}add(e,n){const r=pg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var pg=new d0(()=>new m0,t=>t.reset());class m0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function g0(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _0(t){G.setTimeout(()=>{throw t},0)}let Ti,Ai=!1,Pu=new p0,mg=()=>{const t=G.Promise.resolve(void 0);Ti=()=>{t.then(y0)}};var y0=()=>{for(var t;t=f0();){try{t.h.call(t.g)}catch(n){_0(n)}var e=pg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ai=!1};function Ba(t,e){Be.call(this),this.h=t||1,this.g=e||G,this.j=rt(this.qb,this),this.l=Date.now()}je(Ba,Be);V=Ba.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ke(this,"tick"),this.ga&&(Cu(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){Ba.$.N.call(this),Cu(this),delete this.g};function ku(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function gg(t){t.g=ku(()=>{t.g=null,t.i&&(t.i=!1,gg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class v0 extends Xn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gg(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bi(t){Xn.call(this),this.h=t,this.g={}}je(bi,Xn);var of=[];function _g(t,e,n,r){Array.isArray(n)||(n&&(of[0]=n.toString()),n=of);for(var s=0;s<n.length;s++){var i=lg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function yg(t){Iu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Au(e)},t),t.g={}}bi.prototype.N=function(){bi.$.N.call(this),yg(this)};bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ja(){this.g=!0}ja.prototype.Ea=function(){this.g=!1};function w0(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function E0(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function ts(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+T0(t,n)+(r?" "+r:"")})}function I0(t,e){t.info(function(){return"TIMEOUT: "+e})}ja.prototype.info=function(){};function T0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Su(n)}catch{return e}}var $r={},af=null;function qa(){return af=af||new Be}$r.Ta="serverreachability";function vg(t){st.call(this,$r.Ta,t)}je(vg,st);function Ri(t){const e=qa();Ke(e,new vg(e))}$r.STAT_EVENT="statevent";function wg(t,e){st.call(this,$r.STAT_EVENT,t),this.stat=e}je(wg,st);function ut(t){const e=qa();Ke(e,new wg(e,t))}$r.Ua="timingevent";function Eg(t,e){st.call(this,$r.Ua,t),this.size=e}je(Eg,st);function qi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var Ha={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ig={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Du(){}Du.prototype.h=null;function cf(t){return t.h||(t.h=t.i())}function Tg(){}var Hi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Nu(){st.call(this,"d")}je(Nu,st);function Ou(){st.call(this,"c")}je(Ou,st);var Cl;function Wa(){}je(Wa,Du);Wa.prototype.g=function(){return new XMLHttpRequest};Wa.prototype.i=function(){return{}};Cl=new Wa;function Wi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new bi(this),this.P=A0,t=Al?125:void 0,this.V=new Ba(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ag}function Ag(){this.i=null,this.g="",this.h=!1}var A0=45e3,bg={},kl={};V=Wi.prototype;V.setTimeout=function(t){this.P=t};function Dl(t,e,n){t.L=1,t.A=Ka(In(e)),t.u=n,t.S=!0,Rg(t,null)}function Rg(t,e){t.G=Date.now(),zi(t),t.B=In(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),xg(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Ag,t.g=t_(t.l,n?e:null,!t.u),0<t.O&&(t.M=new v0(rt(t.Pa,t,t.g),t.O)),_g(t.U,t.g,"readystatechange",t.nb),e=t.I?ag(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ri(),w0(t.j,t.v,t.B,t.m,t.W,t.u)}V.nb=function(t){t=t.target;const e=this.M;e&&tn(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=tn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Al||this.g&&(this.h.h||this.g.ja()||df(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ri(3):Ri(2)),za(this);var n=this.g.da();this.ca=n;t:if(Sg(this)){var r=df(this.g);t="";var s=r.length,i=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),si(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,E0(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ei(a)){var l=a;break t}}l=null}if(n=l)ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nl(this,n);else{this.i=!1,this.s=3,ut(12),fr(this),si(this);break e}}this.S?(Pg(this,u,o),Al&&this.i&&u==3&&(_g(this.U,this.V,"tick",this.mb),this.V.start())):(ts(this.j,this.m,o,null),Nl(this,o)),u==4&&fr(this),this.i&&!this.J&&(u==4?Jg(this.l,this):(this.i=!1,zi(this)))}else W0(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),fr(this),si(this)}}}catch{}finally{}};function Sg(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Pg(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=b0(t,n),s==kl){e==4&&(t.s=4,ut(14),r=!1),ts(t.j,t.m,null,"[Incomplete Response]");break}else if(s==bg){t.s=4,ut(15),ts(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ts(t.j,t.m,s,null),Nl(t,s);Sg(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fu(e),e.M=!0,ut(11))):(ts(t.j,t.m,n,"[Invalid Chunked Response]"),fr(t),si(t))}V.mb=function(){if(this.g){var t=tn(this.g),e=this.g.ja();this.o<e.length&&(za(this),Pg(this,t,e),this.i&&t!=4&&zi(this))}};function b0(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?kl:(n=Number(e.substring(n,r)),isNaN(n)?bg:(r+=1,r+n>e.length?kl:(e=e.slice(r,r+n),t.o=r+n,e)))}V.cancel=function(){this.J=!0,fr(this)};function zi(t){t.Y=Date.now()+t.P,Cg(t,t.P)}function Cg(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=qi(rt(t.lb,t),e)}function za(t){t.C&&(G.clearTimeout(t.C),t.C=null)}V.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(I0(this.j,this.B),this.L!=2&&(Ri(),ut(17)),fr(this),this.s=2,si(this)):Cg(this,this.Y-t)};function si(t){t.l.H==0||t.J||Jg(t.l,t)}function fr(t){za(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Cu(t.V),yg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Nl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ol(n.i,t))){if(!t.K&&Ol(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Zo(n),Ja(n);else break e;Uu(n),ut(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=qi(rt(n.ib,n),6e3));if(1>=Mg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else pr(n,11)}else if((t.K||n.g==t)&&Zo(n),!Ei(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(xu(i,i.h),i.h=null))}if(r.F){const A=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(r.Da=A,Ee(r.I,r.F,A))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=e_(r,r.J?r.pa:null,r.Y),o.K){Ug(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(za(a),zi(a)),r.g=o}else Qg(r);0<n.j.length&&Xa(n)}else l[0]!="stop"&&l[0]!="close"||pr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?pr(n,7):Mu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ri(4)}catch{}}function R0(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ma(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function S0(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ma(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function kg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ma(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=S0(t),r=R0(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Dg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function P0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Tr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Tr){this.h=t.h,Jo(this,t.j),this.s=t.s,this.g=t.g,Xo(this,t.m),this.l=t.l;var e=t.i,n=new Si;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),lf(this,n),this.o=t.o}else t&&(e=String(t).match(Dg))?(this.h=!1,Jo(this,e[1]||"",!0),this.s=Qs(e[2]||""),this.g=Qs(e[3]||"",!0),Xo(this,e[4]),this.l=Qs(e[5]||"",!0),lf(this,e[6]||"",!0),this.o=Qs(e[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}Tr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ys(e,uf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ys(e,uf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ys(n,n.charAt(0)=="/"?D0:k0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ys(n,O0)),t.join("")};function In(t){return new Tr(t)}function Jo(t,e,n){t.j=n?Qs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function lf(t,e,n){e instanceof Si?(t.i=e,x0(t.i,t.h)):(n||(e=Ys(e,N0)),t.i=new Si(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function Ka(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ys(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,C0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function C0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var uf=/[#\/\?@]/g,k0=/[#\?:]/g,D0=/[#\?]/g,N0=/[#\?@]/g,O0=/#/g;function Si(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Zn(t){t.g||(t.g=new Map,t.h=0,t.i&&P0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Si.prototype;V.add=function(t,e){Zn(this),this.i=null,t=Cs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ng(t,e){Zn(t),e=Cs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Og(t,e){return Zn(t),e=Cs(t,e),t.g.has(e)}V.forEach=function(t,e){Zn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){Zn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){Zn(this);let e=[];if(typeof t=="string")Og(this,t)&&(e=e.concat(this.g.get(Cs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Zn(this),this.i=null,t=Cs(this,t),Og(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function xg(t,e,n){Ng(t,e),0<n.length&&(t.i=null,t.g.set(Cs(t,e),wu(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Cs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function x0(t,e){e&&!t.j&&(Zn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ng(this,r),xg(this,s,n))},t)),t.j=e}var V0=class{constructor(t,e){this.g=t,this.map=e}};function Vg(t){this.l=t||L0,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var L0=10;function Lg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Mg(t){return t.h?1:t.g?t.g.size:0}function Ol(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xu(t,e){t.g?t.g.add(e):t.h=e}function Ug(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Vg.prototype.cancel=function(){if(this.i=Fg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Fg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return wu(t.i)}var M0=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function U0(){this.g=new M0}function F0(t,e,n){const r=n||"";try{kg(t,function(s,i){let o=s;Bi(s)&&(o=Su(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function $0(t,e){const n=new ja;if(G.Image){const r=new Image;r.onload=_o(vo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=_o(vo,n,r,"TestLoadImage: error",!1,e),r.onabort=_o(vo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=_o(vo,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function vo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ga(t){this.l=t.ec||null,this.j=t.ob||!1}je(Ga,Du);Ga.prototype.g=function(){return new Qa(this.l,this.j)};Ga.prototype.i=function(t){return function(){return t}}({});function Qa(t,e){Be.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Vu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(Qa,Be);var Vu=0;V=Qa.prototype;V.open=function(t,e){if(this.readyState!=Vu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pi(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ki(this)),this.readyState=Vu};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$g(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function $g(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ki(this):Pi(this),this.readyState==3&&$g(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,Ki(this))};V.Ya=function(t){this.g&&(this.response=t,Ki(this))};V.ka=function(){this.g&&Ki(this)};function Ki(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pi(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Pi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Qa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var B0=G.JSON.parse;function Re(t){Be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Bg,this.L=this.M=!1}je(Re,Be);var Bg="",j0=/^https?$/i,q0=["POST","PUT"];V=Re.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Cl.g(),this.C=this.u?cf(this.u):cf(Cl),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){hf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=G.FormData&&t instanceof G.FormData,!(0<=rg(q0,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Hg(this),0<this.B&&((this.L=H0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=ku(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){hf(this,i)}};function H0(t){return ys&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof vu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function hf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,jg(t),Ya(t)}function jg(t){t.F||(t.F=!0,Ke(t,"complete"),Ke(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),Ya(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ya(this,!0)),Re.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?qg(this):this.kb())};V.kb=function(){qg(this)};function qg(t){if(t.h&&typeof vu<"u"&&(!t.C[1]||tn(t)!=4||t.da()!=2)){if(t.v&&tn(t)==4)ku(t.La,0,t);else if(Ke(t,"readystatechange"),tn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Dg)[1]||null;!s&&G.self&&G.self.location&&(s=G.self.location.protocol.slice(0,-1)),r=!j0.test(s?s.toLowerCase():"")}n=r}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var i=2<tn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",jg(t)}}finally{Ya(t)}}}}function Ya(t,e){if(t.g){Hg(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function Hg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function tn(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),B0(e)}};function df(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Bg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function W0(t){const e={};t=(t.g&&2<=tn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ei(t[r]))continue;var n=g0(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}l0(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Wg(t){let e="";return Iu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Lu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Wg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Bs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zg(t){this.Ga=0,this.j=[],this.l=new ja,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Bs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Bs("baseRetryDelayMs",5e3,t),this.hb=Bs("retryDelaySeedMs",1e4,t),this.eb=Bs("forwardChannelMaxRetries",2,t),this.xa=Bs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Vg(t&&t.concurrentRequestLimit),this.Ja=new U0,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=zg.prototype;V.ra=8;V.H=1;function Mu(t){if(Kg(t),t.H==3){var e=t.W++,n=In(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),Gi(t,n),e=new Wi(t,t.l,e),e.L=2,e.A=Ka(In(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.A,n=!0),n||(e.g=t_(e.l,null),e.g.ha(e.A)),e.G=Date.now(),zi(e)}Zg(t)}function Ja(t){t.g&&(Fu(t),t.g.cancel(),t.g=null)}function Kg(t){Ja(t),t.u&&(G.clearTimeout(t.u),t.u=null),Zo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function Xa(t){if(!Lg(t.i)&&!t.m){t.m=!0;var e=t.Na;Ti||mg(),Ai||(Ti(),Ai=!0),Pu.add(e,t),t.C=0}}function z0(t,e){return Mg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=qi(rt(t.Na,t,e),Xg(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Wi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=ag(i),cg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Gg(this,s,e),n=In(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),Gi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Wg(i)))+"&"+e:this.o&&Lu(n,this.o,i)),xu(this.i,s),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),s.aa=!0,Dl(s,n,null)):Dl(s,n,e),this.H=2}}else this.H==3&&(t?ff(this,t):this.j.length==0||Lg(this.i)||ff(this))};function ff(t,e){var n;e?n=e.m:n=t.W++;const r=In(t.I);Ee(r,"SID",t.K),Ee(r,"RID",n),Ee(r,"AID",t.V),Gi(t,r),t.o&&t.s&&Lu(r,t.o,t.s),n=new Wi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Gg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),xu(t.i,n),Dl(n,r,e)}function Gi(t,e){t.na&&Iu(t.na,function(n,r){Ee(e,r,n)}),t.h&&kg({},function(n,r){Ee(e,r,n)})}function Gg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?rt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{F0(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Qg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ti||mg(),Ai||(Ti(),Ai=!0),Pu.add(e,t),t.A=0}}function Uu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=qi(rt(t.Ma,t),Xg(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,Yg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=qi(rt(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ut(10),Ja(this),Yg(this))};function Fu(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function Yg(t){t.g=new Wi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=In(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),Gi(t,e),t.o&&t.s&&Lu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ka(In(e)),n.u=null,n.S=!0,Rg(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Ja(this),Uu(this),ut(19))};function Zo(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Jg(t,e){var n=null;if(t.g==e){Zo(t),Fu(t),t.g=null;var r=2}else if(Ol(t.i,e))n=e.F,Ug(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=qa(),Ke(r,new Eg(r,n)),Xa(t)}else Qg(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&z0(t,e)||r==2&&Uu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:pr(t,5);break;case 4:pr(t,10);break;case 3:pr(t,6);break;default:pr(t,2)}}}function Xg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function pr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=rt(t.pb,t);n||(n=new Tr("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||Jo(n,"https"),Ka(n)),$0(n.toString(),r)}else ut(2);t.H=0,t.h&&t.h.za(e),Zg(t),Kg(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ut(2)):(this.l.info("Failed to ping google.com"),ut(1))};function Zg(t){if(t.H=0,t.ma=[],t.h){const e=Fg(t.i);(e.length!=0||t.j.length!=0)&&(nf(t.ma,e),nf(t.ma,t.j),t.i.i.length=0,wu(t.j),t.j.length=0),t.h.ya()}}function e_(t,e,n){var r=n instanceof Tr?In(n):new Tr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Xo(r,r.m);else{var s=G.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Tr(null);r&&Jo(i,r),e&&(i.g=e),s&&Xo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ee(r,n,e),Ee(r,"VER",t.ra),Gi(t,r),r}function t_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Re(new Ga({ob:n})):new Re(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function n_(){}V=n_.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function ea(){if(ys&&!(10<=Number(i0)))throw Error("Environmental error: no available transport.")}ea.prototype.g=function(t,e){return new Tt(t,e)};function Tt(t,e){Be.call(this),this.g=new zg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ei(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ei(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ks(this)}je(Tt,Be);Tt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ut(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=e_(t,null,t.Y),Xa(t)};Tt.prototype.close=function(){Mu(this.g)};Tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Su(t),t=n);e.j.push(new V0(e.fb++,t)),e.H==3&&Xa(e)};Tt.prototype.N=function(){this.g.h=null,delete this.j,Mu(this.g),delete this.g,Tt.$.N.call(this)};function r_(t){Nu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(r_,Nu);function s_(){Ou.call(this),this.status=1}je(s_,Ou);function ks(t){this.g=t}je(ks,n_);ks.prototype.Ba=function(){Ke(this.g,"a")};ks.prototype.Aa=function(t){Ke(this.g,new r_(t))};ks.prototype.za=function(t){Ke(this.g,new s_)};ks.prototype.ya=function(){Ke(this.g,"b")};function K0(){this.blockSize=-1}function jt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}je(jt,K0);jt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function qc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}jt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)qc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){qc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){qc(this,r),s=0;break}}this.h=s,this.i+=e};jt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function me(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var G0={};function $u(t){return-128<=t&&128>t?n0(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function nn(t){if(isNaN(t)||!isFinite(t))return as;if(0>t)return He(nn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=xl;return new me(e,0)}function i_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return He(i_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=nn(Math.pow(e,8)),r=as,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=nn(Math.pow(e,i)),r=r.R(i).add(nn(o))):(r=r.R(n),r=r.add(nn(o)))}return r}var xl=4294967296,as=$u(0),Vl=$u(1),pf=$u(16777216);V=me.prototype;V.ea=function(){if(Rt(this))return-He(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:xl+r)*e,e*=xl}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(gn(this))return"0";if(Rt(this))return"-"+He(this).toString(t);for(var e=nn(Math.pow(t,6)),n=this,r="";;){var s=na(n,e).g;n=ta(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,gn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function gn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Rt(t){return t.h==-1}V.X=function(t){return t=ta(this,t),Rt(t)?-1:gn(t)?0:1};function He(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new me(n,~t.h).add(Vl)}V.abs=function(){return Rt(this)?He(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new me(n,n[n.length-1]&-2147483648?-1:0)};function ta(t,e){return t.add(He(e))}V.R=function(t){if(gn(this)||gn(t))return as;if(Rt(this))return Rt(t)?He(this).R(He(t)):He(He(this).R(t));if(Rt(t))return He(this.R(He(t)));if(0>this.X(pf)&&0>t.X(pf))return nn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,wo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,wo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,wo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,wo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new me(n,0)};function wo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function js(t,e){this.g=t,this.h=e}function na(t,e){if(gn(e))throw Error("division by zero");if(gn(t))return new js(as,as);if(Rt(t))return e=na(He(t),e),new js(He(e.g),He(e.h));if(Rt(e))return e=na(t,He(e)),new js(He(e.g),e.h);if(30<t.g.length){if(Rt(t)||Rt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Vl,r=e;0>=r.X(t);)n=mf(n),r=mf(r);var s=Qr(n,1),i=Qr(r,1);for(r=Qr(r,2),n=Qr(n,2);!gn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Qr(r,1),n=Qr(n,1)}return e=ta(t,s.R(e)),new js(s,e)}for(s=as;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=nn(n),o=i.R(e);Rt(o)||0<o.X(t);)n-=r,i=nn(n),o=i.R(e);gn(i)&&(i=Vl),s=s.add(i),t=ta(t,o)}return new js(s,t)}V.gb=function(t){return na(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new me(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new me(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new me(n,this.h^t.h)};function mf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new me(n,t.h)}function Qr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new me(s,t.h)}ea.prototype.createWebChannel=ea.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;Ha.NO_ERROR=0;Ha.TIMEOUT=8;Ha.HTTP_ERROR=6;Ig.COMPLETE="complete";Tg.EventType=Hi;Hi.OPEN="a";Hi.CLOSE="b";Hi.ERROR="c";Hi.MESSAGE="d";Be.prototype.listen=Be.prototype.O;Re.prototype.listenOnce=Re.prototype.P;Re.prototype.getLastError=Re.prototype.Sa;Re.prototype.getLastErrorCode=Re.prototype.Ia;Re.prototype.getStatus=Re.prototype.da;Re.prototype.getResponseJson=Re.prototype.Wa;Re.prototype.getResponseText=Re.prototype.ja;Re.prototype.send=Re.prototype.ha;Re.prototype.setWithCredentials=Re.prototype.Oa;jt.prototype.digest=jt.prototype.l;jt.prototype.reset=jt.prototype.reset;jt.prototype.update=jt.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=nn;me.fromString=i_;var Q0=function(){return new ea},Y0=function(){return qa()},Hc=Ha,J0=Ig,X0=$r,gf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Eo=Tg,Z0=Re,eb=jt,cs=me;const _f="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="10.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Va("@firebase/firestore");function qs(){return Cr.logLevel}function x(t,...e){if(Cr.logLevel<=re.DEBUG){const n=e.map(Bu);Cr.debug(`Firestore (${Ds}): ${t}`,...n)}}function hn(t,...e){if(Cr.logLevel<=re.ERROR){const n=e.map(Bu);Cr.error(`Firestore (${Ds}): ${t}`,...n)}}function vs(t,...e){if(Cr.logLevel<=re.WARN){const n=e.map(Bu);Cr.warn(`Firestore (${Ds}): ${t}`,...n)}}function Bu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw hn(e),new Error(e)}function ve(t,e){t||z()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Ct{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class nb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rb{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new o_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Ze(e)}}class sb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ib{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new sb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ob{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ab{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new ob(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=cb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function ws(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Me(0,0))}static max(){return new Y(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,r){n===void 0?n=0:n>e.length&&z(),r===void 0?r=e.length-n:r>e.length-n&&z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ci.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ci?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Ci{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const lb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Ci{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return lb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new L(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ie.fromString(e))}static fromName(e){return new j(Ie.fromString(e).popFirst(5))}static empty(){return new j(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ie(e.slice()))}}function ub(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new Gn(s,j.empty(),e)}function hb(t){return new Gn(t.readTime,t.key,-1)}class Gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gn(Y.min(),j.empty(),-1)}static max(){return new Gn(Y.max(),j.empty(),-1)}}function db(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==fb)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(s=>s?T.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new T((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new T((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new sn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ii(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=qu(r.target.error);this.V.reject(new ii(e,s))}}static open(e,n,r,s){try{return new ju(n,e.transaction(s,r))}catch(i){throw new ii(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new gb(n)}}class mr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,mr.S(Ve())===12.2&&hn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return x("SimpleDb","Removing database:",e),hr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!_u())return!1;if(mr.C())return!0;const e=Ve(),n=mr.S(e),r=0<n&&n<10,s=mr.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new ii(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new L(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new L(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ii(e,o))},s.onupgradeneeded=i=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=ju.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),T.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class mb{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return hr(this.k.delete())}}class ii extends L{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Yi(t){return t.name==="IndexedDbTransactionError"}class gb{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(x("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),hr(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),hr(this.store.add(e))}get(e){return hr(this.store.get(e)).next(n=>(n===void 0&&(n=null),x("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),hr(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),hr(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new T((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new T((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new T((r,s)=>{n.onerror=i=>{const o=qu(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new T((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new mb(a),l=n(a.primaryKey,a.value,c);if(l instanceof T){const u=l.catch(h=>(c.done(),T.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>T.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function hr(t){return new T((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=qu(r.target.error);n(s)}})}let yf=!1;function qu(t){const e=mr.S(Ve());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return yf||(yf=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Hu._e=-1;function Za(t){return t==null}function ra(t){return t===0&&1/t==-1/0}function _b(t){return typeof t=="number"&&Number.isInteger(t)&&!ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function c_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Io(this.root,e,this.comparator,!1)}getReverseIterator(){return new Io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Io(this.root,e,this.comparator,!0)}}class Io{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??qe.RED,this.left=s??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wf(this.data.getIterator())}getIteratorFrom(e){return new wf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class wf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new wt([])}unionWith(e){let n=new Ge(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new l_("Invalid base64 string: "+i):i}}(e);return new it(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new it(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}it.EMPTY_BYTE_STRING=new it("");const yb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(ve(!!t),typeof t=="string"){let e=0;const n=yb.exec(t);if(ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function kr(t){return typeof t=="string"?it.fromBase64String(t):it.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zu(t){const e=t.mapValue.fields.__previous_value__;return Wu(e)?zu(e):e}function ki(t){const e=Qn(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Di&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wu(t)?4:wb(t)?9007199254740991:10:z()}function dn(t,e){if(t===e)return!0;const n=Dr(t);if(n!==Dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ki(t).isEqual(ki(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qn(s.timestampValue),a=Qn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return kr(s.bytesValue).isEqual(kr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ne(s.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ne(s.integerValue)===Ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ne(s.doubleValue),a=Ne(i.doubleValue);return o===a?ra(o)===ra(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(vf(o)!==vf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!dn(o[c],a[c])))return!1;return!0}(t,e);default:return z()}}function Ni(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function Es(t,e){if(t===e)return 0;const n=Dr(t),r=Dr(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ne(i.integerValue||i.doubleValue),c=Ne(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Ef(t.timestampValue,e.timestampValue);case 4:return Ef(ki(t),ki(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(i,o){const a=kr(i),c=kr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ae(a[l],c[l]);if(u!==0)return u}return ae(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ae(Ne(i.latitude),Ne(o.latitude));return a!==0?a:ae(Ne(i.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Es(a[l],c[l]);if(u)return u}return ae(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===To.mapValue&&o===To.mapValue)return 0;if(i===To.mapValue)return 1;if(o===To.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ae(c[h],u[h]);if(d!==0)return d;const p=Es(a[c[h]],l[u[h]]);if(p!==0)return p}return ae(c.length,u.length)}(t.mapValue,e.mapValue);default:throw z()}}function Ef(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=Qn(t),r=Qn(e),s=ae(n.seconds,r.seconds);return s!==0?s:ae(n.nanos,r.nanos)}function Is(t){return Ll(t)}function Ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return j.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ll(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ll(n.fields[o])}`;return s+"}"}(t.mapValue):z()}function If(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ml(t){return!!t&&"integerValue"in t}function Ku(t){return!!t&&"arrayValue"in t}function Tf(t){return!!t&&"nullValue"in t}function Af(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Vo(t){return!!t&&"mapValue"in t}function oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Vo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(n)}setAll(e){let n=ze.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=oi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Vo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Vo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ft(oi(this.value))}}function u_(t){const e=[];return Br(t.fields,(n,r)=>{const s=new ze([n]);if(Vo(r)){const i=u_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new et(e,0,Y.min(),Y.min(),Y.min(),ft.empty(),0)}static newFoundDocument(e,n,r,s){return new et(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new et(e,2,n,Y.min(),Y.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,Y.min(),Y.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n){this.position=e,this.inclusive=n}}function bf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Es(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n="asc"){this.field=e,this.dir=n}}function Eb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{}class xe extends h_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Tb(e,n,r):n==="array-contains"?new Rb(e,r):n==="in"?new Sb(e,r):n==="not-in"?new Pb(e,r):n==="array-contains-any"?new Cb(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ab(e,r):new bb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Es(n,this.value)):n!==null&&Dr(this.value)===Dr(n)&&this.matchesComparison(Es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends h_{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new qt(e,n)}matches(e){return d_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function d_(t){return t.op==="and"}function f_(t){return Ib(t)&&d_(t)}function Ib(t){for(const e of t.filters)if(e instanceof qt)return!1;return!0}function Ul(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(f_(t))return t.filters.map(e=>Ul(e)).join(",");{const e=t.filters.map(n=>Ul(n)).join(",");return`${t.op}(${e})`}}function p_(t,e){return t instanceof xe?function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&dn(r.value,s.value)}(t,e):t instanceof qt?function(r,s){return s instanceof qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&p_(o,s.filters[a]),!0):!1}(t,e):void z()}function m_(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Is(n.value)}`}(t):t instanceof qt?function(n){return n.op.toString()+" {"+n.getFilters().map(m_).join(" ,")+"}"}(t):"Filter"}class Tb extends xe{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ab extends xe{constructor(e,n){super(e,"in",n),this.keys=g_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bb extends xe{constructor(e,n){super(e,"not-in",n),this.keys=g_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function g_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class Rb extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ku(n)&&Ni(n.arrayValue,this.value)}}class Sb extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ni(this.value.arrayValue,n)}}class Pb extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ni(this.value.arrayValue,n)}}class Cb extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ku(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ni(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Sf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new kb(t,e,n,r,s,i,o)}function Gu(t){const e=ee(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ul(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Za(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),e.ce=n}return e.ce}function Qu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Eb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!p_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rf(t.startAt,e.startAt)&&Rf(t.endAt,e.endAt)}function Fl(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Db(t,e,n,r,s,i,o,a){return new Ns(t,e,n,r,s,i,o,a)}function Yu(t){return new Ns(t)}function Pf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function __(t){return t.collectionGroup!==null}function ai(t){const e=ee(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ge(ze.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Oi(i,r))}),n.has(ze.keyField().canonicalString())||e.le.push(new Oi(ze.keyField(),r))}return e.le}function on(t){const e=ee(t);return e.he||(e.he=Nb(e,ai(t))),e.he}function Nb(t,e){if(t.limitType==="F")return Sf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Oi(s.field,i)});const n=t.endAt?new sa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new sa(t.startAt.position,t.startAt.inclusive):null;return Sf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $l(t,e){const n=t.filters.concat([e]);return new Ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ia(t,e,n){return new Ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return Qu(on(t),on(e))&&t.limitType===e.limitType}function y_(t){return`${Gu(on(t))}|lt:${t.limitType}`}function Xr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>m_(s)).join(", ")}]`),Za(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Is(s)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):j.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=bf(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ai(r),s)||r.endAt&&!function(o,a,c){const l=bf(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ai(r),s))}(t,e)}function Ob(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function v_(t){return(e,n)=>{let r=!1;for(const s of ai(t)){const i=xb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xb(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Es(c,l):z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return c_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=new be(j.comparator);function Tn(){return Vb}const w_=new be(j.comparator);function Js(...t){let e=w_;for(const n of t)e=e.insert(n.key,n);return e}function E_(t){let e=w_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gr(){return ci()}function I_(){return ci()}function ci(){return new Os(t=>t.toString(),(t,e)=>t.isEqual(e))}const Lb=new be(j.comparator),Mb=new Ge(j.comparator);function ne(...t){let e=Mb;for(const n of t)e=e.add(n);return e}const Ub=new Ge(ae);function Fb(){return Ub}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(e)?"-0":e}}function A_(t){return{integerValue:""+t}}function $b(t,e){return _b(e)?A_(e):T_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this._=void 0}}function Bb(t,e,n){return t instanceof oa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wu(i)&&(i=zu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof xi?R_(t,e):t instanceof Vi?S_(t,e):function(s,i){const o=b_(s,i),a=Cf(o)+Cf(s.Ie);return Ml(o)&&Ml(s.Ie)?A_(a):T_(s.serializer,a)}(t,e)}function jb(t,e,n){return t instanceof xi?R_(t,e):t instanceof Vi?S_(t,e):n}function b_(t,e){return t instanceof aa?function(r){return Ml(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class oa extends nc{}class xi extends nc{constructor(e){super(),this.elements=e}}function R_(t,e){const n=P_(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Vi extends nc{constructor(e){super(),this.elements=e}}function S_(t,e){let n=P_(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class aa extends nc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Cf(t){return Ne(t.integerValue||t.doubleValue)}function P_(t){return Ku(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof xi&&s instanceof xi||r instanceof Vi&&s instanceof Vi?ws(r.elements,s.elements,dn):r instanceof aa&&s instanceof aa?dn(r.Ie,s.Ie):r instanceof oa&&s instanceof oa}(t.transform,e.transform)}class Hb{constructor(e,n){this.version=e,this.transformResults=n}}class Ft{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rc{}function C_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ju(t.key,Ft.none()):new Ji(t.key,t.data,Ft.none());{const n=t.data,r=ft.empty();let s=new Ge(ze.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new er(t.key,r,new wt(s.toArray()),Ft.none())}}function Wb(t,e,n){t instanceof Ji?function(s,i,o){const a=s.value.clone(),c=Df(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof er?function(s,i,o){if(!Lo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Df(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(k_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function li(t,e,n,r){return t instanceof Ji?function(i,o,a,c){if(!Lo(i.precondition,o))return a;const l=i.value.clone(),u=Nf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof er?function(i,o,a,c){if(!Lo(i.precondition,o))return a;const l=Nf(i.fieldTransforms,c,o),u=o.data;return u.setAll(k_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Lo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=b_(r.transform,s||null);i!=null&&(n===null&&(n=ft.empty()),n.set(r.field,i))}return n||null}function kf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ws(r,s,(i,o)=>qb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ji extends rc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class er extends rc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function k_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Df(t,e,n){const r=new Map;ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,jb(o,a,n[s]))}return r}function Nf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Bb(i,o,e))}return r}class Ju extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kb extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Wb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=li(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=li(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=I_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=C_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ws(this.mutations,e.mutations,(n,r)=>kf(n,r))&&ws(this.baseMutations,e.baseMutations,(n,r)=>kf(n,r))}}class Xu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length);let s=function(){return Lb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Xu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,se;function Jb(t){switch(t){default:return z();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function D_(t){if(t===void 0)return hn("GRPC error has no .code"),E.UNKNOWN;switch(t){case De.OK:return E.OK;case De.CANCELLED:return E.CANCELLED;case De.UNKNOWN:return E.UNKNOWN;case De.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case De.INTERNAL:return E.INTERNAL;case De.UNAVAILABLE:return E.UNAVAILABLE;case De.UNAUTHENTICATED:return E.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case De.NOT_FOUND:return E.NOT_FOUND;case De.ALREADY_EXISTS:return E.ALREADY_EXISTS;case De.PERMISSION_DENIED:return E.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case De.ABORTED:return E.ABORTED;case De.OUT_OF_RANGE:return E.OUT_OF_RANGE;case De.UNIMPLEMENTED:return E.UNIMPLEMENTED;case De.DATA_LOSS:return E.DATA_LOSS;default:return z()}}(se=De||(De={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new cs([4294967295,4294967295],0);function Of(t){const e=Xb().encode(t),n=new eb;return n.update(e),new Uint8Array(n.digest())}function xf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cs([n,r],0),new cs([s,i],0)]}class Zu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xs(`Invalid padding: ${n}`);if(r<0)throw new Xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=cs.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(cs.fromNumber(r)));return s.compare(Zb)===1&&(s=new cs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Of(e),[r,s]=xf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Zu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Of(e),[r,s]=xf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sc(Y.min(),s,new be(ae),Tn(),ne())}}class Xi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xi(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class N_{constructor(e,n){this.targetId=e,this.fe=n}}class O_{constructor(e,n,r=it.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Vf{constructor(){this.ge=0,this.pe=Mf(),this.ye=it.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ne(),n=ne(),r=ne();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:z()}}),new Xi(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Mf()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ve(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class eR{constructor(e){this.Le=e,this.ke=new Map,this.qe=Tn(),this.Qe=Lf(),this.Ke=new be(ae)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Fl(i))if(r===0){const o=new j(i.path);this.We(n,o,et.newNoDocument(o,Y.min()))}else ve(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=kr(r).toUint8Array()}catch(c){if(c instanceof l_)return vs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Zu(o,s,i)}catch(c){return vs(c instanceof Xs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Fl(a.target)){const c=new j(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,et.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=ne();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new sc(e,n,this.Ke,this.qe,r);return this.qe=Tn(),this.Qe=Lf(),this.Ke=new be(ae),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Vf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ge(ae),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Vf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Lf(){return new be(j.comparator)}function Mf(){return new be(j.comparator)}const tR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),nR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),rR=(()=>({and:"AND",or:"OR"}))();class sR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bl(t,e){return t.useProto3Json||Za(e)?e:{value:e}}function ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function x_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iR(t,e){return ca(t,e.toTimestamp())}function an(t){return ve(!!t),Y.fromTimestamp(function(n){const r=Qn(n);return new Me(r.seconds,r.nanos)}(t))}function eh(t,e){return jl(t,e).canonicalString()}function jl(t,e){const n=function(s){return new Ie(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function V_(t){const e=Ie.fromString(t);return ve($_(e)),e}function ql(t,e){return eh(t.databaseId,e.path)}function Wc(t,e){const n=V_(e);if(n.get(1)!==t.databaseId.projectId)throw new L(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(M_(n))}function L_(t,e){return eh(t.databaseId,e)}function oR(t){const e=V_(t);return e.length===4?Ie.emptyPath():M_(e)}function Hl(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function M_(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Uf(t,e,n){return{name:ql(t,e),fields:n.value.mapValue.fields}}function aR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(ve(u===void 0||typeof u=="string"),it.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),it.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:D_(l.code);return new L(u,l.message||"")}(o);n=new O_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Wc(t,r.document.name),i=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):Y.min(),a=new ft({mapValue:{fields:r.document.fields}}),c=et.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Mo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Wc(t,r.document),i=r.readTime?an(r.readTime):Y.min(),o=et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Mo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Wc(t,r.document),i=r.removedTargetIds||[];n=new Mo([],i,s,null)}else{if(!("filter"in e))return z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Yb(s,i),a=r.targetId;n=new N_(a,o)}}return n}function cR(t,e){let n;if(e instanceof Ji)n={update:Uf(t,e.key,e.value)};else if(e instanceof Ju)n={delete:ql(t,e.key)};else if(e instanceof er)n={update:Uf(t,e.key,e.data),updateMask:_R(e.fieldMask)};else{if(!(e instanceof Kb))return z();n={verify:ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof oa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof xi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof aa)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:iR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(t,e.precondition)),n}function lR(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?an(s.updateTime):an(i);return o.isEqual(Y.min())&&(o=an(i)),new Hb(o,s.transformResults||[])}(n,e))):[]}function uR(t,e){return{documents:[L_(t,e.path)]}}function hR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=L_(t,s);const i=function(l){if(l.length!==0)return F_(qt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Zr(d.field),direction:pR(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Bl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:s}}function dR(t){let e=oR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=U_(h);return d instanceof qt&&f_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Oi(es(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Za(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new sa(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new sa(p,d)}(n.endAt)),Db(e,s,o,i,a,"F",c,l)}function fR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function U_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=es(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=es(n.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=es(n.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=es(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(es(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qt.create(n.compositeFilter.filters.map(r=>U_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(n.compositeFilter.op))}(t):z()}function pR(t){return tR[t]}function mR(t){return nR[t]}function gR(t){return rR[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function es(t){return ze.fromServerFormat(t.fieldPath)}function F_(t){return t instanceof xe?function(n){if(n.op==="=="){if(Af(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NAN"}};if(Tf(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Af(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NAN"}};if(Tf(n.value))return{unaryFilter:{field:Zr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(n.field),op:mR(n.op),value:n.value}}}(t):t instanceof qt?function(n){const r=n.getFilters().map(s=>F_(s));return r.length===1?r[0]:{compositeFilter:{op:gR(n.op),filters:r}}}(t):z()}function _R(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,r,s,i=Y.min(),o=Y.min(),a=it.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e){this.ct=e}}function vR(t){const e=dR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ia(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(){this._n=new ER}addToCollectionParentIndex(e,n){return this._n.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}deleteAllFieldIndexes(e){return T.resolve()}createTargetIndexes(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Gn.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class ER{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ge(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ts(0)}static Bn(){return new Ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.changes=new Os(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&li(r.mutation,s,wt.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=gr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Js();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Tn();const o=ci(),a=function(){return ci()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof er)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),li(u.mutation,l,u.mutation.getFieldMask(),Me.now())):o.set(l.key,wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new TR(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ci();let s=new be((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||wt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ne()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=I_();u.forEach(d=>{if(!i.has(d)){const p=C_(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):__(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):T.resolve(gr());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ne())).next(u=>({batchId:a,changes:E_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let s=Js();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Js();return this.indexManager.getCollectionParents(e,i).next(a=>T.forEach(a,c=>{const l=function(h,d){return new Ns(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,et.newInvalidDocument(u)))});let a=Js();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&li(u.mutation,l,wt.empty(),Me.now()),tc(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return T.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(n)),T.resolve()}getNamedQuery(e,n){return T.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:vR(s.bundledQuery),readTime:an(s.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.overlays=new be(j.comparator),this.hr=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gr();return T.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const s=gr(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return T.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new be((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=gr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=gr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return T.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Qb(n,r));let i=this.hr.get(n);i===void 0&&(i=ne(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.Pr=new Ge($e.Ir),this.Tr=new Ge($e.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new $e(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new j(new Ie([])),r=new $e(n,e),s=new $e(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new j(new Ie([])),r=new $e(n,e),s=new $e(n,e+1);let i=ne();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new $e(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return j.comparator(e.key,n.key)||ae(e.pr,n.pr)}static Er(e,n){return ae(e.pr,n.pr)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ge($e.Ir)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Gb(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new $e(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),s=new $e(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(ae);return n.forEach(s=>{const i=new $e(s,0),o=new $e(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),T.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;j.isDocumentKey(i)||(i=i.child(""));const o=new $e(new j(i),0);let a=new Ge(ae);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),T.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return T.forEach(n.mutations,s=>{const i=new $e(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new $e(n,0),s=this.wr.firstAfterOrEqual(r);return T.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.vr=e,this.docs=function(){return new be(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tn();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||db(hb(u),r)<=0||(s.has(u.key)||tc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,r,s){z()}Fr(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CR(this)}getSize(e){return T.resolve(this.size)}}class CR extends IR{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.persistence=e,this.Mr=new Os(n=>Gu(n),Qu),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new th,this.targetCount=0,this.Br=Ts.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),T.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.qn(n),T.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),T.waitFor(i).next(()=>s)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Hu(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new kR(this),this.indexManager=new wR,this.remoteDocumentCache=function(s){return new PR(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new yR(n),this.$r=new bR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new SR(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const s=new NR(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return T.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class NR extends pb{constructor(e){super(),this.currentSequenceNumber=e}}class nh{constructor(e){this.persistence=e,this.zr=new th,this.jr=null}static Hr(e){return new nh(e)}get Jr(){if(this.jr)return this.jr;throw z()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),T.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Jr,r=>{const s=j.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return T.or([()=>T.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new rh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return kT()?8:mr.v(Ve())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new OR;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(qs()<=re.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Xr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),T.resolve()):(qs()<=re.DEBUG&&x("QueryEngine","Query:",Xr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(qs()<=re.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Xr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):T.resolve())}ji(e,n){if(Pf(n))return T.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ia(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,ia(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,s){return Pf(n)||s.isEqual(Y.min())?T.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?T.resolve(null):(qs()<=re.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xr(n)),this.es(e,o,n,ub(s,-1)).next(a=>a))})}Zi(e,n){let r=new Ge(v_(e));return n.forEach((s,i)=>{tc(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return qs()<=re.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Xr(n)),this.zi.getDocumentsMatchingQuery(e,n,Gn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new be(ae),this.rs=new Os(i=>Gu(i),Qu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AR(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function LR(t,e,n,r){return new VR(t,e,n,r)}async function B_(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ne();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function MR(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=T.resolve();return d.forEach(y=>{p=p.next(()=>u.getEntry(c,y)).next(A=>{const w=l.docVersions.get(y);ve(w!==null),A.version.compareTo(w)<0&&(h.applyToRemoteDocument(A,l),A.isValidDocument()&&(A.setReadTime(l.commitVersion),u.addEntry(A)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ne();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function j_(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function UR(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(it.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(A,w,C){return A.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,p,u)&&a.push(n.Qr.updateTargetData(i,p))});let c=Tn(),l=ne();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(FR(i,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(Y.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function FR(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function $R(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function BR(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,T.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Wl(t,e,n){const r=ee(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Yi(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Ff(t,e,n){const r=ee(t);let s=Y.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=ee(c),d=h.rs.get(u);return d!==void 0?T.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(r,o,on(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:ne())).next(a=>(jR(r,Ob(e),a),{documents:a,hs:i})))}function jR(t,e,n){let r=t.ss.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class $f{constructor(){this.activeTargetIds=Fb()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qR{constructor(){this.no=new $f,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new $f,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao=null;function zc(){return Ao===null?Ao=function(){return 268435456+Math.round(2147483648*Math.random())}():Ao++,"0x"+Ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class KR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=zc(),c=this.bo(n,r.toUriEncodedString());x("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(x("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw vs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ds}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=WR[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=zc();return new Promise((o,a)=>{const c=new Z0;c.setWithCredentials(!0),c.listenOnce(J0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Hc.NO_ERROR:const u=c.getResponseJson();x(Xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Hc.TIMEOUT:x(Xe,`RPC '${e}' ${i} timed out`),a(new L(E.DEADLINE_EXCEEDED,"Request time out"));break;case Hc.HTTP_ERROR:const h=c.getStatus();if(x(Xe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(w){const C=w.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(C)>=0?C:E.UNKNOWN}(p.status);a(new L(y,p.message))}else a(new L(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new L(E.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{x(Xe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);x(Xe,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const s=zc(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Q0(),a=Y0(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");x(Xe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const y=new zR({lo:w=>{p?x(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(d||(x(Xe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),x(Xe,`RPC '${e}' stream ${s} sending:`,w),h.send(w))},ho:()=>h.close()}),A=(w,C,k)=>{w.listen(C,F=>{try{k(F)}catch(D){setTimeout(()=>{throw D},0)}})};return A(h,Eo.EventType.OPEN,()=>{p||x(Xe,`RPC '${e}' stream ${s} transport opened.`)}),A(h,Eo.EventType.CLOSE,()=>{p||(p=!0,x(Xe,`RPC '${e}' stream ${s} transport closed`),y.Vo())}),A(h,Eo.EventType.ERROR,w=>{p||(p=!0,vs(Xe,`RPC '${e}' stream ${s} transport errored:`,w),y.Vo(new L(E.UNAVAILABLE,"The operation could not be completed")))}),A(h,Eo.EventType.MESSAGE,w=>{var C;if(!p){const k=w.data[0];ve(!!k);const F=k,D=F.error||((C=F[0])===null||C===void 0?void 0:C.error);if(D){x(Xe,`RPC '${e}' stream ${s} received error:`,D);const fe=D.status;let ue=function(bt){const at=De[bt];if(at!==void 0)return D_(at)}(fe),Ce=D.message;ue===void 0&&(ue=E.INTERNAL,Ce="Unknown error status: "+fe+" with message "+D.message),p=!0,y.Vo(new L(ue,Ce)),h.close()}else x(Xe,`RPC '${e}' stream ${s} received:`,k),y.mo(k)}}),A(a,X0.STAT_EVENT,w=>{w.stat===gf.PROXY?x(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===gf.NOPROXY&&x(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}function Kc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){return new sR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new q_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(hn(n.toString()),hn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new L(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GR extends H_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=aR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?an(o.readTime):Y.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Hl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Fl(c)?{documents:uR(i,c)}:{query:hR(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=x_(i,o.resumeToken);const l=Bl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=ca(i,o.snapshotVersion.toTimestamp());const l=Bl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=fR(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Hl(this.serializer),n.removeTarget=e,this.t_(n)}}class QR extends H_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=lR(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.T_(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Hl(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cR(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new L(E.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,jl(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(E.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,jl(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(E.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class JR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(hn(n),this.g_=!1):x("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{jr(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ee(c);l.v_.add(4),await Zi(l),l.x_.set("Unknown"),l.v_.delete(4),await oc(l)}(this))})}),this.x_=new JR(r,s)}}async function oc(t){if(jr(t))for(const e of t.F_)await e(!0)}async function Zi(t){for(const e of t.F_)await e(!1)}function W_(t,e){const n=ee(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),oh(n)?ih(n):xs(n).Jo()&&sh(n,e))}function z_(t,e){const n=ee(t),r=xs(n);n.C_.delete(e),r.Jo()&&K_(n,e),n.C_.size===0&&(r.Jo()?r.Xo():jr(n)&&n.x_.set("Unknown"))}function sh(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).c_(e)}function K_(t,e){t.O_.Oe(e),xs(t).l_(e)}function ih(t){t.O_=new eR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.x_.p_()}function oh(t){return jr(t)&&!xs(t).Ho()&&t.C_.size>0}function jr(t){return ee(t).v_.size===0}function G_(t){t.O_=void 0}async function ZR(t){t.C_.forEach((e,n)=>{sh(t,e)})}async function eS(t,e){G_(t),oh(t)?(t.x_.S_(e),ih(t)):t.x_.set("Unknown")}async function tS(t,e,n){if(t.x_.set("Online"),e instanceof O_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await la(t,r)}else if(e instanceof Mo?t.O_.$e(e):e instanceof N_?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(Y.min()))try{const r=await j_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(it.EMPTY_BYTE_STRING,u.snapshotVersion)),K_(i,c);const h=new Bn(u.target,c,l,u.sequenceNumber);sh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await la(t,r)}}async function la(t,e,n){if(!Yi(e))throw e;t.v_.add(1),await Zi(t),t.x_.set("Offline"),n||(n=()=>j_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await oc(t)})}function Q_(t,e){return e().catch(n=>la(t,n,e))}async function ac(t){const e=ee(t),n=Yn(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;nS(e);)try{const s=await $R(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,rS(e,s)}catch(s){await la(e,s)}Y_(e)&&J_(e)}function nS(t){return jr(t)&&t.D_.length<10}function rS(t,e){t.D_.push(e);const n=Yn(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function Y_(t){return jr(t)&&!Yn(t).Ho()&&t.D_.length>0}function J_(t){Yn(t).start()}async function sS(t){Yn(t).d_()}async function iS(t){const e=Yn(t);for(const n of t.D_)e.I_(n.mutations)}async function oS(t,e,n){const r=t.D_.shift(),s=Xu.from(r,e,n);await Q_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ac(t)}async function aS(t,e){e&&Yn(t).P_&&await async function(r,s){if(function(o){return Jb(o)&&o!==E.ABORTED}(s.code)){const i=r.D_.shift();Yn(r).Zo(),await Q_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ac(r)}}(t,e),Y_(t)&&J_(t)}async function jf(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=jr(n);n.v_.add(3),await Zi(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await oc(n)}async function cS(t,e){const n=ee(t);e?(n.v_.delete(2),await oc(n)):e||(n.v_.add(2),await Zi(n),n.x_.set("Unknown"))}function xs(t){return t.N_||(t.N_=function(n,r,s){const i=ee(n);return i.R_(),new GR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:ZR.bind(null,t),To:eS.bind(null,t),u_:tS.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),oh(t)?ih(t):t.x_.set("Unknown")):(await t.N_.stop(),G_(t))})),t.N_}function Yn(t){return t.B_||(t.B_=function(n,r,s){const i=ee(n);return i.R_(),new QR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:sS.bind(null,t),To:aS.bind(null,t),E_:iS.bind(null,t),T_:oS.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await ac(t)):(await t.B_.stop(),t.D_.length>0&&(x("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ah(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ch(t,e){if(hn("AsyncQueue",`${e}: ${t}`),Yi(t))return new L(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Js(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this.L_=new be(j.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):z():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class As{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new As(e,n,ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(){this.q_=void 0,this.Q_=[]}}class uS{constructor(){this.queries=new Os(e=>y_(e),ec),this.onlineState="Unknown",this.K_=new Set}}async function X_(t,e){const n=ee(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new lS),s)try{i.q_=await n.onListen(r)}catch(o){const a=ch(o,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.Q_.push(e),e.U_(n.onlineState),i.q_&&e.W_(i.q_)&&lh(n)}async function Z_(t,e){const n=ee(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),s=i.Q_.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function hS(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.W_(s)&&(r=!0);o.q_=s}}r&&lh(n)}function dS(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function lh(t){t.K_.forEach(e=>{e.next()})}class ey{constructor(e,n,r){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new As(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.key=e}}class ny{constructor(e){this.key=e}}class fS{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=ne(),this.mutatedKeys=ne(),this.ua=v_(e),this.ca=new ls(this.ua)}get la(){return this.oa}ha(e,n){const r=n?n.Pa:new qf,s=n?n.ca:this.ca;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=tc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),A=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;d&&p?d.data.isEqual(p.data)?y!==A&&(r.track({type:3,doc:p}),w=!0):this.Ia(d,p)||(r.track({type:2,doc:p}),w=!0,(c&&this.ua(p,c)>0||l&&this.ua(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),w=!0):d&&!p&&(r.track({type:1,doc:d}),w=!0,(c||l)&&(a=!0)),w&&(p?(o=o.add(p),i=A?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ca:o,Pa:r,Xi:a,mutatedKeys:i}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const o=e.Pa.k_();o.sort((u,h)=>function(p,y){const A=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return A(p)-A(y)}(u.type,h.type)||this.ua(u.doc,h.doc)),this.Ta(r),s=s!=null&&s;const a=n&&!s?this.Ea():[],c=this.aa.size===0&&this.current&&!s?1:0,l=c!==this._a;return this._a=c,o.length!==0||l?{snapshot:new As(this.query,e.ca,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new qf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=ne(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return e.forEach(r=>{this.aa.has(r)||n.push(new ny(r))}),this.aa.forEach(r=>{e.has(r)||n.push(new ty(r))}),n}Ra(e){this.oa=e.hs,this.aa=ne();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return As.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class pS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mS{constructor(e){this.key=e,this.ma=!1}}class gS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Os(a=>y_(a),ec),this.pa=new Map,this.ya=new Set,this.wa=new be(j.comparator),this.Sa=new Map,this.ba=new th,this.Da={},this.Ca=new Map,this.va=Ts.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function _S(t,e){const n=SS(t);let r,s;const i=n.ga.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Va();else{const o=await BR(n.localStore,on(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await yS(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&W_(n.remoteStore,o)}return s}async function yS(t,e,n,r,s){t.Ma=(h,d,p)=>async function(A,w,C,k){let F=w.view.ha(C);F.Xi&&(F=await Ff(A.localStore,w.query,!1).then(({documents:Ce})=>w.view.ha(Ce,F)));const D=k&&k.targetChanges.get(w.targetId),fe=k&&k.targetMismatches.get(w.targetId)!=null,ue=w.view.applyChanges(F,A.isPrimaryClient,D,fe);return Wf(A,w.targetId,ue.da),ue.snapshot}(t,h,d,p);const i=await Ff(t.localStore,e,!0),o=new fS(e,i.hs),a=o.ha(i.documents),c=Xi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Wf(t,n,l.da);const u=new pS(e,n,o);return t.ga.set(e,u),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function vS(t,e){const n=ee(t),r=n.ga.get(e),s=n.pa.get(r.targetId);if(s.length>1)return n.pa.set(r.targetId,s.filter(i=>!ec(i,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Wl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),z_(n.remoteStore,r.targetId),zl(n,r.targetId)}).catch(Qi)):(zl(n,r.targetId),await Wl(n.localStore,r.targetId,!0))}async function wS(t,e,n){const r=PS(t);try{const s=await function(o,a){const c=ee(o),l=Me.now(),u=a.reduce((p,y)=>p.add(y.key),ne());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Tn(),A=ne();return c.os.getEntries(p,u).next(w=>{y=w,y.forEach((C,k)=>{k.isValidDocument()||(A=A.add(C))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,y)).next(w=>{h=w;const C=[];for(const k of a){const F=zb(k,h.get(k.key).overlayedDocument);F!=null&&C.push(new er(k.key,F,u_(F.value.mapValue),Ft.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,C,a)}).next(w=>{d=w;const C=w.applyToLocalDocumentSet(h,A);return c.documentOverlayCache.saveOverlays(p,w.batchId,C)})}).then(()=>({batchId:d.batchId,changes:E_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Da[o.currentUser.toKey()];l||(l=new be(ae)),l=l.insert(a,c),o.Da[o.currentUser.toKey()]=l}(r,s.batchId,n),await eo(r,s.changes),await ac(r.remoteStore)}catch(s){const i=ch(s,"Failed to persist write");n.reject(i)}}async function ry(t,e){const n=ee(t);try{const r=await UR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Sa.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ma=!0:s.modifiedDocuments.size>0?ve(o.ma):s.removedDocuments.size>0&&(ve(o.ma),o.ma=!1))}),await eo(n,r,e)}catch(r){await Qi(r)}}function Hf(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ga.forEach((i,o)=>{const a=o.view.U_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ee(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.Q_)d.U_(a)&&(l=!0)}),l&&lh(c)}(r.eventManager,e),s.length&&r.fa.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ES(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Sa.get(e),i=s&&s.key;if(i){let o=new be(j.comparator);o=o.insert(i,et.newNoDocument(i,Y.min()));const a=ne().add(i),c=new sc(Y.min(),new Map,new be(ae),o,a);await ry(r,c),r.wa=r.wa.remove(i),r.Sa.delete(e),uh(r)}else await Wl(r.localStore,e,!1).then(()=>zl(r,e,n)).catch(Qi)}async function IS(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await MR(n.localStore,e);iy(n,r,null),sy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await eo(n,s)}catch(s){await Qi(s)}}async function TS(t,e,n){const r=ee(t);try{const s=await function(o,a){const c=ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(ve(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);iy(r,e,n),sy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await eo(r,s)}catch(s){await Qi(s)}}function sy(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function iy(t,e,n){const r=ee(t);let s=r.Da[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Da[r.currentUser.toKey()]=s}}function zl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.pa.get(e))t.ga.delete(r),n&&t.fa.xa(r,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(r=>{t.ba.containsKey(r)||oy(t,r)})}function oy(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(z_(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),uh(t))}function Wf(t,e,n){for(const r of n)r instanceof ty?(t.ba.addReference(r.key,e),AS(t,r)):r instanceof ny?(x("SyncEngine","Document no longer in limbo: "+r.key),t.ba.removeReference(r.key,e),t.ba.containsKey(r.key)||oy(t,r.key)):z()}function AS(t,e){const n=e.key,r=n.path.canonicalString();t.wa.get(n)||t.ya.has(r)||(x("SyncEngine","New document in limbo: "+n),t.ya.add(r),uh(t))}function uh(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new j(Ie.fromString(e)),r=t.va.next();t.Sa.set(r,new mS(n)),t.wa=t.wa.insert(n,r),W_(t.remoteStore,new Bn(on(Yu(n.path)),r,"TargetPurposeLimboResolution",Hu._e))}}async function eo(t,e,n){const r=ee(t),s=[],i=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,c)=>{o.push(r.Ma(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=rh.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.fa.u_(s),await async function(c,l){const u=ee(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>T.forEach(l,d=>T.forEach(d.qi,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>T.forEach(d.Qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Yi(h))throw h;x("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.ns.get(d),y=p.snapshotVersion,A=p.withLastLimboFreeSnapshotVersion(y);u.ns=u.ns.insert(d,A)}}}(r.localStore,i))}async function bS(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await B_(n.localStore,e);n.currentUser=e,function(i,o){i.Ca.forEach(a=>{a.forEach(c=>{c.reject(new L(E.CANCELLED,o))})}),i.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await eo(n,r.us)}}function RS(t,e){const n=ee(t),r=n.Sa.get(e);if(r&&r.ma)return ne().add(r.key);{let s=ne();const i=n.pa.get(e);if(!i)return s;for(const o of i){const a=n.ga.get(o);s=s.unionWith(a.view.la)}return s}}function SS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ry.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ES.bind(null,e),e.fa.u_=hS.bind(null,e.eventManager),e.fa.xa=dS.bind(null,e.eventManager),e}function PS(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=IS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TS.bind(null,e),e}class zf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ic(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return LR(this.persistence,new xR,e.initialUser,this.serializer)}createPersistence(e){return new DR(nh.Hr,this.serializer)}createSharedClientState(e){return new qR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class CS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bS.bind(null,this.syncEngine),await cS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uS}()}createDatastore(e){const n=ic(e.databaseInfo.databaseId),r=function(i){return new KR(i)}(e.databaseInfo);return function(i,o,a,c){return new YR(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new XR(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Hf(this.syncEngine,n,0),function(){return Bf.D()?new Bf:new HR}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new gS(s,i,o,a,c,l);return u&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=ee(r);x("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Zi(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):hn("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=a_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{x("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(x("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ch(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gc(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await B_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NS(t);x("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>jf(e.remoteStore,s)),t._onlineComponents=e}function DS(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function NS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!DS(n))throw n;vs("Error using user provided cache. Falling back to memory cache: "+n),await Gc(t,new zf)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Gc(t,new zf);return t._offlineComponents}async function cy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Kf(t,t._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Kf(t,new CS))),t._onlineComponents}function OS(t){return cy(t).then(e=>e.syncEngine)}async function ly(t){const e=await cy(t),n=e.eventManager;return n.onListen=_S.bind(null,e.syncEngine),n.onUnlisten=vS.bind(null,e.syncEngine),n}function xS(t,e,n={}){const r=new sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new ay({next:d=>{o.enqueueAndForget(()=>Z_(i,h));const p=d.docs.has(a);!p&&d.fromCache?l.reject(new L(E.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&c&&c.source==="server"?l.reject(new L(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new ey(Yu(a.path),u,{includeMetadataChanges:!0,Z_:!0});return X_(i,h)}(await ly(t),t.asyncQueue,e,n,r)),r.promise}function VS(t,e,n={}){const r=new sn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new ay({next:d=>{o.enqueueAndForget(()=>Z_(i,h)),d.fromCache&&c.source==="server"?l.reject(new L(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new ey(a,u,{includeMetadataChanges:!0,Z_:!0});return X_(i,h)}(await ly(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t,e,n){if(!n)throw new L(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LS(t,e,n,r){if(e===!0&&r===!0)throw new L(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qf(t){if(!j.isDocumentKey(t))throw new L(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yf(t){if(j.isDocumentKey(t))throw new L(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function An(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cc(t);throw new L(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function MS(t,e){if(e<=0)throw new L(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tb;switch(r.type){case"firstParty":return new ib(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gf.get(n);r&&(x("ComponentProvider","Removing Datastore"),Gf.delete(n),r.terminate())}(this),Promise.resolve()}}function US(t,e,n,r={}){var s;const i=(t=An(t,lc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ze.MOCK_USER;else{a=Gm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new L(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(l)}t._authCredentials=new nb(new o_(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tr(this.firestore,e,this._query)}}class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class zn extends tr{constructor(e,n,r){super(e,n,Yu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new j(e))}withConverter(e){return new zn(this.firestore,e,this._path)}}function Ht(t,e,...n){if(t=Ae(t),hy("collection","path",e),t instanceof lc){const r=Ie.fromString(e,...n);return Yf(r),new zn(t,null,r)}{if(!(t instanceof gt||t instanceof zn))throw new L(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Yf(r),new zn(t.firestore,null,r)}}function to(t,e,...n){if(t=Ae(t),arguments.length===1&&(e=a_.newId()),hy("doc","path",e),t instanceof lc){const r=Ie.fromString(e,...n);return Qf(r),new gt(t,null,new j(r))}{if(!(t instanceof gt||t instanceof zn))throw new L(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Qf(r),new gt(t.firestore,t instanceof zn?t.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new q_(this,"async_queue_retry"),this._u=()=>{const n=Kc();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Kc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=Kc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new sn;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!Yi(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw hn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const s=ah.createAndSchedule(this,e,n,r,i=>this.lu(i));return this.nu.push(s),s}au(){this.ru&&z()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class Vs extends lc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new FS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dy(this),this._firestoreClient.terminate()}}function $S(t,e){const n=typeof t=="object"?t:La(),r=typeof t=="string"?t:e||"(default)",s=Jn(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Wm("firestore");i&&US(s,...i)}return s}function hh(t){return t._firestoreClient||dy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dy(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new vb(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,uy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new kS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(it.fromBase64String(e))}catch(n){throw new L(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bs(it.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=/^__.*__$/;class jS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new er(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ji(e,this.data,n,this.fieldTransforms)}}class fy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function py(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class ph{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new ph(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.mu(e),s}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Au({path:r,Vu:!1});return s.Eu(),s}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return ua(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(py(this.du)&&BS.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class qS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ic(e)}Su(e,n,r,s=!1){return new ph({du:e,methodName:n,wu:r,path:ze.emptyPath(),Vu:!1,yu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mh(t){const e=t._freezeSettings(),n=ic(t._databaseId);return new qS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function HS(t,e,n,r,s,i={}){const o=t.Su(i.merge||i.mergeFields?2:0,e,n,s);gh("Data must be an object, but it was:",o,r);const a=my(r,o);let c,l;if(i.merge)c=new wt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Kl(e,h,n);if(!o.contains(d))throw new L(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);_y(u,d)||u.push(d)}c=new wt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new jS(new ft(a),c,l)}class hc extends dh{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hc}}function WS(t,e,n,r){const s=t.Su(1,e,n);gh("Data must be an object, but it was:",s,r);const i=[],o=ft.empty();Br(r,(c,l)=>{const u=_h(e,c,n);l=Ae(l);const h=s.fu(u);if(l instanceof hc)i.push(u);else{const d=no(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new wt(i);return new fy(o,a,s.fieldTransforms)}function zS(t,e,n,r,s,i){const o=t.Su(1,e,n),a=[Kl(e,r,n)],c=[s];if(i.length%2!=0)throw new L(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Kl(e,i[d])),c.push(i[d+1]);const l=[],u=ft.empty();for(let d=a.length-1;d>=0;--d)if(!_y(l,a[d])){const p=a[d];let y=c[d];y=Ae(y);const A=o.fu(p);if(y instanceof hc)l.push(p);else{const w=no(y,A);w!=null&&(l.push(p),u.set(p,w))}}const h=new wt(l);return new fy(u,h,o.fieldTransforms)}function KS(t,e,n,r=!1){return no(n,t.Su(r?4:3,e))}function no(t,e){if(gy(t=Ae(t)))return gh("Unsupported field value:",e,t),my(t,e);if(t instanceof dh)return function(r,s){if(!py(s.du))throw s.pu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.pu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=no(a,s.gu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $b(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:ca(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ca(s.serializer,i)}}if(r instanceof fh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bs)return{bytesValue:x_(s.serializer,r._byteString)};if(r instanceof gt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:eh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.pu(`Unsupported field value: ${cc(r)}`)}(t,e)}function my(t,e){const n={};return c_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Br(t,(r,s)=>{const i=no(s,e.Ru(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function gy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof fh||t instanceof bs||t instanceof gt||t instanceof dh)}function gh(t,e,n){if(!gy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=cc(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function Kl(t,e,n){if((e=Ae(e))instanceof uc)return e._internalPath;if(typeof e=="string")return _h(t,e);throw ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const GS=new RegExp("[~\\*/\\[\\]]");function _h(t,e,n){if(e.search(GS)>=0)throw ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uc(...e.split("."))._internalPath}catch{throw ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ua(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new L(E.INVALID_ARGUMENT,a+t+c)}function _y(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QS extends yy{data(){return super.data()}}function dc(t,e){return typeof e=="string"?_h(t,e):e instanceof uc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yh{}class vh extends yh{}function Nr(t,e,...n){let r=[];e instanceof yh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof wh).length,a=i.filter(c=>c instanceof fc).length;if(o>1||o>0&&a>0)throw new L(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class fc extends vh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fc(e,n,r)}_apply(e){const n=this._parse(e);return wy(e._query,n),new tr(e.firestore,e.converter,$l(e._query,n))}_parse(e){const n=mh(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new L(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Zf(h,u);const p=[];for(const y of h)p.push(Xf(c,i,y));d={arrayValue:{values:p}}}else d=Xf(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Zf(h,u),d=KS(a,o,h,u==="in"||u==="not-in");return xe.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ro(t,e,n){const r=e,s=dc("where",t);return fc._create(s,r,n)}class wh extends yh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)wy(o,c),o=$l(o,c)}(e._query,n),new tr(e.firestore,e.converter,$l(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Eh extends vh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Eh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new L(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Oi(i,o)}(e._query,this._field,this._direction);return new tr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ns(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function vy(t,e="asc"){const n=e,r=dc("orderBy",t);return Eh._create(r,n)}class Ih extends vh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ih(e,n,r)}_apply(e){return new tr(e.firestore,e.converter,ia(e._query,this._limit,this._limitType))}}function JS(t){return MS("limit",t),Ih._create("limit",t,"F")}function Xf(t,e,n){if(typeof(n=Ae(n))=="string"){if(n==="")throw new L(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!__(e)&&n.indexOf("/")!==-1)throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!j.isDocumentKey(r))throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return If(t,new j(r))}if(n instanceof gt)return If(t,n._key);throw new L(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cc(n)}.`)}function Zf(t,e){if(!Array.isArray(t)||t.length===0)throw new L(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wy(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class XS{convertValue(e,n="none"){switch(Dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new fh(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ki(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);ve($_(r));const s=new Di(r.get(1),r.get(3)),i=new j(r.popFirst(5));return s.isEqual(n)||hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ey extends yy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Uo extends Ey{data(e={}){return super.data(e)}}class eP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Uo(this._firestore,this._userDataWriter,r.key,r,new Zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Uo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Uo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:tP(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){t=An(t,gt);const e=An(t.firestore,Vs);return xS(hh(e),t._key).then(n=>sP(e,t,n))}class Iy extends XS{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function bn(t){t=An(t,tr);const e=An(t.firestore,Vs),n=hh(e),r=new Iy(e);return YS(t._query),VS(n,t._query).then(s=>new eP(e,r,t,s))}function Ty(t,e,n,...r){t=An(t,gt);const s=An(t.firestore,Vs),i=mh(s);let o;return o=typeof(e=Ae(e))=="string"||e instanceof uc?zS(i,"updateDoc",t._key,e,n,r):WS(i,"updateDoc",t._key,e),Th(s,[o.toMutation(t._key,Ft.exists(!0))])}function rP(t){return Th(An(t.firestore,Vs),[new Ju(t._key,Ft.none())])}function Ay(t,e){const n=An(t.firestore,Vs),r=to(t),s=ZS(t.converter,e);return Th(n,[HS(mh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ft.exists(!1))]).then(()=>r)}function Th(t,e){return function(r,s){const i=new sn;return r.asyncQueue.enqueueAndForget(async()=>wS(await OS(r),s,i)),i.promise}(hh(t),e)}function sP(t,e,n){const r=n.docs.get(e._key),s=new Iy(t);return new Ey(t,s,e._key,r,new Zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ds=s})(Fr),Bt(new Pt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Vs(new rb(r.getProvider("auth-internal")),new ab(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new L(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Di(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),mt(_f,"4.4.3",e),mt(_f,"4.4.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="firebasestorage.googleapis.com",Ry="storageBucket",iP=2*60*1e3,oP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Ct{constructor(e,n,r=0){super(Qc(e),`Firebase Storage: ${n} (${Qc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Se||(Se={}));function Qc(t){return"storage/"+t}function Ah(){const t="An unknown error occurred, please check the error payload for server response.";return new Pe(Se.UNKNOWN,t)}function aP(t){return new Pe(Se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function cP(t){return new Pe(Se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Pe(Se.UNAUTHENTICATED,t)}function uP(){return new Pe(Se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function hP(t){return new Pe(Se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function dP(){return new Pe(Se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fP(){return new Pe(Se.CANCELED,"User canceled the upload/download.")}function pP(t){return new Pe(Se.INVALID_URL,"Invalid URL '"+t+"'.")}function mP(t){return new Pe(Se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function gP(){return new Pe(Se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ry+"' property when initializing the app?")}function _P(){return new Pe(Se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function yP(){return new Pe(Se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function vP(t){return new Pe(Se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Gl(t){return new Pe(Se.INVALID_ARGUMENT,t)}function Sy(){return new Pe(Se.APP_DELETED,"The Firebase app was deleted.")}function wP(t){return new Pe(Se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ui(t,e){return new Pe(Se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Hs(t){throw new Pe(Se.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Et.makeFromUrl(e,n)}catch{return new Et(e,"")}if(r.path==="")return r;throw mP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(D){D.path_=decodeURIComponent(D.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),y={bucket:1,path:3},A=n===by?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",C=new RegExp(`^https?://${A}/${s}/${w}`,"i"),F=[{regex:a,indices:c,postModify:i},{regex:p,indices:y,postModify:l},{regex:C,indices:{bucket:1,path:2},postModify:l}];for(let D=0;D<F.length;D++){const fe=F[D],ue=fe.regex.exec(e);if(ue){const Ce=ue[fe.indices.bucket];let Ye=ue[fe.indices.path];Ye||(Ye=""),r=new Et(Ce,Ye),fe.postModify(r);break}}if(r==null)throw pP(e);return r}}class EP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...w){l||(l=!0,e.apply(null,w))}function h(w){s=setTimeout(()=>{s=null,t(p,c())},w)}function d(){i&&clearTimeout(i)}function p(w,...C){if(l){d();return}if(w){d(),u.call(null,w,...C);return}if(c()||o){d(),u.call(null,w,...C);return}r<64&&(r*=2);let F;a===1?(a=2,F=0):F=(r+Math.random())*1e3,h(F)}let y=!1;function A(w){y||(y=!0,d(),!l&&(s!==null?(w||(a=2),clearTimeout(s),h(0)):w||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,A(!0)},n),A}function TP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t){return t!==void 0}function bP(t){return typeof t=="object"&&!Array.isArray(t)}function bh(t){return typeof t=="string"||t instanceof String}function ep(t){return Rh()&&t instanceof Blob}function Rh(){return typeof Blob<"u"}function tp(t,e,n,r){if(r<e)throw Gl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Gl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Py(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ar;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ar||(Ar={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new bo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ar.NO_ERROR,c=i.getStatus();if(!a||RP(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Ar.ABORT;r(!1,new bo(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new bo(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());AP(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Ah();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Sy():fP();o(c)}else{const c=dP();o(c)}};this.canceled_?n(!1,new bo(!1,null,!0)):this.backoffId_=IP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&TP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function PP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function CP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function kP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function DP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function NP(t,e,n,r,s,i,o=!0){const a=Py(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return kP(l,e),PP(l,n),CP(l,i),DP(l,r),new SP(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function xP(...t){const e=OP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Rh())return new Blob(t);throw new Pe(Se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function VP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){if(typeof atob>"u")throw vP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yc{constructor(e,n){this.data=e,this.contentType=n||null}}function MP(t,e){switch(t){case rn.RAW:return new Yc(Cy(e));case rn.BASE64:case rn.BASE64URL:return new Yc(ky(t,e));case rn.DATA_URL:return new Yc(FP(e),$P(e))}throw Ah()}function Cy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function UP(t){let e;try{e=decodeURIComponent(t)}catch{throw ui(rn.DATA_URL,"Malformed data URL.")}return Cy(e)}function ky(t,e){switch(t){case rn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ui(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case rn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ui(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=LP(e)}catch(s){throw s.message.includes("polyfill")?s:ui(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Dy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ui(rn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=BP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function FP(t){const e=new Dy(t);return e.base64?ky(rn.BASE64,e.rest):UP(e.rest)}function $P(t){return new Dy(t).contentType}function BP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n){let r=0,s="";ep(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(ep(this.data_)){const r=this.data_,s=VP(r,e,n);return s===null?null:new Vn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Vn(r,!0)}}static getBlob(...e){if(Rh()){const n=e.map(r=>r instanceof Vn?r.data_:r);return new Vn(xP.apply(null,n))}else{const n=e.map(o=>bh(o)?MP(rn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Vn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t){let e;try{e=JSON.parse(t)}catch{return null}return bP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function qP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Oy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(t,e){return e}class ct{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||HP}}let Ro=null;function WP(t){return!bh(t)||t.length<2?t:Oy(t)}function xy(){if(Ro)return Ro;const t=[];t.push(new ct("bucket")),t.push(new ct("generation")),t.push(new ct("metageneration")),t.push(new ct("name","fullPath",!0));function e(i,o){return WP(o)}const n=new ct("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ct("size");return s.xform=r,t.push(s),t.push(new ct("timeCreated")),t.push(new ct("updated")),t.push(new ct("md5Hash",null,!0)),t.push(new ct("cacheControl",null,!0)),t.push(new ct("contentDisposition",null,!0)),t.push(new ct("contentEncoding",null,!0)),t.push(new ct("contentLanguage",null,!0)),t.push(new ct("contentType",null,!0)),t.push(new ct("metadata","customMetadata",!0)),Ro=t,Ro}function zP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Et(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function KP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return zP(r,t),r}function Vy(t,e,n){const r=Ny(e);return r===null?null:KP(t,r,n)}function GP(t,e,n,r){const s=Ny(e);if(s===null||!bh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Sh(d,n,r),y=Py({alt:"media",token:l});return p+y})[0]}function QP(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Ly{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){if(!t)throw Ah()}function YP(t,e){function n(r,s){const i=Vy(t,s,e);return My(i!==null),i}return n}function JP(t,e){function n(r,s){const i=Vy(t,s,e);return My(i!==null),GP(i,s,t.host,t._protocol)}return n}function Uy(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=uP():s=lP():n.getStatus()===402?s=cP(t.bucket):n.getStatus()===403?s=hP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function XP(t){const e=Uy(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=aP(t.path)),i.serverResponse=s.serverResponse,i}return n}function ZP(t,e,n){const r=e.fullServerUrl(),s=Sh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ly(s,i,JP(t,n),o);return a.errorHandler=XP(e),a}function eC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function tC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=eC(null,e)),r}function nC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let F="";for(let D=0;D<2;D++)F=F+Math.random().toString().slice(2);return F}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=tC(e,r,s),u=QP(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=Vn.getBlob(h,r,d);if(p===null)throw _P();const y={name:l.fullPath},A=Sh(i,t.host,t._protocol),w="POST",C=t.maxUploadRetryTime,k=new Ly(A,w,YP(t,n),C);return k.urlParams=y,k.headers=o,k.body=p.uploadData(),k.errorHandler=Uy(e),k}class rC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ar.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ar.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ar.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Hs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Hs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Hs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Hs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Hs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class sC extends rC{initXhr(){this.xhr_.responseType="text"}}function Fy(){return new sC}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){this._service=e,n instanceof Et?this._location=n:this._location=Et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Or(e,n)}get root(){const e=new Et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Oy(this._location.path)}get storage(){return this._service}get parent(){const e=jP(this._location.path);if(e===null)return null;const n=new Et(this._location.bucket,e);return new Or(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw wP(e)}}function iC(t,e,n){t._throwIfRoot("uploadBytes");const r=nC(t.storage,t._location,xy(),new Vn(e,!0),n);return t.storage.makeRequestWithTokens(r,Fy).then(s=>({metadata:s,ref:t}))}function oC(t){t._throwIfRoot("getDownloadURL");const e=ZP(t.storage,t._location,xy());return t.storage.makeRequestWithTokens(e,Fy).then(n=>{if(n===null)throw yP();return n})}function aC(t,e){const n=qP(t._location.path,e),r=new Et(t._location.bucket,n);return new Or(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){return/^[A-Za-z]+:\/\//.test(t)}function lC(t,e){return new Or(t,e)}function $y(t,e){if(t instanceof Ph){const n=t;if(n._bucket==null)throw gP();const r=new Or(n,n._bucket);return e!=null?$y(r,e):r}else return e!==void 0?aC(t,e):t}function uC(t,e){if(e&&cC(e)){if(t instanceof Ph)return lC(t,e);throw Gl("To use ref(service, url), the first argument must be a Storage instance.")}else return $y(t,e)}function np(t,e){const n=e==null?void 0:e[Ry];return n==null?null:Et.makeFromBucketSpec(n,t)}function hC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Gm(s,t.app.options.projectId))}class Ph{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=by,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=iP,this._maxUploadRetryTime=oP,this._requests=new Set,s!=null?this._bucket=Et.makeFromBucketSpec(s,this._host):this._bucket=np(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Et.makeFromBucketSpec(this._url,e):this._bucket=np(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){tp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){tp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Or(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new EP(Sy());{const o=NP(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const rp="@firebase/storage",sp="0.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="storage";function dC(t,e,n){return t=Ae(t),iC(t,e,n)}function fC(t){return t=Ae(t),oC(t)}function pC(t,e){return t=Ae(t),uC(t,e)}function jy(t=La(),e){t=Ae(t);const r=Jn(t,By).getImmediate({identifier:e}),s=Wm("storage");return s&&mC(r,...s),r}function mC(t,e,n,r={}){hC(t,e,n,r)}function gC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ph(n,r,s,e,Fr)}function _C(){Bt(new Pt(By,gC,"PUBLIC").setMultipleInstances(!0)),mt(rp,sp,""),mt(rp,sp,"esm2017")}_C();function Ch(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function qy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yC=qy,Hy=new Ur("auth","Firebase",qy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=new Va("@firebase/auth");function vC(t,...e){ha.logLevel<=re.WARN&&ha.warn(`Auth (${Fr}): ${t}`,...e)}function Fo(t,...e){ha.logLevel<=re.ERROR&&ha.error(`Auth (${Fr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw kh(t,...e)}function cn(t,...e){return kh(t,...e)}function wC(t,e,n){const r=Object.assign(Object.assign({},yC()),{[e]:n});return new Ur("auth","Firebase",r).create(e,{appName:t.name})}function kh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hy.create(t,...e)}function W(t,e,...n){if(!t)throw kh(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fo(e),new Error(e)}function Rn(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function EC(){return ip()==="http:"||ip()==="https:"}function ip(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EC()||Qm()||"connection"in navigator)?navigator.onLine:!0}function TC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=RT()||PT()}get(){return IC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=new so(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rr(t,e,n,r,s={}){return zy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=$i(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Wy.fetch()(Ky(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function zy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AC),e);try{const s=new SC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw So(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw So(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw So(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw So(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw wC(t,u,l);Wt(t,u)}}catch(s){if(s instanceof Ct)throw s;Wt(t,"network-request-failed",{message:String(s)})}}async function io(t,e,n,r,s={}){const i=await rr(t,e,n,r,s);return"mfaPendingCredential"in i&&Wt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ky(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Dh(t.config,s):`${t.config.apiScheme}://${s}`}function RC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class SC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),bC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function So(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}function op(t){return t!==void 0&&t.enterprise!==void 0}class PC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return RC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function CC(t,e){return rr(t,"GET","/v2/recaptchaConfig",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function DC(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NC(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),s=Nh(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:hi(Jc(s.auth_time)),issuedAtTime:hi(Jc(s.iat)),expirationTime:hi(Jc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Jc(t){return Number(t)*1e3}function Nh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Fo("JWT malformed, contained fewer than 3 sections"),null;try{const s=qm(n);return s?JSON.parse(s):(Fo("Failed to decode base64 JWT payload"),null)}catch(s){return Fo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function OC(t){const e=Nh(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&xC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hi(this.lastLoginAt),this.creationTime=hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Li(t,DC(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?UC(i.providerUserInfo):[],a=MC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Gy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function LC(t){const e=Ae(t);await da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function UC(t){return t.map(e=>{var{providerId:n}=e,r=Ch(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC(t,e){const n=await zy(t,{},async()=>{const r=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ky(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $C(t,e){return rr(t,"POST","/v2/accounts:revokeToken",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):OC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await FC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Mi;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mi,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class br{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ch(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Li(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NC(this,e)}reload(){return LC(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await da(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Li(this,kC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:D,isAnonymous:fe,providerData:ue,stsTokenManager:Ce}=n;W(F&&Ce,e,"internal-error");const Ye=Mi.fromJSON(this.name,Ce);W(typeof F=="string",e,"internal-error"),Nn(h,e.name),Nn(d,e.name),W(typeof D=="boolean",e,"internal-error"),W(typeof fe=="boolean",e,"internal-error"),Nn(p,e.name),Nn(y,e.name),Nn(A,e.name),Nn(w,e.name),Nn(C,e.name),Nn(k,e.name);const bt=new br({uid:F,auth:e,email:d,emailVerified:D,displayName:h,isAnonymous:fe,photoURL:y,phoneNumber:p,tenantId:A,stsTokenManager:Ye,createdAt:C,lastLoginAt:k});return ue&&Array.isArray(ue)&&(bt.providerData=ue.map(at=>Object.assign({},at))),w&&(bt._redirectEventId=w),bt}static async _fromIdTokenResponse(e,n,r=!1){const s=new Mi;s.updateFromServerResponse(n);const i=new br({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await da(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new Map;function yn(t){Rn(t instanceof Function,"Expected a class definition");let e=ap.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ap.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qy.type="NONE";const cp=Qy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$o(this.userKey,s.apiKey,i),this.fullPersistenceKey=$o("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new us(yn(cp),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||yn(cp);const o=$o(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=br._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new us(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new us(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ev(e))return"Blackberry";if(tv(e))return"Webos";if(Oh(e))return"Safari";if((e.includes("chrome/")||Jy(e))&&!e.includes("edge/"))return"Chrome";if(Zy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yy(t=Ve()){return/firefox\//i.test(t)}function Oh(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jy(t=Ve()){return/crios\//i.test(t)}function Xy(t=Ve()){return/iemobile/i.test(t)}function Zy(t=Ve()){return/android/i.test(t)}function ev(t=Ve()){return/blackberry/i.test(t)}function tv(t=Ve()){return/webos/i.test(t)}function pc(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BC(t=Ve()){var e;return pc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jC(){return CT()&&document.documentMode===10}function nv(t=Ve()){return pc(t)||Zy(t)||tv(t)||ev(t)||/windows phone/i.test(t)||Xy(t)}function qC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t,e=[]){let n;switch(t){case"Browser":n=lp(Ve());break;case"Worker":n=`${lp(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WC(t,e={}){return rr(t,"GET","/v2/passwordPolicy",nr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=6;class KC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new up(this),this.idTokenSubscription=new up(this),this.beforeStateQueue=new HC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await da(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ae(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WC(this),n=new KC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ur("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $C(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qr(t){return Ae(t)}class up{constructor(e){this.auth=e,this.observer=null,this.addObserver=LT(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QC(t){mc=t}function sv(t){return mc.loadJS(t)}function YC(){return mc.recaptchaEnterpriseScript}function JC(){return mc.gapiScript}function XC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ZC="recaptcha-enterprise",ek="NO_RECAPTCHA";class tk{constructor(e){this.type=ZC,this.auth=qr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{CC(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new PC(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;op(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(ek)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&op(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=YC();c.length!==0&&(c+=a),sv(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function hp(t,e,n,r=!1){const s=new tk(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Yl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await hp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await hp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t,e){const n=Jn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(vi(i,e??{}))return s;Wt(s,"already-initialized")}return n.initialize({options:e})}function rk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sk(t,e,n){const r=qr(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=iv(e),{host:o,port:a}=ik(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ok()}function iv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ik(t){const e=iv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:dp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:dp(o)}}}function dp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ok(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function ak(t,e){return rr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ck(t,e){return io(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(t,e){return io(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function uk(t,e){return io(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends xh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ui(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ui(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,n,"signInWithPassword",ck);case"emailLink":return lk(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,r,"signUpPassword",ak);case"emailLink":return uk(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e){return io(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk="http://localhost";class xr extends xh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ch(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hs(e,n)}buildRequest(){const e={requestUri:hk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fk(t){const e=Ks(Gs(t)).link,n=e?Ks(Gs(e)).deep_link_id:null,r=Ks(Gs(t)).deep_link_id;return(r?Ks(Gs(r)).link:null)||r||n||e||t}class Vh{constructor(e){var n,r,s,i,o,a;const c=Ks(Gs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=dk((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fk(e);try{return new Vh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.providerId=Ls.PROVIDER_ID}static credential(e,n){return Ui._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vh.parseLink(n);return W(r,"argument-error"),Ui._fromEmailAndCode(e,r.code,r.tenantId)}}Ls.PROVIDER_ID="password";Ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends ov{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends oo{constructor(){super("facebook.com")}static credential(e){return xr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends oo{constructor(){super("github.com")}static credential(e){return xr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends oo{constructor(){super("twitter.com")}static credential(e,n){return xr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e){return io(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await br._fromIdTokenResponse(e,r,s),o=fp(r);return new Vr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=fp(r);return new Vr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function fp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends Ct{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,fa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new fa(e,n,r,s)}}function av(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?fa._fromErrorAndOperation(t,i,e,r):i})}async function mk(t,e,n=!1){const r=await Li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gk(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Li(t,av(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=Nh(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),Vr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(t,e,n=!1){const r="signIn",s=await av(t,r,e),i=await Vr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function _k(t,e){return cv(qr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(t){const e=qr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yk(t,e,n){const r=qr(t),o=await Yl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pk).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&lv(t),c}),a=await Vr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function vk(t,e,n){return _k(Ae(t),Ls.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&lv(t),r})}function wk(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function Ek(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function Ik(t,e,n,r){return Ae(t).onAuthStateChanged(e,n,r)}const pa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pa,"1"),this.storage.removeItem(pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(){const t=Ve();return Oh(t)||pc(t)}const Ak=1e3,bk=10;class hv extends uv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tk()&&qC(),this.fallbackToPolling=nv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ak)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hv.type="LOCAL";const Rk=hv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv extends uv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}dv.type="SESSION";const fv=dv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new gc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Sk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Lh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function Ck(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function kk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Nk(){return pv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="firebaseLocalStorageDb",Ok=1,ma="firebaseLocalStorage",gv="fbase_key";class ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _c(t,e){return t.transaction([ma],e?"readwrite":"readonly").objectStore(ma)}function xk(){const t=indexedDB.deleteDatabase(mv);return new ao(t).toPromise()}function Jl(){const t=indexedDB.open(mv,Ok);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ma,{keyPath:gv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ma)?e(r):(r.close(),await xk(),e(await Jl()))})})}async function pp(t,e,n){const r=_c(t,!0).put({[gv]:e,value:n});return new ao(r).toPromise()}async function Vk(t,e){const n=_c(t,!1).get(e),r=await new ao(n).toPromise();return r===void 0?null:r.value}function mp(t,e){const n=_c(t,!0).delete(e);return new ao(n).toPromise()}const Lk=800,Mk=3;class _v{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Mk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(Nk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kk(),!this.activeServiceWorker)return;this.sender=new Pk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jl();return await pp(e,pa,"1"),await mp(e,pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Vk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_c(s,!1).getAll();return new ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Lk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_v.type="LOCAL";const Uk=_v;new so(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(t,e){return e?yn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends xh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $k(t){return cv(t.auth,new Mh(t),t.bypassAuthState)}function Bk(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),gk(n,new Mh(t),t.bypassAuthState)}async function jk(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),mk(n,new Mh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $k;case"linkViaPopup":case"linkViaRedirect":return jk;case"reauthViaPopup":case"reauthViaRedirect":return Bk;default:Wt(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=new so(2e3,1e4);class ns extends yv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=Lh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qk.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk="pendingRedirect",Bo=new Map;class Wk extends yv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bo.get(this.auth._key());if(!e){try{const r=await zk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bo.set(this.auth._key(),e)}return this.bypassAuthState||Bo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zk(t,e){const n=Qk(e),r=Gk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Kk(t,e){Bo.set(t._key(),e)}function Gk(t){return yn(t._redirectPersistence)}function Qk(t){return $o(Hk,t.config.apiKey,t.name)}async function Yk(t,e,n=!1){const r=qr(t),s=Fk(r,e),o=await new Wk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=10*60*1e3;class Xk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jk&&this.cachedEventUids.clear(),this.cachedEventUids.has(gp(e))}saveEventToCache(e){this.cachedEventUids.add(gp(e)),this.lastProcessedEventTime=Date.now()}}function gp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Zk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n1=/^https?/;async function r1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await e1(t);for(const n of e)try{if(s1(n))return}catch{}Wt(t,"unauthorized-domain")}function s1(t){const e=Ql(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!n1.test(n))return!1;if(t1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=new so(3e4,6e4);function _p(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function o1(t){return new Promise((e,n)=>{var r,s,i;function o(){_p(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_p(),n(cn(t,"network-request-failed"))},timeout:i1.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)o();else{const a=XC("iframefcb");return ln()[a]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},sv(`${JC()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw jo=null,e})}let jo=null;function a1(t){return jo=jo||o1(t),jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=new so(5e3,15e3),l1="__/auth/iframe",u1="emulator/auth/iframe",h1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function f1(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dh(e,u1):`https://${t.config.authDomain}/${l1}`,r={apiKey:e.apiKey,appName:t.name,v:Fr},s=d1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$i(r).slice(1)}`}async function p1(t){const e=await a1(t),n=ln().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:f1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:h1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),a=ln().setTimeout(()=>{i(o)},c1.get());function c(){ln().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g1=500,_1=600,y1="_blank",v1="http://localhost";class yp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function w1(t,e,n,r=g1,s=_1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},m1),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ve().toLowerCase();n&&(a=Jy(l)?y1:n),Yy(l)&&(e=e||v1,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(BC(l)&&a!=="_self")return E1(e||"",a),new yp(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new yp(h)}function E1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1="__/auth/handler",T1="emulator/auth/handler",A1=encodeURIComponent("fac");async function vp(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fr,eventId:s};if(e instanceof ov){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof oo){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${A1}=${encodeURIComponent(c)}`:"";return`${b1(t)}?${$i(a).slice(1)}${l}`}function b1({config:t}){return t.emulator?Dh(t,T1):`https://${t.authDomain}/${I1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="webStorageSupport";class R1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fv,this._completeRedirectFn=Yk,this._overrideRedirectResult=Kk}async _openPopup(e,n,r,s){var i;Rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await vp(e,n,r,Ql(),s);return w1(e,o,Lh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await vp(e,n,r,Ql(),s);return Ck(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Rn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await p1(e),r=new Xk(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xc,{type:Xc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xc];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=r1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nv()||Oh()||pc()}}const S1=R1;var wp="@firebase/auth",Ep="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function k1(t){Bt(new Pt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rv(t)},l=new GC(r,s,i,c);return rk(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bt(new Pt("auth-internal",e=>{const n=qr(e.getProvider("auth").getImmediate());return(r=>new P1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(wp,Ep,C1(t)),mt(wp,Ep,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=5*60,N1=Km("authIdTokenMaxAge")||D1;let Ip=null;const O1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>N1)return;const s=n==null?void 0:n.token;Ip!==s&&(Ip=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yc(t=La()){const e=Jn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nk(t,{popupRedirectResolver:S1,persistence:[Uk,Rk,fv]}),r=Km("authTokenSyncURL");if(r){const i=O1(r);Ek(n,i,()=>i(n.currentUser)),wk(n,o=>i(o))}const s=Hm("auth");return s&&sk(n,`http://${s}`),n}function x1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}QC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",x1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});k1("Browser");const wv="@firebase/installations",Uh="0.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=1e4,Iv=`w:${Uh}`,Tv="FIS_v2",V1="https://firebaseinstallations.googleapis.com/v1",L1=60*60*1e3,M1="installations",U1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Lr=new Ur(M1,U1,F1);function Av(t){return t instanceof Ct&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv({projectId:t}){return`${V1}/projects/${t}/installations`}function Rv(t){return{token:t.token,requestStatus:2,expiresIn:B1(t.expiresIn),creationTime:Date.now()}}async function Sv(t,e){const r=(await e.json()).error;return Lr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Pv({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $1(t,{refreshToken:e}){const n=Pv(t);return n.append("Authorization",j1(e)),n}async function Cv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function B1(t){return Number(t.replace("s","000"))}function j1(t){return`${Tv} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=bv(t),s=Pv(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Tv,appId:t.appId,sdkVersion:Iv},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Cv(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Rv(l.authToken)}}else throw await Sv("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=/^[cdef][\w-]{21}$/,Xl="";function z1(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=K1(t);return W1.test(n)?n:Xl}catch{return Xl}}function K1(t){return H1(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=new Map;function Nv(t,e){const n=vc(t);Ov(n,e),G1(n,e)}function Ov(t,e){const n=Dv.get(t);if(n)for(const r of n)r(e)}function G1(t,e){const n=Q1();n&&n.postMessage({key:t,fid:e}),Y1()}let _r=null;function Q1(){return!_r&&"BroadcastChannel"in self&&(_r=new BroadcastChannel("[Firebase] FID Change"),_r.onmessage=t=>{Ov(t.data.key,t.data.fid)}),_r}function Y1(){Dv.size===0&&_r&&(_r.close(),_r=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="firebase-installations-database",X1=1,Mr="firebase-installations-store";let Zc=null;function Fh(){return Zc||(Zc=Zm(J1,X1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Mr)}}})),Zc}async function ga(t,e){const n=vc(t),s=(await Fh()).transaction(Mr,"readwrite"),i=s.objectStore(Mr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Nv(t,e.fid),e}async function xv(t){const e=vc(t),r=(await Fh()).transaction(Mr,"readwrite");await r.objectStore(Mr).delete(e),await r.done}async function wc(t,e){const n=vc(t),s=(await Fh()).transaction(Mr,"readwrite"),i=s.objectStore(Mr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Nv(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $h(t){let e;const n=await wc(t.appConfig,r=>{const s=Z1(r),i=eD(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Xl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Z1(t){const e=t||{fid:z1(),registrationStatus:0};return Vv(e)}function eD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Lr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nD(t)}:{installationEntry:e}}async function tD(t,e){try{const n=await q1(t,e);return ga(t.appConfig,n)}catch(n){throw Av(n)&&n.customData.serverCode===409?await xv(t.appConfig):await ga(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function nD(t){let e=await Tp(t.appConfig);for(;e.registrationStatus===1;)await kv(100),e=await Tp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await $h(t);return r||n}return e}function Tp(t){return wc(t,e=>{if(!e)throw Lr.create("installation-not-found");return Vv(e)})}function Vv(t){return rD(t)?{fid:t.fid,registrationStatus:0}:t}function rD(t){return t.registrationStatus===1&&t.registrationTime+Ev<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sD({appConfig:t,heartbeatServiceProvider:e},n){const r=iD(t,n),s=$1(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Iv,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Cv(()=>fetch(r,a));if(c.ok){const l=await c.json();return Rv(l)}else throw await Sv("Generate Auth Token",c)}function iD(t,{fid:e}){return`${bv(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bh(t,e=!1){let n;const r=await wc(t.appConfig,i=>{if(!Lv(i))throw Lr.create("not-registered");const o=i.authToken;if(!e&&cD(o))return i;if(o.requestStatus===1)return n=oD(t,e),i;{if(!navigator.onLine)throw Lr.create("app-offline");const a=uD(i);return n=aD(t,a),a}});return n?await n:r.authToken}async function oD(t,e){let n=await Ap(t.appConfig);for(;n.authToken.requestStatus===1;)await kv(100),n=await Ap(t.appConfig);const r=n.authToken;return r.requestStatus===0?Bh(t,e):r}function Ap(t){return wc(t,e=>{if(!Lv(e))throw Lr.create("not-registered");const n=e.authToken;return hD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aD(t,e){try{const n=await sD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await ga(t.appConfig,r),n}catch(n){if(Av(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xv(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ga(t.appConfig,r)}throw n}}function Lv(t){return t!==void 0&&t.registrationStatus===2}function cD(t){return t.requestStatus===2&&!lD(t)}function lD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+L1}function uD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function hD(t){return t.requestStatus===1&&t.requestTime+Ev<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(t){const e=t,{installationEntry:n,registrationPromise:r}=await $h(e);return r?r.catch(console.error):Bh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fD(t,e=!1){const n=t;return await pD(n),(await Bh(n,e)).token}async function pD(t){const{registrationPromise:e}=await $h(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(t){if(!t||!t.options)throw el("App Configuration");if(!t.name)throw el("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw el(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function el(t){return Lr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="installations",gD="installations-internal",_D=t=>{const e=t.getProvider("app").getImmediate(),n=mD(e),r=Jn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},yD=t=>{const e=t.getProvider("app").getImmediate(),n=Jn(e,Mv).getImmediate();return{getId:()=>dD(n),getToken:s=>fD(n,s)}};function vD(){Bt(new Pt(Mv,_D,"PUBLIC")),Bt(new Pt(gD,yD,"PRIVATE"))}vD();mt(wv,Uh);mt(wv,Uh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="analytics",wD="firebase_id",ED="origin",ID=60*1e3,TD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",jh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new Va("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},It=new Ur("analytics","Analytics",AD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(t){if(!t.startsWith(jh)){const e=It.create("invalid-gtag-resource",{gtagURL:t});return _t.warn(e.message),""}return t}function Uv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function RD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function SD(t,e){const n=RD("firebase-js-sdk-policy",{createScriptURL:bD}),r=document.createElement("script"),s=`${jh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function PD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function CD(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Uv(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){_t.error(a)}t("config",s,i)}async function kD(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Uv(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){_t.error(i)}}function DD(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await kD(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await CD(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){_t.error(a)}}return s}function ND(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=DD(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function OD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(jh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=30,VD=1e3;class LD{constructor(e={},n=VD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Fv=new LD;function MD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function UD(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:MD(r)},i=TD.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw It.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function FD(t,e=Fv,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw It.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw It.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new jD;return setTimeout(async()=>{a.abort()},n!==void 0?n:ID),$v({appId:r,apiKey:s,measurementId:i},o,a,e)}async function $v(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Fv){var i;const{appId:o,measurementId:a}=t;try{await $D(r,e)}catch(c){if(a)return _t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await UD(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!BD(l)){if(s.deleteThrottleMetadata(o),a)return _t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Gd(n,s.intervalMillis,xD):Gd(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),_t.debug(`Calling attemptFetch again in ${u} millis`),$v(t,h,r,s)}}function $D(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(It.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function BD(t){if(!(t instanceof Ct)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function qD(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HD(){if(_u())try{await Ym()}catch(t){return _t.warn(It.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return _t.warn(It.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function WD(t,e,n,r,s,i,o){var a;const c=FD(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&_t.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>_t.error(p)),e.push(c);const l=HD().then(p=>{if(p)return r.getId()}),[u,h]=await Promise.all([c,l]);OD(i)||SD(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[ED]="firebase",d.update=!0,h!=null&&(d[wD]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e){this.app=e}_delete(){return delete di[this.app.options.appId],Promise.resolve()}}let di={},bp=[];const Rp={};let tl="dataLayer",KD="gtag",Sp,Bv,Pp=!1;function GD(){const t=[];if(Qm()&&t.push("This is a browser extension environment."),DT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=It.create("invalid-analytics-context",{errorInfo:e});_t.warn(n.message)}}function QD(t,e,n){GD();const r=t.options.appId;if(!r)throw It.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)_t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw It.create("no-api-key");if(di[r]!=null)throw It.create("already-exists",{id:r});if(!Pp){PD(tl);const{wrappedGtag:i,gtagCore:o}=ND(di,bp,Rp,tl,KD);Bv=i,Sp=o,Pp=!0}return di[r]=WD(t,bp,Rp,e,Sp,tl,n),new zD(t)}function YD(t=La()){t=Ae(t);const e=Jn(t,_a);return e.isInitialized()?e.getImmediate():JD(t)}function JD(t,e={}){const n=Jn(t,_a);if(n.isInitialized()){const s=n.getImmediate();if(vi(e,n.getOptions()))return s;throw It.create("already-initialized")}return n.initialize({options:e})}function XD(t,e,n,r){t=Ae(t),qD(Bv,di[t.app.options.appId],e,n,r).catch(s=>_t.error(s))}const Cp="@firebase/analytics",kp="0.10.1";function ZD(){Bt(new Pt(_a,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return QD(r,s,n)},"PUBLIC")),Bt(new Pt("analytics-internal",t,"PRIVATE")),mt(Cp,kp),mt(Cp,kp,"esm2017");function t(e){try{const n=e.getProvider(_a).getImmediate();return{logEvent:(r,s,i)=>XD(n,r,s,i)}}catch(n){throw It.create("interop-component-reg-failed",{reason:n})}}}ZD();const eN={apiKey:"AIzaSyAo9qKa_TiYLWsAUeZo8XBJqKCtBlEPBRQ",authDomain:"artharbor-934aa.firebaseapp.com",projectId:"artharbor-934aa",storageBucket:"artharbor-934aa.appspot.com",messagingSenderId:"548767900610",appId:"1:548767900610:web:749b0c4ad1a3dbb04f2c5b",measurementId:"G-NEDRR5W9NW"},Ec=eg(eN);YD(Ec);jy(Ec);const At=$S(Ec),tN=yc(Ec);Ik(tN,t=>{t?console.log("Authenticated user:",t):console.log("User is not authenticated")});async function Ic(t){const e=await bn(Nr(Ht(At,"users"),ro("firebaseId","==",t)));if(e.docs.length==0)return null;for(const n of e.docs){let r=n.data();return r.id=n.id,r}}async function nN(t,e){try{await Ty(to(At,"users",t),{name:e.name}),console.log(`Edited user of id ${t}`)}catch(n){console.error("Error editing document: ",n)}}async function jv(t){let e=[];const n=await bn(Nr(Ht(At,"arts"),ro("authorId","==",t)));for(const r of n.docs){let s=r.data();s.id=r.id,e.push(s)}return e}async function rN(t){try{await rP(to(At,"arts",t)),console.log(`Deleted art of id ${t}`)}catch(e){console.error("Error deleting document: ",e)}}const sN="/artharbor/assets/login_modal_left_side-7b553fc1.jpg",ot=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},iN={data(){return{show:!1}},methods:{open(){this.setModalView(),this.show=!0},close(){this.unsetModalView(),this.show=!1},login(){const t=document.getElementById("modal_input_email").value,e=document.getElementById("modal_input_password").value,n=yc();vk(n,t,e).then(r=>{const s=r.user,i={accessToken:s.accessToken,email:s.email,firebaseId:s.uid};gT(i),this.close(),window.location.reload()}).catch(r=>{r.code;const s=r.message;alert("Invalid credentials"),console.log(s)})},switchToSignUp(){this.close(),this.$emit("open-sign-up")}}},oN={key:0,class:"modal-view"},aN={class:"modal-content"},cN={class:"row"},lN=g("img",{class:"modal-content-left-section",src:sN},null,-1),uN={class:"modal-content-right-section"},hN={class:"right-section-content"},dN=Fi('<h1 class="modal-title">Log in</h1><div class="modal-input-container"><label class="modal-input-label">Email:</label><input id="modal_input_email" class="modal-input" type="email" placeholder="example@email.com"></div><div class="modal-input-container"><label class="modal-input-label">Password:</label><input id="modal_input_password" class="modal-input" type="password"></div>',3),fN={class:"modal-already-member"},pN=g("p",{class:"modal-terms-text"},[Le("By logging in to Art Harbor, I confirm that I have read and agree to the Art Harbor "),g("span",null,"Terms of Service"),Le(", "),g("span",null,"Privacy Policy"),Le(", and to receive emails and updates.")],-1);function mN(t,e,n,r,s,i){return s.show?(Q(),X("div",oN,[g("div",aN,[g("span",{class:"modal-close",onClick:e[0]||(e[0]=o=>i.close())},"×"),g("div",cN,[lN,g("div",uN,[g("div",hN,[dN,g("div",{class:"modal-button",onClick:e[1]||(e[1]=o=>i.login())},"Log in"),g("p",fN,[Le("Don't have an account? "),g("span",{onClick:e[2]||(e[2]=o=>i.switchToSignUp())},"Sign up")]),pN])])])])])):Ut("",!0)}const qv=ot(iN,[["render",mN]]),gN="/artharbor/assets/register_modal_left_side-397d5df7.jpg",_N={components:{LoginModal:qv},data(){return{show:!1}},methods:{open(){this.setModalView(),this.show=!0},close(){this.unsetModalView(),this.show=!1},createUser(){const t=document.getElementById("modal_input_email").value,e=document.getElementById("modal_input_password").value;if(t.length<8||e.length<6){alert("Email or password is too short or incorrectly formatted!");return}const n=yc();yk(n,t,e).then(r=>{const s=r.user;console.log(s);const i={email:s.email,firebaseId:s.uid,name:s.providerData[0].displayName,username:s.email.split("@")[0]};this.addUserData(i).then(()=>this.switchToLogin()).catch(o=>console.log(o))}).catch(r=>{const s=r.code;r.message,s=="auth/email-already-in-use"&&alert("A user with entered email already exists!")})},switchToLogin(){this.close(),this.$emit("open-login")},async addUserData(t){const e=await Ay(Ht(At,"users"),t);console.log(`User successfully created! DocRef id: ${e.id}`)}}},yN={key:0,class:"modal-view"},vN={class:"modal-content"},wN={class:"row"},EN=g("img",{class:"modal-content-left-section",src:gN},null,-1),IN={class:"modal-content-right-section"},TN={class:"right-section-content"},AN=Fi('<h1 class="modal-title">Join ArtHarbor</h1><div class="modal-input-container"><label class="modal-input-label">Add your email:</label><input id="modal_input_email" class="modal-input" type="email" placeholder="example@email.com"></div><div class="modal-input-container"><label class="modal-input-label">Choose your password:</label><input id="modal_input_password" class="modal-input" type="password"><p class="modal-input-helper">Min 6 characters, numbers &amp; letters</p></div>',3),bN={class:"modal-already-member"},RN=g("p",{class:"modal-terms-text"},[Le("By joining Art Harbor, I confirm that I have read and agree to the Art Harbor "),g("span",null,"Terms of Service"),Le(", "),g("span",null,"Privacy Policy"),Le(", and to receive emails and updates.")],-1);function SN(t,e,n,r,s,i){return s.show?(Q(),X("div",yN,[g("div",vN,[g("span",{class:"modal-close",onClick:e[0]||(e[0]=(...o)=>i.close&&i.close(...o))},"×"),g("div",wN,[EN,g("div",IN,[g("div",TN,[AN,g("div",{class:"modal-button",onClick:e[1]||(e[1]=o=>i.createUser())},"Register"),g("p",bN,[Le("Already a member? "),g("span",{onClick:e[2]||(e[2]=o=>i.switchToLogin())},"Log in")]),RN])])])])])):Ut("",!0)}const PN=ot(_N,[["render",SN]]),CN="/artharbor/assets/nav_profile-c5f1c77d.svg";const kN={components:{RegisterModal:PN,LoginModal:qv},data(){return{firebaseId:Oa(),user:"",username:""}},mounted(){Ic(this.firebaseId).then(t=>{t!=null&&(this.user=t,this.username=t.username)}).catch(t=>{console.log(t)})},methods:{isActive(t){return this.$route.path==t},openLogin(){this.$refs.loginModalComponent.open()},openSignUp(){this.$refs.registerModalComponent.open()},signOut(){_T(),window.location.reload()},goToProfile(){this.$router.push({path:"/profile"})}}},DN=t=>(zt("data-v-7320f231"),t=t(),Kt(),t),NN={class:"row navigation-section"},ON={class:"row profile-container"},xN={key:0},VN={key:1},LN=DN(()=>g("div",{class:"profile-icon-container"},[g("img",{src:CN})],-1));function MN(t,e,n,r,s,i){const o=pt("RouterLink"),a=pt("RegisterModal"),c=pt("LoginModal");return Q(),X(Oe,null,[g("div",NN,[oe(o,{class:$n(["navigation-item",{active:i.isActive("/")}]),exact:"",to:"/"},{default:xt(()=>[Le("Home")]),_:1},8,["class"]),oe(o,{class:$n(["navigation-item",{active:i.isActive("/art")}]),exact:"",to:"/art"},{default:xt(()=>[Le("Art")]),_:1},8,["class"]),oe(o,{class:$n(["navigation-item",{active:i.isActive("/news")}]),exact:"",to:"/news"},{default:xt(()=>[Le("News")]),_:1},8,["class"]),oe(o,{class:$n(["navigation-item",{active:i.isActive("/about")}]),exact:"",to:"/about"},{default:xt(()=>[Le("About")]),_:1},8,["class"])]),g("div",ON,[s.user?(Q(),X("span",{key:0,class:"profile-signout-button",onClick:e[0]||(e[0]=l=>i.signOut())},"Sign out")):(Q(),X("span",{key:1,class:"profile-signup-button",onClick:e[1]||(e[1]=l=>i.openSignUp())},"Sign up")),g("div",{class:"row profile-login-button",onClick:e[2]||(e[2]=l=>s.user?i.goToProfile():i.openLogin())},[s.user?(Q(),X("span",xN,ce(s.user.username||"Profile"),1)):(Q(),X("span",VN,"Log in")),LN])]),oe(a,{ref:"registerModalComponent",onOpenLogin:e[3]||(e[3]=l=>i.openLogin())},null,512),oe(c,{ref:"loginModalComponent",onOpenSignUp:e[4]||(e[4]=l=>i.openSignUp())},null,512)],64)}const UN=ot(kN,[["render",MN],["__scopeId","data-v-7320f231"]]);const FN={},$N={class:"footer"},BN=Fi('<div class="footer-content row" data-v-149160a9><div class="column footer-content-column" data-v-149160a9><a data-v-149160a9>Terms &amp; Conditions</a><a data-v-149160a9>Privacy Policy</a><a data-v-149160a9>Contact</a></div><div class="column footer-content-column" data-v-149160a9><h3 data-v-149160a9>Join our mailing list:</h3><div class="row mailing-list-input-container" data-v-149160a9><input class="mailing-list-input" placeholder="Email address" data-v-149160a9><div class="mailing-list-button green-button" data-v-149160a9>Subscribe</div></div></div><div class="column footer-content-column" data-v-149160a9><a class="copyright-mark" data-v-149160a9>© 2024 Art Harbor</a></div></div>',1),jN=[BN];function qN(t,e){return Q(),X("div",$N,jN)}const HN=ot(FN,[["render",qN],["__scopeId","data-v-149160a9"]]);const WN={__name:"App",setup(t){return(e,n)=>(Q(),X(Oe,null,[oe(UN),oe(vr($m)),oe(HN)],64))}},zN=ot(WN,[["__scopeId","data-v-48b1459f"]]);async function KN(t){const e=jy(),n=pC(e,`images/${t.name}`),r=await dC(n,t);return console.log("Uploaded a file successfully!"),fC(r.ref)}async function GN(t){Ay(Ht(At,"arts"),t).then(e=>{console.log("Data was uploaded!"),console.log(e)})}async function QN(t){try{await Ty(to(At,"arts",t.id),{title:t.title,description:t.description,price:t.price}),console.log(`Edited art of id ${t.id}`)}catch(e){console.error("Error editing document: ",e)}}async function YN(t){return(await nP(to(At,"arts",t))).data()}async function JN(t,e){let n=[];const r=await bn(Nr(Ht(At,"arts"),ro("authorId","==",e),JS(5)));for(const s of r.docs)if(s.id!=t){let i=s.data();i.id=s.id,n.push(i)}return n}const XN=[{id:1,imageUrl:"../src/assets/images/art/1.jpg",created_date:"Nov 16, 2023",title:"Tower of Insolence",author:"tadasmak",description:"In this mesmerizing photograph, a Gothic masterpiece pierces the sky with its sublime elegance. The church tower, an embodiment of Gothic architecture, rises with majestic splendor, adorned with pointed arches, delicate tracery, and soaring spires that seem to reach towards the divine. Each intricately carved detail tells a tale of craftsmanship and devotion, capturing the essence of an era marked by soaring aspirations."},{id:2,imageUrl:"../src/assets/images/art/2.jpg",created_date:"Nov 14, 2023",title:"River flows in you",author:"tadasmak",description:"In this enchanting long-exposure photograph, the river becomes a canvas for the dance of water and light. Captured with a prolonged shutter speed, the flowing river transforms into a silky ribbon, each ripple and current blending seamlessly into the next. The ethereal quality of the water's movement is accentuated by the misty embrace of a gentle fog, which hovers above the surface like a delicate veil."},{id:3,imageUrl:"../src/assets/images/art/3.jpg",created_date:"Nov 01, 2023",title:"Purple skies evening",author:"tadasmak",description:"In this captivating long-exposure photograph, the evening unfolds in a symphony of reflections beside a tranquil lake. The still waters serve as a mirror, perfectly mirroring the dense forest that stands sentinel along the shore. The extended shutter speed captures the gentle movement of the lake, transforming it into a polished surface that reflects the twilight sky like a celestial canvas."},{id:4,imageUrl:"../src/assets/images/art/4.jpg",created_date:"Dec 02, 2023",title:"Landscape to Vilnius",author:"tadasmak",description:"In the heart of the day, Vilnius unfolds its picturesque charm beneath the radiant sun. This captivating landscape photograph captures the Lithuanian capital in all its vibrant glory. The cityscape is a harmonious blend of historic and modern architecture, with the sun casting a warm glow upon the diverse array of buildings."},{id:5,imageUrl:"../src/assets/images/art/5.jpg",created_date:"Oct 19, 2023",title:"Abandoned apocalypse",author:"artificial_intelligence",description:"In this hauntingly beautiful AI-generated image, an abandoned cityscape emerges like a forgotten masterpiece on canvas. The scene unfolds with an eerie grace, as if painted by the spectral hand of time itself. The buildings, once thriving with life, now stand in desolate stillness, their facades weathered by the relentless march of years."},{id:6,imageUrl:"../src/assets/images/art/6.jpg",created_date:"Sep 26, 2023",title:"Light blue intelligence",author:"artificial_intelligence",description:"In this enchanting AI-generated image, a woman in a light blue dress gracefully traverses the cobbled streets of a medieval town, casting a timeless silhouette against the historical backdrop. The soft, muted hues of the cobblestones and stone buildings create a setting that seems plucked from the pages of a medieval manuscript."},{id:7,imageUrl:"../src/assets/images/art/7.jpg",created_date:"Sep 12, 2023",title:"Breath of a flower",author:"artificial_intelligence",description:"In this mesmerizing AI-generated image, a close-up view of a flower transports us into a realm of vibrant surrealism. The blossom, an intricate tapestry of pink, red, and yellow, unfurls its petals like a kaleidoscopic dance. The psychedelic effect intensifies as the colors converge towards the center, creating a visual symphony that seems to defy the ordinary boundaries of nature."},{id:8,imageUrl:"../src/assets/images/art/8.jpg",created_date:"Nov 25, 2023",title:"Daisy forest",author:"artificial_intelligence",description:"In this enchanting AI-generated image, a lush forest floor transforms into a magical carpet of daisies, creating a scene that is both whimsical and serene. The verdant expanse of the forest is blanketed by a profusion of white and yellow daisies, creating a breathtaking contrast against the rich green foliage."},{id:9,imageUrl:"../src/assets/images/art/9.jpg",created_date:"Dec 06, 2023",title:"Neighbor's motorcycle",author:"tadasmak",description:"In this captivating photograph, an orange-black motorcycle stands as a beacon of power and style, leaning against a weathered wall adorned with nature's embrace. The motorcycle, with its sleek design and vibrant colors, exudes a sense of adventure, hinting at journeys yet to unfold. Resting against the textured surface of the wall, it becomes a testament to the synergy between man-made machines and the organic world."},{id:10,imageUrl:"../src/assets/images/art/10.jpg",created_date:"Oct 08, 2023",title:"A studio of masterwork",author:"artificial_intelligence",description:"In this evocative AI-generated image, the soul of creativity comes to life within the warm embrace of a rustic brick building turned art studio. The studio, bathed in soft, natural light pouring through large, weathered windows, exudes an atmosphere of inspiration and artistic fervor."},{id:11,imageUrl:"../src/assets/images/art/11.jpg",created_date:"Dec 09, 2023",title:"Glampse into the futuristic art",author:"artificial_intelligence",description:"In this captivating AI-generated image, a lone figure stands in a mesmerizing futuristic environment, bathed in the stark contrast of black and white tones. The setting exudes an otherworldly ambiance, reminiscent of a vast repository of knowledge, yet defying traditional expectations of a library."},{id:12,imageUrl:"../src/assets/images/art/12.jpg",created_date:"Nov 02, 2023",title:"Forgotten Solitude",author:"artificial_intelligence",description:"An eerie scene in nature: an abandoned house stands alone amidst the dense and untamed forest, surrounded by towering trees and overgrown vegetation, telling a story of solitude and forgotten history."},{id:13,imageUrl:"../src/assets/images/art/13.jpg",created_date:"Oct 20, 2023",title:"A battle between nations",author:"artificial_intelligence",description:"In this riveting AI-generated image, two colossal ground-based war machines command attention on a futuristic battlefield. One machine emanates a fierce red aura, while the other exudes a resolute blue glow, symbolizing the clash of opposing forces in a high-tech theater of war. These massive, tank-like constructs, reminiscent of futuristic landships, dominate the expansive battleground."}];const ZN={name:"Home",data(){return{themes:[{id:1,title:"Nature",description:"Embrace the beauty of the natural world through captivating landscapes, wildlife, and botanical wonders.",imageUrl:"../src/assets/images/home/nature.jpg"},{id:2,title:"Evenings",description:"Witness the world transformed as the sun sets and paints the sky with hues of twilight.",imageUrl:"../src/assets/images/home/evenings.jpg"},{id:3,title:"Architecture",description:"Experience the allure of architectural wonders. Delve into a captivating collection that highlights the delicate balance between human creativity and the serene beauty of nature.",imageUrl:"../src/assets/images/home/architecture.jpg"}],arts:XN.slice(0,7),parallaxOffset:0}},mounted(){window.addEventListener("scroll",this.parallaxEffect);const t=document.getElementById("image_slider");document.getElementsByClassName("slider-element");let e=!1,n=0,r=0,s=0,i=t.offsetWidth;window.onresize=function(u){i=t.offsetWidth};const o=u=>{document.getSelection().removeAllRanges(),e=!0,n=u.pageX-t.offsetLeft},a=u=>{e=!1,r=s},c=u=>{if(!e)return;s=(u.pageX-t.offsetLeft-n)/i*100+r,t.style.transform=`translate(${s}%, 0)`},l=u=>{e=!1,r=s};t.addEventListener("mousedown",u=>o(u)),window.ontouchstart=u=>o(u.touches[0]),t.addEventListener("mouseup",u=>a()),window.ontouchend=u=>a(u.touches[0]),t.addEventListener("mousemove",u=>c(u)),window.ontouchmove=u=>c(u.touches[0]),t.addEventListener("mouseleave",u=>l()),window.ontouchcancel=u=>l(u.touches[0])},methods:{parallaxEffect(){this.parallaxOffset=window.scrollY*.4}}},sr=t=>(zt("data-v-ca4732ae"),t=t(),Kt(),t),eO=sr(()=>g("div",{class:"home-content column"},[g("div",{class:"home-header"},[g("h1",{class:"home-title"},"Art Harbor"),g("h4",{class:"home-subtitle"},"A welcoming place for art enthusiasts to bloom")])],-1)),tO={class:"content themes-section",id:"themes_section"},nO=sr(()=>g("h2",{class:"section-title"},"Explore art themes",-1)),rO=sr(()=>g("h5",{class:"section-subtitle"},"Delve into the world of creativity and expression as you explore our diverse collection of art themes. From the tranquility of nature photography to the classic art, discover the stories, emotions, and inspirations behind each unique theme brought to life by talented artists.",-1)),sO={class:"image-slider row",id:"image_slider"},iO=sr(()=>g("div",{class:"themes-section-darken-overlay"},null,-1)),oO={class:"themes-section-text-container"},aO={class:"themes-section-title"},cO={class:"themes-section-description"},lO=sr(()=>g("div",{class:"black-area"},null,-1)),uO={class:"content explore-section"},hO=sr(()=>g("h2",{class:"section-title"},"Step into a world of creativity",-1)),dO=sr(()=>g("h5",{class:"section-subtitle"},"Immerse yourself in our art exhibitions. From the vibrant strokes of color to the intricate details, experience the power of art to captivate, inspire, and transport you to new realms of imagination and emotion.",-1)),fO={class:"artwork-grid"},pO=["src"],mO={class:"artwork-explore-overlay"},gO=sr(()=>g("div",{class:"artwork-explore-button green-button"},"Explore",-1));function _O(t,e,n,r,s,i){const o=pt("RouterLink");return Q(),X("main",null,[eO,g("div",tO,[nO,rO,g("div",sO,[(Q(!0),X(Oe,null,En(s.themes,a=>(Q(),X("div",{key:a.id,class:"themes-section-image-container slider-element column",style:ds({backgroundImage:"url("+a.imageUrl+")"}),draggable:"false"},[iO,g("div",oO,[g("div",aO,ce(a.title),1),g("div",cO,ce(a.description),1)])],4))),128))])]),lO,g("div",{class:"parallax-image",style:ds({backgroundPositionY:`${s.parallaxOffset}px`})},null,4),g("div",uO,[hO,dO,g("div",fO,[(Q(!0),X(Oe,null,En(s.arts,a=>(Q(),X("div",{key:a.id},[g("img",{src:a.imageUrl,class:"artwork-grid-image"},null,8,pO)]))),128))]),g("div",mO,[oe(o,{to:"/art"},{default:xt(()=>[gO]),_:1})])])])}const yO=ot(ZN,[["render",_O],["__scopeId","data-v-ca4732ae"]]);const vO={props:{pageTitle:{type:String,required:!0},pageDescription:{type:String,required:!0}}},wO={class:"front-header-content column"},EO={class:"front-header-text"},IO={class:"front-header-title"},TO={class:"front-header-subtitle"};function AO(t,e,n,r,s,i){return Q(),X("div",wO,[g("div",EO,[g("h1",IO,ce(n.pageTitle),1),g("h4",TO,ce(n.pageDescription),1)])])}const qh=ot(vO,[["render",AO],["__scopeId","data-v-a1de9c87"]]);const bO={components:{FrontHeader:qh},data(){return{pageTitle:"Explore art",pageDescription:"Embark on a captivating journey",arts:[]}},mounted(){let t=this.$route.query.sort||"relevant",e=this.$route.query.filter;this.getArtData(t,e),this.activateSortOptionElement(t),this.activateFilterOptionElement(e)},methods:{selectSortOption(t){this.activateSortOptionElement(t);let e="desc";t=="price"&&(e="asc"),this.$router.push({query:{sort:t,order:e}}),this.getArtData(t,"")},selectFilterOption(){let t=document.getElementById("filter_selection").value;t?this.$router.push({query:{filter:t}}):this.$router.push({query:""}),this.getArtData("",t)},async getArtData(t,e){this.arts=[];let n={};t=="newest"?(n.sort="createdTimestamp",n.order="desc"):t=="price"?(n.sort="price",n.order="asc"):(n.sort="views",n.order="desc");let r;e?r=await bn(Nr(Ht(At,"arts"),ro(e,"!=",null))):r=await bn(Nr(Ht(At,"arts"),vy(n.sort,n.order))),r.forEach(s=>{let i=s.data();i.id=s.id,this.arts.push(i)})},activateSortOptionElement(t){let e=document.getElementsByClassName("sort-section")[0].children;for(let n=0;n<e.length;n++)e[n].classList.remove("active");document.getElementById(`sort_${t}`).classList.add("active")},activateFilterOptionElement(t){t&&(document.getElementById("filter_selection").value=t)}}},co=t=>(zt("data-v-b8060c7f"),t=t(),Kt(),t),RO={class:"art-content content"},SO={class:"filter-container row"},PO={class:"filter-section"},CO=co(()=>g("label",{class:"filter-label"},"Filter by:",-1)),kO=co(()=>g("option",{class:"filter-option",value:"",selected:""},"ALL",-1)),DO=co(()=>g("option",{id:"filter_forsale",class:"filter-option",value:"price"},"For Sale",-1)),NO=[kO,DO],OO={class:"sort-section"},xO=co(()=>g("span",null,"|",-1)),VO=co(()=>g("span",null,"|",-1)),LO={class:"artwork-grid"},MO=["src"];function UO(t,e,n,r,s,i){const o=pt("FrontHeader"),a=pt("RouterLink");return Q(),X("main",null,[oe(o,{pageTitle:s.pageTitle,pageDescription:s.pageDescription},null,8,["pageTitle","pageDescription"]),g("div",RO,[g("div",SO,[g("div",PO,[CO,g("select",{id:"filter_selection",class:"filter-selection",onChange:e[0]||(e[0]=c=>i.selectFilterOption())},NO,32)]),g("div",OO,[g("span",{id:"sort_relevant",class:"sort-option active",onClick:e[1]||(e[1]=c=>i.selectSortOption("relevant"))},"MOST RELEVANT"),xO,g("span",{id:"sort_price",class:"sort-option",onClick:e[2]||(e[2]=c=>i.selectSortOption("price"))},"PRICE"),VO,g("span",{id:"sort_newest",class:"sort-option",onClick:e[3]||(e[3]=c=>i.selectSortOption("newest"))},"NEWEST")])]),g("div",LO,[(Q(!0),X(Oe,null,En(s.arts,c=>(Q(),X("div",{key:c.id,class:"artwork-grid-item"},[oe(a,{to:`/art/${c.id}`},{default:xt(()=>[g("img",{src:c.imageUrl,class:"artwork-grid-image"},null,8,MO)]),_:2},1032,["to"])]))),128))])])])}const FO=ot(bO,[["render",UO],["__scopeId","data-v-b8060c7f"]]);const $O={data(){return{artworkId:this.$route.params.id,artwork:{},otherArtworks:[],author:"",imageShouldClick:!0}},mounted(){YN(this.artworkId).then(u=>{this.artwork=u,Ic(u.authorId).then(h=>{this.author=h}),JN(this.artworkId,u.authorId).then(h=>{this.otherArtworks=h})});const t=document.getElementById("image_slider");document.getElementsByClassName("slider-element");let e=t.offsetWidth;window.onresize=function(u){e=t.offsetWidth};let n=!1,r=0,s=0,i=0;const o=u=>{document.getSelection().removeAllRanges(),n=!0,r=u.pageX-t.offsetLeft},a=u=>{n=!1,s=i},c=u=>{if(!n)return;const d=u.pageX-t.offsetLeft-r;(d<-5||d>5)&&(this.imageShouldClick=!1),i=d/e*100+s,i<-100?i=-100:i>0&&(i=0),t.style.transform=`translate(${i}%, 0)`},l=u=>{n=!1,s=i};t.addEventListener("mousedown",u=>o(u)),window.ontouchstart=u=>o(u.touches[0]),t.addEventListener("mouseup",u=>a()),window.ontouchend=u=>a(u.touches[0]),t.addEventListener("mousemove",u=>c(u)),window.ontouchmove=u=>c(u.touches[0]),t.addEventListener("mouseleave",u=>l()),window.ontouchcancel=u=>l(u.touches[0])},methods:{refreshPage(t){this.imageShouldClick?this.$router.push({path:`/art/${t}`}).then(()=>{window.location.reload()}):this.imageShouldClick=!0}}},BO=t=>(zt("data-v-2b8dd15f"),t=t(),Kt(),t),jO={class:"artwork-content content"},qO={class:"artwork-container column"},HO=["src"],WO={class:"artwork-created-date"},zO={class:"artwork-info-container"},KO={class:"artwork-title"},GO=BO(()=>g("span",null,"by",-1)),QO={class:"artwork-description"},YO={key:0,class:"artwork-price-label"},JO={class:"other-artwork-container"},XO={class:"other-artwork-slider row",id:"image_slider"},ZO=["onClick"],ex=["src"];function tx(t,e,n,r,s,i){const o=pt("RouterLink");return Q(),X("main",null,[g("div",jO,[g("div",qO,[g("img",{class:"artwork",src:s.artwork.imageUrl},null,8,HO),g("div",WO,[Le("Created: "),g("span",null,ce(s.artwork.createdDate),1)]),g("div",zO,[g("h1",KO,ce(s.artwork.title),1),oe(o,{class:"artwork-author",to:"/artist/"+s.author.firebaseId},{default:xt(()=>[GO,Le(" "+ce(s.author.username),1)]),_:1},8,["to"]),g("p",QO,ce(s.artwork.description),1),s.artwork.price?(Q(),X("p",YO,[Le("Price: "),g("span",null,ce(s.artwork.price)+"€",1)])):Ut("",!0)])]),g("div",JO,[g("h2",null,[Le("Other artwork by "),g("b",null,ce(s.author.username),1),Le(":")]),g("div",XO,[(Q(!0),X(Oe,null,En(s.otherArtworks,a=>(Q(),X("div",{key:a.id,class:"other-artwork-image-container",onClick:c=>i.refreshPage(a.id)},[g("img",{src:a.imageUrl,class:"other-artwork-image slider-element",draggable:"false"},null,8,ex)],8,ZO))),128))])])])])}const nx=ot($O,[["render",tx],["__scopeId","data-v-2b8dd15f"]]),rx="/artharbor/assets/1-63c9cfef.jpg";const sx={components:{FrontHeader:qh},data(){return{pageTitle:"About Us",pageDescription:"A Global Tapestry of Artistic Expression",aboutUsImageData:[{title:"Our Vision: Uniting the Global Canvas",description:"Mosaic Harbor was born from the vision of creating a space where artists of all backgrounds and skill levels could converge, collaborate, and showcase their unique voices. We envision a world where the global canvas is a mosaic of diverse perspectives, where every stroke contributes to a rich narrative of shared humanity.",imageUrl:"../src/assets/images/about-us/1.jpg"},{title:"A Digital Atelier: Nurturing Artistic Journeys",description:"Think of Mosaic Harbor as your virtual atelier, a space where you can explore, experiment, and evolve. Whether you're a seasoned artist seeking a new audience or an emerging talent looking for guidance, our platform is designed to nurture your artistic journey. Here, creativity is not just encouraged; it's celebrated.",imageUrl:"../src/assets/images/about-us/2.jpg"},{title:"Community-Centric: Where Artists Thrive Together",description:"At the heart of Mosaic Harbor is a vibrant and supportive community. Connect with fellow artists, exchange ideas, and collaborate on projects that transcend borders. Our platform is more than a gallery; it's a dynamic ecosystem where artists inspire and uplift each other, fostering a sense of belonging in the ever-expanding realm of creativity.",imageUrl:"../src/assets/images/about-us/3.jpg"},{title:"Inclusivity and Diversity: Every Artist, Every Style",description:"We pride ourselves on being an inclusive space that embraces the richness of artistic diversity. Whether you wield a brush, capture moments through a lens, or express yourself through digital mediums, Mosaic Harbor is a stage for every artist. Our commitment to diversity ensures that every style, genre, and form of expression finds its place in our ever-growing gallery.",imageUrl:"../src/assets/images/about-us/4.jpg"},{title:"Empowering the Artist: Tools for Success",description:"We understand the challenges artists face, and that's why Mosaic Harbor goes beyond being a showcase; it's a toolkit for success. Access resources, participate in workshops, and engage with experts to elevate your craft. Our platform empowers artists to not only share their work but to thrive in their artistic endeavors.",imageUrl:"../src/assets/images/about-us/5.jpg"}]}},methods:{aboutUsImageSelection(t){let e=document.getElementsByClassName("image-placeholder");for(let n=0;n<e.length;n++)e[n].classList.remove("active");e[t-1].classList.add("active"),document.getElementById("about_us_image").src=this.aboutUsImageData[t-1].imageUrl,document.getElementById("about_us_image_title").innerHTML=this.aboutUsImageData[t-1].title,document.getElementById("about_us_image_description").innerHTML=this.aboutUsImageData[t-1].description}}},Hv=t=>(zt("data-v-4b1e9284"),t=t(),Kt(),t),ix={class:"about-us-content content-smaller"},ox=Fi('<p class="about-us-paragraph" data-v-4b1e9284>Welcome to Mosaic Harbor, a dynamic digital haven where the rich tapestry of creativity is woven by artists from every corner of the world. At Mosaic Harbor, we believe that art knows no bounds, and the power of creative expression transcends cultural, geographic, and artistic barriers.</p><div class="row about-us-row-section" data-v-4b1e9284><img id="about_us_image" class="about-us-image" src="'+rx+'" data-v-4b1e9284><div class="about-us-text-container" data-v-4b1e9284><h2 class="about-us-title" id="about_us_image_title" data-v-4b1e9284>Our Vision: Uniting the Global Canvas</h2><p id="about_us_image_description" data-v-4b1e9284>Mosaic Harbor was born from the vision of creating a space where artists of all backgrounds and skill levels could converge, collaborate, and showcase their unique voices. We envision a world where the global canvas is a mosaic of diverse perspectives, where every stroke contributes to a rich narrative of shared humanity.</p></div></div>',2),ax={class:"row image-row"},cx=["onClick"],lx=Hv(()=>g("h2",{class:"about-us-title"},"Join Us on the Journey",-1)),ux=Hv(()=>g("p",{class:"about-us-paragraph"},"Whether you're here to explore, share, or simply immerse yourself in the world of art, Mosaic Harbor invites you to join us on this exhilarating journey. Every click, every upload, and every connection made contributes to the vibrant mosaic we're creating together. Welcome to Mosaic Harbor, where your artistic odyssey begins and where every artist finds a home.",-1));function hx(t,e,n,r,s,i){const o=pt("FrontHeader");return Q(),X("main",null,[oe(o,{pageTitle:s.pageTitle,pageDescription:s.pageDescription},null,8,["pageTitle","pageDescription"]),g("div",ix,[ox,g("div",ax,[(Q(),X(Oe,null,En(5,a=>g("div",{class:$n(["image-placeholder",a==1?"active":""]),style:ds({backgroundImage:`url(../src/assets/images/about-us/${a}.jpg)`}),onClick:c=>i.aboutUsImageSelection(a)},null,14,cx)),64))]),lx,ux])])}const dx=ot(sx,[["render",hx],["__scopeId","data-v-4b1e9284"]]);const fx={components:{FrontHeader:qh},data(){return{pageTitle:"Art Chronicles",pageDescription:"Latest updates on art trends, exhibitions, and artists",news:[]}},mounted(){let t=this.$route.query.sort||"newest";this.getArticlesData(t),this.activateSortOptionElement(t)},methods:{selectSortOption(t){this.activateSortOptionElement(t),this.$router.push({query:{sort:t,order:"desc"}}),this.getArticlesData(t)},async getArticlesData(t){this.news=[];let e={};t=="newest"?(e.sort="createdTimestamp",e.order="desc"):t=="relevant"&&(e.sort="views",e.order="desc"),(await bn(Nr(Ht(At,"news"),vy(e.sort,e.order)))).forEach(r=>{let s=r.data(),i=this.getParagraphsData(r);s.paragraphs=i,this.news.push(s)})},async getParagraphsData(t){let e=[];return(await bn(Ht(t.ref,"paragraphs"))).forEach(r=>{e.push(r.data())}),e},activateSortOptionElement(t){let e=document.getElementsByClassName("sort-section")[0].children;for(let n=0;n<e.length;n++)e[n].classList.remove("active");document.getElementById(`sort_${t}`).classList.add("active")}}},px=t=>(zt("data-v-68ec4fb4"),t=t(),Kt(),t),mx={class:"news-content content-smaller"},gx={class:"filter-container row"},_x=Fi('<div class="filter-section" data-v-68ec4fb4><label class="filter-label" data-v-68ec4fb4>Filter by:</label><select class="filter-selection" data-v-68ec4fb4><option class="filter-option" data-v-68ec4fb4>NONE</option><option class="filter-option" data-v-68ec4fb4>Tutorials</option><option class="filter-option" data-v-68ec4fb4>Technology</option></select></div>',1),yx={class:"sort-section"},vx=px(()=>g("span",null,"|",-1)),wx={class:"news-section"},Ex={class:"news-article row"},Ix=["src"],Tx={class:"news-text-container"},Ax={class:"news-title"},bx={class:"news-short"},Rx={class:"news-author"};function Sx(t,e,n,r,s,i){const o=pt("FrontHeader"),a=pt("RouterLink");return Q(),X("main",null,[oe(o,{pageTitle:s.pageTitle,pageDescription:s.pageDescription},null,8,["pageTitle","pageDescription"]),g("div",mx,[g("div",gx,[_x,g("div",yx,[g("span",{id:"sort_relevant",class:"sort-option",onClick:e[0]||(e[0]=c=>i.selectSortOption("relevant"))},"MOST RELEVANT"),vx,g("span",{id:"sort_newest",class:"sort-option active",onClick:e[1]||(e[1]=c=>i.selectSortOption("newest"))},"NEWEST")])]),g("div",wx,[(Q(!0),X(Oe,null,En(s.news,c=>(Q(),Tm(a,{to:`/news/${c.id}`},{default:xt(()=>[g("div",Ex,[g("img",{src:c.imageUrl,class:"news-image"},null,8,Ix),g("div",Tx,[g("h2",Ax,ce(c.title),1),g("p",bx,ce(c.description),1),g("div",Rx,[Le("Published by: "),g("span",null,ce(c.author),1)])])])]),_:2},1032,["to"]))),256))])])])}const Px=ot(fx,[["render",Sx],["__scopeId","data-v-68ec4fb4"]]);const Cx={data(){return{articleId:this.$route.params.id,article:{}}},mounted(){this.getArticleData(this.articleId)},methods:{selectSortOption(t){let e=document.getElementsByClassName("sort-section")[0].children;for(let n=0;n<e.length;n++)e[n].classList.remove("active");document.getElementById(`sort_${t}`).classList.add("active")},async getArticleData(t){const e=await bn(Nr(Ht(At,"news"),ro("id","==",parseInt(t))));for(const n of e.docs){let r=n.data();const s=await this.getParagraphsData(n);r.paragraphs=s,this.article=r}},async getParagraphsData(t){let e=[];return(await bn(Ht(t.ref,"paragraphs"))).forEach(r=>{e.push(r.data())}),e}}},kx=t=>(zt("data-v-43c58e7a"),t=t(),Kt(),t),Dx={class:"article-content content-smallest"},Nx=["src"],Ox={class:"article-subtitle"},xx=kx(()=>g("hr",null,null,-1)),Vx={class:"article-description"};function Lx(t,e,n,r,s,i){return Q(),X("main",null,[g("div",Dx,[g("img",{class:"article-image",src:s.article.imageUrl},null,8,Nx),g("p",Ox,ce(s.article.subtitle),1),xx,g("h1",null,ce(s.article.title),1),g("p",Vx,ce(s.article.description),1),(Q(!0),X(Oe,null,En(s.article.paragraphs,o=>(Q(),X("div",null,[g("h2",null,ce(o.title),1),g("p",null,ce(o.text),1)]))),256))])])}const Mx=ot(Cx,[["render",Lx],["__scopeId","data-v-43c58e7a"]]);var Ux=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wv={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(Ux,function(e){var n=function(o){return new n.lib.init(o)},r="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:r,constructor:n,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||n.defaults.text,this.options.node=o.node||n.defaults.node,this.options.duration=o.duration===0?0:o.duration||n.defaults.duration,this.options.selector=o.selector||n.defaults.selector,this.options.callback=o.callback||n.defaults.callback,this.options.destination=o.destination||n.defaults.destination,this.options.newWindow=o.newWindow||n.defaults.newWindow,this.options.close=o.close||n.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=o.positionLeft||n.defaults.positionLeft,this.options.position=o.position||n.defaults.position,this.options.backgroundColor=o.backgroundColor||n.defaults.backgroundColor,this.options.avatar=o.avatar||n.defaults.avatar,this.options.className=o.className||n.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?n.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||n.defaults.onClick,this.options.offset=o.offset||n.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||n.defaults.ariaLive,this.options.style=o.style||n.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var a in this.options.style)o.style[a]=this.options.style[a];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var c=document.createElement("img");c.src=this.options.avatar,c.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(c):o.insertAdjacentElement("afterbegin",c)}if(this.options.close===!0){var l=document.createElement("button");l.type="button",l.setAttribute("aria-label","Close"),l.className="toast-close",l.innerHTML="&#10006;",l.addEventListener("click",(function(w){w.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var u=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&u>360?o.insertAdjacentElement("afterbegin",l):o.appendChild(l)}if(this.options.stopOnFocus&&this.options.duration>0){var h=this;o.addEventListener("mouseover",function(w){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){h.removeElement(o)},h.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",(function(w){w.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",(function(w){w.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var d=s("x",this.options),p=s("y",this.options),y=this.options.position=="left"?d:"-"+d,A=this.options.gravity=="toastify-top"?p:"-"+p;o.style.transform="translate("+y+","+A+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var a=n.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,a),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),n.reposition()}).bind(this),400)}},n.reposition=function(){for(var o={top:15,bottom:15},a={top:15,bottom:15},c={top:15,bottom:15},l=document.getElementsByClassName("toastify"),u,h=0;h<l.length;h++){i(l[h],"toastify-top")===!0?u="toastify-top":u="toastify-bottom";var d=l[h].offsetHeight;u=u.substr(9,u.length-1);var p=15,y=window.innerWidth>0?window.innerWidth:screen.width;y<=360?(l[h].style[u]=c[u]+"px",c[u]+=d+p):i(l[h],"toastify-left")===!0?(l[h].style[u]=o[u]+"px",o[u]+=d+p):(l[h].style[u]=a[u]+"px",a[u]+=d+p)}return this};function s(o,a){return a.offset[o]?isNaN(a.offset[o])?a.offset[o]:a.offset[o]+"px":"0px"}function i(o,a){return!o||typeof a!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(a)>-1)}return n.lib.init.prototype=n.lib,n})})(Wv);var $x=Wv.exports;const zv=Fx($x);const Bx={data(){return{show:!1,image:null,title:"",description:"",price:null,firebaseId:Oa(),file:"",imageUrl:""}},methods:{open(){this.setModalView(),this.show=!0},close(){this.unsetModalView(),this.show=!1},submitForm(){KN(this.file).then(t=>{console.log(t);const e={imageUrl:t,title:this.title,description:this.description,price:this.price,authorId:this.firebaseId,createdTimestamp:Math.floor(Date.now()/1e3),createdDate:this.getCurrentDate(),views:0};GN(e).then(()=>{this.image=null,this.title="",this.description="",zv({text:"Art posted successfully!",className:"info",gravity:"bottom",position:"right",style:{background:"#ccc",color:"black"}}).showToast(),this.close(),this.$emit("refresh-art-data")})})},handleFileInput(t){t.target.files.length>0&&(this.file=t.target.files[0],this.imageUrl=URL.createObjectURL(this.file)),console.log(this.file)},openFileInput(){this.$refs.fileInput.click()},getCurrentDate(){const t=new Date,e={month:"short",day:"2-digit",year:"numeric"};return t.toLocaleDateString("en-US",e)}}},Hh=t=>(zt("data-v-fe5ea8e4"),t=t(),Kt(),t),jx={key:0,class:"modal-view"},qx={class:"upload-modal-content"},Hx=Hh(()=>g("h2",null,"Upload art",-1)),Wx={class:"row"},zx={class:"row not-center"},Kx={class:"column"},Gx={key:0,class:"file-button",for:"image"},Qx=["src"],Yx={class:"column upload-modal-text-container"},Jx={class:"row not-center price-container"},Xx=Hh(()=>g("span",null,"€",-1)),Zx=Hh(()=>g("button",{class:"upload-modal-button",type:"submit"},"Upload",-1));function eV(t,e,n,r,s,i){return s.show?(Q(),X("div",jx,[g("div",qx,[g("span",{class:"modal-close",onClick:e[0]||(e[0]=o=>i.close())},"×"),Hx,g("div",Wx,[g("form",{class:"column",onSubmit:e[6]||(e[6]=Pm((...o)=>i.submitForm&&i.submitForm(...o),["prevent"]))},[g("div",zx,[g("div",Kx,[g("input",{class:"file-input",ref:"fileInput",type:"file",id:"image",accept:"image/*",onChange:e[1]||(e[1]=o=>i.handleFileInput(o)),required:""},null,544),s.file?Ut("",!0):(Q(),X("label",Gx,"+")),s.file?(Q(),X("img",{key:1,src:s.imageUrl,for:"image",onClick:e[2]||(e[2]=o=>i.openFileInput()),class:"file-image"},null,8,Qx)):Ut("",!0)]),g("div",Yx,[wr(g("input",{type:"text",class:"title-input",placeholder:"Title...","onUpdate:modelValue":e[3]||(e[3]=o=>s.title=o),required:""},null,512),[[Ir,s.title]]),wr(g("textarea",{class:"description-input",placeholder:"Description...","onUpdate:modelValue":e[4]||(e[4]=o=>s.description=o),required:""},null,512),[[Ir,s.description]]),g("div",Jx,[wr(g("input",{type:"number",class:"price-input",placeholder:"Price...","onUpdate:modelValue":e[5]||(e[5]=o=>s.price=o),required:""},null,512),[[Ir,s.price]]),Xx])])]),Zx],32)])])])):Ut("",!0)}const tV=ot(Bx,[["render",eV],["__scopeId","data-v-fe5ea8e4"]]);const nV={props:{id:{type:String,required:!0},imageUrl:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},price:{type:Number}},data(){return{show:!1,firebaseId:Oa(),editedTitle:"",editedDescription:"",editedPrice:""}},watch:{title(t){this.editedTitle=t,console.log(this.editedTitle)},description(t){this.editedDescription=t,console.log(this.editedDescription)},price(t){this.editedPrice=t,console.log(this.editedPrice)}},methods:{open(){this.setModalView(),this.show=!0},close(){this.unsetModalView(),this.show=!1},submitForm(){const t={id:this.id,title:this.editedTitle,description:this.editedDescription,price:this.editedPrice};QN(t).then(()=>{zv({text:"Art edited successfully!",className:"info",gravity:"bottom",position:"right",style:{background:"#ccc",color:"black"}}).showToast(),this.close(),this.$emit("refresh-art-data")})},updateTitle(t){this.editedTitle=t},updateDescription(t){this.editedDescription=t},updatePrice(t){this.editedPrice=t}}},Wh=t=>(zt("data-v-b15ca10b"),t=t(),Kt(),t),rV={key:0,class:"modal-view"},sV={class:"upload-modal-content"},iV=Wh(()=>g("h2",null,"Edit art",-1)),oV={class:"row"},aV={class:"row not-center"},cV={class:"column"},lV=["src"],uV={class:"column upload-modal-text-container"},hV={class:"row not-center price-container"},dV=Wh(()=>g("span",null,"€",-1)),fV=Wh(()=>g("button",{class:"upload-modal-button",type:"submit"},"Submit",-1));function pV(t,e,n,r,s,i){return s.show?(Q(),X("div",rV,[g("div",sV,[g("span",{class:"modal-close",onClick:e[0]||(e[0]=o=>i.close())},"×"),iV,g("div",oV,[g("form",{class:"column",onSubmit:e[4]||(e[4]=Pm((...o)=>i.submitForm&&i.submitForm(...o),["prevent"]))},[g("div",aV,[g("div",cV,[g("img",{src:n.imageUrl,for:"image",class:"file-image"},null,8,lV)]),g("div",uV,[wr(g("input",{type:"text",class:"title-input",placeholder:"Title...","onUpdate:modelValue":e[1]||(e[1]=o=>s.editedTitle=o),required:""},null,512),[[Ir,s.editedTitle]]),wr(g("textarea",{class:"description-input",placeholder:"Description...","onUpdate:modelValue":e[2]||(e[2]=o=>s.editedDescription=o),required:""},null,512),[[Ir,s.editedDescription]]),g("div",hV,[wr(g("input",{type:"number",class:"price-input",placeholder:"Price...","onUpdate:modelValue":e[3]||(e[3]=o=>s.editedPrice=o),required:""},null,512),[[Ir,s.editedPrice]]),dV])])]),fV],32)])])])):Ut("",!0)}const mV=ot(nV,[["render",pV],["__scopeId","data-v-b15ca10b"]]),Kv="/artharbor/assets/profile-7e9c7fe9.svg",gV="/artharbor/assets/edit-e2a4586a.svg";const _V={components:{UploadArtModal:tV,EditArtModal:mV},data(){return{firebaseId:Oa(),user:"",arts:"",userName:"",editImageUrl:"",editTitle:"",editDescription:"",editPrice:null,editId:"",openedDropdownIndex:{index:null,firstClick:!0}}},mounted(){this.getUserData(),this.getArtData()},methods:{toggleDropdown(t){this.openedDropdownIndex.index==null&&(document.getElementById(`dropdown_options${t}`).style.display="block",this.openedDropdownIndex.index=t,this.openedDropdownIndex.firstClick=!0,document.addEventListener("click",this.closeDropdown))},closeDropdown(){this.openedDropdownIndex.firstClick?this.openedDropdownIndex.firstClick=!1:(document.getElementById(`dropdown_options${this.openedDropdownIndex.index}`).style.display="none",this.openedDropdownIndex.index=null,this.openedDropdownIndex.firstClick=!0,document.removeEventListener("click",this.closeDropdown))},addArt(){this.$refs.uploadArtModal.open()},editArt(t){this.editImageUrl=t.imageUrl,this.editTitle=t.title,this.editDescription=t.description,this.editPrice=t.price||null,this.editId=t.id,this.$refs.editArtModal.open()},deleteArt(t){rN(t).then(()=>this.getArtData())},getUserData(){Ic(this.firebaseId).then(t=>{this.user=t,this.userName=t.name}).catch(t=>{console.log(t)})},getArtData(){jv(this.firebaseId).then(t=>{this.arts=t,console.log(this.arts)}).catch(t=>{console.log(t)})},toggleEditName(){document.getElementById("profile_name_text").classList.toggle("hidden"),document.getElementById("profile_name_edit_button").classList.toggle("hidden"),document.getElementById("profile_name_edit").classList.toggle("hidden")},showSubmitNameButton(){this.user.name!=this.userName?(document.getElementById("profile_name_cancel").classList.add("hidden"),document.getElementById("profile_name_submit").classList.remove("hidden")):(document.getElementById("profile_name_submit").classList.add("hidden"),document.getElementById("profile_name_cancel").classList.remove("hidden"))},hideSubmitNameButton(){document.getElementById("profile_name_submit").classList.add("hidden"),document.getElementById("profile_name_cancel").classList.remove("hidden")},submitName(){let t={name:this.userName};nN(this.user.id,t).then(()=>{this.toggleEditName(),this.getUserData(),this.hideSubmitNameButton()}).catch(e=>{alert("There was an error submitting your name")})}}},zh=t=>(zt("data-v-18fd5734"),t=t(),Kt(),t),yV={class:"profile-content content-smaller"},vV={class:"column center"},wV=zh(()=>g("div",{class:"profile-container"},[g("img",{class:"profile-icon",src:Kv})],-1)),EV={class:"profile-name-container"},IV={id:"profile_name_text"},TV={id:"profile_name_edit",class:"hidden"},AV={class:"profile-email"},bV={class:"profile-arts"},RV=["src"],SV={class:"profile-art-text-container column"},PV={class:"profile-art-title"},CV={class:"profile-art-description"},kV={class:"row profile-art-last-row"},DV={key:0,class:"profile-art-price row"},NV=zh(()=>g("span",{class:"label"},"Price: ",-1)),OV={class:"value"},xV={class:"profile-art-date"},VV=zh(()=>g("span",{class:"label"},"Created: ",-1)),LV={class:"profile-dropdown-container row v-center"},MV=["id","onClick"],UV=["id"],FV=["onClick"],$V=["onClick"],BV={key:0,class:"profile-arts-empty"};function jV(t,e,n,r,s,i){const o=pt("RouterLink"),a=pt("UploadArtModal"),c=pt("EditArtModal");return Q(),X("main",null,[g("div",yV,[g("div",vV,[wV,g("h1",EV,[g("span",IV,ce(s.userName||"Artist"),1),g("img",{id:"profile_name_edit_button",onClick:e[0]||(e[0]=l=>i.toggleEditName()),src:gV}),g("div",TV,[wr(g("input",{id:"profile_name_input","onUpdate:modelValue":e[1]||(e[1]=l=>s.userName=l),onInput:e[2]||(e[2]=l=>i.showSubmitNameButton()),placeholder:"Enter name..."},null,544),[[Ir,s.userName]]),g("span",{id:"profile_name_submit",class:"hidden",onClick:e[3]||(e[3]=l=>i.submitName())},"✔"),g("span",{id:"profile_name_cancel",onClick:e[4]||(e[4]=l=>i.toggleEditName())},"×")])]),g("div",AV,ce(s.user.email),1),g("div",{class:"profile-button",onClick:e[5]||(e[5]=l=>i.addArt())},"Add an art piece")]),g("div",bV,[(Q(!0),X(Oe,null,En(s.arts,(l,u)=>(Q(),X("div",{class:"profile-art-container row not-center",key:u},[oe(o,{class:"row not-center profile-art-clickable-area",to:`/art/${l.id}`},{default:xt(()=>[g("img",{class:"profile-art-image",src:l.imageUrl},null,8,RV),g("div",SV,[g("h2",PV,ce(l.title),1),g("p",CV,ce(l.description),1),g("div",kV,[l.price?(Q(),X("div",DV,[NV,g("span",OV,ce(l.price)+"€",1)])):Ut("",!0),g("p",xV,[VV,g("span",null,ce(l.createdDate),1)])])])]),_:2},1032,["to"]),g("div",LV,[g("div",{class:"profile-dropdown-icon",id:"dropdown_trigger"+u,onClick:h=>i.toggleDropdown(u)},[g("div",{class:"dropdown-options",id:"dropdown_options"+u},[g("div",{class:"edit",onClick:h=>i.editArt(l)},"Edit",8,FV),g("div",{class:"delete",onClick:h=>i.deleteArt(l.id)},"Delete",8,$V)],8,UV)],8,MV)])]))),128)),s.arts.length==0?(Q(),X("div",BV,"You don't have any uploaded art yet.")):Ut("",!0)])]),oe(a,{ref:"uploadArtModal",onRefreshArtData:e[6]||(e[6]=l=>i.getArtData())},null,512),oe(c,{ref:"editArtModal",imageUrl:s.editImageUrl,title:s.editTitle,description:s.editDescription,price:s.editPrice,id:s.editId,onRefreshArtData:e[7]||(e[7]=l=>i.getArtData())},null,8,["imageUrl","title","description","price","id"])])}const qV=ot(_V,[["render",jV],["__scopeId","data-v-18fd5734"]]);const HV={data(){return{firebaseId:this.$route.params.id,user:"",arts:""}},mounted(){this.getUserData(),this.getArtData()},methods:{getUserData(){Ic(this.firebaseId).then(t=>{this.user=t}).catch(t=>{console.log(t)})},getArtData(){jv(this.firebaseId).then(t=>{this.arts=t,console.log(this.arts)}).catch(t=>{console.log(t)})}}},Kh=t=>(zt("data-v-429b8e6e"),t=t(),Kt(),t),WV={class:"profile-content content-smaller"},zV={class:"column center"},KV=Kh(()=>g("div",{class:"profile-container"},[g("img",{class:"profile-icon",src:Kv})],-1)),GV={class:"profile-name-container"},QV={class:"profile-email"},YV={class:"profile-arts"},JV=["src"],XV={class:"profile-art-text-container column"},ZV={class:"profile-art-title"},eL={class:"profile-art-description"},tL={class:"row profile-art-last-row"},nL={key:0,class:"profile-art-price row"},rL=Kh(()=>g("span",{class:"label"},"Price: ",-1)),sL={class:"value"},iL={class:"profile-art-date"},oL=Kh(()=>g("span",{class:"label"},"Created: ",-1)),aL={key:0,class:"profile-arts-empty"};function cL(t,e,n,r,s,i){const o=pt("RouterLink");return Q(),X("main",null,[g("div",WV,[g("div",zV,[KV,g("h1",GV,ce(s.user.name||s.user.username),1),g("div",QV,ce(s.user.email),1)]),g("div",YV,[(Q(!0),X(Oe,null,En(s.arts,(a,c)=>(Q(),X("div",{class:"profile-art-container row not-center",key:c},[oe(o,{class:"row not-center profile-art-clickable-area",to:`/art/${a.id}`},{default:xt(()=>[g("img",{class:"profile-art-image",src:a.imageUrl},null,8,JV),g("div",XV,[g("h2",ZV,ce(a.title),1),g("p",eL,ce(a.description),1),g("div",tL,[a.price?(Q(),X("div",nL,[rL,g("span",sL,ce(a.price)+"€",1)])):Ut("",!0),g("p",iL,[oL,g("span",null,ce(a.createdDate),1)])])])]),_:2},1032,["to"])]))),128)),s.arts.length==0?(Q(),X("div",aL,"This artist doesn't have any uploaded art yet.")):Ut("",!0)])])])}const lL=ot(HV,[["render",cL],["__scopeId","data-v-429b8e6e"]]),Gv=pT({history:DI("/artharbor/"),routes:[{path:"/",name:"home",meta:{title:"Art Harbor"},component:yO},{path:"/art",name:"art",meta:{title:"Explore Art"},component:FO},{path:"/art/:id",name:"artwork",meta:{title:"Art piece"},component:nx},{path:"/news",name:"news",meta:{title:"News"},component:Px},{path:"/news/:id",name:"article",meta:{title:"News article"},component:Mx},{path:"/about",name:"about",meta:{title:"About us"},component:dx},{path:"/profile",name:"profile",meta:{title:"My Profile",requiresAuth:!0},component:qV},{path:"/artist/:id",name:"artist",meta:{title:"Artist's profile"},component:lL}]}),uL="Art Harbor";Gv.beforeEach((t,e,n)=>{document.title=t.meta.title||uL;const r=yc().currentUser;t.matched.some(i=>i.meta.requiresAuth)&&r==null?n("/"):n()});const hL={methods:{setModalView(){document.body.style.overflow="hidden"},unsetModalView(){document.body.style.overflow=""}}},Gh=dI(zN);Gh.mixin(hL);Gh.use(Gv);Gh.mount("#app");
