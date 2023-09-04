<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="flex flex-col gap-2">
    <DssListTableItem v-for="item in items" :item="item">
      <template #append>
        <slot name="append" :item="item"></slot>
      </template>
    </DssListTableItem>
  </div>
</template>
