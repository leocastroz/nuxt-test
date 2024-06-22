// plugins/pinia.ts
import { defineNuxtPlugin } from '#app'
import { createPinia } from 'pinia'

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia()
  nuxtApp.vueApp.use(pinia)
})

// API_BASE_URL=https://api.github.com/users/leocastroz
// GITHUB_TOKEN=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

// VITE_API_BASE_URL=https://api.github.com/users/leocastroz
// VITE_GITHUB_TOKEN=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

