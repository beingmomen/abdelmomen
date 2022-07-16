<template>
  <b-container class="mt-5">
    <h2 class="fw-bold text-center text-dark mb-4">
      Some Of The Companies I have Worked With
    </h2>
    <LandingPageCompanyCard :allData="getAllCompaniesData" />
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 45px;
}
</style>