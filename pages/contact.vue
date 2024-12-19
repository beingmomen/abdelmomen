<template>
  <div
    class="container mx-auto px-8 h-screen flex flex-col justify-center items-center"
  >
    <p
      class="font-bold text-xl sm:text-2xl uppercase text-center text-white dark:text-white"
    >
      نحن هنا لنهتم بما تريد
    </p>
    <h2
      class="font-bold text-3xl sm:text-5xl uppercase mt-5 main-title text-center"
    >
      أخبرنا بما تريد وسنقوم بالتواصل معك باذن الله تعالي
    </h2>

    <div class="w-full md:w-1/2 mx-auto mt-20">
      <UForm
        ref="form"
        :schema="schema"
        :state="state"
        class="space-y-6"
        @submit="onSubmit"
      >
        <UFormGroup label="الاسم" name="name" size="lg" required>
          <UInput v-model="state.name" />
        </UFormGroup>
        <UFormGroup label="الهاتف" name="phone" size="lg" required>
          <UInput v-model="state.phone" />
        </UFormGroup>

        <UFormGroup label="البريد الالكتروني" name="email" size="lg">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup
          label="نبذة عن المطلوب"
          name="description"
          size="lg"
          required
        >
          <UTextarea v-model="state.description" :rows="6" />
        </UFormGroup>

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
  titleTemplate: "تواصل معنا - beingmomen - %s",
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
  phone: Joi.string().required().messages({
    "string.empty": "الهاتف مطلوب",
    "any.required": "الهاتف مطلوب",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .messages({
      "string.empty": "البريد الإلكتروني مطلوب",
      "string.email": "يرجى إدخال عنوان بريد إلكتروني صالح",
      "any.required": "البريد الإلكتروني مطلوب",
    }),
  description: Joi.string().required().messages({
    "string.empty": "النبذة مطلوبة",
    "any.required": "النبذة مطلوبة",
  }),
});

const state = reactive({
  name: undefined,
  phone: undefined,
  email: undefined,
  description: undefined,
});

async function onSubmit(event) {
  // Do something with event.data

  loading.value = true;

  try {
    const { message, status } = await $fetch(`${baseUrl}${"/contact"}`, {
      method: "POST",
      body: event.data,
    });

    if (status === "success") {
      toast.add({ title: message, color: "green", timeout: 3000 });
      loading.value = false;
      state.name = undefined;
      state.phone = undefined;
      state.email = undefined;
      state.description = undefined;
    }
  } catch (error) {
    console.warn("error", error);
  }
}
</script>

<style lang="scss" scoped>
</style>