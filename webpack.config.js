'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/lib`,
    filename: 'plasma.js',
  },
  resolve: {
    root: [
      path.resolve('./node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.module.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!resolve-url!sass'
        )
      },
      {
        test: /^((?!\.module).)*scss$/,
        loader: 'style!css!resolve-url!sass',
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("plasma.css")
  ]
};