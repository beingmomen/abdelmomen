<template>
  <UDropdown
    :items="items"
    :popper="{ placement: 'bottom-start' }"
    :dir="useAR()"
  >
    <UButton color="white" variant="ghost">
      <template #leading>
        <UAvatar
          :src="userImage"
          chip-color="primary"
          chip-text=""
          chip-position="top-right"
          size="md"
        />
      </template>
    </UButton>
  </UDropdown>
</template>

<script setup>
const { signOut, user } = useAuthStore();
const userImage = computed(() => `${user.image}`);

const items = computed(() => [
  [
    {
      label: $t("profile"),
      avatar: {
        src: `${user.image}`,
      },
      click: () => {
        navigateTo(localePath("/profile"));
      },
    },
  ],
  [
    {
      label: $t("logout"),
      icon: "i-heroicons-arrow-left-on-rectangle",
      click: () => {
        signOut();
      },
    },
  ],
]);
</script>

<style lang="scss" scoped>
</style>