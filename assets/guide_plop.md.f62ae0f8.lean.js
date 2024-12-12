import{_ as c,c as t,E as l,R as s,z as e,a as o,o as n,G as p}from"./chunks/framework.cfa20fa2.js";const q=JSON.parse('{"title":"代码文件自动生成","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plop.md"}'),r={name:"guide/plop.md"},d=s("",8),i=e("p",null,[o("page 模式下，只能在 "),e("code",null,"/src/views/"),o(" 目录下选择指定的文件夹进行生成，生成的文件中，部分关键位置会被替换掉，例如 "),e("code",null,"<page-header />"),o(" 中的 "),e("code",null,"title"),o(" 会按照你输入的中文名称替换，页面的 "),e("code",null,"name"),o(" 会根据当前文件目录和文件名自动生成，确保唯一。")],-1),m=e("h2",{id:"component",tabindex:"-1"},[o("component "),e("a",{class:"header-anchor",href:"#component","aria-label":'Permalink to "component"'},"​")],-1),_=e("p",null,[o("component 模式可以选择生成的是公共组件还是局部组件，公共组件生成目录为 "),e("code",null,"/src/components/"),o(" ，局部组件则在 "),e("code",null,"/src/views/"),o(" 目录下选择指定的文件夹进行生成。")],-1),h=e("h2",{id:"store",tabindex:"-1"},[o("store "),e("a",{class:"header-anchor",href:"#store","aria-label":'Permalink to "store"'},"​")],-1),u=e("p",null,[o("store 模式则会在 "),e("code",null,"/src/store/modules/"),o(" 目录下生成一个空模板")],-1),f=e("h2",{id:"mock",tabindex:"-1"},[o("mock "),e("a",{class:"header-anchor",href:"#mock","aria-label":'Permalink to "mock"'},"​")],-1),g=e("p",null,[o("mock 模式则会在 "),e("code",null,"/src/mock/"),o(" 目录下生成一个标准 CURD 的 mock 数据")],-1),k=e("h2",{id:"module",tabindex:"-1"},[o("module "),e("sup",{class:"pro-badge"}),o(),e("a",{class:"header-anchor",href:"#module","aria-label":'Permalink to "module <sup class="pro-badge" />"'},"​")],-1),b=e("p",null,"module 模式是一个标准模块模板，会在指定目录下生成模块文件夹，并且包含列表页、编辑（详情）页，以及相关局部组件。",-1),x=e("p",null,[o("这块部分详细介绍请阅读《"),e("a",{href:"./plop-module.html"},"标准模块"),o("》。")],-1);function P(v,N,T,w,V,I){const a=p("ZoomImg");return n(),t("div",null,[d,l(a,{src:"/plop-page.gif"}),i,m,l(a,{src:"/plop-component.gif"}),_,h,l(a,{src:"/plop-store.gif"}),u,f,l(a,{src:"/plop-mock.gif"}),g,k,l(a,{src:"/plop-module.gif"}),b,x])}const C=c(r,[["render",P]]);export{q as __pageData,C as default};