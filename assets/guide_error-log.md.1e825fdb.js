import{_ as s,c as a,o,R as e}from"./chunks/framework.cfa20fa2.js";const y=JSON.parse('{"title":"错误日志","description":"","frontmatter":{},"headers":[],"relativePath":"guide/error-log.md"}'),n={name:"guide/error-log.md"},l=e(`<h1 id="错误日志" tabindex="-1">错误日志 <sup class="pro-badge"></sup> <a class="header-anchor" href="#错误日志" aria-label="Permalink to &quot;错误日志 &lt;sup class=&quot;pro-badge&quot; /&gt;&quot;">​</a></h1><p>在应用配置中设置：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> globalSettings</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Settings</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">all</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">app</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enableErrorLog</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>然后需要到 <code>/src/utils/error.log.ts</code> 文件里编写业务代码，框架为方便演示，将错误日志记录在 <code>sessionStorage</code> 里。</p><p>开发者需要根据实际业务情况修改代码，例如将增加上报信息，记录用户账号、token等数据，并且将错误日志进行上报。</p><p>由于开启错误日志监控后，Vue 相关的错误都不会在控制台里显示，所以在开发环境下即使开启错误日志也不会被启用，如果需要在开发环境下测试，可在 <code>/src/util/error.log.ts</code> 里修改开启的条件判断。</p>`,6),p=[l];function t(r,c,i,d,D,g){return o(),a("div",null,p)}const C=s(n,[["render",t]]);export{y as __pageData,C as default};