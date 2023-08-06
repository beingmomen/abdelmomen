export const useMultiMediaStore = defineStore('multiMedia', {

  state: () => ({
    allRecords: [],
    totalRecords: null,
  }),
  getters: {
    allData: state => state.allRecords,
  },
  actions: {

    async setAllData(payload: any) {
      this.allRecords = payload.data
      this.totalRecords = payload.total
    }
  },
})