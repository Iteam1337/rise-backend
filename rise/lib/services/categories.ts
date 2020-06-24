import { db } from '../adapters/postgres'
import dedent from 'dedent'

export async function getCategories(): Promise<any[]> {
  return await db.manyOrNone(
    dedent`
    SELECT
      id,
      label,
      introduction,
      information
    FROM categories
  `
  )
}

export async function getCategoryById(categoryId: string): Promise<any[]> {
  return db.one(
    dedent`
        SELECT
      id,
      label,
      introduction,
      information
    FROM categories
    WHERE id = $1
    `,
    [categoryId]
  )
}
