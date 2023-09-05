<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  components: {
    type: Array,
    default: () => [],
  },
});
const figmaComponents = [{ name: "Hello" }];
const isComponentsDialogOpen = ref(false);
const columns = [
  {
    name: "File",
    val: "file",
  },
  {
    name: "Components",
    val: "components",
  },
  {
    name: "Tokens",
    val: "tokens",
  },
  {
    name: "Latest Updates",
    val: "update",
  },
  {
    name: "Sync",
    alignRight: "w-px",
    val: "sync",
    hidden: true,
  },
];
</script>
<template>
  <DssTable
    :columns="columns"
    :items="figmaComponents"
    :filled="false"
    class="mb-4"
  >
    <template #file="{ item }">
      <span class="text-lg font-semibold"> Design system stats </span>
    </template>
    <template #components="{ item }">
      <div
        class="flex gap-2 items-center"
        @click="isComponentsDialogOpen = true"
      >
        <DssIconFigma />
        <span class="text-xl font-semibold">{{ components.length }}</span>
      </div>
    </template>
    <template #tokens="{ item }">
      <div class="flex gap-2 items-center">
        <DssIconFigma /> <span class="text-xl font-semibold">33</span>
      </div>
    </template>
    <template #name="{ item }">
      {{ item.name }}
    </template>
    <template #update="{ item }"> 22 August 2023 </template>
    <template #sync>
      <DssButton
        :loading="loading"
        @click="isComponentsDialogOpen = true"
        variant="secondary"
        text="Sync "
      />
    </template>
  </DssTable>
  <FigmaFetchComponentsDialog
    :components="components"
    :open="isComponentsDialogOpen"
    @close="isComponentsDialogOpen = false"
  />
</template>
