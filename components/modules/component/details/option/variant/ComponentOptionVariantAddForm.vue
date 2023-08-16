<script setup>
const props = defineProps({
  option: {
    type: Object,
    default: () => {},
  },
});
</script>
<template>
  <div>
    <ComponentOptionVariantAddFormVariant
      :option="option"
      v-if="option.type === 'Variant'"
    />
    <ComponentOptionVariantAddFormSlot
      :option="option"
      v-if="option.type === 'Slot'"
    />
    <ComponentOptionVariantAddFormText
      :option="option"
      v-if="option.type === 'Text'"
    />
    <ComponentOptionVariantAddFormBoolean
      :option="option"
      v-if="option.type === 'Boolean'"
    />
  </div>
</template>
