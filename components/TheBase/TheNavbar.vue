<template>
  <div class="pt-5">
    <nav
      class="lg:container xl:container mx-auto px-4 xl:px-8 flex justify-center md:justify-between items-center h-full"
    >
      <div class="flex items-center gap-3">
        <NuxtLink to="/">
          <NuxtImg
            provider="cloudinary"
            src="beingmomen/xhjsrjkz4pfcsworh2mt"
            alt="Abdelmomen Elshatory"
            class="w-40 h-20 object-contain"
            width="200"
            height="100"
            format="webp"
          />
        </NuxtLink>
      </div>

      <div class="hidden sm:block">
        <UButton
          class="text-xl"
          variant="link"
          color="gray"
          :ui="{
            base: 'text-gray-400',
            font: 'font-bold',
          }"
          aria-label="Navigate to Home page"
          to="/"
        >
          الرئيسية
        </UButton>

        <UButton
          class="text-xl"
          variant="link"
          color="gray"
          aria-label="Navigate to Services section"
          :ui="{
            base: 'text-gray-400',
            font: 'font-bold',
          }"
          @click="scrollToSection('services')"
        >
          خدماتنا
        </UButton>
        <!-- <UButton
          variant="link"
          color="gray"
          aria-label="Experience Page"
          :ui="{
            base: 'text-gray-400',
            font: 'font-bold',
          }"
          @click="scrollToSection('experience')"
        >
          Experience
        </UButton> -->
        <UButton
          class="text-xl"
          variant="link"
          color="gray"
          aria-label="Navigate to Projects section"
          :ui="{
            base: 'text-gray-400',
            font: 'font-bold',
          }"
          @click="scrollToSection('projects')"
        >
          المشاريع
        </UButton>
        <UButton
          class="text-xl"
          variant="link"
          color="gray"
          aria-label="Navigate to Customers section"
          :ui="{
            base: 'text-gray-400',
            font: 'font-bold',
          }"
          @click="scrollToSection('customers')"
        >
          العملاء
        </UButton>
        <UChip position="top-left" inset>
          <UButton
            class="text-xl"
            variant="link"
            color="gray"
            aria-label="Navigate to testimonial page"
            :ui="{
              base: 'text-gray-400',
              font: 'font-bold',
            }"
            to="/testimonial"
          >
            قم بتقييمنا
          </UButton>
        </UChip>
      </div>
    </nav>
  </div>
</template>

<script setup>
const scrollToSection = (sectionRef) => {
  document.getElementById(sectionRef).scrollIntoView({
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
</style>