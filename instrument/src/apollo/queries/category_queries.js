function cov_xsoygkdti(){var path="C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\queries\\category_queries.js";var hash="fa2360455f17eb6eedf5b9840d9438b1e9bab53a";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\queries\\category_queries.js",statementMap:{"0":{start:{line:3,column:34},end:{line:16,column:1}},"1":{start:{line:18,column:32},end:{line:26,column:1}}},fnMap:{},branchMap:{},s:{"0":0,"1":0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"fa2360455f17eb6eedf5b9840d9438b1e9bab53a"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_xsoygkdti=function(){return actualCoverage;};}return actualCoverage;}cov_xsoygkdti();import{gql}from'@apollo/client';export const GET_ALL_CATEGORIES=(cov_xsoygkdti().s[0]++,gql`
  query {
    getAllCategories {
      id
      description
      facets
      name
      parentId
      parentsPath
      path
      slug
    }
  }
`);export const GET_ONE_CATEGORY=(cov_xsoygkdti().s[1]++,gql`
  query Query($getOneCategoryId: String!) {
    getOneCategory(id: $getOneCategoryId) {
      id
      name
      description
    }
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJHRVRfQUxMX0NBVEVHT1JJRVMiLCJHRVRfT05FX0NBVEVHT1JZIl0sInNvdXJjZXMiOlsiY2F0ZWdvcnlfcXVlcmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dxbH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfQ0FURUdPUklFUyA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBnZXRBbGxDYXRlZ29yaWVzIHtcclxuICAgICAgaWRcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgZmFjZXRzXHJcbiAgICAgIG5hbWVcclxuICAgICAgcGFyZW50SWRcclxuICAgICAgcGFyZW50c1BhdGhcclxuICAgICAgcGF0aFxyXG4gICAgICBzbHVnXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9PTkVfQ0FURUdPUlkgPSBncWxgXHJcbiAgcXVlcnkgUXVlcnkoJGdldE9uZUNhdGVnb3J5SWQ6IFN0cmluZyEpIHtcclxuICAgIGdldE9uZUNhdGVnb3J5KGlkOiAkZ2V0T25lQ2F0ZWdvcnlJZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iXSwibWFwcGluZ3MiOiI0eUJBZVk7eUZBZlosT0FBUUEsR0FBUixLQUFrQixnQkFBbEIsQ0FFQSxNQUFPLE1BQU1DLG1CQUFrQix5QkFBR0QsR0FBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWIrQixDQUF4QixDQWVQLE1BQU8sTUFBTUUsaUJBQWdCLHlCQUFHRixHQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSNkIsQ0FBdEIifQ==