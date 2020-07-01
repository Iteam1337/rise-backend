import { gql } from 'apollo-server-express'
import { getArticles, getArticleById } from '../services/articles'

export const typeDefs = gql`
  type Article {
    id: String!
    title: String!
    type: String!
    url: String!
    videoUrl: String!
    imgUrl: String!
    categories: [Category!]!
    introduction: String!
    text: String!
  }

  extend type Query {
    articles: [Article!]!
    article(id: String!): Article!
  }
`

export const resolvers = {
  Query: {
    articles: getArticles,
    article: async (_: any, { id }: { id: string }) => getArticleById(id)
  },
}
