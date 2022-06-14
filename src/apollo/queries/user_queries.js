import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

export const GET_ONE_USER = gql`
  query ($getUserByIdId: String!) {
    getUserById(id: $getUserByIdId) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

export const SEARCH_USER = gql`
  query ($name: String!) {
    searchUserByName(name: $name) {
      id
      firstName
      lastName
      phone
      email
    }
  }
`
