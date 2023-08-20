<template>
  <div class="container mx-auto px-8 mt-20">
    <p class="font-black text-2xl uppercase text-center">
      What Our Clients says
    </p>
    <h2 class="font-black text-5xl uppercase text-center mt-5 main-title">
      Testimonials.
    </h2>

    <UCard class="mt-20 w-3/4 mx-auto">
      <Swiper
        :modules="[Navigation]"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
      >
        <SwiperSlide v-for="slide in 10" :key="slide">
          <strong>{{ slide }}</strong>
        </SwiperSlide>
      </Swiper>
    </UCard>

    <!-- <div class="card-shadow w-3/4 mx-auto mt-5 h-[20rem]"></div> -->
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.card-shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>