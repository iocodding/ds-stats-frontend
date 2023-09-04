<script setup>
definePageMeta({
  middleware: ["is-admin-middleware"],
});
</script>
<template>
  <div class="flex gap-2">
    <DssButton variant="primary" preppendIcon="fa-add" text="Add" />
    <DssButton variant="secondary" preppendIcon="fa-add" text="Add" />
    <DssButton variant="tertiary" preppendIcon="fa-add" text="Add" />
  </div>
</template>
