<template>
  <div class="container mx-auto px-8 mt-16 pb-5">
    <UCard
      class="bg-slate-900 dark:bg-slate-900 ring-gray-800 dark:ring-gray-800"
    >
      <div
        class="flex items-center gap-5 sm:justify-between flex-col sm:flex-row"
      >
        <p class="text-center sm:text-start text-white dark:text-white">
          &copy; {{ useFormatDate(new Date(), "YYYY") }}
          <UButton
            to="https://beingmomen.com"
            target="_blank"
            aria-label="الشطوري"
            label="عبدالمؤمن الشطوري"
            color="primary"
            variant="link"
            class="text-3xl main-title underline"
            :ui="{
              font: 'font-bold',
            }"
          />
        </p>

        <div class="flex gap-6 flex-wrap justify-center">
          <NuxtLink
            to="https://www.linkedin.com/in/beingmomen/"
            target="_blank"
            aria-label="Linkedin Profile"
          >
            <UIcon name="i-skill-icons-linkedin" class="w-8 h-8" />
          </NuxtLink>
          <NuxtLink
            to="https://github.com/beingmomen"
            target="_blank"
            aria-label="github Profile"
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
              alt="عبدالمؤمن"
              class="w-8 min-w-8 h-8 object-cover"
            />
          </NuxtLink>
          <NuxtLink
            to="https://twitter.com/beingmomen"
            target="_blank"
            aria-label="twitter Profile"
          >
            <UIcon name="i-devicon-twitter" class="w-8 h-8" />
          </NuxtLink>
          <NuxtLink
            to="https://www.facebook.com/beingmomen/"
            target="_blank"
            aria-label="facebook Profile"
          >
            <UIcon name="i-devicon-facebook" class="w-8 h-8" />
          </NuxtLink>
          <NuxtLink
            to="https://www.instagram.com/beingmomen/"
            target="_blank"
            aria-label="instagram Profile"
          >
            <UIcon name="i-skill-icons-instagram" class="w-8 h-8" />
          </NuxtLink>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>