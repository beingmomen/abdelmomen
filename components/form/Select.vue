<template>
  <b-col :sm="sm" :md="md" :lg="lg" class="mt-1">
    <b-form-group>
      <label v-if="title != 'hid'" :class="{ required: required }">{{
        title
      }}</label>
      <v-select
        style="height: 35px"
        v-model="getContent"
        :reduce="(item) => (notId ? item : item.id)"
        :label="label"
        :dir="dashDir"
        :clearable="clearable"
        :options="allData"
        :disabled="disabled"
      ></v-select>
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  mounted() {},
  props: {
    title: {
      type: String,
      default: "hid",
    },
    label: String,
    storeKey: String,
    allData: Array,
    module: String,
    multiple: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    notId: {
      type: Boolean,
      default: false,
    },
    lg: {
      type: String,
      default: "3",
    },
    md: {
      type: String,
      default: "6",
    },
    sm: {
      type: String,
      default: "12",
    },
  },
  data() {
    return {};
  },
  computed: {
    getContent: {
      get: function () {
        return this.$store.getters[`${this.module}/get${this.storeKey}`];
      },
      set(val) {
        this.$store.commit(`${this.module}/set${this.storeKey}`, {
          key: this.storeKey,
          value: val,
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.required {
  position: relative;
  &::after {
    position: absolute;
    content: "*";
    font-size: 25px;
    bottom: -6px;
    left: -10px;
    color: #ea5455;
  }
}
</style>