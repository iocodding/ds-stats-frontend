<script setup>
const items = [{ name: "Page" }, { name: "Subpage" }, { name: "SubSubPage" }];
</script>
<template>
  <NuxtLayout name="dslayout">
    <div class="flex flex-col gap-4">
      <DssBreadcrumb size="sm" :items="items" />
      <DssBreadcrumb :items="items" />
      <DssBreadcrumb size="lg" :items="items" />
    </div>
  </NuxtLayout>
</template>
