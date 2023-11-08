<script setup>
const props = defineProps({
  system: {
    type: Object,
    default: () => {},
  },
});

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
    <PeopleToolbar @onCreate="onAddEdit" />
    <PeopleTable
      :system="system"
      @onEdit="onEdit"
      @onManage="onManage"
      @onDelete="onDelete"
    />
    <ComponentAddEditDialog
      :system="system"
      :open="addEditDialogOpen"
      :selected="selectedComponent"
      @close="onAddEditDialogClose"
      @enable="second = true"
    />
    <FeatureDeleteConfirmationDialog
      :open="deleteDialogOpen"
      :selected="selectedComponent"
      @close="onDeleteDialogClose"
    />
    <ComponentDetailsDrawer
      :open="manageDrawerOpen"
      :selected="selectedComponent"
      @close="manageDrawerOpen = false"
    />
  </div>
</template>
