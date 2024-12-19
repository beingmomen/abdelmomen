<template>
  <div id="experience" class="container mx-auto px-8 mt-16">
    <p
      class="text-center font-bold text-xl sm:text-2xl uppercase text-white dark:text-white"
    >
      ما قمت به حتى الآن.
    </p>
    <h2
      class="text-center font-bold text-3xl sm:text-5xl uppercase mt-5 main-title"
    >
      رحلتي في العمل.
    </h2>

    <div
      class="timeline relative mt-16 flex justify-around items-end md:items-start flex-col-reverse pt-8"
      v-for="(experience, index) in experiences"
      :key="index"
      :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
    >
      <div
        class="timeline-company w-[76px] h-[76px] bg-gray-900 rounded-full p-1 border-2 flex justify-center items-center"
      >
        <NuxtImg
          class="w-12 h-12 shadow-l"
          provider="cloudinary"
          :src="experience.iconName"
          :alt="experience.iconName"
        />
      </div>
      <div class="timeline-item w-[80%] sm:w-[88%] md:w-[42%] mt-3">
        <UCard
          class="bg-slate-900 dark:bg-slate-900 ring-gray-800 dark:ring-gray-800"
          :ui="{
            base: 'test ',
          }"
        >
          <h2 class="font-bold text-2xl text-white dark:text-white">
            {{ experience.position }}
          </h2>
          <p class="mt-2 main-title font-bold text-lg">
            {{ experience.company }} | {{ experience.employmentType }} |
            {{ experience.workPlace }}
          </p>
          <ul class="list-outside ps-5 mt-5">
            <li
              class="list-image-[url(assets/icons/checkmark.svg)] text-white dark:text-white"
            >
              Responsibilities
            </li>
            <li>
              <ul class="list-outside list-disc ps-5 my-1">
                <li
                  v-for="(
                    responsibility, index2
                  ) in experience.responsibilities"
                  :key="index2"
                  class="text-gray-400"
                >
                  {{ responsibility }}
                </li>
              </ul>
            </li>
            <li>
              <ul class="flex justify-end">
                <li>
                  <UButton
                    icon="i-devicon-linkedin"
                    size="md"
                    color="primary"
                    square
                    variant="link"
                    :to="experience.linkedInUrl"
                    target="_blank"
                    aria-label="Company Linkedin"
                  />
                </li>
                <li>
                  <UButton
                    class="text-white dark:text-white"
                    icon="i-clarity-world-outline-badged"
                    size="md"
                    square
                    variant="link"
                    :to="experience.companySiteUrl"
                    target="_blank"
                    aria-label="Company Site"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </UCard>
      </div>
      <div class="timeline-item w-[80%] sm:w-[88%] md:w-[42%] pt-3">
        <h2
          class="text-white dark:text-white"
          :class="{ 'md:text-end': index % 2 !== 0 }"
        >
          {{ experience.startDate }} - {{ experience.endDate }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup>
const experiences = useExperiences();
</script>

<style lang="scss" >
.timeline {
  &::before {
    left: 50%;
    margin-left: -2px;
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 4px;
    background: #fff;
    @media (max-width: 767.98px) {
      left: 3%;
    }
  }

  .timeline-company {
    position: absolute;
    top: 20px;
    // left: calc(50% - (2.13rem + 2px));

    @media (max-width: 767.98px) {
      left: -1.5rem;
    }
  }

  .timeline-item {
    position: relative;
  }
}
</style>