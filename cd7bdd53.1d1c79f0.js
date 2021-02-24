(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(158)),i={title:"S3 Tutorial",sidebar_label:"S3"},c={unversionedId:"tutorials/schemes/s3-tutorial",id:"tutorials/schemes/s3-tutorial",isDocsHomePage:!1,title:"S3 Tutorial",description:"This functionality requires an experimental s3 plugin. Read More",source:"@site/../docs/tutorials/schemes/s3-tutorial.md",slug:"/tutorials/schemes/s3-tutorial",permalink:"/docs/tutorials/schemes/s3-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/schemes/s3-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1614154458,sidebar_label:"S3",sidebar:"tutorials",previous:{title:"Remote Tutorial",permalink:"/docs/tutorials/schemes/remote-tutorial"},next:{title:"Stream Tutorial",permalink:"/docs/tutorials/schemes/stream-tutorial"}},s=[{value:"Reading from S3",id:"reading-from-s3",children:[]},{value:"Writing to S3",id:"writing-to-s3",children:[]},{value:"Configuring S3",id:"configuring-s3",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"This functionality requires an experimental ",Object(a.b)("inlineCode",{parentName:"p"},"s3")," plugin. ",Object(a.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More"))),Object(a.b)("p",null,"Frictionless supports reading data from S3 cloud source. You can read file in any format that is available in your bucket."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"! pip install frictionless[s3]\n")),Object(a.b)("h2",{id:"reading-from-s3"},"Reading from S3"),Object(a.b)("p",null,"You can read from this source using ",Object(a.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(a.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path='s3://bucket/table.csv')\nprint(resource.read_rows())\n")),Object(a.b)("p",null,"For reading from a private bucket you need to setup AWS creadentials as it's described in ",Object(a.b)("a",{parentName:"p",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html#environment-variables"},"Boto3 documentation"),"."),Object(a.b)("h2",{id:"writing-to-s3"},"Writing to S3"),Object(a.b)("p",null,"The same is actual for writing:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path='data/table.csv')\nresource.write('s3://bucket/table.csv')\n")),Object(a.b)("h2",{id:"configuring-s3"},"Configuring S3"),Object(a.b)("p",null,"There is a control to configure how Frictionless read files in this storage. For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\nfrom frictionless.plugins.s3 import S3Control\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('table.new.csv', control=controls.S3Control(endpoint_url='<url>'))\n")),Object(a.b)("p",null,"References:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/docs/references/schemes-reference#s3"},"S3 Control"))))}u.isMDXComponent=!0},158:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);