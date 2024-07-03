import dotenv from 'dotenv';
dotenv.config();

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_BASE_URL,
      githubToken: process.env.GITHUB_TOKEN
    }
  },
  devtools: { enabled: true },
  css: ['~/src/css/default.css'],
  plugins: ['~/plugins/axios.ts', '~/plugins/pinia.ts'],
})
