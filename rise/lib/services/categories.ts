import { db } from '../adapters/postgres'
import dedent from 'dedent'
import { QueryResolvers } from '../__generated__/graphql'

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
