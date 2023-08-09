<script setup>
const { data: components } = useComponentsLoader();
const activeId = ref(0);
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
    :activeId="activeId"
  >
    <template #name="{ item }">
      <span
        @click="$emit('onManage', item)"
        class="cursor-pointer hover:underline"
        >{{ item.name }}</span
      >
    </template>
    <template #menu="{ item }">
      <div class="flex gap-2">
        <DssButton
          @click="$emit('onEdit', item)"
          text="Edit"
          variant="secondary"
        />
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
