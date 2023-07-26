type Theme = 'default' | 'test'

const themeStorageKey = 'tdesign-vue-next-theme'

export const useThemeStore = defineStore('theme', () => {
  let theme = $ref<Theme>('default')

  const setTheme = (_theme: Theme) => {
    theme = _theme
  }

  onMounted(() => {
    const storageValue = localStorage.getItem(themeStorageKey)

    if (storageValue) theme = storageValue as Theme
    const styleElement = document.createElement('link')

    watchEffect(() => {
      localStorage.setItem(themeStorageKey, theme)
      styleElement.type = 'text/css'
      styleElement.rel = 'stylesheet'
      styleElement.href = `/styles/tdesign-theme-${theme}.css?t=${Date.now()}`
      if (styleElement.parentElement === document.head) {
        document.head.removeChild(styleElement)
      }
      document.head.appendChild(styleElement)
    })
  })

  return { theme, setTheme }
})
