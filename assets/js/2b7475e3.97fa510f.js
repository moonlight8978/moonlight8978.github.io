(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[223],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},921:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),i=["components"],l={},o={unversionedId:"dev-env/javascript",id:"dev-env/javascript",isDocsHomePage:!1,title:"Javascript",description:"Prettier",source:"@site/docs/dev-env/javascript.md",sourceDirName:"dev-env",slug:"/dev-env/javascript",permalink:"/docs/dev-env/javascript",editUrl:"https://github.com/moonlight8978/moonlight8978.github.io/edit/v2/docs/docs/dev-env/javascript.md",version:"current",lastUpdatedAt:1623052541,formattedLastUpdatedAt:"6/7/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logging with Fluentd, Logrorate",permalink:"/docs/ops/fluentd-logging"},next:{title:"MacOS",permalink:"/docs/dev-env/macos"}},p=[{value:"Prettier",id:"prettier",children:[]},{value:"Babel",id:"babel",children:[{value:"Typescript",id:"typescript",children:[]},{value:"Module alias",id:"module-alias",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"prettier"},"Prettier"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=.prettierrc.yml",title:".prettierrc.yml"},"singleQuote: true\nprintWidth: 120\nsemi: false\ntrailingComma: es5\n")),(0,s.kt)("h2",{id:"babel"},"Babel"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @babel/core @babel/preset-env @babel/plugin-transform-runtime\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=babel.config.js",title:"babel.config.js"},'module.exports = {\n  presets: [\n    ["@babel/preset-env", { targets: "defaults" }],\n  ],\n  plugins: ["@babel/plugin-transform-runtime"],\n};\n')),(0,s.kt)("h3",{id:"typescript"},"Typescript"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D @babel/preset-typescript typescript\nyarn tsc --init\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=babel.config.js",title:"babel.config.js"},'module.exports = {\n  presets: [\n    "@babel/preset-typescript",\n  ],\n};\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=tsconfig.json",title:"tsconfig.json"},'{\n  "compilerOptions": {\n    "lib": ["ESNext"],\n    "allowJs": true,\n  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=.eslintrc.yml",title:".eslintrc.yml"},"rules:\n  no-use-before-define: 'off'\n  '@typescript-eslint/no-use-before-define': error\n  no-unused-vars: 'off'\n  '@typescript-eslint/no-unused-vars':\n    - error\n    - args: none\n      varsIgnorePattern: '^_'\n  no-useless-constructor: 'off'\n  '@typescript-eslint/no-useless-constructor':\n    - error\n  no-shadow: 'off'\n  '@typescript-eslint/no-shadow':\n    - error\n")),(0,s.kt)("h3",{id:"module-alias"},"Module alias"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev babel-plugin-module-resolver\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=babel.config.js",title:"babel.config.js"},'module.exports = {\n  plugins: [\n    [\n      "module-resolver",\n      {\n        root: ["."],\n        extensions: [".ts", ".tsx", ".js", ".jsx", "json"],\n        alias: {\n          "@src": "./src",\n        },\n      },\n    ],\n  ],\n};\n')),(0,s.kt)("h4",{id:"eslint"},"ESLint"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -D eslint-import-resolver-typescript\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=.eslintrc.yml",title:".eslintrc.yml"},"settings:\n  import/resolver:\n    typescript: {}\nrules:\n  import/order:\n    - error\n    - pathGroups:\n        - pattern: '@src/**'\n          group: parent\n      groups:\n        - builtin\n        - external\n        - parent\n        - sibling\n        - index\n      newlines-between: always\n")),(0,s.kt)("h4",{id:"typescript-1"},"Typescript"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=tsconfig.json",title:"tsconfig.json"},'{\n  "compilerOptions": {\n    "baseUrl": "./",\n    "paths": {\n      "@src/*": ["./src/*"]\n    }\n  }\n}\n')),(0,s.kt)("h4",{id:"jest"},"Jest"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=jest.config.ts",title:"jest.config.ts"},'export default {\n  moduleNameMapper: {\n    "^@src/(.*)$": "<rootDir>/your/folder/$1",\n  },\n};\n')))}u.isMDXComponent=!0}}]);