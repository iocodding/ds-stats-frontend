<script setup>
const props = defineProps({
  state: {
    type: Object,
    required: true,
  },
  optimisticData: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <slot name="skeleton" v-if="!state.value" />
  <template v-if="state.value">
    <slot
      name="result"
      :data="{ ...state.normalize(state.value, optimisticData) }"
    />
  </template>
</template>
