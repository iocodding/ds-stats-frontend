<script setup>
import { tv } from "tailwind-variants";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  size: {
    type: String,
    default: "md",
  },
});

const breadcrumbItem = tv({
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
});
</script>

<template>
  <div>
    <div
      class="text-left pl-8 pt-2 pb-2 dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700"
    >
      <!-- Start -->
      <ul
        class="inline-flex flex-wrap font-medium"
        :class="breadcrumbItem({ size: size })"
      >
        <DssBreadcrumbItem v-for="item in items" :text="item.name" />
      </ul>
      <!-- End -->
    </div>
  </div>
</template>
