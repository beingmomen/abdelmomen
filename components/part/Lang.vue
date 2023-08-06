<template>
  <UDropdown
    :items="languages"
    :popper="{ placement: 'bottom-start' }"
    :dir="useAR()"
  >
    <UButton
      color="white"
      variant="ghost"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    >
      <template #leading>
        <nuxt-icon class="text-[1.35rem]" name="lang"></nuxt-icon>
      </template>
    </UButton>
  </UDropdown>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath();

const languages = computed(() => [
  [
    {
      label: $t("arabic"),
      avatar: {
        src: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1f8-1f1e6.svg",
      },
      click: () => {
        navigateTo(switchLocalePath("ar"));
      },
    },
  ],
  [
    {
      label: $t("english"),
      avatar: {
        src: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/us.svg",
      },
      click: () => {
        navigateTo(switchLocalePath("en"));
      },
    },
  ],
]);
</script>

<style lang="scss" scoped>
</style>