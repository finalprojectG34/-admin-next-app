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
      slug
      name
      description
      phoneNumber
      tinNumber
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
      poster
      ownerId
      haveLicense
      status
      sellingCategories
      count
    }
  }
`
export const FILTER_COMPANY = gql`
query Query($input: CompanyFilter) {
  getAllCompanies(input: $input) {
    id
    name
    status
    slug
    description
    phoneNumber
    tinNumber
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
    poster
    ownerId
    haveLicense
    sellingCategories
    count
    role
  }
}
`