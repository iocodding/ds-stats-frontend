<script setup>
const props = defineProps({
  label: {
    type: String,
    default: null,
  },
  labelIcon: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
  options: {
    type: Array,
    default: () => [],
  },
  errorMessage: {
    type: String,
    default: null,
  },
});

const dropdownOpen = ref(false);
const selected = ref(0);
</script>
<template>
  <div class="relative inline-flex w-full flex-col">
    <label v-if="label" class="block text-sm font-medium mb-1">
      <DssIcon v-if="labelIcon" :icon="labelIcon" class="text-xs mr-1" />
      {{ label }}</label
    >
    <DssSelectActivator
      @click.prevent="dropdownOpen = !dropdownOpen"
      :error="errorMessage"
    >
      <div v-if="options[modelValue]">
        <DssIcon
          v-if="options[modelValue]?.icon"
          :icon="options[modelValue]?.icon"
          :class="`dark:${options[modelValue]?.iconClass}`"
          class="mr-2 text-xs"
        />
        <span>{{ options[modelValue].value }}</span>
      </div>
    </DssSelectActivator>

    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="dropdownOpen"
        class="z-60 absolute top-full left-0 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        :class="errorMessage && '!-mt-4'"
        style=""
      >
        <div
          ref="dropdown"
          class="font-medium text-sm text-slate-600 dark:text-slate-300 divide-y divide-slate-200 dark:divide-slate-700"
          @focusin="dropdownOpen = true"
          @focusout="dropdownOpen = false"
        >
          <button
            v-for="(option, index) in options"
            :key="option.id"
            class="flex items-center justify-between w-full hover:bg-slate-50 dark:hover:bg-slate-700/20 py-2 px-3 cursor-pointer"
            :class="option.id === modelValue && 'text-indigo-500'"
            @click="
              $emit('update:modelValue', index);
              dropdownOpen = false;
            "
          >
            <div>
              <DssIcon
                v-if="option.icon"
                :icon="option.icon"
                :class="`dark:${option.iconClass}`"
                class="mr-2 text-xs"
              />
              <span>{{ option.value }}</span>
            </div>

            <svg
              class="shrink-0 ml-2 fill-current text-indigo-400"
              :class="option.id !== modelValue && 'invisible'"
              width="12"
              height="9"
              viewBox="0 0 12 9"
            >
              <path
                d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z"
              />
            </svg>
          </button>
        </div>
      </div>
    </transition>
    <div v-if="errorMessage" class="text-xs mt-1 text-rose-500">
      {{ errorMessage }}
    </div>
  </div>
</template>
