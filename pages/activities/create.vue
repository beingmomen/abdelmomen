<template>
  <div>
    <!-- Breadcrumb -->
    <UtilsTheBreadcrumb :pages="breadcrumb" />

    <div
      class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {{ $t("canCreate") }} {{ $t("activity") }}
      </h5>

      <div class="grid grid-cols-1 gap-4">
        <FormInput
          v-model="fields.name"
          :label="$t('name')"
          :placeholder="$t('name')"
          icon="i-fa6-solid-signature"
        />

        <FormWidgetFile v-model="fields.image" :label="$t('image')" />
      </div>

      <div class="mt-6 flex justify-end">
        <UButton
          :icon="useArrowDir(useAR())"
          :label="$t('create')"
          color="primary"
          :trailing="false"
          size="md"
          :class="{ 'cursor-not-allowed': loading }"
          :loading="loading"
          :ui="{
            wrapper: '',
            base: 'px-4',
          }"
          @click="persist()"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { fields, persist, loading } = useActivities();

const breadcrumb = ref([
  {
    title: $t("home"),
    link: true,
    path: localePath("/"),
    icon: "home",
    size: "",
  },
  {
    title: $t("activities"),
    link: true,
    path: localePath("/activities"),
    icon: "chevron-right-20-solid",
    size: "icon-size",
  },
  {
    title: $t("create"),
    link: false,
    path: "",
    icon: "chevron-right-20-solid",
    size: "icon-size",
  },
]);
</script>

<style lang="scss" scoped>
</style>