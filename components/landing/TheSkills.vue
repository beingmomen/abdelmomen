<template>
  <div
    class="overflow-hidden container mx-auto md:w-[600px] lg:w-[900px] xl:w-[1100px]"
  >
    <div class="slider my-6">
      <div class="flex gap-6 justify-center animation slide-track">
        <div v-for="(skill, i) in firstSkills" :key="i" class="p-5 mb-5 slide">
          <div
            class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
          >
            <nuxt-icon
              class="text-[3rem]"
              :name="`skills/${skill.name}`"
            ></nuxt-icon>
          </div>
        </div>
        <div v-for="(skill, i) in firstSkills" :key="i" class="p-5 mb-5 slide">
          <div
            class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
          >
            <nuxt-icon
              class="text-[3rem]"
              :name="`skills/${skill.name}`"
            ></nuxt-icon>
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
            <nuxt-icon
              class="text-[3rem]"
              :name="`skills/${skill.name}`"
            ></nuxt-icon>
          </div>
        </div>
        <div v-for="(skill, i) in secondSkills" :key="i" class="p-5 mb-5 slide">
          <div
            class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
          >
            <nuxt-icon
              class="text-[3rem]"
              :name="`skills/${skill.name}`"
            ></nuxt-icon>
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
            <nuxt-icon
              class="text-[3rem]"
              :name="`skills/${skill.name}`"
            ></nuxt-icon>
          </div>
        </div>
        <div v-for="(skill, i) in thirdSkills" :key="i" class="p-5 mb-5 slide">
          <div
            class="w-[100px] h-[100px] bg-gray-800/30 flex justify-center items-center cursor-pointer rounded-lg"
          >
            <nuxt-icon
              class="text-[3rem]"
              :name="`skills/${skill.name}`"
            ></nuxt-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const slideCount = ref(7);

const firstSkills = ref([
  { name: "tailwind" },
  { name: "js" },
  { name: "css3" },
  { name: "github" },
  { name: "jquery" },
  { name: "html5" },
  { name: "sass" },
]);
const secondSkills = ref([
  { name: "api" },
  { name: "bootstrap" },
  { name: "digital-ocean" },
  { name: "firebase" },
  { name: "git" },
  { name: "gulp" },
  { name: "nuxt" },
]);
const thirdSkills = ref([
  { name: "gitlab" },
  { name: "vuejs" },
  { name: "pinia" },
  { name: "prisma" },
  { name: "pug" },
  { name: "vuetify" },
  { name: "nuxt" },
]);
</script>

<style lang="scss" scoped>
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

