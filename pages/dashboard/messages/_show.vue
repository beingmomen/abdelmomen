<template>
  <div class="app-content content">
    <b-row>
      <b-col v-for="(value, key, i) in dataInfo" :key="i" md="6">
        <b-card
          border-variant="secondary"
          :title="key"
          bg-variant="transparent"
          class="shadow-none"
        >
          <b-card-text>
            {{ value }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  layout: "admin",
  async asyncData({ $fire, store, params }) {
    let x = null;
    await $fire.firestore
      .collection("messages")
      .doc(params.show)
      .get()
      .then((res) => {
        x = res.data();
      });
    return {
      dataInfo: x,
    };
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>