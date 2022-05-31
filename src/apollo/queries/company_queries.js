import {gql} from "@apollo/client";

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
          type
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
      sellingCategories {
        id
        slug
        name
        poster
        path
        parentId
        parentsPath
        subCategories {
          subCategories {
            id
            slug
            name
            path
            parentId
            poster
            parentsPath
            subCategories {
              id
              slug
              name
              poster
              path
              parentId
              parentsPath
              count
              facets
              description
            }
            count
            facets
            description
          }
          id
          slug
          path
          parentId
          name
          poster
          parentsPath
          facets
          count
          description
        }
        count
        facets
        description
      }
      count
    }
  }
`;