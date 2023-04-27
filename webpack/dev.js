const { merge } = require('webpack-merge');
const baseConfig = require('./base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    static: {
      directory: './dist',
    },
    watchFiles: ['src/**/*.{html,js}'],
    open: true
  }
});