function cov_2pyp9kp58s(){var path="C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\instrument\\src\\apollo\\client.js";var hash="defb23c002a6d865525ee2e27bf3527a5e81834f";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\instrument\\src\\apollo\\client.js",statementMap:{"0":{start:{line:1,column:34},end:{line:1,column:116}},"1":{start:{line:1,column:126},end:{line:1,column:168}},"2":{start:{line:1,column:180},end:{line:1,column:209}},"3":{start:{line:1,column:218},end:{line:1,column:232}},"4":{start:{line:1,column:250},end:{line:1,column:1223}},"5":{start:{line:1,column:1237},end:{line:1,column:1266}},"6":{start:{line:1,column:1267},end:{line:1,column:1344}},"7":{start:{line:1,column:1315},end:{line:1,column:1343}},"8":{start:{line:1,column:1363},end:{line:1,column:1377}},"9":{start:{line:2,column:0},end:{line:2,column:49}},"10":{start:{line:2,column:25},end:{line:2,column:47}},"11":{start:{line:2,column:50},end:{line:2,column:72}},"12":{start:{line:2,column:73},end:{line:2,column:89}},"13":{start:{line:3,column:13},end:{line:3,column:55}},"14":{start:{line:3,column:73},end:{line:4,column:37}},"15":{start:{line:4,column:55},end:{line:13,column:5}},"16":{start:{line:4,column:110},end:{line:4,column:133}},"17":{start:{line:4,column:146},end:{line:4,column:198}},"18":{start:{line:12,column:0},end:{line:12,column:23}},"19":{start:{line:12,column:23},end:{line:13,column:3}},"20":{start:{line:13,column:28},end:{line:13,column:113}}},fnMap:{"0":{name:"cov_df46kskeg",decl:{start:{line:1,column:9},end:{line:1,column:22}},loc:{start:{line:1,column:24},end:{line:2,column:73}},line:1},"1":{name:"(anonymous_1)",decl:{start:{line:2,column:14},end:{line:2,column:15}},loc:{start:{line:2,column:24},end:{line:2,column:48}},line:2},"2":{name:"(anonymous_2)",decl:{start:{line:4,column:89},end:{line:4,column:90}},loc:{start:{line:4,column:109},end:{line:13,column:4}},line:4}},branchMap:{"0":{loc:{start:{line:1,column:1237},end:{line:1,column:1266}},type:"binary-expr",locations:[{start:{line:1,column:1237},end:{line:1,column:1248}},{start:{line:1,column:1251},end:{line:1,column:1265}}],line:1},"1":{loc:{start:{line:1,column:1267},end:{line:1,column:1344}},type:"if",locations:[{start:{line:1,column:1267},end:{line:1,column:1344}},{start:{line:1,column:1267},end:{line:1,column:1344}}],line:1},"2":{loc:{start:{line:1,column:1270},end:{line:1,column:1313}},type:"binary-expr",locations:[{start:{line:1,column:1270},end:{line:1,column:1285}},{start:{line:1,column:1287},end:{line:1,column:1313}}],line:1},"3":{loc:{start:{line:12,column:64},end:{line:12,column:164}},type:"cond-expr",locations:[{start:{line:12,column:71},end:{line:12,column:132}},{start:{line:12,column:135},end:{line:12,column:163}}],line:12}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0},f:{"0":0,"1":0,"2":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0]},inputSourceMap:{version:3,names:["ApolloClient","createHttpLink","InMemoryCache","setContext","cache","httpLink","uri","authLink","_","headers","token","localStorage","getItem","authorization","JSON","parse","client","link","concat"],sources:["client.js"],sourcesContent:["import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';\r\nimport {setContext} from '@apollo/client/link/context';\r\n// import fbConfig from \"../firebase/fb-config\";\r\n\r\nconst cache = new InMemoryCache();\r\n\r\nconst httpLink = createHttpLink({\r\n    // uri: 'https://finalproject34.herokuapp.com/graphql'\r\n    uri: 'http://localhost:8000/graphql'\r\n});\r\n\r\nconst authLink = setContext(async (_, {headers}) => {\r\n    const token = localStorage.getItem('store');\r\n    // let phoneverification = \"\";\r\n    //\r\n    // const user = await fbConfig.auth().currentUser;\r\n    // if (user) {\r\n    //   await user.getIdToken().then((t) => {\r\n    //     phoneverification = t;\r\n    //   });\r\n    // }\r\n\r\n    return {\r\n        headers: {\r\n            ...headers,\r\n            authorization: token ? `Bearer ${JSON.parse(token).token}` : ''\r\n            // phoneverification,\r\n        }\r\n    };\r\n});\r\n\r\nexport const client = new ApolloClient({\r\n    link: authLink.concat(httpLink),\r\n    cache: cache\r\n});\r\n"],mappings:"m2CAeY;yFAfZ,OAAQA,YAAR,CAAsBC,cAAtB,CAAsCC,aAAtC,KAA0D,gBAA1D,CACA,OAAQC,UAAR,KAAyB,6BAAzB,CACA;AAEA,KAAMC,MAAK,yBAAG,GAAIF,cAAJ,EAAH,CAAX,CAEA,KAAMG,SAAQ,yBAAGJ,cAAc,CAAC,CAC5B;AACAK,GAAG,CAAE,+BAFuB,CAAD,CAAjB,CAAd,CAKA,KAAMC,SAAQ,yBAAGJ,UAAU,CAAC,MAAOK,CAAP,CAAU,CAACC,OAAD,CAAV,GAAwB,wBAChD,KAAMC,MAAK,yBAAGC,YAAY,CAACC,OAAb,CAAqB,OAArB,CAAH,CAAX,CACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AATgD,uBAWhD,MAAO,CACHH,OAAO,CAAE,CACL,GAAGA,OADE,CAELI,aAAa,CAAEH,KAAK,4BAAI,UAASI,IAAI,CAACC,KAAL,CAAWL,KAAX,EAAkBA,KAAM,EAArC,6BAAyC,EAAzC,CACpB;AAHK,CADN,CAAP,CAOH,CAlB0B,CAAb,CAAd,CAoBA,MAAO,MAAMM,OAAM,yBAAG,GAAIhB,aAAJ,CAAiB,CACnCiB,IAAI,CAAEV,QAAQ,CAACW,MAAT,CAAgBb,QAAhB,CAD6B,CAEnCD,KAAK,CAAEA,KAF4B,CAAjB,CAAH,CAAZ"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"defb23c002a6d865525ee2e27bf3527a5e81834f"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2pyp9kp58s=function(){return actualCoverage;};}return actualCoverage;}cov_2pyp9kp58s();function cov_df46kskeg(){cov_2pyp9kp58s().f[0]++;var path=(cov_2pyp9kp58s().s[0]++,"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\client.js");var hash=(cov_2pyp9kp58s().s[1]++,"b0dba22b14523f3a81ab36017f53dbf35b246f11");var global=(cov_2pyp9kp58s().s[2]++,new Function("return this")());var gcv=(cov_2pyp9kp58s().s[3]++,"__coverage__");var coverageData=(cov_2pyp9kp58s().s[4]++,{path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\apollo\\client.js",statementMap:{"0":{start:{line:5,column:14},end:{line:5,column:33}},"1":{start:{line:7,column:17},end:{line:10,column:2}},"2":{start:{line:12,column:17},end:{line:30,column:2}},"3":{start:{line:13,column:18},end:{line:13,column:47}},"4":{start:{line:23,column:4},end:{line:29,column:6}},"5":{start:{line:32,column:22},end:{line:35,column:2}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:12,column:28},end:{line:12,column:29}},loc:{start:{line:12,column:52},end:{line:30,column:1}},line:12}},branchMap:{"0":{loc:{start:{line:26,column:27},end:{line:26,column:75}},type:"cond-expr",locations:[{start:{line:26,column:35},end:{line:26,column:70}},{start:{line:26,column:73},end:{line:26,column:75}}],line:26}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b0dba22b14523f3a81ab36017f53dbf35b246f11"});var coverage=(cov_2pyp9kp58s().s[5]++,(cov_2pyp9kp58s().b[0][0]++,global[gcv])||(cov_2pyp9kp58s().b[0][1]++,global[gcv]={}));cov_2pyp9kp58s().s[6]++;if((cov_2pyp9kp58s().b[2][0]++,!coverage[path])||(cov_2pyp9kp58s().b[2][1]++,coverage[path].hash!==hash)){cov_2pyp9kp58s().b[1][0]++;cov_2pyp9kp58s().s[7]++;coverage[path]=coverageData;}else{cov_2pyp9kp58s().b[1][1]++;}var actualCoverage=(cov_2pyp9kp58s().s[8]++,coverage[path]);{cov_2pyp9kp58s().s[9]++;// @ts-ignore
cov_df46kskeg=function(){cov_2pyp9kp58s().f[1]++;cov_2pyp9kp58s().s[10]++;return actualCoverage;};}cov_2pyp9kp58s().s[11]++;return actualCoverage;}cov_2pyp9kp58s().s[12]++;cov_df46kskeg();import{ApolloClient,createHttpLink,InMemoryCache}from'@apollo/client';import{setContext}from'@apollo/client/link/context';// import fbConfig from "../firebase/fb-config";
const cache=(cov_2pyp9kp58s().s[13]++,(cov_df46kskeg().s[0]++,new InMemoryCache()));const httpLink=(cov_2pyp9kp58s().s[14]++,(cov_df46kskeg().s[1]++,createHttpLink({// uri: 'https://finalproject34.herokuapp.com/graphql'
uri:'http://localhost:8000/graphql'})));const authLink=(cov_2pyp9kp58s().s[15]++,(cov_df46kskeg().s[2]++,setContext(async(_,{headers})=>{cov_2pyp9kp58s().f[2]++;cov_2pyp9kp58s().s[16]++;cov_df46kskeg().f[0]++;const token=(cov_2pyp9kp58s().s[17]++,(cov_df46kskeg().s[3]++,localStorage.getItem('store')));// let phoneverification = "";
//
// const user = await fbConfig.auth().currentUser;
// if (user) {
//   await user.getIdToken().then((t) => {
//     phoneverification = t;
//   });
// }
cov_2pyp9kp58s().s[18]++;cov_df46kskeg().s[4]++;cov_2pyp9kp58s().s[19]++;return{headers:{...headers,authorization:token?(cov_2pyp9kp58s().b[3][0]++,(cov_df46kskeg().b[0][0]++,`Bearer ${JSON.parse(token).token}`)):(cov_2pyp9kp58s().b[3][1]++,(cov_df46kskeg().b[0][1]++,''))// phoneverification,
}};})));export const client=(cov_2pyp9kp58s().s[20]++,(cov_df46kskeg().s[5]++,new ApolloClient({link:authLink.concat(httpLink),cache:cache})));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJjcmVhdGVIdHRwTGluayIsIkluTWVtb3J5Q2FjaGUiLCJzZXRDb250ZXh0IiwiY2FjaGUiLCJodHRwTGluayIsInVyaSIsImF1dGhMaW5rIiwiXyIsImhlYWRlcnMiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhdXRob3JpemF0aW9uIiwiSlNPTiIsInBhcnNlIiwiY2xpZW50IiwibGluayIsImNvbmNhdCJdLCJzb3VyY2VzIjpbImNsaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fwb2xsb0NsaWVudCwgY3JlYXRlSHR0cExpbmssIEluTWVtb3J5Q2FjaGV9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHtzZXRDb250ZXh0fSBmcm9tICdAYXBvbGxvL2NsaWVudC9saW5rL2NvbnRleHQnO1xyXG4vLyBpbXBvcnQgZmJDb25maWcgZnJvbSBcIi4uL2ZpcmViYXNlL2ZiLWNvbmZpZ1wiO1xyXG5cclxuY29uc3QgY2FjaGUgPSBuZXcgSW5NZW1vcnlDYWNoZSgpO1xyXG5cclxuY29uc3QgaHR0cExpbmsgPSBjcmVhdGVIdHRwTGluayh7XHJcbiAgICAvLyB1cmk6ICdodHRwczovL2ZpbmFscHJvamVjdDM0Lmhlcm9rdWFwcC5jb20vZ3JhcGhxbCdcclxuICAgIHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ncmFwaHFsJ1xyXG59KTtcclxuXHJcbmNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dChhc3luYyAoXywge2hlYWRlcnN9KSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZScpO1xyXG4gICAgLy8gbGV0IHBob25ldmVyaWZpY2F0aW9uID0gXCJcIjtcclxuICAgIC8vXHJcbiAgICAvLyBjb25zdCB1c2VyID0gYXdhaXQgZmJDb25maWcuYXV0aCgpLmN1cnJlbnRVc2VyO1xyXG4gICAgLy8gaWYgKHVzZXIpIHtcclxuICAgIC8vICAgYXdhaXQgdXNlci5nZXRJZFRva2VuKCkudGhlbigodCkgPT4ge1xyXG4gICAgLy8gICAgIHBob25ldmVyaWZpY2F0aW9uID0gdDtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke0pTT04ucGFyc2UodG9rZW4pLnRva2VufWAgOiAnJ1xyXG4gICAgICAgICAgICAvLyBwaG9uZXZlcmlmaWNhdGlvbixcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIGxpbms6IGF1dGhMaW5rLmNvbmNhdChodHRwTGluayksXHJcbiAgICBjYWNoZTogY2FjaGVcclxufSk7XHJcbiJdLCJtYXBwaW5ncyI6Im0yQ0FlWTt5RkFmWixPQUFRQSxZQUFSLENBQXNCQyxjQUF0QixDQUFzQ0MsYUFBdEMsS0FBMEQsZ0JBQTFELENBQ0EsT0FBUUMsVUFBUixLQUF5Qiw2QkFBekIsQ0FDQTtBQUVBLEtBQU1DLE1BQUsseUJBQUcsR0FBSUYsY0FBSixFQUFILENBQVgsQ0FFQSxLQUFNRyxTQUFRLHlCQUFHSixjQUFjLENBQUMsQ0FDNUI7QUFDQUssR0FBRyxDQUFFLCtCQUZ1QixDQUFELENBQWpCLENBQWQsQ0FLQSxLQUFNQyxTQUFRLHlCQUFHSixVQUFVLENBQUMsTUFBT0ssQ0FBUCxDQUFVLENBQUNDLE9BQUQsQ0FBVixHQUF3Qix3QkFDaEQsS0FBTUMsTUFBSyx5QkFBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQUgsQ0FBWCxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUZ0QsdUJBV2hELE1BQU8sQ0FDSEgsT0FBTyxDQUFFLENBQ0wsR0FBR0EsT0FERSxDQUVMSSxhQUFhLENBQUVILEtBQUssNEJBQUksVUFBU0ksSUFBSSxDQUFDQyxLQUFMLENBQVdMLEtBQVgsRUFBa0JBLEtBQU0sRUFBckMsNkJBQXlDLEVBQXpDLENBQ3BCO0FBSEssQ0FETixDQUFQLENBT0gsQ0FsQjBCLENBQWIsQ0FBZCxDQW9CQSxNQUFPLE1BQU1NLE9BQU0seUJBQUcsR0FBSWhCLGFBQUosQ0FBaUIsQ0FDbkNpQixJQUFJLENBQUVWLFFBQVEsQ0FBQ1csTUFBVCxDQUFnQmIsUUFBaEIsQ0FENkIsQ0FFbkNELEtBQUssQ0FBRUEsS0FGNEIsQ0FBakIsQ0FBSCxDQUFaIn0=
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtrNERBZVk7NExBZlosT0FBUUEsWUFBUixDQUFzQkMsY0FBdEIsQ0FBc0NDLGFBQXRDLEtBQTBELGdCQUExRCxDQUNBLE9BQVFDLFVBQVIsS0FBeUIsNkJBQXpCLENBQ0E7QUFFQSxLQUFNQyxNQUFLLG1EQUFHLEdBQUlGLGNBQUosRUFBSCxFQUFYLENBRUEsS0FBTUcsU0FBUSxtREFBR0osY0FBYyxDQUFDLENBQzVCO0FBQ0FLLEdBQUcsQ0FBRSwrQkFGdUIsQ0FBRCxDQUFqQixFQUFkLENBS0EsS0FBTUMsU0FBUSxtREFBR0osVUFBVSxDQUFDLE1BQU9LLENBQVAsQ0FBVSxDQUFDQyxPQUFELENBQVYsR0FBd0IseUVBQ2hELEtBQU1DLE1BQUssbURBQUdDLFlBQVksQ0FBQ0MsT0FBYkQsQ0FBcUIsT0FBckJBLENBQUgsRUFBWCxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUZ0QseUVBV2hELE1BQU8sQ0FDSEYsT0FBTyxDQUFFLENBQ0wsR0FBR0EsT0FERSxDQUVMSSxhQUFhLENBQUVILEtBQUssd0RBQUksVUFBU0ksSUFBSSxDQUFDQyxLQUFMRCxDQUFXSixLQUFYSSxFQUFrQkosS0FBTSxFQUFyQywwREFBeUMsRUFBekMsRUFDcEI7QUFISyxDQUROLENBQVAsQ0FYdUIsRUFBYixFQUFkLENBb0JBLE1BQU8sTUFBTU0sT0FBTSxtREFBRyxHQUFJaEIsYUFBSixDQUFpQixDQUNuQ2lCLElBQUksQ0FBRVYsUUFBUSxDQUFDVyxNQUFUWCxDQUFnQkYsUUFBaEJFLENBRDZCLENBRW5DSCxLQUFLLENBQUVBLEtBRjRCLENBQWpCLENBQUgsRUFBWiIsIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsImNyZWF0ZUh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsInNldENvbnRleHQiLCJjYWNoZSIsImh0dHBMaW5rIiwidXJpIiwiYXV0aExpbmsiLCJfIiwiaGVhZGVycyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImF1dGhvcml6YXRpb24iLCJKU09OIiwicGFyc2UiLCJjbGllbnQiLCJsaW5rIiwiY29uY2F0Il0sInNvdXJjZXMiOlsiY2xpZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBvbGxvQ2xpZW50LCBjcmVhdGVIdHRwTGluaywgSW5NZW1vcnlDYWNoZX0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQge3NldENvbnRleHR9IGZyb20gJ0BhcG9sbG8vY2xpZW50L2xpbmsvY29udGV4dCc7XHJcbi8vIGltcG9ydCBmYkNvbmZpZyBmcm9tIFwiLi4vZmlyZWJhc2UvZmItY29uZmlnXCI7XHJcblxyXG5jb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKCk7XHJcblxyXG5jb25zdCBodHRwTGluayA9IGNyZWF0ZUh0dHBMaW5rKHtcclxuICAgIC8vIHVyaTogJ2h0dHBzOi8vZmluYWxwcm9qZWN0MzQuaGVyb2t1YXBwLmNvbS9ncmFwaHFsJ1xyXG4gICAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2dyYXBocWwnXHJcbn0pO1xyXG5cclxuY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KGFzeW5jIChfLCB7aGVhZGVyc30pID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlJyk7XHJcbiAgICAvLyBsZXQgcGhvbmV2ZXJpZmljYXRpb24gPSBcIlwiO1xyXG4gICAgLy9cclxuICAgIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCBmYkNvbmZpZy5hdXRoKCkuY3VycmVudFVzZXI7XHJcbiAgICAvLyBpZiAodXNlcikge1xyXG4gICAgLy8gICBhd2FpdCB1c2VyLmdldElkVG9rZW4oKS50aGVuKCh0KSA9PiB7XHJcbiAgICAvLyAgICAgcGhvbmV2ZXJpZmljYXRpb24gPSB0O1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7SlNPTi5wYXJzZSh0b2tlbikudG9rZW59YCA6ICcnXHJcbiAgICAgICAgICAgIC8vIHBob25ldmVyaWZpY2F0aW9uLFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcclxuICAgIGNhY2hlOiBjYWNoZVxyXG59KTtcclxuIl19