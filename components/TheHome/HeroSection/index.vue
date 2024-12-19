<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-between lg:container xl:container mx-auto px-4 md:px-32"
  >
    <div class="min-h-full pt-8 sm:pt-32 w-full xl:w-2/3">
      <TheHomeHeroSectionHeroTitle />
      <TheHomeHeroSectionHeroTypedText />
      <TheHomeHeroSectionHeroImageMobile class="lg:hidden" />

      <div class="container mx-auto px-4 mt-10 text-gray-400">
        <TheHomeHeroSectionHeroDescription />
        <TheHomeHeroSectionHeroSocialMedia />
        <TheHomeHeroSectionHeroCallToAction />
      </div>
    </div>
    <TheHomeHeroSectionHeroImageDesktop class="lg:block" />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
