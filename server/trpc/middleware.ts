import { TRPCError } from '@trpc/server'
import { middleware } from '~/server/trpc/trpc'

export const isAuthenticated = middleware(
  ({ ctx, next }) => {
    if (!ctx.user)
      throw new TRPCError({ code: 'UNAUTHORIZED' })

    return next({
      ctx: {
        user: ctx.user,
      },
    })
  })
