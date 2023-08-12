<script setup>
const props = defineProps({
  image: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div
    class="col-span-full sm:col-span-6 xl:col-span-3 cursor-pointer bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:dark:border-slate-600"
  >
    <div class="flex flex-col h-full">
      <!-- Image -->
      <div class="relative">
        <img
          class="w-full"
          :src="image"
          width="286"
          style="height: 220px; object-fit: cover"
          height="160"
          alt="Application 08"
        />
      </div>
      <!-- Card Content -->
      <div class="grow flex flex-col p-5">
        <!-- Card body -->
        <div class="grow">
          <!-- Header -->
          <header class="mb-2">
            <h3
              v-if="title"
              class="text-lg text-slate-800 dark:text-slate-100 font-semibold mb-1"
            >
              {{ title }}
            </h3>
            <div v-if="description" class="text-sm">
              {{ description }}
            </div>
          </header>
        </div>

        <!-- Card footer -->
        <!-- <div>
          <a
            class="btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white"
            href="#0"
            >Buy Now</a
          >
        </div> -->
      </div>
    </div>
  </div>
  <!-- Card 4 -->
</template>
