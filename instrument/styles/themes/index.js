function cov_1m8xn3x5im(){var path="C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\styles\\themes\\index.js";var hash="0d23181803eebe0d7210da7beb76a01ae94d56b7";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\styles\\themes\\index.js",statementMap:{"0":{start:{line:16,column:21},end:{line:53,column:1}},"1":{start:{line:17,column:16},end:{line:17,column:22}},"2":{start:{line:19,column:22},end:{line:32,column:3}},"3":{start:{line:34,column:23},end:{line:47,column:3}},"4":{start:{line:49,column:17},end:{line:49,column:42}},"5":{start:{line:50,column:2},end:{line:50,column:59}},"6":{start:{line:52,column:2},end:{line:52,column:16}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:16,column:21},end:{line:16,column:22}},loc:{start:{line:16,column:40},end:{line:53,column:1}},line:16}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"0d23181803eebe0d7210da7beb76a01ae94d56b7"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1m8xn3x5im=function(){return actualCoverage;};}return actualCoverage;}cov_1m8xn3x5im();import{createTheme}from'@mui/material/styles';// assets
import colors from'../scss/_themes-vars.module.scss';// project imports
import componentStyleOverrides from'./compStyleOverride';import themePalette from'./palette';import themeTypography from'./typography';/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */cov_1m8xn3x5im().s[0]++;export const theme=customization=>{cov_1m8xn3x5im().f[0]++;const color=(cov_1m8xn3x5im().s[1]++,colors);const themeOption=(cov_1m8xn3x5im().s[2]++,{colors:color,heading:color.grey900,paper:color.paper,backgroundDefault:color.paper,background:color.primaryLight,darkTextPrimary:color.grey700,darkTextSecondary:color.grey500,textDark:color.grey900,menuSelected:color.secondaryDark,menuSelectedBack:color.secondaryLight,divider:color.grey200,customization});const themeOptions=(cov_1m8xn3x5im().s[3]++,{direction:'ltr',palette:themePalette(themeOption),mixins:{toolbar:{minHeight:'48px',padding:'16px','@media (min-width: 600px)':{minHeight:'48px'}}},typography:themeTypography(themeOption)});const themes=(cov_1m8xn3x5im().s[4]++,createTheme(themeOptions));cov_1m8xn3x5im().s[5]++;themes.components=componentStyleOverrides(themeOption);cov_1m8xn3x5im().s[6]++;return themes;};export default theme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVUaGVtZSIsImNvbG9ycyIsImNvbXBvbmVudFN0eWxlT3ZlcnJpZGVzIiwidGhlbWVQYWxldHRlIiwidGhlbWVUeXBvZ3JhcGh5IiwidGhlbWUiLCJjdXN0b21pemF0aW9uIiwiY29sb3IiLCJ0aGVtZU9wdGlvbiIsImhlYWRpbmciLCJncmV5OTAwIiwicGFwZXIiLCJiYWNrZ3JvdW5kRGVmYXVsdCIsImJhY2tncm91bmQiLCJwcmltYXJ5TGlnaHQiLCJkYXJrVGV4dFByaW1hcnkiLCJncmV5NzAwIiwiZGFya1RleHRTZWNvbmRhcnkiLCJncmV5NTAwIiwidGV4dERhcmsiLCJtZW51U2VsZWN0ZWQiLCJzZWNvbmRhcnlEYXJrIiwibWVudVNlbGVjdGVkQmFjayIsInNlY29uZGFyeUxpZ2h0IiwiZGl2aWRlciIsImdyZXkyMDAiLCJ0aGVtZU9wdGlvbnMiLCJkaXJlY3Rpb24iLCJwYWxldHRlIiwibWl4aW5zIiwidG9vbGJhciIsIm1pbkhlaWdodCIsInBhZGRpbmciLCJ0eXBvZ3JhcGh5IiwidGhlbWVzIiwiY29tcG9uZW50cyJdLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlVGhlbWV9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuXHJcbi8vIGFzc2V0c1xyXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL3Njc3MvX3RoZW1lcy12YXJzLm1vZHVsZS5zY3NzJztcclxuXHJcbi8vIHByb2plY3QgaW1wb3J0c1xyXG5pbXBvcnQgY29tcG9uZW50U3R5bGVPdmVycmlkZXMgZnJvbSAnLi9jb21wU3R5bGVPdmVycmlkZSc7XHJcbmltcG9ydCB0aGVtZVBhbGV0dGUgZnJvbSAnLi9wYWxldHRlJztcclxuaW1wb3J0IHRoZW1lVHlwb2dyYXBoeSBmcm9tICcuL3R5cG9ncmFwaHknO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudCB0aGVtZSBzdHlsZSBhbmQgc3RydWN0dXJlIGFzIHBlciBNYXRlcmlhbC1VSVxyXG4gKiBAcGFyYW0ge0pzb25PYmplY3R9IGN1c3RvbWl6YXRpb24gY3VzdG9taXphdGlvbiBwYXJhbWV0ZXIgb2JqZWN0XHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoZW1lID0gKGN1c3RvbWl6YXRpb24pID0+IHtcclxuICBjb25zdCBjb2xvciA9IGNvbG9ycztcclxuXHJcbiAgY29uc3QgdGhlbWVPcHRpb24gPSB7XHJcbiAgICBjb2xvcnM6IGNvbG9yLFxyXG4gICAgaGVhZGluZzogY29sb3IuZ3JleTkwMCxcclxuICAgIHBhcGVyOiBjb2xvci5wYXBlcixcclxuICAgIGJhY2tncm91bmREZWZhdWx0OiBjb2xvci5wYXBlcixcclxuICAgIGJhY2tncm91bmQ6IGNvbG9yLnByaW1hcnlMaWdodCxcclxuICAgIGRhcmtUZXh0UHJpbWFyeTogY29sb3IuZ3JleTcwMCxcclxuICAgIGRhcmtUZXh0U2Vjb25kYXJ5OiBjb2xvci5ncmV5NTAwLFxyXG4gICAgdGV4dERhcms6IGNvbG9yLmdyZXk5MDAsXHJcbiAgICBtZW51U2VsZWN0ZWQ6IGNvbG9yLnNlY29uZGFyeURhcmssXHJcbiAgICBtZW51U2VsZWN0ZWRCYWNrOiBjb2xvci5zZWNvbmRhcnlMaWdodCxcclxuICAgIGRpdmlkZXI6IGNvbG9yLmdyZXkyMDAsXHJcbiAgICBjdXN0b21pemF0aW9uXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdGhlbWVPcHRpb25zID0ge1xyXG4gICAgZGlyZWN0aW9uOiAnbHRyJyxcclxuICAgIHBhbGV0dGU6IHRoZW1lUGFsZXR0ZSh0aGVtZU9wdGlvbiksXHJcbiAgICBtaXhpbnM6IHtcclxuICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgIG1pbkhlaWdodDogJzQ4cHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcclxuICAgICAgICAnQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSc6IHtcclxuICAgICAgICAgIG1pbkhlaWdodDogJzQ4cHgnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdHlwb2dyYXBoeTogdGhlbWVUeXBvZ3JhcGh5KHRoZW1lT3B0aW9uKVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRoZW1lcyA9IGNyZWF0ZVRoZW1lKHRoZW1lT3B0aW9ucyk7XHJcbiAgdGhlbWVzLmNvbXBvbmVudHMgPSBjb21wb25lbnRTdHlsZU92ZXJyaWRlcyh0aGVtZU9wdGlvbik7XHJcblxyXG4gIHJldHVybiB0aGVtZXM7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIl0sIm1hcHBpbmdzIjoic3RDQWVZOzJGQWZaLE9BQVFBLFdBQVIsS0FBMEIsc0JBQTFCLENBRUE7QUFDQSxNQUFPQyxPQUFQLEtBQW1CLGtDQUFuQixDQUVBO0FBQ0EsTUFBT0Msd0JBQVAsS0FBb0MscUJBQXBDLENBQ0EsTUFBT0MsYUFBUCxLQUF5QixXQUF6QixDQUNBLE1BQU9DLGdCQUFQLEtBQTRCLGNBQTVCLENBRUE7QUFDQTtBQUNBO0FBQ0EsRyx3QkFFQSxNQUFPLE1BQU1DLE1BQUssQ0FBSUMsYUFBRCxFQUFtQix5QkFDdEMsS0FBTUMsTUFBSywwQkFBR04sTUFBSCxDQUFYLENBRUEsS0FBTU8sWUFBVywwQkFBRyxDQUNsQlAsTUFBTSxDQUFFTSxLQURVLENBRWxCRSxPQUFPLENBQUVGLEtBQUssQ0FBQ0csT0FGRyxDQUdsQkMsS0FBSyxDQUFFSixLQUFLLENBQUNJLEtBSEssQ0FJbEJDLGlCQUFpQixDQUFFTCxLQUFLLENBQUNJLEtBSlAsQ0FLbEJFLFVBQVUsQ0FBRU4sS0FBSyxDQUFDTyxZQUxBLENBTWxCQyxlQUFlLENBQUVSLEtBQUssQ0FBQ1MsT0FOTCxDQU9sQkMsaUJBQWlCLENBQUVWLEtBQUssQ0FBQ1csT0FQUCxDQVFsQkMsUUFBUSxDQUFFWixLQUFLLENBQUNHLE9BUkUsQ0FTbEJVLFlBQVksQ0FBRWIsS0FBSyxDQUFDYyxhQVRGLENBVWxCQyxnQkFBZ0IsQ0FBRWYsS0FBSyxDQUFDZ0IsY0FWTixDQVdsQkMsT0FBTyxDQUFFakIsS0FBSyxDQUFDa0IsT0FYRyxDQVlsQm5CLGFBWmtCLENBQUgsQ0FBakIsQ0FlQSxLQUFNb0IsYUFBWSwwQkFBRyxDQUNuQkMsU0FBUyxDQUFFLEtBRFEsQ0FFbkJDLE9BQU8sQ0FBRXpCLFlBQVksQ0FBQ0ssV0FBRCxDQUZGLENBR25CcUIsTUFBTSxDQUFFLENBQ05DLE9BQU8sQ0FBRSxDQUNQQyxTQUFTLENBQUUsTUFESixDQUVQQyxPQUFPLENBQUUsTUFGRixDQUdQLDRCQUE2QixDQUMzQkQsU0FBUyxDQUFFLE1BRGdCLENBSHRCLENBREgsQ0FIVyxDQVluQkUsVUFBVSxDQUFFN0IsZUFBZSxDQUFDSSxXQUFELENBWlIsQ0FBSCxDQUFsQixDQWVBLEtBQU0wQixPQUFNLDBCQUFHbEMsV0FBVyxDQUFDMEIsWUFBRCxDQUFkLENBQVosQ0FqQ3NDLHdCQWtDdENRLE1BQU0sQ0FBQ0MsVUFBUCxDQUFvQmpDLHVCQUF1QixDQUFDTSxXQUFELENBQTNDLENBbENzQyx3QkFvQ3RDLE1BQU8wQixPQUFQLENBQ0QsQ0FyQ00sQ0F1Q1AsY0FBZTdCLE1BQWYifQ==