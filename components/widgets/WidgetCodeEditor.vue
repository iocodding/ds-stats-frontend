<template>
  <div>
    <codemirror
      v-model="code"
      placeholder="Code goes here..."
      :style="{ height: '300px' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      :options="{
        lineHighlight: {
          from: 1,
          to: 2,
        },
      }"
      @ready="handleReady"
    />
  </div>
</template>

<script setup>
import { Codemirror } from "vue-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const props = defineProps({
  code: {
    type: String,
    default: "",
  },
});
const code = ref(props.code);
const extensions = [javascript(), oneDark];

// Codemirror EditorView instance ref
const view = shallowRef();
const handleReady = (payload) => {
  view.value = payload.view;
};

// Status is available at all times via Codemirror EditorView
const getCodemirrorStates = () => {
  const state = view.value.state;
  const ranges = state.selection.ranges;
  const selected = ranges.reduce((r, range) => r + range.to - range.from, 0);
  const cursor = ranges[0].anchor;
  const length = state.doc.length;
  const lines = state.doc.lines;
};
</script>
