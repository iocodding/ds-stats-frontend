<script setup>
const props = defineProps({
  component: {
    type: Object,
    default: () => {},
  },
});

const componentPhasesOptions = [
  { id: 0, name: "primary", icon: "fa-circle", iconClass: "text-green-500" },
  { id: 1, name: "secondary", icon: "fa-circle", iconClass: "text-green-500" },
  { id: 2, name: "plain", icon: "fa-circle", iconClass: "text-yellow-500" },
];

const componentSizesOptions = [
  { id: 0, name: "small" },
  { id: 1, name: "medium" },
  { id: 2, name: "large" },
];

const selectedVariant = ref(0);
const selectedSize = ref(0);

const { data: options, isLoading } = useComponentsOptionsLoader({
  component: props.component,
});
</script>
<template>
  <PlaygroundInputsForm :options="options" />
</template>
