import{_ as s,c as n,o as a,R as l}from"./chunks/framework.cfa20fa2.js";const d=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"components/index.md"}'),t={name:"components/index.md"},o=l(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p>框架提供一系列的组件方便快速开发。</p><h2 id="基础组件" tabindex="-1">基础组件 <a class="header-anchor" href="#基础组件" aria-label="Permalink to &quot;基础组件&quot;">​</a></h2><p>基础组件由 <a href="https://element-plus.org/#/zh-CN" target="_blank" rel="noreferrer">Element Plus</a> 提供，其中包含<strong>按钮</strong>、<strong>文字链接</strong>、<strong>单选框</strong>、<strong>多选框</strong>、<strong>输入框</strong>、<strong>计数器</strong>、<strong>级联选择器</strong>、<strong>开关</strong>、<strong>滑块</strong>等 <strong>50+</strong> 个组件。</p><p>阅读并学习请查看 <a href="https://element-plus.org/#/zh-CN" target="_blank" rel="noreferrer">Element Plus 官方文档</a>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>为了统一图标的使用，框架没有采用 Element Plus 官方图标的使用方式，这意味着部分 Element Plus 组件的 icon 属性将无法使用，例如 Button 按钮组件。</p><div class="language-template"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 无法使用 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">el-icon-edit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">编辑</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 可以使用插槽代替 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ep:edit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-icon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  编辑</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-button</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>如果你习惯 Element Plus 官方图标的使用方式，需执行 <code>pnpm install @element-plus/icons-vue</code> 安装依赖，并按照官方的使用方式引入图标，点击<a href="http://element-plus.org/zh-CN/component/icon.html" target="_blank" rel="noreferrer">查看</a>详细介绍。</p></div><h2 id="扩展组件" tabindex="-1">扩展组件 <a class="header-anchor" href="#扩展组件" aria-label="Permalink to &quot;扩展组件&quot;">​</a></h2><p>扩展组件为框架封装的组件，有全新开发的组件，也有在 Element Plus 组件上二次封装的组件，还有一些则是封装了第三方的插件。</p><p>组件源码完全开放，如果觉得用着不顺手，可以到 <code>/src/components/</code> 目录下找到对应组件自行修改。</p>`,9),e=[o];function p(r,c,i,D,F,y){return a(),n("div",null,e)}const m=s(t,[["render",p]]);export{d as __pageData,m as default};