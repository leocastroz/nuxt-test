import dotenv from 'dotenv';
dotenv.config();

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_BASE_URL
    }
  },
  devtools: { enabled: true },
  css: ['~/src/css/default.css'],
  plugins: ['~/plugins/axios.ts', '~/plugins/pinia.ts'],
})
