<template>
  <div id="projects" class="container mx-auto px-8 mt-16">
    <p
      class="font-bold text-2xl uppercase text-white dark:text-white text-center"
    >
      مشاريعنا، قصص نجاح تُروى بفضل عملائنا.
    </p>
    <h2
      class="font-bold text-4xl sm:text-5xl uppercase mt-5 main-title text-center"
    >
      مشاريع العملاء
    </h2>
    <div class="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-12">
      <UCard
        class="bg-slate-900 dark:bg-slate-900 ring-gray-800 dark:ring-gray-800"
        v-for="(project, i) in projects"
        :key="i"
        :ui="{
          base: 'transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110  duration-300',
          body: { base: 'flex flex-col h-full' },
        }"
      >
        <div class="h-[15rem] rounded-md overflow-hidden shadow-lg">
          <!-- <img
            class="h-full w-full object-cover"
            :src="project.image"
            :alt="project.description"
            loading="lazy"
          /> -->

          <NuxtImg
            class="h-full w-full"
            :src="project.image"
            provider="cloudinary"
            :alt="project.description"
            loading="lazy"
            width="325"
            height="240"
          />
          <!-- width="1200"
            height="600" -->
          <!-- sizes="300px md:700px" -->
        </div>

        <div class="flex flex-col justify-between grow">
          <div>
            <p class="mt-3 text-gray-400">#{{ project.type }}</p>

            <h3
              class="mt-6 font-bold text-3xl hover:main-title text-gray-300 cursor-pointer"
            >
              <NuxtLink :to="project.url" target="_blank">
                {{ project.title }}
              </NuxtLink>
            </h3>
            <!-- <p class="mt-3 text-gray-400">
              {{ project.description }}
            </p> -->
          </div>

          <div class="mt-4 gap-3 flex flex-wrap">
            <UBadge
              v-for="badge in project.badges"
              :key="badge"
              color="sky"
              :label="badge"
              :ui="{ font: 'font-bold' }"
              class="text-black dark:text-black"
            />
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
const projects = useProjects();
</script>

<style lang="scss" scoped>
</style>