import { db } from '../adapters/postgres'
import dedent from 'dedent'
import camelcaseKeys from 'camelcase-keys'

export async function getArticles(): Promise<any[]> {
  const data = await db.manyOrNone(
    dedent`
      SELECT
        a.title
        ,a.type
        ,a.url
        ,a.video_url
        ,a.img_url
        ,a.introduction
        ,a.text
        ,array_to_json( array_agg(row_to_json( c.*)) OVER ( partition by a.id )) AS categories
      FROM articles a
        LEFT JOIN categories c
        ON c.id = ANY(a.categories)
  `
  )

  return camelcaseKeys(data)
}
