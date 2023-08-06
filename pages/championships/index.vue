<template>
  <!-- Breadcrumb -->
  <UtilsTheBreadcrumb :pages="breadcrumb" />

  <UtilsTheTable
    path="/championships"
    :row="$t('championship')"
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
const store = useChampionshipsStore();
const { getAll, columns, filterKeys, deleteOne, table, loading, tableFilter } =
  useChampionships();
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
    title: $t("championships"),
    link: false,
    path: "",
    icon: "chevron-right-20-solid",
    size: "icon-size",
  },
]);
</script>

<style lang="scss" scoped>
</style>