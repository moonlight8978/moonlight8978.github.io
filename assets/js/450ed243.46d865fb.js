(self.webpackChunkmoonlight_8978_github_io=self.webpackChunkmoonlight_8978_github_io||[]).push([[1770],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return p},kt:function(){return d}});var a=e(7294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,a,i=function(t,n){if(null==t)return{};var e,a,i={},c=Object.keys(t);for(a=0;a<c.length;a++)e=c[a],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)e=c[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var r=a.createContext({}),s=function(t){var n=a.useContext(r),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},p=function(t){var n=s(t.components);return a.createElement(r.Provider,{value:n},t.children)},h={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,i=t.mdxType,c=t.originalType,r=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=s(e),d=i,u=m["".concat(r,".").concat(d)]||m[d]||h[d]||c;return e?a.createElement(u,l(l({ref:n},p),{},{components:e})):a.createElement(u,l({ref:n},p))}));function d(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var c=e.length,l=new Array(c);l[0]=m;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var s=2;s<c;s++)l[s]=e[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},5278:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return o},metadata:function(){return r},toc:function(){return s},default:function(){return h}});var a=e(2122),i=e(9756),c=(e(7294),e(3905)),l=["components"],o={slug:"cung-tim-hieu-ve-actiontext-trong-rails-6",title:"C\xf9ng t\xecm hi\u1ec3u v\u1ec1 ActionText trong Rails 6",author:"L\xea S\u0129 B\xedch",author_title:"Ruby on Rails/React Developer",author_url:"https://github.com/moonlight8978",tags:["action-text","ruby-on-rails","web"]},r={permalink:"/blog/cung-tim-hieu-ve-actiontext-trong-rails-6",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2019-07-20-rails-action-text.md",source:"@site/blog/2019-07-20-rails-action-text.md",title:"C\xf9ng t\xecm hi\u1ec3u v\u1ec1 ActionText trong Rails 6",description:"Rails 6 \u0111\xe3 b\u01b0\u1edbc v\xe0o giai \u0111o\u1ea1n beta v\u1edbi phi\xean b\u1ea3n v6.0.0.rc1. RC l\xe0 vi\u1ebft t\u1eaft c\u1ee7a Release Candidate, \u0111\xe2y l\xe0 phi\xean b\u1ea3n m\xe0 c\xf3 x\xe1c su\u1ea5t tr\u1edf th\xe0nh final release r\u1ea5t cao. Ta c\xf3 th\u1ec3 \xe1p d\u1ee5ng n\xf3 v\xe0o d\u1ef1 \xe1n ngay k\u1ec3 t\u1eeb b\xe2y gi\u1edd m\xe0 kh\xf4ng c\u1ea7n lo s\u1ee3 c\xf3 nh\u1eefng breaking change.",date:"2019-07-20T00:00:00.000Z",formattedDate:"July 20, 2019",tags:[{label:"action-text",permalink:"/blog/tags/action-text"},{label:"ruby-on-rails",permalink:"/blog/tags/ruby-on-rails"},{label:"web",permalink:"/blog/tags/web"}],readingTime:10.375,truncated:!1,prevItem:{title:"T\u1ed1i \u01b0u m\u1ec7nh \u0111\u1ec1 WHERE (MySQL)",permalink:"/blog/toi-uu-menh-de-where-mysql"},nextItem:{title:"C\xf9ng t\xecm hi\u1ec3u v\u1ec1 Railway Oriented Programming",permalink:"/blog/cung-tim-hieu-ve-railway-oriented-programming"}},s=[{value:"C\xe0i \u0111\u1eb7t v\xe0 s\u1eed d\u1ee5ng",id:"c\xe0i-\u0111\u1eb7t-v\xe0-s\u1eed-d\u1ee5ng",children:[]},{value:"Styling",id:"styling",children:[]},{value:"Macro <code>has_rich_text</code>",id:"macro-has_rich_text",children:[]},{value:"Rails x\u1eed l\xfd, l\u01b0u tr\u1eef rich text nh\u01b0 th\u1ebf n\xe0o?",id:"rails-x\u1eed-l\xfd-l\u01b0u-tr\u1eef-rich-text-nh\u01b0-th\u1ebf-n\xe0o",children:[]},{value:"Hi\u1ec3n th\u1ecb d\u1eef li\u1ec7u",id:"hi\u1ec3n-th\u1ecb-d\u1eef-li\u1ec7u",children:[]},{value:"Integrate v\u1edbi Active Storage",id:"integrate-v\u1edbi-active-storage",children:[]}],p={toc:s};function h(t){var n=t.components,e=(0,i.Z)(t,l);return(0,c.kt)("wrapper",(0,a.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Rails 6 \u0111\xe3 b\u01b0\u1edbc v\xe0o giai \u0111o\u1ea1n beta v\u1edbi phi\xean b\u1ea3n ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/rails/rails/releases/tag/v6.0.0.rc1"},"v6.0.0.rc1"),". RC l\xe0 vi\u1ebft t\u1eaft c\u1ee7a ",(0,c.kt)("strong",{parentName:"p"},"R"),"elease ",(0,c.kt)("strong",{parentName:"p"},"C"),"andidate, \u0111\xe2y l\xe0 phi\xean b\u1ea3n m\xe0 c\xf3 x\xe1c su\u1ea5t tr\u1edf th\xe0nh final release r\u1ea5t cao. Ta c\xf3 th\u1ec3 \xe1p d\u1ee5ng n\xf3 v\xe0o d\u1ef1 \xe1n ngay k\u1ec3 t\u1eeb b\xe2y gi\u1edd m\xe0 kh\xf4ng c\u1ea7n lo s\u1ee3 c\xf3 nh\u1eefng breaking change."),(0,c.kt)("p",null,"N\u1ebfu b\u1ea1n s\u1eed d\u1ee5ng Docker, m\xecnh khuy\xean n\xean s\u1eed d\u1ee5ng ruby 2.6.3, v\xec tr\u01b0\u1edbc \u0111\xe2y m\xecnh \u0111\xe3 d\xf9ng th\u1eed ruby:2.7.0-preview1-alpine3.10 th\xec kh\xe1 nhi\u1ec1u l\u1ed7i khi up server, m\xe0 ch\u1ea3 bi\u1ebft ph\u1ea3i fix sao :sad:"),(0,c.kt)("p",null,"\u1ede Rails 6, c\xf3 kh\xe1 nhi\u1ec1u t\xednh n\u0103ng m\u1edbi hay ho:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Action Text"),(0,c.kt)("li",{parentName:"ul"},"Parallel Testing"),(0,c.kt)("li",{parentName:"ul"},"Action Model custom error message format."),(0,c.kt)("li",{parentName:"ul"},"v\xe2n v\xe2n m\xe2y m\xe2y...")),(0,c.kt)("p",null,"\u1ede b\xe0i n\xe0y, m\xecnh s\u1ebd ch\u1ec9 t\u1eadp trung \u0111\u1ec1 c\u1eadp t\u1edbi Action Text. \u0110\xe2y l\xe0 m\u1ed9t package gi\xfap ta x\xe2y d\u1ef1ng WYSIWYG editor m\u1ed9t c\xe1ch nhanh ch\xf3ng, h\u01a1n n\u1eefa, vi\u1ec7c upload c\u0169ng \u0111\u01b0\u1ee3c integrate v\u1edbi Active Storage."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Ch\xfa \xfd:")," B\xe0i kh\xe1 d\xe0i v\xe0 embed nhi\u1ec1u code :v"),(0,c.kt)("h1",{id:"c\xe1ch-d\xf9ng"},"C\xe1ch d\xf9ng"),(0,c.kt)("h2",{id:"c\xe0i-\u0111\u1eb7t-v\xe0-s\u1eed-d\u1ee5ng"},"C\xe0i \u0111\u1eb7t v\xe0 s\u1eed d\u1ee5ng"),(0,c.kt)("p",null,"V\xec l\xe0 Rails n\xean c\xe1ch s\u1eed d\u1ee5ng r\u1ea5t \u0111\u01a1n gi\u1ea3n, nh\u01b0ng ta s\u1ebd ch\u1ea3 bi\u1ebft n\xf3 ch\u1ea1y c\xe1i g\xec \u0111\u1eb1ng sau c\u1ea3 =))"),(0,c.kt)("p",null,"C\xe0i \u0111\u1eb7t Action Text b\u1eb1ng CLI command sau:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"rails action_text:install\n")),(0,c.kt)("p",null,"Nh\u1edb h\xe3y ch\u1ea1y th\xeam c\u1ea3 command install Active Storage n\u1eefa."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"rails active_storage:install\n")),(0,c.kt)("p",null,"\u0110\u1ec3 \xe1p d\u1ee5ng cho field ",(0,c.kt)("inlineCode",{parentName:"p"},"content")," c\u1ee7a model ",(0,c.kt)("inlineCode",{parentName:"p"},"Post"),", ta s\u1ebd d\xf9ng t\u1edbi macro ",(0,c.kt)("inlineCode",{parentName:"p"},"has_rich_text")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},"class CreatePosts < ActiveRecord::Migration[6.0]\n  def change\n    create_table :posts do |t|\n      t.string :content\n      t.string :category\n\n      t.timestamps\n    end\n  end\nend\n\n")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"content")," \u1edf \u0111\xe2y m\xecnh d\xf9ng string, nh\u01b0ng khuy\u1ebfn kh\xedch d\xf9ng text h\u01a1n."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},"class Post < ApplicationRecord\n    has_rich_text :content\nend\n")),(0,c.kt)("p",null,"Tr\xean form, ta ch\u1ec9 vi\u1ec7c d\xf9ng ",(0,c.kt)("inlineCode",{parentName:"p"},"rich_text_area")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-erb"},'<%= form_with(model: @post) do |form| %>\n  <div class="field">\n    <%= form.label :content %>\n    <%= form.rich_text_area :content %>\n  </div>\n<% end %>\n')),(0,c.kt)("p",null,"Khi permit params, ta c\u0169ng l\xe0m nh\u01b0 bao field kh\xe1c"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},"\nclass PostsController < ApplicationController\n  def post_params\n    params.require(:post).permit(:category, :content)\n  end\nend\n")),(0,c.kt)("p",null,"Cu\u1ed1i c\xf9ng ta hi\u1ec3n th\u1ecb d\u1eef li\u1ec7u nh\u01b0 sau:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-erb"},"<%= @post.content %>\n")),(0,c.kt)("p",null,"C\xe2u l\u1ec7nh tr\xean th\u1ef1c ch\u1ea5t \u0111ang ng\u1ea7m g\u1ecdi t\u1edbi ",(0,c.kt)("inlineCode",{parentName:"p"},"@post.content.to_s")),(0,c.kt)("p",null,"\u0110\xe2y l\xe0 s\u1ea3n ph\u1ea9m c\u1ee7a ta:"),(0,c.kt)("p",null,"Form t\u1ea1o post v\u1edbi WYSIWYG editor - S\u1eed d\u1ee5ng Trix editor, do Basecamp ph\xe1t tri\u1ec3n, c\xe2y nh\xe0 l\xe1 v\u01b0\u1eddn lu\xf4n."),(0,c.kt)("p",null,"C\xf3 th\u1ec3 k\xe9o th\u1ea3 file v\xe0o, file \u0111\xf3 s\u1ebd \u0111\u01b0\u1ee3c upload b\u1eb1ng Active Storage."),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://images.viblo.asia/77b9bd23-5ba3-426b-b6fc-cac02edb0b42.png",alt:null})),(0,c.kt)("p",null,"Hi\u1ec3n th\u1ecb d\u1eef li\u1ec7u \u1edf m\xe0n h\xecnh detail"),(0,c.kt)("p",null,(0,c.kt)("img",{parentName:"p",src:"https://images.viblo.asia/6b1b8da0-ca7f-468b-9705-444a8cb2d736.png",alt:null})),(0,c.kt)("p",null,"C\xe1c b\u1ea1n th\u1ea5y sao? C\xe1 nh\xe2n m\xecnh th\u1ea5y x\u1ea5u nh\u01b0 c\u1edd h\xf3 v\u1eady =)) Tuy nhi\xean ta c\xf3 th\u1ec3 styling cho n\xf3."),(0,c.kt)("h2",{id:"styling"},"Styling"),(0,c.kt)("p",null,"Rails \u0111ang c\xf3 s\u1eb5n m\u1ed9t v\xe0i style c\u01a1 b\u1ea3n cho n\xf3 trong file ",(0,c.kt)("inlineCode",{parentName:"p"},"app/assets/stylesheets/actiontext.scss"),", ta c\xf3 th\u1ec3 s\u1eeda n\xf3 \u0111\u1ec3 cho \u0111\u1eb9p h\u01a1n."),(0,c.kt)("p",null,"V\u1edbi \u0111\u1ed1ng tool c\u1ee7a editor th\xec c\xf3 th\u1ec3 d\xf9ng selector ",(0,c.kt)("inlineCode",{parentName:"p"},".trix-button-row")),(0,c.kt)("p",null,"V\u1edbi template attachment (nh\u01b0 c\xe1i ",(0,c.kt)("inlineCode",{parentName:"p"},"monaco.ttf")," \u1edf tr\xean), ta c\u0169ng c\xf3 th\u1ec3 custom l\u1ea1i, Rails cung c\u1ea5p s\u1eb5n template m\u1eb7c \u0111\u1ecbnh \u1edf file ",(0,c.kt)("inlineCode",{parentName:"p"},"app/views/active_storage/blobs/_blob.html.erb")),(0,c.kt)("h1",{id:"t\xecm-hi\u1ec3u-s\u1ef1-ma-gi\xe1o"},"T\xecm hi\u1ec3u s\u1ef1 ma gi\xe1o"),(0,c.kt)("p",null,"R\u1ed3i ta \u0111\xe3 l\u01b0\u1edbt qua c\xe1ch s\u1eed d\u1ee5ng n\xf3, nh\u01b0ng m\xe0 c\xf3 qu\xe1 nhi\u1ec1u magic."),(0,c.kt)("p",null,"Li\u1ec7u b\u1ea1n c\xf3 t\u1ef1 \u0111\u1eb7t ra nh\u1eefng c\xe2u h\u1ecfi th\u1ebf n\xe0y hay kh\xf4ng?"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"Kh\xf4ng bi\u1ebft c\xe1ch l\u01b0u tr\u1eef d\u1eef li\u1ec7u c\u1ee7a n\xf3 nh\u01b0 th\u1ebf n\xe0o?")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"L\xe0m sao m\xe0 c\xe1i file trong kia integrate \u0111\u01b0\u1ee3c v\u1edbi Active Storage?")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"V\xec sao l\u1ea1i c\xf3 th\u1ec3 custom l\u1ea1i nh\u1eefng attachment b\u1eb1ng template?")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("p",{parentName:"li"},"v\xe2n v\xe2n m\xe2y m\xe2y..."))),(0,c.kt)("p",null,"Ta s\u1ebd b\u1eaft tay v\xe0o t\xecm hi\u1ec3u n\xf3."),(0,c.kt)("p",null,"H\xe3y b\u1eaft \u0111\u1ea7u v\u1edbi ",(0,c.kt)("inlineCode",{parentName:"p"},"has_rich_text")),(0,c.kt)("h2",{id:"macro-has_rich_text"},"Macro ",(0,c.kt)("inlineCode",{parentName:"h2"},"has_rich_text")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},'# https://github.com/rails/rails/blob/6a5c8b91998c56e50b5cc934d968947cd319f735/actiontext/lib/action_text/attribute.rb#L26\ndef has_rich_text(name)\n  class_eval <<-CODE, __FILE__, __LINE__ + 1\n    def #{name}\n      rich_text_#{name} || build_rich_text_#{name}\n    end\n\n    def #{name}=(body)\n      self.#{name}.body = body\n    end\n  CODE\n\n  has_one :"rich_text_#{name}", -> { where(name: name) },\n    class_name: "ActionText::RichText", as: :record, inverse_of: :record, autosave: true, dependent: :destroy\n  # ... codes\nend\n')),(0,c.kt)("p",null,"D\u1ec5 d\xe0ng th\u1ea5y r\u1eb1ng \u0111\xe2y l\xe0 1 macro gi\xfap \u0111\u1ecbnh ngh\u0129a getter, setter, v\xe0 c\u1ea3 association ",(0,c.kt)("inlineCode",{parentName:"p"},"has_one :rich_text_...")," v\u1edbi ",(0,c.kt)("inlineCode",{parentName:"p"},"ActionText::RichText"),"."),(0,c.kt)("p",null,"V\u1eady th\xec khi ta g\u1ecdi ",(0,c.kt)("inlineCode",{parentName:"p"},"@post.content"),", th\u1ef1c ch\u1ea5t l\xe0 ta \u0111ang g\u1ecdi t\u1edbi ",(0,c.kt)("inlineCode",{parentName:"p"},"@post.rich_text_content"),"."),(0,c.kt)("p",null,"V\xe0 n\xf3 c\u0169ng ch\u1ec9 ra 1 \u0111i\u1ec1u n\u1eefa l\xe0 Rails d\xf9ng 1 b\u1ea3ng ri\xeang \u0111\u1ec3 l\u01b0u l\u1ea1i \u0111\u1ed1ng rich text c\u1ee7a ta."),(0,c.kt)("p",null,"H\xe3y d\xe0nh ch\xfat th\u1eddi gian nh\xecn v\xe0o th\u01b0 m\u1ee5c ",(0,c.kt)("inlineCode",{parentName:"p"},"db/migrate"),", ta s\u1ebd th\u1ea5y file sau:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},'# db/migrate/20190718085159_create_action_text_tables.action_text.rb\n# This migration comes from action_text (originally 20180528164100)\nclass CreateActionTextTables < ActiveRecord::Migration[6.0]\n  def change\n    create_table :action_text_rich_texts do |t|\n      t.string     :name, null: false\n      t.text       :body, size: :long\n      t.references :record, null: false, polymorphic: true, index: false\n\n      t.timestamps\n\n      t.index [ :record_type, :record_id, :name ], name: "index_action_text_rich_texts_uniqueness", unique: true\n    end\n  end\nend\n\n')),(0,c.kt)("p",null,"Qu\u1ea3 th\u1eadt l\xe0 v\u1eady, ",(0,c.kt)("inlineCode",{parentName:"p"},"body")," ch\xednh l\xe0 n\u01a1i l\u01b0u tr\u1eef \u0111\u1ed1ng text c\u1ee7a ta, c\xf2n ",(0,c.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"record_id"),", v\xe0 ",(0,c.kt)("inlineCode",{parentName:"p"},"record_type")," l\xe0 nh\u1eefng attribute cho polymorphic association, kh\xe1 quen thu\u1ed9c n\u1ebfu b\u1ea1n \u0111\xe3 d\xf9ng Active storage"),(0,c.kt)("p",null,"Ta s\u1ebd \u0111i \u0111\u1ebfn b\u01b0\u1edbc ti\u1ebfp theo ",(0,c.kt)("inlineCode",{parentName:"p"},"rich_text_area")),(0,c.kt)("h2",{id:"rails-x\u1eed-l\xfd-l\u01b0u-tr\u1eef-rich-text-nh\u01b0-th\u1ebf-n\xe0o"},"Rails x\u1eed l\xfd, l\u01b0u tr\u1eef rich text nh\u01b0 th\u1ebf n\xe0o?"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},'# https://github.com/rails/rails/blob/cc1a5d5620c4cd952b27f6c1bbd16d8780a34d0e/actiontext/app/helpers/action_text/tag_helper.rb#L20\ndef rich_text_area_tag(name, value = nil, options = {})\n  options = options.symbolize_keys\n\n  options[:input] ||= "trix_input_#{ActionText::TagHelper.id += 1}"\n  options[:class] ||= "trix-content"\n\n  options[:data] ||= {}\n  options[:data][:direct_upload_url] = main_app.rails_direct_uploads_url\n  options[:data][:blob_url_template] = main_app.rails_service_blob_url(":signed_id", ":filename")\n\n  editor_tag = content_tag("trix-editor", "", options)\n  input_tag = hidden_field_tag(name, value, id: options[:input])\n\n  input_tag + editor_tag\nend\n')),(0,c.kt)("p",null,"C\xf3 th\u1ec3 th\u1ea5y \u0111\u01a1n gi\u1ea3n n\xf3 ch\u1ec9 init c\xe1i trix editor cho ta th\xf4i."),(0,c.kt)("p",null,"Vi\u1ec7c k\xe9o th\u1ea3 file, upload ho\xe0n to\xe0n \u0111\u01b0\u1ee3c handle b\u1edfi trix editor, ta kh\xf4ng custom \u0111\u01b0\u1ee3c template sau khi file upload th\xe0nh c\xf4ng."),(0,c.kt)("p",null,"Tuy nhi\xean Action Text c\xf3 th\xeam 1 callback sau khi file \u0111\u01b0\u1ee3c upload th\xe0nh c\xf4ng:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-javascript"},"// https://github.com/rails/rails/blob/cc1a5d5620c4cd952b27f6c1bbd16d8780a34d0e/actiontext/app/javascript/actiontext/attachment_upload.js#L26\nthis.attachment.setAttributes({\n  sgid: attributes.attachable_sgid,\n  url: this.createBlobUrl(attributes.signed_id, attributes.filename),\n});\n")),(0,c.kt)("p",null,"\u0111\xe2y l\xe0 1 step r\u1ea5t quan tr\u1ecdng, nh\u01b0ng ta s\u1ebd ch\u01b0a c\u1ea7n ch\xfa \xfd t\u1edbi n\xf3 v\u1ed9i. Attachment c\u1ee7a ta sau khi upload th\xe0nh c\xf4ng s\u1ebd tr\xf4ng nh\u01b0 sau:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'<figure\n  contenteditable="false"\n  data-trix-attachment=\'{"contentType":"application/zip","filename":"monaco.ttf-master.zip","filesize":88996,"sgid":"BAh7CEkiCGdpZAY6BkVUSSIvZ2lkOi8vYXBwL0FjdGl2ZVN0b3JhZ2U6OkJsb2IvOD9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIPYXR0YWNoYWJsZQY7AFRJIg9leHBpcmVzX2F0BjsAVDA=--79d2aa5a0af367233a5420a4f0ae02657d3910ab","url":"http://localhost:60100/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e79bebbfa0f10319d319411c129291d12e752d22/monaco.ttf-master.zip"}\'\n  data-trix-content-type="application/zip"\n  data-trix-id="1108"\n  class="attachment attachment--file attachment--zip"\n>\n  <figcaption class="attachment__caption">\n    <span class="attachment__name">monaco.ttf-master.zip</span>\n    <span class="attachment__size">86.91 KB</span>\n  </figcaption>\n</figure>\n')),(0,c.kt)("p",null,"Ti\u1ebfp \u0111\u1ebfn l\xe0 submit d\u1eef li\u1ec7u, v\u1eady Rails s\u1ebd g\u1eedi g\xec l\xean?"),(0,c.kt)("p",null,"\u0110\u01a1n gi\u1ea3n l\xe0 Rails s\u1ebd g\u1eedi t\u1ea5t c\u1ea3 nh\u1eefng g\xec b\xean trong ",(0,c.kt)("inlineCode",{parentName:"p"},"<trix-editor></trix-editor>")),(0,c.kt)("p",null,"Inspect th\u1eed params, ta s\u1ebd th\u1ea5y:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},'post_params[:content]\n# => "<div><a href=\\"http://localhost:60100/posts/new\\">http://localhost:60100/posts/new</a></div><div><strong>Hello world<br></strong><figure data-trix-attachment=\\"{&quot;content&quot;:&quot;<figure class=\\\\&quot;attachment attachment--file attachment--zip\\\\&quot;>\\\\n\\\\n  <figcaption class=\\\\&quot;attachment__caption\\\\&quot;>\\\\n      <span class=\\\\&quot;attachment__name\\\\&quot;>monaco.ttf-master.zip</span>\\\\n      <span class=\\\\&quot;attachment__size\\\\&quot;>86.9 KB</span>\\\\n  </figcaption>\\\\n</figure>\\\\n&quot;,&quot;contentType&quot;:&quot;application/zip&quot;,&quot;filename&quot;:&quot;monaco.ttf-master.zip&quot;,&quot;filesize&quot;:88996,&quot;sgid&quot;:&quot;BAh7CEkiCGdpZAY6BkVUSSIvZ2lkOi8vYXBwL0FjdGl2ZVN0b3JhZ2U6OkJsb2IvNz9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIPYXR0YWNoYWJsZQY7AFRJIg9leHBpcmVzX2F0BjsAVDA=--97b885c24fd3d87464525f34a7b6ea117e4c72e6&quot;,&quot;url&quot;:&quot;http://localhost:60100/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--940badfc5aee704ef3f98085f87f909baf870660/monaco.ttf-master.zip&quot;}\\" data-trix-content-type=\\"application/zip\\" class=\\"attachment attachment--content attachment--zip\\"><figure class=\\"attachment attachment--file attachment--zip\\">\\r\\n\\r\\n  <figcaption class=\\"attachment__caption\\">\\r\\n      <span class=\\"attachment__name\\">monaco.ttf-master.zip</span>\\r\\n      <span class=\\"attachment__size\\">86.9 KB</span>\\r\\n  </figcaption>\\r\\n</figure>\\r\\n<figcaption class=\\"attachment__caption\\"></figcaption></figure></div>"\n')),(0,c.kt)("p",null,"L\xe0m \u0111\u1eb9p n\xf3 ch\xfat"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n  <a href="http://localhost:60100/posts/new"\n    >http://localhost:60100/posts/new</a\n  >\n</div>\n<div>\n  <strong>Hello world<br /></strong>\n  <figure\n    data-trix-attachment="..."\n    data-trix-content-type="application/zip"\n    class="attachment attachment--content attachment--zip"\n  >\n    <figure class="attachment attachment--file attachment--zip">\n      <figcaption class="attachment__caption">\n        <span class="attachment__name">monaco.ttf-master.zip</span>\n        <span class="attachment__size">86.9 KB</span>\n      </figcaption>\n    </figure>\n    <figcaption class="attachment__caption"></figcaption>\n  </figure>\n</div>\n')),(0,c.kt)("p",null,"C\xf3 th\u1ec3 th\u1ea5y n\xf3 kh\xe1 gi\u1ed1ng v\u1edbi content c\u1ee7a ",(0,c.kt)("inlineCode",{parentName:"p"},"<trix-editor></trix-editor>")," \u0111\xfang kh\xf4ng n\xe0o?"),(0,c.kt)("p",null,"Ta s\u1ebd save \u0111\u1ed1ng params n\xe0y l\u1ea1i, v\xe0 xem DB ta ch\u1ee9a g\xec?"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"app_development=# SELECT body FROM action_text_rich_texts WHERE id = 3;\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'<div>\n  <a href="http://localhost:60100/posts/new"\n    >http://localhost:60100/posts/new</a\n  >\n</div>\n<div>\n  <strong>Hello world<br /></strong>\n  <action-text-attachment\n    sgid="BAh7CEkiCGdpZAY6BkVUSSIvZ2lkOi8vYXBwL0FjdGl2ZVN0b3JhZ2U6OkJsb2IvNz9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIPYXR0YWNoYWJsZQY7AFRJIg9leHBpcmVzX2F0BjsAVDA=--97b885c24fd3d87464525f34a7b6ea117e4c72e6"\n    content-type="application/zip"\n    url="http://localhost:60100/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--940badfc5aee704ef3f98085f87f909baf870660/monaco.ttf-master.zip"\n    filename="monaco.ttf-master.zip"\n    filesize="88996"\n  ></action-text-attachment>\n</div>\n')),(0,c.kt)("p",null,"C\xe1c th\u1ebb kh\xe1c th\xec v\u1eabn v\u1eady, tuy nhi\xean attachments c\u1ee7a ta l\u1ea1i c\xf3 m\u1ed9t ch\xfat kh\xe1c bi\u1ec7t. \u1ede \u0111\xe2y \u0111\u1ed1ng ",(0,c.kt)("inlineCode",{parentName:"p"},"figure")," \u0111\xe3 \u0111\u01b0\u1ee3c minify l\u1ea1i th\xe0nh ",(0,c.kt)("inlineCode",{parentName:"p"},"action-text-attachment ")," \u0111\u1ec3 cho g\u1ecdn h\u01a1n."),(0,c.kt)("p",null,"H\xe3y c\xf9ng \u0111i\u1ec1u tra xem t\u1ea1i sao l\u1ea1i nh\u01b0 v\u1eady? Tr\u01b0\u1edbc ti\xean ta v\xe0o xem ",(0,c.kt)("inlineCode",{parentName:"p"},"ActionText::RichText")," c\u1ee7a ta ch\u1ee9a g\xec ma gi\xe1o"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},"# https://github.com/rails/rails/blob/027085a5972a798cfea60f829a9edabbd67a2818/actiontext/app/models/action_text/rich_text.rb#L11\nclass ActionText::RichText < ActiveRecord::Base\n  serialize :body, ActionText::Content\nend\n")),(0,c.kt)("p",null,"V\u1eady l\xe0 ",(0,c.kt)("inlineCode",{parentName:"p"},"body")," c\u1ee7a ta \u0111ang \u0111\u01b0\u1ee3c serialize b\u1edfi ",(0,c.kt)("inlineCode",{parentName:"p"},"ActionText::Content"),", m\xf2 \u0111\u1ebfn \u0111\xf3 ti\u1ebfp th\xf4i."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},"# https://github.com/rails/rails/blob/df8ee09ce71338cdf9816225df1bdebc707f3560/actiontext/lib/action_text/content.rb#L15\nclass ActionText::Content\n  class << self\n    def fragment_by_canonicalizing_content(content)\n      fragment = ActionText::Attachment.fragment_by_canonicalizing_attachments(content)\n      fragment = ActionText::AttachmentGallery.fragment_by_canonicalizing_attachment_galleries(fragment)\n      fragment\n    end\n  end\n\n  def initialize(content = nil, options = {})\n    options.with_defaults! canonicalize: true\n\n    if options[:canonicalize]\n      @fragment = self.class.fragment_by_canonicalizing_content(content)\n    else\n      @fragment = ActionText::Fragment.wrap(content)\n    end\n  end\nend\n")),(0,c.kt)("p",null,"Ta s\u1ebd quan t\xe2m t\u1edbi h\xe0m ",(0,c.kt)("inlineCode",{parentName:"p"},"initialize")," tr\u01b0\u1edbc, khi serialize, m\u1eb7c \u0111\u1ecbnh l\xe0 ta \u0111ang kh\xf4ng d\xf9ng tham s\u1ed1, v\u1eady l\xe0 options s\u1eed d\u1ee5ng s\u1ebd l\xe0 ",(0,c.kt)("inlineCode",{parentName:"p"},"canonicalize: true"),", xem ti\u1ebfp ",(0,c.kt)("inlineCode",{parentName:"p"},"fragment_by_canonicalizing_content")," n\xe0o. C\xf3 v\u1ebb l\u1ea1i ph\u1ea3i m\xf2 ",(0,c.kt)("inlineCode",{parentName:"p"},"fragment_by_canonicalizing_attachments")," ti\u1ebfp @@"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},'# https://github.com/rails/rails/blob/df8ee09ce7/actiontext/lib/action_text/attachment.rb#L11\nclass ActionText::Attachment\n  TAG_NAME = "action-text-attachment"\n  SELECTOR = TAG_NAME\n\n  class << self\n    def fragment_by_canonicalizing_attachments(content)\n      fragment_by_minifying_attachments(\n        fragment_by_converting_trix_attachments(content)\n      )\n    end\n  end\nend\n')),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"fragment_by_minifying_attachments"),", b\u1ea1n c\xf3 th\u1ea5y t\u1eeb minify kh\xf4ng? C\xf3 v\u1ebb ta \u0111ang \u0111i \u0111\xfang h\u01b0\u1edbng. H\xe3y ti\u1ebfp t\u1ee5c, nh\u01b0ng h\xe3y b\u1eaft \u0111\u1ea7u b\u1eb1ng ",(0,c.kt)("inlineCode",{parentName:"p"},"fragment_by_converting_trix_attachments")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},"# https://github.com/rails/rails/blob/df8ee09ce71338cdf9816225df1bdebc707f3560/actiontext/lib/action_text/attachments/trix_conversion.rb#L9\nmodule ActionText::Attachments::TrixConversion\n  class_methods do\n    def fragment_by_converting_trix_attachments(content)\n      Fragment.wrap(content).replace(TrixAttachment::SELECTOR) do |node|\n        from_trix_attachment(TrixAttachment.new(node))\n      end\n    end\n  end\nend\n")),(0,c.kt)("p",null,"N\xf4m na l\xe0 \u0111o\u1ea1n n\xe0y s\u1ebd replace to\xe0n b\u1ed9 ",(0,c.kt)("inlineCode",{parentName:"p"},'ActionText::TrixAttachment::SELECTOR = "[data-trix-attachment]')," b\u1eb1ng th\u1ebb ",(0,c.kt)("inlineCode",{parentName:"p"},'ActionText::Attachment::SELECTOR = "action-text-attachment"'),"."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},'module ActionText::Attachments::Minification\n  class_methods do\n    def fragment_by_minifying_attachments(content)\n      Fragment.wrap(content).replace(ActionText::Attachment::SELECTOR) do |node|\n        node.tap { |n| n.inner_html = "" }\n      end\n    end\n  end\nend\n')),(0,c.kt)("p",null,"H\xe0m ",(0,c.kt)("inlineCode",{parentName:"p"},"fragment_by_minifying_attachments")," c\u1ee7a ch\xfang ta s\u1ebd remove to\xe0n b\u1ed9 inner content c\u1ee7a th\u1ebb ",(0,c.kt)("inlineCode",{parentName:"p"},"action-text-attachment"),"."),(0,c.kt)("p",null,"Sau m\u1ed9t h\u1ed3i l\xf2ng v\xf2ng, cu\u1ed1i c\xf9ng ta \u0111\xe3 bi\u1ebft \u0111\u01b0\u1ee3c t\u1ea1i sao \u0111\u1ed1ng ",(0,c.kt)("inlineCode",{parentName:"p"},"figure")," r\u1ed1i r\u1eafm kia tr\u1edf th\xe0nh ",(0,c.kt)("inlineCode",{parentName:"p"},"action-text-attachment")," g\u1ecdn g\xe0ng h\u01a1n r\u1ea5t nhi\u1ec1u."),(0,c.kt)("h2",{id:"hi\u1ec3n-th\u1ecb-d\u1eef-li\u1ec7u"},"Hi\u1ec3n th\u1ecb d\u1eef li\u1ec7u"),(0,c.kt)("p",null,"H\xe3y v\xe0o m\xe0n h\xecnh detail, v\xe0 th\u1eed inspect element, ta s\u1ebd th\u1ea5y attachment c\u1ee7a ta l\u1ea1i tr\u1edf v\u1ec1 d\u1ea1ng \u0111\u1ea7y \u0111\u1ee7:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},"<%= @post.content =>\n")),(0,c.kt)("p",null,"\u0110\xe2y l\xe0 nh\u1eefng g\xec ta thu \u0111\u01b0\u1ee3c."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-html"},'<div class="trix-content">\n  <div>\n    <a href="http://localhost:60100/posts/new"\n      >http://localhost:60100/posts/new</a\n    >\n  </div>\n  <div>\n    <strong>Hello world<br /></strong>\n    <action-text-attachment\n      sgid="BAh7CEkiCGdpZAY6BkVUSSIvZ2lkOi8vYXBwL0FjdGl2ZVN0b3JhZ2U6OkJsb2IvNz9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIPYXR0YWNoYWJsZQY7AFRJIg9leHBpcmVzX2F0BjsAVDA=--97b885c24fd3d87464525f34a7b6ea117e4c72e6"\n      content-type="application/zip"\n      url="http://localhost:60100/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--940badfc5aee704ef3f98085f87f909baf870660/monaco.ttf-master.zip"\n      filename="monaco.ttf-master.zip"\n      filesize="88996"\n    >\n      <figure class="attachment attachment--file attachment--zip">\n        <figcaption class="attachment__caption">\n          <span class="attachment__name">monaco.ttf-master.zip</span>\n          <span class="attachment__size">86.9 KB</span>\n        </figcaption>\n      </figure>\n    </action-text-attachment>\n  </div>\n</div>\n')),(0,c.kt)("p",null,"B\u1ea1n c\xf2n nh\u1edb m\xecnh ghi \u1edf tr\xean, khi ta vi\u1ebft ",(0,c.kt)("inlineCode",{parentName:"p"},"@post.content"),", th\u1ef1c ch\u1ea5t ta \u0111ang g\u1ecdi ",(0,c.kt)("inlineCode",{parentName:"p"},"@post.content.to_s")," ch\u1ee9?"),(0,c.kt)("p",null,"Th\u1eed \u0111\xe0o s\xe2u v\xe0o ch\xfat:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},'# https://github.com/rails/rails/blob/df8ee09ce7/actiontext/lib/action_text/content.rb#L90\ndef to_rendered_html_with_layout\n  renderer.render(partial: "action_text/content/layout", locals: { content: self })\nend\n\ndef to_s\n  to_rendered_html_with_layout\nend\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-erb"},'<%# https://github.com/rails/rails/blob/df8ee09ce7/actiontext/app/views/action_text/content/_layout.html.erb %>\n<div class="trix-content">\n  <%= render_action_text_content(content) %>\n</div>\n')),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},'# https://github.com/rails/rails/blob/0ec2a907545e47f816993b9fd8cabb552454b1a2/actiontext/app/helpers/action_text/content_helper.rb#L12\ndef render_action_text_content(content)\n  sanitize_action_text_content(render_action_text_attachments(content))\nend\n\ndef sanitize_action_text_content(content)\n  sanitizer.sanitize(content.to_html, tags: allowed_tags, attributes: allowed_attributes, scrubber: scrubber).html_safe\nend\n\ndef render_action_text_attachments(content)\n  content.render_attachments do |attachment|\n    unless attachment.in?(content.gallery_attachments)\n      attachment.node.tap do |node|\n        node.inner_html = render(attachment, in_gallery: false).chomp\n      end\n    end\n  end.render_attachment_galleries do |attachment_gallery|\n    render(layout: attachment_gallery, object: attachment_gallery) do\n      attachment_gallery.attachments.map do |attachment|\n        attachment.node.inner_html = render(attachment, in_gallery: true).chomp\n        attachment.to_html\n      end.join("").html_safe\n    end.chomp\n  end\nend\n')),(0,c.kt)("p",null,"\u0110\u1ea1i kh\xe1i l\xe0 Rails s\u1ebd sanitize \u0111\u1ed1ng rich text c\u1ee7a ta \u0111\u1ec3 tr\xe1nh XSS attack, v\xe0 render template \u0111\u1ed1i v\u1edbi nh\u1eefng attachment."),(0,c.kt)("h2",{id:"integrate-v\u1edbi-active-storage"},"Integrate v\u1edbi Active Storage"),(0,c.kt)("p",null,"H\xe3y quay tr\u1edf l\u1ea1i v\u1edbi model ",(0,c.kt)("inlineCode",{parentName:"p"},"ActionText::RichText")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},"# https://github.com/rails/rails/blob/df8ee09ce7/actiontext/app/models/action_text/rich_text.rb#L14\nclass ActionText::RichText < ActiveRecord::Base\n  has_many_attached :embeds\n\n  before_save do\n    self.embeds = body.attachments.map(&:attachable) if body.present?\n  end\nend\n")),(0,c.kt)("p",null,"Ta d\u1ec5 d\xe0ng hi\u1ec3u 1 c\xe1ch t\u1ed5ng quan l\xe0 Rails s\u1ebd ti\u1ebfn h\xe0nh extract to\xe0n b\u1ed9 attachment trong body, g\xe1n v\xe0o embeds. Sau \u0111\xf3 s\u1ebd save \u0111\u1ed1ng association n\xe0y l\u1ea1i."),(0,c.kt)("p",null,"Th\u1eed xem Rails s\u1ebd extract attachments ra l\xe0m sao."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},"# https://github.com/rails/rails/blob/027085a5972a798cfea60f829a9edabbd67a2818/actiontext/lib/action_text/content.rb#L53\ndef attachables\n  @attachables ||= attachment_nodes.map do |node|\n    ActionText::Attachable.from_node(node)\n  end\nend\n\n# https://github.com/rails/rails/blob/027085a5972a798cfea60f829a9edabbd67a2818/actiontext/lib/action_text/content.rb#L113\ndef attachment_nodes\n  @attachment_nodes ||= fragment.find_all(ActionText::Attachment::SELECTOR)\nend\n")),(0,c.kt)("p",null,"Rails s\u1ebd t\xecm ki\u1ebfm t\u1ea5t c\u1ea3 th\u1ebb ",(0,c.kt)("inlineCode",{parentName:"p"},"action-text-attachment"),", extract nh\u1eefng th\xf4ng tin c\u1ea7n thi\u1ebft \u0111\u1ec3 init \u0111\u01b0\u1ee3c ",(0,c.kt)("inlineCode",{parentName:"p"},"ActiveStorage::Blob")," object."),(0,c.kt)("p",null,"Ta c\u1ea7n ngh\xeda qua h\xe0m ",(0,c.kt)("inlineCode",{parentName:"p"},"Attachable.from_node")," n\u1eefa"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},'# https://github.com/rails/rails/blob/027085a5972a798cfea60f829a9edabbd67a2818/actiontext/lib/action_text/attachable.rb#L10\ndef from_node(node)\n  if attachable = attachable_from_sgid(node["sgid"])\n    attachable\n  elsif attachable = ActionText::Attachables::ContentAttachment.from_node(node)\n    attachable\n  elsif attachable = ActionText::Attachables::RemoteImage.from_node(node)\n    attachable\n  else\n    ActionText::Attachables::MissingAttachable\n  end\nend\n')),(0,c.kt)("p",null,"Trong tr\u01b0\u1eddng h\u1ee3p n\xe0y, Rails s\u1ebd lu\xf4n extract theo strategy l\xe0 ",(0,c.kt)("inlineCode",{parentName:"p"},"sgid"),", c\xe1c b\u1ea1n kh\xf4ng c\u1ea7n quan t\xe2m t\u1edbi 3 nh\xe1nh d\u01b0\u1edbi l\xe0m g\xec cho m\u1ea5t c\xf4ng."),(0,c.kt)("p",null,"C\xf2n nh\u1edb ph\u1ea7n tr\xean m\xecnh \u0111\xe3 \u0111\u1ec1 c\u1eadp t\u1edbi ",(0,c.kt)("inlineCode",{parentName:"p"},"sgid")," ch\u1ee9?"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"//github.com/rails/rails/blob/cc1a5d5620c4cd952b27f6c1bbd16d8780a34d0e/actiontext/app/javascript/actiontext/attachment_upload.js#L26\nhttps: this.attachment.setAttributes({\n  sgid: attributes.attachable_sgid,\n  url: this.createBlobUrl(attributes.signed_id, attributes.filename),\n});\n")),(0,c.kt)("p",null,"Callback n\xe0y \u0111\u01b0\u1ee3c g\u1ecdi sau khi file \u0111\u01b0\u1ee3c upload th\xe0nh c\xf4ng. V\u1eady ",(0,c.kt)("inlineCode",{parentName:"p"},"sgid")," l\xe0 c\xe1i g\xec?"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"sigd")," \u0111\u01b0\u1ee3c encrypt t\u1eeb ",(0,c.kt)("inlineCode",{parentName:"p"},"id")," c\u1ee7a attachment sau khi upload. Khi g\u1eedi l\xean, server s\u1ebd decrypt n\xf3 \u0111\u1ec3 l\u1ea5y l\u1ea1i ",(0,c.kt)("inlineCode",{parentName:"p"},"id"),", g\xe1n attachment v\xe0o record."),(0,c.kt)("p",null,"T\u1ea1i sao l\u1ea1i c\u1ea7n encrypt? C\xe1c b\u1ea1n c\u1ee9 t\u01b0\u1edfng t\u01b0\u1ee3ng, n\u1ebfu d\xf9ng th\u1eb3ng id, do ta upload \u1ea3nh tr\u01b0\u1edbc khi t\u1ea1o record, n\xean khi g\u1eedi params t\u1eeb client l\xean, ch\u1eafc ch\u1eafn s\u1ebd ph\u1ea3i \u0111\u01b0a attachment id v\xe0o \u0111\u1ec3 server l\u01b0u \u0111\xfang association. Client n\xf3 g\u1eedi \u0111\xfang th\xec kh\xf4ng sao, nh\u01b0ng n\u1ebfu n\xf3 g\u1eedi id attachment c\u1ee7a ng\u01b0\u1eddi kh\xe1c th\xec sao? Attachment \u0111\xf3 s\u1ebd chuy\u1ec3n ch\u1ee7 ngay l\u1eadp t\u1ee9c :v C\xf2n n\u1ebfu encrypt th\xec user \u0111\u1ed1 m\xe0 m\xf2 \u0111\u01b0\u1ee3c m\xe3 hash c\u1ee7a attachment ng\u01b0\u1eddi kh\xe1c."),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},'attachable_from_sgid(node["sgid"])')," s\u1ebd tr\u1ea3 v\u1ec1 ",(0,c.kt)("inlineCode",{parentName:"p"},"ActiveStorage::Blob")," object"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},"# https://github.com/rails/rails/blob/f1b8bb4e1f16e4029ddf05515db0c01942521116/actiontext/lib/action_text/attachable.rb#L22\ndef from_attachable_sgid(sgid, options = {})\n  method = sgid.is_a?(Array) ? :locate_many_signed : :locate_signed\n  record = GlobalID::Locator.public_send(method, sgid, options.merge(for: LOCATOR_NAME))\n  record || raise(ActiveRecord::RecordNotFound)\nend\n")),(0,c.kt)("p",null,"N\u1ebfu kh\xf4ng tin, b\u1ea1n h\xe3y th\u1eed ",(0,c.kt)("inlineCode",{parentName:"p"},"rails c")," v\xe0 g\u1ecdi h\xe0m:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ruby"},'GlobalID::Locator.locate_signed(sgid, { for: "attachable" })\n')),(0,c.kt)("h1",{id:"k\u1ebft-lu\u1eadn"},"K\u1ebft lu\u1eadn"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"Action Text")," \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf kh\xe1 hay, code g\u1ecdn, t\u1ea5t c\u1ea3 method \u0111\u1ec1u r\u1ea5t ng\u1eafn, d\u1ec5 hi\u1ec3u."),(0,c.kt)("p",null,"Do l\xe0 built-in n\xean ta c\u0169ng ch\u1ea3 c\u1ea7n c\xe0i c\u1eafm g\xec th\xeam m\u1ec7t ng\u01b0\u1eddi. N\u1ebfu \u0111\xe3 upgrade l\xean Rails 6, b\u1ea1n h\xe3y th\u1eed tr\u1ea3i nghi\u1ec7m n\xf3 xem."),(0,c.kt)("p",null,"C\xf2n \u0111\u1ed1i v\u1edbi phi\xean b\u1ea3n th\u1ea5p h\u01a1n, ta c\u0169ng c\xf3 th\u1ec3 \xe1p d\u1ee5ng flow c\u1ee7a Action Text \u0111\u1ec3 build m\u1ed9t package h\u1ed7 tr\u1ee3 richtext."))}h.isMDXComponent=!0}}]);