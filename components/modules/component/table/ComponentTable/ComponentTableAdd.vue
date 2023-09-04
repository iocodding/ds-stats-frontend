<script setup>
const isAdding = ref(false);
</script>
<template>
  <div class="m-4">
    <DssButton
      v-if="!isAdding"
      preppendIcon="fa-add"
      variant="tertiary-secondary"
      text="Add Component"
      @click="isAdding = true"
    />
    <div v-else class="flex gap-2">
      <DssInput class="w-96" autofocus placeholder="Components name" />
      <DssButton text="Add" />
      <DssButton variant="secondary" text="Cancel" @click="isAdding = false" />
    </div>
  </div>
</template>
