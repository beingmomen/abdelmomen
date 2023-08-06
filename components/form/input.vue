
<template>
  <UFormGroup :label="label" :hint="hint">
    <UInput
      :icon="icon"
      :type="type"
      :placeholder="placeholder"
      size="md"
      v-model="value"
    />
  </UFormGroup>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "name@mail.com",
  },
  type: {
    type: String,
    default: "text",
  },
  hint: {
    type: String,
    default: null,
  },
});
const emit = defineEmits(["update:modelValue", "update:input"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style lang="scss" scoped>
</style>