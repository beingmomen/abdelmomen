<template>
  <aside
    class="sidebar bg-white shadow-ms ps-3 max-[1024px]:fixed"
    :class="[
      sidebar ? 'lg:w-64' : 'lg:w-20',
      useAR() === 'ltr'
        ? 'max-[1024px]:-translate-x-[16rem]'
        : 'max-[1024px]:translate-x-[16rem]',
    ]"
  >
    <div class="flex items-center cursor-pointer pt-2">
      <nuxt-icon class="text-[4rem] me-2" :name="logo"></nuxt-icon>
      <NuxtLink
        class="cursor-pointer logo-text whitespace-nowrap"
        :to="localePath('/')"
      >
        <h1 class="font-bold text-3xl cursor-pointer">{{ siteTitle }}</h1>
      </NuxtLink>
    </div>
    <UVerticalNavigation
      @click="$emit('closeSidebar')"
      :links="links"
      :ui="{
        wrapper: 'space-y-2 menu-list py-5 pe-2 text-base-content',
        base: 'font-bold  menu-link text-primary-500 light:text-gray-900 py-2 rounded-lg flex gap-5 group block  lg:leading-6 text-[1rem] items-center',
        padding: 'px-4',
        rounded: '',
        font: '',
        ring: '',
        active:
          'text-slate-50 bg-primary-500 dark:text-slate-450  font-semibold active-link',
        inactive:
          'hover:bg-gray-200 dark:text-gray-950 dark:hover:bg-gray-300/[.5]',
        icon: {
          // base: '',
          inactive: 'text-primary-500 ',
          active: 'text-slate-50 dark:text-slate-450',
        },
      }"
    />
  </aside>
</template>

<script setup>
const sidebar = useToggleSidebar();
const localePath = useLocalePath();
const runtimeConfig = useRuntimeConfig();

const logo = computed(() => {
  return runtimeConfig.public.logo;
});

const siteTitle = computed(() => {
  return runtimeConfig.public.siteTitle;
});

const emit = defineEmits(["closeSidebar"]);

const links = computed(() => [
  {
    label: $t("home"),
    icon: "i-heroicons-home",
    to: localePath("/"),
  },
  {
    label: $t("users"),
    icon: "i-clarity-administrator-line",
    to: localePath("/users"),
  },
  // {
  //   label: $t("admins"),
  //   icon: "i-clarity-administrator-line",
  //   to: localePath("/admins"),
  // },
  // {
  //   label: $t("moderators"),
  //   icon: "i-fa6-solid-user-plus",
  //   to: localePath("/moderators"),
  // },
  {
    label: $t("activities"),
    icon: "i-tabler-activity",
    to: localePath("/activities"),
  },
  {
    label: $t("championships"),
    icon: "i-la-award",
    to: localePath("/championships"),
  },
  {
    label: $t("coaches"),
    icon: "i-fa6-solid-person-chalkboard",
    to: localePath("/coaches"),
  },
  {
    label: $t("colors"),
    icon: "i-fa6-solid-palette",
    to: localePath("/colors"),
  },
  {
    label: $t("belts"),
    icon: "i-tabler-ribbon-health",
    to: localePath("/belts"),
  },
  {
    label: $t("players"),
    icon: "i-devicon-plain-karatelabs",
    to: localePath("/players"),
  },
  {
    label: $t("events"),
    icon: "i-ic-outline-edit-calendar",
    to: localePath("/events"),
  },
  {
    label: $t("mediaTypes"),
    icon: "i-streamline-entertainment-play-list-2-player-television-movies-slider-media-tv-players-video",
    to: localePath("/media-types"),
  },
  {
    label: $t("multiMedia"),
    icon: "i-iconoir-add-media-video",
    to: localePath("/multi-media"),
  },
]);
</script>

<style lang="scss" scoped>
.sidebar {
  transition: all 0.2s ease-in-out;
  // transform: translate(-250px);
}
</style>
