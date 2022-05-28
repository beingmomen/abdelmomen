<template>
  <b-row class="mt-5 pro-card">
    <!-- image top -->
    <b-col v-for="(project, i) in projects" :key="i" md="6" xl="4">
      <b-card
        :img-src="require(`@/assets/images/slider/${project.img}`)"
        img-top
        img-alt="card img"
        :title="project.title"
        class="mb-3"
      >
        <b-card-text v-text="project.desc"> </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ["projects"],
};
</script>

<style lang="scss" scoped>
.pro-card {
  .card {
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    }
    .card-title {
      font-size: 1.8rem;
    }
    .card-text {
      font-size: 1.2rem;
    }
    .card-img-top {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
}
</style>