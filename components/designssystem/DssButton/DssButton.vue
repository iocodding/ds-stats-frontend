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
});

const button = tv({
  variants: {
    variant: {
      primary: "bg-indigo-500 hover:bg-indigo-600 text-white",
      secondary:
        "dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300",
      tertiary: "text-slate-600 dark:text-slate-300 hover:bg-slate-800",
    },
  },
});
</script>
<template>
  <button class="btn" :class="button({ variant: variant })">
    <DssIcon v-if="preppendIcon" :icon="preppendIcon" />
    <span class="mx-2"> {{ text }}</span>
  </button>
</template>
