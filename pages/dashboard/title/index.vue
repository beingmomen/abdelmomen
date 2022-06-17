<template>
  <div class="app-content content">
    <b-card no-body class="card-statistics">
      <b-card-body class="statistics-body">
        <validation-observer ref="form">
          <b-row>
            <FormInput
              label="Header"
              storeKey="OwnerHeader"
              :module="module"
              lg="6"
            />
            <FormInput
              label="Header Description"
              storeKey="OwnerHeaderDesc"
              :module="module"
              lg="6"
            />
            <div class="col-12 text-end">
              <b-button
                v-if="getAddActionForTiltlePage"
                @click="add"
                variant="outline-primary"
                class="action-button"
              >
                Add
              </b-button>
              <b-button
                v-else
                @click="edit"
                variant="outline-primary"
                class="action-button"
              >
                Edit
              </b-button>
            </div>
          </b-row>
        </validation-observer>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  layout: "admin",
  async asyncData({ $fire, store }) {
    return $fire.firestore
      .collection("heroTitle")
      .get()
      .then((res) => {
        store.dispatch("dashboard/title/getAllDataFromApi", res);
      });
    return {};
  },
  data() {
    return {
      module: "dashboard/title",
    };
  },

  methods: {
    add() {
      this.$refs.form.validate().then((res) => {
        if (res) {
          this.$store.dispatch("dashboard/title/addToDB");
          this.$store.commit("dashboard/title/setAddAction", {
            key: "AddAction",
            value: false,
          });
          this.$toast.success("Added successfully");
        }
      });
    },
    edit() {
      this.$refs.form.validate().then((res) => {
        if (res) {
          this.$store.dispatch("dashboard/title/editInDB");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.action-button {
  width: 15%;
}
</style>