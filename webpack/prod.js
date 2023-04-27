const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      inject: 'body',
      scriptLoading: 'blocking',
      inlineSource: '.(js)$',
      templateParameters: {
        'js': '<%= htmlWebpackPlugin.files.js[0] %>'
      }
    })
  ]
});
