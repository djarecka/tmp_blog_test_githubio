(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("0mN4");var r=a("PcRw"),i=a("q1tI"),n=a.n(i),s=a("Wbzz"),o=a("9eSz"),d=a.n(o),l=a("vOnD"),u=a("p3AD");var c="341633806",f=l.a.div.withConfig({displayName:"bio__Container",componentId:"zkkkmj-0"})(["display:flex;"]);t.a=function(){return n.a.createElement(s.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author;t.social;return n.a.createElement(f,null,n.a.createElement(d.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(u.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Daily Reproducible Challenges by ",n.a.createElement("strong",null,a)," "))},data:r})}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function A(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(k,(0,d.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),s):s},k=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=p(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,E=e.loading,x=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,W=(0,d.default)({opacity:I?1:0,transition:N?"opacity "+v+"ms":"none"},o),V="boolean"==typeof b?"lightgray":b,z={transitionDelay:v+"ms"},C=(0,d.default)({opacity:this.state.imgLoaded?0:1},N&&z,{},o,{},f),T={title:t,alt:this.state.isVisible?"":a,style:C,className:p,itemProp:S};if(h){var F=h,D=g(h);return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),V&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&z)}),D.base64&&l.default.createElement(L,{ariaHidden:!0,src:D.base64,spreadProps:T,imageVariants:F,generateSources:R}),D.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,src:D.tracedSVG,spreadProps:T,imageVariants:F,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,w(F),l.default.createElement(k,{alt:a,title:t,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:E},D,{imageVariants:F}))}}))}if(m){var q=m,J=g(m),M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:J.width,height:J.height},n);return"inherit"===n.display&&delete M.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(J.srcSet)},V&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:V,width:J.width,opacity:this.state.imgLoaded?0:1,height:J.height},N&&z)}),J.base64&&l.default.createElement(L,{ariaHidden:!0,src:J.base64,spreadProps:T,imageVariants:q,generateSources:R}),J.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,src:J.tracedSVG,spreadProps:T,imageVariants:q,generateSources:A}),this.state.isVisible&&l.default.createElement("picture",null,w(q),l.default.createElement(k,{alt:a,title:t,width:J.width,height:J.height,sizes:J.sizes,src:J.src,crossOrigin:this.props.crossOrigin,srcSet:J.srcSet,style:W,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:E},J,{imageVariants:q}))}}))}return null},t}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var W=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),V=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});N.propTypes={resolutions:W,sizes:V,fixed:u.default.oneOfType([W,u.default.arrayOf(W)]),fluid:u.default.oneOfType([V,u.default.arrayOf(V)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var z=N;t.default=z},EK0E:function(e,t,a){"use strict";var r,i=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),d=a("czNK"),l=a("ZD67"),u=a("0/R4"),c=a("s5qY"),f=a("s5qY"),p=!i.ActiveXObject&&"ActiveXObject"in i,g=o.getWeak,h=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(u(e)){var t=g(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},y=e.exports=a("4LiD")("WeakMap",b,v,l,!0,!0);f&&p&&(d((r=l.getConstructor(b,"WeakMap")).prototype,v),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];s(t,e,(function(t,i){if(u(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},PcRw:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAw4AAAMOAHbabyPAAADWklEQVQ4y41VWU8UQRDm5/gbfPTJ3+Crz8YnDcYbffCIeKEYhRgl8TZ4rVyiIHERFpZlcVlEWEGOvYaZnd25r8+qHmZYiSZW0uma7q2vv66ur7YF2xYEQTx7235kA2sGsls2dpvXFBPFt+wGi3zZ8vGyoONWro79fSXsfb2J0aIJzfExumnC9YMYtDm+Jfrwm1j1/tRxIqUg8ctA2fAwtG5gronhw8WG2J+u2nHsXxmytWdVdM7Xhb/ScNFHoD9URzBOrOqCHVvV9HBqSsHrFf2P6wuGETu+Hp/OxkAM/E22cS9fx7FJGRnJFqDX5tSYQNu0go8bZgzaEiGPUX4uz9aE/4uYtRJAZN9rDnp+NOLvJ0sani5rwjdcXxzGjOMrs52lkyRaLGoOOnIqnhc0PKJAZslsnwmAAO9XNdyhfWbJuWUbpLl7obEDmKNrtWdDdvcLHh4v63hVqGNoTcebFQ2TZRN358P9uVoAxQV0x8OZqS2RLsMNcD5dg+kFIWDvTw2JNYs8HcvzX9CT30LnElC0QvZlekyRAaMETV5DaWMRTDi5tVOTN76pWFCcELA7X8NolYtvHu6LA0CmC0h3IJjugpnqQpDuBrIPYfUfhZM4DG/yNgIaSF6GW1kQgF15FamKFQImiwaW+PWlPJzxG7A/X6DAQ/DfH4I3cAT+dDfcoVb4yXb4I2cQfDoNb+QcnOFTcFa+ICI1EQEKhQjHhWlb0EwDslLFxmwCdU2FatpQahKtm5A0A0VFRkNvQKPhujYohbhJVy7U3RCQy+R4Sobtc8H6GN60MVZ2MUZpyMgeZiQHWcVHVnaRqjoY3LAxUaX9siPY3aU63feutJNDLt49z9ZxO6duNwMdgzRmJRNf6YVnJAtTFZOkxrMlcvWWFJKRwlfjFz44KolaFIAVcviUK9kQsEL6fUuK4C4zRSDjZQv95KdJKcmSRaWkY4LWogbBhLhkYulFdp3y8LxJARz8gWTFBczj02bo52QnjuGDI+kK6e3uNJdIfqzdyDjR65qLOrWtJWoSkcR4bksrQobNHeev7esJsTxJneQdnV6i65v0jA5dTyfWfMCD7fbFN/jvBst9kPXMjC9maqJxXKD5KmmYtWt7/2iw//MXwOy4Uwe71pt/F+39Bn1G0bpT2VnWAAAAAElFTkSuQmCC","width":50,"height":50,"src":"/reponame/static/8e19c9e8f4f6c46b09f8756dd18ec184/8ba1e/logo-square-128.png","srcSet":"/reponame/static/8e19c9e8f4f6c46b09f8756dd18ec184/8ba1e/logo-square-128.png 1x,\\n/reponame/static/8e19c9e8f4f6c46b09f8756dd18ec184/f937a/logo-square-128.png 1.5x,\\n/reponame/static/8e19c9e8f4f6c46b09f8756dd18ec184/71eb7/logo-square-128.png 2x"}}},"site":{"siteMetadata":{"author":"ReproNim Team","social":{"twitter":"kylemathews"}}}}}')},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),i=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),d=a("SlkY"),l=a("CkkT"),u=a("aagx"),c=a("s5qY"),f=l(5),p=l(6),g=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,r){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=r&&d(r,a,e[n],e)}));return r(l.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},ZXdF:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("vOnD").a.button.withConfig({displayName:"button__ButtonWrapper",componentId:"sc-15anfks-0"})(["display:block;border:none;text-align:center;box-sizing:border-box;text-decoration:none;padding:10px 25px;cursor:pointer;text-transform:uppercase;letter-spacing:2px;background:",";color:",";font-size:",";font-weight:",";border-radius:",";margin-top:",";margin-bottom:",";&:hover{box-shadow:inset 0 0 100px 100px rgba(255,255,255,0.25);}"],(function(e){return e.props.background||"black"}),(function(e){return e.props.color||"rgb(255, 255, 255)"}),(function(e){return e.props.fontSize||"15px"}),(function(e){return e.props.fontWeight||"600"}),(function(e){return e.props.radius||"16px"}),(function(e){return e.props.marginTop}),(function(e){return e.props.marginBottom}));t.a=function(e){return i.a.createElement(n,{props:e},e.children)}}}]);
//# sourceMappingURL=69ca9dfa785447e3d8b116b383997bcdc8df623a-241db5f2ef2d813c07a5.js.map