<template>
  <div>
    <!-- Breadcrumb -->
    <UtilsTheBreadcrumb :pages="breadcrumb" />

    <div
      class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {{ $t("canUpdate") }} {{ $t("player") }}
      </h5>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          v-model="fields.name"
          :label="$t('name')"
          :placeholder="$t('name')"
          icon="i-fa6-solid-signature"
        />

        <FormInput
          v-model="fields.nationalId"
          :label="$t('nationalId')"
          :placeholder="$t('nationalId')"
          icon="i-fa6-solid-id-card"
        />

        <FormInput
          v-model="fields.fileNumber"
          :label="$t('fileNumber')"
          :placeholder="$t('fileNumber')"
          icon="i-fluent-document-number-1-16-filled"
          type="number"
        />

        <FormDatePicker
          v-model="fields.birthDate"
          :label="$t('birthDate')"
          :placeholder="$t('birthDate')"
          icon="i-heroicons-calendar"
        />

        <FormSearchMenu
          v-model="fields.activity"
          url="activities"
          :label="$t('activity')"
          :placeholder="$t('activity')"
          icon="i-tabler-activity"
        />

        <FormSearchMenu
          v-model="fields.championship"
          url="championships"
          :label="$t('championship')"
          :placeholder="$t('championship')"
          icon="i-la-award"
        />

        <FormWidgetFile
          class="col-span-1 md:col-span-2"
          v-model="fields.image"
          :label="$t('image')"
          :current-image="fields.imageContainer"
        />

        <FormRepeater class="col-span-1 md:col-span-2" :label="$t('belts')">
          <template #fields>
            <div
              v-for="(rowFields, i) in fields.belts"
              :key="i"
              class="grid grid-cols-3 md:grid-cols-6 gap-6 items-end justify-between mb-4"
            >
              <FormSearchMenu
                url="belts"
                :label="rowFields.title || $t('belt')"
                :placeholder="$t('color')"
                icon="i-tabler-ribbon-health"
                class="col-span-3"
                v-model:model-value="rowFields.belt"
              />

              <FormDatePicker
                :label="$t('date')"
                :placeholder="$t('date')"
                icon="i-heroicons-calendar"
                class="col-span-2"
                v-model:model-value="rowFields.date"
              />

              <div class="col-span-1 mb-1 gap-2 flex">
                <UButton
                  icon="i-fe-trash"
                  size="sm"
                  color="primary"
                  :square="true"
                  variant="solid"
                  :disabled="rowFields.main"
                  @click="removeBelt(i)"
                />

                <UButton
                  v-if="i == fields.belts.length - 1"
                  icon="i-fe-plus"
                  size="sm"
                  color="primary"
                  :square="true"
                  variant="solid"
                  @click="pushBelt"
                />
              </div>
            </div>
          </template>
        </FormRepeater>
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
const { fields, persist, showOne, loading, pushBelt, removeBelt } =
  usePlayers();

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
    title: $t("players"),
    link: true,
    path: localePath("/players"),
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