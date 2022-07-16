<template>
  <div>
    <AdminFonts />
    <div
      v-show="loading"
      class="
        vertical-layout
        h-100
        vertical-menu-modern
        navbar-floating
        footer-static
      "
      :class="{
        'menu-expanded': makeLayoutCollapsed,
        'menu-collapsed': !makeLayoutCollapsed,
        'dark-icons': makeLayoutCollapsed,
        'menu-hide': window.width <= 1200,
        'menu-open': toggleSidebar,
      }"
    >
      <AdminNavbar :width="window.width" />
      <AdminSidebar :width="window.width" />
      <div class="sidenav-overlay"></div>
      <Nuxt />
      <!-- <AdminFooter /> -->
    </div>
    <div v-show="!loading" class="flower-spinner">
      <div class="dots-container">
        <div class="bigger-dot">
          <div class="smaller-dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["mode", "lang", "authentication"],
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();

    setTimeout(() => {
      this.loading = true;
    }, 2000);
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      loading: false,
    };
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<style lang="scss">
</style>
