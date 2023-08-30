<script setup>
const addEditDialogOpen = ref(false);
</script>
<template>
  <div class="flex flex-col w-full gap-4">
    <WidgetRandomCard />
    <FeatureSectionComponentToolbar @onCreate="addEditDialogOpen = true" />
    <FeatureSectionComponentTable @onManage="addEditDialogOpen = true" />
    <FeatureSectionComponentAddEditDialog
      :open="addEditDialogOpen"
      @close="addEditDialogOpen = false"
    />
  </div>
</template>
