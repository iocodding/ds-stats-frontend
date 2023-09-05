<script setup>
import axios from "axios";

const { data: files } = useFigmaFileLoader();

const error = ref(null);
</script>
<template>
  <FigmaFetchRecources v-if="files" :components="files.components" />

  <FigmaFetchComponentsTable
    v-if="files && files.components"
    :figmaComponents="files.components"
  />
</template>
