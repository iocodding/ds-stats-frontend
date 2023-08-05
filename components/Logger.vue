<script setup>
const props = defineProps({
  object: {
    type: String,
    default: "",
  },
});

console.log({ logger: props.object });
</script>
