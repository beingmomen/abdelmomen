<template>
  <figure
    class="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
  >
    <div class="flex flex-row items-center gap-2">
      <NuxtImg
        provider="cloudinary"
        :src="img"
        class="rounded-full"
        width="32"
        height="32"
        :alt="name"
      />
      <!-- <NuxtImg
            class="rounded-full h-28 w-28 mb-16 mt-5 object-cover object-center"
            draggable="false"
            provider="cloudinary"
            :src="item.image"
            :alt="item.name"
            loading="lazy"
            width="1200"
            height="1200"
            sizes="400px"
            :modifiers="{
              c: 'crop',
              g: 'auto',
            }"
          /> -->
      <div class="flex flex-col">
        <span class="text-sm font-medium dark:text-white">
          {{ name }}
        </span>
        <p class="text-xs font-medium dark:text-white/40">{{ email }}</p>
      </div>
    </div>
    <blockquote class="mt-2 text-sm">{{ body }}</blockquote>
  </figure>
</template>

<script lang="ts" setup>
// @ts-ignore
defineProps({
  img: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
});
</script>