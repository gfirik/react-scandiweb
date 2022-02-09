import { gql } from '@apollo/client'

export const CATEGORIES = gql`
  query Query {
    categories {
      name
      products {
        id
        name
        inStock
        description
        gallery
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency
          amount
        }
        brand
      }
    }
    currencies
  }
`;