import { gql } from 'apollo-server-express'
import { getArticles } from '../services/articles'

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
  }
`

export const resolvers = {
  Query: {
    articles: getArticles
  },
}
