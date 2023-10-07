<script setup></script>
<template>
  <NuxtLayout name="dslayout">
    <div class="flex flex-col gap-4">
      <div class="flex gap-2">
        <DssButton size="lg" text="Primary Button" />
        <DssButton size="lg" variant="secondary" text="Secondary Button" />
        <DssButton size="lg" variant="danger" text="Secondary Button" />
        <DssButton
          size="lg"
          variant="danger-secondary"
          text="Secondary Button"
        />
        <DssButton size="lg" variant="tertiary" text="Tertiary Button" />
        <DssButton
          size="lg"
          variant="tertiary-secondary"
          text="Tertiary Secondary Button"
        />
      </div>
      <div class="flex gap-2">
        <DssButton text="Primary Button" />
        <DssButton variant="secondary" text="Secondary Button" />
        <DssButton variant="danger" text="Secondary Button" />
        <DssButton variant="danger-secondary" text="Secondary Button" />
        <DssButton variant="tertiary" text="Tertiary Button" />
        <DssButton
          variant="tertiary-secondary"
          text="Tertiary Secondary Button"
        />
      </div>

      <div class="flex gap-2">
        <DssButton size="sm" text="Primary Button" />
        <DssButton size="sm" variant="secondary" text="Secondary Button" />
        <DssButton size="sm" variant="danger" text="Secondary Button" />
        <DssButton
          size="sm"
          variant="danger-secondary"
          text="Secondary Button"
        />
        <DssButton size="sm" variant="tertiary" text="Tertiary Button" />
        <DssButton
          size="sm"
          variant="tertiary-secondary"
          text="Tertiary Secondary Button"
        />
      </div>
    </div>
  </NuxtLayout>
</template>
