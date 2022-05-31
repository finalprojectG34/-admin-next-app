import {gql} from "@apollo/client";

export const CREATE_COMPANY = gql`
  mutation Mutation($input: CompanyCreateInput!) {
    createCompany(input: $input) {
      id
      name
      ownerId
      address {
        location {
          type
          coordinates
        }
        subCity
        city
        addressName
      }
      description
      tinNumber
      image {
        images
        imageCover
        bgImage
        suffix
        imagePath
      }
      status
    }
  }
`;

export const DELETE_COMPANY = gql`
  mutation Mutation($deleteCompanyId: ID!) {
    deleteCompany(id: $deleteCompanyId) {
      id
      slug
      name
      ownerId
      description
      haveLicense
      tinNumber
    }
  }
`;