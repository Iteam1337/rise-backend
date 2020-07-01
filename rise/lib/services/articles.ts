import { db } from '../adapters/postgres'
import dedent from 'dedent'
import camelcaseKeys from 'camelcase-keys'
import { Article } from '../__generated__/graphql'

export async function getArticles(): Promise<Article[]> {
  const data = await db.manyOrNone(
    dedent`
      SELECT
        a.id
        ,a.title
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

export async function getArticleById(articleId: string): Promise<Article> {
  const data = await db.one(
    dedent`
      SELECT
        a.id
        ,a.title
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
      WHERE a.id = $1
  `,
    [articleId]
  )

  return camelcaseKeys(data)
}