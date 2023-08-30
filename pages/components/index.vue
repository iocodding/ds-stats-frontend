<script setup>
const {
  isSuccess,
  isFetching,
  data: currentSystem,
} = useDesignSystemLoader({ id: 1 });
</script>
<template>
  <ComponentPage v-if="!isFetching || isSuccess" :system="currentSystem" />
</template>
