(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{114:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),m=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=m(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return r?o.a.createElement(f,c(c({ref:t},l),{},{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(2),o=r(6),a=(r(0),r(114)),i={id:"motivation",title:"Motivation"},c={unversionedId:"motivation",id:"motivation",isDocsHomePage:!1,title:"Motivation",description:"Forms concept",source:"@site/../docs/motivation.md",slug:"/motivation",permalink:"/docs/motivation",version:"current",sidebar:"docs",previous:{title:"What are uniforms?",permalink:"/docs/what-are-uniforms"},next:{title:"Comparison matrix",permalink:"/docs/compare-matrix"}},s=[{value:"Forms concept",id:"forms-concept",children:[]}],l={rightToc:s};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"forms-concept"},"Forms concept"),Object(a.b)("p",null,"There\u2019s a very interesting class-based inheritance concept for forms.\nBasically, there are a few types of forms with different capabilities.\nMost of the time you\u2019ll be using either AutoForm or ValidatedForm, but there are quite a few more to choose from:"),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/uniforms-graph.svg"})),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"If you are not familiar with concept of HOC, read one of many posts about them first."),"\nI\u2019m sure you\u2019ve read at least one of ",Object(a.b)("em",{parentName:"p"},"Why ES6 classes are bad")," or ",Object(a.b)("em",{parentName:"p"},"class considered harmful")," posts. I\u2019ve read them too, so why is uniforms using classes? Well, it\u2019s all about the complexity."),Object(a.b)("p",{parentName:"blockquote"},"-- ",Object(a.b)("cite",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/radekmie"}),"Rados\u0142aw Miernik")))),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/hoc-hell.png"}),Object(a.b)("small",{style:{display:"block"}},"Screenshot of React DevTools when lots of HOC\u2019s are applied to a component.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"I wanted to achieve the same functionality as with multiple HOCs, but within one component. To be honest, readability is more important than performance. In short, I\u2019ve reached (more or less) traits with ES6 clasess. The result?"),Object(a.b)("p",{parentName:"blockquote"},"-- ",Object(a.b)("cite",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/radekmie"}),"Rados\u0142aw Miernik")))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import BaseForm from './BaseForm';\nimport QuickForm from './QuickForm';\nimport ValidatedForm from './ValidatedForm';\n\nconst ValidatedQuickForm = ValidatedForm.Validated(QuickForm.Quick(BaseForm));\n")),Object(a.b)("p",{align:"center"},Object(a.b)("img",{src:"/img/uniforms-traits.png"}),Object(a.b)("small",{style:{display:"block"}},'AutoValidatedQuickSemanticForm (using 5 "traits") viewed in React DevTools.')),Object(a.b)("p",null,"While it\u2019s not a universal approach that will work in every situation, using it in uniforms allows us to deliver clean-looking components while keeping extensibility and separation of concerns."),Object(a.b)("hr",null),Object(a.b)("p",null,"Based on ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.meteor.com/managing-forms-in-a-meteor-react-project-with-uniforms-33d60602b43a"}),"Managing forms in a Meteor/React project with the uniforms package")," written by ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/MacRusher"}),"Maciej Stasie\u0142uk"),"."))}m.isMDXComponent=!0}}]);