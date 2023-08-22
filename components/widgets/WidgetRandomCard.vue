<template>
  <div>
    <div class="space-y-8 sm:space-y-5 my-6 lg:mb-0">
      <!-- Related item -->
      <article
        class="flex bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 overflow-hidden"
      >
        <!-- Image -->
        <a
          class="relative block w-24 sm:w-56 lg:sidebar-expanded:w-20 xl:sidebar-expanded:w-56 shrink-0"
          href="#0"
        >
          <img
            class="absolute object-center object-cover"
            src="https://wire-elements.dev/img/modal.png"
            width="220"
            height="236"
            alt="Meetup 02"
          />
          <!-- Like button -->
          <!-- <button class="absolute top-0 right-0 mt-4 mr-4">
            <div class="text-slate-100 bg-slate-900 bg-opacity-60 rounded-full">
              <span class="sr-only">Like</span>
              <svg class="h-8 w-8 fill-current" viewBox="0 0 32 32">
                <path
                  d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z"
                />
              </svg>
            </div>
          </button> -->
        </a>
        <!-- Content -->
        <div class="grow p-5 flex flex-col">
          <div class="grow">
            <!-- <div class="text-sm font-semibold text-indigo-500 uppercase mb-2">
              Mon 27 Dec, 2021
            </div> -->
            <a class="inline-flex mb-2" href="#0">
              <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100">
                Add Edit Customer Modal
              </h3>
            </a>
            <div class="text-sm">This is modal Component</div>
          </div>
          <!-- Footer -->
        </div>
      </article>
    </div>
  </div>
</template>
