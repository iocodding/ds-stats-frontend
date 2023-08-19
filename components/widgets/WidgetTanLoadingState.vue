<script setup>
const props = defineProps({
  state: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <slot name="skeleton" v-if="!state && state.isLoading" />
  <template v-else>
    <slot name="result" :data="state" />
  </template>
</template>
