<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const emit = defineEmits(["close"]);

const { createComponent } = useComponentActions();

const componentName = ref(null);
const isLoading = ref(false);

const rules = computed(() => ({
  name: {
    required,
  },
}));

const v$ = useVuelidate(rules, { name: componentName });

async function onSubmit() {
  v$.value.$touch();
  if (v$.value.$error) {
    return;
  }
  isLoading.value = true;
  createComponent({ name: componentName.value }).then(() => {
    isLoading.value = false;
    emit("close");
  });
}
</script>

<template>
  <WidgetDialogPanel
    :loading="isLoading"
    cancelButtonText="Cancel"
    saveButtonText="Create Component"
    @close="emit('close')"
    @submit="onSubmit"
  >
    <div class="flex flex-col gap-2">
      <DssInput
        v-model="componentName"
        autofocus
        placeholder="ex: Button"
        label="Name"
        :errorMessage="v$.name.$errors[0]?.$message"
      />
    </div>
  </WidgetDialogPanel>
</template>
