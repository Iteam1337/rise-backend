import { gql } from 'apollo-server-express'
import {
  getArticles,
  getArticleById,
  featuredArticle,
} from '../services/articles'

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
    featuredArticle: Article
    articles: [Article!]!
    article(id: String!): Article!
  }
`

export const resolvers = {
  Query: {
    featuredArticle,
    articles: getArticles,
    article: async (_: any, { id }: { id: string }) => getArticleById(id),
  },
}
