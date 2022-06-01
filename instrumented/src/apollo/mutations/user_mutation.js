function cov_od1cefhf4(){var path="C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\mutations\\user_mutation.js";var hash="e658f836cefdc2914df9eaf8a1b8c268f903311c";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\mutations\\user_mutation.js",statementMap:{"0":{start:{line:3,column:27},end:{line:14,column:1}},"1":{start:{line:16,column:27},end:{line:26,column:1}},"2":{start:{line:28,column:27},end:{line:38,column:1}},"3":{start:{line:40,column:23},end:{line:54,column:1}},"4":{start:{line:56,column:23},end:{line:70,column:1}}},fnMap:{},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e658f836cefdc2914df9eaf8a1b8c268f903311c"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_od1cefhf4=function(){return actualCoverage;};}return actualCoverage;}cov_od1cefhf4();import{gql}from'@apollo/client';export const CREATE_USER=(cov_od1cefhf4().s[0]++,gql`
  mutation Mutation($input: UserCreateInput!) {
    createUser(input: $input) {
      id
      firstName
      lastName
      phone
      password
      email
    }
  }
`);export const UPDATE_USER=(cov_od1cefhf4().s[1]++,gql`
  mutation ($input: UserInput!) {
    updateUser(input: $input) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`);export const DELETE_USER=(cov_od1cefhf4().s[2]++,gql`
  mutation ($deleteUserId: String!) {
    deleteUser(id: $deleteUserId) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`);export const SIGN_UP=(cov_od1cefhf4().s[3]++,gql`
  mutation Mutation($token: PhoneSignupInput) {
    authPhoneAndRegister(token: $token) {
      user {
        id
        firstName
        lastName
        phone
        password
        email
      }
      token
    }
  }
`);export const SIGN_IN=(cov_od1cefhf4().s[4]++,gql`
  mutation Login($input: loginInput!) {
    login(input: $input) {
      user {
        phone
        id
        firstName
        lastName
        password
        email
      }
      token
    }
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJDUkVBVEVfVVNFUiIsIlVQREFURV9VU0VSIiwiREVMRVRFX1VTRVIiLCJTSUdOX1VQIiwiU0lHTl9JTiJdLCJzb3VyY2VzIjpbInVzZXJfbXV0YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWx9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfVVNFUiA9IGdxbGBcclxuICBtdXRhdGlvbiBNdXRhdGlvbigkaW5wdXQ6IFVzZXJDcmVhdGVJbnB1dCEpIHtcclxuICAgIGNyZWF0ZVVzZXIoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICBpZFxyXG4gICAgICBmaXJzdE5hbWVcclxuICAgICAgbGFzdE5hbWVcclxuICAgICAgcGhvbmVcclxuICAgICAgcGFzc3dvcmRcclxuICAgICAgZW1haWxcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVIgPSBncWxgXHJcbiAgbXV0YXRpb24gKCRpbnB1dDogVXNlcklucHV0ISkge1xyXG4gICAgdXBkYXRlVXNlcihpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGZpcnN0TmFtZVxyXG4gICAgICBsYXN0TmFtZVxyXG4gICAgICBlbWFpbFxyXG4gICAgICBwaG9uZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUiA9IGdxbGBcclxuICBtdXRhdGlvbiAoJGRlbGV0ZVVzZXJJZDogU3RyaW5nISkge1xyXG4gICAgZGVsZXRlVXNlcihpZDogJGRlbGV0ZVVzZXJJZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBmaXJzdE5hbWVcclxuICAgICAgbGFzdE5hbWVcclxuICAgICAgZW1haWxcclxuICAgICAgcGhvbmVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUCA9IGdxbGBcclxuICBtdXRhdGlvbiBNdXRhdGlvbigkdG9rZW46IFBob25lU2lnbnVwSW5wdXQpIHtcclxuICAgIGF1dGhQaG9uZUFuZFJlZ2lzdGVyKHRva2VuOiAkdG9rZW4pIHtcclxuICAgICAgdXNlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgIHBob25lXHJcbiAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICBlbWFpbFxyXG4gICAgICB9XHJcbiAgICAgIHRva2VuXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fSU4gPSBncWxgXHJcbiAgbXV0YXRpb24gTG9naW4oJGlucHV0OiBsb2dpbklucHV0ISkge1xyXG4gICAgbG9naW4oaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICB1c2VyIHtcclxuICAgICAgICBwaG9uZVxyXG4gICAgICAgIGlkXHJcbiAgICAgICAgZmlyc3ROYW1lXHJcbiAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgIH1cclxuICAgICAgdG9rZW5cclxuICAgIH1cclxuICB9XHJcbmA7Il0sIm1hcHBpbmdzIjoiaStCQWVZO3lGQWZaLE9BQVFBLEdBQVIsS0FBa0IsZ0JBQWxCLENBRUEsTUFBTyxNQUFNQyxZQUFXLHlCQUFHRCxHQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYd0IsQ0FBakIsQ0FhUCxNQUFPLE1BQU1FLFlBQVcseUJBQUdGLEdBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWd0IsQ0FBakIsQ0FZUCxNQUFPLE1BQU1HLFlBQVcseUJBQUdILEdBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWd0IsQ0FBakIsQ0FZUCxNQUFPLE1BQU1JLFFBQU8seUJBQUdKLEdBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWRvQixDQUFiLENBZ0JQLE1BQU8sTUFBTUssUUFBTyx5QkFBR0wsR0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZG9CLENBQWIifQ==