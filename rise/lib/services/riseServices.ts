import { db } from '../adapters/postgres'
import dedent from 'dedent'


export async function getAllServices(): Promise<any[]> {
  const abba = await db.manyOrNone(
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
  `)

  console.log(abba)
  return abba
}
