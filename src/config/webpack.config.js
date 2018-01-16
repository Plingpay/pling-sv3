var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

module.exports = function () {
  useDefaultConfig[process.env.NODE_ENV].resolve.alias = {
    "@environment": path.resolve(__dirname + '/../../src/config/config.' + process.env.NODE_ENV + '.ts')
  };
  return useDefaultConfig;
};
