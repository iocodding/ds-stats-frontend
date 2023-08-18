<script setup>
import { VueDraggableNext } from "vue-draggable-next";

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
const emit = defineEmits("onCardDrop", "onDelete", "onUpdate");

const liftedCard = ref(null);
const droppedPlace = ref(null);
const sortedItems = computed(() => [...props.entities]);

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
}

function log(e) {
  // console.log(e);
}

const dropPlaceholderOptions = {
  className:
    "w-full h-14 my-1 bg-slate-800 border border-dashed border-slate-600",
};
function filterEntryByType(entry, type) {
  return entry.filter((entry) => entry.type === type);
}
</script>
<template>
  <TasksGroups v-for="column in columns" :title="column.title">
    <draggable
      class="dragArea list-group w-full flex flex-col gap-2"
      :options="{ group: column.type }"
      :list="list"
      @change="log"
    >
      <TaskEntity
        v-for="entity in filterEntryByType(entities, column.type)"
        :key="entity.id"
        :entity="entity"
        @onDelete="emit('onDelete', entity)"
        @onUpdate="emit('onUpdate', $event)"
      />
    </draggable>
    <slot name="actions" :column="column" />
  </TasksGroups>
</template>
