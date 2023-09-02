<template>
  <div
    class="flex h-[100dvh] overflow-hidden font-inter antialiased bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
  >
    <BookSidebar
      :sidebarOpen="sidebarOpen"
      @close-sidebar="sidebarOpen = false"
    />
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
    >
      <BookHeader
        :sidebarOpen="sidebarOpen"
        @toggle-sidebar="sidebarOpen = !sidebarOpen"
      />
      <WidgetRouteBreadcrumb />
      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
<script setup>
const sidebarOpen = ref(false);
</script>
