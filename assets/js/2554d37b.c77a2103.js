"use strict";(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[256],{7211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=t(1527),s=t(7463);const r={sidebar_position:1e3},o="Metrics",c={id:"monitoring/metrics",title:"Metrics",description:"Prometheus",source:"@site/docs/monitoring/metrics.md",sourceDirName:"monitoring",slug:"/monitoring/metrics",permalink:"/docs/monitoring/metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/monitoring/metrics.md",tags:[],version:"current",sidebarPosition:1e3,frontMatter:{sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Prerequisite",permalink:"/docs/monitoring/prerequisite"},next:{title:"Logging",permalink:"/docs/monitoring/logging"}},l={},a=[{value:"Prometheus",id:"prometheus",level:2},{value:"Telegraf",id:"telegraf",level:2},{value:"Calculating metrics",id:"calculating-metrics",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"metrics",children:"Metrics"}),"\n",(0,i.jsx)(n.h2,{id:"prometheus",children:"Prometheus"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Store all data as time series"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Group labeled data into a metric"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'api_http_requests_total{method="POST", handler="/messages"}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Collecting metrics by scraping HTTP endpoints of the services"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Each service has to collect the metric on its behalf (by prometheus sdk, ...) and expose them following the API"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Recommended stack: Prometheus + Grafana (for UI)"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"telegraf",children:"Telegraf"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Like Prometheus, it collects metrics by scraping HTTP endpoints"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"It often outputs to InfluxDB"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Recommended stack: Telegraf + InfluxDB + Grafana"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"calculating-metrics",children:"Calculating metrics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The service counts its metric, and expose them to an HTTP Endpoint"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["eg: ",(0,i.jsx)(n.a,{href:"https://github.com/siimon/prom-client",children:"https://github.com/siimon/prom-client"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use log aggregator"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["eg: ",(0,i.jsx)(n.a,{href:"https://docs.fluentd.org/monitoring-fluentd/monitoring-prometheus",children:"Fluentd"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7463:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(959);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);