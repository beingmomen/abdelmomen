<template>
  <div>
    <!-- Breadcrumb -->
    <UtilsTheBreadcrumb :pages="breadcrumb" />

    <div
      class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {{ $t("canCreate") }} {{ $t("event") }}
      </h5>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          v-model="fields.name"
          :label="$t('name')"
          :placeholder="$t('name')"
          icon="i-fa6-solid-signature"
        />

        <FormDatePicker
          v-model="fields.date"
          :label="$t('date')"
          :placeholder="$t('date')"
          icon="i-heroicons-calendar"
        />

        <FormSearchMenu
          v-model="fields.activity"
          url="activities"
          :label="$t('activity')"
          :placeholder="$t('activity')"
          icon="i-tabler-activity"
        />

        <FormInput
          v-model="fields.type"
          :label="$t('eventType')"
          :placeholder="$t('eventType')"
          icon="i-fa6-solid-signature"
        />

        <FormInput
          class="col-span-1 md:col-span-2"
          v-model="fields.description"
          :label="$t('description')"
          :placeholder="$t('description')"
          icon="i-fa6-solid-signature"
        />

        <FormWidgetFile
          class="col-span-1 md:col-span-2"
          v-model="fields.image"
          :label="$t('image')"
        />

        <FormWidgetFile
          class="col-span-1 md:col-span-2"
          v-model="fields.images"
          :label="$t('images')"
          :isMultiple="true"
        />

        <FormRepeater class="col-span-1 md:col-span-2" :label="$t('videos')">
          <template #fields>
            <div
              v-for="(rowFields, i) in fields.videos"
              :key="i"
              class="grid grid-cols-3 md:grid-cols-6 gap-6 items-end justify-between mb-4"
            >
              <FormInput
                class="col-span-3"
                :label="$t('videoUrl')"
                :placeholder="$t('videoUrl')"
                icon="i-fa6-solid-signature"
                v-model:model-value="rowFields.url"
              />

              <FormInput
                class="col-span-2"
                :label="$t('videoTitle')"
                :placeholder="$t('videoTitle')"
                icon="i-fa6-solid-signature"
                v-model:model-value="rowFields.title"
              />

              <div class="col-span-1 mb-1 gap-2 flex">
                <UButton
                  icon="i-fe-trash"
                  size="sm"
                  color="primary"
                  :square="true"
                  variant="solid"
                  :disabled="rowFields.main"
                  @click="removeRepetition(i)"
                />

                <UButton
                  v-if="i == fields.videos.length - 1"
                  icon="i-fe-plus"
                  size="sm"
                  color="primary"
                  :square="true"
                  variant="solid"
                  @click="pushRepetition"
                />
              </div>
            </div>
          </template>
        </FormRepeater>
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
const { fields, persist, loading, pushRepetition, removeRepetition } =
  useEvents();

const breadcrumb = ref([
  {
    title: $t("home"),
    link: true,
    path: localePath("/"),
    icon: "home",
    size: "",
  },
  {
    title: $t("events"),
    link: true,
    path: localePath("/events"),
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