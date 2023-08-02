# TDesign Vue + Nuxt Starter

![](https://s1.ax1x.com/2023/08/02/pPPiFo9.png)

本模板仓库使用 [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) (Vue 3) 和 [TDesign Vue Next](https://tdesign.tencent.com/vue-next) 组件库。

除此之外，还使用了以下依赖：

- Tailwind CSS
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

## 自定义主题

TDesign 支持 [自定义主题](https://tdesign.tencent.com/vue-next/custom-theme)。按照以下步骤修改主题：

1. 在文档页面，点击页面底部的刷子图标，进入主题编辑器。调整完想要的效果后，点击下载按钮，保存 CSS 文件到本地。
2. 将 CSS 文件移动到 `public/styles` 文件夹下，并命名为 `tdesign-theme-{name}.css`，其中 `name` 是你给主题取的名字。
3. 在 `src/hooks/useTheme.ts` 中，修改:

```ts
type Theme = 'default' | 'test' // 添加/修改成你自己的主题名
```

如有需要，可以配置 defineStore 部分中的 `theme` 变量为你想要的初始主题，默认为 `default`。

然后就可以在代码中调用了：
```ts
const theme = useThemeStore()

theme.setTheme('default')
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
