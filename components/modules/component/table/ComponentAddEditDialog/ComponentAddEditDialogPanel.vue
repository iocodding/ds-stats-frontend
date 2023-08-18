<script setup>
import { useComponentAddEditRules } from "./useComponentAddEditRules.js";

const props = defineProps({
  selected: {
    type: Object,
    default: null,
  },
});

const emit = defineEmits(["close"]);

const isEditMode = ref(!!props.selected);
const componentName = ref(props.selected?.name);
const componentVersion = ref(props.selected?.version || "1.0.0");
const componentNotes = ref(props.selected?.notes);

const componentSectionOptopn = [
  { id: 0, value: "Inputs" },
  { id: 1, value: "Overlays" },
  { id: 2, value: "Display" },
  { id: 3, value: "Generic" },
];

const { v } = useComponentAddEditRules({ name: componentName });
const { createComponent, updateComponent, loading } = useComponentActions();

function onSubmit() {
  const body = {
    name: componentName.value,
    version: componentVersion.value,
    notes: componentNotes.value,
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

const pages = [
  {
    id: 1,
    name: "General",
  },
  {
    id: 2,
    name: "Code",
  },
];

const selectedItemId = ref(1);
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
      <!-- <DssTabs>
        <DssTab
          v-for="page in pages"
          :name="page.name"
          @click="selectedItemId = page.id"
          :active="selectedItemId === page.id"
        />
      </DssTabs> -->
      <DssInput
        v-model="componentName"
        autofocus
        placeholder="ex: Button"
        label="Name *"
        :errorMessage="v.name.$errors[0]?.$message"
      />
      <DssInput
        v-model="componentVersion"
        autofocus
        placeholder="ex: 2.11.22"
        label="Version *"
        :errorMessage="v.name.$errors[0]?.$message"
      />
      <DssSelect label="Status" :options="componentSectionOptopn" />
      <DssTextarea
        v-model="componentNotes"
        label="Notes"
        placeholder="Write a note"
      />
      <!-- <DssSwitch label="Stable" @click="open" /> -->
    </div>
  </WidgetDialogPanel>
</template>
