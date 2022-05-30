import {gql} from '@apollo/client';

export const CREATE_CATEGORY = gql`
  mutation Mutation($input: CategoryInput!) {
    createCategory(input: $input) {
      id
      name
      path
      description
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation ($deleteCategoryId: ID!) {
    deleteCategory(id: $deleteCategoryId) {
      id
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation ($input: CategoryInput!) {
    updateCategory(input: $input) {
      id
      description
      facets
      image
      name
      parentId
      parentsPath
      path
      slug
    }
  }
`;
