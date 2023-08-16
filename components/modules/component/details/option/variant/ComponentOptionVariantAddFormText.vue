<script setup>
const props = defineProps({
  optionType: {
    type: String,
    default: "",
  },
  option: {
    type: Object,
    default: () => {},
  },
});

const { createComponentOptionVariant } = useComponentsOptionsVariantsActions();

const variantModel = ref("");
function onCreateComponentOptionVariant(optionId) {
  const body = {
    name: variantModel.value,
    status: "InProgress",
    component_option: optionId,
  };
  createComponentOptionVariant(body).then(() => {
    isAdding.value = false;
    variantModel.value = "";
  });
}

const isAdding = ref(false);
</script>
<template>This is Text</template>
