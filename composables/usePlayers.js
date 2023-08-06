export const usePlayers = () => {
  const { setAllData } = usePlayersStore();

  const apiModule = ref("/api/players");
  const loading = ref(false);

  const table = reactive({
    page: 1,
    total: 1,
  });

  const fields = reactive({
    name: null,
    nationalId: null,
    fileNumber: null,
    birthDate: "",
    belts: [
      {
        title: $t("lastBelt"),
        main: true,
        belt: "",
        date: "",
      },
    ],
    image: null,
    imageContainer: null,
    activity: null,
    championship: null,
  });

  const pushBelt = () => {
    fields.belts = [
      ...fields.belts,
      {
        main: false,
        belt: "",
        date: "",
      },
    ];
  };

  const removeBelt = (index) => {
    if (fields.belts.length > 1) {
      fields.belts.splice(index, 1);
    }
  };

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
    { key: "birthDate", label: $t("birthDate"), sortable: true, card: false },
    { key: "fileNumber", label: $t("fileNumber"), sortable: true, card: true },
    { key: "belts", label: $t("lastBelt"), sortable: false, card: false },
    { key: "activity", label: $t("activity"), sortable: false, card: false },
    {
      key: "actions",
      label: $t("actions"),
      card: false,
    },
  ]);

  // Type 1 => String
  // Type 2 => ObjectID
  // Type 3 => Date
  // Type 3 => Static Data
  const filterKeys = ref([
    { key: "name", label: $t("name"), type: 1 },
    // { key: "birthDate", label: $t("birthDate"), type: 3 },
    { key: "fileNumber", label: $t("fileNumber"), type: 1 },
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

    const beltsData = fields.belts.map((item) => {
      // Create a new object with the same properties as the original item
      const newItem = {
        title: item.title || "",
        main: item.main,
        date: item.date,
      };

      // If the 'belt' key exists and has an 'id' property, assign the 'id' to the new item
      if (item.belt && item.belt.id) {
        newItem.beltId = item.belt.id;
      }

      return newItem;
    });

    const body = {
      name: fields.name,
      nationalId: fields.nationalId,
      fileNumber: fields.fileNumber,
      birthDate: new Date(fields.birthDate),
      belts: beltsData,
      image: fields.image,
      activityId: fields.activity?.id,
      championshipId: fields.championship?.id,
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

    useHandleRequestSuccess(data, "/players");
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
    fields.nationalId = response?.nationalId;
    fields.fileNumber = response?.fileNumber;
    fields.birthDate = useFormatDate(response?.birthDate);
    fields.image = response?.image;

    fields.activity = response?.activity;
    fields.championship = response?.championship;
    fields.imageContainer = [{ name: response?.name, image: response?.image }];

    if (response.belts.length) {
      fields.belts = response?.belts.map((x) => ({
        ...x,
        date: useFormatDate(x.date),
      }));
    }
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
    pushBelt,
    removeBelt,
    tableFilter,
  };
};
