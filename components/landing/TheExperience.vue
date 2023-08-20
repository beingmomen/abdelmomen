<template>
  <div id="experience" class="container mx-auto px-8 mt-16">
    <p class="text-center font-black text-xl sm:text-2xl uppercase">
      What I have done so far
    </p>
    <h2
      class="text-center font-black text-3xl sm:text-5xl uppercase mt-5 main-title"
    >
      Work Experience.
    </h2>

    <div
      class="timeline relative mt-16 flex justify-around items-end md:items-start md:flex-row flex-col-reverse pt-8"
    >
      <div class="timeline-company bg-gray-900 rounded-full p-1 border-2">
        <nuxt-icon class="text-[4rem] shadow-lg" name="nanosoft"></nuxt-icon>
      </div>
      <div class="timeline-item w-[80%] sm:w-[88%] md:w-[42%] mt-3">
        <UCard
          :ui="{
            base: 'test',
          }"
        >
          <h2 class="font-black text-2xl">Vue.JS & Nuxt.JS Developer</h2>
          <p class="mt-2 main-title font-black text-lg">
            NanoSoft | Full Time | Remotely
          </p>
          <ul
            class="list-outside list-image-[url(assets/icons/checkmark.svg)] ps-5 mt-5"
          >
            <li>Responsibilities</li>
            <ul class="list-outside list-disc ps-5 my-1">
              <li class="text-gray-400">
                Resolved issues in legacy Vue.js systems, improving
                functionality and performance.
              </li>
              <li class="text-gray-400">
                Developed a new accounting system using the Nuxt.js framework,
                from conception to implementation.
              </li>
              <li class="text-gray-400">
                Designed and integrated components to meet specific business
                requirements.
              </li>
              <li class="text-gray-400">
                Designed and developed multiple projects focused on chart
                displays, enhancing data visualization.
              </li>
              <li class="text-gray-400">
                Collaborated with team members to ensure cohesive integration of
                new features.
              </li>
              <li class="text-gray-400">
                Played a pivotal role in the ongoing evolution of the accounting
                system, adapting it to changing business needs.
              </li>
              <li class="text-gray-400">
                Analyzed complex system requirements, identified potential
                challenges, and proposed effective solutions.
              </li>
            </ul>
            <div class="flex justify-end">
              <UButton
                icon="i-devicon-linkedin"
                size="md"
                color="primary"
                square
                variant="link"
                to="https://www.linkedin.com/company/nanosoft-ly/"
                target="_blank"
              />
              <UButton
                icon="i-clarity-world-outline-badged"
                size="md"
                color="primary"
                square
                variant="link"
                to="https://nanosoft.ly/"
                target="_blank"
              />
            </div>
          </ul>
        </UCard>
      </div>
      <div class="timeline-item w-[80%] sm:w-[88%] md:w-[42%] pt-3">
        <h2>March 2022 - Current</h2>
        <!-- <UCard> Body </UCard> -->
      </div>
    </div>
    <div
      class="timeline relative mt-16 flex justify-around items-end md:items-start md:flex-row-reverse flex-col-reverse pt-8"
    >
      <div class="timeline-company bg-gray-900 rounded-full p-1 border-2">
        <nuxt-icon class="text-[4rem] shadow-lg" name="hmaserv"></nuxt-icon>
      </div>
      <div class="w-[80%] sm:w-[88%] md:w-[42%] mt-3">
        <UCard
          :ui="{
            base: 'test',
          }"
        >
          <h2 class="font-black text-2xl">Frontend Developer Developer</h2>
          <p class="mt-2 main-title font-black text-lg">HamaServ | Full Time</p>
          <ul
            class="list-outside list-image-[url(assets/icons/checkmark.svg)] ps-5 mt-5"
          >
            <li>Responsibilities</li>
            <ul class="list-outside list-disc ps-5 my-1">
              <li class="text-gray-400">
                Designed and developed visually appealing and responsive
                websites that function seamlessly across various devices and
                screen sizes.
              </li>
              <li class="text-gray-400">
                Collaborated closely with UI/UX designers to ensure a consistent
                and user-friendly design implementation.
              </li>

              <li class="text-gray-400">
                Utilized Vue.js to enhance user experience and create dynamic
                components within the Blade system.
              </li>
              <li class="text-gray-400">
                Worked in conjunction with PHP Laravel developers to integrate
                frontend components into the Blade templating system.
              </li>
              <li class="text-gray-400">
                Ensured smooth communication and alignment between frontend and
                backend development teams.
              </li>
            </ul>
          </ul>
          <div class="flex justify-end">
            <UButton
              icon="i-devicon-linkedin"
              size="md"
              color="primary"
              square
              variant="link"
              to="https://www.linkedin.com/company/hmaserv/"
              target="_blank"
            />
            <UButton
              icon="i-clarity-world-outline-badged"
              size="md"
              color="primary"
              square
              variant="link"
              to="https://www.hmaserv.com/"
              target="_blank"
            />
          </div>
        </UCard>
      </div>
      <div class="w-[80%] sm:w-[88%] md:w-[42%] mt-3">
        <h2 class="md:text-end">March 2021 - March 2022</h2>
        <!-- <UCard> Body </UCard> -->
      </div>
    </div>
    <div
      class="timeline relative mt-16 flex justify-around items-end md:items-start md:flex-row flex-col-reverse pt-8"
    >
      <div class="timeline-company bg-gray-900 rounded-full p-1 border-2">
        <nuxt-icon class="text-[4rem] shadow-lg" name="hmaserv"></nuxt-icon>
      </div>
      <div class="w-[80%] sm:w-[88%] md:w-[42%] mt-3">
        <UCard
          :ui="{
            base: 'test',
          }"
        >
          <h2 class="font-black text-2xl">Web Developer</h2>
          <p class="mt-2 main-title font-black text-lg">
            HamaServ |
            <span class="decoration-wavy decoration-red-500">intern</span>
          </p>
          <ul
            class="list-outside list-image-[url(assets/icons/checkmark.svg)] ps-5 mt-5"
          >
            <li>Responsibilities</li>
            <ul class="list-outside list-disc ps-5 my-1">
              <li class="text-gray-400">
                Collaborated effectively with UI/UX designers to translate
                design concepts into functional layouts.
              </li>
              <li class="text-gray-400">
                Actively engaged in developing responsive websites, gaining
                practical experience in implementing fluid layouts and adaptive
                designs.
              </li>
              <li class="text-gray-400">
                Developed a deeper understanding of JavaScript, refining skills
                in creating interactive and dynamic website components.
              </li>
              <li class="text-gray-400">
                Acquired knowledge of interacting with backend systems,
                appreciating the interplay between frontend and backend
                technologies.
              </li>
              <li class="text-gray-400">
                Gained experience in troubleshooting frontend challenges and
                adapting to evolving project requirements.
              </li>
            </ul>
            <div class="flex justify-end">
              <UButton
                icon="i-devicon-linkedin"
                size="md"
                color="primary"
                square
                variant="link"
                to="https://www.linkedin.com/company/hmaserv/"
                target="_blank"
              />
              <UButton
                icon="i-clarity-world-outline-badged"
                size="md"
                color="primary"
                square
                variant="link"
                to="https://www.hmaserv.com/"
                target="_blank"
              />
            </div>
          </ul>
        </UCard>
      </div>
      <div class="w-[80%] sm:w-[88%] md:w-[42%] mt-3">
        <h2>March 2022 - Current</h2>
        <!-- <UCard> Body </UCard> -->
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
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
    left: calc(50% - (2.13rem + 2px));
    @media (max-width: 767.98px) {
      left: -1.5rem;
    }
  }

  .timeline-item {
    position: relative;
  }
}
</style>