<template>
  <div class="h-20">
    <nav
      class="lg:container xl:container mx-auto px-4 xl:px-8 flex justify-between items-center h-full"
    >
      <div class="flex items-center gap-3">
        <nuxt-icon class="text-[4rem] nuxt-icon-auth" :name="logo"></nuxt-icon>
        <h1 class="uppercase font-black text-xl text-gray-150 main-title">
          Elshatory
        </h1>
      </div>
      <div class="hidden sm:block">
        <NuxtLink
          class="text-md font-black cursor-pointer hover:underline hover:decoration-gray-400 underline-offset-4 text-gray-400 p-2 main-title"
        >
          Home
        </NuxtLink>
        <NuxtLink
          class="text-md font-black cursor-pointer hover:underline underline-offset-4 text-gray-400 p-2"
          @click="scrollToSection('services')"
        >
          Services
        </NuxtLink>
        <NuxtLink
          class="text-md font-black cursor-pointer hover:underline underline-offset-4 text-gray-400 p-2"
          @click="scrollToSection('experience')"
        >
          Experience
        </NuxtLink>
        <NuxtLink
          class="text-md font-black cursor-pointer hover:underline underline-offset-4 text-gray-400 p-2"
          @click="scrollToSection('projects')"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          class="text-md font-black cursor-pointer hover:underline underline-offset-4 text-gray-400 p-2"
          @click="scrollToSection('customers')"
        >
          Customers
        </NuxtLink>
      </div>
      <div class="hidden">
        <ClientOnly>
          <UButton
            :icon="
              isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
            "
            color="gray"
            variant="ghost"
            aria-label="Theme"
          />
          <!-- @click="isDark = !isDark" -->

          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
      </div>
    </nav>
  </div>
</template>

<script setup>
const { isDark } = useToggleMode();

const runtimeConfig = useRuntimeConfig();

const logo = computed(() => {
  return runtimeConfig.public.logo;
});

const scrollToSection = (sectionRef) => {
  document.getElementById(sectionRef).scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
</style>