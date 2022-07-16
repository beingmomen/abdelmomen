<template>
  <div>
    <LandingPageHero />
    <LandingPageAbout />
    <LandingPageSkills />
    <LandingPageProjects :more="true" />
    <LandingPageCompanies />
    <hr />
    <LandingPageSocial />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $fire, store }) {
    await $fire.firestore
      .collection("projects")
      .limit(3)
      .onSnapshot((res) => {
        store.dispatch("dashboard/projects/getAllDataFromApi", res);
      });

    await $fire.firestore.collection("heroTitle").onSnapshot((res) => {
      store.dispatch("dashboard/title/getAllDataFromApi", res);
    });

    await $fire.firestore.collection("skills").onSnapshot((res) => {
      store.dispatch("dashboard/skills/getAllDataFromApi", res);
    });

    await $fire.firestore
      .collection("companies")
      .orderBy("createdAt", "asc")
      .onSnapshot((res) => {
        store.dispatch("dashboard/companies/getAllDataFromApi", res);
      });
    return {};
  },
  data() {
    return {};
  },
};
</script>
