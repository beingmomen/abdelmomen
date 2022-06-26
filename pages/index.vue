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
      .get()
      .then((res) => {
        store.dispatch("dashboard/projects/getAllDataFromApi", res);
      });

    await $fire.firestore
      .collection("heroTitle")
      .get()
      .then((res) => {
        store.dispatch("dashboard/title/getAllDataFromApi", res);
      });

    await $fire.firestore
      .collection("skills")
      .get()
      .then((res) => {
        store.dispatch("dashboard/skills/getAllDataFromApi", res);
      });

    await $fire.firestore
      .collection("companies")
      .get()
      .then((res) => {
        store.dispatch("dashboard/companies/getAllDataFromApi", res);
      });
    return {};
  },
  data() {
    return {};
  },
};
</script>
