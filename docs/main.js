!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){n(5),e.exports=n(2)},function(e,t){
/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
!function(){"use strict";if("undefined"!=typeof window&&window.addEventListener){var e,t,n,r=Object.create(null),i=function(){clearTimeout(t),t=setTimeout(e,100)},o=function(){},s=function(e){function t(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a")).href=e,t.protocol.replace(/:/g,"")+t.host}var n,r,i;return window.XMLHttpRequest&&(n=new XMLHttpRequest,r=t(location),i=t(e),n=void 0===n.withCredentials&&""!==i&&i!==r?XDomainRequest||void 0:XMLHttpRequest),n},a="http://www.w3.org/1999/xlink";e=function(){var e,t,n,d,c,l,u,h,f,v,p=0;function m(){var e;0===(p-=1)&&(o(),window.addEventListener("resize",i,!1),window.addEventListener("orientationchange",i,!1),window.MutationObserver?((e=new MutationObserver(i)).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),o=function(){try{e.disconnect(),window.removeEventListener("resize",i,!1),window.removeEventListener("orientationchange",i,!1)}catch(e){}}):(document.documentElement.addEventListener("DOMSubtreeModified",i,!1),o=function(){document.documentElement.removeEventListener("DOMSubtreeModified",i,!1),window.removeEventListener("resize",i,!1),window.removeEventListener("orientationchange",i,!1)}))}function w(e){return function(){!0!==r[e.base]&&(e.useEl.setAttributeNS(a,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function b(e){return function(){var t,n=document.body,r=document.createElement("x");e.onload=null,r.innerHTML=e.responseText,(t=r.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",n.insertBefore(t,n.firstChild)),m()}}function y(e){return function(){e.onerror=null,e.ontimeout=null,m()}}for(o(),f=document.getElementsByTagName("use"),c=0;c<f.length;c+=1){try{t=f[c].getBoundingClientRect()}catch(e){t=!1}e=(h=(d=f[c].getAttribute("href")||f[c].getAttributeNS(a,"href")||f[c].getAttribute("xlink:href"))&&d.split?d.split("#"):["",""])[0],n=h[1],l=t&&0===t.left&&0===t.right&&0===t.top&&0===t.bottom,t&&0===t.width&&0===t.height&&!l?(f[c].hasAttribute("href")&&f[c].setAttributeNS(a,"xlink:href",d),e.length&&(!0!==(v=r[e])&&setTimeout(w({useEl:f[c],base:e,hash:n}),0),void 0===v&&void 0!==(u=s(e))&&(v=new u,r[e]=v,v.onload=b(v),v.onerror=y(v),v.ontimeout=y(v),v.open("GET",e),v.send(),p+=1))):l?e.length&&r[e]&&setTimeout(w({useEl:f[c],base:e,hash:n}),0):void 0===r[e]?r[e]=!0:r[e].onload&&(r[e].abort(),delete r[e].onload,r[e]=!0)}f="",p+=1,m()},n=function(){window.removeEventListener("load",n,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",n,!1):n()}}()},function(e,t,n){var r=n(3),i=n(4);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1},s=(r(i,o),i.locals?i.locals:{});e.exports=s},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function a(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],d=t.base?o[0]+t.base:o[0],c=n[d]||0,l="".concat(d," ").concat(c);n[d]=c+1;var u=a(l),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(s[u].references++,s[u].updater(h)):s.push({identifier:l,updater:m(h,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function h(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function f(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,p=0;function m(e,t){var n,r,i;if(t.singleton){var o=p++;n=v||(v=c(t)),r=h.bind(null,n,o,!1),i=h.bind(null,n,o,!0)}else n=c(t),r=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);s[i].references--}for(var o=d(e,t),c=0;c<n.length;c++){var l=a(n[c]);0===s[l].references&&(s[l].updater(),s.splice(l,1))}n=o}}}},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);function r(e){var t=e.slider,n=e.currentSlide,r=void 0===n?0:n,i=e.dots,o=void 0!==i&&i,s=e.dotsContainer,a=void 0!==s&&s;this.sl=document.querySelector(t),this.dots=o,this.dotsContainer=a,this.currentSlide=r,this.init()}r.prototype={init:function(){this.wrapper=this.sl.querySelector(".slider-wrap"),this.wChildren=Array.from(this.wrapper.children),this.prev=this.sl.querySelector(".prev"),this.next=this.sl.querySelector(".next"),this.dots&&(this.dotsCreate(),this.dotsWrap=this.sl.querySelector(".dots-wrap"),this.dChildren=Array.from(this.dotsWrap.children)),this.nav()},nav:function(){this.showSlide()},showSlide:function(){var e=this;this.startSlide(),this.prev.onclick=function(){return e.startSlide(-1)},this.next.onclick=function(){return e.startSlide(1)},this.dots&&this.dotSlide()},dotSlide:function(){var e=this;this.dotsWrap.addEventListener("click",(function(t){if(t.target.closest(".dot"))for(var n=0;n<e.dChildren.length;n++)e.dChildren[n]===t.target&&(e.currentSlide=n,e.startSlide())}))},dotsCreate:function(){var e=document.createElement("div");e.className="dots-wrap";this.sl.querySelector(".dots-wrap");for(var t=0;t<this.wChildren.length;t++){var n=document.createElement("span");n.className="dot",this.dotsContainer?this.sl.querySelector(".dots-wrap").append(n):e.append(n)}!this.dotsContainer&&this.wrapper.append(e)},startSlide:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this.wChildren.length-1;this.currentSlide+=e,this.wChildren.forEach((function(e){e.classList.contains("active")&&e.classList.remove("active"),e.classList.add("hide")})),this.dots&&this.dChildren.forEach((function(e){e.classList.contains("active")&&e.classList.remove("active")})),this.currentSlide<0&&(this.currentSlide=t),this.currentSlide>t&&(this.currentSlide=0),this.dots&&this.dChildren[this.currentSlide].classList.add("active"),this.wChildren[this.currentSlide].classList.add("active")}};var i=r;!function(){new i({slider:".slider",dots:!0,dotsContainer:!0}),new i({slider:".game-el-slider",currentSlide:3,dots:!0});document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=this.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))}))}()}]);