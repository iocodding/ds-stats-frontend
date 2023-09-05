<script setup>
const items = [
  { name: "DssButton" },
  { name: "DssAlert" },
  { name: "DssList" },
];

const { data: components } = useComponentsLoader(1, "available-components");
const selected = ref([]);

function onCheck(optionId, checked) {
  if (checked) {
    selected.value.push(optionId);
  } else {
    selected.value.splice(selected.value.indexOf(optionId), 1);
  }
}
</script>
<template>
  <div
    class="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
  >
    <div class="p-3">
      <div>
        <DssInput placeholder="Search Components.." class="mb-2" />
        <ul class="my-1 overflow-y-scroll max-h-80">
          <!-- Item -->
          <li
            class="flex px-2 h-14 hover:bg-indigo-500/20 cursor-pointer"
            v-for="component in components"
            @click="onCheck(component.id, !selected.includes(component.id))"
          >
            <DssCheckbox
              class="ml-2 mr-2"
              :checked="selected.includes(component.id)"
            />
            <div class="grow flex items-center text-sm py-2">
              <div class="grow flex justify-between">
                <div class="self-center">
                  <a
                    class="font-medium text-base text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
                    href="#0"
                    >{{ component.name }}</a
                  >
                </div>
                <div class="shrink-0 self-start ml-2">
                  <DssBadge> Stable </DssBadge>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
