<script setup>
const props = defineProps({
  item: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <label class="relative block cursor-pointer text-left w-full">
    <div
      class="p-4 rounded dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm duration-150 ease-in-out"
    >
      <div class="grid grid-cols-12 items-center gap-x-2">
        <div
          class="col-span-6 order-1 sm:order-none sm:col-span-6 flex items-center space-x-4 lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-3"
        >
          <div>
            <router-link
              :to="`/features/${item.id}/sections`"
              class="text-sm font-medium text-slate-800 dark:text-slate-100 hover:underline"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <div
          class="col-span-6 order-2 sm:order-none sm:col-span-6 text-right lg:sidebar-expanded:hidden xl:sidebar-expanded:block"
        >
          <div
            class="text-xs inline-flex font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1"
          >
            Ready for dev
          </div>
          <slot name="append" />
        </div>
      </div>
    </div>
    <div
      class="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 dark:peer-checked:border-indigo-500 rounded pointer-events-none"
      aria-hidden="true"
    ></div>
  </label>
</template>
