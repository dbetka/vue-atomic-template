const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: common.output.path,
    },
    compress: true,
    port: 9000,
  },
  output: {
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      USER: JSON.stringify('demo@demo.com'),
      PASSWORD: JSON.stringify('Whatusea1'),
      ADMIN_USER: JSON.stringify('admin@demo.com'),
      ADMIN_PASSWORD: JSON.stringify('Whatusea1'),
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),
  ],
})
