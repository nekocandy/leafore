import { z } from 'zod'
import { nanoid } from 'nanoid'
import { protectedProcedure, router } from '../trpc'
import { prisma } from '~/lib/database'

export const rewardsRouter = router({
  getRewards: protectedProcedure
    .query(async () => {
      const rewards = await prisma.deedRewards.findMany()
      return rewards
    }),

  redeemReward: protectedProcedure
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
      const reward = await prisma.deedRewardsClaimed.create({
        data: {
          id: nanoid(),
          rewardId: input.id,
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
            decrement: input.points,
          },
        },
      })

      return reward
    }),
})
