const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const webpackRules = require('./rules').rules
const webpackUtils = require('./utils')
const resolve = webpackUtils.resolve

const AppName = 'Whatusea'
const AppVersion = webpackUtils.getAppVersionFromPackageJSON()
const publicPath = 'public'

module.exports = {
  mode: 'development',
  entry: {
    main: 'src/index.ts',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
      // chunks: 'all',
    },
  },
  output: {
    // filename in dev and prod configs
    path: resolve(publicPath),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: webpackRules,
  },
  resolve: {
    alias: {
      src: resolve('src'),
      api: resolve('src/api'),
      map: resolve('src/map'),
      store: resolve('src/store'),
      utils: resolve('src/utils'),
      config: resolve('src/config'),
      dictionary: resolve('src/dictionary'),
      types: resolve('src/types'),
      models: resolve('src/models'),

      atoms: resolve('src/components/atoms'),
      extends: resolve('src/components/extends'),
      mixins: resolve('src/components/mixins'),
      molecules: resolve('src/components/molecules'),
      organisms: resolve('src/components/organisms'),
      pages: resolve('src/components/pages'),
      templates: resolve('src/components/templates'),
    },
    extensions: ['.ts', '.js', '.vue', '.sass', '.css'],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'vue', 'ts'],
      formatter: require.resolve('eslint-friendly-formatter'),
      eslintPath: require.resolve('eslint'),
      useEslintrc: true,
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/img',
          to: 'img',
        },
      ],
    }),
    new webpack.DefinePlugin({
      'APP_NAME': JSON.stringify(AppName),
      'VERSION': JSON.stringify(AppVersion),
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
    }),
  ],
}
