<template>
  <div>
    <!-- Breadcrumb -->
    <UtilsTheBreadcrumb :pages="breadcrumb" />

    <div
      class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {{ $t("canUpdate") }} {{ $t("belt") }}
      </h5>

      <div class="grid grid-cols-1 gap-4">
        <FormInput
          v-model="fields.name"
          :label="$t('name')"
          :placeholder="$t('name')"
          icon="i-fa6-solid-signature"
        />

        <FormSearchMenu
          v-model="fields.activity"
          url="activities"
          :label="$t('activity')"
          :placeholder="$t('activity')"
          icon="i-tabler-activity"
        />

        <FormSearchMenu
          v-model="fields.color"
          url="colors"
          :label="$t('color')"
          :placeholder="$t('color')"
          icon="i-fa6-solid-palette"
        />

        <FormWidgetFile
          v-model="fields.image"
          :label="$t('image')"
          :current-image="fields.imageContainer"
        />
      </div>

      <div class="mt-6 flex justify-end">
        <UButton
          :icon="useArrowDir(useAR())"
          :label="$t('update')"
          color="primary"
          :trailing="false"
          size="md"
          :class="{ 'cursor-not-allowed': loading }"
          :loading="loading"
          :ui="{
            wrapper: '',
            base: 'px-4',
          }"
          @click="persist(id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { fields, persist, showOne, loading } = useBelts();

const { params } = useRoute();

const id = ref(null);

if (params.id.length > 24) {
  id.value = params.id.split("-").at(-1);
} else {
  id.value = params.id;
}

await showOne(id.value);

const breadcrumb = ref([
  {
    title: $t("home"),
    link: true,
    path: localePath("/"),
    icon: "home",
    size: "",
  },
  {
    title: $t("belts"),
    link: true,
    path: localePath("/belts"),
    icon: "chevron-right-20-solid",
    size: "icon-size",
  },
  {
    title: $t("update"),
    link: false,
    path: "",
    icon: "chevron-right-20-solid",
    size: "icon-size",
  },
]);
</script>

<style lang="scss" scoped>
</style>