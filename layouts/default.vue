<template>
  <div class="layout-default pb-5">
    <LandingPageNavbar />
    <Nuxt />
    <LandingPageHero />
    <LandingPageProjects ref="projects" />
  </div>
</template>

<script>
export default {
  middleware: ["mode", "lang"],
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