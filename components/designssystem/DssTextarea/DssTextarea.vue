<script setup>
import { tv } from "tailwind-variants";

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
  errorMessage: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: "md",
  },
});

const button = tv({
  variants: {
    size: {
      sm: "text-xs",
      md: "",
      lg: "text-base",
    },
  },
});
const classes = computed(() => button({ size: props.size }));
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
      :class="[{ '!border-rose-500': errorMessage }, classes]"
      rows="4"
      :placeholder="placeholder"
    />
    <div v-if="errorMessage" class="text-xs mt-1 text-rose-500">
      {{ errorMessage }}
    </div>
  </div>
</template>
