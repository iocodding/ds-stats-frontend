<script setup>
const props = defineProps({
  option: {
    type: Object,
    required: true,
  },
});

const { updateComponentOptionBoolean } = useComponentOptionBooleanActions();

function onUpdateStatus(status, variant) {
  const body = {
    id: variant.id,
    component_option_status: status.id,
  };
  updateComponentOptionBoolean(body);
}
</script>
<template>
  <div>
    <FeatureDetailsVariantsHeader
      :option="option"
      @onEdit="$emit('onEditOption', option)"
    />

    <div class="flex px-2" v-if="option?.component_option_boolean">
      <ComponentOptionVariantStatus :type="option.type" />
      <div
        class="grow flex items-centerborder-slate-100 dark:border-slate-700 text-sm py-2"
      >
        <div class="grow flex justify-between">
          <div class="self-center">
            <a
              class="font-medium cursor-pointer hover:underline text-slate-800 hover:text-slate-900 dark:text-slate-100 dark:hover:text-white"
            >
              {{ option.component_option_boolean?.name }} - True/False
            </a>
          </div>
          <div class="shrink-0 self-end ml-2 flex gap-2">
            <WidgetVariantStatus
              :selectedId="
                option.component_option_boolean.component_option_status?.id || 0
              "
              @onUpdate="
                onUpdateStatus($event, option.component_option_boolean)
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
