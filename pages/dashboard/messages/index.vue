<template>
  <div class="app-content content">
    <AdminMessagesTable
      @deleteItem="deleteItem"
      :headers="tableHeader"
      :items="getAllMessagesData"
    />
  </div>
</template>

<script>
export default {
  layout: "admin",
  async asyncData({ $fire, store }) {
    await $fire.firestore
      .collection("messages")
      .get()
      .then((res) => {
        store.dispatch("dashboard/messages/getAllDataFromApi", res);
      });
    return {};
  },
  data() {
    return {
      tableHeader: [
        {
          key: "FullName",
          label: "Full Name",
          sortable: false,
        },
        {
          key: "Email",
          label: "Email",
          sortable: false,
        },
        {
          key: "Subject",
          label: "Subject",
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
      this.$fire.firestore.collection("messages").doc(id).delete();
      this.$toast.success("Deleted successfully");
      this.getAllDataFromApi();
    },
    getAllDataFromApi() {
      this.$fire.firestore
        .collection("messages")
        .get()
        .then((res) => {
          this.$store.dispatch("dashboard/messages/getAllDataFromApi", res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>