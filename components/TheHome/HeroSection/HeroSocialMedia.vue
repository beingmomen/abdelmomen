<template>
  <div
    class="mt-10 flex flex-wrap justify-center xl:justify-start gap-4 items-center"
  >
    <NuxtLink
      to="https://www.linkedin.com/in/beingmomen/"
      target="_blank"
      aria-label="الشطوري | LinkedIn"
    >
      <UIcon name="i-skill-icons-linkedin" class="w-8 h-8" />
    </NuxtLink>
    <NuxtLink
      to="https://github.com/beingmomen"
      target="_blank"
      aria-label="الشطوري | Github"
    >
      <UIcon name="i-skill-icons-github-dark" class="w-8 h-8" />
    </NuxtLink>
    <NuxtLink
      to="https://qabilah.com/profile/beingmomen/posts"
      target="_blank"
      aria-label="linkedin Profile"
    >
      <NuxtImg
        provider="cloudinary"
        src="beingmomen/icons/rfq6c4v71eb49k6btf7r"
        alt="الشطوري | قبيلة"
        class="w-8 h-8 object-cover"
        preload
      />
    </NuxtLink>

    <UButton
      class="font-bold main-title"
      color="blue"
      :ui="{ rounded: 'rounded-full' }"
      size="xl"
      icon="i-heroicons-arrow-down-tray"
      trailing
      variant="outline"
      target="_blank"
      to="https://drive.google.com/file/d/157_ZQjba7KZopZzMTVhEfcndqMif0APG/view?usp=sharing"
    >
      تحميل السيرة الذاتية
    </UButton>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>