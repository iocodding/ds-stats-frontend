<script setup>
const props = defineProps({
  modalOpen: {
    type: Boolean,
    default: false,
  },
  widthClass: {
    type: String,
    default: "",
  },
});

const hideContent = ref(false);

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

watch(
  () => props.modalOpen,
  () => {
    if (props.modalOpen) {
      hideContent.value = true;
    } else {
      delay(300).then(() => (hideContent.value = false));
    }
  }
);
</script>

<template>
  <DssDialog
    :modalOpen="modalOpen"
    @close="$emit('close')"
    title="Update Component"
    :widthClass="widthClass"
  >
    <slot v-if="hideContent" />
  </DssDialog>
</template>
