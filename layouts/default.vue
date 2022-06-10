<template>
  <div class="layout-default pb-5">
    <LandingPageNavbar />
    <Nuxt />
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