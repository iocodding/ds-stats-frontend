<script setup>
const props = defineProps({
  component: {
    type: Object,
    default: () => {},
  },
});

const { data: options, isLoading } = useComponentsOptionsLoader({
  component: props.component,
});
</script>
<template>
  <PlaygroundInputsForm :options="options" />
</template>
