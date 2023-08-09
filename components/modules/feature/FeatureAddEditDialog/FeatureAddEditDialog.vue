<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);
</script>
<template>
  <WidgetDialog
    :modalOpen="open"
    title="Create Component"
    @close="emit('close')"
  >
    <FeatureAddEditDialogContent @close="emit('close')" />
  </WidgetDialog>
</template>
