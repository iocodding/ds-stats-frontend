<script setup>
const state = useFeatureTanLoader();
const { createFeatureEntity, deleteFeatureEntity } = useFeatureTanActions();

const { mutate: createEntityMutation } = createFeatureEntity();
const { mutate: deleteEntityMutation } = deleteFeatureEntity();

function addFeature() {
  createEntityMutation({ name: "new name", entity: 2, type: "question" });
}
function deleteEntity(entityId) {
  deleteEntityMutation(entityId);
}

const columns = [
  {
    name: "Name",
    val: "name",
  },
  {
    name: "Menu",
    val: "menu",
    alignRight: "w-px",
    hidden: true,
  },
];
</script>
<template>
  <div>
    <WidgetTanLoadingState :state="state">
      <template #skeleton>loading</template>
      <template #result="{ data }"> {{ data }}</template>
    </WidgetTanLoadingState>
    <!-- {{ feature?.feature_entities.map((feat) => feat.name) }}
    <DssTable
      title="Components"
      :columns="columns"
      :items="feature?.feature_entities"
      class="mb-4"
    >
      <template #menu="{ item: component }">
        <DssButton text="Edit" variant="secondary" />
        <DssButton text="Delete" variant="tertiary" />
      </template>
    </DssTable>

     -->
    <DssButton text="Add new" class="mt-2" @click="addFeature" />
  </div>
</template>
