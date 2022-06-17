import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      firstName
      lastName
      email
      phone
      role
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
      role
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
      role
    }
  }
`

export const CURRENT_USER = gql`
  query GetMe {
    getMe {
      id
      firstName
      lastName
      phone
      role
      shopId
      email
      carts
      roles
      shopIds
      fullName
      address {
        location {
          coordinates
        }
        subCity
        city
        addressName
        country
      }
      image {
        images
        bgImage
        imageCover
        suffix
        imagePath
      }
    }
  }
`
