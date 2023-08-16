<script setup>
const { data: options } = useComponentsOptionsLoader();
const addingOptionId = ref(0);
const { deleteComponentOptionVariant } = useComponentsOptionsVariantsActions();

function onDeleteComponentOptionVariant(componentOptionVariant) {
  deleteComponentOptionVariant(componentOptionVariant);
}
</script>

<template>
  <DssTableWrapper name="Variants">
    <div v-for="option in options">
      <FeatureDetailsVariantsHeader
        :option="option"
        @onEdit="$emit('onEditOption', option)"
      />
      <ul class="my-1">
        <!-- Item -->
        <li
          v-for="variant in option.component_option_variants.data"
          class="flex px-2"
        >
          <ComponentOptionVariantStatus :type="option.type" />
          <div
            class="grow flex items-centerborder-slate-100 dark:border-slate-700 text-sm py-2"
          >
            <div class="grow flex justify-between">
              <div class="self-center">
                <a
                  @click="$emit('onEditVariant', item)"
                  class="font-medium cursor-pointer hover:underline text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
                >
                  {{ variant.attributes.name }}
                </a>
              </div>
              <div class="shrink-0 self-end ml-2 flex gap-2">
                <WidgetVariantStatus
                  :value="variant.attributes.status || 'Proposed'"
                />
                <FeatureDetailsVariantsOptions
                  @onEdit="$emit('onEditVariant', item)"
                  @onDelete="onDeleteComponentOptionVariant(variant)"
                />
              </div>
            </div>
          </div>
        </li>
      </ul>

      <ComponentOptionVariantAddForm :option="option" />
    </div>
  </DssTableWrapper>
  <div class="flex gap-2 mt-4">
    <DssButton
      preppendIcon="fa-add"
      @click="$emit('onAdd')"
      text="Add Variant"
      size="sm"
    />
  </div>
</template>
