<script setup>
import axios from "axios";

const figmaComponents = shallowRef(null);
const loadingComponents = ref(false);

const error = ref(null);

function normalizeComponentsFromFile(file, libraryComponents) {
  return file.document.children.map((component) => {
    return {
      name: component.name,
      libraryComponent: libraryComponents[component.children[0].name],
      lib: libraryComponents,
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
</script>
<template>
  {{ error }}
  <div class="flex justify-between items-center mb-4">
    <DssButton
      :loading="loadingComponents"
      text="Request Components"
      @click="getComponents()"
    />
    <div class="flex items-center">
      <div class="hidden xl:block text-sm italic mr-2 whitespace-nowrap">
        <span>22</span> items selected
      </div>
      <DssButton variant="secondary" text="Sync " />
    </div>
  </div>

  <FigmaFetchComponentsTable
    v-if="figmaComponents"
    :figmaComponents="figmaComponents"
  />
</template>
