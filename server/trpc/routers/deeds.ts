import { z } from 'zod'
import { TRPCError } from '@trpc/server'
import { protectedProcedure, publicProcedure, router } from '../trpc'
import { prisma } from '~/lib/database'

export const deedsRouter = router({
  getDeeds: protectedProcedure
    .query(async ({ ctx }) => {
      return [
        {
          id: '1',
          image: 'https://picsum.photos/200',
          title: 'Deed 1',
          pointsRequired: 10,
        },
      ]
    }),
})
