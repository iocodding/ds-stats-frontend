<script setup>
const props = defineProps({
  selected: {
    type: Object,
    required: true,
  },
});
const pages = [
  {
    id: 1,
    name: "Variants",
  },
  {
    id: 2,
    name: "Playground",
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
    <ComponentDetailsDrawerPanelOptions
      :component="selected"
      v-if="activePage === 1"
    />
    <ComponentDetailsDrawerPanelPlayground
      v-if="activePage === 2"
      :component="selected"
    />
  </div>
</template>
