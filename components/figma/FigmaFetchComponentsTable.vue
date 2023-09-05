<script setup>
const props = defineProps({
  figmaComponents: {
    type: Array,
    default: () => [],
  },
});

const columns = [
  {
    name: "Name",
    val: "name",
  },
  {
    name: "Options",
    val: "options",
  },
];
</script>
<template>
  <DssTable
    title="Components"
    :columns="columns"
    :items="figmaComponents"
    :filled="false"
    class="mb-4"
  >
    <template #name="{ item }">
      <div class="flex items-center">
        <div
          class="w-10 h-10 shrink-0 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded-full mr-2 sm:mr-3"
        >
          <!-- <img
            v-if="item.libraryComponent && item.libraryComponent[0]"
            :src="item.libraryComponent[0].thumbnail_url"
            width="20"
            height="20"
          /> -->
        </div>
        <span
          @click="$emit('onManage', item)"
          class="cursor-pointer hover:underline font-medium text-sky-500"
          >{{ item?.name }}</span
        >
      </div>
    </template>
    <template #options="{ item }">
      <div class="flex gap-2">
        <div v-for="option in item.options">
          <DssIcon
            v-if="option.type === 'Variant'"
            icon="fa-font"
            class="mr-1"
          />
          <DssTooltip>
            <DssBadge color="neutral" :text="option.name" />
            <template #content>
              <div class="flex flex-col">
                <span v-for="variant in option.variantOptions">{{
                  variant
                }}</span>
              </div>
            </template>
          </DssTooltip>
        </div>
      </div>
    </template>
  </DssTable>
</template>
