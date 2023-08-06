<template>
  <!-- Breadcrumb -->
  <UtilsTheBreadcrumb :pages="breadcrumb" />

  <UtilsTheTable
    path="/moderators"
    :row="$t('moderator')"
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
const store = useModeratorsStore();
const { getAll, columns, filterKeys, deleteOne, table, loading, tableFilter } =
  useModerators();
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
    title: $t("moderators"),

    link: false,
    path: "",
    icon: "chevron-right-20-solid",
    size: "icon-size",
  },
]);
</script>

<style lang="scss" scoped>
</style>