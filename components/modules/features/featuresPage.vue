<script setup>
const addEditFeatureDialogOpen = ref(false);
</script>
<template>
  <FeatureTable @onAddFeature="addEditFeatureDialogOpen = true" />
  <FeatureAddEditDialog
    :open="addEditFeatureDialogOpen"
    @close="addEditFeatureDialogOpen = false"
  />
</template>
