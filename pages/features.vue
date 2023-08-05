<template>
  <main class="grow">
    <div class="lg:relative lg:flex">
      <!-- Content -->
      <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <!-- Page header -->
        <div class="sm:flex sm:justify-between sm:items-center mb-5">
          <!-- Left: Title -->
          <div class="mb-4 sm:mb-0">
            <h1
              class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold"
            >
              Features ✨
            </h1>
          </div>

          <!-- Add card button -->
          <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
            <svg
              class="w-4 h-4 fill-current opacity-50 shrink-0"
              viewBox="0 0 16 16"
            >
              <path
                d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
              />
            </svg>
            <span class="hidden xs:block ml-2">Add Feature</span>
          </button>
        </div>

        <!-- Filters -->
        <div class="mb-5">
          <ul class="flex flex-wrap -m-1">
            <li class="m-1">
              <button
                class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out"
              >
                View All
              </button>
            </li>
            <li class="m-1">
              <button
                class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out"
              >
                Ready for dev
              </button>
            </li>
            <li class="m-1">
              <button
                class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out"
              >
                In Planning
              </button>
            </li>
          </ul>
        </div>

        <!-- Credit cards -->
        <div class="space-y-2">
          <!-- Card 1 -->
          <label class="relative block cursor-pointer text-left w-full">
            <input
              type="radio"
              name="radio-buttons"
              class="peer sr-only"
              checked
            />
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
                    <div
                      class="text-sm font-medium text-slate-800 dark:text-slate-100"
                    >
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

          <!-- Card 2 -->
          <label class="relative block cursor-pointer text-left w-full">
            <input type="radio" name="radio-buttons" class="peer sr-only" />
            <div
              class="p-4 rounded dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm duration-150 ease-in-out"
            >
              <div class="grid grid-cols-12 items-center gap-x-2">
                <!-- Card -->
                <div
                  class="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-3"
                >
                  <div>
                    <div
                      class="text-sm font-medium text-slate-800 dark:text-slate-100"
                    >
                      Customers table
                    </div>
                    <!-- <div class="text-xs">**7377</div> -->
                  </div>
                </div>
                <!-- Name -->
                <div
                  class="col-span-6 order-2 sm:order-none sm:col-span-3 text-left sm:text-center lg:sidebar-expanded:hidden xl:sidebar-expanded:block"
                >
                  <div
                    class="text-sm font-medium text-slate-800 dark:text-slate-100 truncate"
                  >
                    Dominik Lamakani
                  </div>
                </div>
                <!-- Card limits -->
                <div
                  class="col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4"
                >
                  <div class="text-sm">22/30</div>
                </div>
                <!-- Card status -->
                <div
                  class="col-span-6 order-2 sm:order-none sm:col-span-2 text-right lg:sidebar-expanded:hidden xl:sidebar-expanded:block"
                >
                  <div
                    class="text-xs inline-flex font-medium bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400 rounded-full text-center px-2.5 py-1"
                  >
                    Blocked
                  </div>
                </div>
              </div>
            </div>
            <div
              class="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 dark:peer-checked:border-indigo-500 rounded pointer-events-none"
              aria-hidden="true"
            ></div>
          </label>
        </div>
      </div>

      <!-- Sidebar -->
      <div>
        <div
          class="lg:sticky lg:top-16 bg-slate-50 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 lg:w-[490px] lg:h-[calc(100dvh-64px)]"
        >
          <div class="py-8 px-4 lg:px-8">
            <div class="max-w-sm mx-auto lg:max-w-none">
              <div
                class="text-slate-800 dark:text-slate-100 font-semibold text-center mb-6"
              >
                Invite User Dialog
              </div>

              <div
                class="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1"
              >
                Depenencies
              </div>
              <div class="flex flex-col gap-2">
                <FeatureComponentDependency name="Button" />
                <FeatureComponentDependency name="Chip" />
                <FeatureComponentDependency name="Dialog" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
