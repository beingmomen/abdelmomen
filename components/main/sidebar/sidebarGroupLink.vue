<template>
  <li class="nav-item has-sub" :class="sub ? 'open' : ''">
    <b-link @click.native="toggleSub" class="d-flex align-items-center">
      <font-awesome-icon :icon="`fa-solid ${icon}`" />
      <span class="menu-title text-truncate" v-text="page"></span>
      <b-badge
        pill
        variant="light-warning"
        class="mr-1 ml-auto"
        v-if="childNumber"
        v-text="child.length"
      />
    </b-link>
    <b-collapse v-model="sub" class="menu-content" tag="ul">
      <li
        v-for="(child, i) in child"
        :key="i"
        class="nav-item"
        :class="{ active: $route.path == child.route }"
      >
        <nuxt-link
          :to="localePath(child.route)"
          class="d-flex align-items-center"
        >
          <circle-icon size="1.5x" class="custom-class"></circle-icon>
          <span class="menu-title text-truncate" v-text="child.name"></span>
        </nuxt-link>
      </li>
    </b-collapse>
  </li>
</template>

<script>
import { CircleIcon } from "vue-feather-icons";
export default {
  props: {
    page: String,
    icon: String,
    child: [Array, Object],
    childNumber: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sub: false,
    };
  },
  methods: {
    toggleSub() {
      this.sub = this.sub ? false : true;
    },
  },
  components: {
    CircleIcon,
  },
};
</script>

<style lang="scss" scoped>
</style>
