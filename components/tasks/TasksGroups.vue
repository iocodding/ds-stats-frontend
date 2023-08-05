<template>
  <div class="col-span-full sm:col-span-6 xl:col-span-4">
    <!-- Column header -->
    <header>
      <div class="flex items-center justify-between mb-2">
        <h2 class="grow font-semibold text-slate-800 dark:text-slate-100 truncate">{{title}}</h2>
      </div>
      <!-- Cards -->
      <div class="grid gap-2">
        <slot />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TasksGroups',
  props: ['title'],
}
</script>