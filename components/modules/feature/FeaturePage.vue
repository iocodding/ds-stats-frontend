<script setup>
const selectedComponent = ref(null);

const addEditDialogOpen = ref(false);
const deleteDialogOpen = ref(false);
const manageDrawerOpen = ref(false);

function onDelete(component) {
  selectedComponent.value = component;
  deleteDialogOpen.value = true;
}

function onEdit(component) {
  selectedComponent.value = component;
  addEditDialogOpen.value = true;
}

function onManage(component) {
  selectedComponent.value = component;
  manageDrawerOpen.value = true;
}

function onAddEdit() {
  addEditDialogOpen.value = true;
}

function onDeleteDialogClose() {
  selectedComponent.value = null;
  deleteDialogOpen.value = false;
}

function onAddEditDialogClose() {
  selectedComponent.value = null;
  addEditDialogOpen.value = false;
}
</script>
<template>
  <div>
    <FeatureToolbar @onCreate="onAddEdit" />
    {{ selectedComponent }}

    <FeatureTable @onEdit="onEdit" @onManage="onManage" @onDelete="onDelete" />
    <FeatureAddEditDialog
      :open="addEditDialogOpen"
      :selected="selectedComponent"
      @close="onAddEditDialogClose"
    />
    <FeatureDeleteConfirmationDialog
      :open="deleteDialogOpen"
      :selected="selectedComponent"
      @close="onDeleteDialogClose"
    />
    <FeatureDetailsDrawer
      :open="manageDrawerOpen"
      :selected="selectedComponent"
      @close="manageDrawerOpen = false"
    />
  </div>
</template>
