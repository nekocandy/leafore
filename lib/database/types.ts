import type { ColumnType } from 'kysely'

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

export interface DeedRewards {
  id: string
  name: string
  createdAt: Generated<Timestamp>
  updatedAt: Timestamp
}
export interface Deeds {
  id: string
  name: string
  createdAt: Generated<Timestamp>
  updatedAt: Timestamp
}
export interface DB {
  DeedRewards: DeedRewards
  Deeds: Deeds
}
