

export const useTable = (props: any) => {
  const activities = useActivitiesStore();
  const isOpen = ref(false);
  const roleModal = ref(false);
  const selectedRole = reactive({
    id: '',
    role: ''
  });
  const selectedRow = ref(null);
  const q = ref("");
  const filterBy = ref({ "key": "name", "label": "Name", "type": 1 });
  let filter = reactive({
    input: null,
    select: null,
  });
  const selectedColumns = ref([...props.columns]);
  const filterKeysList = ref([...props.filterKeys || []]);


  watch(
    () => filter,
    () => tableFilter(),
    { deep: true }
  );

  watch(filterBy, () => {
    filter.input = null;
    filter.select = null;
    tableFilter();
  });

  const resetFilter = () => {
    filter.input = null;
    filter.select = null;
    filterBy.value = { "key": "name", "label": "Name", "type": 1 }
    tableFilter();
  }

  const currentRoles = [
    { value: "ADMIN", name: "ADMIN", label: 'ADMIN' },
    { value: "MODERATOR", name: "MODERATOR", label: 'MODERATOR' },
    { value: "USER", name: "USER", label: 'USER' },
  ];



  const tableFilter = () => {


    const data = {
      filter: {}
    }



    if ((filterBy as any)?.value?.type === 1) {
      data.filter[filterBy.value.key] = {
        contains: filter.input
      }
    } else if (filterBy?.value?.type === 2) {
      data.filter[filterBy.value.key] = {
        id: filter?.select?.id
      }
    } else if (filterBy?.value?.type === 3) {
      data.filter[filterBy.value.key] = {
        contains: new Date(filter.input)
      }

    } else if (filterBy?.value?.type === 4) {
      data.filter[filterBy.value.key] = filter?.select?.id

    }
    return data

  }



  const roleFilter = (role: string): string => {
    switch (role) {
      case 'MODERATOR':
        return 'indigo';
      case 'USER':
        return 'teal';
      default:
        return 'primary';
    }
  };




  const actions = computed(() => (row: any) => [
    [
      {
        label: $t("edit"),
        icon: "i-heroicons-pencil-square-20-solid",
        click: () =>
          navigateTo(localePath(`${props.path}/${row.slug}-${row.id}`)),
      },
    ],
    [
      {
        label: $t("delete"),
        icon: "i-heroicons-trash-20-solid",
        click: () => deleteConfirm(row),
      },
    ],
  ]);


  const deleteConfirm = (row: any) => {
    isOpen.value = true;
    selectedRow.value = row;
  };

  const selectRole = (row: any) => {
    roleModal.value = true;
    selectedRole.id = row.id;
    selectedRole.role = row.role;
  };

  const filteredRows = computed(() => {
    if (!q.value) {
      return props.allData;
    }

    return props.allData.filter((person: any) => {
      return Object.values(person).some((value) => {
        return String(value).toLowerCase().includes(q.value.toLowerCase());
      });
    });
  });




  return {
    actions,
    deleteConfirm,
    isOpen,
    roleModal,
    selectRole,
    selectedRow,
    q,
    filter,
    filterBy,
    filteredRows,
    selectedColumns,
    filterKeysList,
    activities,
    tableFilter,
    resetFilter,
    roleFilter,
    selectedRole,
    currentRoles
  }
}
