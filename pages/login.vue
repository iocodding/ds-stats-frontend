<script setup>
definePageMeta({
  middleware: ["is-guest-middleware"],
});
</script>

<template>
  <AuthLoginPage />
</template>
