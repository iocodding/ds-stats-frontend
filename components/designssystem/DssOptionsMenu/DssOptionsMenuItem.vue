<template>
  <button
    class="flex items-center justify-between w-full hover:bg-slate-50 dark:hover:bg-slate-700/20 py-2 px-3 cursor-pointer"
    :class="active && 'text-indigo-500'"
  >
    <slot
      ><span>{{ text }}</span></slot
    >
    <svg
      class="shrink-0 ml-2 fill-current text-indigo-400"
      :class="!active && 'invisible'"
      width="12"
      height="9"
      viewBox="0 0 12 9"
    >
      <path
        d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z"
      />
    </svg>
  </button>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
