<template>
  <div
    class="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
  >
    <img :src="`http://localhost:1337${item.coverImage.url}`" />
    <div class="flex flex-col h-full">
      <!-- Card top -->
      <div class="grow p-5">
        <div class="flex justify-between items-start">
          <!-- Image + name -->
          <header>
            <div class="flex mb-2">
              <div class="mt-1 pr-1">
                <router-link
                  class="inline-flex text-slate-800 dark:text-slate-100 hover:text-slate-900 dark:hover:text-white"
                  :to="`/systems/${item.id}`"
                >
                  <h2
                    class="text-xl leading-snug justify-center font-semibold mb-1"
                  >
                    {{ item.name }}
                  </h2>
                </router-link>
                <div class="flex items-center">
                  <!-- <span class="text-sm font-medium text-slate-400 -mt-0.5 mr-1"
                    >-&gt;</span
                  > -->
                  <span>{{ item.description }}</span>
                </div>
              </div>
            </div>
          </header>
        </div>
        <!-- <div class="mt-2">
          <div class="text-sm">{{ item.content }}</div>
        </div> -->
      </div>
      <div class="border-t border-slate-200 dark:border-slate-700">
        <div class="flex divide-x divide-slate-200 dark:divide-slate-700"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersTilesCard",
  props: ["item"],
};
</script>
