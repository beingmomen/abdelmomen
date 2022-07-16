<template>
  <div class="app-content content">
    <b-card no-body class="card-statistics">
      <b-card-body class="statistics-body">
        <b-row class="justify-content-between">
          <FormInput label="Name" storeKey="Name" :module="module" lg="12" />
          <FormDatePicker
            title="From"
            storeKey="FromDate"
            :module="module"
            lg="12"
          />
          <FormDatePicker
            title="To"
            storeKey="ToDate"
            :module="module"
            lg="12"
          />
          <FormInput
            label="Description"
            storeKey="Desc"
            :module="module"
            lg="12"
          />
          <FormInput label="Type" storeKey="Type" :module="module" lg="12" />
          <FormInput label="URL" storeKey="URL" :module="module" lg="12" />
          <FormInput
            label="LinkedIn"
            storeKey="LinkedIn"
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
                    :src="getImageFromCompanyPage"
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
      .collection("companies")
      .doc(params.edit)
      .get()
      .then((res) => {
        store.dispatch("dashboard/companies/edit/getAllDataFromApi", res);
      });
    return {};
  },

  data() {
    return {
      module: "dashboard/companies/edit",
    };
  },
  methods: {
    editData() {
      this.$store
        .dispatch("dashboard/companies/edit/editInDB", this.$route.params.edit)
        .then(() => {
          this.$router.push("/dashboard/companies");
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