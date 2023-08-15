<script setup>
const componentPhasesOptions = [
  { id: 0, name: "primary" },
  { id: 1, name: "secondary" },
  { id: 2, name: "plain" },
];

const componentSizesOptions = [
  { id: 0, name: "small" },
  { id: 1, name: "medium" },
  { id: 2, name: "large" },
];

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
const addEditVariantOpen = ref(false);
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

    <FeatureDetailsVariants
      v-if="activePage === 1"
      class="mt-2 mb-2"
      @onEdit="addEditVariantOpen = true"
    />

    <div class="flex gap-2">
      <DssButton
        @click="addEditVariantOpen = true"
        text="Add Variant"
        size="sm"
      />
    </div>

    <!-- <div v-if="activePage === 2" class="flex w-full flex-col gap-4">
      <div
        class="w-full h-64 object-cover bg-slate-900 flex justify-center items-center"
      >
        <img src="/buttonPrimary.png" class="w-28" />
      </div>
      <div class="flex w-full gap-4">
        <WidgetCodeEditor class="w-full flex-grow" />
        <div class="w-full flex-grow flex flex-col gap-2">
          <DssSelect label="Variant" :options="componentPhasesOptions" />
          <DssSelect
            label="Size"
            :options="componentSizesOptions"
            class="mb-4"
          />
        </div>
      </div>
    </div> -->
  </div>
  <VariantAddEditDialog
    :modalOpen="addEditVariantOpen"
    @close="addEditVariantOpen = false"
  />
</template>
