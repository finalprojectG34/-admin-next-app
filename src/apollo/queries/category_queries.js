import { gql } from '@apollo/client'

export const GET_ALL_CATEGORIES = gql`
  query {
    getAllCategories {
      id
      description
      name
      parentId
      path
      slug
    }
  }
`

export const GET_ONE_CATEGORY = gql`
  query Query($getOneCategoryId: String!) {
    getOneCategory(id: $getOneCategoryId) {
      id
      name
      description
    }
  }
`
