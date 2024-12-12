import{_ as s,c as a,o as n,R as l}from"./chunks/framework.cfa20fa2.js";const F=JSON.parse('{"title":"全局状态管理","description":"","frontmatter":{},"headers":[],"relativePath":"guide/store.md"}'),e={name:"guide/store.md"},p=l(`<h1 id="全局状态管理" tabindex="-1">全局状态管理 <a class="header-anchor" href="#全局状态管理" aria-label="Permalink to &quot;全局状态管理&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">Pinia</a> 已正式成为 Vue.js 官方状态库，如果你对 Pinia 还不熟悉，除了通过 Pinia 官网学习外，我还收集了一些文字/视频的介绍，可以帮助你快速上手。</p><ul><li><a href="https://mp.weixin.qq.com/s/_OlLFedVJfyEapGzYFETuw" target="_blank" rel="noreferrer">欧耶！Pinia 正式成为 vuejs 的一员</a></li><li><a href="https://mp.weixin.qq.com/s/4B-ZzOXdYrF-Auvm_wWBVQ" target="_blank" rel="noreferrer">全新的 Vue3 状态管理工具：Pinia</a></li><li><a href="https://www.bilibili.com/video/BV1Mb4y1X7NL/" target="_blank" rel="noreferrer">【探索学习】面向未来的 Vuex -- pinia</a></li></ul></div><p>全局状态文件存放在 <code>/src/store/modules/</code> 目录下，请按模块进行区分。同时请保证文件名和文件内唯一ID保持一致，建议使用 <code>pnpm new</code> 指令进行创建。</p><p>例如新建一个 <code>example.ts</code> 的文件：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> useExampleStore </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineStore</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 唯一ID</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">example</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">state</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">getters</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> useExampleStore</span></span></code></pre></div><p>使用方法：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> useExampleStore </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/store/modules/example</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> exampleStore </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useExampleStore</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">exampleStore</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span></span>
<span class="line"><span style="color:#A6ACCD;">exampleStore</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doSomething</span><span style="color:#A6ACCD;">()</span></span></code></pre></div>`,7),o=[p];function t(r,c,i,D,y,A){return n(),a("div",null,o)}const d=s(e,[["render",t]]);export{F as __pageData,d as default};
