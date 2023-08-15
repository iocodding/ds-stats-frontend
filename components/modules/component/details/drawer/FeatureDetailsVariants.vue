<script setup>
const { data: options } = useComponentsOptionsLoader();
const addingOptionId = ref(0);
const { deleteComponentOptionVariant } = useComponentsOptionsVariantsActions();

function onDeleteComponentOptionVariant(componentOptionVariant) {
  deleteComponentOptionVariant(componentOptionVariant);
}
</script>

<template>
  <div
    class="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700"
  >
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">Variants</h2>
    </header>
    <div class="p-3">
      <div v-for="option in options">
        <header
          class="flex justify-between text-xs uppercase text-slate-400 dark:text-slate-400 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm font-semibold p-2 mt-2"
        >
          <div>
            <DssIcon icon="fa-diamond" class="mr-2 text-sky-600" />
            {{ option.name }}
          </div>
          <span @click="$emit('onEdit')" class="cursor-pointer"
            ><DssIcon
              class="flex text-base hover:text-slate-400"
              icon="fa-sliders"
          /></span>
        </header>
        <ul class="my-1">
          <!-- Item -->
          <li
            v-for="variant in option.component_option_variants.data"
            class="flex px-2"
          >
            <ComponentOptionVariantStatus
              :type="option.id === 1 ? 'variant' : 'slot'"
            />
            <div
              class="grow flex items-centerborder-slate-100 dark:border-slate-700 text-sm py-2"
            >
              <div class="grow flex justify-between">
                <div class="self-center">
                  <a
                    @click="$emit('onEdit', item)"
                    class="font-medium cursor-pointer hover:underline text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
                  >
                    {{ variant.attributes.name }}
                  </a>
                </div>
                <div class="shrink-0 self-end ml-2 flex gap-2">
                  <WidgetVariantStatus
                    :value="variant.attributes.status || 'Proposed'"
                  />
                  <DropdownEditMenu align="right" class="relative inline-flex">
                    <li>
                      <a
                        class="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3 cursor-pointer"
                        @click="$emit('onEdit', item)"
                        >Edit</a
                      >
                    </li>

                    <li>
                      <a
                        class="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3 cursor-pointer"
                        @click="onDeleteComponentOptionVariant(variant)"
                        >Delete</a
                      >
                    </li>
                  </DropdownEditMenu>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <ComponentOptionVariantAddForm
          :optionType="option.id === 1 ? 'variant' : 'slot'"
          :option="option"
        />
      </div>
    </div>
  </div>
</template>
