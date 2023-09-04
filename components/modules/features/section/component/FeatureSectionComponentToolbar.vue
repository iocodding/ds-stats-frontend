<script setup></script>
<template>
  <div class="sm:flex sm:justify-between sm:items-center mb-2">
    <div class="mb-4 sm:mb-0">
      <h1
        class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold"
      >
        Components ✨
      </h1>
    </div>

    <div
      class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
    >
      <DssButton @click="$emit('onCreate')" text="Manage Component" />
    </div>
  </div>
</template>
