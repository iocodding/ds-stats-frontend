<script setup>
const addDialogOpen = ref(false);
const editDialogOpen = ref(false);
</script>
<template>
  <div class="flex flex-col w-full gap-4">
    <WidgetRandomCard />
    <FeatureSectionComponentToolbar @onCreate="addDialogOpen = true" />
    <FeatureSectionComponentTable @onManage="editDialogOpen = true" />
    <FeatureSectionComponentAddEditDialog
      :open="addDialogOpen"
      @close="addDialogOpen = false"
    />
    <FeatureSectionComponentEditDialog
      :open="editDialogOpen"
      @close="editDialogOpen = false"
    />
  </div>
</template>
