<script setup>
definePageMeta({
  middleware: ["is-admin-middleware"],
});
</script>
<template>
  <WidgetComponentPicker />
</template>
