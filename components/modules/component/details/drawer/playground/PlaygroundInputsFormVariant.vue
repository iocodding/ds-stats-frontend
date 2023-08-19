<script setup>
const props = defineProps({
  option: {
    type: Object,
    default: () => [],
  },
});

const componentSizesOptions = computed(() =>
  props.option.component_option_variants.map((variant) => {
    return {
      optionId: props.option.id,
      id: variant.id,
      name: props.option.name,
      value: variant.name,
      icon: "fa-circle",
      iconClass: variant.component_option_status?.textClass || "text-gray-400",
    };
  })
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
