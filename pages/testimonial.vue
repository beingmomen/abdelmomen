<template>
  <div
    class="container mx-auto px-8 h-screen flex flex-col justify-center items-center"
  >
    <p
      class="font-bold text-xl sm:text-2xl uppercase text-center text-white dark:text-white"
    >
      نحن هنا نهتم برأيك
    </p>
    <h2
      class="font-bold text-3xl sm:text-5xl uppercase mt-5 main-title text-center"
    >
      نرجو منك ابداء رأيك فى عملنا
    </h2>

    <div class="w-full md:w-1/2 mx-auto mt-20">
      <UForm
        ref="form"
        :schema="schema"
        :state="state"
        class="space-y-6"
        @validate="validate"
        @submit="onSubmit"
      >
        <UFormGroup label="الاسم" name="name" size="lg" required>
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup label="البريد الالكتروني" name="email" size="lg" required>
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="رأيك يهمنا" name="description" size="lg" required>
          <UTextarea v-model="state.description" :rows="6" />
        </UFormGroup>

        <TheWrapFormTheCLDFile
          v-model="state.image"
          label="الصورة"
          name="image"
          required
        />

        <UButton
          type="submit"
          block
          size="xl"
          class="font-black mt-10"
          :loading="loading"
        >
          حفظ
        </UButton>
      </UForm>
    </div>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "قم بتقييمنا - %s",
});

import Joi from "joi";
const config = useRuntimeConfig();
const toast = useToast();
const form = ref();

const loading = ref(false);

const baseUrl = config.public.baseURL;

const schema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "الاسم مطلوب",
    "any.required": "الاسم مطلوب",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "string.empty": "البريد الإلكتروني مطلوب",
      "string.email": "يرجى إدخال عنوان بريد إلكتروني صالح",
      "any.required": "البريد الإلكتروني مطلوب",
    }),
  description: Joi.string().min(50).required().messages({
    "string.empty": "الوصف مطلوب",
    "string.min": "يجب أن يحتوي الوصف على الأقل على {#limit} حرفًا",
    "any.required": "الوصف مطلوب",
  }),
  image: Joi.string().required().messages({
    "string.empty": "الصورة مطلوبة",
    "any.required": "الصورة مطلوبة",
  }),
});

const validate = (data) => {
  const { error } = schema.validate(state, { abortEarly: false });

  console.warn("error", error);
};
const state = reactive({
  name: undefined,
  email: undefined,
  description: undefined,
  image: undefined,
});

watch(
  () => state.image,
  (newValue, oldValue) => {
    // Add your logic here to handle image changes
    form.value.clear();
  }
);

async function onSubmit(event) {
  // Do something with event.data
  console.log(event.data);
  console.warn("baseUrl", baseUrl);
  loading.value = true;

  try {
    const { message, status } = await $fetch(`${baseUrl}${"/testimonials"}`, {
      method: "POST",
      body: event.data,
    });

    if (status === "success") {
      toast.add({ title: message, color: "green", timeout: 3000 });
      loading.value = false;
      state.name = undefined;
      state.email = undefined;
      state.description = undefined;
      state.image = undefined;
    }
  } catch (error) {
    console.warn("error", error);
  }
}
</script>

<style lang="scss" scoped>
</style>