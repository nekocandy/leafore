import { publicProcedure, router } from '../trpc'

export const userRouter = router({
  hello: publicProcedure.query(({ ctx }) => {
    return ctx.user?.user?.name
  }),
})
