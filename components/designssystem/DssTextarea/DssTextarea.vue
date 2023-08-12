<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div>
    <label v-if="label" class="block text-sm font-medium mb-1">{{
      label
    }}</label>
    <textarea
      id="notes"
      class="form-textarea w-full focus:border-slate-300"
      rows="4"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>
