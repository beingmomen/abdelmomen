export const useUsersStore = defineStore('users', {

  state: () => ({
    allRecords: [],
    totalRecords: null,
  }),
  getters: {
    allData: state => state.allRecords.filter(x => x['role'] != 'DEV'),
  },
  actions: {

    async setAllData(payload: any) {
      // console.warn('payload', payload);
      this.allRecords = payload.data
      this.totalRecords = payload.total
    }
  },
})