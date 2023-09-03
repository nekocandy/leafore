import DiscordProvider from 'next-auth/providers/discord'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NuxtAuthHandler } from '#auth'
import { prisma } from '~/lib/database'

export default NuxtAuthHandler({
  secret: useRuntimeConfig().auth.SECRET,
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login',
  },
  providers: [
    // @ts-expect-error vite SSR issue - need to use .default
    DiscordProvider.default({
      clientId: useRuntimeConfig().auth.DISCORD_CLIENT_ID,
      clientSecret: useRuntimeConfig().auth.DISCORD_CLIENT_SECRET,
    }),
  ],
})
