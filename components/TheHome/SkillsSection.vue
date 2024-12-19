<template>
  <div
    dir="ltr"
    class="overflow-hidden container mx-auto md:w-[600px] lg:w-[900px] xl:w-[1100px] py-10"
  >
    <div class="slider my-6">
      <div class="flex gap-6 justify-center animation slide-track">
        <div v-for="(skill, i) in firstSkills" :key="i" class="p-5 mb-5 slide">
          <div
            class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
          >
            <UIcon :name="skill.icon" class="w-10 h-10" />
          </div>
        </div>
        <div v-for="(skill, i) in firstSkills" :key="i" class="p-5 mb-5 slide">
          <div
            class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
          >
            <UIcon :name="skill.icon" class="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
    <div class="slider my-6">
      <div class="flex gap-6 justify-center animation-reverse slide-track">
        <div v-for="(skill, i) in secondSkills" :key="i" class="p-5 mb-5 slide">
          <div
            class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
          >
            <UIcon :name="skill.icon" class="w-10 h-10" />
          </div>
        </div>
        <div v-for="(skill, i) in secondSkills" :key="i" class="p-5 mb-5 slide">
          <div
            class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
          >
            <UIcon :name="skill.icon" class="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
    <div class="slider my-6">
      <div class="flex gap-6 justify-center animation slide-track">
        <div v-for="(skill, i) in thirdSkills" :key="i" class="p-5 mb-5 slide">
          <div
            class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
          >
            <UIcon :name="skill.icon" class="w-10 h-10" />
          </div>
        </div>
        <div v-for="(skill, i) in thirdSkills" :key="i" class="p-5 mb-5 slide">
          <div
            class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
          >
            <UIcon :name="skill.icon" class="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const slideCount = ref(7);

const firstSkills = ref([
  { icon: "i-skill-icons-tailwindcss-light" },
  { icon: "i-skill-icons-javascript" },
  { icon: "i-skill-icons-css" },
  { icon: "i-skill-icons-github-dark" },
  { icon: "i-skill-icons-jquery" },
  { icon: "i-skill-icons-html" },
  { icon: "i-skill-icons-sass" },
  { icon: "i-skill-icons-figma-light" },
]);
const secondSkills = ref([
  { icon: "i-logos-digital-ocean-icon" },
  { icon: "i-skill-icons-bootstrap" },
  { icon: "i-skill-icons-graphql-light" },
  { icon: "i-logos-firebase" },
  { icon: "i-skill-icons-git" },
  { icon: "i-skill-icons-gulp" },
  { icon: "i-skill-icons-nuxtjs-light" },
  { icon: "i-skill-icons-xd" },
]);
const thirdSkills = ref([
  { icon: "i-skill-icons-gitlab-light" },
  { icon: "i-skill-icons-vuejs-light" },
  { icon: "i-skill-icons-pinia-light" },
  { icon: "i-skill-icons-prisma" },
  { icon: "i-skill-icons-pug-light" },
  { icon: "i-skill-icons-vuetify-light" },
  { icon: "i-skill-icons-githubactions-light" },
  { icon: "i-skill-icons-netlify-light" },
]);
</script>

<style lang="scss">
@keyframes scroll {
  0% {
    transform: translate(0);
  }

  to {
    transform: translate(calc(-200px * v-bind(slideCount)));
  }
}

.slider {
  height: 100px;
  margin-inline: auto;
  position: relative;
  width: 960px;
}

.slider:after {
  right: 0;
  top: 0;
  transform: rotate(180deg);
}

.slider:before {
  left: 0;
  top: 0;
}

.animation {
  animation: scroll 30s linear infinite;
}

.slide-track:hover {
  animation-play-state: paused;
}

.slide-track:hover .slide {
  animation-play-state: running;
}

.animation-reverse {
  animation: scroll 30s linear infinite reverse;
}

.slider .slide-track {
  display: flex;
  width: calc(200px * (v-bind(slideCount) * 2));
}

.slider .slide {
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide:hover {
  animation: gradient-rotate-1413e9b7 5s linear 0s infinite reverse;
  opacity: 1;
  transition: all 0.3s linear;
}
</style>

