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
  mounted() {
    // this.getProjects();
  },
  methods: {
    getProjects() {
      this.$fire.firestore
        .collection("projects")
        .get()
        .then((res) => {
          console.warn("res :::", res);
          res.forEach((doc) => {
            this.projects.push({ ...doc.data(), id: doc.id });
          });
        })
        .then(() => {
          this.$store.dispatch(
            "dashboard/projects/getAllDataFromApi",
            this.projects
          );
        });
    },
  },
};
</script>
