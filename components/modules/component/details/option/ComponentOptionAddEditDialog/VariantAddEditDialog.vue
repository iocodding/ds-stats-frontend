<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["close"]);
</script>
<template>
  <WidgetDialog :modalOpen="open" title="Create Variant" @close="emit('close')">
    <VariantAddEditDialogPanel @close="emit('close')" :selected="selected" />
  </WidgetDialog>
</template>
