<script setup>
const columns = [
  {
    name: "Name",
    val: "name",
  },
];

const items = [
  { name: "Example 1" },
  { name: "Example 2" },
  { name: "Example 3" },
];
</script>
<template>
  <NuxtLayout name="dslayout">
    <DssTable title="Components" :columns="columns" :items="items" class="mb-4">
      <template #name="{ item }"> </template>
    </DssTable>
  </NuxtLayout>
</template>
