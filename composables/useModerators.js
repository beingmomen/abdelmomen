export const useModerators = () => {
  const { setAllData } = useModeratorsStore();

  const apiModule = ref("/api/moderators");
  const loading = ref(false);

  const table = reactive({
    page: 1,
    total: 1,
  });

  const fields = reactive({
    name: null,
    date: "",
    activity: null,
    image: null,
    imageContainer: null,
  });

  const columns = ref([
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
    { key: "date", label: $t("startDate"), sortable: true, card: false },
    { key: "activity", label: $t("activity"), sortable: false, card: false },
    {
      key: "actions",
      label: $t("actions"),
      card: false,
    },
  ]);

  const filterKeys = ref([
    { key: "name", label: $t("name"), type: 1 },
    { key: "activity", label: $t("activity"), select: "activities", type: 2 },
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
      date: new Date(fields.date),
      activityId: fields.activity?.id,
      image: fields.image,
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

    useHandleRequestSuccess(data, "/moderators");
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
    fields.date = useFormatDate(response?.date);
    fields.image = response?.image;
    fields.activity = response?.activity;
    fields.imageContainer = [{ name: response?.name, image: response?.image }];
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
