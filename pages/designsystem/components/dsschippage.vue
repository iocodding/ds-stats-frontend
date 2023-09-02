<script setup></script>
<template>
  <NuxtLayout name="dslayout">
    <div class="flex flex-col gap-4">
      <div class="flex gap-2">
        <DssBadge text="success" />
        <DssBadge color="neutral" text="Neutral" />
        <DssBadge color="warning" text="Warning" />
        <DssBadge color="info" text="Info" />
        <DssBadge color="danger" text="Danger" />
      </div>
      <div class="flex gap-2">
        <DssBadge size="sm" text="success" />
        <DssBadge size="sm" color="neutral" text="Neutral" />
        <DssBadge size="sm" color="warning" text="Warning" />
        <DssBadge size="sm" color="info" text="Info" />
        <DssBadge size="sm" color="danger" text="Danger" />
      </div>
    </div>
  </NuxtLayout>
</template>
