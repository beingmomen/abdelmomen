
<template>
  <UFormGroup
    :label="label"
    :hint="hint"
    :ui="{
      hint: 'text-primary-500',
    }"
  >
    <UInput
      :icon="icon"
      :type="type"
      :placeholder="placeholder"
      size="md"
      disabled
      v-model="value"
      :ui="{
        icon: {
          trailing: {
            wrapper:
              'absolute inset-y-0 end-0 flex items-center pe-0 color-picker-wrapper',
            pointer: '',
          },
        },
      }"
    >
      <template #trailing>
        <color-picker
          v-model:pure-color="value"
          format="hex"
          :isWidget="false"
          round-history
        />
      </template>
    </UInput>
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
const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
</script>

<style lang="scss">
.color-picker-wrapper {
  .vc-color-wrap {
    width: 75px;
    border-radius: 0.375rem;
    height: 100%;
    margin-right: 0 !important;
  }
}
</style>