<script setup>
const props = defineProps({
  entity: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits("onDelete", "onUpdate");
const inputValue = ref(props.entity.name);
const isEditting = ref(false);

function abort() {
  isEditting.value = false;
}

function onSubmit() {
  isEditting.value = false;
  emit("onUpdate", { ...props.entity, name: inputValue.value });
}
</script>
<template>
  <div
    class="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 h-16 flex items-center px-4 w-full"
  >
    <div class="sm:flex sm:justify-between sm:items-start w-full">
      <!-- Left side -->
      <div class="grow mt-0.5 mb-3 sm:mb-0 space-y-3">
        <div class="flex items-center w-full">
          <!-- Drag button -->
          <DssIcon
            class="cursor-pointer hover:text-slate-300"
            @click="isEditting = true"
            icon="fa-bars"
          />
          <!-- Checkbox button -->
          <label class="flex items-center w-full justify-between">
            <DssInput
              v-if="isEditting"
              class="ml-4 mr-4 bg-slate-100"
              v-model="inputValue"
              v-click-outside="abort"
              @keyup:enter="onSubmit"
            />
            <span
              v-else
              @click="emit('openDetails')"
              class="font-sm text-slate-800 dark:text-slate-100 peer-checked:line-through ml-6 cursor-pointer hover:underline truncate"
              style="max-width: 240px"
              >{{ entity.name }}</span
            >

            <div class="flex gap-4">
              <DssIcon
                class="cursor-pointer text-slate-500 hover:text-slate-400"
                @click="emit('onDelete')"
                icon="fa-trash"
              />
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
