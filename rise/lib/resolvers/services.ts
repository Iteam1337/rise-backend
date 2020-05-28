import { gql } from 'apollo-server-express'
import { QueryResolvers } from '../__generated__/graphql'

export const typeDefs = gql`
  type Service {
    id: String!
    name: String!
    link: String!
    categories: [Category]
  }

  extend type Query {
    services: [Service!]!
  }
`

interface Resolvers {
  Query: QueryResolvers
}

export const resolvers: Resolvers = {
  Query: {
    services: () => [
      {
        id: '1337-1337-1337',
        name: 'Mindfulness-appen',
        link: 'google.se',
        categories: [
          {
            id: '1337-1338',
            name: 'Mindfulness',
          },
        ],
      },
    ],
  },
}
