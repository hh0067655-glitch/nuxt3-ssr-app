export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: 'node-server',
    compatibilityDate: '2026-01-17'
  }
})
