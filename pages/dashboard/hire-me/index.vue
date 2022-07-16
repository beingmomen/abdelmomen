<template>
  <div class="app-content content">
    <AdminHireMeTable
      @deleteItem="deleteItem"
      :headers="tableHeader"
      :items="getAllHireRequestesData"
    />
  </div>
</template>

<script>
export default {
  name: "hireMe",
  layout: "admin",
  async asyncData({ $fire, store }) {
    await $fire.firestore
      .collection("hireMe")
      .get()
      .then((res) => {
        store.dispatch("dashboard/hireMe/getAllDataFromApi", res);
      });
    return {};
  },
  data() {
    return {
      tableHeader: [
        {
          key: "Name",
          label: "Full Name",
          sortable: false,
        },
        {
          key: "Email",
          label: "Email",
          sortable: false,
        },
        {
          key: "ProjectType",
          label: "Project Type",
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
    // this.getAllDataFromApi();
  },
  methods: {
    deleteItem(id) {
      this.$fire.firestore.collection("hireMe").doc(id).delete();
      this.$toast.success("Deleted successfully");
      this.getAllDataFromApi();
    },
    getAllDataFromApi() {
      this.$fire.firestore
        .collection("hireMe")
        .get()
        .then((res) => {
          this.$store.dispatch("dashboard/hireMe/getAllDataFromApi", res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>