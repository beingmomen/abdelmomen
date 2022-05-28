<template>
  <div
    class="main-menu menu-fixed menu-accordion menu-shadow menu-light"
    :class="{
      expanded: makeLayoutCollapsed || true,
      expanded: hover,
    }"
    @mouseenter="hoverSidebar"
    @mouseleave="hoverSidebar"
  >
    <div class="navbar-header expanded">
      <ul class="nav navbar-nav flex-row">
        <li class="nav-item mr-auto">
          <nuxt-link to="/dashboard" class="navbar-brand router-link-active">
            <span class="brand-logo">
              <img src="/img/logo.svg" alt="logo" />
            </span>
            <h2 class="brand-text">Vuexy</h2>
          </nuxt-link>
        </li>
        <li class="nav-item nav-toggle">
          <nuxt-link
            @click.native="hideSidebar"
            to=""
            class="nav-link modern-nav-toggle"
          >
            <x-icon
              v-if="width <= 1200"
              size="1.5x"
              class="custom-class"
            ></x-icon>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div class="ps-container main-menu-content scroll-area ps ps--active-y">
      <ul class="navigation navigation-main">
        <MainSidebarLink
          :name="$t(`sidebar.dashboard`)"
          route="dashboard"
          icon="fa-house"
        />
        <MainSidebarBreakLink />
        <MainSidebarLink
          :name="$t(`sidebar.email`)"
          route="dashboard/email"
          icon="fa-envelope"
        />
        <MainSidebarGroupLink
          :page="$t(`sidebar.eCommerce`)"
          :childNumber="true"
          :child="dashboardChild"
          icon="fa-cart-shopping"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import {
  DiscIcon,
  CircleIcon,
  MoreHorizontalIcon,
  HomeIcon,
  MailIcon,
  XIcon,
} from "vue-feather-icons";

export default {
  props: ["width"],
  data() {
    return {
      hover: false,
      dashboardChild: [
        { name: this.$t("sidebar.eCommerce"), route: "dashboard/eCommerce" },
        { name: this.$t("sidebar.analytics"), route: "dashboard/analytics" },
      ],
      invoiceChild: [
        { name: "List", route: "list" },
        { name: "Preview", route: "preview" },
      ],
      isOpen: false,
    };
  },
  components: {
    DiscIcon,
    CircleIcon,
    MoreHorizontalIcon,
    HomeIcon,
    MailIcon,
    XIcon,
  },
  methods: {
    hideSidebar() {
      this.$store.dispatch("hideSidebar");
    },
    hoverSidebar() {
      if (this.width > 1200) {
        this.hover = this.hover ? false : true;
      }
    },
  },

  watch: {},
};
</script>

<style lang="scss">
@import "/@core/scss/base/core/menu/menu-types/vertical-menu.scss";

.menu-hide .main-menu {
  width: 0 !important;
}
.menu-hide.menu-open .main-menu {
  width: 260px !important;
}
</style>
