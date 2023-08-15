<template>
  <DropdownEditMenu align="right" class="relative inline-flex">
    <li>
      <a
        class="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3 cursor-pointer"
        @click="$emit('onEdit')"
        >Edit</a
      >
    </li>

    <li>
      <a
        class="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3 cursor-pointer"
        @click="$emit('onDelete')"
        >Delete</a
      >
    </li>
  </DropdownEditMenu>
</template>
