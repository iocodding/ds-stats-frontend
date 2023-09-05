<script setup>
const props = defineProps({
  selected: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <li class="flex px-2 h-14 hover:bg-indigo-500/20 cursor-pointer">
    <DssCheckbox class="ml-2 mr-2" :checked="selected" />
    <div class="grow flex items-center text-sm py-2">
      <div class="grow flex justify-between">
        <div class="self-center">
          <a
            class="font-medium text-base text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
            href="#0"
            >{{ text }}</a
          >
        </div>
        <div class="shrink-0 self-start ml-2">
          <DssBadge> Stable </DssBadge>
        </div>
      </div>
    </div>
  </li>
</template>
