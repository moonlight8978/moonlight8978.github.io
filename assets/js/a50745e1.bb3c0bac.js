(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[2843],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3064:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l=["components"],i={title:"AWS Cloud Trail",code:"N/A"},u={unversionedId:"aws-developer-associated/cloud-trail",id:"aws-developer-associated/cloud-trail",isDocsHomePage:!1,title:"AWS Cloud Trail",description:"Overview",source:"@site/books/aws-developer-associated/cloud-trail.md",sourceDirName:"aws-developer-associated",slug:"/aws-developer-associated/cloud-trail",permalink:"/books/aws-developer-associated/cloud-trail",editUrl:"https://github.com/moonlight8978/moonlight8978.github.io/edit/v2/books/books/aws-developer-associated/cloud-trail.md",version:"current",lastUpdatedAt:1623052541,formattedLastUpdatedAt:"6/7/2021",frontMatter:{title:"AWS Cloud Trail",code:"N/A"},sidebar:"tutorialSidebar",previous:{title:"AWS CloudFront",permalink:"/books/aws-developer-associated/cloud-front"},next:{title:"AWS CodeStar",permalink:"/books/aws-developer-associated/code-star"}},c=[],p={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"overview"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Monitor API calls, or actions to AWS account",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Where - Source IP address"),(0,o.kt)("li",{parentName:"ul"},"When action is taken "),(0,o.kt)("li",{parentName:"ul"},"Who"),(0,o.kt)("li",{parentName:"ul"},"What region, action, resource"))),(0,o.kt)("li",{parentName:"ul"},"Enabled by default, last for 90 days"),(0,o.kt)("li",{parentName:"ul"},"Output to S3, and does not have GUI"),(0,o.kt)("li",{parentName:"ul"},"To analyze the log, use AWS Athena, Athena will",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Create tables from S3 log file"),(0,o.kt)("li",{parentName:"ul"},"Use SQL to query the log")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CloudTrail event can be deliveried to CloudWatch (SNS can be applied)")),(0,o.kt)("h4",{id:"log-data"},"Log data"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Management events",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Turned on by default"),(0,o.kt)("li",{parentName:"ul"},"Events to be logged",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Configuring security"),(0,o.kt)("li",{parentName:"ul"},"Registering devices"),(0,o.kt)("li",{parentName:"ul"},"Configuring rules for routing"),(0,o.kt)("li",{parentName:"ul"},"Setting up logging"))))),(0,o.kt)("li",{parentName:"ul"},"Data events",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"High volume logging, turned off by default"),(0,o.kt)("li",{parentName:"ul"},"Only S3 and Lambda can be tracked")))))}s.isMDXComponent=!0}}]);