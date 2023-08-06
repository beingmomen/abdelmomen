
import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
  state: () => ({
    test: 0,
  }),
  getters: {
    tests: state => state.test,
  },
  actions: {
    assign() {
      this.test = this.test + 1
    }
  },
})