<script setup>
// definePageMeta({
//   middleware: ["is-admin-middleware"],
// });
</script>
<template>
  <NuxtLayout>
    <main class="grow">
      <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <WelcomeBanner />

        <div class="grid grid-cols-12 gap-6">
          <DashboardCard01
            title="Contributions"
            subtitle="variants"
            value="128"
            increase="22"
          />
          <DashboardCard01
            title="Usage"
            subtitle="components"
            value="45%"
            increase="1%"
          />
          <DashboardCard01
            title="Dev Coverage"
            subtitle="Components"
            value="82%"
            increase="11%"
          />
          <DashboardCard06 />
          <DashboardCard07 />
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup></script>
