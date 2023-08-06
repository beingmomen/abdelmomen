
<template>
  <UFormGroup :label="label" :hint="hint">
    <UInput
      :icon="icon"
      :type="type"
      placeholder="YYYY-MM-DD"
      size="md"
      v-model="value"
    />
    <vue-tailwind-datepicker
      class="datepicker-custom"
      as-single
      placeholder="YYYY-MM-DD"
      :formatter="formatter"
      i18n="id"
      v-model="value"
    />
  </UFormGroup>
</template>

<script setup>
import VueTailwindDatepicker from "vue-tailwind-datepicker";

const formatter = ref({
  date: "YYYY-MM-DD",
  month: "MM",
});

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
const emit = defineEmits(["update:modelValue", "input"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

