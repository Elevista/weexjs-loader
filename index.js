const path = require('path'), loaderUtils = require('loader-utils')
const weexjsLoaderPath = path.resolve(__dirname, './weexjs-loader.js')
module.exports = function () {
  let request = loaderUtils.getRemainingRequest(this)
  let importString = loaderUtils.stringifyRequest(this, '!!weex-loader!' + weexjsLoaderPath + '!' + request)
  return `import weexComponent from ${importString};\n`
    + 'export default weexComponent;'
}
