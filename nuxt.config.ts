import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vue-macros/nuxt',
    '@pinia/nuxt',
    'nuxt-simple-robots',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  plugins: [],
  watch: ['./tailwind.config.js'],
  colorMode: {
    preference: 'light',
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
        dts: 'src/types/components.d.ts',
        resolvers: [
          TDesignResolver({
            library: 'vue-next',
          }),
        ],
      }),
      AutoImport({
        imports: [],
        dts: 'src/types/auto-imports.d.ts',
        dirs: [
          'src/hooks/**',
          'src/stores',
          'src/constants',
          'src/utils/**',
          'src/layouts',
        ],
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
