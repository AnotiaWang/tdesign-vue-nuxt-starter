import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxt/eslint',
    '@tdesign-vue-next/nuxt',
  ],

  build: {
    transpile: ['tdesign-vue-next'],
  },

  plugins: [],

  tailwindcss: {
    configPath: './app/tailwind.config.js',
    exposeConfig: true,
    viewer: true,
  },

  colorMode: {
    preference: 'system',
    dataValue: 'theme',
    classSuffix: '',
  },

  // Sitemap module configuration: https://nuxtseo.com/site-config/getting-started/how-it-works
  site: {
    url: 'https://tdesign-vue-nuxt-starter.ataw.top', // FIXME: Your website URL
  },

  nitro: {
    compressPublicAssets: { brotli: true, gzip: true },
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
    plugins: [
      Components({
        dts: 'types/components.d.ts',
        resolvers: [],
      }),
      AutoImport({
        imports: ['pinia'],
        dts: 'types/auto-imports.d.ts',
        dirs: ['hooks/**', 'stores', 'constants', 'utils/**', 'layouts'],
        vueTemplate: true,
        resolvers: [],
      }),
    ],
  },

  future: {
    // 启用 Nuxt 4 功能前瞻
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-07-19',
})
