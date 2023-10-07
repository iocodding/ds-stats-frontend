<script setup>
const route = useRoute();

const pages = [
  {
    name: "DssAlert",
    link: "/dssalertpage",
  },
];
</script>
<template>
  <div class="space-y-8">
    <div>
      <ul class="mt-3">
        <SidebarLinkGroup
          v-for="page in pages"
          :to="`/designsystem/components${page.link}`"
          :name="page.name"
          :activeCondition="route.fullPath.includes(page.link)"
        >
          <DssIconFigma />
        </SidebarLinkGroup>
      </ul>
    </div>
  </div>
</template>
