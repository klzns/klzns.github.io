(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6qSS":function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",(function(){return v}));var r=n("q1tI"),o=n.n(r),a=n("17x9"),c=n.n(a),i=n("Wbzz"),l=n("vOnD"),u=n("N1om"),p=n.n(u),f=n("A2+M"),s=n("rOcY"),m=n.n(s),d=n("Kvkj"),y=l.c.h1.withConfig({displayName:"post__Title",componentId:"lq4eaz-0"})(["margin-bottom:1rem;"]),b=l.c.div.withConfig({displayName:"post__PostContent",componentId:"lq4eaz-1"})(["margin-top:4rem;"]),O=Object(l.c)("p").withConfig({displayName:"post___StyledP",componentId:"lq4eaz-2"})({textAlign:"right"}),g=Object(l.c)("span").withConfig({displayName:"post___StyledSpan",componentId:"lq4eaz-3"})({marginLeft:10,marginRight:10}),h=function(e){var t=e.pageContext,n=t.slug,r=t.prev,a=t.next,c=e.data.mdx,l=c.frontmatter,u=""+m.a.siteUrl+n;return o.a.createElement(d.d,{customSEO:!0},o.a.createElement(d.i,null,o.a.createElement(d.f,{postPath:n,postNode:c,article:!0}),o.a.createElement(d.c,null),o.a.createElement("article",null,o.a.createElement(y,null,l.title),o.a.createElement(d.h,null,l.date," — ",c.timeToRead," Min Read — In"," ",l.categories.map((function(e,t){return o.a.createElement(o.a.Fragment,{key:e},!!t&&", ",o.a.createElement(i.Link,{to:"/categories/"+p()(e)},e))}))),o.a.createElement(b,null,o.a.createElement(f.MDXRenderer,null,c.body))),o.a.createElement(O,null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://mobile.twitter.com/search?q="+encodeURIComponent(u)},"Discuss on Twitter"),o.a.createElement(g,null," • "),o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:c.fields.editLink},"Edit post on GitHub")),o.a.createElement(d.e,{prev:r,next:a})))};t.default=h,h.defaultProps={pageContext:c.a.shape({next:null,prev:null})};var v="3615817750"},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},X8hv:function(e,t,n){function r(e,t,n){return(r=o()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var f=n("q1tI"),s=n("7ljp"),m=s.useMDXComponents,d=s.mdx,y=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),i=m(n),l=y(t),p=f.useMemo((function(){if(!o)return null;var e=u({React:f,mdx:d},l),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(c(t),[""+o])).apply(void 0,[{}].concat(c(n)))}),[o,t]);return f.createElement(p,u({components:i},a))}}}]);
//# sourceMappingURL=component---src-templates-post-js-cdbcc62cb7595b6d998b.js.map