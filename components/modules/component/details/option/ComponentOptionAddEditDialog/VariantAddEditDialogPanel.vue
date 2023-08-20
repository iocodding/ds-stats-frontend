<script setup>
import { useVariantAddEditRules } from "./useVariantAddEditRules.js";

const props = defineProps({
  selected: {
    type: Object,
    default: null,
  },
  component: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["close"]);

const isEditMode = ref(!!props.selected);
const componentName = ref(props.selected?.name);
const componentType = ref(0);
const componentPhasesOptions = [
  { id: 0, icon: "fa-diamond", value: "Variant" },
  { id: 1, icon: "fa-eye", value: "Boolean" },
  { id: 2, icon: "fa-font", value: "Text" },
  { id: 3, icon: "fa-left-right", value: "Slot" },
];

const { v } = useVariantAddEditRules({ name: componentName });
const {
  createComponentOption,
  updateComponentOption,
  deleteComponentOption,
  loading,
} = useComponentOptionsActions();

const { createComponentOptionBoolean } = useComponentOptionBooleanActions();

function onSubmit() {
  if (isEditMode.value) {
    const updateBody = {
      name: componentName.value,
      id: props.selected.id,
    };

    updateComponentOption(updateBody).then(() => {
      emit("close");
    });
  } else {
    const addBody = {
      name: componentName.value,
      type: componentPhasesOptions[componentType.value].value,
      component: props.component.id,
    };
    createComponentOption(addBody).then((response) => {
      if (addBody.type === "Boolean") {
        createComponentOptionBoolean({
          name: addBody.name,
          component_option: response.data.data.id,
        });
      }
      emit("close");
    });
  }
}

function onDelete() {
  deleteComponentOption(props.selected).then(() => {
    emit("close");
  });
}

function validate() {
  v.value.$touch();
  if (!v.value.$error) {
    onSubmit();
  }
}
</script>

<template>
  <WidgetDialogPanel
    :loading="loading"
    cancelButtonText="Cancel"
    :saveButtonText="isEditMode ? 'Update Option' : 'Create Option'"
    @close="emit('close')"
    @submit="validate"
  >
    <DssAlert v-if="isEditMode" class="mb-4">
      This Option is used on 17 places</DssAlert
    >
    <div class="flex flex-col gap-2">
      <DssInput
        v-model="componentName"
        autofocus
        placeholder="ex: Variant"
        label="Name *"
        :errorMessage="v.name.$errors[0]?.$message"
      />
      <DssSelect
        v-if="!isEditMode"
        v-model="componentType"
        label="Type"
        :options="componentPhasesOptions"
      />
    </div>
    <template #prependSave>
      <DssButton
        v-if="isEditMode"
        @click="onDelete"
        :loading="loading"
        text="Delete"
        variant="danger-secondary"
      />
    </template>
  </WidgetDialogPanel>
</template>
