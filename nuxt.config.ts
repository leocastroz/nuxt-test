import dotenv from 'dotenv';
dotenv.config();

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/src/css/default.css'],
  plugins: ['~/plugins/axios.ts', '~/plugins/pinia.ts'],
})
