<template>
  <div
    class="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 relative"
  >
    <header class="px-5 py-4">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">
        Available Components
        <span class="text-slate-400 dark:text-slate-500 font-medium">442</span>
      </h2>
    </header>
    <div>
      <!-- Table -->
      <div class="overflow-x-auto">
        <table
          class="table-auto w-full dark:text-slate-300 divide-y divide-slate-200 dark:divide-slate-700"
        >
          <!-- Table header -->
          <thead
            class="text-xs uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 border-t border-slate-200 dark:border-slate-700"
          >
            <tr>
          
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Component</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Usage</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Main Contributors</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">Status</div>
              </th>

      
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <span class="sr-only">Menu</span>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <OrdersTableItem
            v-for="order in orders"
            :key="order.id"
            :order="order"
            v-model:selected="selected"
            :value="order.id"
          />
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "OrdersTable",
  props: ["selectedItems"],
  setup(props, { emit }) {
    const selectAll = ref(false);
    const selected = ref([]);

    const checkAll = () => {
      selected.value = [];
      if (!selectAll.value) {
        selected.value = orders.value.map((order) => order.id);
      }
    };

    watch(selected, () => {
      selectAll.value =
        orders.value.length === selected.value.length ? true : false;
      emit("change-selection", selected.value);
    });

    const orders = ref([
      {
        id: "0",
        image:
          "https://img001.prntscr.com/file/img001/rjMEa1zISoOL4mwvYNKRJg.png",
        order: "Button",
        date: "22 places",
        customer: "Patricia Semklo, Peter Stefanov",
        status: { completed: 10, inProgress: 2, todo: 4 },
        total: "11/20",
        items: "1",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: "1",
        image:
          "https://img001.prntscr.com/file/img001/ib0OL55ySsiJ5M_Z3HUv3w.png",
        order: "Chip",
        date: "11 places",
        customer: "Dominik Lamakani",
        status: { completed: 7, inProgress: 3, todo: 11 },
        total: "4/8",
        items: "2",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: "2",
        order: "Dialog",
        date: "118 places",
        customer: "Ivan Mesaros",
        status: { completed: 2, inProgress: 7, todo: 1 },
        total: "7/22",
        items: "2",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: "3",
        order: "Avatar",
        date: "5 places",
        customer: "Maria Martinez",
        status: { completed: 9, inProgress: 11, todo: 2 },
        total: "4/6",
        items: "1",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: "4",
        order: "Alert",
        date: "2 places",
        customer: "Maria Martinez",
        status: { completed: 9, inProgress: 11, todo: 2 },
        total: "4/6",
        items: "1",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: "3",
        order: "Breadcrumbs",
        date: "6 places",
        customer: "Maria Martinez",
        status: { completed: 9, inProgress: 11, todo: 2 },
        total: "4/6",
        items: "1",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: "3",
        order: "Radio Button",
        date: "14 places",
        customer: "Maria Martinez",
        status: { completed: 9, inProgress: 11, todo: 2 },
        total: "4/6",
        items: "1",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ]);

    return {
      selectAll,
      selected,
      checkAll,
      orders,
    };
  },
};
</script>