<script setup>
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});

const { data: currentSystem, isFetching } = useDesignSystemLoader({ id: 1 });

const mypes = computed(() => currentSystem.component_option_statuses);

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
  <div v-if="currentSystem && !isFetching">
    {{ currentSystem.component_option_statuses }}
  </div>
  {{ isFetching }}
  ss
  {{ mypes }}
  <!-- {{ currentSystem }} -->
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
