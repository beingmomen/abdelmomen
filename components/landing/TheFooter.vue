<template>
  <div class="container mx-auto px-8 mt-16 pb-5">
    <UCard>
      <div
        class="flex items-center gap-5 sm:justify-between flex-col sm:flex-row"
      >
        <p class="text-center sm:text-start">
          © 2023 Created by
          <UButton
            to="https://www.linkedin.com/in/beingmomen/"
            target="_blank"
            label="Abdelmomen Elshatory"
            color="primary"
            variant="link"
            class="text-3xl hover:main-title underline"
            :ui="{
              font: 'font-black',
            }"
          />
        </p>

        <div class="flex gap-6">
          <NuxtLink
            to="https://www.linkedin.com/in/beingmomen/"
            target="_blank"
          >
            <nuxt-icon
              class="text-[2rem] cursor-pointer shadow-lg"
              name="linkedin"
            ></nuxt-icon>
          </NuxtLink>
          <NuxtLink to="https://github.com/beingmomen" target="_blank">
            <nuxt-icon
              class="text-[2rem] cursor-pointer shadow-lg"
              name="github"
            ></nuxt-icon>
          </NuxtLink>
          <NuxtLink to="https://twitter.com/beingmomen" target="_blank">
            <nuxt-icon
              class="text-[2rem] cursor-pointer shadow-lg"
              name="twitter"
            ></nuxt-icon>
          </NuxtLink>
          <NuxtLink to="https://www.facebook.com/beingmomen/" target="_blank">
            <nuxt-icon
              class="text-[2rem] cursor-pointer shadow-lg"
              name="facebook"
            ></nuxt-icon>
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/beingmomen/" target="_blank">
            <nuxt-icon
              class="text-[2rem] cursor-pointer shadow-lg"
              name="instagram"
            ></nuxt-icon>
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