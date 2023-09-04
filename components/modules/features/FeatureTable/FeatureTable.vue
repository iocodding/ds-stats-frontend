<script setup>
const { data: features } = useFeatureTanLoader();
const { deleteFeature } = useFeatureActions();
function onDeleteFeature(feature) {
  deleteFeature({ id: feature.id });
}
</script>
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

          <DssButton @click="$emit('onAddFeature')" text="Add feature" />
        </div>

        <DssListTable :items="features">
          <template #append="{ item }">
            <DropdownEditMenu align="right" class="relative inline-flex ml-2">
              <li>
                <a
                  class="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3 cursor-pointer"
                  @click="onDeleteFeature(item)"
                  >Delete</a
                >
              </li>
            </DropdownEditMenu>
          </template>
        </DssListTable>
      </div>
    </div>
  </main>
</template>
