import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    'nuxt-simple-robots',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
  ],
  plugins: [],
  watch: ['./tailwind.config.js'],
  colorMode: {
    preference: 'light',
    classSuffix: '',
  },
  // Sitemap module configuration: https://nuxtseo.com/site-config/getting-started/how-it-works
  site: {
    url: 'https://tdesign-vue-nuxt-starter.vercel.app', // FIXME: Your website URL
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
        resolvers: [
          TDesignResolver({
            library: 'vue-next',
          }),
        ],
      }),
      AutoImport({
        imports: ['pinia'],
        dts: 'types/auto-imports.d.ts',
        dirs: ['hooks/**', 'stores', 'constants', 'utils/**', 'layouts'],
        vueTemplate: true,
        resolvers: [
          TDesignResolver({
            library: 'vue-next',
          }),
        ],
      }),
    ],
  },
})
