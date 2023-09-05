<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div
    class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
  >
    <div class="p-2">
      <slot name="prepend"></slot>

      <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
        {{ title }}
      </h2>
      <slot></slot>
    </div>
  </div>
</template>
