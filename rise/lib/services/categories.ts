import { db } from '../adapters/postgres'
import dedent from 'dedent'
import { QueryResolvers, Category } from '../__generated__/graphql'

export const getCategories: QueryResolvers['categories'] = async (
  _parent,
  _args
) => {
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

export async function getCategoryById(categoryId: string): Promise<Category | null> {
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
