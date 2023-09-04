<script setup>
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

const { createFeature, updateFeature, loading } = useFeatureTanActions();
const { data: options, isLoading } = useComponentsOptionsLoader({
  component: { id: 36 },
});

function onSubmit() {
  const body = {
    name: componentName.value,
  };
  if (isEditMode.value) {
    updateFeature({ ...body, id: props.selected.id }).then(() => {
      emit("close");
    });
  } else {
    updateFeature(body).then(() => {
      emit("close");
    });
  }
}
</script>

<template>
  <WidgetDialogPanel
    :loading="loading"
    cancelButtonText="Cancel"
    saveButtonText="Update variants"
    @close="emit('close')"
    @submit="validate"
  >
    <div class="flex flex-col gap-2">
      <PlaygroundInputsForm :options="options" v-if="!isLoading" />
    </div>
  </WidgetDialogPanel>
</template>
