<template>
  <div class="layout-default pb-5">
    <LandingPageNavbar />
    <Nuxt />
    <!-- <div class="elfsight-app-2d4911cd-2d77-4310-9f09-465137d9d6fa"></div> -->
    <div class="elfsight-app-7bb48e03-7147-4340-a7d4-921c7ae5a80f"></div>
  </div>
</template>

<script>
export default {
  middleware: ["mode", "lang"],
  async asyncData({ params, $http }) {
    const post = await $http.$get(`https://full-api.herokuapp.com/projects`);
    return { post };
  },
};
</script>

<style lang="scss">
body {
  color: #97969d;
}
body.dark-layout {
  // color: #b4b7bd;
  .navbar-toggler {
    background-color: #eaecf3;
  }
}

.modal-footer {
  button {
    @media (max-width: 300.98px) {
      font-size: 13px !important;
    }
  }
}
</style>