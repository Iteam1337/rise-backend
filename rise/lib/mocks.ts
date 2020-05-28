import { Category, Service } from './__generated__/graphql'

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Peer to peer',
  },
  {
    id: '2',
    name: 'Information',
  },
  {
    id: '3',
    name: 'Öva upp färdighet',
  },
]

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Mindfulness-appen',
    link: 'google.se',
    categories: [mockCategories[0], mockCategories[2]],
  },
  {
    id: '2',
    name: 'Må Bra',
    link: 'google.se',
    categories: [mockCategories[1]],
  },
]
