<script setup>
const props = defineProps({
  selectedId: {
    type: Number,
    default: 0,
  },
});

const { data: currentSystem, isFetching } = useDesignSystemLoader({ id: 1 });

const currentOption = computed(
  () =>
    currentSystem.value.component_option_statuses.find(
      (status) => status.id === props.selectedId
    ) || {
      value: "None",
      name: "None",
      color: "neutral",
    }
);
</script>

<template>
  <DssOptionsMenu>
    <template #activator>
      <DssBadge :text="currentOption.name" :color="currentOption.color" />
    </template>
    <DssOptionsMenuItem>
      <DssBadge text="None" color="neutral" />
    </DssOptionsMenuItem>
    <DssOptionsMenuItem
      v-for="status in currentSystem.component_option_statuses"
      @click="$emit('onUpdate', status)"
    >
      <DssBadge :text="status.name" :color="status.color" />
    </DssOptionsMenuItem>
  </DssOptionsMenu>
</template>
