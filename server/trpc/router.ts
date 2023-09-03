import { router } from './trpc'
import { deedsRouter } from '~/server/trpc/routers/deeds'
import { forumRouter } from '~/server/trpc/routers/forum'
import { rewardsRouter } from '~/server/trpc/routers/rewards'
import { userRouter } from '~/server/trpc/routers/user'

export const appRouter = router({
  user: userRouter,
  deeds: deedsRouter,
  rewards: rewardsRouter,
  forum: forumRouter,
})

export type AppRouter = typeof appRouter
