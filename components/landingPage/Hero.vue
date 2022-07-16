<template>
  <b-container class="bv-example-row pt-lg-0 pt-5">
    <b-row class="flex-wrap">
      <b-col
        cols="12"
        lg="4"
        class="
          d-flex
          align-items-center align-items-lg-start
          justify-content-center
          flex-column
          text-lg-start
        "
      >
        <h2
          :class="dashboardMode ? 'text-dark' : 'text-light'"
          class="text-uppercase fs-1 fw-bold"
        >
          {{ getOwnerHeaderMixins }}
        </h2>
        <p class="fs-3 lh-sm fw-bold">{{ getOwnerHeaderDescMixins }}</p>

        <b-button class="download fs-5 mt-5" variant="outline-secondary">
          <arrow-down-circle-icon
            size="1.5x"
            class="custom-class"
          ></arrow-down-circle-icon>

          <a
            class="d-pdf mb-3"
            href="/Abdelmomen_Elshatory_CV.pdf"
            download="Abdelmomen_Elshatory_CV.pdf"
            target="_blank"
            >Download CV</a
          >
        </b-button>
      </b-col>
      <b-col lg="8">
        <b-img
          v-if="dashboardMode"
          :src="require('~/assets/images/developer.svg')"
          fluid
          alt="Fluid image"
          loading="lazy"
        />
        <b-img
          v-else
          :src="require('~/assets/images/developer-dark.svg')"
          fluid
          alt="Fluid image"
          loading="lazy"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { ArrowDownCircleIcon } from "vue-feather-icons";

export default {
  components: {
    ArrowDownCircleIcon,
  },
};
</script>

<style lang="scss" scoped>
.download {
  width: 200px;
  height: 55px;
  background-color: #eef2ff !important;
  border: 1px solid #c7d2fe !important;
  border-radius: 8px;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #7367f0 !important;
    color: #fff !important;
    border: none !important;
    transition: all 0.5s ease-in-out;
  }
}
</style>