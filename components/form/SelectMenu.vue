
<template>
  <UFormGroup :label="label" :hint="hint">
    <USelectMenu
      :options="allData"
      :icon="icon"
      size="md"
      v-model="value"
      :by="by"
      :option-attribute="attribute"
    >
      <template #label>
        <span v-if="value" class="truncate">{{ value[attribute] }}</span>
        <span v-else>{{ $t("select") }} ...</span>
      </template>
    </USelectMenu>
  </UFormGroup>
</template>

<script setup>
const props = defineProps({
  allData: {
    type: Array,
  },
  modelValue: {
    type: [String, Number, Object],
  },
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
    default: null,
  },
  attribute: {
    type: String,
    default: "name",
  },
  by: {
    type: String,
    default: "id",
  },
});
const emit = defineEmits(["update:modelValue"]);

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