<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  text: {
    type: String,
    default: null,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <label class="flex items-center">
    <input
      type="checkbox"
      :value="modelValue"
      :checked="checked"
      @input="$emit('update:modelValue', $event.target.value)"
      class="form-checkbox"
    />
    <span class="text-sm font-medium ml-2 select-none">{{ text }}</span>
  </label>
</template>
