<template>
  <div class="container">
    <b-navbar
      class="px-0"
      :class="dashboardMode ? 'dark-mode-text' : 'light-mode-text'"
      style="background: unset"
      toggleable="md"
    >
      <b-nav class="py-md-3 py-1" align="left">
        <li v-if="!dashboardMode" class="nav-item">
          <nuxt-link to="/" class="nav-link nav-logo">
            <img src="~/assets/images/logo-light.svg" alt="logo" />
          </nuxt-link>
        </li>
        <li v-else class="nav-item">
          <nuxt-link to="/" class="nav-link nav-logo">
            <img src="~/assets/images/logo-dark.svg" alt="logo" />
          </nuxt-link>
        </li>
      </b-nav>

      <b-navbar-nav class="me-4 mode-btn-center">
        <li v-if="!dashboardMode" class="nav-item mode-btn">
          <b-button
            variant="outline-primary"
            class="btn-icon"
            @click="toggleMode('light')"
          >
            <sun-icon size="1.5x" class="custom-class"></sun-icon>
          </b-button>
        </li>
        <li v-else class="nav-item mode-btn">
          <b-button
            variant="outline-primary"
            class="btn-icon"
            @click="toggleMode('dark')"
          >
            <moon-icon size="1.5x" class="custom-class"></moon-icon>
          </b-button>
        </li>
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        class="justify-content-between py-md-3 py-1"
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav class="w-75 justify-content-center">
          <li class="nav-item ps-4 ps-md-0" @click="goTo('projects')">
            <nuxt-link
              to="projects"
              :class="dashboardMode ? 'dark-mode-text' : 'light-mode-text'"
              class="nav-link fs-4"
            >
              Projects
            </nuxt-link>
          </li>
          <li class="nav-item ps-4 ps-md-0">
            <nuxt-link
              to=""
              :class="dashboardMode ? 'dark-mode-text' : 'light-mode-text'"
              class="nav-link fs-4"
            >
              About Me
            </nuxt-link>
          </li>
          <li class="nav-item ps-4 ps-md-0">
            <nuxt-link
              to=""
              :class="dashboardMode ? 'dark-mode-text' : 'light-mode-text'"
              class="nav-link fs-4"
            >
              Contacts
            </nuxt-link>
          </li>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav
          style="min-width: 32%"
          class="align-items-lg-center justify-content-start"
        >
          <li class="nav-item ps-3 ps-md-0 mb-3 mb-md-0 mx-2">
            <b-button
              class="fw-bold fs-5 text-white"
              variant="primary"
              v-b-modal.modal-select2
            >
              Hire Me
            </b-button>
          </li>
          <li v-if="!dashboardMode" class="nav-item mb-3 mb-md-0 mode-btn mx-2">
            <b-button
              variant="outline-primary"
              class="btn-icon"
              @click="toggleMode('light')"
            >
              <sun-icon size="1.5x" class="custom-class"></sun-icon>
            </b-button>
          </li>
          <li v-else class="nav-item mode-btn mb-3 mb-md-0 mx-2">
            <b-button
              variant="outline-primary"
              class="btn-icon"
              @click="toggleMode('dark')"
            >
              <moon-icon size="1.5x" class="custom-class"></moon-icon>
            </b-button>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal
      id="modal-select2"
      title="What project are you looking for?"
      ok-title="Send Request"
      cancel-variant="outline-secondary"
    >
      <b-form>
        <b-form-group>
          <b-form-input placeholder="Name" />
        </b-form-group>
        <b-form-group>
          <b-form-input type="email" placeholder="Email" />
        </b-form-group>
        <b-form-group>
          <v-select
            v-model="selected"
            :clearable="false"
            :dir="dashDirection"
            :options="option"
          />
        </b-form-group>
        <b-form-group>
          <b-form-textarea placeholder="Project Description" rows="6" />
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { SunIcon, MoonIcon } from "vue-feather-icons";
export default {
  data() {
    return {
      option: [
        "Frontend Developer",
        "Full-Stack Developer ",
        "Backend Developer",
      ],
      selected: "Frontend Developer",
    };
  },
  methods: {
    toggleMode(mode) {
      this.$store.dispatch("layoutMode", mode);
      this.$cookies.set("dashboard-mode", mode);
      if (mode == "dark") {
        document.body.classList.remove("light-layout");
        document.body.classList.add("dark-layout");
      } else {
        document.body.classList.remove("dark-layout");
        document.body.classList.add("light-layout");
      }
    },
    goTo(refName) {
      // let element = this.$refs[refName];
      // let top = element.offsetTop;
      // window.scrollTo(0, top);
    },
  },
  components: {
    SunIcon,
    MoonIcon,
  },
};
</script>

<style lang="scss" scoped>
.nav-logo {
  width: 155px;
  @media (max-width: 300.98px) {
    width: 115px;
  }
  img {
    width: 100%;
  }
}

.mode-btn-center {
  .mode-btn {
    display: none;
    @media (max-width: 767.98px) {
      display: list-item !important;
    }
  }
}

.dark-layout {
  .mode-btn {
    .btn-icon {
      background-color: #283046;
      color: #c0c0c0;
      border: none !important;
      border-radius: 7px;
      &:hover {
        color: #fff;
        background-color: #283046;
      }
    }
    @media (max-width: 767.98px) {
      display: none;
    }
  }
}
.light-layout {
  .mode-btn {
    .btn-icon {
      background-color: #ebebeb;
      color: #000;
      border: none !important;
      border-radius: 7px;
      &:hover {
        color: #5f5f5f;
        background-color: #ebebeb;
      }
    }
    @media (max-width: 767.98px) {
      display: none;
    }
  }
}
</style>