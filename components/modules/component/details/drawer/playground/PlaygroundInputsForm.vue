<script setup>
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
});

function onUpdateOption(value, option) {
  const selectionIndex = selections.value.findIndex(
    (selection) => selection.optionId === option.id
  );
  selections.value[selectionIndex] = value;
}

const selections = ref(
  props.options.map((option) => {
    return {
      optionId: option.id,
      name: option.name,
      value: option.component_option_variants.data[0].attributes.name,
      status: option.component_option_variants.data[0].attributes.status,
    };
  })
);
const codeStart = `<DssButton \n`;
const codeProps = computed(() =>
  selections.value
    .map((selection) => {
      return `  ${selection.name}="${selection.value}" \n`;
    })
    .join("")
);
const codeEnd = `/>`;
</script>
<template>
  <div class="flex w-full gap-4">
    <!-- <div>
      <p v-for="selection in selections">
        {{ selection.optionId }}: {{ selection.value }}
      </p>
    </div> -->
    {{ sortedItems }}
    <WidgetCodeEditor
      :key="codeProps"
      :code="`${codeStart}${codeProps}${codeEnd}`"
      class="w-full flex-grow"
    />

    <div class="w-full flex-grow flex flex-col gap-2">
      <div v-for="option in options">
        <PlaygroundInputsFormVariant
          v-if="option.type === 'Variant'"
          :option="option"
          @onUpdate="onUpdateOption($event, option)"
        />
      </div>
    </div>
  </div>
</template>
