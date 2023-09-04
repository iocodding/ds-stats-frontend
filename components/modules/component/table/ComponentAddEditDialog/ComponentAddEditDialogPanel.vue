<script setup>
import { useComponentAddEditRules } from "./useComponentAddEditRules.js";

const props = defineProps({
  selected: {
    type: Object,
    default: null,
  },
  system: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits(["close"]);

const isEditMode = ref(!!props.selected);
const componentName = ref(props.selected?.name);
const componentVersion = ref(props.selected?.version || "1.0.0");
const componentNotes = ref(props.selected?.notes);

const { v } = useComponentAddEditRules({ name: componentName });
const { createComponent, updateComponent, loading } = useComponentActions();

const route = useRoute();

function onSubmit() {
  const body = {
    name: componentName.value,
    version: componentVersion.value,
    notes: componentNotes.value,
    design_system: route.params.id || 1,
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
    saveButtonText="Create Component"
    @close="emit('close')"
    @submit="validate"
  >
    <div class="flex flex-col gap-2">
      <DssInput
        v-model="componentName"
        autofocus
        placeholder="ex: Button"
        label="Name *"
        :errorMessage="v.name.$errors[0]?.$message"
      />
      <DssInput
        v-model="componentVersion"
        placeholder="ex: 2.11.22"
        label="Version *"
        :errorMessage="v.name.$errors[0]?.$message"
      />

      <DssTextarea
        v-model="componentNotes"
        label="Notes"
        placeholder="Write a note"
      />
    </div>
  </WidgetDialogPanel>
</template>
