<template>
  <b-container class="pt-5">
    <h2 class="fw-bold text-center text-dark mb-4">Projects Portfolio</h2>
    <p class="fs-3 fw-light text-center text-dark">
      Filter projects by category
    </p>
    <div class="v-select-parent">
      <v-select
        class="vue-select w-100"
        label="title"
        :reduce="(item) => item.id"
        :clearable="false"
        :options="options"
        v-model="projectType"
      ></v-select>
    </div>
    <LandingPageProjectCard />
    <div class="text-center">
      <b-button variant="primary py-2 px-3 fs-3 mt-5"> More Projects </b-button>
    </div>
    <hr />
    <LandingPageSocial />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      projectType: 0,
      options: [
        {
          id: 0,
          title: "All Projects",
        },
        {
          id: 1,
          title: "HTML",
        },
        {
          id: 2,
          title: "Vue",
        },
        {
          id: 3,
          title: "Nuxt",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 45px;
}
.v-select-parent {
  width: 15%;
  @media (max-width: 991.98px) {
    width: 25%;
  }
  @media (max-width: 767.98px) {
    width: 35%;
  }
  @media (max-width: 575.98px) {
    width: 70%;
  }
}
hr {
  margin-block: 80px;
}
</style>