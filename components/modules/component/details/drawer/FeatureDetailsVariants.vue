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
        :name="option.name"
        @onEdit="$emit('onEdit')"
      />
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
                <FeatureDetailsVariantsOptions
                  @onEdit="$emit('onEdit', item)"
                  @onDelete="onDeleteComponentOptionVariant(variant)"
                />
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
  </DssTableWrapper>
</template>
