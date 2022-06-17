<template>
  <b-container class="pt-5">
    <h2 class="fw-bold text-center text-dark mb-4">My Skills</h2>

    <b-row>
      <b-col
        v-for="skill in getAllSkillsData"
        :key="skill.id"
        md="6"
        lg="4"
        xl="3"
      >
        <b-card class="skill-card py-3">
          <b-img class="svg-icon" fluid :src="skill.Image" />
          <p class="ms-5 skill-text fs-1 mb-0" v-text="skill.Name"></p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  // mounted() {
  //   this.$fire.firestore
  //     .collection("skills")
  //     .get()
  //     .then((res) => {
  //       this.$store.dispatch("dashboard/skills/getAllDataFromApi", res);
  //     });
  // },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 45px;
}

.svg-icon {
  width: 75px;
}

.skill-card {
  height: 135px;
  .card-body {
    height: 100%;
    display: flex;
    align-items: center;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    cursor: pointer;
  }
}
</style>