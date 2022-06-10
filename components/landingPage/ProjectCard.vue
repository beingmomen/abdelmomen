<template>
  <b-row class="mt-5 pro-card">
    <!-- image top -->
    <b-col
      v-for="project in getAllProjectsData"
      :key="project.id"
      md="6"
      xl="4"
    >
      <b-card
        :img-src="project.image"
        img-top
        img-alt="card img"
        :title="project.ProjectTitle"
        class="mb-3 img-container"
      >
        <b-card-text v-text="project.ProjectDesc"> </b-card-text>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pro-card {
  .card {
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    height: 390px;
    img {
      height: 70%;
      border-bottom: 1px solid rgba(204, 204, 204, 0.45);
    }
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