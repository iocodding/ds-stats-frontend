<script setup>
const componentPhasesOptions = [
  { id: 0, name: "primary" },
  { id: 1, name: "secondary" },
  { id: 2, name: "plain" },
];

const componentSizesOptions = [
  { id: 0, name: "small" },
  { id: 1, name: "medium" },
  { id: 2, name: "large" },
];
</script>
<template>
  <div class="flex w-full flex-col gap-4">
    <div
      class="w-full h-64 object-cover bg-slate-900 flex justify-center items-center"
    >
      <img src="/buttonPrimary.png" class="w-28" />
    </div>
    <div class="flex w-full gap-4">
      <WidgetCodeEditor class="w-full flex-grow" />
      <div class="w-full flex-grow flex flex-col gap-2">
        <DssSelect label="Variant" :options="componentPhasesOptions" />
        <DssSelect label="Size" :options="componentSizesOptions" class="mb-4" />
      </div>
    </div>
  </div>
</template>
