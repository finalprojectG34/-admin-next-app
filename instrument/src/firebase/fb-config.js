function cov_2ld57xosuf(){var path="C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\firebase\\fb-config.js";var hash="a78c42afd8c3e7080056fd72bbade7a176647ee2";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\src\\firebase\\fb-config.js",statementMap:{"0":{start:{line:5,column:23},end:{line:14,column:1}},"1":{start:{line:15,column:12},end:{line:15,column:41}},"2":{start:{line:16,column:16},end:{line:16,column:31}},"3":{start:{line:17,column:13},end:{line:17,column:22}},"4":{start:{line:18,column:0},end:{line:18,column:25}},"5":{start:{line:19,column:19},end:{line:19,column:45}}},fnMap:{},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a78c42afd8c3e7080056fd72bbade7a176647ee2"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2ld57xosuf=function(){return actualCoverage;};}return actualCoverage;}cov_2ld57xosuf();import{initializeApp}from'firebase/app';import{getAuth,RecaptchaVerifier,signInWithPhoneNumber,signOut}from"firebase/auth";import{getDownloadURL,getStorage,ref,uploadBytes}from"firebase/storage";const firebaseConfig=(cov_2ld57xosuf().s[0]++,{apiKey:"AIzaSyDpLbATfUM5yBC2xKBR1HPbf916DQK9Y_I",authDomain:"webproj1-a.firebaseapp.com",databaseURL:"https://webproj1-a.firebaseio.com",projectId:"webproj1-a",storageBucket:"webproj1-a.appspot.com",messagingSenderId:"185917106202",appId:"1:185917106202:web:da597e3cdda98da403c9a3",measurementId:"G-39KFHCNQRV"});const app=(cov_2ld57xosuf().s[1]++,initializeApp(firebaseConfig));const storage=(cov_2ld57xosuf().s[2]++,getStorage(app));const auth=(cov_2ld57xosuf().s[3]++,getAuth());cov_2ld57xosuf().s[4]++;auth.languageCode='en';const storageRef=(cov_2ld57xosuf().s[5]++,ref(storage,'some-child'));export default{app,storageRef,uploadBytes,getDownloadURL,auth,signInWithPhoneNumber,RecaptchaVerifier,signOut};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsIlJlY2FwdGNoYVZlcmlmaWVyIiwic2lnbkluV2l0aFBob25lTnVtYmVyIiwic2lnbk91dCIsImdldERvd25sb2FkVVJMIiwiZ2V0U3RvcmFnZSIsInJlZiIsInVwbG9hZEJ5dGVzIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwiZGF0YWJhc2VVUkwiLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJzdG9yYWdlIiwiYXV0aCIsImxhbmd1YWdlQ29kZSIsInN0b3JhZ2VSZWYiXSwic291cmNlcyI6WyJmYi1jb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbml0aWFsaXplQXBwfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQge2dldEF1dGgsIFJlY2FwdGNoYVZlcmlmaWVyLCBzaWduSW5XaXRoUGhvbmVOdW1iZXIsIHNpZ25PdXR9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7Z2V0RG93bmxvYWRVUkwsIGdldFN0b3JhZ2UsIHJlZiwgdXBsb2FkQnl0ZXN9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICAgIGFwaUtleTogXCJBSXphU3lEcExiQVRmVU01eUJDMnhLQlIxSFBiZjkxNkRRSzlZX0lcIixcclxuICAgIGF1dGhEb21haW46IFwid2VicHJvajEtYS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vd2VicHJvajEtYS5maXJlYmFzZWlvLmNvbVwiLFxyXG4gICAgcHJvamVjdElkOiBcIndlYnByb2oxLWFcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwid2VicHJvajEtYS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTg1OTE3MTA2MjAyXCIsXHJcbiAgICBhcHBJZDogXCIxOjE4NTkxNzEwNjIwMjp3ZWI6ZGE1OTdlM2NkZGE5OGRhNDAzYzlhM1wiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLTM5S0ZIQ05RUlZcIlxyXG59O1xyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcclxuYXV0aC5sYW5ndWFnZUNvZGUgPSAnZW4nO1xyXG5jb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UsICdzb21lLWNoaWxkJyk7XHJcbmV4cG9ydCBkZWZhdWx0IHthcHAsIHN0b3JhZ2VSZWYsIHVwbG9hZEJ5dGVzLCBnZXREb3dubG9hZFVSTCwgYXV0aCwgc2lnbkluV2l0aFBob25lTnVtYmVyLCBSZWNhcHRjaGFWZXJpZmllciwgc2lnbk91dH07Il0sIm1hcHBpbmdzIjoieWdDQWVZOzJGQWZaLE9BQVFBLGFBQVIsS0FBNEIsY0FBNUIsQ0FDQSxPQUFRQyxPQUFSLENBQWlCQyxpQkFBakIsQ0FBb0NDLHFCQUFwQyxDQUEyREMsT0FBM0QsS0FBeUUsZUFBekUsQ0FDQSxPQUFRQyxjQUFSLENBQXdCQyxVQUF4QixDQUFvQ0MsR0FBcEMsQ0FBeUNDLFdBQXpDLEtBQTJELGtCQUEzRCxDQUVBLEtBQU1DLGVBQWMsMEJBQUcsQ0FDbkJDLE1BQU0sQ0FBRSx5Q0FEVyxDQUVuQkMsVUFBVSxDQUFFLDRCQUZPLENBR25CQyxXQUFXLENBQUUsbUNBSE0sQ0FJbkJDLFNBQVMsQ0FBRSxZQUpRLENBS25CQyxhQUFhLENBQUUsd0JBTEksQ0FNbkJDLGlCQUFpQixDQUFFLGNBTkEsQ0FPbkJDLEtBQUssQ0FBRSwyQ0FQWSxDQVFuQkMsYUFBYSxDQUFFLGNBUkksQ0FBSCxDQUFwQixDQVVBLEtBQU1DLElBQUcsMEJBQUdsQixhQUFhLENBQUNTLGNBQUQsQ0FBaEIsQ0FBVCxDQUNBLEtBQU1VLFFBQU8sMEJBQUdiLFVBQVUsQ0FBQ1ksR0FBRCxDQUFiLENBQWIsQ0FDQSxLQUFNRSxLQUFJLDBCQUFHbkIsT0FBTyxFQUFWLENBQVYsQyx3QkFDQW1CLElBQUksQ0FBQ0MsWUFBTCxDQUFvQixJQUFwQixDQUNBLEtBQU1DLFdBQVUsMEJBQUdmLEdBQUcsQ0FBQ1ksT0FBRCxDQUFVLFlBQVYsQ0FBTixDQUFoQixDQUNBLGNBQWUsQ0FBQ0QsR0FBRCxDQUFNSSxVQUFOLENBQWtCZCxXQUFsQixDQUErQkgsY0FBL0IsQ0FBK0NlLElBQS9DLENBQXFEakIscUJBQXJELENBQTRFRCxpQkFBNUUsQ0FBK0ZFLE9BQS9GLENBQWYifQ==