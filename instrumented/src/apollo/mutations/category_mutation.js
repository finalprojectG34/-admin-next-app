function cov_16cnj2qo5w(){var path="C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\mutations\\category_mutation.js";var hash="a58e952acb7f3cca859bb85c54e4cac0f460593c";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\mutations\\category_mutation.js",statementMap:{"0":{start:{line:3,column:31},end:{line:12,column:1}},"1":{start:{line:14,column:31},end:{line:20,column:1}},"2":{start:{line:22,column:31},end:{line:36,column:1}}},fnMap:{},branchMap:{},s:{"0":0,"1":0,"2":0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a58e952acb7f3cca859bb85c54e4cac0f460593c"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_16cnj2qo5w=function(){return actualCoverage;};}return actualCoverage;}cov_16cnj2qo5w();import{gql}from'@apollo/client';export const CREATE_CATEGORY=(cov_16cnj2qo5w().s[0]++,gql`
  mutation Mutation($input: CategoryInput!) {
    createCategory(input: $input) {
      id
      name
      path
      description
    }
  }
`);export const DELETE_CATEGORY=(cov_16cnj2qo5w().s[1]++,gql`
  mutation ($deleteCategoryId: ID!) {
    deleteCategory(id: $deleteCategoryId) {
      id
    }
  }
`);export const UPDATE_CATEGORY=(cov_16cnj2qo5w().s[2]++,gql`
  mutation ($input: CategoryInput!) {
    updateCategory(input: $input) {
      id
      description
      facets
      image
      name
      parentId
      parentsPath
      path
      slug
    }
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJDUkVBVEVfQ0FURUdPUlkiLCJERUxFVEVfQ0FURUdPUlkiLCJVUERBVEVfQ0FURUdPUlkiXSwic291cmNlcyI6WyJjYXRlZ29yeV9tdXRhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dxbH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9DQVRFR09SWSA9IGdxbGBcclxuICBtdXRhdGlvbiBNdXRhdGlvbigkaW5wdXQ6IENhdGVnb3J5SW5wdXQhKSB7XHJcbiAgICBjcmVhdGVDYXRlZ29yeShpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgcGF0aFxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ0FURUdPUlkgPSBncWxgXHJcbiAgbXV0YXRpb24gKCRkZWxldGVDYXRlZ29yeUlkOiBJRCEpIHtcclxuICAgIGRlbGV0ZUNhdGVnb3J5KGlkOiAkZGVsZXRlQ2F0ZWdvcnlJZCkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ0FURUdPUlkgPSBncWxgXHJcbiAgbXV0YXRpb24gKCRpbnB1dDogQ2F0ZWdvcnlJbnB1dCEpIHtcclxuICAgIHVwZGF0ZUNhdGVnb3J5KGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgaWRcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgZmFjZXRzXHJcbiAgICAgIGltYWdlXHJcbiAgICAgIG5hbWVcclxuICAgICAgcGFyZW50SWRcclxuICAgICAgcGFyZW50c1BhdGhcclxuICAgICAgcGF0aFxyXG4gICAgICBzbHVnXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iXSwibWFwcGluZ3MiOiJnM0JBZVk7MkZBZlosT0FBUUEsR0FBUixLQUFrQixnQkFBbEIsQ0FFQSxNQUFPLE1BQU1DLGdCQUFlLDBCQUFHRCxHQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVQ0QixDQUFyQixDQVdQLE1BQU8sTUFBTUUsZ0JBQWUsMEJBQUdGLEdBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTjRCLENBQXJCLENBUVAsTUFBTyxNQUFNRyxnQkFBZSwwQkFBR0gsR0FBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZDRCLENBQXJCIn0=