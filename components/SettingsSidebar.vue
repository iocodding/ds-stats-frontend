<template>
  <div
    class="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 min-w-60 md:space-y-3"
  >
    <!-- Group 1 -->
    <div>
      <ul class="flex flex-nowrap md:block mr-3 md:mr-0">
        <router-link
          v-for="page in pages"
          to="/setup"
          custom
          v-slot="{ href, navigate, isExactActive }"
        >
          <li class="mr-0.5 md:mr-0 md:mb-0.5">
            <a
              class="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
              :class="!isExactActive && 'bg-indigo-50 dark:bg-indigo-500/30'"
              :href="href"
              @click="navigate"
            >
              <span
                class="text-sm font-medium"
                :class="
                  isExactActive
                    ? 'text-indigo-500 dark:text-indigo-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-200'
                "
                >{{ page.name }}</span
              >
            </a>
          </li>
        </router-link>
      </ul>
    </div>
    <!-- Group 2 -->
  </div>
</template>

<script setup>
const pages = [
  {
    name: "Figma setup",
  },
  {
    name: "Sync components",
  },
  {
    name: "Airtable setup",
  },
];
</script>