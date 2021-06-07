(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[7648],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),k=n,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||i;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7916:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),o=["components"],l={title:"AWS KMS",code:"N/A"},s={unversionedId:"aws-developer-associated/kms",id:"aws-developer-associated/kms",isDocsHomePage:!1,title:"AWS KMS",description:"Overview",source:"@site/books/aws-developer-associated/kms.md",sourceDirName:"aws-developer-associated",slug:"/aws-developer-associated/kms",permalink:"/books/aws-developer-associated/kms",editUrl:"https://github.com/moonlight8978/moonlight8978.github.io/edit/v2/books/books/aws-developer-associated/kms.md",version:"current",lastUpdatedAt:1623052541,formattedLastUpdatedAt:"6/7/2021",frontMatter:{title:"AWS KMS",code:"N/A"},sidebar:"tutorialSidebar",previous:{title:"AWS Kinesis",permalink:"/books/aws-developer-associated/kinesis"},next:{title:"Lambda",permalink:"/books/aws-developer-associated/lambda"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Master key",id:"master-key",children:[]},{value:"CLI",id:"cli",children:[]},{value:"Practical notes",id:"practical-notes",children:[]}],c={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create, control, and rotate encription keys")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Multi-tenant (cho nhi\u1ec1u ng\u01b0\u1eddi thu\xea c\xf9ng 1 thi\u1ebft b\u1ecb) ",(0,i.kt)("strong",{parentName:"p"},"Hardware Security Module")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hardware that is specialized for storing encryption keys"),(0,i.kt)("li",{parentName:"ul"},"Stores keys in-memory, so the keys are never written to disk"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CloudHSM: managed, full-control HSM"))),(0,i.kt)("h2",{id:"master-key"},"Master key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Master key is used to create (ecrypt) data key"),(0,i.kt)("li",{parentName:"ul"},"Data key is used to encrypt data"),(0,i.kt)("li",{parentName:"ul"},"Customer master key is a logical representation of a master key (real key stored in HSM), the CMK includes metadata, such as:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The key ID"),(0,i.kt)("li",{parentName:"ul"},"Creation date"),(0,i.kt)("li",{parentName:"ul"},"Description"),(0,i.kt)("li",{parentName:"ul"},"and Key state"))),(0,i.kt)("li",{parentName:"ul"},"AWS KMS supports symmetric and asymmetric CMKs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Symmetric Key: Use one key",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AES-256 key"))),(0,i.kt)("li",{parentName:"ul"},"Asymmetric Key: Use two keys (eg. public and private key)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"SSH key")))))),(0,i.kt)("h2",{id:"cli"},"CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'aws kms create-key\n# -> Key ID\naws kms create-alias --target-key-id=xxx --alias-name=alias/xxx\necho -n "123456" | openssl base64 | aws kms encrypt --key-id=alias/xxx --plaintext\n# -> Ciphertext\naws kms decrypt --ciphertext-blob=xxx --key-id=alias/xxx\naws kms enable-key-roration\n')),(0,i.kt)("h2",{id:"practical-notes"},"Practical notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data must be base64 encoded")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Alias must have ",(0,i.kt)("inlineCode",{parentName:"p"},"alias/xxx")," format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Automatic key rotation: "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cannot perform on a CMK in a different AWS account"),(0,i.kt)("li",{parentName:"ul"},"When key is rotated, AWS keep previous versions of key, to decrypt data encrypted under old key version. New data are encrypted using new key version. So there is no need to re-encrypt\u02c7 ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/kms/faqs/"},"link")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ciphertext created by ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypt")," command is called Data key"))))}u.isMDXComponent=!0}}]);