// githubStore.ts
import { defineStore } from 'pinia'
import axios from 'axios'
import { getApiHeaders } from '../api/apiHeaders.js';

export const useGithubStore = defineStore('github', {
  state: () => ({
    userData: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchGithubUser() {
      this.loading = true
      this.error = null

      const headers = getApiHeaders()

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}`, { headers })
        this.userData = response.data
        console.log('UserData:', this.userData)
      } catch (error) {
        console.error('Error fetching GitHub user data:', error)
        // this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})