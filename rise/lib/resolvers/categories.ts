import { gql } from 'apollo-server-express'
import { QueryResolvers } from '../__generated__/graphql'
import { getCategories, getCategoryById } from '../services/categories'
import { getServicesByCategory } from '../services/riseServices'

export const typeDefs = gql`
  type Service {
    id: String!
    name: String!
    link: String!
    categories: [Category!]!
  }

  type Category {
    id: String!
    label: String!
    introduction: String!
    information: String!
    services: [Service]
  }

  extend type Query {
    categories: [Category!]!
    categoryAndRelated(id: String!): Category!
  }
`

interface Resolvers {
  Query: QueryResolvers
}

export const resolvers: Resolvers = {
  Query: {
    categories: () => getCategories(),
    categoryAndRelated: async (_, { id }) => {
      const category = await getCategoryById(id)
      const services = await getServicesByCategory(id)

      return {
        ...category,
        services
      }
    }
  },
}
