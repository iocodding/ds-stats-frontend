<script setup>
const { data: feature } = useFeatureTanLoader();
const { createFeatureEntity, deleteFeatureEntity } = useFeatureTanActions();

const { mutate: createEntityMutation } = createFeatureEntity();
const { mutate: deleteEntityMutation } = deleteFeatureEntity();

function addFeature() {
  createEntityMutation({ name: "new name", entity: 2, type: "question" });
}
function deleteEntity(entityId) {
  deleteEntityMutation(entityId);
}
</script>
<template>
  {{ feature?.feature_entities }}
  <div>
    <div
      class="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 relative"
    >
      <header class="px-5 py-4">
        <h2 class="font-semibold text-slate-800 dark:text-slate-100">
          Available Components
        </h2>
      </header>
      <div>
        <div class="overflow-x-auto">
          <table
            class="table-auto w-full dark:text-slate-300 divide-y divide-slate-200 dark:divide-slate-700"
          >
            <thead
              class="text-xs uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 border-t border-slate-200 dark:border-slate-700"
            >
              <tr>
                <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div class="font-semibold text-left">name</div>
                </th>

                <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <span class="sr-only">Menu</span>
                </th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <tr v-for="entity in feature?.feature_entities">
                <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  {{ entity.name }}
                </td>

                <td
                  class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"
                >
                  <DssButton text="Edit" variant="secondary" />
                  <DssButton
                    text="Delete"
                    variant="tertiary"
                    @click="deleteEntity(entity.id)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <DssButton text="Add new" class="mt-2" @click="addFeature" />
  </div>
</template>
