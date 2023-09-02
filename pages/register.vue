<script setup>
definePageMeta({
  middleware: ["is-guest-middleware"],
});
</script>
<template>
  <AuthRegisterPage />
</template>
