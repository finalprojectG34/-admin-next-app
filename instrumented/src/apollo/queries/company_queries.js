function cov_1bfruorxxs(){var path="C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\queries\\company_queries.js";var hash="9b911a4ab855a65cef80e668513f7e6e28a8d90f";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\queries\\company_queries.js",statementMap:{"0":{start:{line:3,column:31},end:{line:82,column:1}},"1":{start:{line:84,column:31},end:{line:94,column:1}}},fnMap:{},branchMap:{},s:{"0":0,"1":0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9b911a4ab855a65cef80e668513f7e6e28a8d90f"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1bfruorxxs=function(){return actualCoverage;};}return actualCoverage;}cov_1bfruorxxs();import{gql}from"@apollo/client";export const GET_ALL_COMPANY=(cov_1bfruorxxs().s[0]++,gql`
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
`);export const GET_ONE_COMPANY=(cov_1bfruorxxs().s[1]++,gql`
  query GetOneCompany($getOneCompanyId: String!) {
    getOneCompany(id: $getOneCompanyId) {
      id
      name
      description
      tinNumber
      phoneNumber
    }
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJHRVRfQUxMX0NPTVBBTlkiLCJHRVRfT05FX0NPTVBBTlkiXSwic291cmNlcyI6WyJjb21wYW55X3F1ZXJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWx9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfQ09NUEFOWSA9IGdxbGBcclxuICBxdWVyeSBHZXRBbGxDb21wYW5pZXMge1xyXG4gICAgZ2V0QWxsQ29tcGFuaWVzIHtcclxuICAgICAgaWRcclxuICAgICAgc2x1Z1xyXG4gICAgICBuYW1lXHJcbiAgICAgIG93bmVySWRcclxuICAgICAgYWRkcmVzcyB7XHJcbiAgICAgICAgbG9jYXRpb24ge1xyXG4gICAgICAgICAgY29vcmRpbmF0ZXNcclxuICAgICAgICAgIHR5cGVcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ViQ2l0eVxyXG4gICAgICAgIGNpdHlcclxuICAgICAgICBhZGRyZXNzTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHRpbk51bWJlclxyXG4gICAgICBoYXZlTGljZW5zZVxyXG4gICAgICBzdGF0dXNcclxuICAgICAgcG9zdGVyXHJcbiAgICAgIGltYWdlIHtcclxuICAgICAgICBpbWFnZXNcclxuICAgICAgICBiZ0ltYWdlXHJcbiAgICAgICAgaW1hZ2VDb3ZlclxyXG4gICAgICAgIHN1ZmZpeFxyXG4gICAgICAgIGltYWdlUGF0aFxyXG4gICAgICB9XHJcbiAgICAgIHNlbGxpbmdDYXRlZ29yaWVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNsdWdcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgcG9zdGVyXHJcbiAgICAgICAgcGF0aFxyXG4gICAgICAgIHBhcmVudElkXHJcbiAgICAgICAgcGFyZW50c1BhdGhcclxuICAgICAgICBzdWJDYXRlZ29yaWVzIHtcclxuICAgICAgICAgIHN1YkNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgcGF0aFxyXG4gICAgICAgICAgICBwYXJlbnRJZFxyXG4gICAgICAgICAgICBwb3N0ZXJcclxuICAgICAgICAgICAgcGFyZW50c1BhdGhcclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIHBvc3RlclxyXG4gICAgICAgICAgICAgIHBhdGhcclxuICAgICAgICAgICAgICBwYXJlbnRJZFxyXG4gICAgICAgICAgICAgIHBhcmVudHNQYXRoXHJcbiAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICBmYWNldHNcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgIGZhY2V0c1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNsdWdcclxuICAgICAgICAgIHBhdGhcclxuICAgICAgICAgIHBhcmVudElkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwb3N0ZXJcclxuICAgICAgICAgIHBhcmVudHNQYXRoXHJcbiAgICAgICAgICBmYWNldHNcclxuICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb3VudFxyXG4gICAgICAgIGZhY2V0c1xyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIH1cclxuICAgICAgY291bnRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX09ORV9DT01QQU5ZID0gZ3FsYFxyXG4gIHF1ZXJ5IEdldE9uZUNvbXBhbnkoJGdldE9uZUNvbXBhbnlJZDogU3RyaW5nISkge1xyXG4gICAgZ2V0T25lQ29tcGFueShpZDogJGdldE9uZUNvbXBhbnlJZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHRpbk51bWJlclxyXG4gICAgICBwaG9uZU51bWJlclxyXG4gICAgfVxyXG4gIH1cclxuYDsiXSwibWFwcGluZ3MiOiIyeUJBZVk7MkZBZlosT0FBUUEsR0FBUixLQUFrQixnQkFBbEIsQ0FFQSxNQUFPLE1BQU1DLGdCQUFlLDBCQUFHRCxHQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBL0U0QixDQUFyQixDQWlGUCxNQUFPLE1BQU1FLGdCQUFlLDBCQUFHRixHQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVjRCLENBQXJCIn0=