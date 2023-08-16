<script setup>
const { data: components } = useComponentsLoader();
const activeId = ref(0);
const columns = [
  {
    name: "Name",
    val: "name",
  },
  {
    name: "Version",
    val: "version",
  },
  {
    name: "Created at",
    val: "createdAt",
  },
  {
    name: "Updated at",
    val: "updatedAt",
  },
  // {
  //   name: "Contributions",
  //   val: "contributions",
  // },
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
    <!-- <template #contributions="{ item }">
      <DssIcon icon="fa-message" />
    </template> -->
    <template #menu="{ item }">
      <div class="flex gap-2">
        <DropdownEditMenu align="right" class="relative inline-flex">
          <li>
            <a
              class="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3 cursor-pointer"
              @click="$emit('onEdit', item)"
              >Edit</a
            >
          </li>

          <li>
            <a
              class="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3 cursor-pointer"
              @click="$emit('onDelete', item)"
              >Delete</a
            >
          </li>
        </DropdownEditMenu>
      </div>
    </template>
  </DssTable>
  <DssTablePagination />
</template>
