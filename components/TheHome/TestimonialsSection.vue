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

    <div
      class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background"
    >
      <!-- First Marquee -->
      <TheUiMarquee pauseOnHover class="[--duration:20s]">
        <TheUiReviewCard
          v-for="review in firstRow"
          :key="review.email"
          :img="review.image"
          :name="review.name"
          :email="review.email"
          :body="review.description"
        />
      </TheUiMarquee>

      <!-- Second Marquee (reverse) -->
      <TheUiMarquee reverse pauseOnHover class="[--duration:20s]">
        <TheUiReviewCard
          v-for="review in secondRow"
          :key="review.email"
          :img="review.image"
          :name="review.name"
          :email="review.email"
          :body="review.description"
        />
      </TheUiMarquee>

      <!-- Left Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-slate-900"
      />

      <!-- Right Gradient -->
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-slate-900"
      />
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig();
const baseUrl = config.public.baseURL;

const { data } = await useFetch(`${baseUrl}/testimonials/confirmed`);

// Split reviews into two rows
const firstRow = ref(data.value.data.slice(0, data.value.data.length / 2));
const secondRow = ref(data.value.data.slice(data.value.data.length / 2));
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