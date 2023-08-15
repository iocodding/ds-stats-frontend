<template>
  <div
    class="flex h-[100dvh] overflow-hidden font-inter antialiased bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
  >
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
    >
      <Header
        :sidebarOpen="sidebarOpen"
        @toggle-sidebar="sidebarOpen = !sidebarOpen"
      />
      <WidgetRouteBreadcrumb />
      <slot />
    </div>
  </div>
</template>
<script setup>
const sidebarOpen = ref(false);
</script>
