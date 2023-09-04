<script setup>
definePageMeta({
  middleware: ["is-admin-middleware"],
});
const {
  isSuccess,
  isFetching,
  data: currentSystem,
} = useDesignSystemLoader({ id: 1 });
</script>
<template>
  <ComponentPage v-if="!isFetching || isSuccess" :system="currentSystem" />
</template>
