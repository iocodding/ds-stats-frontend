<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
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
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      id="notes"
      class="form-textarea w-full focus:border-slate-300"
      rows="4"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>
