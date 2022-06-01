function cov_2ed6katulu(){var path="C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\instrument\\src\\apollo\\queries\\company_queries.js";var hash="df2427694693b0cd45e2ee9418afc0752dc7ea0f";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\instrument\\src\\apollo\\queries\\company_queries.js",statementMap:{"0":{start:{line:1,column:35},end:{line:1,column:135}},"1":{start:{line:1,column:145},end:{line:1,column:187}},"2":{start:{line:1,column:199},end:{line:1,column:228}},"3":{start:{line:1,column:237},end:{line:1,column:251}},"4":{start:{line:1,column:269},end:{line:1,column:655}},"5":{start:{line:1,column:669},end:{line:1,column:698}},"6":{start:{line:1,column:699},end:{line:1,column:776}},"7":{start:{line:1,column:747},end:{line:1,column:775}},"8":{start:{line:1,column:795},end:{line:1,column:809}},"9":{start:{line:2,column:0},end:{line:2,column:50}},"10":{start:{line:2,column:26},end:{line:2,column:48}},"11":{start:{line:2,column:51},end:{line:2,column:73}},"12":{start:{line:2,column:74},end:{line:2,column:91}},"13":{start:{line:2,column:153},end:{line:81,column:1}},"14":{start:{line:81,column:33},end:{line:91,column:1}}},fnMap:{"0":{name:"cov_1bfruorxxs",decl:{start:{line:1,column:9},end:{line:1,column:23}},loc:{start:{line:1,column:25},end:{line:2,column:74}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:2,column:15},end:{line:2,column:16}},loc:{start:{line:2,column:25},end:{line:2,column:49}},line:2}},branchMap:{"0":{loc:{start:{line:1,column:669},end:{line:1,column:698}},type:"binary-expr",locations:[{start:{line:1,column:669},end:{line:1,column:680}},{start:{line:1,column:683},end:{line:1,column:697}}],line:1},"1":{loc:{start:{line:1,column:699},end:{line:1,column:776}},type:"if",locations:[{start:{line:1,column:699},end:{line:1,column:776}},{start:{line:1,column:699},end:{line:1,column:776}}],line:1},"2":{loc:{start:{line:1,column:702},end:{line:1,column:745}},type:"binary-expr",locations:[{start:{line:1,column:702},end:{line:1,column:717}},{start:{line:1,column:719},end:{line:1,column:745}}],line:1}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},inputSourceMap:{version:3,names:["gql","GET_ALL_COMPANY","GET_ONE_COMPANY"],sources:["company_queries.js"],sourcesContent:["import {gql} from \"@apollo/client\";\r\n\r\nexport const GET_ALL_COMPANY = gql`\r\n  query GetAllCompanies {\r\n    getAllCompanies {\r\n      id\r\n      slug\r\n      name\r\n      ownerId\r\n      address {\r\n        location {\r\n          coordinates\r\n          type\r\n        }\r\n        subCity\r\n        city\r\n        addressName\r\n      }\r\n      description\r\n      tinNumber\r\n      haveLicense\r\n      status\r\n      poster\r\n      image {\r\n        images\r\n        bgImage\r\n        imageCover\r\n        suffix\r\n        imagePath\r\n      }\r\n      sellingCategories {\r\n        id\r\n        slug\r\n        name\r\n        poster\r\n        path\r\n        parentId\r\n        parentsPath\r\n        subCategories {\r\n          subCategories {\r\n            id\r\n            slug\r\n            name\r\n            path\r\n            parentId\r\n            poster\r\n            parentsPath\r\n            subCategories {\r\n              id\r\n              slug\r\n              name\r\n              poster\r\n              path\r\n              parentId\r\n              parentsPath\r\n              count\r\n              facets\r\n              description\r\n            }\r\n            count\r\n            facets\r\n            description\r\n          }\r\n          id\r\n          slug\r\n          path\r\n          parentId\r\n          name\r\n          poster\r\n          parentsPath\r\n          facets\r\n          count\r\n          description\r\n        }\r\n        count\r\n        facets\r\n        description\r\n      }\r\n      count\r\n    }\r\n  }\r\n`;\r\n\r\nexport const GET_ONE_COMPANY = gql`\r\n  query GetOneCompany($getOneCompanyId: String!) {\r\n    getOneCompany(id: $getOneCompanyId) {\r\n      id\r\n      name\r\n      description\r\n      tinNumber\r\n      phoneNumber\r\n    }\r\n  }\r\n`;"],mappings:"2yBAeY;2FAfZ,OAAQA,GAAR,KAAkB,gBAAlB,CAEA,MAAO,MAAMC,gBAAe,0BAAGD,GAAI;AACnC;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA,CA/E4B,CAArB,CAiFP,MAAO,MAAME,gBAAe,0BAAGF,GAAI;AACnC;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA,CAV4B,CAArB"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"df2427694693b0cd45e2ee9418afc0752dc7ea0f"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2ed6katulu=function(){return actualCoverage;};}return actualCoverage;}cov_2ed6katulu();function cov_1bfruorxxs(){cov_2ed6katulu().f[0]++;var path=(cov_2ed6katulu().s[0]++,"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\queries\\company_queries.js");var hash=(cov_2ed6katulu().s[1]++,"9b911a4ab855a65cef80e668513f7e6e28a8d90f");var global=(cov_2ed6katulu().s[2]++,new Function("return this")());var gcv=(cov_2ed6katulu().s[3]++,"__coverage__");var coverageData=(cov_2ed6katulu().s[4]++,{path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\queries\\company_queries.js",statementMap:{"0":{start:{line:3,column:31},end:{line:82,column:1}},"1":{start:{line:84,column:31},end:{line:94,column:1}}},fnMap:{},branchMap:{},s:{"0":0,"1":0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9b911a4ab855a65cef80e668513f7e6e28a8d90f"});var coverage=(cov_2ed6katulu().s[5]++,(cov_2ed6katulu().b[0][0]++,global[gcv])||(cov_2ed6katulu().b[0][1]++,global[gcv]={}));cov_2ed6katulu().s[6]++;if((cov_2ed6katulu().b[2][0]++,!coverage[path])||(cov_2ed6katulu().b[2][1]++,coverage[path].hash!==hash)){cov_2ed6katulu().b[1][0]++;cov_2ed6katulu().s[7]++;coverage[path]=coverageData;}else{cov_2ed6katulu().b[1][1]++;}var actualCoverage=(cov_2ed6katulu().s[8]++,coverage[path]);{cov_2ed6katulu().s[9]++;// @ts-ignore
cov_1bfruorxxs=function(){cov_2ed6katulu().f[1]++;cov_2ed6katulu().s[10]++;return actualCoverage;};}cov_2ed6katulu().s[11]++;return actualCoverage;}cov_2ed6katulu().s[12]++;cov_1bfruorxxs();import{gql}from"@apollo/client";export const GET_ALL_COMPANY=(cov_2ed6katulu().s[13]++,(cov_1bfruorxxs().s[0]++,gql`
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
`));export const GET_ONE_COMPANY=(cov_2ed6katulu().s[14]++,(cov_1bfruorxxs().s[1]++,gql`
  query GetOneCompany($getOneCompanyId: String!) {
    getOneCompany(id: $getOneCompanyId) {
      id
      name
      description
      tinNumber
      phoneNumber
    }
  }
`));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJHRVRfQUxMX0NPTVBBTlkiLCJHRVRfT05FX0NPTVBBTlkiXSwic291cmNlcyI6WyJjb21wYW55X3F1ZXJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWx9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfQ09NUEFOWSA9IGdxbGBcclxuICBxdWVyeSBHZXRBbGxDb21wYW5pZXMge1xyXG4gICAgZ2V0QWxsQ29tcGFuaWVzIHtcclxuICAgICAgaWRcclxuICAgICAgc2x1Z1xyXG4gICAgICBuYW1lXHJcbiAgICAgIG93bmVySWRcclxuICAgICAgYWRkcmVzcyB7XHJcbiAgICAgICAgbG9jYXRpb24ge1xyXG4gICAgICAgICAgY29vcmRpbmF0ZXNcclxuICAgICAgICAgIHR5cGVcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ViQ2l0eVxyXG4gICAgICAgIGNpdHlcclxuICAgICAgICBhZGRyZXNzTmFtZVxyXG4gICAgICB9XHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHRpbk51bWJlclxyXG4gICAgICBoYXZlTGljZW5zZVxyXG4gICAgICBzdGF0dXNcclxuICAgICAgcG9zdGVyXHJcbiAgICAgIGltYWdlIHtcclxuICAgICAgICBpbWFnZXNcclxuICAgICAgICBiZ0ltYWdlXHJcbiAgICAgICAgaW1hZ2VDb3ZlclxyXG4gICAgICAgIHN1ZmZpeFxyXG4gICAgICAgIGltYWdlUGF0aFxyXG4gICAgICB9XHJcbiAgICAgIHNlbGxpbmdDYXRlZ29yaWVzIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIHNsdWdcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgcG9zdGVyXHJcbiAgICAgICAgcGF0aFxyXG4gICAgICAgIHBhcmVudElkXHJcbiAgICAgICAgcGFyZW50c1BhdGhcclxuICAgICAgICBzdWJDYXRlZ29yaWVzIHtcclxuICAgICAgICAgIHN1YkNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgcGF0aFxyXG4gICAgICAgICAgICBwYXJlbnRJZFxyXG4gICAgICAgICAgICBwb3N0ZXJcclxuICAgICAgICAgICAgcGFyZW50c1BhdGhcclxuICAgICAgICAgICAgc3ViQ2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIHBvc3RlclxyXG4gICAgICAgICAgICAgIHBhdGhcclxuICAgICAgICAgICAgICBwYXJlbnRJZFxyXG4gICAgICAgICAgICAgIHBhcmVudHNQYXRoXHJcbiAgICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgICBmYWNldHNcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICAgIGZhY2V0c1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIHNsdWdcclxuICAgICAgICAgIHBhdGhcclxuICAgICAgICAgIHBhcmVudElkXHJcbiAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICBwb3N0ZXJcclxuICAgICAgICAgIHBhcmVudHNQYXRoXHJcbiAgICAgICAgICBmYWNldHNcclxuICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb3VudFxyXG4gICAgICAgIGZhY2V0c1xyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIH1cclxuICAgICAgY291bnRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX09ORV9DT01QQU5ZID0gZ3FsYFxyXG4gIHF1ZXJ5IEdldE9uZUNvbXBhbnkoJGdldE9uZUNvbXBhbnlJZDogU3RyaW5nISkge1xyXG4gICAgZ2V0T25lQ29tcGFueShpZDogJGdldE9uZUNvbXBhbnlJZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHRpbk51bWJlclxyXG4gICAgICBwaG9uZU51bWJlclxyXG4gICAgfVxyXG4gIH1cclxuYDsiXSwibWFwcGluZ3MiOiIyeUJBZVk7MkZBZlosT0FBUUEsR0FBUixLQUFrQixnQkFBbEIsQ0FFQSxNQUFPLE1BQU1DLGdCQUFlLDBCQUFHRCxHQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBL0U0QixDQUFyQixDQWlGUCxNQUFPLE1BQU1FLGdCQUFlLDBCQUFHRixHQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVjRCLENBQXJCIn0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjhpS0FnQkE7MDBDQURZOzhMQWZaLE9BQVFBLEdBQVIsS0FBa0IsZ0JBQWxCLENBRUEsTUFBTyxNQUFNQyxnQkFBZSxvREFBR0QsR0FBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQS9FNEIsRUFBckIsQ0FpRlAsTUFBTyxNQUFNRSxnQkFBZSxvREFBR0YsR0FBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVY0QixFQUFyQiIsIm5hbWVzIjpbImdxbCIsIkdFVF9BTExfQ09NUEFOWSIsIkdFVF9PTkVfQ09NUEFOWSJdLCJzb3VyY2VzIjpbImNvbXBhbnlfcXVlcmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dxbH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0FMTF9DT01QQU5ZID0gZ3FsYFxyXG4gIHF1ZXJ5IEdldEFsbENvbXBhbmllcyB7XHJcbiAgICBnZXRBbGxDb21wYW5pZXMge1xyXG4gICAgICBpZFxyXG4gICAgICBzbHVnXHJcbiAgICAgIG5hbWVcclxuICAgICAgb3duZXJJZFxyXG4gICAgICBhZGRyZXNzIHtcclxuICAgICAgICBsb2NhdGlvbiB7XHJcbiAgICAgICAgICBjb29yZGluYXRlc1xyXG4gICAgICAgICAgdHlwZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdWJDaXR5XHJcbiAgICAgICAgY2l0eVxyXG4gICAgICAgIGFkZHJlc3NOYW1lXHJcbiAgICAgIH1cclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgdGluTnVtYmVyXHJcbiAgICAgIGhhdmVMaWNlbnNlXHJcbiAgICAgIHN0YXR1c1xyXG4gICAgICBwb3N0ZXJcclxuICAgICAgaW1hZ2Uge1xyXG4gICAgICAgIGltYWdlc1xyXG4gICAgICAgIGJnSW1hZ2VcclxuICAgICAgICBpbWFnZUNvdmVyXHJcbiAgICAgICAgc3VmZml4XHJcbiAgICAgICAgaW1hZ2VQYXRoXHJcbiAgICAgIH1cclxuICAgICAgc2VsbGluZ0NhdGVnb3JpZXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgc2x1Z1xyXG4gICAgICAgIG5hbWVcclxuICAgICAgICBwb3N0ZXJcclxuICAgICAgICBwYXRoXHJcbiAgICAgICAgcGFyZW50SWRcclxuICAgICAgICBwYXJlbnRzUGF0aFxyXG4gICAgICAgIHN1YkNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgc3ViQ2F0ZWdvcmllcyB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBwYXRoXHJcbiAgICAgICAgICAgIHBhcmVudElkXHJcbiAgICAgICAgICAgIHBvc3RlclxyXG4gICAgICAgICAgICBwYXJlbnRzUGF0aFxyXG4gICAgICAgICAgICBzdWJDYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgcG9zdGVyXHJcbiAgICAgICAgICAgICAgcGF0aFxyXG4gICAgICAgICAgICAgIHBhcmVudElkXHJcbiAgICAgICAgICAgICAgcGFyZW50c1BhdGhcclxuICAgICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICAgIGZhY2V0c1xyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY291bnRcclxuICAgICAgICAgICAgZmFjZXRzXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgcGF0aFxyXG4gICAgICAgICAgcGFyZW50SWRcclxuICAgICAgICAgIG5hbWVcclxuICAgICAgICAgIHBvc3RlclxyXG4gICAgICAgICAgcGFyZW50c1BhdGhcclxuICAgICAgICAgIGZhY2V0c1xyXG4gICAgICAgICAgY291bnRcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvdW50XHJcbiAgICAgICAgZmFjZXRzXHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgfVxyXG4gICAgICBjb3VudFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfT05FX0NPTVBBTlkgPSBncWxgXHJcbiAgcXVlcnkgR2V0T25lQ29tcGFueSgkZ2V0T25lQ29tcGFueUlkOiBTdHJpbmchKSB7XHJcbiAgICBnZXRPbmVDb21wYW55KGlkOiAkZ2V0T25lQ29tcGFueUlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgdGluTnVtYmVyXHJcbiAgICAgIHBob25lTnVtYmVyXHJcbiAgICB9XHJcbiAgfVxyXG5gOyJdfQ==