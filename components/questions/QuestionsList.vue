<script setup>
const props = defineProps({
  state: {
    type: Object,
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

function moveCardInSameColumn(dropResult) {
  const currentColumnItems = sortedItems.value;

  const removedItem = currentColumnItems[dropResult.removedIndex];
  const addedItem = currentColumnItems.filter(
    (item) => item.id !== removedItem.id
  )[dropResult.addedIndex];

  //   const startPositionIndex = sortedItems.value.indexOf(addedItem);
  //   const movedBefore = sortedItems.value[startPositionIndex + 1];

  emit("onCardDrop", removedItem, addedItem);
}

function onCardDrop(dropResult) {
  if (dropResult.removedIndex !== null && dropResult.addedIndex !== null) {
    moveCardInSameColumn(dropResult);
  }
}

const dropPlaceholderOptions = {
  className:
    "w-full h-14 my-1 bg-slate-800 border border-dashed border-slate-600",
};
function filterEntryByType(entry) {
  return entry;
}
</script>
<template>
  <Container
    @drop="onCardDrop($event)"
    @drag-start="dragStart"
    group-name="col"
    class="flex flex-col gap-2 w-full"
    :drop-placeholder="dropPlaceholderOptions"
  >
    <Draggable
      v-for="entity in filterEntryByType(entities)"
      :key="entity.id"
      class="w-full"
    >
      <TaskEntity
        class="draggable-item w-full"
        :entity="entity"
        @onDelete="emit('onDelete', entity)"
        @onUpdate="emit('onUpdate', $event)"
      />
    </Draggable>
  </Container>
</template>
