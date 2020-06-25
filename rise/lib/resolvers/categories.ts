import { gql } from 'apollo-server-express'
import { getCategories } from '../services/categories'

export const typeDefs = gql`
  type Category {
    id: String!
    label: String!
    introduction: String!
    information: String!
  }

  extend type Query {
    categories: [Category!]!
  }
`

export const resolvers = {
  Query: {
    categories: getCategories,
  },
}
