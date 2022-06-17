import { gql } from '@apollo/client'

export const GET_ALL_COMPANY = gql`
  query GetAllCompanies {
    getAllCompanies {
      id
      slug
      name
      ownerId
      address {
        location {
          coordinates
        }
        subCity
        city
        addressName
      }
      description
      tinNumber
      haveLicense
      status
      poster
      image {
        images
        bgImage
        imageCover
        suffix
        imagePath
      }
      count
    }
  }
`

export const GET_ONE_COMPANY = gql`
  query GetOneCompany($getOneCompanyId: String!) {
    getOneCompany(id: $getOneCompanyId) {
      id
      name
      description
      tinNumber
      phoneNumber
      status
      address {
        subCity
        city
        addressName
      }
    }
  }
`
