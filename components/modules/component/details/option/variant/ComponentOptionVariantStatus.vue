<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div
    v-if="type === 'Variant'"
    class="w-7 h-7 rounded-full shrink-0 bg-sky-600 my-2 mr-3 flex items-center justify-center"
  >
    <svg class="w-7 h-7 fill-current text-sky-50" viewBox="0 0 36 36">
      <path
        d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z"
      />
    </svg>
    <!-- <DssIcon icon="fa-diamond" class="text-sky-50 text-xs" /> -->
  </div>
  <div
    v-if="type === 'Slot'"
    class="w-7 h-7 rounded-full shrink-0 bg-emerald-600 my-2 mr-3"
  >
    <svg class="w-7 h-7 fill-current text-emerald-50" viewBox="0 0 36 36">
      <path
        d="M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z"
      />
    </svg>
  </div>
  <div
    v-if="type === 'Text'"
    class="w-7 h-7 rounded-full shrink-0 bg-yellow-600 my-2 mr-3 flex items-center justify-center"
  >
    <DssIcon icon="fa-font" class="text-emerald-50 text-xs" />
  </div>
  <div
    v-if="type === 'Boolean'"
    class="w-7 h-7 rounded-full shrink-0 bg-rose-600 my-2 mr-3 flex items-center justify-center"
  >
    <DssIcon icon="fa-eye" class="text-emerald-50 text-xs" />
  </div>
</template>
