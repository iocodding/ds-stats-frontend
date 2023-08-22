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
    widthClass="sm:w-[1090px]"
  >
    <FeatureSectionDetailsDrawerPanel v-if="open" />
  </DssDrawer>
</template>
