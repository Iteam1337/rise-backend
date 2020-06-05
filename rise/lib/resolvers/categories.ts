import { gql } from 'apollo-server-express'
import { QueryResolvers } from '../__generated__/graphql'
import { mockCategories } from '../mocks'

export const typeDefs = gql`
  type Category {
    id: String!
    label: String!
  }

  extend type Query {
    categories: [Category!]!
  }
`

interface Resolvers {
  Query: QueryResolvers
}

export const resolvers: Resolvers = {
  Query: {
    categories: () => mockCategories,
  },
}
