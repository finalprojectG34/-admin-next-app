import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation Mutation($input: UserCreateInput!) {
    createUser(input: $input) {
      id
      firstName
      lastName
      phone
      email
    }
  }
`

export const UPDATE_USER = gql`
  mutation ($updateUserId: String, $input: UserUpdateInput!) {
    updateUser(id: $updateUserId, input: $input) {
      id
      firstName
      lastName
      phone
      email
    }
  }
`

export const DELETE_USER = gql`
  mutation ($deleteUserId: String!) {
    deleteUser(id: $deleteUserId) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

export const SIGN_UP = gql`
  mutation Mutation($token: PhoneSignupInput) {
    authPhoneAndRegister(token: $token) {
      user {
        id
        firstName
        lastName
        phone
        email
      }
      token
    }
  }
`

export const SIGN_IN = gql`
  mutation Login($input: loginInput!) {
    login(input: $input) {
      user {
        phone
        id
        firstName
        lastName
        email
      }
      token
    }
  }
`
