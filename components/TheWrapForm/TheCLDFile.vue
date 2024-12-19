<template>
  <UFormGroup
    :size="size"
    :label="label"
    :name="name"
    :hint="hint"
    eager-validation
  >
    <CldUploadWidget v-slot="{ open }" :on-upload="onUploadSuccess">
      <UInput
        :key="name"
        @click="open"
        placeholder="Choose File"
        icon="i-heroicons-folder"
        :model-value="modelValue"
        readonly
      >
        <template #trailing>
          <NuxtImg
            v-if="image"
            provider="cloudinary"
            class="rounded-full"
            :src="image"
            width="40"
            height="40"
            alt="logo"
          />
          <UAvatar v-else icon="i-heroicons-photo" size="md" />
        </template>
      </UInput>
    </CldUploadWidget>
  </UFormGroup>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    // type: [Array, Object, String],

    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  hint: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "lg",
  },
});

const emit = defineEmits(["update:modelValue"]);
const image = ref(props.modelValue);

const onUploadSuccess = (result) => {
  const fullPath = `${result.value.info.public_id}.${result.value.info.format}`;
  image.value = fullPath;
  emit("update:modelValue", fullPath);
};
</script>

<style lang="scss" scoped>
</style>