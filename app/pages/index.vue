<template>
  <div class="flex flex-col items-center px-4 py-10 gap-y-8 h-full">
    <h1 class="text-[26px]">Nuxt & TDesign Vue Next</h1>
    <div class="space-x-2">
      <TButton
        ghost
        @click="
          $colorMode.preference =
            $colorMode.preference === 'light' ? 'dark' : 'light'
        "
      >
        <template #icon>
          <TIcon
            class="mr-1"
            :name="$colorMode.preference === 'light' ? 'heart' : 'heart-filled'"
          />
          当前主题：{{ $colorMode.preference === 'light' ? 'Light' : 'Dark' }}
        </template>
      </TButton>
    </div>
    <div class="flex items-center gap-x-4">
      <TButton @click="theme.setTheme('default')">默认主题</TButton>
      <TButton @click="theme.setTheme('test')">主题 1</TButton>
    </div>
    <div class="grid grid-cols-2 sm:flex flex-row items-center gap-2">
      <TButton>按钮示例</TButton>
      <TButton theme="warning" loading>按钮示例</TButton>
      <TButton theme="danger" disabled>按钮示例</TButton>
      <TButton theme="success" variant="outline">按钮示例</TButton>
    </div>

    <div class="flex flex-col sm:flex-row items-center gap-4">
      <!-- tag-name 和 TagName 写法都可以 -->
      <t-switch v-model="isLoading" class="flex-none" size="large">
        <template #label> 加载中 </template>
      </t-switch>
      <TTagInput v-model="tags" drag-sort clearable>
        <template #label> 你喜欢的前端框架： </template>
      </TTagInput>
    </div>
    <TAlert :theme="alertTheme" close>{{ date }}</TAlert>

    <div class="mt-auto">
      <a
        href="https://zeabur.com?referralCode=AnotiaWang&utm_source=AnotiaWang&utm_campaign=oss"
      >
        <img
          src="https://zeabur.com/deployed-on-zeabur-dark.svg"
          alt="Deployed on Zeabur"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  const theme = useThemeStore()

  const tags = ref(['Vue', 'React', 'Angular'])
  const isLoading = ref(true)
  const alertTheme = ref<'success' | 'warning' | 'error' | 'info'>('success')
  let date: Date

  onMounted(() => {
    date = new Date()
    setInterval(() => {
      isLoading.value = !isLoading.value
      if (alertTheme.value === 'success') {
        alertTheme.value = 'warning'
      } else if (alertTheme.value === 'warning') {
        alertTheme.value = 'error'
      } else if (alertTheme.value === 'error') {
        alertTheme.value = 'info'
      } else {
        alertTheme.value = 'success'
      }
    }, 2000)
  })
</script>
