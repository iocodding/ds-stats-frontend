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
  components: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["close"]);
</script>
<template>
  <WidgetDialog
    widthClass="!max-w-3xl"
    :modalOpen="open"
    title="Figma Components"
    @close="emit('close')"
  >
    <FigmaFetchComponentsDialogPanel
      @close="emit('close')"
      :selected="selected"
      :components="components"
    />
  </WidgetDialog>
</template>
