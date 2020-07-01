import { db } from '../adapters/postgres'
import dedent from 'dedent'
// import { QueryResolvers } from '../__generated__/graphql'

export const getAllServices: any = async (
  _parent: any,
  _args: any
) => {
  return await db.manyOrNone(
    dedent`
    SELECT
      DISTINCT ON (s.id)
      s.id,
      s.name,
      s.contact,
      s.link,
        array_to_json( array_agg(row_to_json( c.*)) OVER ( partition by s.id )) AS categories
    FROM services s
      LEFT JOIN categories c
      ON c.id = ANY(s.categories)
  `
  )
}

export async function getServicesByCategory (categoryId: string) {
  return db.manyOrNone(
    dedent`
    SELECT
	    s.*
    FROM services s WHERE $1 = ANY(s.categories)
    `,
    [categoryId]
  )
}
