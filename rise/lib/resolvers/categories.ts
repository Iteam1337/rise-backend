import { gql } from 'apollo-server-express'
import { QueryResolvers } from '../__generated__/graphql'

export const typeDefs = gql`
  type Category {
    id: String!
    name: String!
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
    categories: () => [
      {
        id: '1337-1337-1337',
        name: 'träning',
      },
    ],
  },
}
