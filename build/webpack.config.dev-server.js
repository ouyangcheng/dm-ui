'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const _DIR_ = process.cwd()

module.exports = {
  entry: {
    bootstrap: ['./test/bootstrap.js']
  },
  output: {
    path: '/',
    publicPath: '/'
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
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
          js: 'babel-loader',
          css: 'style-loader!css-loader!sass-loader'
        }
      }
    }, {
      test: /\.js$/,
      include: [
        path.resolve('test'),
        path.resolve('src')
      ],
      loader: 'babel-loader'
    }, {
      test: /\.html$/,
      use: 'html-loader'
    }]
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ // 生成首页
      chunks: ['bootstrap'],
      favicon: `${_DIR_}/test/favicon.ico`,
      template: `${_DIR_}/test/template.ejs`,
      filename: 'index.html',
      env: 'dev-server'
    })
  ]
}
