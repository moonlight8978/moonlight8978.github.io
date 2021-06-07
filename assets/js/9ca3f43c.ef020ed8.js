(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[5994],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9104:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=["components"],l={title:"AWS Step Functions",code:"N/A"},p={unversionedId:"aws-developer-associated/step-functions",id:"aws-developer-associated/step-functions",isDocsHomePage:!1,title:"AWS Step Functions",description:"Overview",source:"@site/books/aws-developer-associated/step-functions.md",sourceDirName:"aws-developer-associated",slug:"/aws-developer-associated/step-functions",permalink:"/books/aws-developer-associated/step-functions",editUrl:"https://github.com/moonlight8978/moonlight8978.github.io/edit/v2/books/books/aws-developer-associated/step-functions.md",version:"current",lastUpdatedAt:1623052541,formattedLastUpdatedAt:"6/7/2021",frontMatter:{title:"AWS Step Functions",code:"N/A"},sidebar:"tutorialSidebar",previous:{title:"Amazon SQS",permalink:"/books/aws-developer-associated/sqs"},next:{title:"AWS Virtual Private Cloud",permalink:"/books/aws-developer-associated/vpc"}},s=[],u={toc:s};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"overview"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Coordinate multiple AWS services into a serverless workflow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"State machine model")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Types"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Standard: general purpose - Long-duration workloads"),(0,o.kt)("li",{parentName:"ul"},"Express: for streaming data - Short-duration, high-event-rate workloads"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Steps can be executed in parallel"))),(0,o.kt)("h4",{id:"use-cases"},"Use cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"U1: Manage a batch job"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Submit batch job (AWS Batch)"),(0,o.kt)("p",{parentName:"li"},"2.1.a. Notify success (SNS)"),(0,o.kt)("p",{parentName:"li"},"2.1.b. Notify failure (SNS)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"End")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"U2: Transfer data records"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Seed the DB with users info")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For loop"),(0,o.kt)("p",{parentName:"li"},"3.1. Read next record"),(0,o.kt)("p",{parentName:"li"},"3.2. Send message to SQS")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Notify (SNS)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"End"))))),(0,o.kt)("h4",{id:"states"},"States"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pass State: dummy state (without performing work). Pass its input to its output")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Task State: represent a single unit of work performed by a state machine"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Lambda: Resource is pass as ARN"),(0,o.kt)("li",{parentName:"ul"},"Supported AWS Service: ARN, and parameters"),(0,o.kt)("li",{parentName:"ul"},"Activity: worker hosted on anywhere (EC2, ECS, ...)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The workflow waits for an activity worker poll for a task (Activity continuously pulls waiting for a Step Function)"))),(0,o.kt)("li",{parentName:"ul"},"Choice State: adds branching logic"),(0,o.kt)("li",{parentName:"ul"},"Wait State: delays"),(0,o.kt)("li",{parentName:"ul"},"Succeed State"),(0,o.kt)("li",{parentName:"ul"},"Fail State"),(0,o.kt)("li",{parentName:"ul"},"Parallel State"),(0,o.kt)("li",{parentName:"ul"},"Map State: complicated, iterate over an array")))),(0,o.kt)("h4",{id:"practical-notes"},"Practical notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use other service to invoke Step Function (Event Bridge)")))}c.isMDXComponent=!0}}]);