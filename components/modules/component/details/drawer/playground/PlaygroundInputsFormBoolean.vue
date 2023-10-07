<script setup>
const props = defineProps({
  option: {
    type: Object,
    default: () => [],
  },
});

const booleanValue = ref(false);

const componentOption = computed(() => {
  return {
    optionId: props.option.id,
    name: props.option.name,
    value: booleanValue.value,
  };
});
</script>
<template>
  <div class="flex gap-2 items-center">
    <DssIcon icon="fa-circle" class="text-xs" />
    <DssSwitch
      v-model="booleanValue"
      :label="option.name"
      @update:modelValue="$emit('onUpdate', componentOption)"
    />
  </div>
</template>
