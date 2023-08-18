<script setup>
const props = defineProps({
  component: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <div class="flex w-full flex-col gap-4">
    <div
      class="w-full h-64 object-cover bg-slate-900 flex justify-center items-center"
    >
      <img src="/buttonPrimary.png" class="w-28" />
    </div>
    <div class="flex w-full gap-4">
      <PlaygroundInputs :component="component" />
    </div>
  </div>
</template>
