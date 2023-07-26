# TDesign Vue + Nuxt Starter

![](https://s1.ax1x.com/2023/07/26/pCjqUMD.png)

本模板仓库使用 [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) (Vue 3) 和 [TDesign Vue Next](https://tdesign.tencent.com/vue-next) 组件库。

除此之外，还使用了以下依赖：
- [Nuxt UI](https://ui.nuxtlabs.com): 基于 Tailwind CSS 的 UI 组件库
- [Nuxt Color Mode](https://color-mode.nuxtjs.org/): 深色/浅色模式
- ESLint: 代码风格检查
- [Vue Macros](https://vue-macros.sxzz.moe): 启用 `$ref`、`$computed` 等语法糖

对于 TDesign Vue，使用了 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 和 [unplugin-vue-component](https://github.com/antfu/unplugin-vue-components) 来自动导入组件以实现 [tree shaking](https://en.wikipedia.org/wiki/Tree_shaking)。

## 目录结构

```
.
├── components  # 组件
├── layouts     # 布局，一般用其中的 default.vue 即可
├── pages       # 页面，每个 SFC 代表一个页面，可用文件夹嵌套
├── public      # 静态资源
├── src
│   ├── types   # unplugin 插件自动生成的类型，项目中的其它类型也放在这里
```

## Setup

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```
