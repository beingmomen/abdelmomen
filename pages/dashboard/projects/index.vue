<template>
  <div class="app-content content">
    <AdminProjectsTable
      @deleteItem="deleteItem"
      :headers="tableHeader"
      :items="getAllProjectsData"
    />
  </div>
</template>

<script>
export default {
  layout: "admin",
  async asyncData({ $fire, store }) {
    await $fire.firestore.collection("projects").onSnapshot((res) => {
      store.dispatch("dashboard/projects/getAllDataFromApi", res);
    });
    return {};
  },
  data() {
    return {
      tableHeader: [
        {
          key: "Name",
          label: "Name",
          sortable: false,
        },
        {
          key: "Desc",
          label: "Description",
          sortable: false,
        },
        {
          key: "Image",
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
  mounted() {
    this.getAllDataFromApi();
  },
  methods: {
    deleteItem(id) {
      this.$fire.firestore.collection("projects").doc(id).delete();
      this.$toast.success("Deleted successfully");
      this.getAllDataFromApi();
    },
    getAllDataFromApi() {
      this.$fire.firestore
        .collection("projects")
        .get()
        .then((res) => {
          this.$store.dispatch("dashboard/projects/getAllDataFromApi", res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>