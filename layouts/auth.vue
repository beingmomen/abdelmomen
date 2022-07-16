<template>
  <Nuxt />
</template>

<script>
export default {
  name: "auth",
  middleware: ["login", "mode", "lang"],
};
</script>
