<template>
  <b-col :lg="lg" :md="md" :sm="sm" class="mt-1">
    <b-form-group>
      <label :class="required ? 'required' : ''">{{ title }}</label>
      <b-input-group class="mb-1 flex-row-revers">
        <b-form-input
          style="height: 35px"
          id="example-input"
          v-model="content"
          type="text"
          placeholder="YYYY-MM-DD"
          autocomplete="off"
          show-decade-nav
        />
        <b-input-group-append style="height: 35px">
          <b-form-datepicker
            v-model="content"
            show-decade-nav
            button-only
            right
            locale="en-US"
            aria-controls="example-input"
            @context="onContext"
          />
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
  </b-col>
</template>

<script>
export default {
  props: {
    title: String,
    module: String,
    storeKey: String,
    required: {
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
    return {
      content: this.$store.getters[`${this.module}/get${this.storeKey}`],
    };
  },
  methods: {
    onContext() {},
  },
  watch: {
    content(newValue, oldValue) {
      this.$store.commit(`${this.module}/set${this.storeKey}`, {
        key: this.storeKey,
        value: newValue,
      });
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