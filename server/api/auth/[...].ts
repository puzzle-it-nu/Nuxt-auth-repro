import GithubProvider from 'next-auth/providers/github'
import KeycloakProvider from 'next-auth/providers/keycloak'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  secret: useRuntimeConfig().AUTH_SECRET,
  debug: true,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    KeycloakProvider.default(
      {
        clientId: useRuntimeConfig().KEYCLOAK_CLIENT_ID || 'enter-your-client-id-here',
        clientSecret: useRuntimeConfig().KEYCLOAK_CLIENT_SECRET || 'enter-your-client-secret-here',
        issuer: useRuntimeConfig().KEYCLOAK_ISSUER || 'enter-your-issuer-URL-here'
      }
    ),
  ]
})
