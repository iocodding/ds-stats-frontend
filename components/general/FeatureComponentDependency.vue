<template>
  <label class="relative block cursor-pointer text-left w-full">
    <div
      class="p-4 rounded dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm duration-150 ease-in-out"
    >
      <div class="grid grid-cols-12 items-center gap-x-2">
        <!-- Card -->
        <div
          class="c order-1 sm:order-none flex items-center space-x-4 xl:sidebar-expanded:col-span-3"
        >
          <div>
            <div
              class="text-lg font-medium text-slate-800 dark:text-slate-100 mb-4"
            >
              {{ name }}
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex gap-4">
                <span class="text-slate-800 dark:text-slate-100">Variant:</span>
                <div class="flex gap-2">
                  <div
                    class="text-xs inline-flex font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1"
                  >
                    Primary
                  </div>
                </div>
              </div>
              <div class="flex gap-4">
                <span class="text-slate-800 dark:text-slate-100"> Size:</span>
                <div class="flex gap-2">
                  <div
                    class="text-xs inline-flex font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1"
                  >
                    x-small
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="text-xs">**7377</div> -->
          </div>
        </div>

        <!-- <div
          class="col-span-6 order-2 sm:order-none sm:col-span-6 text-right lg:sidebar-expanded:hidden xl:sidebar-expanded:block"
        >
          <div
            class="text-xs inline-flex font-medium bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400 rounded-full text-center px-2.5 py-1"
          >
            Blocked
          </div>
        </div> -->
      </div>
    </div>
    <div
      class="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 dark:peer-checked:border-indigo-500 rounded pointer-events-none"
      aria-hidden="true"
    ></div>
  </label>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>