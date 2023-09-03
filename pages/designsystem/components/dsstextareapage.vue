<script setup></script>
<template>
  <NuxtLayout name="dslayout">
    <div class="flex flex-col gap-4">
      <DssTextarea
        label="Textarea"
        placeholder="ex: Textarea placeholder"
        size="sm"
      />
      <DssTextarea label="Textarea" placeholder="ex: Textarea placeholder" />
      <DssTextarea
        label="Textarea"
        placeholder="ex: Textarea placeholder"
        size="lg"
      />

      <DssTextarea
        label="Textarea"
        placeholder="ex: Textarea placeholder"
        errorMessage="Error Message"
      />
    </div>
  </NuxtLayout>
</template>
