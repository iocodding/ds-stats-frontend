<script setup>
const items = [
  { name: "item 1", id: 1 },
  { name: "item 2", id: 2 },
];
function onDrop() {
  console.log("drop");
}
</script>
<template>
  <Container @drop="onDrop">
    <Draggable v-for="item in items" :key="item.id">
      <div class="draggable-item">{{ item.name }}</div>
    </Draggable>
  </Container>
</template>
