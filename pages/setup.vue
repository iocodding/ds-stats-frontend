<template>
  <NuxtLayout>
    <main class="grow">
      <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div class="mb-8">
          <h1
            class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold"
          >
            Envirement Setup ✨
          </h1>
        </div>

        <div class="bg-white dark:bg-slate-800 shadow-lg rounded-sm mb-8">
          <div class="flex flex-col md:flex-row md:-mr-px">
            <SettingsSidebar />
            <AccountPanel />
          </div>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>
<script setup></script>
