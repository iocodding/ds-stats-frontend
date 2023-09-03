<script setup>
import { tv } from "tailwind-variants";

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  autofocus: {
    type: Boolean,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  errorMessage: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "md",
  },
  type: {
    type: String,
    default: "text",
  },
});

const emit = defineEmits(["update:modelValue", "keyup:escape", "keyup:enter"]);

const dssinputRef = ref(null);

onMounted(() => {
  if (props.autofocus) {
    nextTick(() => {
      dssinputRef.value.focus();
    });
  }
});

function keyup(e) {
  if (e.code === "Escape") {
    emit("keyup:escape");
  }
  if (e.code === "Enter") {
    emit("keyup:enter");
  }
}

const button = tv({
  variants: {
    size: {
      sm: "h-8",
      md: "h-10",
      lg: "h-12 text-base",
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
    <input
      ref="dssinputRef"
      :type="type"
      class="form-input w-full bg-white dark:bg-slate-800"
      :class="[{ '!border-rose-500': errorMessage }, classes]"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup="keyup"
      type="text"
    />
    <div v-if="errorMessage" class="text-xs mt-1 text-rose-500">
      {{ errorMessage }}
    </div>
  </div>
</template>
