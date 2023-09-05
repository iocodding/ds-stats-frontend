<script setup>
const props = defineProps({
  components: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["close"]);

const figmaComponents = shallowRef(null);
const loadingComponents = ref(true);

function normalizeComponentsFromFile(file, libraryComponents) {
  return file.document.children.map((component) => {
    return {
      name: component.name,
      // libraryComponent: libraryComponents[component.children[0].name],
      // lib: libraryComponents,
      options: Object.values(
        component.children[0].componentPropertyDefinitions
      ).map((definition, index) => {
        return {
          name: Object.keys(component.children[0].componentPropertyDefinitions)[
            index
          ],
          type: definition.type,
          defaultValue: definition.defaultValue,
          variantOptions: definition.variantOptions,
        };
      }),
    };
  });
}

function getGroupedComponents(components) {
  const groupedLibrarycomponents = {};

  components.forEach((item) => {
    const name = item.containing_frame.name;
    console.log(item.containing_frame.name);

    if (!groupedLibrarycomponents[name]) {
      groupedLibrarycomponents[name] = [];
    }

    groupedLibrarycomponents[name].push(item);
  });

  return groupedLibrarycomponents;
}

async function getComponents() {
  loadingComponents.value = true;
  const file = await $fetch(
    `https://api.figma.com/v1/files/lYsxphFki8PaaJkh48Uqo9`,
    {
      headers: {
        "X-Figma-Token": "figd_dLU-ViAeDkSbQnyELv19O8PxXY_gn_HG6Rbvq8dL",
      },
    }
  ).then((r) => r);

  const libraryComponentsRes = await $fetch(
    `https://api.figma.com/v1/files/lYsxphFki8PaaJkh48Uqo9/components`,
    {
      headers: {
        "X-Figma-Token": "figd_dLU-ViAeDkSbQnyELv19O8PxXY_gn_HG6Rbvq8dL",
      },
    }
  ).then((r) => r);

  if (file.err) {
    return { components: [], styles: [], error: file.err };
  }

  const libraryComponents = libraryComponentsRes.meta.components;

  const groupedLibrarycomponents = getGroupedComponents(libraryComponents);

  const components = normalizeComponentsFromFile(
    file,
    groupedLibrarycomponents
  );

  loadingComponents.value = false;
  figmaComponents.value = components;
  return { components, error: "" };
}

const { updateFigmaRecourse, loading } = useFigmaActions();

function updateRecourse() {
  const recourse = {
    id: 1,
    components: JSON.parse(JSON.stringify(figmaComponents.value)),
  };
  updateFigmaRecourse(recourse).then(() => {
    emit("close");
  });
}

onMounted(() => {
  getComponents();
});
</script>
<template>
  <WidgetDialogPanel
    :cancelButtonText="!loadingComponents && 'Abort'"
    :saveButtonText="!loadingComponents && 'Insert Components'"
    @close="emit('close')"
    :loading="loading"
    @submit="updateRecourse"
  >
    <div
      v-if="loadingComponents"
      class="flex flex-col gap-4 items-center py-40"
    >
      <DssSpinner />
      <span class="font-semibold">Fetching from Figma</span>
    </div>
    <div v-else class="grid grid-cols-5 gap-4">
      <div v-for="component in figmaComponents">
        <DssCardWrapper :title="component.name">
          <template #prepend>
            <img
              class="mb-4"
              src="http://localhost:1337/uploads/Attlasian_Cover_6cc14cb971.png"
            />
          </template>
        </DssCardWrapper>
      </div>
    </div>
  </WidgetDialogPanel>
</template>
