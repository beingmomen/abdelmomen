<template>
  <div id="projects" class="container mx-auto px-8 mt-16">
    <p class="font-black text-2xl uppercase">My Work</p>
    <h2 class="font-black text-4xl sm:text-5xl uppercase mt-5 main-title">
      Projects.
    </h2>
    <div class="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-12">
      <UCard
        :ui="{
          base: 'transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300',
          body: { base: 'flex flex-col h-full' },
        }"
      >
        <div class="h-[15rem] rounded-md overflow-hidden shadow-lg">
          <img
            class="h-full w-full object-cover"
            src="@/assets/imgs/projects/erp.svg"
            alt="image"
          />
        </div>

        <div class="flex flex-col justify-between grow">
          <div>
            <p class="mt-3 text-gray-500">#System</p>

            <h3
              class="mt-6 font-black text-3xl hover:main-title text-gray-300 cursor-pointer"
            >
              <NuxtLink to="https://tiger-academy.netlify.app/" target="_blank">
                Tiger Academy
              </NuxtLink>
            </h3>
            <p class="mt-3 text-gray-400">
              The web system for managing a martial arts academy, through which
              players and tournaments can be managed, and many other features
            </p>
          </div>

          <div class="mt-4 gap-3 flex flex-wrap">
            <UBadge color="sky" label="Nuxt 3" :ui="{ font: 'font-black' }" />
            <UBadge color="sky" label="MongoDB" :ui="{ font: 'font-black' }" />
            <UBadge color="sky" label="Prisma" :ui="{ font: 'font-black' }" />
            <UBadge
              color="sky"
              label="Tailwind CSS"
              :ui="{ font: 'font-black' }"
            />
            <UBadge color="sky" label="NuxtUI" :ui="{ font: 'font-black' }" />
          </div>
        </div>
      </UCard>
      <UCard
        :ui="{
          base: 'transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300',
          body: { base: 'flex flex-col h-full' },
        }"
      >
        <div class="h-[15rem] rounded-md overflow-hidden shadow-lg">
          <img
            class="h-full w-full object-cover"
            src="@/assets/imgs/projects/maxy.svg"
            alt="image"
          />
        </div>

        <div class="flex flex-col justify-between grow">
          <div>
            <p class="mt-3 text-gray-500">#Website</p>

            <h3
              class="mt-6 font-black text-3xl hover:main-title text-gray-300 cursor-pointer"
            >
              <NuxtLink to="https://streammaxy.com/" target="_blank">
                STREAMMAXY
              </NuxtLink>
            </h3>
            <p class="mt-3 text-gray-400">
              Streammaxy offers IPTV solutions for Android, iOS, Windows, and
              Smart TV. It's a leading IPTV provider, offering app development,
              reseller panel, and custom solutions. With 500+ clients, they
              boast 24/7 support and various features.
            </p>
          </div>
          <div class="mt-4 gap-3 flex flex-wrap">
            <UBadge
              color="sky"
              label="Javascript"
              :ui="{ font: 'font-black' }"
            />
            <UBadge color="sky" label="jQuery" :ui="{ font: 'font-black' }" />
            <UBadge
              color="sky"
              label="Bootstrap"
              :ui="{ font: 'font-black' }"
            />
            <UBadge color="sky" label="HTML" :ui="{ font: 'font-black' }" />
            <UBadge color="sky" label="CSS" :ui="{ font: 'font-black' }" />
          </div>
        </div>
      </UCard>
      <UCard
        :ui="{
          base: 'transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300',
          // base: 'transition ease-in-out delay-50 duration-300 hover:-mt-4 hover:mb-4',
          body: { base: 'flex flex-col h-full' },
        }"
      >
        <div class="h-[15rem] rounded-md overflow-hidden shadow-lg flex-none">
          <img
            class="h-full w-full object-cover"
            src="@/assets/imgs/projects/droos.svg"
            alt="image"
          />
        </div>

        <div class="flex flex-col justify-between grow">
          <div>
            <p class="mt-3 text-gray-500">#Website</p>

            <h3
              class="mt-6 font-black text-3xl hover:main-title text-gray-300 cursor-pointer"
            >
              <NuxtLink to="http://droos24.com/" target="_blank">
                Droos24
              </NuxtLink>
            </h3>
            <p class="mt-3 text-gray-400">
              droos 24 is a platform that offers lessons and educational courses
              for the different primary, middle and high school levels
            </p>
          </div>
          <div class="mt-4 gap-3 flex flex-wrap">
            <UBadge color="sky" label="Nuxt 2" :ui="{ font: 'font-black' }" />
            <UBadge
              color="sky"
              label="Tailwind CSS"
              :ui="{ font: 'font-black' }"
            />
            <UBadge color="sky" label="AOS" :ui="{ font: 'font-black' }" />
            <UBadge color="sky" label="HTML" :ui="{ font: 'font-black' }" />
            <UBadge color="sky" label="CSS" :ui="{ font: 'font-black' }" />
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>