<template>
  <nav
    as="nav"
    class="navbar bg-white shadow-ms rounded-bl-lg rounded-br-lg mb-4 py-1 px-4 flex justify-between"
  >
    <UButton color="white" variant="ghost" @click="toggleSidebar">
      <template #leading>
        <nuxt-icon class="text-[1.35rem]" name="align"></nuxt-icon>
      </template>
    </UButton>

    <div class="flex gap-4">
      <PartLang />
      <PartUser />
    </div>
  </nav>
</template>

<script setup>
import { useWindowSize } from "@vueuse/core";
const sidebar = useToggleSidebar();
const fixedSidebar = useFixedSidebar();
const { width } = useWindowSize();

const toggleSidebar = () => {
  if (width.value > 1024) {
    sidebar.value = !sidebar.value;
  } else {
    fixedSidebar.value = !fixedSidebar.value;
  }
};

watchEffect(() => {
  if (width.value > 1024) {
    fixedSidebar.value = true;
  }
});
</script>