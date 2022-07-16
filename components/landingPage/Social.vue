<template>
  <div>
    <h2 class="text-center text-dark fw-bold fs-1">Follow me</h2>
    <div class="d-flex flex-wrap justify-content-center mt-5 social-container">
      <b-button variant="secondary" class="btn-icon mx-3">
        <a href="https://github.com/beingmomen" target="_blank">
          <github-icon size="2x" class="custom-class"></github-icon>
        </a>
      </b-button>
      <b-button variant="secondary" class="btn-icon mx-3">
        <!-- <font-awesome-icon class="fs-4" icon="fa-brands fa-linkedin-in" /> -->
        <a href="https://www.linkedin.com/in/beingmomen" target="_blank">
          <linkedin-icon size="2x" class="custom-class"></linkedin-icon>
        </a>
      </b-button>
      <b-button variant="secondary" class="btn-icon mx-3">
        <a href="https://twitter.com/beingmomen" target="_blank">
          <twitter-icon size="2x" class="custom-class"></twitter-icon>
        </a>
      </b-button>
      <b-button variant="secondary" class="btn-icon mx-3">
        <a href="https://www.facebook.com/beingmomen/" target="_blank">
          <facebook-icon size="2x" class="custom-class"></facebook-icon>
        </a>
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  GithubIcon,
  TwitterIcon,
  FacebookIcon,
  LinkedinIcon,
} from "vue-feather-icons";

export default {
  components: {
    GithubIcon,
    TwitterIcon,
    FacebookIcon,
    LinkedinIcon,
  },
};
</script>

<style lang="scss" scoped>
.dark-layout {
  .btn-icon {
    background-color: #1e3851 !important;
  }
}

.btn-icon {
  border-radius: 8px;
  background-color: #e9e9e9 !important;
  border: none;
  color: #8a909b !important;
  @media (max-width: 400.98px) {
    width: 18%;
    margin-inline: 10% !important;
    margin-bottom: 10px;
  }
}
</style>