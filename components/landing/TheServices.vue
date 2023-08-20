<template>
  <div id="services" class="container mx-auto px-8 mt-16">
    <p class="font-black text-2xl uppercase">VARIOUS SERVICES</p>
    <h2 class="font-black text-4xl sm:text-5xl uppercase mt-5 main-title">
      Our services.
    </h2>
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center mt-8"
    >
      <UCard
        class="cursor-pointer hover:-mt-3 hover:mb-3 transition-all duration-300 ease-in-out"
      >
        <div class="h-[12rem] rounded overflow-hidden">
          <img
            class="h-full object-cover w-full"
            src="@/assets/imgs/services/websites.svg"
            alt="websites"
          />
        </div>

        <h3 class="mt-4 font-black text-2xl main-title">Web Development</h3>
        <p class="mt-3 text-gray-300">
          Creating static or dynamic websites for various purposes, such as
          personal blogs, business websites, e-commerce sites, portfolio
          websites, and more.
        </p>
      </UCard>
      <UCard
        class="cursor-pointer hover:-mt-3 hover:mb-3 transition-all duration-300 ease-in-out"
      >
        <div class="h-[12rem] rounded overflow-hidden">
          <img
            class="h-full object-cover w-full"
            src="@/assets/imgs/services/node.svg"
            alt="websites"
          />
        </div>

        <h3 class="mt-4 font-black text-2xl main-title">
          MEVN Stack Developer
        </h3>
        <p class="mt-3 text-gray-300">
          Use MEVN (MongoDB, Express.js, Vue.js, Node.js) for dynamic web apps
          with real-time features. Build APIs connecting frontend and backend,
          ensuring modern and efficient user experiences.
        </p>
      </UCard>
      <UCard
        class="cursor-pointer hover:-mt-3 hover:mb-3 transition-all duration-300 ease-in-out"
      >
        <div class="h-[12rem] rounded overflow-hidden">
          <img
            class="h-full object-cover w-full"
            src="@/assets/imgs/services/nuxt-vue.svg"
            alt="websites"
          />
        </div>

        <h3 class="mt-4 font-black text-2xl main-title">
          Vue.JS, Nuxt.JS Developer
        </h3>
        <p class="mt-3 text-gray-300">
          Vue.js enables interactive web interfaces, while Nuxt.js streamlines
          server-side rendering for faster, SEO-friendly applications.
        </p>
      </UCard>
      <UCard
        class="cursor-pointer hover:-mt-3 hover:mb-3 transition-all duration-300 ease-in-out"
      >
        <div class="h-[12rem] rounded overflow-hidden">
          <img
            class="h-full object-cover w-full"
            src="@/assets/imgs/services/technical.svg"
            alt="websites"
          />
        </div>

        <h3 class="mt-4 font-black text-2xl main-title">Technical Support</h3>
        <p class="mt-3 text-gray-300">
          Support bug fixes, and performance optimization. They ensure
          cross-browser compatibility, enhance UI, and fix JavaScript issues.
          They also troubleshoot integrations and boost accessibility.
        </p></UCard
      >
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>