/*! For license information please see 87c4848dd48119fd75f9.js.LICENSE.txt */
"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2448],{45660:(e,t,n)=>{n.d(t,{H:()=>w,c:()=>v,d:()=>b,f:()=>E,i:()=>h,r:()=>m,s:()=>f});var i=n(2696),a=n(6132);const o=["calcite-input","calcite-input-number","calcite-input-text","calcite-text-area"],r="hidden-form-input";function l(e){return"checked"in e}const s=new WeakMap,c=new WeakSet;function u(e){"status"in e&&(e.status="idle"),"validationIcon"in e&&(e.validationIcon=!1),"validationMessage"in e&&(e.validationMessage="")}function d(e){const t=e?.target,n=t?.parentElement,i=n?.nodeName?.toLowerCase(),a=i?.split("-");if(a.length<2||"calcite"!==a[0])return;var r,l;e?.preventDefault(),r=n,l=t?.validationMessage||"","status"in r&&(r.status="invalid"),"validationIcon"in r&&(r.validationIcon=!0),"validationMessage"in r&&(r.validationMessage=l);const s=`${a.map(((e,t)=>0===t?e:`${e[0].toUpperCase()}${e.slice(1)}`)).join("")}${o.includes(i)?"Input":"Change"}`;n.addEventListener(s,(()=>u(n)),{once:!0})}function f(e){const{formEl:t}=e;return!!t&&(t.addEventListener("invalid",d,!0),t.requestSubmit(),t.removeEventListener("invalid",d,!0),requestAnimationFrame((()=>{const e=t.querySelectorAll("[status=invalid]");for(const t of e)if(t?.validationMessage){t?.setFocus();break}})),!0)}function m(e){e.formEl?.reset()}function v(e){const{el:t,value:n}=e,a=E(e);if(!a||function(e,t){if((0,i.c)(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let a=!1;return e.addEventListener(n,(e=>{a=e.composedPath().some((e=>c.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),a}(a,t))return;e.formEl=a,e.defaultValue=n,l(e)&&(e.defaultChecked=e.checked);const o=(e.onFormReset||p).bind(e);a.addEventListener("reset",o),s.set(e.el,o),c.add(t)}function E(e){const{el:t,form:n}=e;return n?(0,i.q)(t,{id:n}):(0,i.c)(t,"form")}function p(){u(this),l(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function b(e){const{el:t,formEl:n}=e;if(!n)return;const i=s.get(t);n.removeEventListener("reset",i),s.delete(t),e.formEl=null,c.delete(t)}const h="calciteInternalHiddenInputInput",g=e=>{e.target.dispatchEvent(new CustomEvent(h,{bubbles:!0}))},k=e=>e.removeEventListener("input",g);function L(e,t,n){const{defaultValue:i,disabled:a,form:o,name:r,required:s}=e;t.defaultValue=i,t.disabled=a,t.name=r,t.required=s,t.tabIndex=-1,o?t.setAttribute("form",o):t.removeAttribute("form"),l(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",e.syncHiddenFormInput?.(t)}const w=({component:e})=>(function(e){const{el:t,formEl:n,name:i,value:a}=e,{ownerDocument:o}=t,l=t.querySelectorAll(`input[slot="${r}"]`);if(!n||!i)return void l.forEach((e=>{k(e),e.remove()}));const s=Array.isArray(a)?a:[a],c=[],u=new Set;let d;l.forEach((t=>{const n=s.find((e=>e==t.value));null!=n?(u.add(n),L(e,t,n)):c.push(t)})),s.forEach((t=>{if(u.has(t))return;let n=c.pop();n||(n=o.createElement("input"),n.slot=r),d||(d=o.createDocumentFragment()),d.append(n),n.addEventListener("input",g),L(e,n,t)})),d&&t.append(d),c.forEach((e=>{k(e),e.remove()}))}(e),(0,a.h)("slot",{name:r}))},97436:(e,t,n)=>{n.d(t,{I:()=>h,c:()=>E,d:()=>p,u:()=>d});var i=n(6132);const a=/firefox/i.test(function(){if(!i.qe.isBrowser)return"";const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}()),o=a?new WeakMap:null;function r(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function l(e){const t=e.target;if(a&&!o.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const s=["mousedown","mouseup","click"];function c(e){if(a&&!o.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const u={capture:!0};function d(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void f(e);v(e),e.el.removeAttribute("aria-disabled")}function f(e){var t;e.el.click=r,(t=a?m(e):e.el)&&(t.addEventListener("pointerdown",l,u),s.forEach((e=>t.addEventListener(e,c,u))))}function m(e){return o.get(e.el)}function v(e){var t;delete e.el.click,(t=a?m(e):e.el)&&(t.removeEventListener("pointerdown",l,u),s.forEach((e=>t.removeEventListener(e,c,u))))}function E(e){if(!e.disabled||!a)return;const t=e.el.parentElement||e.el;o.set(e.el,t),f(e)}function p(e){a&&(o.delete(e.el),v(e))}const b={container:"interaction-container"};function h({disabled:e},t){return(0,i.h)("div",{class:b.container,inert:e},...t)}},43928:(e,t,n)=>{n.d(t,{a:()=>w,b:()=>l,c:()=>E,d:()=>p,g:()=>h,l:()=>r});var i=n(2696),a=n(65223);const o="calciteInternalLabelClick",r="calciteInternalLabelConnected",l="calciteInternalLabelDisconnected",s="calcite-label",c=new WeakMap,u=new WeakMap,d=new WeakMap,f=new WeakMap,m=new Set,v=e=>{const{id:t}=e,n=t&&(0,i.q)(e,{selector:`${s}[for="${t}"]`});if(n)return n;const a=(0,i.c)(e,s);return!a||function(e,t){let n;const i="custom-element-ancestor-check",a=i=>{i.stopImmediatePropagation();const a=i.composedPath();n=a.slice(a.indexOf(t),a.indexOf(e))};e.addEventListener(i,a,{once:!0}),t.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),e.removeEventListener(i,a);return n.filter((n=>n!==t&&n!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(a,e)?null:a};function E(e){if(!e)return;const t=v(e.el);if(u.has(t)&&t===e.labelEl||!t&&m.has(e))return;const n=L.bind(e);if(t){e.labelEl=t;const i=c.get(t)||[];i.push(e),c.set(t,i.sort(b)),u.has(e.labelEl)||(u.set(e.labelEl,g),e.labelEl.addEventListener(o,g)),m.delete(e),document.removeEventListener(r,d.get(e)),f.set(e,n),document.addEventListener(l,n)}else m.has(e)||(n(),document.removeEventListener(l,f.get(e)))}function p(e){if(!e)return;if(m.delete(e),document.removeEventListener(r,d.get(e)),document.removeEventListener(l,f.get(e)),d.delete(e),f.delete(e),!e.labelEl)return;const t=c.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(o,u.get(e.labelEl)),u.delete(e.labelEl)),c.set(e.labelEl,t.filter((t=>t!==e)).sort(b)),e.labelEl=null}function b(e,t){return(0,i.u)(e.el,t.el)?-1:1}function h(e){return e.label||e.labelEl?.textContent?.trim()||""}function g(e){const t=e.detail.sourceEvent.target,n=c.get(this),i=n.find((e=>e.el===t));if(n.includes(i))return;const a=n[0];a.disabled||a.onLabelClick(e)}function k(){m.has(this)&&E(this)}function L(){m.add(this);const e=d.get(this)||k.bind(this);d.set(this,e),document.addEventListener(r,e)}async function w(e){if(await(0,a.c)(e),c.has(e))return;const t=e.ownerDocument?.getElementById(e.for);t&&requestAnimationFrame((()=>{for(const e of m)if(e.el===t){E(e);break}}))}}}]);