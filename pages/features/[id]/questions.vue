<script setup>
const state = useFeaturesLoader();
const {
  createFeatureEntity,
  deleteFeatureEntity,
  updateFeatureEntity,
  reorderFeatureEntity,
} = useFeatureActions();

const addInputSection = ref(null);
const addEntityModel = ref("");

const columns = [
  { title: "❓Questions", type: "question" },
  { title: "❌ Blockers", type: "blocker" },
  { title: "✅ Guides", type: "guide" },
];

function onCreateEntity(entity) {
  if (!addEntityModel.value) return;
  createFeatureEntity({
    data: { name: addEntityModel.value, type: entity.type, entity: 2 },
  }).then(() => {
    state.execute();
    addEntityModel.value = "";
  });
}
function onDeleteEntity(entity) {
  deleteFeatureEntity(entity).then(() => {
    state.execute();
  });
}
const optimisticData = ref({});

function onUpdateEntity(entity) {
  optimisticData.value = entity;
  updateFeatureEntity(entity).then(() => {
    state.execute();
  });
}

function onTriggerAddInput(type) {
  addInputSection.value = type;
}

function abort() {
  addInputSection.value = null;
  addEntityModel.value = "";
}

function onCardDrop(removedItem, movedBefore) {
  reorderFeatureEntity(removedItem.id, movedBefore.id).then(() => {
    state.execute();
  });
}
const addIndex = ref(null);
const addIndexColumn = ref(null);

function onUpdateRemoveIndex(removeIndex) {
  nextTick(() => {
    if (addIndex.value !== null && removeIndex !== null) {
      updateFeatureEntity({ ...removeIndex, type: addIndexColumn.value }).then(
        () => {
          state.execute();
          addIndex.value = null;
          addIndexColumn.value = null;
        }
      );
    }
  });
}

function onUpdateAddIndex(ss, column) {
  addIndex.value = ss;
  addIndexColumn.value = column;
}

const drawerIsOpen = ref(false);
</script>
<template>
  <div class="grid grid-cols-12 gap-x-4 gap-y-8">
    <WidgetLoadingState :state="state" :optimisticData="optimisticData">
      <template #skeleton>loading...</template>
      <template #result="{ data }">
        <QuestionEntities
          :state="state"
          :entities="data.feature_entities"
          :columns="columns"
          @onUpdate="onUpdateEntity"
          @onDelete="onDeleteEntity"
          @onCardDrop="onCardDrop"
          @onUpdateRemoveIndex="onUpdateRemoveIndex"
          @onUpdateAddIndex="onUpdateAddIndex"
          @openDetails="drawerIsOpen = true"
        >
          <template #actions="{ column }">
            <div
              class="flex flex-col gap-2"
              v-if="addInputSection === column.type"
            >
              <DssInput
                placeholder="ex: New question"
                v-model="addEntityModel"
                v-click-outside="abort"
                @keyup:escape="abort"
                @keyup:enter="onCreateEntity({ type: column.type })"
                autofocus
              />
              <div class="flex gap-2 w-full">
                <DssButton
                  @click="abort"
                  class="w-full"
                  variant="secondary"
                  text="Cancel"
                />
                <DssButton
                  @click="onCreateEntity({ type: column.type })"
                  class="w-full"
                  variant="primary"
                  text="Save"
                />
              </div>
            </div>

            <DssButton
              v-else
              variant="tertiary"
              preppendIcon="fa-add"
              @click="onTriggerAddInput(column.type)"
              text="Add Question"
            />
          </template>
        </QuestionEntities>
      </template>
    </WidgetLoadingState>
    <DssDrawer :open="drawerIsOpen" @close="drawerIsOpen = false" />
  </div>
</template>
