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
        @click="openWidget"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <nuxt-icon
            class="text-[2.5rem] w-10 h-10 text-gray-400"
            name="add"
          ></nuxt-icon>
        </div>
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
    default: [],
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

const config = useRuntimeConfig();

const cloudinaryRef = ref();
const widgetRef = ref();
const uploadedImgs = ref([]);
const selectedFiles = ref([]);

onMounted(() => {
  uploadedImgs.value.push(...props.currentImage);
  selectedFiles.value.push(...props.currentImage.map((x) => x.image));
});

const cloudName = computed(() => config.public.cloudinaryCloudName);

const uploadPreset = computed(() => config.public.cloudinaryUploadPreset);

const openWidget = () => {
  widgetRef.value.open();
};

const showDeleteIcon = (event, action) => {
  const icon = event.target.querySelector(".nuxt-icon");
  if (action) {
    icon.classList.remove("hidden");
  } else {
    icon.classList.add("hidden");
  }
};

const deleteImage = (index) => {
  uploadedImgs.value.splice(index, 1);
  selectedFiles.value.splice(index, 1);
  emit("update:modelValue", selectedFiles.value);
};

watchEffect(() => {
  if (process.client) {
    cloudinaryRef.value = window.cloudinary;
    widgetRef.value = cloudinaryRef.value.createUploadWidget(
      {
        cloudName: "dyqfclwdk",
        uploadPreset: "nuxi_strap",
        sources: ["local"],
        cropping: false,
        showAdvancedOptions: false,
      },
      (err, result) => {
        if (!err && result && result.event === "success") {
          if (props.isMultiple) {
            uploadedImgs.value.push({
              name: result.info.original_filename,
              image: result.info.url,
            });
            selectedFiles.value.push(result.info.url);
          } else {
            uploadedImgs.value = [
              {
                name: result.info.original_filename,
                image: result.info.url,
              },
            ];
            selectedFiles.value = result.info.url;
          }
          emit("update:modelValue", selectedFiles.value);
          // widgetRef.value.close();
        }
      }
    );
  }
});
</script>

<style lang="scss" scoped>
</style>