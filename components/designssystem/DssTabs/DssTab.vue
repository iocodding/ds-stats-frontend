<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <li
    class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8 cursor-pointer"
  >
    <span
      :class="
        active
          ? 'text-indigo-500'
          : 'text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
      "
      class=""
    >
      {{ name }}</span
    >
  </li>
</template>
