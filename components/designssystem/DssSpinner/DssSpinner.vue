<script script>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="flex flex-col">
    <div
      class="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite] text-indigo-500"
    />
  </div>
</template>
