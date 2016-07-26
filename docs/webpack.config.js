'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

let entry;
if (process.env.BUILD === 'true') {
  entry = ['./app.js'];
} else {
  entry = [
    './docs/app.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081'
  ];
}

module.exports = {
  entry: entry,
  output: {
    path: `${__dirname}/static`,
    filename: 'bundle.js',
    publicPath: "http://localhost:8081/"
  },
  resolve: {
    root: [
      path.resolve('../node_modules')
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
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!resolve-url!sass'
        )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};