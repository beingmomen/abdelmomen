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
          />
          <FormInput
            label="Project Desc"
            storeKey="ProjectDesc"
            :module="module"
            lg="12"
          />
          <FormInputFile
            label="Project Image"
            storeKey="ProjectImage"
            :module="module"
            lg="12"
          />
          <div class="col-12 text-end">
            <b-button @click="addProject" variant="primary" class="add">
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