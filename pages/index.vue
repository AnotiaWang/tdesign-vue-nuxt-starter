<template>
  <div class="flex flex-col items-center py-10 gap-y-8">
    <span class="text-[30px]">Nuxt & TDesign Vue Next</span>
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
    <div class="flex items-center gap-x-5">
      <TButton>按钮示例</TButton>
      <TButton theme="warning" loading>按钮示例</TButton>
      <TButton theme="danger" disabled>按钮示例</TButton>
      <TButton theme="success" variant="outline">按钮示例</TButton>
    </div>

    <div class="flex items-center gap-x-4">
      <!-- tag-name 和 TagName 写法都可以 -->
      <t-switch class="flex-none" v-model="isLoading" size="large">
        <template #label> 加载中 </template>
      </t-switch>
      <TTagInput v-model="tags" drag-sort clearable>
        <template #label> 你喜欢的前端框架： </template>
      </TTagInput>
    </div>
    <TAlert :theme="alertTheme" close>{{ new Date() }}</TAlert>
  </div>
</template>

<script setup lang="ts">
  const tags = $ref<string[]>(['Vue', 'React', 'Angular'])
  let isLoading = $ref(true)
  let alertTheme = $ref<'success' | 'warning' | 'error' | 'info'>('success')

  onMounted(() => {
    setInterval(() => {
      isLoading = !isLoading
      if (alertTheme === 'success') {
        alertTheme = 'warning'
      } else if (alertTheme === 'warning') {
        alertTheme = 'error'
      } else if (alertTheme === 'error') {
        alertTheme = 'info'
      } else {
        alertTheme = 'success'
      }
    }, 2000)
  })
</script>
