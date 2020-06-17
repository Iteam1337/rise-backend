import { db } from '../adapters/postgres'
import dedent from 'dedent'


export async function getCategories(): Promise<any[]> {
  return await db.manyOrNone(
    dedent`
    SELECT
      id,
      label
    FROM categories
  `)
}