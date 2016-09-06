'use strict';

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'Plasma',
    libraryTarget: 'commonjs'
  },
  resolve: {
    root: [
      path.resolve('./node_modules'),
    ],
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path][local]__[hash:base64:5]!resolve-url!sass'
        ),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};
