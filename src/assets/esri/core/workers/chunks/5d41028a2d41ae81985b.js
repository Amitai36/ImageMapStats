"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7744],{2952:(e,t,i)=>{i.d(t,{c:()=>P});var r,a=i(41948),n=i(29624),s=i(77860),o=i(38912),h=i(62088),l=i(69752);!function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"}(r||(r={}));var c,d=i(66168),m=i(53368),u=i(67432),f=i(1580),g=i(14179),_=i(12552),T=i(9592);class p{constructor(e,t,i,r,a){this.target=e,this.added=t,this.removed=i,this.start=r,this.deleteCount=a}}const A=new l.c(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,(e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1}));function S(e){return e?e instanceof D?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function y(e){if(e?.length)return e[0]}function v(e,t,i,r){const a=Math.min(e.length-i,t.length-r);let n=0;for(;n<a&&e[i+n]===t[r+n];)n++;return n}function E(e,t,i,r){t&&t.forEach(((t,a,n)=>{e.push(t),E(e,i.call(r,t,a,n),i,r)}))}const b=new Set,C=new Set,M=new Set,w=new Map;let k=0,D=c=class extends s.c.EventedAccessor{static isCollection(e){return null!=e&&e instanceof c}constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._updating=!1,this._timer=null,this._observable=new T.n,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:k++})}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof c?{items:e}:e:{}}destroy(){this._removeAllRaw()}*[Symbol.iterator](){yield*this.items}get items(){return(0,u.am)(this._observable),this._items}set items(e){this._emitBeforeChanges(r.ADD)||(this._splice(0,this.length,S(e)),this._emitAfterChanges(r.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,i={removed:!1,callback:t};return e.push(i),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),(0,o.uU)((()=>{i.removed=!0,e.splice(e.indexOf(i),1)}))}return this._emitter.on(e,t)}once(e,t){const i="deref"in t?()=>t.deref():()=>t,r=this.on(e,(e=>{i()?.call(null,e),r.remove()}));return r}add(e,t){if((0,u.am)(this._observable),this._emitBeforeChanges(r.ADD))return this;const i=this.getNextIndex(t??null);return this._splice(i,0,[e]),this._emitAfterChanges(r.ADD),this}addMany(e,t=this._items.length){if((0,u.am)(this._observable),!e?.length)return this;if(this._emitBeforeChanges(r.ADD))return this;const i=this.getNextIndex(t);return this._splice(i,0,S(e)),this._emitAfterChanges(r.ADD),this}at(e){if((0,u.am)(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if((0,u.am)(this._observable),!this.length||this._emitBeforeChanges(r.REMOVE))return[];const e=this._removeAllRaw();return this._emitAfterChanges(r.REMOVE),e}_removeAllRaw(){return 0===this.length?[]:this._splice(0,this.length)||[]}clone(){return(0,u.am)(this._observable),this._createNewInstance({items:this._items.map(h.ct)})}concat(...e){(0,u.am)(this._observable);const t=e.map(S);return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if((0,u.am)(this._observable),!this.length||this._emitBeforeChanges(r.REMOVE))return;const i=this._splice(0,this.length),a=i.length;for(let r=0;r<a;r++)e.call(t,i[r],r,i);this._emitAfterChanges(r.REMOVE)}every(e,t){return(0,u.am)(this._observable),this._items.every(e,t)}filter(e,t){let i;return(0,u.am)(this._observable),i=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:i})}find(e,t){return(0,u.am)(this._observable),this._items.find(e,t)}findIndex(e,t){return(0,u.am)(this._observable),this._items.findIndex(e,t)}flatten(e,t){(0,u.am)(this._observable);const i=[];return E(i,this,e,t),new c(i)}forEach(e,t){return(0,u.am)(this._observable),this._items.forEach(e,t)}getItemAt(e){return(0,u.am)(this._observable),this._items[e]}getNextIndex(e){(0,u.am)(this._observable);const t=this.length;return(e=e??t)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return(0,u.am)(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return(0,u.am)(this._observable),this._items.indexOf(e,t)}join(e=","){return(0,u.am)(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return(0,u.am)(this._observable),this._items.lastIndexOf(e,t)}map(e,t){(0,u.am)(this._observable);const i=this._items.map(e,t);return new c({items:i})}reorder(e,t=this.length-1){(0,u.am)(this._observable);const i=this.indexOf(e);if(-1!==i){if(t<0?t=0:t>=this.length&&(t=this.length-1),i!==t){if(this._emitBeforeChanges(r.MOVE))return e;this._splice(i,1),this._splice(t,0,[e]),this._emitAfterChanges(r.MOVE)}return e}}pop(){if((0,u.am)(this._observable),!this.length||this._emitBeforeChanges(r.REMOVE))return;const e=y(this._splice(this.length-1,1));return this._emitAfterChanges(r.REMOVE),e}push(...e){return(0,u.am)(this._observable),this._emitBeforeChanges(r.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(r.ADD)),this.length}reduce(e,t){(0,u.am)(this._observable);const i=this._items;return 2===arguments.length?i.reduce(e,t):i.reduce(e)}reduceRight(e,t){(0,u.am)(this._observable);const i=this._items;return 2===arguments.length?i.reduceRight(e,t):i.reduceRight(e)}remove(e){return(0,u.am)(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if((0,u.am)(this._observable),e<0||e>=this.length||this._emitBeforeChanges(r.REMOVE))return;const t=y(this._splice(e,1));return this._emitAfterChanges(r.REMOVE),t}removeMany(e){if((0,u.am)(this._observable),!e?.length||this._emitBeforeChanges(r.REMOVE))return[];const t=e instanceof c?e.toArray():e,i=this._items,a=[],n=t.length;for(let e=0;e<n;e++){const r=t[e],n=i.indexOf(r);if(n>-1){const r=1+v(t,i,e+1,n+1),s=this._splice(n,r);s&&s.length>0&&a.push.apply(a,s),e+=r-1}}return this._emitAfterChanges(r.REMOVE),a}reverse(){if((0,u.am)(this._observable),this._emitBeforeChanges(r.MOVE))return this;const e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(r.MOVE),this}shift(){if((0,u.am)(this._observable),!this.length||this._emitBeforeChanges(r.REMOVE))return;const e=y(this._splice(0,1));return this._emitAfterChanges(r.REMOVE),e}slice(e=0,t=this.length){return(0,u.am)(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return(0,u.am)(this._observable),this._items.some(e,t)}sort(e){if((0,u.am)(this._observable),!this.length||this._emitBeforeChanges(r.MOVE))return this;const t=this._splice(0,this.length);return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(r.MOVE),this}splice(e,t,...i){(0,u.am)(this._observable);const a=(t?r.REMOVE:0)|(i.length?r.ADD:0);if(this._emitBeforeChanges(a))return[];const n=this._splice(e,t,i)||[];return this._emitAfterChanges(a),n}toArray(){return(0,u.am)(this._observable),this._items.slice()}toJSON(){return(0,u.am)(this._observable),this.toArray()}toLocaleString(){return(0,u.am)(this._observable),this._items.toLocaleString()}toString(){return(0,u.am)(this._observable),this._items.toString()}unshift(...e){return(0,u.am)(this._observable),!e.length||this._emitBeforeChanges(r.ADD)||(this._splice(0,0,e),this._emitAfterChanges(r.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,i){const r=this._items,a=this.itemType;let n,s;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._updating=!0,this._timer=(0,d.Ow)((()=>this._dispatchChange()))),e<0&&(e+=this.length),t){if(s=r.splice(e,t),this.hasEventListener("before-remove")){const t=A.acquire();t.target=this,t.cancellable=!0;for(let i=0,a=s.length;i<a;i++)n=s[i],t.reset(n),this.emit("before-remove",t),t.defaultPrevented&&(s.splice(i,1),r.splice(e,0,n),e+=1,i-=1,a-=1);A.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=A.acquire();e.target=this,e.cancellable=!1;const t=s.length;for(let i=0;i<t;i++)e.reset(s[i]),this.emit("after-remove",e);A.release(e)}}if(i?.length){if(a){const e=[];for(const t of i){const i=a.ensureType(t);null==i&&null!=t||e.push(i)}i=e}const t=this.hasEventListener("before-add"),n=this.hasEventListener("after-add"),s=e===this.length;if(t||n){const a=A.acquire();a.target=this,a.cancellable=!0;const o=A.acquire();o.target=this,o.cancellable=!1;for(const h of i)t?(a.reset(h),this.emit("before-add",a),a.defaultPrevented||(s?r.push(h):r.splice(e++,0,h),this._set("length",r.length),n&&(o.reset(h),this.emit("after-add",o)))):(s?r.push(h):r.splice(e++,0,h),this._set("length",r.length),o.reset(h),this.emit("after-add",o));A.release(o),A.release(a)}else{if(s)for(const e of i)r.push(e);else r.splice(e,0,...i);this._set("length",r.length)}}if((i?.length||s?.length)&&this._notifyChangeEvent(i,s),this.hasEventListener("after-splice")){const r=new p(this,i,s,e,t);this.emit("after-splice",r)}return s}_emitBeforeChanges(e){let t=!1;if(this.hasEventListener("before-changes")){const i=A.acquire();i.target=this,i.cancellable=!0,i.type=e,this.emit("before-changes",i),t=i.defaultPrevented,A.release(i)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=A.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),A.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}get updating(){return this._updating}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),this._updating=!1,!this._notifications)return;const e=this._notifications;this._notifications=null;for(const t of e){const e=t.changes;b.clear(),C.clear(),M.clear();for(const{added:t,removed:i}of e){if(t)if(0===M.size&&0===C.size)for(const e of t)b.add(e);else for(const e of t)C.has(e)?(M.add(e),C.delete(e)):M.has(e)||b.add(e);if(i)if(0===M.size&&0===b.size)for(const e of i)C.add(e);else for(const e of i)b.has(e)?b.delete(e):(M.delete(e),C.add(e))}const i=n.c.acquire();b.forEach((e=>{i.push(e)}));const r=n.c.acquire();C.forEach((e=>{r.push(e)}));const a=this._items,s=t.items,o=n.c.acquire();if(M.forEach((e=>{s.indexOf(e)!==a.indexOf(e)&&o.push(e)})),t.listeners&&(i.length||r.length||o.length)){const e={target:this,added:i,removed:r,moved:o},a=t.listeners.length;for(let i=0;i<a;i++){const r=t.listeners[i];r.removed||r.callback.call(this,e)}}n.c.release(i),n.c.release(r),n.c.release(o)}b.clear(),C.clear(),M.clear()}};D.ofType=e=>{if(!e)return c;if(w.has(e))return w.get(e);let t=null;if("function"==typeof e)t=e.prototype.declaredClass;else if(e.base)t=e.base.prototype.declaredClass;else for(const i in e.typeMap){const r=e.typeMap[i].prototype.declaredClass;t?t+=` | ${r}`:t=r}let i=class extends c{};return(0,a._)([(0,g.E)({Type:e,ensureType:"function"==typeof e?(0,m.ey)(e):(0,m.S2)(e)})],i.prototype,"itemType",void 0),i=(0,a._)([(0,_.c)(`esri.core.Collection<${t}>`)],i),w.set(e,i),i},(0,a._)([(0,f.qq)()],D.prototype,"_updating",void 0),(0,a._)([(0,f.qq)()],D.prototype,"length",void 0),(0,a._)([(0,f.qq)()],D.prototype,"items",null),(0,a._)([(0,f.qq)({readOnly:!0})],D.prototype,"updating",null),D=c=(0,a._)([(0,_.c)("esri.core.Collection")],D);const P=D},77860:(e,t,i)=>{i.d(t,{c:()=>h});var r=i(41948),a=i(43780),n=i(38912),s=i(12552);class o{constructor(){this._emitter=new o.EventEmitter(this)}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}}!function(e){class t{constructor(e=null){this._target=e,this._listenersMap=null}clear(){this._listenersMap?.clear(),this._listenersMap=null}destroy(){this.clear()}emit(e,t){let i=this._listenersMap?.get(e);if(!i)return!1;const r=this._target||this;let a=!1;for(const e of i.slice()){const i="deref"in e?e.deref():e;i?i?.call(r,t):a=!0}return a&&(i=i.filter((e=>!("deref"in e)||null!=e.deref())),this._listenersMap.set(e,i)),i.length>0}on(e,t){if(Array.isArray(e)){const i=e.map((e=>this.on(e,t)));return(0,n.Ip)(i)}if(e.includes(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap??=new Map;const i=this._listenersMap.get(e)||[];return i.push(t),this._listenersMap.set(e,i),(0,n.uU)((()=>{const i=this._listenersMap?.get(e),r=i?.indexOf(t)??-1;r>=0&&i.splice(r,1)}))}once(e,t){const i=this.on(e,(e=>{i.remove();const r="deref"in t?t.deref():t;r?.call(null,e)}));return i}hasEventListener(e){const t=this._listenersMap?.get(e);return null!=t&&t.length>0}}e.EventEmitter=t,e.EventedMixin=e=>{let i=class extends e{constructor(){super(...arguments),this._emitter=new t}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}};return i=(0,r._)([(0,s.c)("esri.core.Evented")],i),i};let i=class extends a.c{constructor(){super(...arguments),this._emitter=new o.EventEmitter(this)}destroy(){this._emitter.clear()}emit(e,t){return this._emitter.emit(e,t)}on(e,t){return this._emitter.on(e,t)}once(e,t){return this._emitter.once(e,t)}hasEventListener(e){return this._emitter.hasEventListener(e)}};i=(0,r._)([(0,s.c)("esri.core.Evented")],i),e.EventedAccessor=i}(o||(o={}));const h=o},94804:(e,t,i)=>{i.d(t,{_:()=>d,g:()=>c});var r,a,n=i(41948),s=i(43780),o=i(10860),h=i(12552);(a=r||(r={}))[a.PENDING=0]="PENDING",a[a.RESOLVED=1]="RESOLVED",a[a.REJECTED=2]="REJECTED";class l{constructor(){this._resolver=(0,o.qG)(),this._status=r.PENDING,this._resolvingPromises=[],this._resolver.promise.then((()=>{this._status=r.RESOLVED,this._cleanUp()}),(()=>{this._status=r.REJECTED,this._cleanUp()})),this.promise=this._resolver.promise}destroy(){this._cleanUp()}addResolvingPromise(e){this._resolvingPromises.push(e),this._tryResolve()}isResolved(){return this._status===r.RESOLVED}isRejected(){return this._status===r.REJECTED}isFulfilled(){return this._status!==r.PENDING}abort(){this._resolver.reject((0,o.Uh)())}_cleanUp(){this._allPromise=null,this._resolvingPromises=null}_tryResolve(){if(this.isFulfilled())return;const e=(0,o.qG)(),t=[...this._resolvingPromises,e.promise],i=this._allPromise=Promise.all(t);i.then((()=>{this.isFulfilled()||this._allPromise!==i||this._resolver.resolve()}),(e=>{this.isFulfilled()||this._allPromise!==i||(0,o.mA)(e)||this._resolver.reject(e)})),e.resolve()}}const c=e=>{let t=class extends e{constructor(...e){super(...e),this._promiseProps=new l,this.addResolvingPromise(Promise.resolve())}destroy(){this._promiseProps.destroy()}isResolved(){return this._promiseProps.isResolved()}isRejected(){return this._promiseProps.isRejected()}isFulfilled(){return this._promiseProps.isFulfilled()}when(e,t){return this._promiseProps.promise.then((()=>this)).then(e,t)}catch(e){return this.when(null,e)}addResolvingPromise(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)}};return t=(0,n._)([(0,h.c)("esri.core.Promise")],t),t};let d=class extends(c(s.c)){};d=(0,n._)([(0,h.c)("esri.core.Promise")],d)},14179:(e,t,i)=>{function r(e){return(t,i)=>{t[i]=e}}i.d(t,{E:()=>r})},9592:(e,t,i)=>{i.d(t,{n:()=>a});var r=i(50504);class a extends r.g{notify(){const e=this._observers;if(e&&e.length>0){const t=e.slice();for(const e of t)e.onInvalidated(),e.onCommitted()}}}},40196:(e,t,i)=>{i.d(t,{Ar:()=>l,SO:()=>f,aG:()=>u,kH:()=>c,kn:()=>g});var r=i(41948),a=i(43780),n=i(70680),s=i(10860),o=i(1580),h=i(12552);function l(e,t,i){return(0,s.Dv)(e.map(((e,r)=>t.apply(i,[e,r]))))}async function c(e,t,i){return(await(0,s.Dv)(e.map(((e,r)=>t.apply(i,[e,r]))))).map((e=>e.value))}function d(e){return{ok:!0,value:e}}function m(e){return{ok:!1,error:e}}async function u(e){if(null==e)return{ok:!1,error:new Error("no promise provided")};try{return d(await e)}catch(e){return m(e)}}async function f(e){try{return d(await e)}catch(e){return(0,s.CE)(e),m(e)}}function g(e,t){return new _(e,t)}let _=class extends a.c{get value(){return null!=(e=this._result)&&!0===e.ok?e.value:null;var e}get error(){return null!=(e=this._result)&&!1===e.ok?e.error:null;var e}get finished(){return null!=this._result}constructor(e,t){super({}),this._result=null,this._abortHandle=null,this.abort=()=>{this._abortController=(0,n.K8)(this._abortController)},this.remove=this.abort,this._abortController=new AbortController;const{signal:i}=this._abortController;this.promise=e(i),this.promise.then((e=>{this._result=d(e),this._cleanup()}),(e=>{this._result=m(e),this._cleanup()})),this._abortHandle=(0,s.wD)(t,this.abort)}normalizeCtorArgs(){return{}}destroy(){this.abort()}_cleanup(){this._abortHandle=(0,n.oR)(this._abortHandle),this._abortController=null}};(0,r._)([(0,o.qq)()],_.prototype,"value",null),(0,r._)([(0,o.qq)()],_.prototype,"error",null),(0,r._)([(0,o.qq)()],_.prototype,"finished",null),(0,r._)([(0,o.qq)()],_.prototype,"promise",void 0),(0,r._)([(0,o.qq)()],_.prototype,"_result",void 0),_=(0,r._)([(0,h.c)("esri.core.asyncUtils.ReactiveTask")],_)},2016:(e,t,i)=>{i(47828),i(54052),i(57628),i(89960);var r=i(51544),a=i(2600),n=i(20744);async function s(e){if(null!=o.fetchBundleAsset)return o.fetchBundleAsset(e);const t=await(0,a.c)(e,{responseType:"text"});return JSON.parse(t.data)}const o={};var h,l=i(24832);(0,r.Ul)((h={pattern:"esri/",location:l.O},new class{constructor({base:e="",pattern:t,location:i=new URL(window.location.href)}){let r;r="string"==typeof i?e=>new URL(e,new URL(i,window.location.href)).href:i instanceof URL?e=>new URL(e,i).href:i,this.pattern="string"==typeof t?new RegExp(`^${t}`):t,this.getAssetUrl=r,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`)}fetchMessageBundle(e,t){return async function(e,t,i,a){const o=t.exec(i);if(!o)throw new n.c("esri-intl:invalid-bundle",`Bundle id "${i}" is not compatible with the pattern "${t}"`);const h=o[1]?`${o[1]}/`:"",l=o[2],c=(0,r.bw)(a),d=`${h}${l}.json`,m=c?`${h}${l}_${c}.json`:d;let u;try{u=await s(e(m))}catch(t){if(m===d)throw new n.c("intl:unknown-bundle",`Bundle "${i}" cannot be loaded`,{error:t});try{u=await s(e(d))}catch(e){throw new n.c("intl:unknown-bundle",`Bundle "${i}" cannot be loaded`,{error:e})}}return u}(this.getAssetUrl,this.matcher,e,t)}}(h)))},47828:(e,t,i)=>{i.d(t,{C8:()=>_,Cg:()=>S,Y9:()=>v,_m:()=>y});var r=i(14628),a=i(89960),n=i(28484);i(39452),n.Gw;const s={year:"numeric",month:"numeric",day:"numeric"},o={year:"numeric",month:"long",day:"numeric"},h={year:"numeric",month:"short",day:"numeric"},l={year:"numeric",month:"long",weekday:"long",day:"numeric"},c={hour:"numeric",minute:"numeric"},d={...c,second:"numeric"},m={hourCycle:"h23"},u={...c,...m},f={...d,...m},g={"short-date":s,"short-date-short-time":{...s,...c},"short-date-short-time-24":{...s,...u},"short-date-long-time":{...s,...d},"short-date-long-time-24":{...s,...f},"short-date-le":s,"short-date-le-short-time":{...s,...c},"short-date-le-short-time-24":{...s,...u},"short-date-le-long-time":{...s,...d},"short-date-le-long-time-24":{...s,...f},"long-month-day-year":o,"long-month-day-year-short-time":{...o,...c},"long-month-day-year-short-time-24":{...o,...u},"long-month-day-year-long-time":{...o,...d},"long-month-day-year-long-time-24":{...o,...f},"day-short-month-year":h,"day-short-month-year-short-time":{...h,...c},"day-short-month-year-short-time-24":{...h,...u},"day-short-month-year-long-time":{...h,...d},"day-short-month-year-long-time-24":{...h,...f},"long-date":l,"long-date-short-time":{...l,...c},"long-date-short-time-24":{...l,...u},"long-date-long-time":{...l,...d},"long-date-long-time-24":{...l,...f},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":c,"long-time":d},_=(0,r.w)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),T={ar:"ar-u-nu-latn-ca-gregory"};let p=new WeakMap;const A=g["short-date-short-time"];function S(e){return g[e]}function y(e,t=A){return function(e){let t=p.get(e);if(!t){const i=(0,a.a8)(),r=T[i]||i,s=v(e.timeZone??n.OX),o={...e,timeZone:s};t=new Intl.DateTimeFormat(r,o),p.set(e,t)}return t}(t).format(e)}function v(e){switch(e){case n.OX:return n.sP;case n.OI:return n.Gw;default:return e}}(0,a.uy)((()=>{p=new WeakMap}))},89960:(e,t,i)=>{i.d(t,{a8:()=>o,e2:()=>c,mo:()=>h,uy:()=>m});var r=i(38912);let a;const n=globalThis.esriConfig?.locale??globalThis.dojoConfig?.locale;function s(){return n??globalThis.navigator?.language??"en"}function o(){return void 0===a&&(a=s()),a}function h(e=o()){const t=/^([a-zA-Z]{2,3})(?:[_\-]\w+)*$/.exec(e);return t?.[1].toLowerCase()}const l=[];function c(e){return l.push(e),(0,r.uU)((()=>l.splice(l.indexOf(e),1)))}const d=[];function m(e){return d.push(e),(0,r.uU)((()=>l.splice(d.indexOf(e),1)))}globalThis.addEventListener?.("languagechange",(function(){const e=s();a!==e&&(a=e,[...d].forEach((t=>{t.call(null,e)})),[...l].forEach((t=>{t.call(null,e)})))}))},51544:(e,t,i)=>{i.d(t,{Ul:()=>u,bw:()=>g,kB:()=>f});var r=i(20744),a=i(38912),n=i(10860),s=i(89960);const o=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,h={ar:!0,bg:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function l(e){return e in h}const c=[],d=new Map;function m(e){for(const t of d.keys())_(e.pattern,t)&&d.delete(t)}function u(e){return c.includes(e)||(m(e),c.unshift(e)),(0,a.uU)((()=>{const t=c.indexOf(e);t>-1&&(c.splice(t,1),m(e))}))}async function f(e){const t=(0,s.a8)();d.has(e)||d.set(e,async function(e,t){const i=[];for(const r of c)if(_(r.pattern,e))try{return await r.fetchMessageBundle(e,t)}catch(e){i.push(e)}if(i.length)throw new r.c("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:i});throw new r.c("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}(e,t));const i=d.get(e);return i&&await T.add(i),i}function g(e){if(!o.test(e))return null;const t=o.exec(e);if(null===t)return null;const[,i,r]=t,a=i+(r?"-"+r.toUpperCase():"");return l(a)?a:l(i)?i:null}function _(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}(0,s.uy)((()=>{d.clear()}));const T=new class{constructor(){this._numLoading=0,this._dfd=null}async waitForAll(){this._dfd&&await this._dfd.promise}add(e){return this._increase(),e.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=(0,n.qG)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}}},54052:(e,t,i)=>{i.d(t,{iy:()=>o});var r=i(89960);const a={ar:"ar-u-nu-latn"};let n=new WeakMap,s={};function o(e,t){return Object.is(e,-0)&&(e=0),function(e){const t=e||s;if(!n.has(t)){const i=(0,r.a8)(),s=a[(0,r.a8)()]||i;n.set(t,new Intl.NumberFormat(s,e))}return n.get(t)}(t).format(e)}(0,r.uy)((()=>{n=new WeakMap,s={}}))},57628:(e,t,i)=>{i.d(t,{Q:()=>l});var r=i(66360),a=i(58820),n=i(88264),s=i(47828),o=i(54052);const h=()=>r.c.getLogger("esri.intl.substitute");function l(e,t,i={}){const{format:r={}}=i;return(0,n.qq)(e,(e=>function(e,t,i){let r,n;const s=e.indexOf(":");if(-1===s?r=e.trim():(r=e.slice(0,s).trim(),n=e.slice(s+1).trim()),!r)return"";const o=(0,a.YT)(r,t);if(null==o)return"";const h=(n?i?.[n]:null)??i?.[r];return h?c(o,h):n?d(o,n):m(o)}(e,t,r)))}function c(e,t){switch(t.type){case"date":return(0,s._m)(e,t.intlOptions);case"number":return(0,o.iy)(e,t.intlOptions);default:return h().warn("missing format descriptor for key {key}"),m(e)}}function d(e,t){switch(t.toLowerCase()){case"dateformat":return(0,s._m)(e);case"numberformat":return(0,o.iy)(e);default:return h().warn(`inline format is unsupported since 4.12: ${t}`),/^(dateformat|datestring)/i.test(t)?(0,s._m)(e):/^numberformat/i.test(t)?(0,o.iy)(e):m(e)}}function m(e){switch(typeof e){case"string":return e;case"number":return(0,o.iy)(e);case"boolean":return""+e;default:return e instanceof Date?(0,s._m)(e):""}}},28484:(e,t,i)=>{i.d(t,{Mt:()=>c,OX:()=>n,sP:()=>h,SM:()=>l,OI:()=>s,Gw:()=>o});const r=new Map([["AUS Central Standard Time","Australia/Darwin"],["AUS Eastern Standard Time","Australia/Sydney"],["Afghanistan Standard Time","Asia/Kabul"],["Alaskan Standard Time","America/Anchorage"],["Aleutian Standard Time","America/Adak"],["Altai Standard Time","Asia/Barnaul"],["Arab Standard Time","Asia/Riyadh"],["Arabian Standard Time","Asia/Dubai"],["Arabic Standard Time","Asia/Baghdad"],["Argentina Standard Time","America/Buenos_Aires"],["Astrakhan Standard Time","Europe/Astrakhan"],["Atlantic Standard Time","America/Halifax"],["Aus Central W. Standard Time","Australia/Eucla"],["Azerbaijan Standard Time","Asia/Baku"],["Azores Standard Time","Atlantic/Azores"],["Bahia Standard Time","America/Bahia"],["Bangladesh Standard Time","Asia/Dhaka"],["Belarus Standard Time","Europe/Minsk"],["Bougainville Standard Time","Pacific/Bougainville"],["Canada Central Standard Time","America/Regina"],["Cape Verde Standard Time","Atlantic/Cape_Verde"],["Caucasus Standard Time","Asia/Yerevan"],["Cen. Australia Standard Time","Australia/Adelaide"],["Central America Standard Time","America/Guatemala"],["Central Asia Standard Time","Asia/Almaty"],["Central Brazilian Standard Time","America/Cuiaba"],["Central Europe Standard Time","Europe/Budapest"],["Central European Standard Time","Europe/Warsaw"],["Central Pacific Standard Time","Pacific/Guadalcanal"],["Central Standard Time","America/Chicago"],["Central Standard Time (Mexico)","America/Mexico_City"],["Chatham Islands Standard Time","Pacific/Chatham"],["China Standard Time","Asia/Shanghai"],["Cuba Standard Time","America/Havana"],["Dateline Standard Time","Etc/GMT+12"],["E. Africa Standard Time","Africa/Nairobi"],["E. Australia Standard Time","Australia/Brisbane"],["E. Europe Standard Time","Europe/Chisinau"],["E. South America Standard Time","America/Sao_Paulo"],["Easter Island Standard Time","Pacific/Easter"],["Eastern Standard Time","America/New_York"],["Eastern Standard Time (Mexico)","America/Cancun"],["Egypt Standard Time","Africa/Cairo"],["Ekaterinburg Standard Time","Asia/Yekaterinburg"],["FLE Standard Time","Europe/Kiev"],["Fiji Standard Time","Pacific/Fiji"],["GMT Standard Time","Europe/London"],["GTB Standard Time","Europe/Bucharest"],["Georgian Standard Time","Asia/Tbilisi"],["Greenland Standard Time","America/Godthab"],["Greenwich Standard Time","Atlantic/Reykjavik"],["Haiti Standard Time","America/Port-au-Prince"],["Hawaiian Standard Time","Pacific/Honolulu"],["India Standard Time","Asia/Calcutta"],["Iran Standard Time","Asia/Tehran"],["Israel Standard Time","Asia/Jerusalem"],["Jordan Standard Time","Asia/Amman"],["Kaliningrad Standard Time","Europe/Kaliningrad"],["Korea Standard Time","Asia/Seoul"],["Libya Standard Time","Africa/Tripoli"],["Line Islands Standard Time","Pacific/Kiritimati"],["Lord Howe Standard Time","Australia/Lord_Howe"],["Magadan Standard Time","Asia/Magadan"],["Magallanes Standard Time","America/Punta_Arenas"],["Marquesas Standard Time","Pacific/Marquesas"],["Mauritius Standard Time","Indian/Mauritius"],["Middle East Standard Time","Asia/Beirut"],["Montevideo Standard Time","America/Montevideo"],["Morocco Standard Time","Africa/Casablanca"],["Mountain Standard Time","America/Denver"],["Mountain Standard Time (Mexico)","America/Mazatlan"],["Myanmar Standard Time","Asia/Rangoon"],["N. Central Asia Standard Time","Asia/Novosibirsk"],["Namibia Standard Time","Africa/Windhoek"],["Nepal Standard Time","Asia/Katmandu"],["New Zealand Standard Time","Pacific/Auckland"],["Newfoundland Standard Time","America/St_Johns"],["Norfolk Standard Time","Pacific/Norfolk"],["North Asia East Standard Time","Asia/Irkutsk"],["North Asia Standard Time","Asia/Krasnoyarsk"],["North Korea Standard Time","Asia/Pyongyang"],["Omsk Standard Time","Asia/Omsk"],["Pacific SA Standard Time","America/Santiago"],["Pacific Standard Time","America/Los_Angeles"],["Pacific Standard Time (Mexico)","America/Tijuana"],["Pakistan Standard Time","Asia/Karachi"],["Paraguay Standard Time","America/Asuncion"],["Qyzylorda Standard Time","Asia/Qyzylorda"],["Romance Standard Time","Europe/Paris"],["Russia Time Zone 10","Asia/Srednekolymsk"],["Russia Time Zone 11","Asia/Kamchatka"],["Russia Time Zone 3","Europe/Samara"],["Russian Standard Time","Europe/Moscow"],["SA Eastern Standard Time","America/Cayenne"],["SA Pacific Standard Time","America/Bogota"],["SA Western Standard Time","America/La_Paz"],["SE Asia Standard Time","Asia/Bangkok"],["Saint Pierre Standard Time","America/Miquelon"],["Sakhalin Standard Time","Asia/Sakhalin"],["Samoa Standard Time","Pacific/Apia"],["Sao Tome Standard Time","Africa/Sao_Tome"],["Saratov Standard Time","Europe/Saratov"],["Singapore Standard Time","Asia/Singapore"],["South Africa Standard Time","Africa/Johannesburg"],["South Sudan Standard Time","Africa/Juba"],["Sri Lanka Standard Time","Asia/Colombo"],["Sudan Standard Time","Africa/Khartoum"],["Syria Standard Time","Asia/Damascus"],["Taipei Standard Time","Asia/Taipei"],["Tasmania Standard Time","Australia/Hobart"],["Tocantins Standard Time","America/Araguaina"],["Tokyo Standard Time","Asia/Tokyo"],["Tomsk Standard Time","Asia/Tomsk"],["Tonga Standard Time","Pacific/Tongatapu"],["Transbaikal Standard Time","Asia/Chita"],["Turkey Standard Time","Europe/Istanbul"],["Turks And Caicos Standard Time","America/Grand_Turk"],["US Eastern Standard Time","America/Indianapolis"],["US Mountain Standard Time","America/Phoenix"],["UTC","Etc/GMT"],["UTC+01","Etc/GMT-1"],["UTC+02","Etc/GMT-2"],["UTC+03","Etc/GMT-3"],["UTC+04","Etc/GMT-4"],["UTC+05","Etc/GMT-5"],["UTC+06","Etc/GMT-6"],["UTC+07","Etc/GMT-7"],["UTC+08","Etc/GMT-8"],["UTC+09","Etc/GMT-9"],["UTC+10","Etc/GMT-10"],["UTC+11","Etc/GMT-11"],["UTC+12","Etc/GMT-12"],["UTC+13","Etc/GMT-13"],["UTC+14","Etc/GMT-14"],["UTC-01","Etc/GMT+1"],["UTC-02","Etc/GMT+2"],["UTC-03","Etc/GMT+3"],["UTC-04","Etc/GMT+4"],["UTC-05","Etc/GMT+5"],["UTC-06","Etc/GMT+6"],["UTC-07","Etc/GMT+7"],["UTC-08","Etc/GMT+8"],["UTC-09","Etc/GMT+9"],["UTC-10","Etc/GMT+10"],["UTC-11","Etc/GMT+11"],["UTC-12","Etc/GMT+12"],["Ulaanbaatar Standard Time","Asia/Ulaanbaatar"],["Venezuela Standard Time","America/Caracas"],["Vladivostok Standard Time","Asia/Vladivostok"],["Volgograd Standard Time","Europe/Volgograd"],["W. Australia Standard Time","Australia/Perth"],["W. Central Africa Standard Time","Africa/Lagos"],["W. Europe Standard Time","Europe/Berlin"],["W. Mongolia Standard Time","Asia/Hovd"],["West Asia Standard Time","Asia/Tashkent"],["West Bank Standard Time","Asia/Hebron"],["West Pacific Standard Time","Pacific/Port_Moresby"],["Yakutsk Standard Time","Asia/Yakutsk"],["Yukon Standard Time","America/Whitehorse"]]);var a=i(39452);const n="system",s="unknown",o="UTC",h=Intl.DateTimeFormat().resolvedOptions().timeZone;function l(e,t=!1){return{json:{read:{source:e,reader:(t,i)=>i[e]?c(i[e]):null},write:!!t&&{allowNull:!0,writer(t,i){i[e]=t?function(e){return{timeZoneIANA:e}}(t):null}}}}}function c(e,t=n){return e?function(e){return"timeZoneIANA"in e}(e)?e.timeZoneIANA:function(e,t=n){if(!e||!r.has(e.timeZone))return t;const i=r.get(e.timeZone);return function(e){return e.startsWith("UTC")}(e.timeZone)||e.respectsDaylightSaving?i:function(e){const t=a.CS.local().setZone(e),i=Math.min(t.set({month:1,day:1}).offset,t.set({month:5}).offset);return 0===i?"Etc/UTC":`Etc/GMT${a.Kq.instance(-i).formatOffset(0,"narrow")}`}(i)}(e,t):t}}}]);