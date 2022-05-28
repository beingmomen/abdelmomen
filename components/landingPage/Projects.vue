<template>
  <b-container class="pt-5">
    <h2 class="fw-bold text-center text-dark mb-4">Projects Portfolio</h2>
    <p class="fs-3 fw-light text-center text-dark">
      Filter projects by category
    </p>
    <v-select
      class="vue-select"
      label="title"
      :reduce="(item) => item.id"
      :clearable="false"
      :options="options"
      v-model="projectType"
    ></v-select>
    <LandingPageProjectCard :projects="projects" />
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
      projects: [
        {
          id: 1,
          title: "Project Title",
          desc: "Nuxt",
          img: "02.jpg",
        },
        {
          id: 2,
          title: "Project Title",
          desc: "Nuxt",
          img: "03.jpg",
        },
        {
          id: 3,
          title: "Project Title",
          desc: "Nuxt",
          img: "04.jpg",
        },
        {
          id: 4,
          title: "Project Title",
          desc: "Nuxt",
          img: "05.jpg",
        },
        {
          id: 5,
          title: "Project Title",
          desc: "Nuxt",
          img: "06.jpg",
        },
        {
          id: 6,
          title: "Project Title",
          desc: "Nuxt",
          img: "07.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 45px;
}
.vue-select {
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