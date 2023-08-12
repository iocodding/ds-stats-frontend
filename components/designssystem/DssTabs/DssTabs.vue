<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
const route = useRoute();
</script>

<template>
  <div class="mb-4 border-b border-slate-200 dark:border-slate-700">
    <ul
      class="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar"
    >
      <slot>
        <li
          class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8"
          v-for="item in items"
          :key="item"
        >
          <router-link
            v-if="item.to"
            class="whitespace-nowrap"
            :to="item.to"
            :class="
              route.path === item.to
                ? 'text-indigo-500'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
            "
            >{{ item.name }}</router-link
          >
        </li>
      </slot>
    </ul>
  </div>
</template>
