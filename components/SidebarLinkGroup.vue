<template>
  <li class="rounded-sm mb-0.5 last:mb-0 cursor-pointer">
    <router-link
      :to="to"
      class="block text-slate-200 truncate transition duration-150 px-3 py-3"
      :class="
        activeCondition
          ? 'hover:text-slate-200 bg-slate-950'
          : 'hover:text-white hover:bg-slate-90'
      "
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <slot />
          <span
            class="text-base font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
            >{{ name }}</span
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["activeCondition", "to", "name"],
  setup(props) {
    const expanded = ref(props.activeCondition);

    const handleClick = () => {
      expanded.value = !expanded.value;
    };

    return {
      expanded,
      handleClick,
    };
  },
};
</script>