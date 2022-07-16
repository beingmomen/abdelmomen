<template>
  <li class="nav-item" :class="{ active: $route.path == route }">
    <nuxt-link :to="localePath(route)" class="d-flex align-items-center">
      <font-awesome-icon :icon="`fa-solid ${icon}`" />
      <span class="menu-title text-truncate" v-text="name"></span>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    route: String,
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
</style>
