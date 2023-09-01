import DiscordProvider from 'next-auth/providers/discord'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error vite SSR issue - need to use .default
    DiscordProvider.default({
      clientId: useRuntimeConfig().auth.DISCORD_CLIENT_ID,
      clientSecret: useRuntimeConfig().auth.DISCORD_CLIENT_SECRET,
    }),
  ],
})
