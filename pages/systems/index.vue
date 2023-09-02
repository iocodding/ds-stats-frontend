<script setup>
const items = ref([
  {
    id: 0,
    name: "Attlasian Design System",
    link: "#0",
    location: "Team A",
    content:
      "Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.",
  },
  {
    id: 1,
    name: "Twillio Design System",
    link: "#0",
    location: "Team C",
    content:
      "Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.",
  },
]);

const { data: systems } = useDesignSystemsLoader();
</script>

<template>
  <NuxtLayout>
    <main class="grow">
      <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <!-- Page header -->
        <WidgetToolbar />
        <!-- Cards -->
        <div class="grid grid-cols-12 gap-6">
          <UsersTilesCard v-for="system in systems" :item="system" />
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>
