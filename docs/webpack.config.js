'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let entry;
if (process.env.BUILD === 'true') {
  entry = ['./app.js', '../src/external'];
} else {
  entry = [
    './docs/app.js',
    './src/external',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8081',
  ];
}

module.exports = {
  entry,
  output: {
    path: `${__dirname}/static`,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8081/',
  },
  resolve: {
    root: [
      path.resolve('../node_modules'),
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
    new ExtractTextPlugin('styles.css'),
  ],
  devtool: 'source-map',
};
