import{_ as a,c as n,E as l,R as e,o,G as p}from"./chunks/framework.cfa20fa2.js";const A=JSON.parse('{"title":"面包屑导航","description":"","frontmatter":{},"headers":[],"relativePath":"guide/breadcrumb.md"}'),t={name:"guide/breadcrumb.md"},c=e(`<h1 id="面包屑导航" tabindex="-1">面包屑导航 <a class="header-anchor" href="#面包屑导航" aria-label="Permalink to &quot;面包屑导航&quot;">​</a></h1><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>在应用配置里设置：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> globalSettings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Settings</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">breadcrumb</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>当使用文件系统路由时，将无法使用面包屑导航，详细可阅读《<a href="./file-system-route.html">基于文件系统的路由</a>》。</p><h2 id="显示主导航" tabindex="-1">显示主导航 <a class="header-anchor" href="#显示主导航" aria-label="Permalink to &quot;显示主导航&quot;">​</a></h2><p>在应用配置里设置：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> globalSettings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Settings</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">breadcrumb</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableMainMenu</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,8);function r(i,D,F,y,h,C){const s=p("ZoomImg");return o(),n("div",null,[c,l(s,{src:"/breadcrumb-mainmenu.png"})])}const g=a(t,[["render",r]]);export{A as __pageData,g as default};