<script setup>
const pages = [
  {
    name: "Overview",
    to: "/feature",
  },
  {
    name: "Question Board",
    to: "/feature/questions",
  },
  {
    name: "Design system",
    to: "/feature/design-system",
  },
  {
    name: "API",
    to: "/feature/api",
  },
  {
    name: "Playground",
    to: "/feature/playground",
  },
];
const route = useRoute();
</script>
<template>
  <main class="grow">
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <!-- Page header -->
      <div class="sm:flex sm:justify-between sm:items-center mb-8">
        <!-- Left: Title -->
        <div class="mb-4 sm:mb-0">
          <h1
            class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold"
          >
            Feature 01 - Clients Table ✨
          </h1>
        </div>
      </div>

      <!-- Filters -->
      <div class="mb-4 border-b border-slate-200 dark:border-slate-700">
        <ul
          class="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar"
        >
          <li
            class="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8"
            v-for="page in pages"
            :key="page"
          >
            <router-link
              class="whitespace-nowrap"
              :to="page.to"
              :class="
                route.path === page.to
                  ? 'text-indigo-500'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
              "
              >{{ page.name }}</router-link
            >
          </li>
          <!-- :class="
                route.path === item.link && '!bg-purple-600 !bg-opacity-20'
              " -->
        </ul>
      </div>
      <NuxtPage />
    </div>
  </main>
</template>
