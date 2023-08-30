<template>
  <div class="max-w-md mx-auto w-full">
    <div class="relative">
      <div
        class="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200 dark:bg-slate-700"
        aria-hidden="true"
      ></div>
      <ul class="relative flex justify-between w-full">
        <li>
          <router-link
            class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white"
            to="/onboarding-01"
            >1</router-link
          >
        </li>
        <li>
          <router-link
            class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white"
            to="/onboarding-02"
            >2</router-link
          >
        </li>

        <li>
          <router-link
            class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
            to="/onboarding-04"
            >3</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
