export const useColors = () => {
  const { setAllData } = useColorsStore();

  const loading = ref(false);
  const apiModule = ref("/api/colors");

  const table = reactive({
    page: 1,
    total: 1,
  });

  const fields = reactive({
    name: null,
    color: "#000000",
  });

  const columns = [
    {
      key: "hash",
      label: "#",
      sortable: true,
      card: false,
    },
    { key: "name", label: $t("name"), sortable: true, card: true },
    { key: "color", label: $t("color"), sortable: true, card: false },
    {
      key: "actions",
      label: $t("actions"),
      card: false,
    },
  ];

  const filterKeys = ref([
    { key: "name", label: $t("name"), type: 1 },
    { key: "color", label: $t("color"), type: 1 },
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

  const persist = async (id) => {
    loading.value = true;

    const body = {
      name: fields.name,
      color: fields.color,
    };

    const url = id ? `${apiModule.value}/${id}` : apiModule.value;

    const { data, error } = await useFetch(url, {
      method: "POST",
      body: body,
    });

    if (error.value) {
      loading.value = false;
      useHandleRequestError(error);
      return;
    }

    useHandleRequestSuccess(data, "/colors");
    loading.value = false;
  };

  const getAll = async (filter = {}) => {
    loading.value = true;

    const { data, error } = await useFetch(
      `${apiModule.value}?page=${table.page}`,
      {
        query: { filter: JSON.stringify(filter?.filter) },
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

  const showOne = async (id) => {
    const { data, error } = await useFetch(`${apiModule.value}/${id}`);

    if (error.value) {
      loading.value = false;
      useHandleRequestError(error);
      return;
    }

    const response = data.value?.data;

    fields.name = response?.name;
    fields.color = response?.color;
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
    fields,
    table,
    persist,
    getAll,
    columns,
    filterKeys,
    deleteOne,
    showOne,
    loading,
    tableFilter,
  };
};
