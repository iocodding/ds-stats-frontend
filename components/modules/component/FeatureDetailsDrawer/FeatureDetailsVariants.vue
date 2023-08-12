<script setup>
const { data: options } = useComponentsOptionsLoader();
</script>

<template>
  <div
    class="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
  >
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">Variants</h2>
    </header>
    <div class="p-3">
      <div v-for="option in options">
        <header
          class="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2"
        >
          {{ option.name }}
        </header>
        <ul class="my-1">
          <!-- Item -->
          <li
            v-for="variant in option.component_variants.data"
            class="flex px-2"
          >
            <div class="w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3">
              <svg
                class="w-9 h-9 fill-current text-rose-50"
                viewBox="0 0 36 36"
              >
                <path
                  d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z"
                />
              </svg>
            </div>
            <div
              class="grow flex items-centerborder-slate-100 dark:border-slate-700 text-sm py-2"
            >
              <div class="grow flex justify-between">
                <div class="self-center">
                  <a
                    class="font-medium text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
                  >
                    {{ variant.attributes.name }}
                  </a>
                </div>
                <div class="shrink-0 self-end ml-2">
                  <WidgetVariantStatus :value="variant.attributes.status" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardCard10",
};
</script>
