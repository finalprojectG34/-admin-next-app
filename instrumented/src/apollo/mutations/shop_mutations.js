function cov_6g3pkaul(){var path="C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\mutations\\shop_mutations.js";var hash="796838edf7644e418452b0b639cdc0800c92cfa0";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\mutations\\shop_mutations.js",statementMap:{"0":{start:{line:3,column:30},end:{line:30,column:1}},"1":{start:{line:32,column:30},end:{line:38,column:1}}},fnMap:{},branchMap:{},s:{"0":0,"1":0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"796838edf7644e418452b0b639cdc0800c92cfa0"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_6g3pkaul=function(){return actualCoverage;};}return actualCoverage;}cov_6g3pkaul();import{gql}from"@apollo/client";export const CREATE_COMPANY=(cov_6g3pkaul().s[0]++,gql`
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
`);export const DELETE_COMPANY=(cov_6g3pkaul().s[1]++,gql`
  mutation Mutation($deleteCompanyId: ID!) {
    deleteCompany(id: $deleteCompanyId) {
      id
    }
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJDUkVBVEVfQ09NUEFOWSIsIkRFTEVURV9DT01QQU5ZIl0sInNvdXJjZXMiOlsic2hvcF9tdXRhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWx9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9DT01QQU5ZID0gZ3FsYFxyXG4gIG11dGF0aW9uIE11dGF0aW9uKCRpbnB1dDogQ29tcGFueUNyZWF0ZUlucHV0ISkge1xyXG4gICAgY3JlYXRlQ29tcGFueShpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgb3duZXJJZFxyXG4gICAgICBhZGRyZXNzIHtcclxuICAgICAgICBsb2NhdGlvbiB7XHJcbiAgICAgICAgICB0eXBlXHJcbiAgICAgICAgICBjb29yZGluYXRlc1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdWJDaXR5XHJcbiAgICAgICAgY2l0eVxyXG4gICAgICAgIGFkZHJlc3NOYW1lXHJcbiAgICAgIH1cclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgdGluTnVtYmVyXHJcbiAgICAgIGltYWdlIHtcclxuICAgICAgICBpbWFnZXNcclxuICAgICAgICBpbWFnZUNvdmVyXHJcbiAgICAgICAgYmdJbWFnZVxyXG4gICAgICAgIHN1ZmZpeFxyXG4gICAgICAgIGltYWdlUGF0aFxyXG4gICAgICB9XHJcbiAgICAgIHN0YXR1c1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09NUEFOWSA9IGdxbGBcclxuICBtdXRhdGlvbiBNdXRhdGlvbigkZGVsZXRlQ29tcGFueUlkOiBJRCEpIHtcclxuICAgIGRlbGV0ZUNvbXBhbnkoaWQ6ICRkZWxldGVDb21wYW55SWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7Il0sIm1hcHBpbmdzIjoiMnlCQWVZO3VGQWZaLE9BQVFBLEdBQVIsS0FBa0IsZ0JBQWxCLENBRUEsTUFBTyxNQUFNQyxlQUFjLHdCQUFHRCxHQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTNCMkIsQ0FBcEIsQ0E2QlAsTUFBTyxNQUFNRSxlQUFjLHdCQUFHRixHQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU4yQixDQUFwQiJ9