<template>
  <!-- Breadcrumb -->
  <UtilsTheBreadcrumb :pages="breadcrumb" />

  <UtilsTheTable
    path="/activities"
    :row="$t('activity')"
    :columns="columns"
    :filter-keys="filterKeys"
    :all-data="store.allData"
    :loading="loading"
    @deleteItem="deleteOne($event)"
    @tableSearch="tableFilter($event)"
  >
    <template #pagination>
      <UPagination v-model="table.page" :page-count="10" :total="table.total" />
    </template>
  </UtilsTheTable>
</template>

<script setup>
const store = useActivitiesStore();
const { getAll, columns, filterKeys, deleteOne, table, loading, tableFilter } =
  useActivities();
getAll();

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
    link: false,
    path: "",
    icon: "chevron-right-20-solid",
    size: "icon-size",
  },
]);
</script>

<style lang="scss" scoped>
</style>