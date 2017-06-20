/**
 * Created by otherlite on 16/9/6.
 */
'use strict'

const chalk = require('chalk')
const path = require('path')
const webpack = require('webpack')
const Clean = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

module.exports = {
  entry: {
    dmui: ['./src/index.js']
  },
  output: {
    path: path.resolve('dist/pd'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    jquery: {
      amd: 'jquery',
      root: '$',
      commonjs: 'jquery',
      commonjs2: 'jquery'
    },
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }, {
      test: /\.(gif|jpg|swf|png)\??.*$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: 'style-loader!css-loader!sass-loader'
        }
      }
    }, {
      test: /\.js$/,
      include: [
        path.resolve('src')
      ],
      loader: 'babel-loader'
    }, {
      test: /\.html$/,
      use: 'html-loader'
    }]
  },
  resolve: {
    modules: ['node_modules']
  },
  plugins: [
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: true,
      width: 60
    }),
    new Clean(['dist/pd'], {
      root: process.cwd()
    }),
        /* 跟业务代码一样，该兼容的还是得兼容 */
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new webpack.optimize.UglifyJsPlugin({ // 压缩
      compress: {
        warnings: false
      }
    })
  ]
}
