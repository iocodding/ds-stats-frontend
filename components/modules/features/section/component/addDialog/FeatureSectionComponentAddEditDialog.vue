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
  <WidgetDialog
    widthClass="max-w-3xl"
    :modalOpen="open"
    title="Add Components"
    @close="emit('close')"
  >
    <FeatureSectionComponentAddEditDialogPanel
      @close="emit('close')"
      :selected="selected"
    />
  </WidgetDialog>
</template>
