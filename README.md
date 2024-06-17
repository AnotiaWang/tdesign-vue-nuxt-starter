# TDesign Vue + Nuxt Starter

> [!NOTE]
> Nuxt 4 即将发布，此模板的维护重心将会转向 Nuxt 4，请留意官方的 [Nuxt 3 -> 4 迁移说明](https://nuxt.com/docs/getting-started/upgrade#migrating-to-nuxt-4)。Nuxt 3 版本的模板将会移动到 [`nuxt3`](https://github.com/AnotiaWang/tdesign-vue-nuxt-starter/tree/nuxt3) 分支。

![](https://s21.ax1x.com/2024/06/15/pkwSjC6.png)

本模板仓库使用 [Nuxt 3](https://nuxt.com/docs/getting-started/introduction) (Vue 3) 和 [TDesign Vue Next](https://tdesign.tencent.com/vue-next) 组件库。

除此之外，还使用了以下依赖：

- [Tailwind CSS](https://tailwindcss.com/)
- [Nuxt Color Mode](https://color-mode.nuxtjs.org/): 深色/浅色模式
- ESLint + Prettier: 代码风格检查 + 美化
- [unplugin-auto-import 和 unplugin-vue-components](https://unplugin.unjs.io): 自动导入 TDesign Vue Next 的组件以实现 [tree shaking](https://en.wikipedia.org/wiki/Tree_shaking)

## 快速使用本模板

```bash
# 使用 main 分支
npx -y nuxi init -t gh:AnotiaWang/tdesign-vue-nuxt-starter <项目名>
# 如要继续使用 Nuxt 3 版本，请使用 `nuxt3` 分支
npx -y nuxi init -t gh:AnotiaWang/tdesign-vue-nuxt-starter#nuxt3 <项目名>
```

## 目录结构

```
.
├── app             # 前端相关
│   ├── components  # 全局组件
│   ├── hooks       # 自定义 hooks
│   ├── layouts     # Nuxt 布局
│   ├── pages       # 页面，每个 SFC 代表一个页面，可用文件夹嵌套
│   └── types       # TypeScript 类型定义，目前包含了 unplugin 自动生成的类型
├── node_modules
├── public          # 静态资源
│   └── styles
└── server          # 后端相关
```

## 自定义主题

TDesign 支持 [自定义主题](https://tdesign.tencent.com/vue-next/custom-theme)。按照以下步骤修改主题：

1. 在文档页面，点击页面底部的刷子图标，进入主题编辑器。调整完想要的效果后，点击下载按钮，保存 CSS 文件到本地。
2. 将 CSS 文件移动到 `public/styles` 文件夹下，并命名为 `tdesign-theme-{name}.css`，其中 `name` 是你给主题取的名字。
3. 在 `hooks/useTheme.ts` 中，修改:

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
