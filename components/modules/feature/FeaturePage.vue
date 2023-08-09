<script setup>
const { createComponent, updateComponent } = useComponentActions();

const { mutate: createEntityMutation } = createComponent();
const { mutate: editComponentMutation } = updateComponent();

function onAddComponent() {
  createEntityMutation({ name: "new name", entity: 2, type: "question" });
}

function onEditComponent() {
  createEntityMutation({ name: "new name", entity: 2, type: "question" });
}

const selectedComponent = ref(null);

const addEditDialogOpen = ref(false);
const deleteDialogOpen = ref(false);

function onDelete(component) {
  selectedComponent.value = component;
  deleteDialogOpen.value = true;
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
    <FeatureTable @onEdit="addEditDialogOpen = true" @onDelete="onDelete" />
    <FeatureAddEditDialog
      :open="addEditDialogOpen"
      @close="onAddEditDialogClose"
    />
    <FeatureDeleteConfirmationDialog
      :open="deleteDialogOpen"
      :selected="selectedComponent"
      @close="onDeleteDialogClose"
    />
  </div>
</template>
