<template>
  <main class="grow">
    <div class="grid grid-cols-12 gap-6">
      <!-- <DashboardCard01
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
      /> -->
      <DashboardCard06 />
      <DashboardCard07 />
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  middleware: ["is-admin-middleware"],
});
</script>
