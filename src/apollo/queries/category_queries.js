import {gql} from '@apollo/client'

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
export const SEARCH_CATEGORY_BY_NAME = gql`
query($name: String) {
  searchCategoryByName(name: $name) {
    id
    slug
    name
    image {
      imagePath
    }
    poster
    description
    path
    parentId
    haveSubCtg
    canHaveItems
    count
  }
}
`