<script setup>
const props = defineProps({
  component: {
    type: Object,
    default: () => {},
  },
});
const addEditOptionOpen = ref(false);
const editVariantOpen = ref(false);
const selectedOption = ref(null);

function onEditOption(option) {
  selectedOption.value = option;
  addEditOptionOpen.value = true;
}
function onAddEditOptionClose(option) {
  addEditOptionOpen.value = false;
  selectedOption.value = null;
}
</script>

<template>
  <ComponentDetailsOptions
    class="mt-2 mb-2"
    :component="component"
    @onEditVariant="editVariantOpen = true"
    @onEditOption="onEditOption"
    @onAdd="addEditOptionOpen = true"
  />
  <VariantAddEditDialog
    :modalOpen="addEditOptionOpen"
    :component="component"
    :selected="selectedOption"
    @close="onAddEditOptionClose"
  />
  <ComponentVariantEditDialog
    :modalOpen="editVariantOpen"
    @close="editVariantOpen = false"
  />
</template>
