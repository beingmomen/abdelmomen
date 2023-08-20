<script lang="ts" setup>
import { useWindowScroll, useScroll } from "@vueuse/core";
const { x, y } = useWindowScroll();

const el = ref<HTMLElement | null>(null);

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <div class="dark:bg-gray-900 bg-gray-100" ref="el">
    <LandingTheNavbar />
    <LandingTheHero />
    <LandingTheSkills />
    <LandingTheServices />
    <LandingTheExperience />
    <LandingTheProjects />
    <LandingTheClients />
    <!-- <LandingTheTestimonials /> -->
    <slot />
    <LandingTheFooter />
    <UButton
      v-if="y > 1000"
      class="fixed bottom-5 right-5"
      icon="i-ic-outline-arrow-upward"
      size="sm"
      color="blue"
      square
      variant="solid"
      @click="scrollTop"
    />
  </div>
</template>

<style scoped></style>
