<template>
  <div>
    <LandingPageHero />
    <LandingPageSkills />
    <LandingPageProjects :more="true" />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $fire, store }) {
    return $fire.firestore
      .collection("projects")
      .limit(3)
      .get()
      .then((res) => {
        store.dispatch("dashboard/projects/getAllDataFromApi", res);
      });
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
