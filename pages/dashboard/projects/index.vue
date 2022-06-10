<template>
  <div class="app-content content">
    <AdminProjectsTable :headers="tableHeader" :items="getAllProjectsData" />
  </div>
</template>

<script>
export default {
  layout: "admin",
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
      tableHeader: [
        {
          key: "ProjectTitle",
          label: "Project Title",
          sortable: false,
        },
        {
          key: "ProjectDesc",
          label: "Project Description",
          sortable: false,
        },
        {
          key: "image",
          label: "Image",
          sortable: false,
        },
        {
          key: "actions",
          label: "actions",
          sortable: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>