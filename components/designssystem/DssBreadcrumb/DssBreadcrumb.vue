<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div>
    <div
      class="text-left pl-8 pt-2 pb-2 dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700"
    >
      <!-- Start -->
      <ul class="inline-flex flex-wrap text-sm font-medium">
        <DssBreadcrumbItem v-for="item in items" :text="item.name" />
      </ul>
      <!-- End -->
    </div>
  </div>
</template>
