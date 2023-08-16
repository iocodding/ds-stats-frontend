<script setup>
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
  <FeatureDetailsVariants
    class="mt-2 mb-2"
    @onEditVariant="editVariantOpen = true"
    @onEditOption="onEditOption"
    @onAdd="addEditOptionOpen = true"
  />
  <VariantAddEditDialog
    :modalOpen="addEditOptionOpen"
    :selected="selectedOption"
    @close="onAddEditOptionClose"
  />
  <ComponentVariantEditDialog
    :modalOpen="editVariantOpen"
    @close="editVariantOpen = false"
  />
</template>
