<script setup>
import { tv } from "tailwind-variants";

const chip = tv({
  variants: {
    color: {
      neutral:
        "bg-gray-100 dark:bg-gray-400/30 text-gray-600 dark:text-gray-400",
      success:
        "bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400",
      warning:
        "bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400",
      danger:
        "bg-rose-100 dark:bg-rose-500/30 text-rose-500 dark:text-rose-400",
    },
  },
});

const props = defineProps({
  text: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "success",
  },
});
</script>

<template>
  <div
    class="text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1"
    :class="chip({ color: color })"
  >
    {{ text }}
  </div>
</template>
