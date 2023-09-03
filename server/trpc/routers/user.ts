import { z } from 'zod'
import { TRPCError } from '@trpc/server'
import { protectedProcedure, publicProcedure, router } from '../trpc'
import { prisma } from '~/lib/database'

export const userRouter = router({
  hello: publicProcedure.query(({ ctx }) => {
    return ctx.user?.user?.name
  }),
  getUser: protectedProcedure
    .input(z.object({
      email: z.string().email().optional(),
    }))
    .query(async ({ ctx, input }) => {
      const email = input.email || ctx.user?.user?.email || ''

      const userData = await prisma.user.findUnique({
        where: {
          email,
        },
        include: {
          DeedsCompleted: true,
          DeedRewardsClaimed: true,
        },
      })

      if (!userData) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'User not found',
        })
      }

      return userData
    }),
})
