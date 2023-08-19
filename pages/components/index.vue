<script setup>
const { isSuccess, isFetching } = useDesignSystemLoader({ id: 1 });
</script>
<template>
  <ComponentPage v-if="!isFetching || isSuccess" />
</template>
