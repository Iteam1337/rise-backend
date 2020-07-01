import { db } from '../adapters/postgres'
import dedent from 'dedent'
import { QueryResolvers, Category } from '../__generated__/graphql'
import camelcaseKeys from 'camelcase-keys'

export const getCategories: QueryResolvers['categories'] = async (
  _parent,
  _args
) => {
  const data = await db.manyOrNone(
    dedent`
    SELECT
      id,
      label,
      introduction,
      information,
      image_url,
      thumbnail_url
    FROM categories
  `
  )

  return camelcaseKeys(data)
}

export async function getCategoryById(categoryId: string): Promise<Category | null> {
  const data = await db.one(
    dedent`
        SELECT
      id,
      label,
      introduction,
      information,
      image_url,
      thumbnail_url
    FROM categories
    WHERE id = $1
    `,
    [categoryId]
  )

  console.log(data)

  return camelcaseKeys(data)
}
