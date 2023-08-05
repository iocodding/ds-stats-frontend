<script setup>
const props = defineProps({
  state: {
    type: Object,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  entities: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(
  "onCardDrop",
  "onDelete",
  "onUpdate",
  "onUpdateRemoveIndex",
  "onUpdateAddIndex"
);

const liftedCard = ref(null);
const droppedPlace = ref(null);
const sortedItems = ref(props.entities);
const saveRemoveId = ref(null);

function moveCardInSameColumn(columnType, dropResult) {
  const currentColumnItems = sortedItems.value.filter(
    (item) => item.type === columnType
  );

  const removedItem = currentColumnItems[dropResult.removedIndex];
  const addedItem = currentColumnItems.filter(
    (item) => item.id !== removedItem.id
  )[dropResult.addedIndex];

  emit("onCardDrop", removedItem, addedItem);
}

function onCardDrop(columnType, dropResult) {
  if (dropResult.removedIndex !== null && dropResult.addedIndex !== null) {
    moveCardInSameColumn(columnType, dropResult);
  }
  if (dropResult.removedIndex !== null && dropResult.addedIndex === null) {
    const currentColumnItems = sortedItems.value.filter(
      (item) => item.type === columnType
    );
    emit("onUpdateRemoveIndex", currentColumnItems[dropResult.removedIndex]);
  }
  if (dropResult.removedIndex === null && dropResult.addedIndex !== null) {
    emit("onUpdateAddIndex", dropResult.addedIndex, columnType);
  }
}

const dropPlaceholderOptions = {
  className:
    "w-full h-14 my-1 bg-slate-800 border border-dashed border-slate-600",
};
function filterEntryByType(entry, type) {
  return entry.filter((entry) => entry.type === type);
}
function getCardPayload(type) {
  return (index) => {
    return props.entities.filter((p) => p.type === type);
  };
}
</script>
<template>
  <TasksGroups v-for="column in columns" :title="column.title">
    <Container
      @drop="onCardDrop(column.type, $event)"
      :get-child-payload="getCardPayload(column.type)"
      @drop-ready="(e) => sortedItems"
      group-name="col"
      class="flex flex-col gap-2"
      :drop-placeholder="dropPlaceholderOptions"
      :animation-duration="500"
    >
      <SmoothDraggable
        v-for="entity in filterEntryByType(entities, column.type)"
        :key="entity.id"
      >
        <TaskEntity
          class="draggable-item"
          draggable
          :entity="entity"
          @onDelete="emit('onDelete', entity)"
          @onUpdate="emit('onUpdate', $event)"
          @openDetails="emit('openDetails')"
        />
      </SmoothDraggable>
    </Container>
    <slot name="actions" :column="column" />
  </TasksGroups>
</template>
