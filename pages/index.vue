<template>
  <div>
    <LandingPageHero />
    <LandingPageProjects ref="projects" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ store, $axios, params, $fire }) {
    $fire.firestore
      .collection("projects")
      .limit(3)
      .get()
      .then((res) => {
        store.dispatch("dashboard/projects/getAllDataFromApi", res);
      })
      .catch((err) => {});
    return {};
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {},
  methods: {},
};
</script>
