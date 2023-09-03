import { protectedProcedure, router } from '../trpc'
import { prisma } from '~/lib/database'

export const deedsRouter = router({
  getDeeds: protectedProcedure
    .query(async () => {
      const deeds = await prisma.deeds.findMany()
      return deeds
    }),
})
