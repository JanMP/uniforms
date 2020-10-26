/*! For license information please see 36.70817124.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{110:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},111:function(e,t,n){"use strict";var r=n(0),o=n(22);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},159:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(13),a=n(166),c=n(9),u=Object(r.createContext)({collectLink:function(){}}),s=n(160),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,l,v=e.isNavLink,d=e.to,p=e.href,h=e.activeClassName,b=e["data-noBrokenLinkCheck"],w=f(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),m=Object(s.b)().withBaseUrl,O=Object(r.useContext)(u),y=d||p,g=Object(a.a)(y),j=null==y?void 0:y.replace("pathname://",""),k=void 0!==j?function(e){return e.startsWith("/")}(n=j)?m(n):n:void 0,E=Object(r.useRef)(!1),x=v?i.e:i.c,C=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&g&&window.docusaurus.prefetch(k),function(){C&&l&&l.disconnect()}}),[k,C,g]);var N=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,L=!k||!g||N;return k&&g&&!N&&!b&&O.collectLink(k),L?o.a.createElement("a",Object.assign({href:k},!g&&{target:"_blank",rel:"noopener noreferrer"},w)):o.a.createElement(x,Object.assign({},w,{onMouseEnter:function(){E.current||(window.docusaurus.preload(k),E.current=!0)},innerRef:function(e){var t,n;C&&e&&g&&(t=e,n=function(){window.docusaurus.prefetch(k)},(l=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(t),l.disconnect(),n())}))}))).observe(t))},to:k||""},v&&{activeClassName:h}))}},160:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(111),o=n(166);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var f=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+f:f}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},166:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},341:function(e,t,n){"use strict";var r=n(0),o=n.n(r).a.createContext(void 0);t.a=o},356:function(e,t,n){"use strict";var r=n(0),o=n(341);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},528:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(393);t.default=function(){return o.a.createElement(i.a,{title:"Page Not Found"},o.a.createElement("div",{className:"container margin-vert--xl"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--6 col--offset-3"},o.a.createElement("h1",{className:"hero__title"},"Page Not Found"),o.a.createElement("p",null,"We could not find what you were looking for."),o.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},97:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}}]);