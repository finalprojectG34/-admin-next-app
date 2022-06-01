function cov_1j93wwd7nd(){var path="C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\queries\\user_queries.js";var hash="5bb3326a416a863f95d8061b3fc4b78615611fa5";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\queries\\user_queries.js",statementMap:{"0":{start:{line:3,column:29},end:{line:13,column:1}},"1":{start:{line:15,column:28},end:{line:25,column:1}}},fnMap:{},branchMap:{},s:{"0":0,"1":0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5bb3326a416a863f95d8061b3fc4b78615611fa5"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1j93wwd7nd=function(){return actualCoverage;};}return actualCoverage;}cov_1j93wwd7nd();import{gql}from'@apollo/client';export const GET_ALL_USERS=(cov_1j93wwd7nd().s[0]++,gql`
  query {
    getAllUsers {
      id
      firstName
      lastName
      email
      phone
    }
  }
`);export const GET_ONE_USER=(cov_1j93wwd7nd().s[1]++,gql`
  query ($getUserByIdId: String!) {
    getUserById(id: $getUserByIdId) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJHRVRfQUxMX1VTRVJTIiwiR0VUX09ORV9VU0VSIl0sInNvdXJjZXMiOlsidXNlcl9xdWVyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z3FsfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0FMTF9VU0VSUyA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBnZXRBbGxVc2VycyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGZpcnN0TmFtZVxyXG4gICAgICBsYXN0TmFtZVxyXG4gICAgICBlbWFpbFxyXG4gICAgICBwaG9uZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfT05FX1VTRVIgPSBncWxgXHJcbiAgcXVlcnkgKCRnZXRVc2VyQnlJZElkOiBTdHJpbmchKSB7XHJcbiAgICBnZXRVc2VyQnlJZChpZDogJGdldFVzZXJCeUlkSWQpIHtcclxuICAgICAgaWRcclxuICAgICAgZmlyc3ROYW1lXHJcbiAgICAgIGxhc3ROYW1lXHJcbiAgICAgIGVtYWlsXHJcbiAgICAgIHBob25lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iXSwibWFwcGluZ3MiOiJxeUJBZVk7MkZBZlosT0FBUUEsR0FBUixLQUFrQixnQkFBbEIsQ0FFQSxNQUFPLE1BQU1DLGNBQWEsMEJBQUdELEdBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWMEIsQ0FBbkIsQ0FZUCxNQUFPLE1BQU1FLGFBQVksMEJBQUdGLEdBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWeUIsQ0FBbEIifQ==