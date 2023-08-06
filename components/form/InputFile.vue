<template>
  <div class="flex items-start justify-center w-full flex-col">
    <label
      for="input-group-1"
      class="block mb-2 text-lg text-start font-medium text-gray-900 dark:text-white"
      >{{ label }}</label
    >
    <div
      class="flex flex-wrap items-center justify-start gap-6 px-6 w-full py-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <template v-if="uploadedImgs.length">
        <div
          v-for="({ image, name }, i) in uploadedImgs"
          :key="i"
          class="relative overflow-hidden flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          @mouseenter="showDeleteIcon($event, true, `${name}-${i}`)"
          @mouseleave="showDeleteIcon($event, false, `${name}-${i}`)"
        >
          <img
            class="w-full h-full object-contain rounded-lg"
            :src="image"
            :alt="name"
          />
          <nuxt-icon
            :ref="`${name}-${i}`"
            class="absolute text-[1.5rem] w-6 h-6 text-white hidden hover:block cursor-pointer"
            name="trash-can"
            @click="deleteImage(i)"
          ></nuxt-icon>
        </div>
      </template>
      <label
        class="flex flex-col items-center justify-center w-32 h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <nuxt-icon
            class="text-[2.5rem] w-10 h-10 text-gray-400"
            name="add"
          ></nuxt-icon>
        </div>
        <input
          type="file"
          class="hidden"
          :multiple="isMultiple"
          @change="handleImgSrc"
          @input="$emit('update:modelValue', $event.target.files)"
        />
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [Array, Object, String],
  },
  currentImage: {
    type: [Array],
  },
  label: {
    type: String,
    required: true,
  },
  isMultiple: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:modelValue"]);

let uploadedImgs = ref([]);
let selectedFiles = ref([]);

onMounted(() => {
  uploadedImgs.value.push(...props.currentImage);
});

const showDeleteIcon = (event, action) => {
  if (action) {
    event.target.querySelector(".nuxt-icon").classList.remove("hidden");
  } else {
    event.target.querySelector(".nuxt-icon").classList.add("hidden");
  }
};

const deleteImage = (index) => {
  uploadedImgs.value.splice(index, 1);
};

const handleImgSrc = (event) => {
  try {
    const files = event.target.files;

    if (props.isMultiple) {
      // Process each file
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file || !file.type.match("image.*")) {
          continue;
        }

        // Store the file in the uploadedImgs array
        uploadedImgs.value.push({
          name: file.name,
          image: URL.createObjectURL(file),
        });
        selectedFiles.value.push(file);
      }
    } else {
      uploadedImgs.value = [];
      uploadedImgs.value.push({
        name: files[0].name,
        image: URL.createObjectURL(files[0]),
      });
      selectedFiles.value = files[0];
    }

    // Emit the selected files
    emit("update:modelValue", selectedFiles.value);
  } catch (error) {}
};
</script>

<style lang="scss" scoped>
</style>