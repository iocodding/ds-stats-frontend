<script setup>
const pages = [
  {
    name: "Components",
    to: "/components",
  },
  {
    name: "Contributions",
    to: "/components/gallery",
  },
  {
    name: "Figma",
    to: "/components/figmaapi",
  },
];
</script>
<template>
  <NuxtLayout>
    <main class="grow">
      <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div class="sm:flex sm:justify-between sm:items-center mb-8">
          <div class="mb-4 sm:mb-0">
            <h1
              class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold"
            >
              Design System - DSS ✨
            </h1>
          </div>
        </div>

        <DssTabs :items="pages" />
        <NuxtPage />
      </div>
    </main>
  </NuxtLayout>
</template>
