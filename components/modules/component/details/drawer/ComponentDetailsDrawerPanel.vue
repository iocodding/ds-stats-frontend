<script setup>
const pages = [
  {
    id: 1,
    name: "Variants",
  },
  {
    id: 2,
    name: "Playground",
  },
  {
    id: 3,
    name: "Tokens",
  },
];
const activePage = ref(1);
</script>
<template>
  <div class="flex flex-col w-full">
    <DssTabs>
      <DssTab
        v-for="page in pages"
        :name="page.name"
        @click="activePage = page.id"
        :active="activePage === page.id"
      />
    </DssTabs>
    <ComponentDetailsDrawerPanelOptions v-if="activePage === 1" />
    <ComponentDetailsDrawerPanelPlayground v-if="activePage === 2" />
  </div>
</template>
