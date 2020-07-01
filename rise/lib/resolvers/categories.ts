import { gql } from 'apollo-server-express'
import { getCategories, getCategoryById } from '../services/categories'
import { getServicesByCategory } from '../services/riseServices'

export const typeDefs = gql`
  type Image {
    thumbnailUrl: String!
    imageUrl: String!
  }

  type Service {
    id: String!
    name: String!
    link: String!
    categories: [Category!]!
  }

  type Category {
    id: String!
    label: String!
    image: Image
    introduction: String!
    information: String!
    services: [Service]
  }

  extend type Query {
    categories: [Category!]!
    categoryAndRelated(id: String!): Category
  }
`

export const resolvers = {
  Query: {
    categories: getCategories,
    categoryAndRelated: async (_: any, { id }: { id: string }) => {
      const category = await getCategoryById(id)
      const services = await getServicesByCategory(id)

      return {
        ...category,
        services,
      }
    },
  },
}
