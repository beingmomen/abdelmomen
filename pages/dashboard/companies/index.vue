<template>
  <div class="app-content content">
    <AdminCompaniesTable
      @deleteItem="deleteItem"
      :headers="tableHeader"
      :items="getAllCompaniesData"
    />
  </div>
</template>

<script>
export default {
  name: "companies",
  layout: "admin",
  async asyncData({ $fire, store }) {
    await $fire.firestore
      .collection("companies")
      .orderBy("createdAt", "asc")
      .onSnapshot((res) => {
        store.dispatch("dashboard/companies/getAllDataFromApi", res);
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
          key: "Type",
          label: "Type",
          sortable: false,
        },
        {
          key: "FromDate",
          label: "From",
          sortable: false,
        },
        {
          key: "ToDate",
          label: "To",
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
  methods: {
    deleteItem(id) {
      this.$fire.firestore.collection("companies").doc(id).delete();
      this.$toast.success("Deleted successfully");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>