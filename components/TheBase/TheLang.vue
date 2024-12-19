<template>
  <UDropdown
    :items="languages"
    :popper="{ placement: 'bottom-start' }"
    mode="hover"
    :dir="useDir()"
  >
    <UButton
      color="white"
      class="text-white hover:text-primary group"
      variant="ghost"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    >
      <template #leading>
        <UIcon name="i-lucide-languages" class="w-5 h-5" />
      </template>
    </UButton>
  </UDropdown>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath();
const { t } = useI18n();

const languages = computed(() => [
  [
    {
      // label: t("arabic"),
      label: "العربية",
      click: () => {
        navigateTo(switchLocalePath("ar"));
      },
    },
  ],
  [
    {
      // label: t("english"),
      label: "English",
      click: () => {
        navigateTo(switchLocalePath("en"));
      },
    },
  ],
]);
</script>

<style lang="scss" scoped>
</style>