<script setup>
const routes = {
  feature: { name: "Features", route: "/features" },
  sections: { name: "Overview", route: "/features/{id}/overview" },
  questions: { name: "Questions", route: "/features/{id}/questions" },
};
const route = useRoute();
const routeKeys = computed(() =>
  route.path.split("/").filter((item) => item !== "")
);
const items = computed(() =>
  routeKeys.value.map(
    (key) =>
      routes[key] || {
        name: key.charAt(0).toUpperCase() + key.slice(1),
        route: "/",
      }
  )
);
</script>
<template>
  <DssBreadcrumb :items="items" />
</template>
