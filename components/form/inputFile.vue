<template>
  <b-col :lg="lg" :md="md" :sm="sm" class="mb-1">
    <b-form-group>
      <label :class="required ? 'required' : ''"> {{ label }}</label>
      <!-- <b-form-input
        style="height: 35px"
        v-model="getContent"
        :disabled="disabled"
      /> -->
      <b-form-file
        style="height: 35px"
        v-model="getContent"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        :disabled="disabled"
      />
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  props: {
    label: String,
    module: String,
    storeKey: String,
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
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
  mounted() {},
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