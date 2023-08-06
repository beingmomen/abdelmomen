
<template>
  <UFormGroup :label="label" :hint="hint">
    <USelectMenu
      :icon="icon"
      size="md"
      v-model="value"
      :by="by"
      :option-attribute="attribute"
      :searchable="search"
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
  modelValue: {
    type: [String, Number, Object],
  },
  icon: {
    type: String,
    required: true,
  },
  url: {
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

const search = async (q) => {
  const { data } = await $fetch(`/api/${props.url}`, {
    params: {
      limit: "all",
      filter: {
        name: {
          contains: q,
        },
      },
    },
  });

  return data.map((item) => ({
    id: item.id,
    name: item.name,
  }));
};

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