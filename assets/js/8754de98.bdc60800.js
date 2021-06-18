(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[8347],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1669:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o=["components"],i={},p={unversionedId:"ops/fluentd-logging",id:"ops/fluentd-logging",isDocsHomePage:!1,title:"Logging with Fluentd, Logrorate",description:"No extra server required",source:"@site/docs/ops/fluentd-logging.md",sourceDirName:"ops",slug:"/ops/fluentd-logging",permalink:"/docs/ops/fluentd-logging",editUrl:"https://github.com/moonlight8978/moonlight8978.github.io/edit/v2/docs/docs/ops/fluentd-logging.md",version:"current",lastUpdatedAt:1624004023,formattedLastUpdatedAt:"6/18/2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Caching",permalink:"/docs/ops/browser-caching-proxy-caching"},next:{title:"Javascript",permalink:"/docs/dev-env/javascript"}},u=[{value:"No extra server required",id:"no-extra-server-required",children:[{value:"Overview",id:"overview",children:[]},{value:"Config",id:"config",children:[]},{value:"Workaround when combine with logrotate",id:"workaround-when-combine-with-logrotate",children:[]}]}],m={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"no-extra-server-required"},"No extra server required"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Basic flow: Input => Filter => Output"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Input:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"How to get log",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Listen on UDP traffic"),(0,l.kt)("li",{parentName:"ul"},"Tail a system file"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"parser")," can be applied to get right log format"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Filter:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Apply transformation to event"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Add custom attribute"),(0,l.kt)("li",{parentName:"ul"},"Parse log file"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Raw log go through ",(0,l.kt)("inlineCode",{parentName:"p"},"parser")," will become ",(0,l.kt)("inlineCode",{parentName:"p"},"log event")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-txt"},'tag:    app.event\ntime:   1362020400t\nrecord: {"host":"192.168.0.1","size":777,"method":"PUT"}\n'))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Output:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"How to store/forward the log event",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Save in elasticsearch"),(0,l.kt)("li",{parentName:"ul"},"Save to file"),(0,l.kt)("li",{parentName:"ul"},"Save to S3"))),(0,l.kt)("li",{parentName:"ul"},"Each output has default ",(0,l.kt)("inlineCode",{parentName:"li"},"formatter")," to format log event to appropriate format",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"out_file")," has ",(0,l.kt)("inlineCode",{parentName:"li"},"out_file")," formatter as default which will transform log event into ",(0,l.kt)("inlineCode",{parentName:"li"},"<time>\\t<tag>\\t<record>")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"single_value")," to output single field on ",(0,l.kt)("inlineCode",{parentName:"li"},"record"),", which default is ",(0,l.kt)("inlineCode",{parentName:"li"},"message")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"E.g:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Combine ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," parser with ",(0,l.kt)("inlineCode",{parentName:"p"},"single_value")," as output formatter, we will get"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Raw log: ",(0,l.kt)("inlineCode",{parentName:"p"},"2021-01-01 GET /test 200 OK"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Log event: raw log will be wrapped to ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," key"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-txt"},'tag:    app.event\ntime:   1362020400t\nrecord: {"message":"2021-01-01 GET /test 200 OK"}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Output: Only ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," key on record is exported"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"2021-01-01 GET /test 200 OK\\n\n")))))))))),(0,l.kt)("h4",{id:"install-on-linux-ami-2"},"Install on Linux AMI 2"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Installation"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# https://docs.fluentd.org/installation/install-by-rpm#amazon-linux\ncurl -L https://toolbelt.treasuredata.com/sh/install-amazon2-td-agent4.sh | sh\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Plugins"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo td-agent-gem install fluent-plugin-multi-format-parser\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Configuration file"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/td-agent/td-agent.conf\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"td-agent -c /etc/td-agent/td-agent.conf\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Service configuration file"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /usr/lib/systemd/system/td-agent.service\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Service log"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat /var/log/td-agent/td-agent.log\n")))),(0,l.kt)("h3",{id:"config"},"Config"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-apacheconf"},'<source>\n  @type tail\n  read_from_head true\n  path /home/deploy/app/current/log/production.log\n  pos_file /var/log/td-agent/app.log.pos\n\n  <parse>\n    @type none\n  </parse>\n\n  tag app.rails.production\n</source>\n\n<match app.**>\n  @type s3\n  s3_bucket bucket-name\n  s3_object_key_format "%{path}#{Socket.gethostname}_%{index}.%{file_extension}"\n  path "#{DateTime.now.strftime(\'%Y%m%d%H%M\')}"\n\n  time_slice_format %Y%m%d\n  store_as txt\n\n  <format>\n    @type single_value\n  </format>\n\n  <buffer>\n    @type file\n    path /var/log/td-agent/s3\n    timekey 1h\n    timekey_wait 5m\n    chunk_limit_size 256m\n    flush_at_shutdown true\n  </buffer>\n</match>\n')),(0,l.kt)("h3",{id:"workaround-when-combine-with-logrotate"},"Workaround when combine with logrotate"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/common-voice/common-voice/pull/848/files"},"https://github.com/common-voice/common-voice/pull/848/files")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"flush_at_shutdown true")," to output plugin buffer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Stop fluentd to upload current progress, then remove the pos and restart fluentd to tail the log file from the beginning"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt",metastring:"title=/etc/logrotate.d/rails",title:"/etc/logrotate.d/rails"},"/root/rails-exploration/log/production.log {\n  prerotate\n    /bin/systemctl stop td-agent\n  endscript\n\n  su deploy deploy\n  daily\n  missingok\n  rotate 7\n  compress\n  delaycompress\n  notifempty\n  copytruncate\n\n  postrotate\n    /bin/rm -f /var/log/td-agent/*.pos\n    /bin/systemctl start td-agent\n  endscript\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To trigger rotation manually")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"logrotate --force /etc/logrotate.d/rails\n")))}s.isMDXComponent=!0}}]);