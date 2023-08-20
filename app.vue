<template>
  <div :dir="useAR()">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
  </div>
</template>



<script setup>
const colorMode = useColorMode();
colorMode.preference = "dark";

// const activities = useActivities();
// activities.getAll();
// const colors = useColors();
// colors.getAll();
// const championships = useChampionships();
// championships.getAll();
// const belts = useBelts();
// belts.getAll();
// const mediaTypes = useMediaTypes();
// mediaTypes.getAll();
</script>




<style lang="scss">
body {
  font-family: "Nunito";
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity));
}
</style>





