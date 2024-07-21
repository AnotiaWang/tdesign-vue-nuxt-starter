// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
// @ts-ignore
import configPrettier from 'eslint-config-prettier'
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default withNuxt(pluginPrettierRecommended, configPrettier)
