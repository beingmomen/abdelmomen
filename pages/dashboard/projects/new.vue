<template>
  <div class="app-content content">
    <b-card no-body class="card-statistics">
      <b-card-body class="statistics-body">
        <b-row class="justify-content-between">
          <FormInput label="Name" storeKey="Name" :module="module" lg="12" />
          <FormInput
            label="Description"
            storeKey="Desc"
            :module="module"
            lg="12"
          />
          <FormInput label="URL" storeKey="URL" :module="module" lg="12" />
          <FormFile label="Image" storeKey="Image" :module="module" lg="12" />
          <div class="col-12 text-end">
            <b-button
              @click="addProject"
              variant="primary"
              class="add text-white"
            >
              Add
            </b-button>
          </div>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
const initObject = () => ({
  name: null,
  desc: null,
});
export default {
  layout: "admin",
  data() {
    return {
      module: "dashboard/projects",
    };
  },
  methods: {
    addProject() {
      this.$store.dispatch("dashboard/projects/addToDB").then(() => {
        this.$router.push("/dashboard/projects");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.add {
  width: 10%;
}
</style>