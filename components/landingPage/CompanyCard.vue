<template>
  <div class="d-flex justify-content-center flex-wrap">
    <div v-for="company in allData" :key="company.id" class="artboard">
      <div class="card">
        <div class="card__side card__side--back pt-1">
          <h3 class="text-center">{{ company.Name }}</h3>
          <p class="text-center fw-bold fs-4">{{ company.Desc }}</p>
          <p class="text-center fw-bold fs-5">{{ company.Type }}</p>
          <div class="d-flex justify-content-evenly">
            <p>{{ company.FromDate }}</p>
            <p>{{ company.ToDate || "Current" }}</p>
          </div>
          <div class="text-center mb-2">
            <b-button variant="secondary" class="btn-icon mx-2">
              <a :href="company.LinkedIn" target="_blank">
                <linkedin-icon size="1.5x" class="custom-class"></linkedin-icon>
              </a>
            </b-button>
            <b-button variant="secondary" class="btn-icon mx-2">
              <a :href="company.URL" target="_blank">
                <globe-icon size="1.5x" class="custom-class"></globe-icon>
              </a>
            </b-button>
          </div>
        </div>

        <div class="card__side card__side--front">
          <img :src="company.Image" :alt="company.Name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GlobeIcon, LinkedinIcon } from "vue-feather-icons";

export default {
  props: ["allData"],
  components: {
    GlobeIcon,
    LinkedinIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "/assets/scss/flip-card";
.dark-layout {
  .btn-icon {
    background-color: #1e3851 !important;
  }
}

.btn-icon {
  border-radius: 8px;
  background-color: #e9e9e9 !important;
  border: none;
  color: #8a909b !important;
  @media (max-width: 400.98px) {
    width: 18%;
    margin-inline: 10% !important;
    margin-bottom: 10px;
  }
}
</style>