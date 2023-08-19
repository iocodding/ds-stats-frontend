<script setup>
const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="flex items-center">
    <div class="form-switch">
      <input
        type="checkbox"
        id="toggle1"
        class="sr-only"
        :value="modelValue"
        @input="(event) => $emit('update:modelValue', event.target.checked)"
      />
      <label class="bg-slate-400 dark:bg-slate-700" for="toggle1">
        <span class="bg-white shadow-sm" aria-hidden="true"></span>
        <span class="sr-only">Toggle</span>
      </label>
    </div>
    <div class="text-sm ml-2">
      {{ label }}
    </div>
  </div>
</template>
