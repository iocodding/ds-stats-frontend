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
  system: {
    type: Object,
    default: () => {},
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
    <ComponentAddEditDialogPanel
      @close="emit('close')"
      :selected="selected"
      :system="system"
    />
  </WidgetDialog>
</template>
