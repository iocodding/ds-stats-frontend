<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <header
    class="flex justify-between text-xs uppercase text-slate-400 dark:text-slate-400 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2 mt-2"
  >
    <div>
      <DssIcon icon="fa-diamond" class="mr-2 text-sky-600" />
      {{ name }}
    </div>
    <span @click="$emit('onEdit')" class="cursor-pointer"
      ><DssIcon
        class="flex text-base text-slate-500 hover:text-slate-400 text-sm"
        icon="fa-sliders"
    /></span>
  </header>
</template>
