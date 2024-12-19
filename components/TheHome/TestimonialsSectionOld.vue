<template>
  <section id="testimonials" class="container mx-auto px-8 mt-16">
    <p
      class="font-bold text-xl sm:text-2xl uppercase text-center text-white dark:text-white"
    >
      <!-- رحم الله امرأ عمل عملاً فأحسنه -->
      إبداعنا يُقاس برضا من تعاملوا معنا.
    </p>
    <h2
      class="font-bold text-3xl sm:text-5xl uppercase mt-5 main-title text-center"
    >
      آراء العملاء والشركاء
    </h2>

    <div dir="ltr" class="mt-5">
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="data.data"
        :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden"
        indicators
      >
        <div class="flex flex-col items-center w-full mt-10">
          <blockquote
            dir="rtl"
            class="text-2xl italic leading-relaxed text-center font-bold font-italic text-zinc-100 w-2/3"
          >
            <UIcon name="i-lucide-quote" class="w-5 h-5 text-primary mx-2" />

            <span class="mt-10">
              {{ item.description }}
            </span>
            <UIcon
              name="i-lucide-quote"
              class="w-5 h-5 text-primary mx-2 rotate-180"
            />
          </blockquote>

          <p class="text-3xl text-center font-bold text-zinc-300 mt-10">
            {{ item.name }}
          </p>

          <NuxtImg
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
          />
        </div>
      </UCarousel>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.baseURL;

const { data } = await useFetch(`${baseUrl}/testimonials/confirmed`);

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 10000);
});
</script>

<style lang="scss" scoped>
.description {
  position: relative;
  z-index: 1;
  &::before {
    content: url("/images/RiDoubleQuotesR.svg");
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    z-index: -1;
  }
}
</style>