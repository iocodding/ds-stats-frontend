<script setup>
const manageDrawerOpen = ref(false);
</script>
<template>
  <WidgetToolbar title="Sections" buttonText="Add Section" />
  <div class="grid grid-cols-12 gap-6">
    <DssCard
      title="Add Edit Customer Modal"
      image="https://wire-elements.dev/img/modal.png"
      description="This is modal Component"
      @click="manageDrawerOpen = true"
    />
    <DssCard
      image="https://s3-alpha.figma.com/hub/file/1596444482/175d34b3-aa3e-419d-9946-797895493c33-cover.png"
      title="Customer table"
      description="This is modal Component"
      @click="manageDrawerOpen = true"
    />
  </div>
  <FeatureSectionDetailsDrawer
    :open="manageDrawerOpen"
    @close="manageDrawerOpen = false"
  />
</template>
