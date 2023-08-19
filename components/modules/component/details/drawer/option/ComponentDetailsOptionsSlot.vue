<script setup>
const props = defineProps({
  option: {
    type: Object,
    required: true,
  },
});
const { deleteComponentOptionVariant } = useComponentsOptionsVariantsActions();

function onDeleteComponentOptionVariant(componentOptionVariant) {
  deleteComponentOptionVariant(componentOptionVariant);
}
</script>
<template>
  <div>
    <FeatureDetailsVariantsHeader
      :option="option"
      @onEdit="$emit('onEditOption', option)"
    />

    <div class="flex px-2">
      <ComponentOptionVariantStatus :type="option.type" />
      <div
        class="grow flex items-centerborder-slate-100 dark:border-slate-700 text-sm py-2"
      >
        <div class="grow flex justify-between">
          <div class="self-center">
            <a
              class="font-medium cursor-pointer hover:underline text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
            >
              Slot Details
            </a>
          </div>
          <div class="shrink-0 self-end ml-2 flex gap-2">
            <WidgetVariantStatus value="Proposed" />
          </div>
        </div>
      </div>
    </div>
    <!-- <ul class="my-1">
      <li
        v-for="variant in option.component_option_variants"
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
                {{ variant.name }}
              </a>
            </div>
            <div class="shrink-0 self-end ml-2 flex gap-2">
              <WidgetVariantStatus
                :value="variant.status || 'Proposed'"
              />
              <FeatureDetailsVariantsOptions
                @onEdit="$emit('onEditVariant', item)"
                @onDelete="onDeleteComponentOptionVariant(variant)"
              />
            </div>
          </div>
        </div>
      </li>
    </ul> -->
  </div>
</template>
