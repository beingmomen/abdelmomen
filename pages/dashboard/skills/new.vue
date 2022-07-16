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
          <div class="col-12 text-end">
            <b-button @click="addData" variant="primary" class="add">
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
      module: "dashboard/skills",
    };
  },
  methods: {
    addData() {
      this.$store.dispatch("dashboard/skills/addToDB").then(() => {
        this.$router.push("/dashboard/skills");
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