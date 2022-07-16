<template>
  <div class="app-content content">
    <AdminSkillsTable
      @deleteItem="deleteItem"
      :headers="tableHeader"
      :items="getAllSkillsData"
    />
  </div>
</template>

<script>
export default {
  layout: "admin",
  async asyncData({ $fire, store }) {
    return $fire.firestore.collection("skills").onSnapshot((res) => {
      store.dispatch("dashboard/skills/getAllDataFromApi", res);
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
          key: "ExperienceYears",
          label: "Experience Years",
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
      this.$fire.firestore.collection("skills").doc(id).delete();
      this.$toast.success("Deleted successfully");
      this.getAllDataFromApi();
    },
    getAllDataFromApi() {
      this.$fire.firestore
        .collection("skills")
        .get()
        .then((res) => {
          this.$store.dispatch("dashboard/skills/getAllDataFromApi", res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>