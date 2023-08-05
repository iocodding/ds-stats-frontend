<script setup>
const { data: feature } = useFeatureTanLoader();
const { createFeatureEntity } = useFeatureTanActions()

const {  isLoading, isError, error, isSuccess, mutate  } = createFeatureEntity()

function addFeature() {
  mutate({ name: 'new name', entity: 2, type: 'question' });
}
</script>
<template>
  <div v-for="entity in feature?.feature_entities" :key="entity.id">
    {{  entity.name  }}
  </div>
  <button @click="addFeature">Add new</button>
  <DDPlayground />
</template>
