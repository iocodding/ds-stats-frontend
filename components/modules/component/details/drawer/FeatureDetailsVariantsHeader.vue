<script setup>
const props = defineProps({
  option: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <header
    class="flex justify-between text-xs uppercase text-slate-400 dark:text-slate-400 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2 mt-2"
  >
    <div>
      <DssIcon
        v-if="option.type === 'Variant'"
        icon="fa-diamond"
        class="mr-2"
      />
      <DssIcon
        v-if="option.type === 'Slot'"
        icon="fa-right-left"
        class="mr-2"
      />
      <DssIcon v-if="option.type === 'Text'" icon="fa-font" class="mr-2" />
      <DssIcon v-if="option.type === 'Boolean'" icon="fa-eye" class="mr-2" />
      {{ option.name }}
    </div>
    <span @click="$emit('onEdit')" class="cursor-pointer"
      ><DssIcon
        class="flex text-base text-slate-500 hover:text-slate-400 text-sm"
        icon="fa-sliders"
    /></span>
  </header>
</template>
