<template>
  <div>
    <label
      for="input-group-1"
      class="block mb-2 text-lg text-start font-medium text-gray-900 dark:text-white"
    >
      {{ label }}
    </label>

    <div
      class="w-full py-6 border-2 px-5 border-gray-300 border-dashed rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <slot name="fields" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  grid: {
    type: String,
    default: "grid grid-cols-6",
  },
});
const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
</style>