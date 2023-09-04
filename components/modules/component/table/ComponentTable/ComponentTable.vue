<script setup>
const route = useRoute();

const { data: components } = useComponentsLoader(route.params.id || 1);
const activeId = ref(0);
const columns = [
  {
    name: "Name",
    val: "name",
  },
  {
    name: "Reference",
    val: "figma_component",
  },
  {
    name: "Status",
    val: "version",
  },
  {
    name: "Version",
    val: "version",
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
      <div class="flex items-center">
        <div
          class="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded-full mr-2 sm:mr-3"
        >
          <img class="ml-1" src="/defaultImage.svg" width="20" height="20" />
        </div>
        <span
          @click="$emit('onManage', item)"
          class="cursor-pointer hover:underline text-base"
          >{{ item.name }}</span
        >
      </div>
    </template>
    <template #figma_component="{ item }">
      <DssButton
        class="-ml-3"
        variant="tertiary-secondary"
        size="sm"
        preppendIcon="fa-link"
        text="Add Design Reference"
      />
    </template>
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
    <template #append>
      <ComponentTableAdd />
    </template>
  </DssTable>
  <!-- <DssTablePagination /> -->
</template>
