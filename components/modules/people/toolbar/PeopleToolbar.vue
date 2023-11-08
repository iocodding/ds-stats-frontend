<script setup></script>
<template>
  <div class="sm:flex sm:justify-between sm:items-center mb-5">
    <div class="mb-4 sm:mb-0">
      <h1
        class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold"
      >
        People ✨
      </h1>
    </div>

    <div
      class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
    >
      <DssInput placeholder="Search by invoice ID…" />
      <WidgetFilterDropdown />
      <DssButton @click="$emit('onCreate')" text="Create Component" />
    </div>
  </div>
  <!-- <div class="sm:flex sm:justify-between sm:items-center mb-5">
    <div class="mb-4 sm:mb-0">
      <ul class="flex flex-wrap -m-1">
        <li class="m-1">
          <DssButton text="All" :rounded="true" size="sm" variant="primary" />
        </li>
        <li class="m-1">
          <DssButton
            text="Stable"
            :rounded="true"
            size="sm"
            variant="secondary"
            preppendText="13"
          />
        </li>
        <li class="m-1">
          <DssButton
            text="In Development"
            :rounded="true"
            size="sm"
            variant="secondary"
            preppendText="11"
          />
        </li>
        <li class="m-1">
          <DssButton
            text="In Design"
            :rounded="true"
            size="sm"
            variant="secondary"
            preppendText="8"
          />
        </li>
      </ul>
    </div>
  </div> -->
</template>
