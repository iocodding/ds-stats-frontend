<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <li
    class="after:content-['/'] last:after:hidden after:text-slate-400 dark:after:text-slate-600 after:px-2"
  >
    <a
      class="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-500 cursor-pointer"
      >{{ text }}</a
    >
  </li>
</template>
