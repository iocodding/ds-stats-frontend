<template>
  <div class="editor">
    <div class="menubar">
      <span v-for="actionName in activeButtons" :key="actionName">
        <button
          v-if="actionName === 'bold'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        ></button>
        <button
          v-if="actionName === 'italic'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          Italyc
        </button>

        <button
          v-if="actionName === 'strike'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('strike') }"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          strike
        </button>

        <button
          v-if="actionName === 'underline'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('underline') }"
          @click="editor.chain().focus().toggleUnderline().run()"
        ></button>

        <button
          v-if="actionName === 'code'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('code') }"
          @click="editor.chain().focus().toggleCode().run()"
        >
          code
        </button>

        <button
          v-if="actionName === 'h1'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        >
          H1
        </button>

        <button
          v-if="actionName === 'h2'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        >
          H2
        </button>

        <button
          v-if="actionName === 'h3'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        >
          H3
        </button>

        <button
          v-if="actionName === 'bulletList'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('bulletList') }"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          bulletList
        </button>

        <button
          v-if="actionName === 'orderedList'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('orderedList') }"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          orderedList
        </button>

        <button
          v-if="actionName === 'blockquote'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('blockquote') }"
          @click="editor.chain().focus().toggleBlockquote().run()"
        >
          blockquote
        </button>

        <button
          v-if="actionName === 'codeBlock'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('codeBlock') }"
          @click="editor.chain().focus().toggleCodeBlock().run()"
        >
          codeBlock
        </button>

        <button
          v-if="actionName === 'horizontalRule'"
          class="menubar__button"
          @click="editor.chain().focus().setHorizontalRule().run()"
        >
          horizontalRule
        </button>

        <button
          v-if="actionName === 'undo'"
          class="menubar__button"
          @click="editor.chain().focus().undo().run()"
        >
          Undo
        </button>

        <button
          v-if="actionName === 'redo'"
          class="menubar__button"
          @click="editor.chain().focus().redo().run()"
        >
          REDO
        </button>
      </span>
    </div>

    <EditorContent class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

export default {
  name: "Editor",
  components: {
    EditorContent,
  },
  props: {
    initialContent: {
      type: String,
      required: true,
      default: "<em>editable text</em>",
    },
    activeButtons: {
      type: Array,
      validator: function (list) {
        for (let el of list) {
          // The value must match one of these strings
          if (
            [
              "bold",
              "italic",
              "strike",
              "underline",
              "code",
              "h1",
              "h2",
              "h3",
              "bulletList",
              "orderedList",
              "blockquote",
              "codeBlock",
              "horizontalRule",
              "undo",
              "redo",
            ].indexOf(el) === -1
          ) {
            return -1;
          }
        }
        return 1;
      },
      default: () => ["bold", "italic"],
    },
  },
  emits: ["update"],
  data() {
    return {
      html: "",
      json: "",
      editor: null,
    };
  },
  created() {
    this.editor = new Editor({
      content: this.initialContent,
      extensions: [StarterKit, Underline],
    });

    this.html = this.editor.getHTML();
    this.json = this.editor.getJSON();

    this.editor.on("update", () => {
      this.html = this.editor.getHTML();
      this.json = this.editor.getJSON();
      this.$emit("update", this.html);
    });
  },
  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style lang="css" scoped></style>
