<script setup>
const props = defineProps({
  component: {
    type: Object,
    default: () => {},
  },
});

const { data: options } = useComponentsOptionsLoader({
  component: props.component,
});
</script>

<template>
  <DssTableWrapper name="Variants">
    <div v-for="option in options">
      <ComponentDetailsOptionsVariants
        v-if="option.type === 'Variant'"
        @onEditVariant="$emit('onEditVariant', $event)"
        @onEditOption="$emit('onEditOption', $event)"
        :option="option"
      />
      <ComponentDetailsOptionsSlot
        v-if="option.type === 'Slot'"
        @onEditVariant="$emit('onEditVariant', $event)"
        @onEditOption="$emit('onEditOption', $event)"
        :option="option"
      />
      <ComponentDetailsOptionsText
        v-if="option.type === 'Text'"
        @onEditVariant="$emit('onEditVariant', $event)"
        @onEditOption="$emit('onEditOption', $event)"
        :option="option"
      />
      <ComponentDetailsOptionsBoolean
        v-if="option.type === 'Boolean'"
        @onEditVariant="$emit('onEditVariant', $event)"
        @onEditOption="$emit('onEditOption', $event)"
        :option="option"
      />
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
