import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

import type { DB } from './types'

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: import.meta.env.DATABASE_URL,
  }),
})

export const db = new Kysely<DB>({
  dialect,
})
