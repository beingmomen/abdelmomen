<template>
  <b-container class="pt-5">
    <h2 class="fw-bold text-center text-dark mb-4">Projects Portfolio</h2>
    <p v-if="!more" class="fs-3 fw-light text-center text-dark">
      Filter projects by category
    </p>
    <div v-if="!more" class="v-select-parent">
      <v-select
        class="vue-select w-100"
        label="title"
        :reduce="(item) => item.title"
        :clearable="false"
        :options="options"
        v-model="projectType"
      ></v-select>
    </div>
    <LandingPageProjectCard />
    <div v-if="more" class="text-center">
      <b-button @click="getMore" variant="primary py-2 px-3 fs-3 mt-5">
        More Projects
      </b-button>
    </div>
  </b-container>
</template>

<script>
export default {
  props: {
    more: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      projectType: "All Projects",
      options: [
        {
          id: 0,
          title: "All Projects",
        },
        {
          id: 1,
          title: "HTML",
        },
        {
          id: 2,
          title: "Vue",
        },
        {
          id: 3,
          title: "Nuxt",
        },
        {
          id: 4,
          title: "Laravel",
        },
      ],
    };
  },
  methods: {
    getMore() {
      if (this.getAllProjectsData.length == 6) {
        this.$router.push("/projects");
      } else {
        this.$fire.firestore
          .collection("projects")
          .limit(6)
          .get()
          .then((res) => {
            this.$store.dispatch("dashboard/projects/getAllDataFromApi", res);
          });
      }
    },
  },
  watch: {
    projectType(newValue, oldValue) {
      let arr = [];
      this.$fire.firestore
        .collection("projects")
        .get()
        .then((res) => {
          res.forEach((doc) => {
            let data = { ...doc.data(), id: doc.id };
            arr.push(data);
          });
        })
        .then(() => {
          let filter =
            newValue == "All Projects"
              ? arr
              : arr.filter((x) => x.Desc.includes(newValue));
          this.$store.dispatch(
            "dashboard/projects/getAllFilterdDataFromApi",
            filter
          );
        });
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 45px;
}
.v-select-parent {
  width: 15%;
  @media (max-width: 991.98px) {
    width: 25%;
  }
  @media (max-width: 767.98px) {
    width: 35%;
  }
  @media (max-width: 575.98px) {
    width: 70%;
  }
}
</style>