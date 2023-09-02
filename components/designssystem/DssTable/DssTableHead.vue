<script setup>
const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  bordered: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <thead
    class="text-xs uppercase text-slate-500 dark:text-slate-400"
    :class="
      bordered &&
      'border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/20'
    "
  >
    <tr>
      <slot name="append"></slot>
      <th
        v-for="column in columns"
        class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
      >
        <div
          :class="[
            { 'font-semibold text-left': !column.hidden },
            { 'sr-only': column.hidden },
          ]"
        >
          {{ column.name }}
        </div>
      </th>
    </tr>
  </thead>
</template>
