(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(146),c=a(156),i=a(154);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(s.a,{to:"/"},"Go back to the homepage"))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),s=a(4),c=a.n(s),i=a(33),l=a.n(i);a.d(t,"a",function(){return l.a});a(148);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},148:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},152:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),s=a(4),c=a.n(s),i=a(56),l=a(2),o=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},154:function(e,t,a){"use strict";var n=a(155),r=a(0),s=a.n(r),c=a(4),i=a.n(c),l=a(171),o=a.n(l);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title,l=n.data.site,m=t||l.siteMetadata.description;return s.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:i},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=m},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},156:function(e,t,a){"use strict";var n=a(151),r=a(0),s=a.n(r),c=a(4),i=a.n(c),l=a(146),o=function(e){var t=e.siteTitle;return s.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},s.a.createElement("h1",{style:{margin:0}},s.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};o.propTypes={siteTitle:i.a.string},o.defaultProps={siteTitle:""};var m=o,u=a(163),p=a(164),d=a(167),g=a.n(d),f=(a(165),a(166),function(e){var t=e.children;return s.a.createElement(l.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},s.a.createElement("main",null,t),s.a.createElement(p.a,{icon:u.a}),";",s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"row"},s.a.createElement("a",{href:"https://www.gatsbyjs.org/docs/",className:"col"},s.a.createElement("p",{className:"icon text"},s.a.createElement(g.a,null)),s.a.createElement("p",{className:"text"},"Docs")),s.a.createElement("a",{href:"https://www.gatsbyjs.org/tutorial/",className:"col"},s.a.createElement("p",{className:"icon text"},s.a.createElement(g.a,null)),s.a.createElement("p",{className:"text"},"Tutorial")),s.a.createElement("a",{href:"https://www.gatsbyjs.org/plugins/",className:"col"},s.a.createElement("p",{className:"icon text"},s.a.createElement(g.a,null)),s.a.createElement("p",{className:"text"},"plugins")),s.a.createElement("a",{href:"https://www.gatsbyjs.org/blog/",className:"col"},s.a.createElement("p",{className:"icon text"},s.a.createElement(g.a,null)),s.a.createElement("p",{className:"text"},"Blog")),s.a.createElement("a",{href:"https://www.gatsbyjs.org/showcase/",className:"col"},s.a.createElement("p",{className:"icon text"},s.a.createElement(g.a,null)),s.a.createElement("p",{className:"text"},"Showcase"))))))},data:n})});f.propTypes={children:i.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-page-2-js-30ff1b22bfc467e56722.js.map