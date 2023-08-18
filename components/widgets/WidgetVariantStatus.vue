<script setup>
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});

const types = [
  {
    value: "Proposed",
    title: "Proposed",
    color: "danger",
  },
  {
    value: "InProgress",
    title: "In Design",
    color: "warning",
  },
  {
    value: "InDevelopment",
    title: "In Development",
    color: "warning",
  },
  {
    value: "Stable",
    title: "Stable",
    color: "success",
  },
];

const currentOption = computed(
  () =>
    types.find((type) => type.value === props.value) || {
      value: "Proposed",
      title: "Proposed",
      color: "danger",
    }
);
</script>

<template>
  <DssOptionsMenu>
    <template #activator>
      <DssBadge :text="currentOption.title" :color="currentOption.color" />
    </template>
    <DssOptionsMenuItem>
      <DssBadge text="None" color="neutral" />
    </DssOptionsMenuItem>
    <DssOptionsMenuItem>
      <DssBadge text="Missing" color="danger" />
    </DssOptionsMenuItem>
    <DssOptionsMenuItem>
      <DssBadge text="Exists" color="success" />
    </DssOptionsMenuItem>
    <DssOptionsMenuItem>
      <DssBadge text="InDesign" color="warning" />
    </DssOptionsMenuItem>
  </DssOptionsMenu>
</template>
