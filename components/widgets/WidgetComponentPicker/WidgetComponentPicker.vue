<template>
  <DssPopover widthClass="w-full">
    <template #activator
      ><DssSelectActivator> Hello </DssSelectActivator>
    </template>
    <div class="p-2">
      <DssInput autofocus placeholder="Search Components..." class="mb-2" />
      <div class="max-h-56 overflow-y-scroll">
        <DssOptionsMenuItem text="Button" />
        <DssOptionsMenuItem text="Table" />
        <DssOptionsMenuItem text="Dialog" />
        <DssOptionsMenuItem text="Hello" />
        <DssOptionsMenuItem text="Hello" />
        <DssOptionsMenuItem text="Button" />
        <DssOptionsMenuItem text="Table" />
        <DssOptionsMenuItem text="Dialog" />
        <DssOptionsMenuItem text="Hello" />
        <DssOptionsMenuItem text="Hello" />
        <DssOptionsMenuItem text="Button" />
        <DssOptionsMenuItem text="Table" />
        <DssOptionsMenuItem text="Dialog" />
        <DssOptionsMenuItem text="Hello" />
        <DssOptionsMenuItem text="Hello" />
      </div>
    </div>
  </DssPopover>
</template>
