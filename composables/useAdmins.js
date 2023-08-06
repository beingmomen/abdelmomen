export const useAdmins = () => {
  const { setAllData } = useAdminsStore();

  const loading = ref(false);
  const apiModule = ref("/api/users");

  const table = reactive({
    page: 1,
    total: 1,
  });

  const columns = [
    {
      key: "hash",
      label: "#",
      sortable: true,
      card: false,
    },
    {
      key: "avatar",
      label: $t("image"),
      sortable: false,
      card: false,
    },
    { key: "name", label: $t("name"), sortable: true, card: true },
    { key: "email", label: $t("email"), sortable: true, card: true },
    { key: "role", label: $t("role"), sortable: true, card: true },
    {
      key: "actions",
      label: $t("actions"),
      card: false,
    },
  ];

  const filterKeys = ref([
    { key: "name", label: $t("name"), type: 1 },
    { key: "email", label: $t("email"), type: 1 },
  ]);

  const tableFilter = (filter) => {
    getAll(filter);
  };

  watch(
    () => table.page,
    (newPage, oldPage) => {
      // Function to be executed when 'page' changes
      getAll();
    }
  );

  const getAll = async (filter = {}) => {
    loading.value = true;

    const { data, error } = await useFetch(
      `${apiModule.value}?page=${table.page}`,
      {
        query: { filter: JSON.stringify({ ...filter?.filter, role: "ADMIN" }) },
      }
    );

    if (error.value) {
      loading.value = false;
      useHandleRequestError(error);
      return;
    }

    table.total = data.value.total;

    setAllData(data.value);
    loading.value = false;
  };

  const deleteOne = async (id) => {
    const { data, error } = await useFetch(`${apiModule.value}/${id}`, {
      method: "POST",
    });

    if (error.value) {
      loading.value = false;
      useHandleRequestError(error);
      return;
    }

    useHandleRequestSuccess(data);
    loading.value = false;
    getAll();
  };

  return {
    table,

    getAll,
    columns,
    filterKeys,
    deleteOne,

    loading,
    tableFilter,
  };
};
