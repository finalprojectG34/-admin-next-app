function cov_1axwg0yuxr(){var path="C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\cypress\\plugins\\index.js";var hash="c98815831951c8cb2e795b59264f43b0dc3b0196";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"C:\\Users\\nathn\\Desktop\\final project\\admin-next-app\\cypress\\plugins\\index.js",statementMap:{"0":{start:{line:28,column:0},end:{line:34,column:1}},"1":{start:{line:30,column:4},end:{line:30,column:54}},"2":{start:{line:31,column:4},end:{line:31,column:17}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:28,column:17},end:{line:28,column:18}},loc:{start:{line:28,column:33},end:{line:34,column:1}},line:28}},branchMap:{},s:{"0":0,"1":0,"2":0},f:{"0":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c98815831951c8cb2e795b59264f43b0dc3b0196"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1axwg0yuxr=function(){return actualCoverage;};}return actualCoverage;}cov_1axwg0yuxr();cov_1axwg0yuxr().s[0]++;/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
/**
 * @type {Cypress.PluginConfig}
 */ // eslint-disable-next-line no-unused-vars
// module.exports = (on, config) => {
//     // `on` is used to hook into various events Cypress emits
//     // `config` is the resolved Cypress config
// }
// module.exports = (on, config) => {
//     on('task', require('@cypress/code-coverage/task'))
// }
module.exports=(on,config)=>{cov_1axwg0yuxr().f[0]++;cov_1axwg0yuxr().s[1]++;require('@cypress/code-coverage/task')(on,config);cov_1axwg0yuxr().s[2]++;return config;// `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwib24iLCJjb25maWciLCJyZXF1aXJlIl0sInNvdXJjZXMiOlsiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBUaGlzIGV4YW1wbGUgcGx1Z2lucy9pbmRleC5qcyBjYW4gYmUgdXNlZCB0byBsb2FkIHBsdWdpbnNcbi8vXG4vLyBZb3UgY2FuIGNoYW5nZSB0aGUgbG9jYXRpb24gb2YgdGhpcyBmaWxlIG9yIHR1cm4gb2ZmIGxvYWRpbmdcbi8vIHRoZSBwbHVnaW5zIGZpbGUgd2l0aCB0aGUgJ3BsdWdpbnNGaWxlJyBjb25maWd1cmF0aW9uIG9wdGlvbi5cbi8vXG4vLyBZb3UgY2FuIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3BsdWdpbnMtZ3VpZGVcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gYSBwcm9qZWN0IGlzIG9wZW5lZCBvciByZS1vcGVuZWQgKGUuZy4gZHVlIHRvXG4vLyB0aGUgcHJvamVjdCdzIGNvbmZpZyBjaGFuZ2luZylcblxuLyoqXG4gKiBAdHlwZSB7Q3lwcmVzcy5QbHVnaW5Db25maWd9XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLy8gbW9kdWxlLmV4cG9ydHMgPSAob24sIGNvbmZpZykgPT4ge1xuLy8gICAgIC8vIGBvbmAgaXMgdXNlZCB0byBob29rIGludG8gdmFyaW91cyBldmVudHMgQ3lwcmVzcyBlbWl0c1xuLy8gICAgIC8vIGBjb25maWdgIGlzIHRoZSByZXNvbHZlZCBDeXByZXNzIGNvbmZpZ1xuLy8gfVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IChvbiwgY29uZmlnKSA9PiB7XG4vLyAgICAgb24oJ3Rhc2snLCByZXF1aXJlKCdAY3lwcmVzcy9jb2RlLWNvdmVyYWdlL3Rhc2snKSlcbi8vIH1cblxubW9kdWxlLmV4cG9ydHMgPSAob24sIGNvbmZpZykgPT4ge1xuXG4gICAgcmVxdWlyZSgnQGN5cHJlc3MvY29kZS1jb3ZlcmFnZS90YXNrJykob24sIGNvbmZpZylcbiAgICByZXR1cm4gY29uZmlnXG4gICAgLy8gYG9uYCBpcyB1c2VkIHRvIGhvb2sgaW50byB2YXJpb3VzIGV2ZW50cyBDeXByZXNzIGVtaXRzXG4gICAgLy8gYGNvbmZpZ2AgaXMgdGhlIHJlc29sdmVkIEN5cHJlc3MgY29uZmlnXG59Il0sIm1hcHBpbmdzIjoibStCQWVZO21IQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSxHLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBQSxNQUFNLENBQUNDLE9BQVAsQ0FBaUIsQ0FBQ0MsRUFBRCxDQUFLQyxNQUFMLEdBQWdCLGlEQUU3QkMsT0FBTyxDQUFDLDZCQUFELENBQVAsQ0FBdUNGLEVBQXZDLENBQTJDQyxNQUEzQyxFQUY2Qix3QkFHN0IsTUFBT0EsT0FBUCxDQUNBO0FBQ0E7QUFDSCxDQU5EIn0=