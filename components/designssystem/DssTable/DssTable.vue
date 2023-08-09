<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  columns: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  activeId: {
    type: Number,
    default: 0,
  },
});
</script>
<template>
  <div
    class="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 relative"
  >
    <header v-if="title" class="px-5 py-4">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">
        {{ title }}
      </h2>
    </header>
    <div class="overflow-x-auto">
      <table
        class="table-auto w-full dark:text-slate-300 divide-y divide-slate-200 dark:divide-slate-700"
      >
        <DssTableHead :columns="columns" />
        <tbody class="text-sm divide-slate-200 dark:divide-slate-700 divide-y">
          <tr
            v-for="item in items"
            :class="activeId === item.id && 'bg-slate-900/30'"
          >
            <td
              v-for="column in columns"
              class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
              :class="[{ 'w-px': column.alignRight }]"
            >
              <slot :name="column.val" :item="item">
                {{ item[column.val] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
