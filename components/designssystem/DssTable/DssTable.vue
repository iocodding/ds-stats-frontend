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
  filled: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <div
    class="shadow-lg rounded-sm relative"
    :class="
      filled &&
      ' bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
    "
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
        <DssTableHead :bordered="filled" :columns="columns">
          <!-- <template #append>
            <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
              <div class="flex items-center">
                <input class="form-checkbox" type="checkbox" />
              </div>
            </th>
          </template> -->
        </DssTableHead>
        <tbody
          class="text-sm divide-slate-200 dark:divide-slate-700 divide-y bg-white dark:bg-slate-800/30"
        >
          <tr
            v-for="item in items"
            :class="activeId === item.id && 'bg-slate-900/30'"
            class="dark:hover:bg-slate-900/10"
          >
            <!-- <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
              <div class="flex items-center">
                <input class="form-checkbox" type="checkbox" />
              </div>
            </td> -->
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
      <slot name="append"></slot>
    </div>
  </div>
</template>
