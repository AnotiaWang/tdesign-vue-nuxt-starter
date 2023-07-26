<template>
  <Layout>
    <NuxtPage />
  </Layout>
</template>

<script setup lang="ts">
  import Layout from '@/layouts/default.vue'

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
