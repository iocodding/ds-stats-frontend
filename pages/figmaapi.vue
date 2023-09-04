<script setup>
definePageMeta({
  middleware: ["is-admin-middleware"],
});
</script>
<template>
  <NuxtLayout>
    <main class="grow">
      <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <FigmaFetchPage />
      </div>
    </main>
  </NuxtLayout>
</template>
