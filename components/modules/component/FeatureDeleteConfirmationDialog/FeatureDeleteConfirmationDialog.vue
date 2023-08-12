<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["close"]);

const { deleteComponent } = useComponentActions();

const isDeleting = ref(false);

function onSubmit() {
  isDeleting.value = true;
  deleteComponent(props.selected).then(() => {
    isDeleting.value = false;
    emit("close");
  });
}
</script>

<template>
  <WidgetDialog
    :modalOpen="open"
    title="Delete Component"
    @close="$emit('close')"
  >
    <WidgetDialogPanel
      :loading="isDeleting"
      variant="danger"
      cancelButtonText="Cancel"
      saveButtonText="Delete Component"
      @close="$emit('close')"
      @submit="onSubmit"
    >
      <div class="flex flex-col gap-2">
        This component is used on {{ isLoading }}
        <div class="text-red-600 contents">7</div>
        features, are you sure you want to delete it?
      </div>
    </WidgetDialogPanel>
  </WidgetDialog>
</template>
