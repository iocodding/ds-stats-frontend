<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <DssDrawer
    :open="open"
    :title="selected?.name"
    :selected="selected"
    @close="$emit('close')"
  >
    <ComponentDetailsDrawerPanel v-if="open" />
  </DssDrawer>
</template>
