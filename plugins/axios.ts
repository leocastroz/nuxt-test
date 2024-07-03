import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import axios from 'axios'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const axiosInstance = axios.create({
    baseURL: config.public.apiUrl,
    headers: {
      'Authorization': `Bearer ${config.public.githubToken}`,
      'Accept': 'application/vnd.github.v3+json'
    }
  })

  return {
    provide: {
      axios: axiosInstance
    }
  }
})
