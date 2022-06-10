<template>
  <div class="app-content content">
    <b-card no-body class="card-statistics">
      <b-card-body class="statistics-body">
        <b-row class="justify-content-between">
          <FormInput
            label="Project Title"
            storeKey="ProjectTitle"
            :module="module"
            lg="12"
            md="12"
          />
          <FormInput
            label="Project Desc"
            storeKey="ProjectDesc"
            :module="module"
            lg="12"
            md="12"
          />
          <FormInputFile
            label="Project Image"
            storeKey="ProjectImage"
            :module="module"
            lg="12"
            md="12"
          />
          <b-col lg="4" md="6" class="mb-3">
            <b-container fluid class="p-1 bg-dark">
              <b-row>
                <b-col>
                  <b-img
                    thumbnail
                    fluid
                    :src="getProjectImageFromProjectPage"
                  />
                </b-col>
              </b-row>
            </b-container>
          </b-col>
          <div class="col-12 text-end">
            <b-button @click="editProject" variant="primary" class="add">
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
  async asyncData({ store, $axios, params, $fire }) {
    $fire.firestore
      .collection("projects")
      .doc(params.edit)
      .get()
      .then((res) => {
        store.dispatch("dashboard/projects/edit/getAllDataFromApi", res);
      })
      .catch((err) => {});
    return {};
  },
  data() {
    return {
      module: "dashboard/projects/edit",
    };
  },
  methods: {
    editProject() {
      this.$store.dispatch(
        "dashboard/projects/edit/editInDB",
        this.$route.params.edit
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>