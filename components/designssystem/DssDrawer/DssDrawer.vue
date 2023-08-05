<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    ref="panelContent"
    class="absolute inset-0 sm:left-auto z-20 shadow-xl transition-transform duration-200 ease-in-out"
    :class="open ? 'translate-x-0' : 'translate-x-full'"
  >
    <div
      class="sticky top-16 bg-slate-50 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-l border-slate-200 dark:border-slate-700 w-full sm:w-[390px] h-[calc(100dvh-64px)]"
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
        <div class="max-w-sm mx-auto lg:max-w-none">
          <div
            class="text-slate-800 dark:text-slate-100 font-semibold text-center mb-1"
          >
            Bank Transfer
          </div>

          <!-- Notes -->
          <div class="mt-6">
            <div
              class="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2"
            >
              Answer
            </div>
            <form>
              <label class="sr-only" for="notes">Write a note</label>
              <textarea
                id="notes"
                class="form-textarea w-full focus:border-slate-300"
                rows="4"
                placeholder="Write a note…"
              ></textarea>
            </form>
          </div>

          <!-- Download / Report -->
          <div class="flex items-center space-x-3 mt-6">
            <div class="w-1/2">
              <button
                class="btn w-full dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
              >
                <svg
                  class="w-4 h-4 fill-current text-slate-400 dark:text-slate-500 shrink-0 rotate-180"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 4c-.3 0-.5.1-.7.3L1.6 10 3 11.4l4-4V16h2V7.4l4 4 1.4-1.4-5.7-5.7C8.5 4.1 8.3 4 8 4ZM1 2h14V0H1v2Z"
                  />
                </svg>
                <span class="ml-2">Download</span>
              </button>
            </div>
            <div class="w-1/2">
              <button
                class="btn w-full dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-rose-500"
              >
                <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                  <path
                    d="M7.001 3h2v4h-2V3Zm1 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM15 16a1 1 0 0 1-.6-.2L10.667 13H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1ZM2 11h9a1 1 0 0 1 .6.2L14 13V2H2v9Z"
                  />
                </svg>
                <span class="ml-2">Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
