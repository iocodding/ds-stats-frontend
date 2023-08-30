<script setup>
const props = defineProps({
  error: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <button
    ref="trigger"
    class="btn w-full justify-between min-w-44 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-200"
    :class="error && '!border-rose-500'"
    aria-label="Select date range"
    aria-haspopup="true"
  >
    <span class="flex items-center">
      <slot></slot>
    </span>
    <svg
      class="shrink-0 ml-1 fill-current text-slate-400"
      width="11"
      height="7"
      viewBox="0 0 11 7"
    >
      <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
    </svg>
  </button>
</template>
