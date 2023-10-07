<script setup>
defineProps({
  img: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div
    class="w-9 h-9 hover:bg-slate-300/20 rounded-full cursor-pointer flex items-center justify-center"
    :class="active && 'bg-indigo-500/30'"
  >
    <img :src="img" class="w-6" />
  </div>
</template>
