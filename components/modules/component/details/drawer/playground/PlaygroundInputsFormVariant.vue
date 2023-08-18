<script setup>
const props = defineProps({
  option: {
    type: Object,
    default: () => [],
  },
});

function getColorClassFromStatus(status) {
  if (status === "InProgress") {
    return "text-yellow-500";
  }
  return "text-green-500";
}

const componentSizesOptions = props.option.component_option_variants.data.map(
  (variant) => {
    return {
      optionId: props.option.id,
      id: variant.id,
      name: props.option.name,
      value: variant.attributes.name,
      icon: "fa-circle",
      iconClass: getColorClassFromStatus(variant.attributes.status),
    };
  }
);
const selectedSize = ref(0);
</script>
<template>
  <DssSelect
    v-model="selectedSize"
    @update:modelValue="$emit('onUpdate', componentSizesOptions[$event])"
    :label="option.name"
    labelIcon="fa-diamond"
    :options="componentSizesOptions"
    class="mb-4"
  />
</template>
