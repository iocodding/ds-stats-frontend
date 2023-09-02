<script setup>
import { tv } from "tailwind-variants";

const props = defineProps({
  preppendIcon: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "md",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  preppendText: {
    type: String,
    default: "",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
});

const button = tv({
  variants: {
    rounded: {
      true: "rounded-full",
      false: "",
    },
    fullWidth: {
      true: "w-full",
      false: "",
    },
    size: {
      sm: "h-8",
      md: "h-10",
      lg: "h-12",
    },
    variant: {
      primary: "bg-indigo-500 hover:bg-indigo-600 text-white",
      secondary:
        "dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300",
      tertiary: "text-slate-600 dark:text-slate-300 hover:bg-slate-800",
      "tertiary-secondary":
        "text-indigo-500 hover:bg-indigo-500 hover:bg-opacity-10",
      danger: "bg-rose-500 hover:bg-rose-600 text-white",
      "danger-secondary":
        "dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-rose-500",
    },
  },
});
const classes = computed(() =>
  button({
    variant: props.variant,
    size: props.size,
    rounded: props.rounded,
    fullWidth: props.fullWidth,
  })
);
</script>
<template>
  <button class="btn" :class="classes">
    <DssButtonLoading v-if="loading" />
    <div v-else>
      <DssIcon v-if="preppendIcon" :icon="preppendIcon" />
      <slot></slot>
      <span v-if="text" class="mx-1"> {{ text }}</span>
      <span v-if="preppendText" class="text-slate-400 dark:text-slate-500">{{
        preppendText
      }}</span>
    </div>
  </button>
</template>
