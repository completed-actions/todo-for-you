'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env['NODE_ENV'] = 'development';

module.exports = {
  mode: 'development',
  entry: './client/src/index.js',
  output: {
    pathinfo: true,
    filename: 'bundle.js',
    publicPath: '',
    devtoolModuleFilenameTemplate: (info) =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },

  module: {
    rules: [
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },

      {
        test: /\.(js|jsx|mjs)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-import'),
                require('postcss-preset-env'),
                require('postcss-flexbugs-fixes')
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '../public/index.html')
    }),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'cheap-module-source-map',
  bail: true,
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    compress: true
  }
};
