<script setup>
const props = defineProps({
  optionType: {
    type: String,
    default: "",
  },
  option: {
    type: Object,
    default: () => {},
  },
});

const { createComponentOptionVariant } = useComponentsOptionsVariantsActions();

const variantModel = ref("");
function onCreateComponentOptionVariant(optionId) {
  const body = {
    name: variantModel.value,
    status: "InProgress",
    component_option: optionId,
  };
  createComponentOptionVariant(body).then(() => {
    isAdding.value = false;
    variantModel.value = "";
  });
}

const isAdding = ref(false);
</script>
<template>
  <div>
    <div class="flex w-full items-center gap-4 mt-2" v-if="isAdding">
      <div class="flex w-full items-center">
        <ComponentOptionVariantStatus :type="optionType" />
        <DssInput
          v-model="variantModel"
          class="w-full"
          size="sm"
          placeholder="ex: Variant"
          autofocus
        />
      </div>
      <div class="flex gap-2">
        <DssButton
          variant="primary"
          size="sm"
          @click="onCreateComponentOptionVariant(option.id)"
        >
          <DssIcon icon="fa-check" />
        </DssButton>
        <DssButton size="sm" variant="secondary" @click="isAdding = false">
          <DssIcon icon="fa-xmark" />
        </DssButton>
      </div>
    </div>
    <DssButton
      v-else
      variant="tertiary-secondary"
      preppendIcon="fa-add"
      text="Add Variant"
      size="sm"
      @click="isAdding = true"
    />
  </div>
</template>
