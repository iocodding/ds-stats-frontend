<script setup>
import { useFeatureAddEditRules } from "./useFeatureAddEditRules.js";

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
  { id: 0, name: "None" },
  { id: 1, name: "In Design" },
  { id: 2, name: "In Development" },
  { id: 3, name: "Done" },
];

const { v } = useFeatureAddEditRules({ name: componentName });
const { createFeature, updateFeature, loading } = useFeatureTanActions();

function onSubmit() {
  const body = {
    name: componentName.value,
  };
  if (isEditMode.value) {
    updateFeature({ ...body, id: props.selected.id }).then(() => {
      emit("close");
    });
  } else {
    createFeature(body).then(() => {
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
    saveButtonText="Create Feature"
    @close="emit('close')"
    @submit="validate"
  >
    <div class="flex flex-col gap-2">
      <DssInput
        v-model="componentName"
        autofocus
        placeholder="ex: Clients table"
        label="Name *"
        :errorMessage="v.name.$errors[0]?.$message"
      />
    </div>
  </WidgetDialogPanel>
</template>
