// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  auth: {
    isEnabled: true,
    // defaultProvider: 'keycloak',
    enableGlobalAppMiddleware: false,
    trustHost: true,
    addDefaultCallbackUrl: true,
    origin: process.env.NODE_ENV === 'development' ? '' : process.env.AUTH_ORIGIN
  },
  typescript: {
    shim: false
  },
  runtimeConfig: {
    AUTH_SECRET: '',
    KEYCLOAK_CLIENT_ID: '',
    KEYCLOAK_CLIENT_SECRET: '',
    KEYCLOAK_ISSUER: '',
    GITHUB_CLIENT_ID: '',
    GITHUB_CLIENT_SECRET: '',
    VERSION: ''
  }
})
