# 更新日志

只记录 feat/fix 以及破坏性变更。

## v2.11.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.11.0)
🚨 Breaking Changes

- 调整应用配置的配置项，并将应用配置按钮从工具栏删除 &nbsp;-&nbsp; by @hooray [<samp>(1be22)</samp>](https://github.com/fantastic-admin/basic/commit/1be22ab)

🚀 Features

- 引入 stylelint-stylistic 插件 &nbsp;-&nbsp; by @hooray [<samp>(ff9d0)</samp>](https://github.com/fantastic-admin/basic/commit/ff9d037)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.11.0)
🚨 Breaking Changes

- 调整应用配置的配置项，并将应用配置按钮从工具栏删除 &nbsp;-&nbsp; by @hooray [<samp>(69823)</samp>](https://github.com/fantastic-admin/pro/commit/698233ae)

🚀 Features

- 主题配置增加次导航logo背景色和文字颜色 &nbsp;-&nbsp; by @hooray [<samp>(0bd02)</samp>](https://github.com/fantastic-admin/pro/commit/0bd028e1)
- 引入 stylelint-stylistic 插件 &nbsp;-&nbsp; by @hooray [<samp>(7e604)</samp>](https://github.com/fantastic-admin/pro/commit/7e604e53)
- 增加收藏夹功能 &nbsp;-&nbsp; by @hooray [<samp>(a237f)</samp>](https://github.com/fantastic-admin/pro/commit/a237fa2d)
- 增加标签栏固定标签页存储位置配置项 &nbsp;-&nbsp; by @hooray [<samp>(9b0c0)</samp>](https://github.com/fantastic-admin/pro/commit/9b0c0db1)

🐞 Bug Fixes

- 修复标签页拖动排序后数据未更新 &nbsp;-&nbsp; by @hooray [<samp>(714d7)</samp>](https://github.com/fantastic-admin/pro/commit/714d7c96)
- 修复收藏夹从服务端复原报错 &nbsp;-&nbsp; by @hooray [<samp>(db82c)</samp>](https://github.com/fantastic-admin/pro/commit/db82ce11)
:::

## v2.10.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.10.0)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.10.0)
🚀 Features

- 增加页面切换动画开关和配置 &nbsp;-&nbsp; by @hooray [<samp>(6c856)</samp>](https://github.com/fantastic-admin/pro/commit/6c8563c)
- 增加用户偏好设置 &nbsp;-&nbsp; by @hooray [<samp>(ab118)</samp>](https://github.com/fantastic-admin/pro/commit/ab1185f)
- 标签页记忆功能增加配置项开关 &nbsp;-&nbsp; by @hooray [<samp>(53427)</samp>](https://github.com/fantastic-admin/pro/commit/534275b)

🐞 Bug Fixes

- 修复在开启标签页记忆功能时，常驻标签页会被重复记录的bug &nbsp;-&nbsp; by @hooray [<samp>(d0a08)</samp>](https://github.com/fantastic-admin/pro/commit/d0a0883)
:::

## v2.9.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.9.0)
🚀 Features

- 用户权限变更后，自动更新导航菜单和页面权限，无需刷新页面或者重新登录 &nbsp;-&nbsp; by @hooray [<samp>(df9fd)</samp>](https://github.com/fantastic-admin/basic/commit/df9fd2a)

🐞 Bug Fixes

- 修复 axios baseURL 配置，解决构建后 baseURL 不生效的问题 &nbsp;-&nbsp; by @hooray [<samp>(4ba5e)</samp>](https://github.com/fantastic-admin/basic/commit/4ba5ea2)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.9.0)
🚀 Features

- 用户权限变更后，自动更新导航菜单和页面权限，无需刷新页面或者重新登录 &nbsp;-&nbsp; by @hooray [<samp>(50d45)</samp>](https://github.com/fantastic-admin/pro/commit/50d450f)
- 标签栏增加记忆功能，刷新页面不丢失标签页 &nbsp;-&nbsp; by @hooray [<samp>(88cff)</samp>](https://github.com/fantastic-admin/pro/commit/88cff88)

🐞 Bug Fixes

- 修复 axios baseURL 配置，解决构建后 baseURL 不生效的问题 &nbsp;-&nbsp; by @hooray [<samp>(628f3)</samp>](https://github.com/fantastic-admin/pro/commit/628f312)
- 修复登出时页面报错 &nbsp;-&nbsp; by @hooray [<samp>(042bc)</samp>](https://github.com/fantastic-admin/pro/commit/042bc94)
- 增加 dropdown 组件外边框的临时解决方案 &nbsp;-&nbsp; by @hooray [<samp>(88de1)</samp>](https://github.com/fantastic-admin/pro/commit/88de127)
:::

## v2.8.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.8.0)
🚨 Breaking Changes

- 移除 vite-plugin-html 插件 &nbsp;-&nbsp; by @hooray [<samp>(b3a59)</samp>](https://github.com/fantastic-admin/basic/commit/b3a590d)

🚀 Features

- 增加403无权限页面 &nbsp;-&nbsp; by @hooray [<samp>(2c1df)</samp>](https://github.com/fantastic-admin/basic/commit/2c1dfe3)
- 自动生成页面模板增加基于文件系统路由的配置项 &nbsp;-&nbsp; by @hooray [<samp>(1e2b2)</samp>](https://github.com/fantastic-admin/basic/commit/1e2b21f)

🐞 Bug Fixes

- 修复路由`meta.auth`设置为`''`/`[]`时，权限判断为无权限的问题 &nbsp;-&nbsp; by @hooray [<samp>(6a0b6)</samp>](https://github.com/fantastic-admin/basic/commit/6a0b659)
- 修复登录页标题未正常显示 &nbsp;-&nbsp; by @hooray [<samp>(e889f)</samp>](https://github.com/fantastic-admin/basic/commit/e889f38)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.8.0)
🚨 Breaking Changes

- 移除 vite-plugin-html 插件 &nbsp;-&nbsp; by @hooray [<samp>(f636c)</samp>](https://github.com/fantastic-admin/pro/commit/f636c50)

🚀 Features

- 增加403无权限页面 &nbsp;-&nbsp; by @hooray [<samp>(ba868)</samp>](https://github.com/fantastic-admin/pro/commit/ba86822)
- 自动生成页面模板增加基于文件系统路由的配置项 &nbsp;-&nbsp; by @hooray [<samp>(3f2ae)</samp>](https://github.com/fantastic-admin/pro/commit/3f2ae0b)

🐞 Bug Fixes

- 修复路由`meta.auth`设置为`''`/`[]`时，权限判断为无权限的问题 &nbsp;-&nbsp; by @hooray [<samp>(80cef)</samp>](https://github.com/fantastic-admin/pro/commit/80cef4d)
- 修复登录页标题未正常显示 &nbsp;-&nbsp; by @hooray [<samp>(a2939)</samp>](https://github.com/fantastic-admin/pro/commit/a29398d)
:::

## v2.7.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.7.0)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.7.0)
🚀 Features

- 增加 timeago 指令和组合式函数 &nbsp;-&nbsp; by @hooray [<samp>(b1236)</samp>](https://github.com/fantastic-admin/pro/commit/b12364e)
:::

## v2.6.2

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.6.2)
🐞 Bug Fixes

- 修复面包屑导航显示bug &nbsp;-&nbsp; by @hooray [<samp>(25569)</samp>](https://github.com/fantastic-admin/basic/commit/25569b1)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.6.2)
🚀 Features

- IconPicker 组件增加 `size` 属性 &nbsp;-&nbsp; by @hooray [<samp>(9e46f)</samp>](https://github.com/fantastic-admin/pro/commit/9e46f2d)

🐞 Bug Fixes

- 修复搜索未开启时，标签栏快捷搜索入口依旧显示的问题 &nbsp;-&nbsp; by @hooray [<samp>(ea94a)</samp>](https://github.com/fantastic-admin/pro/commit/ea94a29)
- 修复 IconPicker 组件设置图标集外的值报错的问题 &nbsp;-&nbsp; by @hooray [<samp>(39ed8)</samp>](https://github.com/fantastic-admin/pro/commit/39ed8a1)
- 调整 IconPicker 组件预览图标不对齐 &nbsp;-&nbsp; by @hooray [<samp>(23314)</samp>](https://github.com/fantastic-admin/pro/commit/23314a6)
- 修复面包屑导航显示bug &nbsp;-&nbsp; by @hooray [<samp>(5f88d)</samp>](https://github.com/fantastic-admin/pro/commit/5f88d50)
:::

## v2.6.1

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.6.1)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.6.1)
🚨 Breaking Changes

- 移除 SignCanvas 组件 &nbsp;-&nbsp; by @hooray [<samp>(db862)</samp>](https://github.com/fantastic-admin/pro/commit/db862da)

🐞 Bug Fixes

- 解决低版本浏览器不支持 `at()` API &nbsp;-&nbsp; by @hooray [<samp>(1c856)</samp>](https://github.com/fantastic-admin/pro/commit/1c8563d)
- 修复标准模块模板返回按钮逻辑判断错误 &nbsp;-&nbsp; by @hooray [<samp>(6bab6)</samp>](https://github.com/fantastic-admin/pro/commit/6bab647)
- 修复多个 iframe 路由相互跳转无法缓存的问题 &nbsp;-&nbsp; by @hooray [<samp>(82e2c)</samp>](https://github.com/fantastic-admin/pro/commit/82e2c2a)
:::

## v2.6.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.6.0)
🚨 Breaking Changes

- Pinia store 改为 setup 写法 &nbsp;-&nbsp; by @hooray [<samp>(800e7)</samp>](https://github.com/fantastic-admin/basic/commit/800e729)

🚀 Features

- 引入 vite-plugin-vue-inspector 插件 &nbsp;-&nbsp; by @hooray [<samp>(b7b94)</samp>](https://github.com/fantastic-admin/basic/commit/b7b949c)

🐞 Bug Fixes

- 修复应用配置中复制配置按钮，复制内容过多的问题 &nbsp;-&nbsp; by @hooray [<samp>(7ee5b)</samp>](https://github.com/fantastic-admin/basic/commit/7ee5bcb)
- 修复预览图片无法完整覆盖 el-table 固定列 &nbsp;-&nbsp; by @hooray [<samp>(2e461)</samp>](https://github.com/fantastic-admin/basic/commit/2e4610a)
- 修复次导航收起时图标不居中 &nbsp;-&nbsp; by @hooray [<samp>(4c351)</samp>](https://github.com/fantastic-admin/basic/commit/4c3512a)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.6.0)
🚨 Breaking Changes

- Pinia store 改为 setup 写法 &nbsp;-&nbsp; by @hooray [<samp>(57496)</samp>](https://github.com/fantastic-admin/pro/commit/574968b)

🚀 Features

- 引入 vite-plugin-vue-inspector 插件 &nbsp;-&nbsp; by @hooray [<samp>(09821)</samp>](https://github.com/fantastic-admin/pro/commit/098210e)
- Layout-container 组件增加隐藏切换按钮属性 &nbsp;-&nbsp; by @hooray [<samp>(7963a)</samp>](https://github.com/fantastic-admin/pro/commit/7963a85)
- 标准模块增加表格高度自适应配置 &nbsp;-&nbsp; by @hooray [<samp>(79503)</samp>](https://github.com/fantastic-admin/pro/commit/79503da)

🐞 Bug Fixes

- 修复应用配置中复制配置按钮，复制内容过多的问题 &nbsp;-&nbsp; by @hooray [<samp>(1baa1)</samp>](https://github.com/fantastic-admin/pro/commit/1baa1ba)
- 修复预览图片无法完整覆盖 el-table 固定列 &nbsp;-&nbsp; by @hooray [<samp>(03918)</samp>](https://github.com/fantastic-admin/pro/commit/03918e7)
- 修复次导航收起时图标不居中 &nbsp;-&nbsp; by @hooray [<samp>(6b640)</samp>](https://github.com/fantastic-admin/pro/commit/6b6406c)
:::

## v2.5.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.5.0)
🚨 Breaking Changes

- 顶栏增加粘性模式 &nbsp;-&nbsp; by @hooray [<samp>(7882c)</samp>](https://github.com/fantastic-admin/basic/commit/7882cd8)
- 将类型定义 d.ts 文件统一存放到 /src/types/ 目录下 &nbsp;-&nbsp; by @hooray [<samp>(6f885)</samp>](https://github.com/fantastic-admin/basic/commit/6f88513)

🐞 Bug Fixes

- 修复导航栏a标签href异常 &nbsp;-&nbsp; by @hooray [<samp>(b9e48)</samp>](https://github.com/fantastic-admin/basic/commit/b9e4884)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.5.0)
🚨 Breaking Changes

- 顶栏增加粘性模式 &nbsp;-&nbsp; by @hooray [<samp>(cce12)</samp>](https://github.com/fantastic-admin/pro/commit/cce12f6)
- 将类型定义 d.ts 文件统一存放到 /src/types/ 目录下 &nbsp;-&nbsp; by @hooray [<samp>(db5d2)</samp>](https://github.com/fantastic-admin/pro/commit/db5d2a1)

🚀 Features

- 增加标签页搜索 &nbsp;-&nbsp; by @hooray [<samp>(a868d)</samp>](https://github.com/fantastic-admin/pro/commit/a868ddb)

🐞 Bug Fixes

- 修复导航栏a标签href异常 &nbsp;-&nbsp; by @hooray [<samp>(66a24)</samp>](https://github.com/fantastic-admin/pro/commit/66a248f)
:::

## v2.4.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.4.0)
🚨 Breaking Changes

- 增加外链路由跳转提示页面，重构外链路由的配置方式 &nbsp;-&nbsp; by @hooray [<samp>(0c430)</samp>](https://github.com/fantastic-admin/basic/commit/0c43078)

🐞 Bug Fixes

- 修复 eslint 警告 &nbsp;-&nbsp; by @hooray [<samp>(7474a)</samp>](https://github.com/fantastic-admin/basic/commit/7474a19)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.4.0)
🚨 Breaking Changes

- Iframe 路由支持页面缓存 &nbsp;-&nbsp; by @hooray [<samp>(2e8e2)</samp>](https://github.com/fantastic-admin/pro/commit/2e8e2cb)
- 增加外链路由跳转提示页面，重构外链路由的配置方式 &nbsp;-&nbsp; by @hooray [<samp>(5388d)</samp>](https://github.com/fantastic-admin/pro/commit/5388d11)

🚀 Features

- 应用配置增加 iframe 最大缓存数 &nbsp;-&nbsp; by @hooray [<samp>(4184a)</samp>](https://github.com/fantastic-admin/pro/commit/4184aeb)

🐞 Bug Fixes

- 修复 eslint 警告 &nbsp;-&nbsp; by @hooray [<samp>(4ecf6)</samp>](https://github.com/fantastic-admin/pro/commit/4ecf64f)
- 修复路由或导航后端生成错误 &nbsp;-&nbsp; by @hooray [<samp>(e5470)</samp>](https://github.com/fantastic-admin/pro/commit/e5470a9)
- 修复后端返回iframe路由访问错误 &nbsp;-&nbsp; by @hooray [<samp>(19132)</samp>](https://github.com/fantastic-admin/pro/commit/19132a6)
:::

## v2.3.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.3.0)
🚨 Breaking Changes

- 移除自定义 Route.recordRaw 类型，改用 RouteRecordRaw 类型 &nbsp;-&nbsp; by @hooray [<samp>(e2443)</samp>](https://github.com/fantastic-admin/basic/commit/e24431c)

🚀 Features

- 路由`meta.title`修改为非必须 &nbsp;-&nbsp; by @hooray [<samp>(776fe)</samp>](https://github.com/fantastic-admin/basic/commit/776fe7a)

🐞 Bug Fixes

- 修复文件系统路由模式下，全局搜索列表 icon 显示不全 &nbsp;-&nbsp; by @hooray [<samp>(f85a9)</samp>](https://github.com/fantastic-admin/basic/commit/f85a911)
- 修复标题显示异常 &nbsp;-&nbsp; by @hooray [<samp>(5c649)</samp>](https://github.com/fantastic-admin/basic/commit/5c64949)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.3.0)
🚨 Breaking Changes

- 移除自定义 Route.recordRaw 类型，改用 RouteRecordRaw 类型 &nbsp;-&nbsp; by @hooray [<samp>(e1edd)</samp>](https://github.com/fantastic-admin/pro/commit/e1eddbf)

🚀 Features

- 路由`meta.title`修改为非必须 &nbsp;-&nbsp; by @hooray [<samp>(bbde5)</samp>](https://github.com/fantastic-admin/pro/commit/bbde595)
- 文件系统路由模式下，`meta.title`修改为非必须 &nbsp;-&nbsp; by @hooray [<samp>(17393)</samp>](https://github.com/fantastic-admin/pro/commit/173932e)
- 主导航增加`meta.activeIcon`设置项 &nbsp;-&nbsp; by @hooray [<samp>(3a6d9)</samp>](https://github.com/fantastic-admin/pro/commit/3a6d94e)

🐞 Bug Fixes

- 修复文件系统路由模式下，全局搜索列表 icon 显示不全 &nbsp;-&nbsp; by @hooray [<samp>(5e1b6)</samp>](https://github.com/fantastic-admin/pro/commit/5e1b6e2)
:::

## v2.2.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.2.0)
🚨 Breaking Changes

- 控制台修改为主页，路由调整为根路由 &nbsp;-&nbsp; by @hooray [<samp>(b2e33)</samp>](https://github.com/fantastic-admin/basic/commit/b2e33ca)

🐞 Bug Fixes

- 修复文件系统路由下，次导航无法按层级依次展开 &nbsp;-&nbsp; by @hooray [<samp>(f0a52)</samp>](https://github.com/fantastic-admin/basic/commit/f0a523f)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.2.0)
🚨 Breaking Changes

- 控制台修改为主页，路由调整为根路由 &nbsp;-&nbsp; by @hooray [<samp>(0ba3b)</samp>](https://github.com/fantastic-admin/pro/commit/0ba3bd3)
- 新增标签页合并规则 &nbsp;-&nbsp; by @hooray [<samp>(38594)</samp>](https://github.com/fantastic-admin/pro/commit/38594d4)

🚀 Features

- 支持标签页宽度自适应 &nbsp;-&nbsp; by @hooray [<samp>(6addf)</samp>](https://github.com/fantastic-admin/pro/commit/6addf68)

🐞 Bug Fixes

- 修复移动端下标签页拖动禁用失效 &nbsp;-&nbsp; by @hooray [<samp>(30c61)</samp>](https://github.com/fantastic-admin/pro/commit/30c6161)
- 动态设置标题导致面包屑导航上主导航显示错乱 &nbsp;-&nbsp; by @hooray [<samp>(2a9f4)</samp>](https://github.com/fantastic-admin/pro/commit/2a9f47f)
- 修复标签栏快捷操作下拉菜单里，当前激活标签页不显示关闭按钮 &nbsp;-&nbsp; by @hooray [<samp>(376cf)</samp>](https://github.com/fantastic-admin/pro/commit/376cfa8)
:::

## v2.1.3

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.1.3)
无重大变化
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.1.3)
无重大变化
:::

## v2.1.2

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.1.2)
🐞 Bug Fixes

- 修复标准模块里 useTabbar() 使用报错 &nbsp;-&nbsp; by @hooray [<samp>(ee5e4)</samp>](https://github.com/fantastic-admin/pro/commit/ee5e471)
:::

## v2.1.1

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.1.1)
🚀 Features

- Logo 支持非正方形图片 &nbsp;-&nbsp; by @hooray [<samp>(57b18)</samp>](https://github.com/fantastic-admin/basic/commit/57b18c2)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.1.1)
🚀 Features

- Logo 支持非正方形图片 &nbsp;-&nbsp; by @hooray [<samp>(0285a)</samp>](https://github.com/fantastic-admin/pro/commit/0285acf)
:::

## v2.1.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.1.0)
🚨 Breaking Changes

- UseCurrentInstance() 重命名为 useGlobalProperties() &nbsp;-&nbsp; by @hooray [<samp>(c091c)</samp>](https://github.com/fantastic-admin/basic/commit/c091c68)

🐞 Bug Fixes

- 修复类型报错 &nbsp;-&nbsp; by @hooray [<samp>(fe6d8)</samp>](https://github.com/fantastic-admin/basic/commit/fe6d81c)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.1.0)
🚨 Breaking Changes

- UseCurrentInstance() 重命名为 useGlobalProperties() &nbsp;-&nbsp; by @hooray [<samp>(5db74)</samp>](https://github.com/fantastic-admin/pro/commit/5db7401)

🚀 Features

- UseTabbar 增加 open 函数 &nbsp;-&nbsp; by @hooray [<samp>(7aeca)</samp>](https://github.com/fantastic-admin/pro/commit/7aecaaa)
- UseTabbar 的 closeById 函数增加参数默认值 &nbsp;-&nbsp; by @hooray [<samp>(a1797)</samp>](https://github.com/fantastic-admin/pro/commit/a1797d5)
- 支持在面包屑导航上显示主导航 &nbsp;-&nbsp; by @hooray [<samp>(068b5)</samp>](https://github.com/fantastic-admin/pro/commit/068b535)
- 支持在标签栏上显示图标 &nbsp;-&nbsp; by @hooray [<samp>(2aff6)</samp>](https://github.com/fantastic-admin/pro/commit/2aff683)
- 标签栏增加快捷操作下拉菜单 &nbsp;-&nbsp; by @hooray [<samp>(cf231)</samp>](https://github.com/fantastic-admin/pro/commit/cf2311d)

🐞 Bug Fixes

- 修复类型报错 &nbsp;-&nbsp; by @hooray [<samp>(2f9a4)</samp>](https://github.com/fantastic-admin/pro/commit/2f9a457)
- 修改 element plus 全屏 loading 的层级 &nbsp;-&nbsp; by @hooray [<samp>(90eea)</samp>](https://github.com/fantastic-admin/pro/commit/90eea04)
- 修复配置合并后部分配置项消失的问题 &nbsp;-&nbsp; by @hooray [<samp>(65853)</samp>](https://github.com/fantastic-admin/pro/commit/6585342)
- 修复面包屑导航开启显示主导航后，访问控制台页面报错的问题 &nbsp;-&nbsp; by @hooray [<samp>(2ee44)</samp>](https://github.com/fantastic-admin/pro/commit/2ee44ee)
- 修复在文件路由系统下标签页显示报错 &nbsp;-&nbsp; by @hooray [<samp>(9044b)</samp>](https://github.com/fantastic-admin/pro/commit/9044b9e)
- 修复刷新按钮点击报错 &nbsp;-&nbsp; by @hooray [<samp>(c850c)</samp>](https://github.com/fantastic-admin/pro/commit/c850cf5)
- 修复 SignCanvas 组件类型报错 &nbsp;-&nbsp; by @hooray [<samp>(9484a)</samp>](https://github.com/fantastic-admin/pro/commit/9484a2a)
- 修复开发环境保存后当前标签页选中效果失效 &nbsp;-&nbsp; by @hooray [<samp>(5b3bf)</samp>](https://github.com/fantastic-admin/pro/commit/5b3bf98)
:::

## v2.0.2

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.0.2)
🐞 Bug Fixes

- 修复获取侧边栏导航最深一级路由可能返回为空的问题 &nbsp;-&nbsp; by @hooray [<samp>(07b9e)</samp>](https://github.com/fantastic-admin/basic/commit/07b9e31)
- 调整部分定位组件的z-index层级 &nbsp;-&nbsp; by @hooray [<samp>(925ee)</samp>](https://github.com/fantastic-admin/basic/commit/925ee00)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.0.2)
🐞 Bug Fixes

- 补充遗漏的文件生成模式 &nbsp;-&nbsp; by @hooray [<samp>(feaec)</samp>](https://github.com/fantastic-admin/pro/commit/feaec07)
- 修复获取侧边栏导航最深一级路由可能返回为空的问题 &nbsp;-&nbsp; by @hooray [<samp>(f2a50)</samp>](https://github.com/fantastic-admin/pro/commit/f2a5030)
- 调整部分定位组件的z-index层级 &nbsp;-&nbsp; by @hooray [<samp>(37b1a)</samp>](https://github.com/fantastic-admin/pro/commit/37b1a18)
:::

## v2.0.1

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.0.1)
🐞 Bug Fixes

- 修改 mock 文件引入后缀 &nbsp;-&nbsp; by @hooray [<samp>(5a75e)</samp>](https://github.com/fantastic-admin/basic/commit/5a75e56)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.0.1)
无重大变化
:::

## v2.0.0

:::info [基础版](https://github.com/fantastic-admin/basic/releases/tag/v2.0.0)
🚨 Breaking Changes

- TypeScript 支持 &nbsp;-&nbsp; by @hooray [<samp>(f17fd)</samp>](https://github.com/fantastic-admin/basic/commit/f17fd5e)
:::

:::tip [专业版](https://github.com/fantastic-admin/pro/releases/tag/v2.0.0)
🚨 Breaking Changes

- TypeScript 支持 &nbsp;-&nbsp; by @hooray [<samp>(8958a)</samp>](https://github.com/fantastic-admin/pro/commit/8958a8e)
:::