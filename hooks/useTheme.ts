type Theme = 'default' | 'test'

const themeStorageKey = 'tdesign-vue-next-theme'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>('default')

  const setTheme = (_theme: Theme) => {
    theme.value = _theme
  }

  onMounted(() => {
    const storageValue = localStorage.getItem(themeStorageKey)

    if (storageValue) theme.value = storageValue as Theme
    const styleElement = document.createElement('link')

    watchEffect(() => {
      localStorage.setItem(themeStorageKey, theme.value)
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
