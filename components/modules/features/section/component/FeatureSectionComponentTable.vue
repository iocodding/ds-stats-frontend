<script setup>
const route = useRoute();

const { data: components } = useFeatureSectionComponentsLoader(1);
const activeId = ref(0);
const columns = [
  {
    name: "Name",
    val: "name",
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
          class="cursor-pointer hover:underline font-medium text-sky-500"
          >{{ item?.component?.name }}</span
        >
      </div>
    </template>
  </DssTable>
</template>
