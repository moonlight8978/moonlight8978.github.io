(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[861],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5566:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),i=["components"],o={title:"Elastic Load Balancer",code:"N/A"},s={unversionedId:"aws-developer-associated/elb",id:"aws-developer-associated/elb",isDocsHomePage:!1,title:"Elastic Load Balancer",description:"Overview",source:"@site/books/aws-developer-associated/elb.md",sourceDirName:"aws-developer-associated",slug:"/aws-developer-associated/elb",permalink:"/books/aws-developer-associated/elb",editUrl:"https://github.com/moonlight8978/moonlight8978.github.io/edit/v2/books/books/aws-developer-associated/elb.md",version:"current",lastUpdatedAt:1624004023,formattedLastUpdatedAt:"6/18/2021",frontMatter:{title:"Elastic Load Balancer",code:"N/A"},sidebar:"tutorialSidebar",previous:{title:"Elastic Beanstalk notes",permalink:"/books/aws-developer-associated/elastic-beanstalk"},next:{title:"AWS EventBridge",permalink:"/books/aws-developer-associated/event-bridge"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Rules of Traffic",id:"rules-of-traffic",children:[]},{value:"Application Load Balancer",id:"application-load-balancer",children:[]},{value:"Network Load Balancer",id:"network-load-balancer",children:[]},{value:"Classic Load Balancer",id:"classic-load-balancer",children:[]},{value:"Sticky sessions",id:"sticky-sessions",children:[]},{value:"X-Forwarded-For (XFF) header",id:"x-forwarded-for-xff-header",children:[]},{value:"Cross-Zone Load Balancing",id:"cross-zone-load-balancing",children:[]},{value:"Server Name Indication (SNI)",id:"server-name-indication-sni",children:[]},{value:"Connection draining",id:"connection-draining",children:[]}],c={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Can be physical hardware or virtual software that accepts incoming traffic, and then distribute the traffic to multiple targets"),(0,l.kt)("li",{parentName:"ul"},"3 type of ELB",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Application Load Balancer (HTTP/HTTPS)"),(0,l.kt)("li",{parentName:"ul"},"Network Load Balancer (TCP/UDP)"),(0,l.kt)("li",{parentName:"ul"},"Classic Load Balancer (Legacy)"))),(0,l.kt)("li",{parentName:"ul"},"Can be scaled but not instantaneous \u2192 Contact AWS for a ",(0,l.kt)("em",{parentName:"li"},"warm-up"))),(0,l.kt)("h2",{id:"rules-of-traffic"},"Rules of Traffic"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Listeners"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Listener evaluate any incoming traffic that is matches the Listener's port"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Rules"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Listener invoke rules to decide what to do with the traffic"),(0,l.kt)("li",{parentName:"ul"},"Listener's target is often a Target Group (or redirect to another site)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Target group"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"EC2 instances are registered as targets to a Target Group")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Target group includes:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Machines which can be matched using",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Instance (AWS-provisioned machines)"),(0,l.kt)("li",{parentName:"ul"},"IP address (on-premise machines)"),(0,l.kt)("li",{parentName:"ul"},"Lambda function"))),(0,l.kt)("li",{parentName:"ul"},"Port on each machine (use for traffic forwarding and healthcheck)"),(0,l.kt)("li",{parentName:"ul"},"Health check rule (can use path without ALB rule path prefix): perform on each instance",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ALB rules: ",(0,l.kt)("inlineCode",{parentName:"li"},"/devices*")," forward to target group"),(0,l.kt)("li",{parentName:"ul"},"Target group healthcheck: ",(0,l.kt)("inlineCode",{parentName:"li"},"/")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Healthcheck fails will not affect instance state, ELB will not route the traffic to that instance")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For CLB, traffic is sent to Listeners, then it forwards the traffic to any registered EC2 instances. No rules is applied"))),(0,l.kt)("h2",{id:"application-load-balancer"},"Application Load Balancer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"To load balance HTTP/HTTPS traffic (Layer 7 load balancer)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create ALB:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Type: internal / or public (internet facing)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Listener: Ports/Protocol which ALB listens to"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Can listen to multiple ports"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Availability zones")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Routing: ",(0,l.kt)("inlineCode",{parentName:"p"},"@ref")," ","[Target group]","(#Target group)")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Route tables support:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"URL (path)"),(0,l.kt)("li",{parentName:"ul"},"Hostname (",(0,l.kt)("inlineCode",{parentName:"li"},"HOST")," header)"),(0,l.kt)("li",{parentName:"ul"},"Query params"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Map dynamic port (ECS)"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://images.viblo.asia/6b35f0c0-3ce6-46c1-9d9d-b3fd4ffe8fd8.jpg",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Rules: guide ALB to route traffic to correct resources"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Ordering - Matcher - Processor",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Matcher: by header, by path, ..."),(0,l.kt)("li",{parentName:"ul"},"Processor:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Forwarding: to some target groups"),(0,l.kt)("li",{parentName:"ul"},"Redirect: redirect to another url"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Headers:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Forwarded-For"),": real request IP"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Forwarded-Port")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"X-Forwarded-Proto"),": protocol talks to load balancer")))),(0,l.kt)("h2",{id:"network-load-balancer"},"Network Load Balancer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Handle TCP/UDP traffic (Layer 4 LB)"),(0,l.kt)("li",{parentName:"ul"},"Cross-zone Load Balancing"),(0,l.kt)("li",{parentName:"ul"},"Suitable for Multiplayer Game, or when network performance is critical")),(0,l.kt)("h2",{id:"classic-load-balancer"},"Classic Load Balancer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Can balance HTTP/HTTPS (Layer 7) or TCP traffic (Layer 4) (not at the same time)"),(0,l.kt)("li",{parentName:"ul"},"Cross-zone Load Balancing"),(0,l.kt)("li",{parentName:"ul"},"504 response is returned if the underlying application is not responding"),(0,l.kt)("li",{parentName:"ul"},"Deprecated")),(0,l.kt)("h2",{id:"sticky-sessions"},"Sticky sessions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use cookie (Layer 7)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Advanced load balancing method that allows us to bind a user's session to a specific EC2 instance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ensure all requests from that session are sent to the same instance")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Typically utilized with a CLB")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Can be enabled for ALB, but can only be set on a Target Group instead of individual EC2 instances")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Useful when specific information is only stored locally on a single instance (stateful app)"))),(0,l.kt)("h2",{id:"x-forwarded-for-xff-header"},"X-Forwarded-For (XFF) header"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Represent user IPv4 address")),(0,l.kt)("h2",{id:"cross-zone-load-balancing"},"Cross-Zone Load Balancing"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Normally, the load balancer route traffic to the targets in the same AZ"),(0,l.kt)("li",{parentName:"ul"},"At least 2 subnet (only 1 subnet per AZ) => 2 AZ must be choosen to increase the availability of the LB"),(0,l.kt)("li",{parentName:"ul"},"When Cross-Zone Load Balancing is enabled (on CLB or NLB), the traffic will be distrubuted evenly across all AZ")),(0,l.kt)("h2",{id:"server-name-indication-sni"},"Server Name Indication (SNI)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Solve the problem of loading multiple certificates onto single webserver"),(0,l.kt)("li",{parentName:"ul"},"SNI is a protocol, requires the client to indicate the hostname of the target server in the initial SSL handshake. The server will find the correct certificate or return the default one."),(0,l.kt)("li",{parentName:"ul"},"Only supported by ALB and NLB")),(0,l.kt)("h2",{id:"connection-draining"},"Connection draining"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Naming:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CLB: connection draining"),(0,l.kt)("li",{parentName:"ul"},"ALB/NLB: deregistration delay"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Is the time to complete the in-flight to the target before being deregistered"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default 300s"),(0,l.kt)("li",{parentName:"ul"},"ALB will stop sending request to the instances which in draining mode")))))}u.isMDXComponent=!0}}]);