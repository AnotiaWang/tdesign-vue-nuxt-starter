<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import 'tdesign-vue-next/es/style/index.css'

  const colorMode = useColorMode()

  onBeforeMount(() => {
    watchEffect(() => {
      if (colorMode.preference === 'dark') {
        document.documentElement.setAttribute('theme-mode', 'dark')
      } else {
        document.documentElement.removeAttribute('theme-mode')
      }
    })
  })
</script>
