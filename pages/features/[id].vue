<script setup>
const pages = [
  {
    name: "Overview",
    to: "/features/22",
  },
  {
    name: "Sections ",
    to: "/features/22/sections",
  },
  {
    name: "Question",
    to: "/features/22/questions",
  },
];
</script>
<template>
  <NuxtLayout>
    <main class="grow p-8">
      <div class="sm:flex sm:justify-between sm:items-center mb-8">
        <div class="mb-4 sm:mb-0">
          <h1
            class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold"
          >
            Feature 01 - Manage Customers
          </h1>
        </div>
      </div>
      <DssTabs :items="pages" />
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>
