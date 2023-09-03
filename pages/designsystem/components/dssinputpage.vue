<template>
  <NuxtLayout name="dslayout">
    <div class="flex flex-col gap-2">
      <DssInput size="sm" placeholder="ex: DssInput" label="Input" />
      <DssInput placeholder="ex: DssInput" label="Input" />
      <DssInput size="lg" placeholder="ex: DssInput" label="Input" />

      <DssInput placeholder="*****" label="Password" type="password" />
      <DssInput
        placeholder="ex: DssInput"
        label="Input"
        errorMessage="Error message"
      />
    </div>
  </NuxtLayout>
</template>
