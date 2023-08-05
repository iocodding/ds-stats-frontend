<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <FontAwesomeIcon :icon="`fa-solid ${icon}`" />
</template>
