(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[7678],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),k=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=k(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=k(t),h=i,d=u["".concat(o,".").concat(h)]||u[h]||m[h]||l;return t?a.createElement(d,r(r({ref:n},c),{},{components:t})):a.createElement(d,r({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var k=2;k<l;k++)r[k]=t[k];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4568:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return k},default:function(){return m}});var a=t(2122),i=t(9756),l=(t(7294),t(3905)),r=["components"],p={slug:"toi-uu-menh-de-where-mysql",title:"T\u1ed1i \u01b0u m\u1ec7nh \u0111\u1ec1 WHERE (MySQL)",author:"L\xea S\u0129 B\xedch",author_title:"Ruby on Rails/React Developer",author_url:"https://github.com/moonlight8978",tags:["mysql","database","optimization"]},o={permalink:"/blog/toi-uu-menh-de-where-mysql",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2019-11-14-optimize-mysql-where-statement.md",source:"@site/blog/2019-11-14-optimize-mysql-where-statement.md",title:"T\u1ed1i \u01b0u m\u1ec7nh \u0111\u1ec1 WHERE (MySQL)",description:"C\xf3 2 h\u01b0\u1edbng t\u1ed1i \u01b0u Database ch\xednh:",date:"2019-11-14T00:00:00.000Z",formattedDate:"November 14, 2019",tags:[{label:"mysql",permalink:"/blog/tags/mysql"},{label:"database",permalink:"/blog/tags/database"},{label:"optimization",permalink:"/blog/tags/optimization"}],readingTime:8.075,truncated:!1,prevItem:{title:"Gi\u1edbi thi\u1ec7u v\u1ec1 Kubernetes",permalink:"/blog/gioi-thieu-ve-kubernetes"},nextItem:{title:"C\xf9ng t\xecm hi\u1ec3u v\u1ec1 ActionText trong Rails 6",permalink:"/blog/cung-tim-hieu-ve-actiontext-trong-rails-6"}},k=[{value:"1. T\u1ed1i \u01b0u t\u1ea7ng DB",id:"1-t\u1ed1i-\u01b0u-t\u1ea7ng-db",children:[]},{value:"2. T\u1ed1i \u01b0u ph\u1ea7n c\u1ee9ng",id:"2-t\u1ed1i-\u01b0u-ph\u1ea7n-c\u1ee9ng",children:[]},{value:"3.1. Single-part index",id:"31-single-part-index",children:[]},{value:"3.2. Multiple-part index",id:"32-multiple-part-index",children:[{value:"Index Dive",id:"index-dive",children:[]}]}],c={toc:k};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"C\xf3 2 h\u01b0\u1edbng t\u1ed1i \u01b0u Database ch\xednh:"),(0,l.kt)("h3",{id:"1-t\u1ed1i-\u01b0u-t\u1ea7ng-db"},"1. T\u1ed1i \u01b0u t\u1ea7ng DB"),(0,l.kt)("h5",{id:"c\u1ea5u-tr\xfac-db"},"C\u1ea5u tr\xfac DB:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0110\u1ecdc nhi\u1ec1u => \xedt table, nhi\u1ec1u column"),(0,l.kt)("li",{parentName:"ul"},"Ghi nhi\u1ec1u => nhi\u1ec1u table, \xedt column")),(0,l.kt)("h5",{id:"index-\u0111\xe3-\u1ed5n-ch\u01b0a"},"Index \u0111\xe3 \u1ed5n ch\u01b0a?"),(0,l.kt)("h5",{id:"engine-cho-table"},"Engine cho table"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MyISAM: Table-locking, ph\xf9 h\u1ee3p v\u1edbi table \u0111\u1ecdc nhi\u1ec1u, ghi \xedt"),(0,l.kt)("li",{parentName:"ul"},"InnoDB: Row-locking, \u0111\xe1p \u1ee9ng \u0111\u01b0\u1ee3c vi\u1ec7c ghi nhi\u1ec1u.")),(0,l.kt)("h5",{id:"caching"},"Caching"),(0,l.kt)("h3",{id:"2-t\u1ed1i-\u01b0u-ph\u1ea7n-c\u1ee9ng"},"2. T\u1ed1i \u01b0u ph\u1ea7n c\u1ee9ng"),(0,l.kt)("h5",{id:"disk-seek"},"Disk seek:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Th\u1eddi gian HDD quay khi t\xecm d\u1eef li\u1ec7u, SDD kh\xf4ng c\u1ea7n quay \u0111\u1ec3 t\xecm d\u1eef li\u1ec7u."),(0,l.kt)("li",{parentName:"ul"},"Ph\xe2n t\xe1n d\u1eef li\u1ec7u \u0111\u1ec3 t\xecm tr\xean nhi\u1ec1u \u1ed5 \u0111\u0129a c\xf9ng l\xfac.")),(0,l.kt)("h5",{id:"disk-rw"},"Disk R/W:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Khi t\xecm \u0111\u01b0\u1ee3c d\u1eef li\u1ec7u th\xec s\u1ebd c\u1ea7n \u0111\u1ecdc d\u1eef li\u1ec7u v\xe0o RAM."),(0,l.kt)("li",{parentName:"ul"},"Ph\xe2n t\xe1n \u0111\u1ec3 \u0111\u1ecdc/ghi nhi\u1ec1u tr\xean nhi\u1ec1u \u1ed5 \u0111\u0129a c\xf9ng l\xfac.")),(0,l.kt)("h5",{id:"cpu-cycle"},"CPU cycle"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Khi \u0111\xe3 load \u0111\u01b0\u1ee3c v\xe0o RAM r\u1ed3i, th\xec s\u1ebd t\u1edbi CPU x\u1eed l\xfd nh\u1eefng d\u1eef li\u1ec7u \u0111\xf3.")),(0,l.kt)("h5",{id:"memory-bandwidth"},"Memory bandwidth:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Khi CPU c\u1ea7n nhi\u1ec1u d\u1eef li\u1ec7u, nh\u01b0ng cache l\u1ea1i kh\xf4ng \u0111\u1ee7, s\u1ebd c\u1ea7n \u0111\u1ebfn memory bandwith.")),(0,l.kt)("h1",{id:"2-t\u1ed1i-\u01b0u-c\xe2u-l\u1ec7nh-where"},"2. T\u1ed1i \u01b0u c\xe2u l\u1ec7nh WHERE"),(0,l.kt)("h5",{id:"ngo\xe0i-select-th\xec-c\xf2n-\xe1p-d\u1ee5ng-\u0111\u01b0\u1ee3c-cho-c\u1ea3-update-delete-vv"},"Ngo\xe0i SELECT th\xec c\xf2n \xe1p d\u1ee5ng \u0111\u01b0\u1ee3c cho c\u1ea3 UPDATE, DELETE, v.v."),(0,l.kt)("h5",{id:"mysql-s\u1ebd-t\u1ef1-\u0111\u1ed9ng-t\u1ed1i-\u01b0u-nh\u1eefng-tr\u01b0\u1eddng-h\u1ee3p-sau"},"MySQL s\u1ebd t\u1ef1 \u0111\u1ed9ng t\u1ed1i \u01b0u nh\u1eefng tr\u01b0\u1eddng h\u1ee3p sau:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Lo\u1ea1i b\u1ecf nh\u1eefng d\u1ea5u ngo\u1eb7c th\u1eeba"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"((a AND b) AND c OR (((a AND b) AND (c AND d))))\n=> (a AND b AND c) OR (a AND b AND c AND d)\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Thay th\u1ebf bi\u1ebfn b\u1edfi h\u1eb1ng s\u1ed1"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"(a<b AND b=c) AND a=5\n=> b>5 AND b=c AND a=5\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Lo\u1ea1i b\u1ecf nh\u1eefng \u0111i\u1ec1u ki\u1ec7n h\u1eb1ng"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"(b>=5 AND b=5) OR (b=6 AND 5=5) OR (b=7 AND 5=6)\n=> b=5 OR b=6\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Bi\u1ec3u th\u1ee9c h\u1eb1ng (constant expression) s\u1ebd ch\u1ec9 \u0111\u01b0\u1ee3c t\xednh to\xe1n 1 l\u1ea7n duy nh\u1ea5t."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM t\nWHERE id = POW(1,2);\n\nSELECT *\nFROM t\nWHERE id = FLOOR(1 + RAND() * 49);\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"HAVING")," s\u1ebd \u0111\u01b0\u1ee3c g\u1ed9p v\u1edbi ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," khi kh\xf4ng s\u1eed d\u1ee5ng ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," hay nh\u1eefng function nh\u01b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"COUNT()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MIN()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MAX()"),", ...")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u0110\u1ed1i v\u1edbi ",(0,l.kt)("strong",{parentName:"p"},"MyISAM")," hay ",(0,l.kt)("strong",{parentName:"p"},"MEMORY")," table, k\u1ebft qu\u1ea3 c\u1ee7a ",(0,l.kt)("inlineCode",{parentName:"p"},"COUNT(*)")," (kh\xf4ng c\xf3 \u0111i\u1ec1u ki\u1ec7n ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," s\u1ebd \u0111\u01b0\u1ee3c l\u1ea5y tr\u1ef1c ti\u1ebfp t\u1eeb ",(0,l.kt)("strong",{parentName:"p"},"information_schema"),"."))),(0,l.kt)("p",null,"=> Ta c\xf3 th\u1ec3 ng\u1eebng vi\u1ec7c t\u1ed1i \u01b0u l\u1ea1i, v\xe0 vi\u1ebft nh\u1eefng c\xe2u l\u1ec7nh SQL d\u1ec5 hi\u1ec3u, d\u1ec5 b\u1ea3o tr\xec."),(0,l.kt)("h1",{id:"3-range-optimization"},"3. Range optimization"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range")," l\xe0 m\u1ed9t ",(0,l.kt)("strong",{parentName:"li"},"access method")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range")," s\u1eed d\u1ee5ng index \u0111\u1ec3 l\u1ea5y ra nh\u1eefng subset c\u1ee7a k\u1ebft qu\u1ea3 cu\u1ed1i c\xf9ng."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"range")," support c\u1ea3 single-part l\u1eabn multiple-part index.")),(0,l.kt)("h4",{id:"nh\u1eefng-tr\u01b0\u1eddng-h\u1ee3p-sau-mysql-s\u1ebd-coi-nh\u01b0-l\xe0-range-condition"},"Nh\u1eefng tr\u01b0\u1eddng h\u1ee3p sau, MySQL s\u1ebd coi nh\u01b0 l\xe0 ",(0,l.kt)("inlineCode",{parentName:"h4"},"range condition"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"M\u1ec7nh \u0111\u1ec1 ",(0,l.kt)("inlineCode",{parentName:"p"},"WHERE")," \u0111\u1ed1i v\u1edbi nh\u1eefng tr\u01b0\u1eddng \u0111\u01b0\u1ee3c \u0111\xe1nh index (s\u1eed d\u1ee5ng BTree ho\u1eb7c Hash), m\xe0 s\u1eed d\u1ee5ng nh\u1eefng to\xe1n t\u1eed sau: ",(0,l.kt)("inlineCode",{parentName:"p"},"="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<=>"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"IN()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"IS NULL"),", hay ",(0,l.kt)("inlineCode",{parentName:"p"},"IS NOT NULL")),(0,l.kt)("p",{parentName:"li"},"\u0110\u1ed1i v\u1edbi, BTree, ngo\xe0i nh\u1eefng ph\xe9p to\xe1n tr\xean, c\xf2n support th\xeam ",(0,l.kt)("inlineCode",{parentName:"p"},">"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,l.kt)("inlineCode",{parentName:"p"},">="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"BETWEEN"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"!="),", hay ",(0,l.kt)("inlineCode",{parentName:"p"},"<>")," v\u1edbi ",(0,l.kt)("strong",{parentName:"p"},"constant value"),", ho\u1eb7c ",(0,l.kt)("inlineCode",{parentName:"p"},"LIKE")," c\u0169ng l\xe0 range condition. Ch\xfa \xfd khi s\u1eed d\u1ee5ng ",(0,l.kt)("inlineCode",{parentName:"p"},"LIKE"),", v\u1ebf ph\u1ea3i ph\u1ea3i l\xe0 1 string h\u1eb1ng, v\xe0 kh\xf4ng b\u1eaft \u0111\u1ea7u b\u1edfi wildcard nh\u01b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"%")," hay ",(0,l.kt)("inlineCode",{parentName:"p"},"_"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM t1\nWHERE key_col LIKE 'ab%';\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"K\u1ebft h\u1ee3p nhi\u1ec1u range condition s\u1eed d\u1ee5ng ",(0,l.kt)("inlineCode",{parentName:"p"},"AND")," ho\u1eb7c ",(0,l.kt)("inlineCode",{parentName:"p"},"OR"),", ta v\u1eabn thu \u0111\u01b0\u1ee3c range condition."))),(0,l.kt)("h4",{id:"constant-value"},"Constant value"),(0,l.kt)("h5",{id:"l\xe0-gi\xe1-tr\u1ecb-\u0111\u01b0\u1ee3c-t\xednh-to\xe1n-tr\u01b0\u1edbc-th\u1eddi-\u0111i\u1ec3m-runtime-khi-runtime-gi\xe1-tr\u1ecb-c\u1ee7a-n\xf3-s\u1ebd-kh\xf4ng-thay-\u0111\u1ed5i"},"L\xe0 gi\xe1 tr\u1ecb \u0111\u01b0\u1ee3c t\xednh to\xe1n tr\u01b0\u1edbc th\u1eddi \u0111i\u1ec3m runtime, khi runtime, gi\xe1 tr\u1ecb c\u1ee7a n\xf3 s\u1ebd kh\xf4ng thay \u0111\u1ed5i"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"H\u1eb1ng s\u1ed1 truy\u1ec1n th\u1eb3ng v\xe0o tham s\u1ed1 c\u1ee7a c\xe2u truy v\u1ea5n"),(0,l.kt)("li",{parentName:"ul"},"M\u1ed9t c\u1ed9t c\u1ee7a ",(0,l.kt)("inlineCode",{parentName:"li"},"const")," hay ",(0,l.kt)("inlineCode",{parentName:"li"},"system")," table",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"const")," table l\xe0 b\u1ea3ng ch\u1ec9 c\xf3 t\u1ed1i \u0111a 1 row (hay 0 ho\u1eb7c 1 row)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"const")," table c\xf3 th\u1ec3 l\xe0 k\u1ebft qu\u1ea3 c\u1ee7a 1 c\xe2u truy v\u1ea5n ch\u1ee9a m\u1ec7nh \u0111\u1ec1 ",(0,l.kt)("inlineCode",{parentName:"li"},"WHERE")," \u0111\u1ed1i v\u1edbi 1 field unique, not null, c\xf3 d\u1ea1ng ",(0,l.kt)("inlineCode",{parentName:"li"},"column = constant"),". Truy v\u1ea5n n\xe0y lu\xf4n tr\u1ea3 v\u1ec1 1 k\u1ebft qu\u1ea3 duy nh\u1ea5t."),(0,l.kt)("li",{parentName:"ul"},"table c\xf3 1 row th\xec g\u1ecdi l\xe0 ",(0,l.kt)("inlineCode",{parentName:"li"},"system")," table")))),(0,l.kt)("h4",{id:"btree-hash-index"},"BTree, Hash index"),(0,l.kt)("h5",{id:"btree"},"BTree:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Self-balancing tree, c\u1ea5u tr\xfac d\u1ea1ng c\xe2y, c\xf3 th\u1ec3 t\u1ef1 c\xe2n b\u1eb1ng nh\u1eb1m gi\u1eef chi\u1ec1u cao c\u1ee7a c\xe2y th\u1ea5p nh\u1ea5t c\xf3 th\u1ec3.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Tr\xe1nh nh\u1ea7m v\u1edbi Binary Tree (c\xe2y nh\u1ecb ph\xe2n)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Th\u1eddi gian t\xecm ki\u1ebfm O(logn)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ph\xf9 h\u1ee3p v\u1edbi \u0111a d\u1ea1ng c\xe1c ph\xe9p to\xe1n: ",(0,l.kt)("inlineCode",{parentName:"p"},"="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<=>"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"IN()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"IS NULL"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"IS NOT NULL"),", ",(0,l.kt)("inlineCode",{parentName:"p"},">"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,l.kt)("inlineCode",{parentName:"p"},">="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"BETWEEN"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"!="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<>"),", hay th\u1eadm ch\xed c\u1ea3 ",(0,l.kt)("inlineCode",{parentName:"p"},"LIKE")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/cb15fccfa6fafa1cea762a58c1dd51ad8f32fe2c/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a70453453457a374370727a4664375a77772d617866512e6a706567",alt:null})),(0,l.kt)("h5",{id:"hash"},"Hash:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"B\u1ea3ng b\u0103m, l\xe0 c\u1ea5u tr\xfac d\u1eef li\u1ec7u l\u01b0u theo key-value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"T\xecm ki\u1ebfm theo key r\u1ea5t nhanh - O(1)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Ph\xf9 h\u1ee3p v\u1edbi nh\u1eefng ph\xe9p to\xe1n: ",(0,l.kt)("inlineCode",{parentName:"p"},"="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<=>"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"IN()"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"IS NULL"),", hay ",(0,l.kt)("inlineCode",{parentName:"p"},"IS NOT NULL"),"."))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/b1df2be12b1c8779b7cf941d88d1cc8e2178753f/68747470733a2f2f696d616765732e7669626c6f2e617369612f30356236313638372d386230342d346536352d613834642d3361353363343035386437642e6a7067",alt:null})),(0,l.kt)("h2",{id:"31-single-part-index"},"3.1. Single-part index"),(0,l.kt)("h5",{id:"single-part-index-l\xe0-nh\u1eefng-index-\u0111\u01b0\u1ee3c-\u0111\xe1nh-ri\xeang-l\u1ebb-cho-1-field"},"Single-part index l\xe0 nh\u1eefng index \u0111\u01b0\u1ee3c \u0111\xe1nh ri\xeang l\u1ebb cho 1 field."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX index_name ON t1 (key_col);\n")),(0,l.kt)("p",null,"Khi th\u1ef1c hi\u1ec7n truy v\u1ea5n v\u1edbi nh\u1eefng index lo\u1ea1i n\xe0y, v\u1edbi m\u1ed7i possible key (c\xf3 th\u1ec3 s\u1eed d\u1ee5ng ",(0,l.kt)("inlineCode",{parentName:"p"},"EXPLAIN")," \u0111\u1ec3 check), MySQL s\u1ebd ti\u1ebfn h\xe0nh extract range condition. Nh\u1eefng \u0111i\u1ec1u ki\u1ec7n kh\xf4ng th\u1ec3 c\u1ea5u th\xe0nh range condition s\u1ebd b\u1ecb lo\u1ea1i b\u1ecf, nh\u1eefng \u0111i\u1ec1u ki\u1ec7n c\xf3 th\u1ec3 b\u1ecb overlap s\u1ebd \u0111\u01b0\u1ee3c g\u1ed9p v\u1edbi nhau."),(0,l.kt)("p",null,"Sau khi extract, MySQL s\u1ebd \xe1p d\u1ee5ng nh\u1eefng \u0111i\u1ec1u ki\u1ec7n \u0111\xf3 \u0111\u1ec3 t\u1eadn d\u1ee5ng \u0111\u01b0\u1ee3c t\u1ed1i \u0111a index c\u1ee7a table, sau \u0111\xf3 k\u1ebft h\u1ee3p th\xeam v\u1edbi nh\u1eefng \u0111i\u1ec1u ki\u1ec7n c\xf2n l\u1ea1i \u0111\u1ec3 l\u1ecdc ti\u1ebfp."),(0,l.kt)("p",null,"MySQL ch\u1ec9 b\u1ecf qua index, n\u1ebfu nh\u01b0 n\xf3 tin r\u1eb1ng vi\u1ec7c duy\u1ec7t full table t\u1ed1i \u01b0u h\u01a1n, ho\u1eb7c d\xf9ng ",(0,l.kt)("inlineCode",{parentName:"p"},"FORCE INDEX"),"."),(0,l.kt)("p",null,"VD:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM t1\nWHERE (\n    (key1 < 'abc' AND (key1 LIKE 'abcde%' OR key1 LIKE '%b'))\n    OR (key1 < 'bar' AND nonkey = 4)\n    OR (key1 < 'uux' AND key1 > 'z')\n);\n\n=> (key1 < 'abc' AND (key1 LIKE 'abcde%' OR TRUE)) OR\n(key1 < 'bar' AND TRUE) OR\n(key1 < 'uux' AND key1 > 'z')\n\n=> (key1 < 'abc' AND TRUE) OR (key1 < 'bar' AND TRUE) OR (FALSE)\n\n=> key1 < 'abc' OR key1 < 'bar'\n\n=> key1 < 'bar'\n")),(0,l.kt)("h2",{id:"32-multiple-part-index"},"3.2. Multiple-part index"),(0,l.kt)("h5",{id:"multiple-part-index-l\xe0-nh\u1eefng-index-\u0111\u01b0\u1ee3c-\u0111\xe1nh-cho-nhi\u1ec1u-tr\u01b0\u1eddng-c\xf9ng-l\xfac"},"Multiple-Part Index l\xe0 nh\u1eefng index \u0111\u01b0\u1ee3c \u0111\xe1nh cho nhi\u1ec1u tr\u01b0\u1eddng c\xf9ng l\xfac"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX index_name ON t1 (key_part1, key_part2)\n")),(0,l.kt)("p",null,"Range condition s\u1ebd s\u1eed d\u1ee5ng ",(0,l.kt)("strong",{parentName:"p"},"key tuple intervals")," \u0111\u1ec3 t\xecm ki\u1ebfm. Key tuple intervals \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a b\u1edfi nh\u1eefng key tuples, c\xf3 th\u1ee9 t\u1ef1."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tuple")," l\xe0 1 c\u1eb7p gi\xe1 tr\u1ecb. VD: (1, 2, 3), (1, 'a', 3), ..."),(0,l.kt)("p",null,"L\u1ea5y v\xed d\u1ee5 v\u1ec1 1 multiple-part index ",(0,l.kt)("inlineCode",{parentName:"p"},"key1(key_part1, key_part2, key_part3)"),", v\xe0 nh\u1eefng tuples \u1ee9ng v\u1edbi key tuple (key_part1, key_part2, key_part3) sau:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"key_part1  key_part2  key_part3\n  NULL       1          'abc'\n  NULL       1          'xyz'\n  NULL       2          'foo'\n   1         1          'abc'\n   1         1          'xyz'\n   1         2          'abc'\n   2         1          'aaa'\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"key_part1 = 1")," define interval sau:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"(1,-inf,-inf) <= (key_part1,key_part2,key_part3) < (1,+inf,+inf)\n")),(0,l.kt)("p",null,"Interval tr\xean s\u1ebd \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng b\u1edfi ",(0,l.kt)("inlineCode",{parentName:"p"},"range")," access method."),(0,l.kt)("p",null,"B\xean c\u1ea1nh \u0111\xf3, ",(0,l.kt)("inlineCode",{parentName:"p"},"key_part3 = 'abc'")," kh\xf4ng t\u1ea1o ra interval n\xe0o (gi\xe1 tr\u1ecb li\u1ec1n m\u1ea1ch nhau), v\xec th\u1ebf s\u1ebd kh\xf4ng th\u1ec3 s\u1eed d\u1ee5ng b\u1edfi ",(0,l.kt)("inlineCode",{parentName:"p"},"range")),(0,l.kt)("p",null,"Ch\xfa \xfd khi s\u1eed d\u1ee5ng:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"V\u1edbi Hash index, n\u1ebfu index c\xf3 ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," part, th\xec condition c\u1ee7a ta ph\u1ea3i c\xf3 format sau"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"    key_part1 cmp const1\nAND key_part2 cmp const2\nAND ...\nAND key_partN cmp constN;\n")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"cmp")," l\xe0 m\u1ed9t trong nh\u1eefng to\xe1n t\u1eed ",(0,l.kt)("inlineCode",{parentName:"p"},"="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<=>"),", ho\u1eb7c ",(0,l.kt)("inlineCode",{parentName:"p"},"IS NULL"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"V\u1edbi BTree index, 1 interval c\xf3 th\u1ec3 s\u1eed d\u1ee5ng cho nh\u1eefng \u0111i\u1ec1u ki\u1ec7n k\u1ebft h\u1ee3p b\u1edfi ",(0,l.kt)("inlineCode",{parentName:"p"},"AND"),", trong \u0111\xf3 m\u1ed7i \u0111i\u1ec1u ki\u1ec7n so s\xe1nh 1 key part v\u1edbi 1 h\u1eb1ng s\u1ed1, s\u1eed d\u1ee5ng ",(0,l.kt)("inlineCode",{parentName:"p"},"="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<=>"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"IS NULL"),", ",(0,l.kt)("inlineCode",{parentName:"p"},">"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,l.kt)("inlineCode",{parentName:"p"},">="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"!="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<>"),"."),(0,l.kt)("p",{parentName:"li"},"Optimizer trong khi t\xednh to\xe1n interval, s\u1ebd s\u1eed d\u1ee5ng th\xeam key part n\u1ebfu to\xe1n t\u1eed l\xe0 ",(0,l.kt)("inlineCode",{parentName:"p"},"="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<=>")," hay ",(0,l.kt)("inlineCode",{parentName:"p"},"IS NULL"),". C\xf2n n\u1ebfu l\xe0 ",(0,l.kt)("inlineCode",{parentName:"p"},">"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<"),", ",(0,l.kt)("inlineCode",{parentName:"p"},">="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"!="),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<>"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"BETWEEN")," hay ",(0,l.kt)("inlineCode",{parentName:"p"},"LIKE")," th\xec s\u1ebd kh\xf4ng l\u1ea5y th\xeam key part n\u1eefa."),(0,l.kt)("p",{parentName:"li"},"VD1:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"key_part1 = 'foo' AND key_part2 >= 10 AND key_part3 > 10\n")),(0,l.kt)("p",{parentName:"li"},"s\u1ebd s\u1eed d\u1ee5ng interval:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"('foo',10,-inf) < (key_part1,key_part2,key_part3) < ('foo',+inf,+inf)\n")),(0,l.kt)("p",{parentName:"li"},"VD2:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"(key_part1 = 1 AND key_part2 < 2) OR (key_part1 > 5)\n")),(0,l.kt)("p",{parentName:"li"},"s\u1ebd s\u1eed d\u1ee5ng 2 interval:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"(1,-inf) < (key_part1,key_part2) < (1,2)\n(5,-inf) < (key_part1,key_part2)\n")),(0,l.kt)("p",{parentName:"li"},"Trong v\xed d\u1ee5 n\xe0y, interval th\u1ee9 nh\u1ea5t s\u1eed d\u1ee5ng 1 key part \u1edf v\u1ebf tr\xe1i, v\u1ebf ph\u1ea3i s\u1eed d\u1ee5ng 2 key part."),(0,l.kt)("p",{parentName:"li"},"Interval th\u1ee9 2 ch\u1ec9 s\u1eed d\u1ee5ng 1 key part."),(0,l.kt)("p",{parentName:"li"},"Gi\xe1 tr\u1ecb ",(0,l.kt)("inlineCode",{parentName:"p"},"key_len")," khi th\u1ef1c hi\u1ec7n ",(0,l.kt)("inlineCode",{parentName:"p"},"EXPLAIN")," s\u1ebd tr\u1ea3 v\u1ec1 \u0111\u1ed9 d\xe0i t\u1ed1i \u0111a c\u1ee7a key prefix \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng."))),(0,l.kt)("h3",{id:"index-dive"},"Index Dive"),(0,l.kt)("p",null,"Index dive \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n trong khi optimizing \u0111\u1ec3 t\xednh to\xe1n estimate (s\u1ed1 row th\u1ecfa m\xe3n 1 condition), \u0111\u1ec3 quy\u1ebft \u0111\u1ecbnh xem c\xf3 n\xean d\xf9ng index hay kh\xf4ng. C\xf3 th\u1ec3 skip b\u1eb1ng c\xe1ch d\xf9ng ",(0,l.kt)("inlineCode",{parentName:"p"},"FORCE INDEX")),(0,l.kt)("p",null,"N\u1ebfu \u0111i\u1ec1u ki\u1ec7n ph\u1ee9c t\u1ea1p th\xec index dive s\u1ebd m\u1ea5t nhi\u1ec1u th\u1eddi gian."),(0,l.kt)("p",null,"Ngo\xe0i index dive, MySQL c\u0169ng c\xf3 th\u1ec3 s\u1eed d\u1ee5ng index statistics \u0111\u1ec3 estimate, tuy nhi\xean \u0111\u1ed9 ch\xednh x\xe1c th\u1ea5p h\u01a1n, c\xf3 th\u1ec3 d\xf9ng ",(0,l.kt)("inlineCode",{parentName:"p"},"ANALYZE TABLE")," \u0111\u1ec3 update l\u1ea1i index statistics, t\u0103ng c\u01b0\u1eddng \u0111\u1ed9 ch\xednh x\xe1c."),(0,l.kt)("p",null,"Index dive b\u1ecb skip trong tr\u01b0\u1eddng h\u1ee3p th\u1ecfa m\xe3n t\u1ea5t c\u1ea3 \u0111i\u1ec1u ki\u1ec7n sau (ch\u1ec9 \xe1p d\u1ee5ng cho single table query):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FORCE INDEX")),(0,l.kt)("li",{parentName:"ul"},"Nonunique index, v\xe0 kh\xf4ng ph\u1ea3i ",(0,l.kt)("inlineCode",{parentName:"li"},"FULLTEXT")," index."),(0,l.kt)("li",{parentName:"ul"},"Kh\xf4ng c\xf3 subquery"),(0,l.kt)("li",{parentName:"ul"},"Kh\xf4ng c\xf3 ",(0,l.kt)("inlineCode",{parentName:"li"},"DISTINCT"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"GROUP BY"),", ho\u1eb7c ",(0,l.kt)("inlineCode",{parentName:"li"},"ORDER BY"),".")),(0,l.kt)("h5",{id:"equality-range-optimization-of-many-valued-comparisons"},"Equality Range Optimization of Many-Valued Comparisons"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"col_name IN(val1, ..., valN)\ncol_name = val1 OR ... OR col_name = valN\n")),(0,l.kt)("p",null,"Nh\u1eefng bi\u1ec3u th\u1ee9c nh\u01b0 tr\xean, v\u1edbi ",(0,l.kt)("inlineCode",{parentName:"p"},"col_name")," \u0111\u01b0\u1ee3c \u0111\xe1nh index, v\xe0 so s\xe1nh v\u1edbi nhi\u1ec1u gi\xe1 tr\u1ecb, \u0111\u01b0\u1ee3c g\u1ecdi l\xe0 range comparisions (m\u1ed7i range l\xe0 1 gi\xe1 tr\u1ecb). Optimizer s\u1ebd estimate cost c\u1ee7a m\u1ed7i range nh\u01b0 sau:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"N\u1ebfu index l\xe0 unique, cost = 1"),(0,l.kt)("li",{parentName:"ul"},"N\u1ebfu kh\xf4ng unique, s\u1ebd c\u1ea7n s\u1eed d\u1ee5ng index dive ho\u1eb7c index statistics \u0111\u1ec3 estimate.")),(0,l.kt)("p",null,"\u1ee8ng v\u1edbi m\u1ed7i range l\xe0 2 l\u1ea7n dive (1 cho \u0111i\u1ec3m b\u1eaft \u0111\u1ea7u, 1 cho \u0111i\u1ec3m k\u1ebft th\xfac) c\u1ee7a range (interval)."))}m.isMDXComponent=!0}}]);