(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{217:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(210),a=n(212),c=n(218),s=n(211),u=i.b.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-1xgbquj-0"})(["position:relative;display:table;width:100%;height:400px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),p=i.b.div.withConfig({displayName:"Hero__TitleContainer",componentId:"sc-1xgbquj-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),l=i.b.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-1xgbquj-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:",";text-shadow:1px 1px 4px rgba(34,34,34,0.85);"],s.a.white),d=i.b.h2.withConfig({displayName:"Hero__HeroSubTitle",componentId:"sc-1xgbquj-3"})(["margin:10px 60px;color:",";text-shadow:1px 1px 4px rgba(34,34,34,0.85);"],s.a.white);t.a=function(e){var t=Object(a.a)().siteCover,n=Object(c.a)(t).fluid,r=e.heroImg||n.src;return o.a.createElement(u,{style:{backgroundImage:'url("'+r+'")'}},o.a.createElement(p,null,o.a.createElement(l,null,e.title),e.subTitle&&o.a.createElement(d,null,e.subTitle)))}},223:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(213),a=n(210),c=n(211);var s=a.b.div.withConfig({displayName:"TagList__ListContainer",componentId:"sc-4emymn-0"})(["display:inline;margin:0 0.5rem 0 0;color:",";"],c.a.textLight),u=Object(a.b)(i.a).withConfig({displayName:"TagList__TagListItem",componentId:"sc-4emymn-1"})(["margin-left:0.3rem;color:",";&:hover{background-color:#e6e6e6;}&:before{content:'';}padding:5px 10px;border:1px solid #e6e6e6;border-radius:4px;vertical-align:middle;background-color:#fafafa;color:#1e1e1e;font-size:12px;line-height:24px;margin:0 5px 5px 0;"],c.a.textLight),p=function(e){var t,n;function i(){return e.apply(this,arguments)||this}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.render=function(){var e=this.props,t=e.tags,n=e.icon;return o.a.createElement(s,null,!0===n&&o.a.createElement(r.Fragment,null),t.map(function(e,n){return o.a.createElement(r.Fragment,{key:"tag-list-"+n},o.a.createElement(u,{to:"/tags/"+e},e),n<t.length-1?" ":"")}))},i}(o.a.Component);t.a=p},241:function(e,t,n){var r=n(1),o=n(56),i=n(30),a=n(6),c=n(7),s=n(13),u=n(149),p=(n(5).Reflect||{}).construct,l=s(function(){function e(){}return!(p(function(){},[],e)instanceof e)}),d=!s(function(){p(function(){})});r(r.S+r.F*(l||d),"Reflect",{construct:function(e,t){i(e),a(t);var n=arguments.length<3?e:i(arguments[2]);if(d&&!l)return p(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(u.apply(e,r))}var s=n.prototype,f=o(c(s)?s:Object.prototype),m=Function.apply.call(e,f,t);return c(m)?m:f}})},242:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(268),a=n.n(i),c=n(212);t.a=function(e){var t=Object(c.a)(),n=t.disqusShortname,r=t.disqusSiteUrl;if(!n)return null;var i={url:""+r+e.slug,title:e.title};return o.a.createElement(a.a.DiscussionEmbed,{shortname:n,config:i})}},243:function(e,t,n){"use strict";n(99),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},c=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),c&&e.apply(o,i)}}},247:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(210),a=n(223),c=n(211);var s=i.b.header.withConfig({displayName:"ContentHeader__Header",componentId:"g5qs2a-0"})(["margin-bottom:2rem;color:",";border-bottom:1px solid #ddd;padding-bottom:10px;justify-content:space-between;display:flex;"],c.a.textLight),u=function(e){var t,n;function i(){return e.apply(this,arguments)||this}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.render=function(){var e=this.props,t=e.date,n=e.tags;return o.a.createElement(s,null,Array.isArray(n)&&n.length>0&&o.a.createElement(r.Fragment,null,o.a.createElement(a.a,{tags:n})),t&&o.a.createElement("time",null,t))},i}(o.a.Component),p=n(267),l=n.n(p);var d=i.b.div.withConfig({displayName:"Content__ContentBody",componentId:"sc-1a1usp9-0"})(["line-height:1.6;& > h1{font-size:1.8em;padding-top:3rem;margin-top:1.5rem;padding-top:1.5rem;}& > h2{padding-top:3rem;margin-top:1rem;padding-top:1rem;}& > h3{padding-top:1.5rem;}& > h4{padding-top:1.5rem;}& > p{margin:1em 0 0 0;font-size:16px;line-height:28px;text-align:justify;}& > hr{margin:30px 0;}& .gatsby-resp-image-wrapper{max-width:940px !important;}& .gatsby-resp-image-figure{}& .gatsby-resp-image-figcaption{text-align:center;color:#777;margin-top:5px;font-size:13px;}& a{border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}&.anchor,&.gatsby-resp-image-link{border:none;}}& > blockquote{box-sizing:border-box;margin:1.75em 0 1.75em 0;padding:0 0 0 1.5em;border-left:0.4em solid rgba(32,35,42,0.85);@media (max-width:780px){margin:1.75em 0 1.75em 0;padding:0 0 0 1em;}}& > blockquote p{margin:0.8em 0;font-style:normal;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em 0em 1.5em 0;}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight-code-line{background-color:",";display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:0.75em;border-left:0.25em solid ",";}& p > code.language-text,& li > code.language-text{background:",";color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;}& table{margin-top:1em;border-collapse:collapse;border-radius:0.5em;overflow:hidden;& th,& td{padding:0.5em;background:#e8e8e8;border-bottom:2px solid ",";}}& li{margin-bottom:8px;}"],c.a.highlight_code_linebg,c.a.highlight_code_bg,c.a.highlight_code_oneline,c.a.white),f=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.content,n=e.date,r=e.tags;return o.a.createElement("section",null,(r||n)&&o.a.createElement(u,{date:n,tags:r}),o.a.createElement(d,null,o.a.createElement(l.a,null,t)))},r}(o.a.Component);t.a=f},267:function(e,t,n){function r(e,t,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&o(i,n.prototype),i}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach(function(t){s(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(38),n(11),n(18),n(73),n(103),n(41),n(12),n(8),n(143),n(54),n(4),n(241),n(241),n(143),n(73),n(103),n(54),n(41),n(38),n(12),n(8),n(11),n(4),n(18);var u=n(0),p=n(96),l=p.useMDXComponents,d=p.mdx,f=n(129).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,a=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),s=l(n),p=f(t),m=u.useMemo(function(){if(!o)return null;var e=c({React:u,mdx:d},p),t=Object.keys(e),n=t.map(function(t){return e[t]});return r(Function,["_fn"].concat(i(t),[""+o])).apply(void 0,[{}].concat(i(n)))},[o,t]);return u.createElement(m,c({components:s},a))}},268:function(e,t,n){"use strict";n(99),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(269),o=n(270),i=n(272);t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},269:function(e,t,n){"use strict";n(143),n(101),n(99),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},c=n(243);var s=(0,c.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["default"].Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?s():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},270:function(e,t,n){"use strict";n(271),n(54),n(100),n(4),n(143),n(101),n(99),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["default"].Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},271:function(e,t,n){"use strict";var r=n(5),o=n(23),i=n(42),a=n(146),c=n(77),s=n(13),u=n(72).f,p=n(78).f,l=n(15).f,d=n(150).trim,f=r.Number,m=f,h=f.prototype,g="Number"==i(n(56)(h)),b="trim"in String.prototype,y=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,i=(t=b?t.trim():d(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var a,s=t.slice(2),u=0,p=s.length;u<p;u++)if((a=s.charCodeAt(u))<48||a>o)return NaN;return parseInt(s,r)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof f&&(g?s(function(){h.valueOf.call(n)}):"Number"!=i(n))?a(new m(y(t)),n,f):y(t)};for(var w,v=n(9)?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;v.length>_;_++)o(m,w=v[_])&&!o(f,w)&&l(f,w,p(m,w));f.prototype=h,h.constructor=f,n(17)(r,"Number",f)}},272:function(e,t,n){"use strict";n(143),n(101),n(99),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},c=n(243);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["default"].Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url||t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=3-95f81021ae5a4235ccce.js.map