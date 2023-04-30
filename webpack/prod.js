const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    app: './src/scripts/index.js'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inlineSource: '.(js|css)$',
      scriptLoading: 'blocking'
    }),
    new HtmlInlineScriptPlugin(HtmlWebpackPlugin)
  ]
});