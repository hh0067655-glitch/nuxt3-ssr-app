export default defineEventHandler(() => {
  return {
    msg: 'Hello from Nuxt server API',
    time: Date.now()
  }
})
