<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    ref="panelContent"
    class="absolute inset-0 sm:left-auto z-40 shadow-xl transition-transform duration-200 ease-in-out"
    :class="open ? 'translate-x-0' : 'translate-x-full'"
    style="position: fixed"
  >
    <div
      class="sticky top-16 bg-slate-50 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-l border-slate-200 dark:border-slate-700 w-full sm:w-[890px] h-[calc(100dvh)]"
    >
      <button
        ref="closeBtn"
        @click.stop="$emit('close')"
        class="absolute top-0 right-0 mt-6 mr-6 group p-2"
      >
        <svg
          class="w-4 h-4 fill-slate-400 group-hover:fill-slate-600 pointer-events-none"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m7.95 6.536 4.242-4.243a1 1 0 1 1 1.415 1.414L9.364 7.95l4.243 4.242a1 1 0 1 1-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 0 1-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 0 1 1.414-1.414L7.95 6.536Z"
          />
        </svg>
      </button>

      <div class="py-8 px-4 lg:px-8">
        <div class="max-w-sm lg:max-w-none">
          <div
            class="text-slate-800 dark:text-slate-100 font-semibold text-left text-2xl mb-1"
          >
            {{ title }}
          </div>

          <!-- Notes -->

          <div class="mt-12">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
