export const usePlayersStore = defineStore('players', {

  state: () => ({
    allRecords: [],
    totalRecords: null,
  }),
  getters: {
    allData: state => state.allRecords,
  },
  actions: {

    async setAllData(payload: any) {
      // console.warn('payload', payload);
      this.allRecords = payload.data
      this.totalRecords = payload.total
    }
  },
})