(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),i=a(146),n=a(156),l=a(276),o=a(277),c=a.n(o),d=function(){return s.a.createElement(i.b,{query:"2011440971",render:function(e){return s.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:l})},u=a(154);t.default=function(){return s.a.createElement(n.a,null,s.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react"]}),s.a.createElement("h1",null,"Hi people"),s.a.createElement("p",null,"Welcome to your new Gatsby site."),s.a.createElement("p",null,"Now go build something great."),s.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},s.a.createElement(d,null)),s.a.createElement(i.a,{to:"/page-2/"},"Go to page 2"))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),s=a.n(r),i=a(4),n=a.n(i),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(148);var c=s.a.createContext({}),d=function(e){return s.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},148:function(e,t,a){var r;e.exports=(r=a(152))&&r.default||r},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},152:function(e,t,a){"use strict";a.r(t);a(35);var r=a(0),s=a.n(r),i=a(4),n=a.n(i),l=a(56),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,a){"use strict";var r=a(155),s=a(0),i=a.n(s),n=a(4),l=a.n(n),o=a(171),c=a.n(o);function d(e){var t=e.description,a=e.lang,s=e.meta,n=e.keywords,l=e.title,o=r.data.site,d=t||o.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(s)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},156:function(e,t,a){"use strict";var r=a(151),s=a(0),i=a.n(s),n=a(4),l=a.n(n),o=a(146),c=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var d=c,u=(a(163),a(164),a(167)),f=a.n(u),p=(a(165),a(166),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement(f.a,null),i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"row"},i.a.createElement("a",{href:"https://www.gatsbyjs.org/docs/",className:"col"},i.a.createElement("p",{className:"icon text"},i.a.createElement(f.a,null)),i.a.createElement("p",{className:"text"},"Docs")),i.a.createElement("a",{href:"https://www.gatsbyjs.org/tutorial/",className:"col"},i.a.createElement("p",{className:"icon text"},i.a.createElement(f.a,null)),i.a.createElement("p",{className:"text"},"Tutorial")),i.a.createElement("a",{href:"https://www.gatsbyjs.org/plugins/",className:"col"},i.a.createElement("p",{className:"icon text"},i.a.createElement(f.a,null)),i.a.createElement("p",{className:"text"},"plugins")),i.a.createElement("a",{href:"https://www.gatsbyjs.org/blog/",className:"col"},i.a.createElement("p",{className:"icon text"},i.a.createElement(f.a,null)),i.a.createElement("p",{className:"text"},"Blog")),i.a.createElement("a",{href:"https://www.gatsbyjs.org/showcase/",className:"col"},i.a.createElement("p",{className:"icon text"},i.a.createElement(f.a,null)),i.a.createElement("p",{className:"text"},"Showcase"))))))},data:r})});p.propTypes={children:l.a.node.isRequired};t.a=p},276:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e1fed/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/08283/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59257/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/26d9e/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/a3fa0/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},277:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var s,i=r(a(7)),n=r(a(36)),l=r(a(76)),o=r(a(74)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g=new WeakMap;var m=function(e,t){var a=(void 0===s&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=new window.IntersectionObserver(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"})),s);return a&&(a.observe(e),g.set(e,t)),function(){a.unobserve(e),g.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",s=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+s+t+n+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,s=e.src,i=e.style,n=e.onLoad,d=e.onError,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:s},u,{onLoad:n,onError:d,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,s=!1,i=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,s=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,s=!1);var o=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:s,fadeIn:i,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:t.imageRef.current.currentSrc.length>0})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,s=e.style,i=void 0===s?{}:s,n=e.imgStyle,l=void 0===n?{}:n,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,m=e.fixed,y=e.backgroundColor,w=e.Tag,E=e.itemProp,S=this.state.imgLoaded||!1===this.state.fadeIn,v=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,o.default)({opacity:S?1:0,transition:v?"opacity 0.5s":"none"},l),R="boolean"==typeof y?"lightgray":y,x={transitionDelay:"0.5s"},L=(0,o.default)({opacity:this.state.imgLoaded?0:1},v&&x,l,f),I={title:t,alt:this.state.isVisible?"":a,style:L,className:p};if(g){var A=g;return c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),R&&c.default.createElement(w,{title:t,style:(0,o.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},v&&x)}),A.base64&&c.default.createElement(b,(0,o.default)({src:A.base64},I)),A.tracedSVG&&c.default.createElement(b,(0,o.default)({src:A.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,A.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t},A))}}))}if(m){var z=m,T=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete T.display,c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},R&&c.default.createElement(w,{title:t,style:(0,o.default)({backgroundColor:R,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},v&&x)}),z.base64&&c.default.createElement(b,(0,o.default)({src:z.base64},I)),z.tracedSVG&&c.default.createElement(b,(0,o.default)({src:z.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement(b,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t},z))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:w,sizes:E,fixed:w,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var S=y;t.default=S}}]);
//# sourceMappingURL=component---src-pages-index-js-9fe767863760a391e211.js.map