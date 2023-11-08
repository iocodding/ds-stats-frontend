<script setup>
const route = useRoute();

const pages = [
  {
    name: "DssAlert",
    link: "/dssalertpage",
  },
  {
    name: "DssBadge",
    link: "/dssbadgepage",
  },
  {
    name: "DssButton",
    link: "/dssbuttonpage",
  },
  {
    name: "DssBreadcrumb",
    link: "/dssbreadcrumbpage",
  },

  {
    name: "DssInput",
    link: "/dssinputpage",
  },
  {
    name: "DssTextarea",
    link: "/dsstextareapage",
  },
  {
    name: "DssTable",
    link: "/dsstablepage",
  },
  {
    name: "DssSpinner",
    link: "/dssspinnerpage",
  },
  {
    name: "TipTap",
    link: "/dsstiptappage",
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
