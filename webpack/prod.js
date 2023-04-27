const { merge } = require('webpack-merge');
const baseConfig = require('./base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});