import { z } from 'zod'
import { nanoid } from 'nanoid'
import { protectedProcedure, router } from '../trpc'
import { prisma } from '~/lib/database'

export const deedsRouter = router({
  getDeeds: protectedProcedure
    .query(async () => {
      const deeds = await prisma.deeds.findMany()
      return deeds
    }),

  completeDeed: protectedProcedure
    .input(z.object({
      id: z.string(),
      points: z.number(),
    }))
    .mutation(async ({ input, ctx }) => {
      const userId = await prisma.user.findUnique({
        where: {
          email: ctx.user.user?.email || '',
        },
      })
      const deed = await prisma.deedsCompleted.create({
        data: {
          id: nanoid(),
          deedId: input.id,
          userId: userId!.id,
          points: input.points,
        },
      })

      await prisma.user.update({
        where: {
          id: userId!.id,
        },
        data: {
          points: {
            increment: input.points,
          },
        },
      })

      return deed
    }),
})
