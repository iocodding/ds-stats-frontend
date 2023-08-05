<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  autofocus: {
    type: Boolean,
    default: null,
  },
});

const emit = defineEmits(["update:modelValue", "keyup:escape", "keyup:enter"]);

const dssinputRef = ref(null);

onMounted(() => {
  if (props.autofocus) {
    nextTick(() => {
      dssinputRef.value.focus();
    });
  }
});

function keyup(e) {
  if (e.code === "Escape") {
    emit("keyup:escape");
  }
  if (e.code === "Enter") {
    emit("keyup:enter");
  }
}
</script>
<template>
  <input
    ref="dssinputRef"
    class="form-input w-full !bg-slate-800 !ring-slate-800"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @keyup="keyup"
    type="text"
  />
</template>
