<template>
  <div class="app-content content">
    <b-card no-body class="card-statistics">
      <b-card-body class="statistics-body">
        <b-row class="justify-content-between">
          <FormInput label="Name" storeKey="Name" :module="module" lg="12" />
          <FormInput
            label="Experience Years"
            storeKey="ExperienceYears"
            :module="module"
            lg="12"
          />
          <FormFile label="Image" storeKey="Image" :module="module" lg="12" />
          <b-col lg="4" md="6" class="mb-3" style="width: 300px">
            <b-container fluid class="p-1 bg-dark">
              <b-row>
                <b-col class="img-container">
                  <b-img
                    class="img"
                    thumbnail
                    fluid
                    :src="getImageFromSkillsPage"
                  />
                </b-col>
              </b-row>
            </b-container>
          </b-col>
          <div class="col-12 text-end">
            <b-button @click="editData" variant="primary" class="add">
              Edit
            </b-button>
          </div>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  layout: "admin",
  async asyncData({ $fire, store, params }) {
    return $fire.firestore
      .collection("skills")
      .doc(params.edit)
      .get()
      .then((res) => {
        store.dispatch("dashboard/skills/edit/getAllDataFromApi", res);
      });
    return {};
  },

  data() {
    return {
      module: "dashboard/skills/edit",
    };
  },
  methods: {
    editData() {
      this.$store
        .dispatch("dashboard/skills/edit/editInDB", this.$route.params.edit)
        .then(() => {
          this.$router.push("/dashboard/skills");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.img-container {
  height: 200px;
  max-width: 300px !important;
  .img {
    height: 100%;
    width: 100%;
    // object-fit: cover;
  }
}
</style>