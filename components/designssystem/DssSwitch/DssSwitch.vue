<script setup>
const toggle1 = ref("On");
</script>

<template>
  <div class="flex items-center mt-5">
    <div class="form-switch">
      <input
        type="checkbox"
        id="toggle1"
        class="sr-only"
        v-model="toggle1"
        true-value="On"
        false-value="Off"
      />
      <label class="bg-slate-400 dark:bg-slate-700" for="toggle1">
        <span class="bg-white shadow-sm" aria-hidden="true"></span>
        <span class="sr-only">Toggle</span>
      </label>
    </div>
    <div class="text-sm text-slate-400 dark:text-slate-500 italic ml-2">
      Documented
    </div>
  </div>
</template>
