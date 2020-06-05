import { gql } from 'apollo-server-express'
import { QueryResolvers } from '../__generated__/graphql'
import { getCategories } from '../services/categories'

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
    categories: () => getCategories(),
  },
}
