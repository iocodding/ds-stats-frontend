<script setup>
const props = defineProps({
  option: {
    type: Object,
    required: true,
  },
});
const { deleteComponentOptionVariant, updateComponentOptionVariant } =
  useComponentsOptionsVariantsActions();

function onDeleteComponentOptionVariant(componentOptionVariant) {
  deleteComponentOptionVariant(componentOptionVariant);
}

function onUpdateStatus(status, variant) {
  const body = {
    id: variant.id,
    component_option_status: status.id,
  };
  updateComponentOptionVariant(body);
}
</script>
<template>
  <div>
    <FeatureDetailsVariantsHeader
      :option="option"
      @onEdit="$emit('onEditOption', option)"
    />
    <ul class="my-1">
      <!-- Item -->
      <li v-for="variant in option.component_option_variants" class="flex px-2">
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
                {{ variant.name }}
              </a>
            </div>
            <div class="shrink-0 self-end ml-2 flex gap-2">
              <WidgetVariantStatus
                :selectedId="variant.component_option_status?.id || 0"
                @onUpdate="onUpdateStatus($event, variant)"
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
    <ComponentOptionVariantAddForm :component="component" :option="option" />
  </div>
</template>
