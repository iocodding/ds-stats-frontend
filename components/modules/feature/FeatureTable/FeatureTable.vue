<script setup>
const { data: components } = useComponentsLoader();

const columns = [
  {
    name: "Name",
    val: "name",
  },
  {
    name: "Created at",
    val: "createdAt",
  },
  {
    name: "Updated at",
    val: "updatedAt",
  },
  {
    name: "Menu",
    val: "menu",
    alignRight: "w-px",
    hidden: true,
  },
];
</script>
<template>
  <DssTable
    title="Components"
    :columns="columns"
    :items="components"
    class="mb-4"
  >
    <template #menu="{ item }">
      <div class="flex gap-2">
        <DssButton @click="$emit('onEdit')" text="Edit" variant="secondary" />
        <DssButton
          @click="$emit('onDelete', item)"
          text="Delete"
          variant="danger-secondary"
        />
      </div>
    </template>
  </DssTable>
  <DssTablePagination />
</template>
