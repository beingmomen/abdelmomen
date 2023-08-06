
import { defineStore } from 'pinia'


export const useAuthStore = defineStore('auth', {

  state: () => ({
    accessToken: null,
    userData: null
  }),
  getters: {
    token: state => state.accessToken,
    user: state => state.userData,
  },
  actions: {
    setToken(token: any) {
      this.accessToken = token
    },
    setUser(user: any) {
      this.userData = user
    },
    async signOut() {
      this.accessToken = await null
      const { data, error } = await useFetch("/api/auth/logout", {
        method: "POST",
        body: {},
      });

      if (data.value?.status) {
        await navigateTo(localePath('/login'))
      }

    }
  },
})