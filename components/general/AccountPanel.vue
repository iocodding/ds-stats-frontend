<template>
  <div class="grow">
    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <!-- <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-5">
        My Account
      </h2> -->

      <!-- Business Profile -->
      <section>
        <h3
          class="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1"
        >
          Figma Setup
        </h3>
        <div class="text-sm">
          The default figma envirement is pointed to DesignSystemStats file, you
          can connect you own profile - tutorial video
        </div>
        <div
          class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5"
        >
          <div class="sm:w-1/2">
            <label class="block text-sm font-medium mb-1" for="name"
              >Figma token</label
            >
            <input
              id="name"
              class="form-input w-full"
              type="text"
              v-model="figmaToken"
            />
          </div>
          <div class="sm:w-1/2">
            <label class="block text-sm font-medium mb-1" for="business-id"
              >Figma file key</label
            >
            <input
              id="business-id"
              class="form-input w-full"
              type="text"
              v-model="figmaKey"
            />
          </div>
        </div>
      </section>
      <!-- Email -->

      <!-- Password -->

      <!-- Smart Sync -->
      <section>
        <h3
          class="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-4"
        >
          Your connection status
        </h3>
        <div
          class="inline-flex font-medium rounded-full text-center px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400"
        >
          Connected
        </div>
      </section>
    </div>
    <!-- Panel footer -->
    <footer>
      <div
        class="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700"
      >
        <div class="flex self-end">
          <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">
            Save Changes
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const figmaToken = ref("asda2ecaweasdasd2");
const figmaKey = ref("asd22sszsc");
</script>
<script>
import { ref } from "vue";

export default {
  name: "AccountPanel",
  setup() {
    const sync = ref("Off");

    return {
      sync,
    };
  },
};
</script>