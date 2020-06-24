import { gql } from 'apollo-server-express'
import { QueryResolvers } from '../__generated__/graphql'
import { getArticles } from '../services/articles'

export const typeDefs = gql`
  type Article {
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

interface Resolvers {
  Query: QueryResolvers
}

export const resolvers: Resolvers = {
  Query: {
    articles: () => getArticles(),
  },
}
