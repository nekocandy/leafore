import { initTRPC } from '@trpc/server'
import type { Context } from '~/server/trpc/context'
import { isAuthenticated } from '~/server/trpc/middleware'

const t = initTRPC.context<Context>().create() /** * Unprotected procedure **/
export const router = t.router
export const middleware = t.middleware

export const publicProcedure = t.procedure
export const protectedProcedure = t.procedure.use(isAuthenticated)
