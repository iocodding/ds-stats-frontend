<script setup>
import { useVariantAddEditRules } from "./useVariantAddEditRules.js";

const props = defineProps({
  selected: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["close"]);

const isEditMode = ref(!!props.selected);
const componentName = ref(props.selected?.name);
const componentPhasesOptions = [
  { id: 0, name: "Variant" },
  { id: 1, name: "Boolean" },
  { id: 2, name: "Text" },
  { id: 3, name: "Slot" },
];

const { v } = useVariantAddEditRules({ name: componentName });
const { createComponent, updateComponent, loading } = useComponentActions();

function onSubmit() {
  const body = {
    name: componentName.value,
  };
  if (isEditMode.value) {
    updateComponent({ ...body, id: props.selected.id }).then(() => {
      emit("close");
    });
  } else {
    createComponent(body).then(() => {
      emit("close");
    });
  }
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
    saveButtonText="Create Variant"
    @close="emit('close')"
    @submit="validate"
  >
    <DssAlert class="mb-4"> This variant is used on 17 places</DssAlert>

    <div class="flex flex-col gap-2">
      <DssInput
        v-model="componentName"
        autofocus
        placeholder="ex: Variant"
        label="Name *"
        :errorMessage="v.name.$errors[0]?.$message"
      />
    </div>
    <template #prependSave>
      <DssButton text="Delete" variant="danger-secondary" />
    </template>
  </WidgetDialogPanel>
</template>
