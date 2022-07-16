<template>
  <div class="app-content content">
    <CardsLargeCard />
  </div>
</template>

<script>
export default {
  layout: "admin",
  name: "index-dashboard",
  async asyncData({ $fire, store }) {
    await $fire.firestore
      .collection("skills")
      .get()
      .then((res) => {
        store.dispatch("dashboard/skills/getAllDataFromApi", res);
      });

    await $fire.firestore
      .collection("projects")
      .get()
      .then((res) => {
        store.dispatch("dashboard/projects/getAllDataFromApi", res);
      });

    await $fire.firestore
      .collection("companies")
      .get()
      .then((res) => {
        store.dispatch("dashboard/companies/getAllDataFromApi", res);
      });

    await $fire.firestore
      .collection("messages")
      .get()
      .then((res) => {
        store.dispatch("dashboard/messages/getAllDataFromApi", res);
      });

    await $fire.firestore
      .collection("hireMe")
      .get()
      .then((res) => {
        store.dispatch("dashboard/hireMe/getAllDataFromApi", res);
      });
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>