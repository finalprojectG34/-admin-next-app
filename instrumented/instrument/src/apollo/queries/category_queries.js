function cov_11jkbdzewz(){var path="C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\instrument\\src\\apollo\\queries\\category_queries.js";var hash="fd5e822f33de5cba399325d27d1bb6e953979cbc";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\instrument\\src\\apollo\\queries\\category_queries.js",statementMap:{"0":{start:{line:1,column:34},end:{line:1,column:135}},"1":{start:{line:1,column:145},end:{line:1,column:187}},"2":{start:{line:1,column:199},end:{line:1,column:228}},"3":{start:{line:1,column:237},end:{line:1,column:251}},"4":{start:{line:1,column:269},end:{line:1,column:656}},"5":{start:{line:1,column:670},end:{line:1,column:699}},"6":{start:{line:1,column:700},end:{line:1,column:777}},"7":{start:{line:1,column:748},end:{line:1,column:776}},"8":{start:{line:1,column:796},end:{line:1,column:810}},"9":{start:{line:2,column:0},end:{line:2,column:49}},"10":{start:{line:2,column:25},end:{line:2,column:47}},"11":{start:{line:2,column:50},end:{line:2,column:72}},"12":{start:{line:2,column:73},end:{line:2,column:89}},"13":{start:{line:2,column:154},end:{line:15,column:1}},"14":{start:{line:15,column:34},end:{line:23,column:1}}},fnMap:{"0":{name:"cov_xsoygkdti",decl:{start:{line:1,column:9},end:{line:1,column:22}},loc:{start:{line:1,column:24},end:{line:2,column:73}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:2,column:14},end:{line:2,column:15}},loc:{start:{line:2,column:24},end:{line:2,column:48}},line:2}},branchMap:{"0":{loc:{start:{line:1,column:670},end:{line:1,column:699}},type:"binary-expr",locations:[{start:{line:1,column:670},end:{line:1,column:681}},{start:{line:1,column:684},end:{line:1,column:698}}],line:1},"1":{loc:{start:{line:1,column:700},end:{line:1,column:777}},type:"if",locations:[{start:{line:1,column:700},end:{line:1,column:777}},{start:{line:1,column:700},end:{line:1,column:777}}],line:1},"2":{loc:{start:{line:1,column:703},end:{line:1,column:746}},type:"binary-expr",locations:[{start:{line:1,column:703},end:{line:1,column:718}},{start:{line:1,column:720},end:{line:1,column:746}}],line:1}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},inputSourceMap:{version:3,names:["gql","GET_ALL_CATEGORIES","GET_ONE_CATEGORY"],sources:["category_queries.js"],sourcesContent:["import {gql} from '@apollo/client';\r\n\r\nexport const GET_ALL_CATEGORIES = gql`\r\n  query {\r\n    getAllCategories {\r\n      id\r\n      description\r\n      facets\r\n      name\r\n      parentId\r\n      parentsPath\r\n      path\r\n      slug\r\n    }\r\n  }\r\n`;\r\n\r\nexport const GET_ONE_CATEGORY = gql`\r\n  query Query($getOneCategoryId: String!) {\r\n    getOneCategory(id: $getOneCategoryId) {\r\n      id\r\n      name\r\n      description\r\n    }\r\n  }\r\n`;\r\n"],mappings:"4yBAeY;yFAfZ,OAAQA,GAAR,KAAkB,gBAAlB,CAEA,MAAO,MAAMC,mBAAkB,yBAAGD,GAAI;AACtC;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA,CAb+B,CAAxB,CAeP,MAAO,MAAME,iBAAgB,yBAAGF,GAAI;AACpC;AACA;AACA;AACA;AACA;AACA;AACA;AACA,CAR6B,CAAtB"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"fd5e822f33de5cba399325d27d1bb6e953979cbc"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_11jkbdzewz=function(){return actualCoverage;};}return actualCoverage;}cov_11jkbdzewz();function cov_xsoygkdti(){cov_11jkbdzewz().f[0]++;var path=(cov_11jkbdzewz().s[0]++,"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\queries\\category_queries.js");var hash=(cov_11jkbdzewz().s[1]++,"fa2360455f17eb6eedf5b9840d9438b1e9bab53a");var global=(cov_11jkbdzewz().s[2]++,new Function("return this")());var gcv=(cov_11jkbdzewz().s[3]++,"__coverage__");var coverageData=(cov_11jkbdzewz().s[4]++,{path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\queries\\category_queries.js",statementMap:{"0":{start:{line:3,column:34},end:{line:16,column:1}},"1":{start:{line:18,column:32},end:{line:26,column:1}}},fnMap:{},branchMap:{},s:{"0":0,"1":0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"fa2360455f17eb6eedf5b9840d9438b1e9bab53a"});var coverage=(cov_11jkbdzewz().s[5]++,(cov_11jkbdzewz().b[0][0]++,global[gcv])||(cov_11jkbdzewz().b[0][1]++,global[gcv]={}));cov_11jkbdzewz().s[6]++;if((cov_11jkbdzewz().b[2][0]++,!coverage[path])||(cov_11jkbdzewz().b[2][1]++,coverage[path].hash!==hash)){cov_11jkbdzewz().b[1][0]++;cov_11jkbdzewz().s[7]++;coverage[path]=coverageData;}else{cov_11jkbdzewz().b[1][1]++;}var actualCoverage=(cov_11jkbdzewz().s[8]++,coverage[path]);{cov_11jkbdzewz().s[9]++;// @ts-ignore
cov_xsoygkdti=function(){cov_11jkbdzewz().f[1]++;cov_11jkbdzewz().s[10]++;return actualCoverage;};}cov_11jkbdzewz().s[11]++;return actualCoverage;}cov_11jkbdzewz().s[12]++;cov_xsoygkdti();import{gql}from'@apollo/client';export const GET_ALL_CATEGORIES=(cov_11jkbdzewz().s[13]++,(cov_xsoygkdti().s[0]++,gql`
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
`));export const GET_ONE_CATEGORY=(cov_11jkbdzewz().s[14]++,(cov_xsoygkdti().s[1]++,gql`
  query Query($getOneCategoryId: String!) {
    getOneCategory(id: $getOneCategoryId) {
      id
      name
      description
    }
  }
`));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJncWwiLCJHRVRfQUxMX0NBVEVHT1JJRVMiLCJHRVRfT05FX0NBVEVHT1JZIl0sInNvdXJjZXMiOlsiY2F0ZWdvcnlfcXVlcmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dxbH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9BTExfQ0FURUdPUklFUyA9IGdxbGBcclxuICBxdWVyeSB7XHJcbiAgICBnZXRBbGxDYXRlZ29yaWVzIHtcclxuICAgICAgaWRcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgZmFjZXRzXHJcbiAgICAgIG5hbWVcclxuICAgICAgcGFyZW50SWRcclxuICAgICAgcGFyZW50c1BhdGhcclxuICAgICAgcGF0aFxyXG4gICAgICBzbHVnXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9PTkVfQ0FURUdPUlkgPSBncWxgXHJcbiAgcXVlcnkgUXVlcnkoJGdldE9uZUNhdGVnb3J5SWQ6IFN0cmluZyEpIHtcclxuICAgIGdldE9uZUNhdGVnb3J5KGlkOiAkZ2V0T25lQ2F0ZWdvcnlJZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iXSwibWFwcGluZ3MiOiI0eUJBZVk7eUZBZlosT0FBUUEsR0FBUixLQUFrQixnQkFBbEIsQ0FFQSxNQUFPLE1BQU1DLG1CQUFrQix5QkFBR0QsR0FBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWIrQixDQUF4QixDQWVQLE1BQU8sTUFBTUUsaUJBQWdCLHlCQUFHRixHQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSNkIsQ0FBdEIifQ==
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjIyR0FrQkE7MjBDQUhZOzRMQWZaLE9BQVFBLEdBQVIsS0FBa0IsZ0JBQWxCLENBRUEsTUFBTyxNQUFNQyxtQkFBa0IsbURBQUdELEdBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FiK0IsRUFBeEIsQ0FlUCxNQUFPLE1BQU1FLGlCQUFnQixtREFBR0YsR0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUjZCLEVBQXRCIiwibmFtZXMiOlsiZ3FsIiwiR0VUX0FMTF9DQVRFR09SSUVTIiwiR0VUX09ORV9DQVRFR09SWSJdLCJzb3VyY2VzIjpbImNhdGVnb3J5X3F1ZXJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtncWx9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUxMX0NBVEVHT1JJRVMgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgZ2V0QWxsQ2F0ZWdvcmllcyB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIGZhY2V0c1xyXG4gICAgICBuYW1lXHJcbiAgICAgIHBhcmVudElkXHJcbiAgICAgIHBhcmVudHNQYXRoXHJcbiAgICAgIHBhdGhcclxuICAgICAgc2x1Z1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfT05FX0NBVEVHT1JZID0gZ3FsYFxyXG4gIHF1ZXJ5IFF1ZXJ5KCRnZXRPbmVDYXRlZ29yeUlkOiBTdHJpbmchKSB7XHJcbiAgICBnZXRPbmVDYXRlZ29yeShpZDogJGdldE9uZUNhdGVnb3J5SWQpIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIl19