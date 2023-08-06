<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-5"
  >
    <UtilsTheStatsCard :cards="cards.data" />
  </div>
</template>

<script setup>
const { data: cards } = await useFetch("/api/dashboard");
</script>


<style scoped>
</style>