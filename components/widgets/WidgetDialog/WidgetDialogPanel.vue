<script setup>
const props = defineProps({
  saveButtonText: {
    type: String,
    default: "",
  },
  cancelButtonText: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "primary",
  },
});
</script>

<template>
  <div @keyup.enter="$emit('submit')" @keyup.escape="$emit('close')">
    <div class="px-5 pt-8 pb-5"><slot /></div>
    <div class="px-5 py-3 flex justify-between">
      <DssButton
        v-if="cancelButtonText"
        @click="$emit('close')"
        :text="cancelButtonText"
        variant="secondary"
      />
      <DssButton
        v-if="saveButtonText"
        :loading="loading"
        :text="saveButtonText"
        :variant="variant"
        @click="$emit('submit')"
      />
    </div>
  </div>
</template>
