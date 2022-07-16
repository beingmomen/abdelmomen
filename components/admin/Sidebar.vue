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
          <nuxt-link
            :to="localePath('/dashboard')"
            class="navbar-brand router-link-active"
          >
            <span class="brand-logo">
              <img src="/img/code.png" alt="logo" />
            </span>
            <h2 class="brand-text">Abdelmo’men</h2>
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
          route="/dashboard/"
          icon="fa-house"
        />
        <MainSidebarBreakLink />
        <MainSidebarLink
          name="Title"
          route="/dashboard/title"
          icon="fa-heading"
        />
        <MainSidebarLink
          name="Skills"
          route="/dashboard/skills"
          icon="fa-bolt"
        />
        <MainSidebarLink
          name="Projects"
          route="/dashboard/projects"
          icon="fa-diagram-project"
        />
        <MainSidebarLink
          name="Compaines"
          route="/dashboard/companies"
          icon="fa-building"
        />
        <MainSidebarLink
          name="Messages"
          route="/dashboard/messages"
          icon="fa-message"
        />
        <MainSidebarLink
          name="Hire Me"
          route="/dashboard/hire-me"
          icon="fa-hand-dots"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { XIcon } from "vue-feather-icons";
export default {
  props: ["width"],
  data() {
    return {
      hover: false,
      isOpen: false,
    };
  },
  computed: {
    returnDashboardChild() {
      let arr = [
        { name: this.$t("sidebar.eCommerce"), route: "/dashboard/eCommerce" },
        { name: this.$t("sidebar.analytics"), route: "/dashboard/analytics" },
      ];
      return arr;
    },
  },
  components: {
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
};
</script>

<style lang="scss">
</style>
