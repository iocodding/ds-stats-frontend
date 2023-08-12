<script setup></script>
<template>
  <label class="relative block cursor-pointer text-left w-full">
    <div
      class="p-4 rounded dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm duration-150 ease-in-out"
    >
      <div class="grid grid-cols-12 items-center gap-x-2">
        <!-- Card -->
        <div
          class="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-3"
        >
          <!-- Img -->
          <div>
            <div class="text-sm font-medium text-slate-800 dark:text-slate-100">
              Invite User Dialog
            </div>
            <!-- <div class="text-xs">**7328</div> -->
          </div>
        </div>
        <!-- Name -->
        <div
          class="col-span-6 order-2 sm:order-none sm:col-span-3 text-left sm:text-center lg:sidebar-expanded:hidden xl:sidebar-expanded:block"
        >
          <div
            class="text-sm font-medium text-slate-800 dark:text-slate-100 truncate"
          >
            Team A
          </div>
        </div>
        <!-- Card limits -->
        <div
          class="col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4"
        >
          <div class="text-sm">14/22</div>
        </div>
        <!-- Card status -->
        <div
          class="col-span-6 order-2 sm:order-none sm:col-span-2 text-right lg:sidebar-expanded:hidden xl:sidebar-expanded:block"
        >
          <div
            class="text-xs inline-flex font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1"
          >
            Ready for dev
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 dark:peer-checked:border-indigo-500 rounded pointer-events-none"
      aria-hidden="true"
    ></div>
  </label>
</template>
