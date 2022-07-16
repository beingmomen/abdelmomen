<template>
  <div class="container">
    <LandingPageProjects :more="false" />
    <hr />
    <LandingPageSocial />
  </div>
</template>

<script>
export default {
  async asyncData({ $fire, store }) {
    return $fire.firestore
      .collection("projects")
      .get()
      .then((res) => {
        store.dispatch("dashboard/projects/getAllDataFromApi", res);
      });
    return {};
  },
};
</script>

<style lang="scss" scoped>
hr {
  margin-block: 80px;
}
</style>