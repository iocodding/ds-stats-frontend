<script setup>
definePageMeta({
  middleware: ["is-admin-middleware"],
});

const route = useRoute();

const {
  isSuccess,
  isFetching,
  data: currentSystem,
} = useDesignSystemLoader({ id: route.params.id });
</script>
<template>
  <NuxtLayout>
    <main class="grow">
      <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <ComponentPage
          v-if="!isFetching || isSuccess"
          :system="currentSystem"
        />
      </div>
    </main>
  </NuxtLayout>
</template>
