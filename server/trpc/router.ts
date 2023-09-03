import { router } from './trpc'
import { deedsRouter } from '~/server/trpc/routers/deeds'
import { userRouter } from '~/server/trpc/routers/user'

export const appRouter = router({
  user: userRouter,
  deeds: deedsRouter,
}) // export type definition of API
export type AppRouter = typeof appRouter
