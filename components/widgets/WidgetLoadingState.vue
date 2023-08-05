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
  <slot name="skeleton" v-if="!state.data.value" />
  <template v-if="state.data.value">
    <slot
      name="result"
      :data="{ ...state.normalize(state.data.value, optimisticData) }"
    />
  </template>
</template>
