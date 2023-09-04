import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      user: { auth: false },
    }
  },
  persist: true,
})