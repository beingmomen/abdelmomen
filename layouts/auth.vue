<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: ["login", "mode", "lang"],
};
</script>

<style lang="scss">
// html,
// body {
//   font-family: "Almarai", sans-serif;
// }
@import "/@core/scss/vue/pages/page-auth.scss";
// @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

// body {
//   font-family: "Roboto", sans-serif;
// }

.invalid {
  input {
    border-color: #f00;
  }
  .err-msg {
    color: #f00;
  }
}
</style>
