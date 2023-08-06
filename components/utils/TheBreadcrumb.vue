<template>
  <nav
    class="flex mb-5 px-5 py-3 text-dark rounded-lg bg-white shadow-ms"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex items-center">
      <UButton
        v-for="({ title, link, path, icon }, i) in pages"
        :key="i"
        :to="path"
        :icon="`i-heroicons-${icon}`"
        :color="link ? 'primary' : 'gray'"
        :variant="link ? 'link' : 'ghost'"
        :ui="{
          wrapper: '',
          base: '',
          icon: {
            base: 'me-.5',
          },
        }"
      >
        {{ title }}
      </UButton>
    </ol>
  </nav>
</template>

<script setup>
const props = defineProps({
  pages: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
</style>