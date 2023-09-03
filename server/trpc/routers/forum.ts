import { z } from 'zod'
import { nanoid } from 'nanoid'
import { protectedProcedure, router } from '../trpc'
import { prisma } from '~/lib/database'

export const forumRouter = router({
  getPosts: protectedProcedure
    .query(async () => {
      const posts = await prisma.forum.findMany({
        include: {
          user: true,
        },
      })
      return posts
    }),
})
