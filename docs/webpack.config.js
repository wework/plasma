var path = require('path');
var webpack = require('webpack');

console.log(path.resolve('../node_modules'));

module.exports = {
  entry: './index.js',
  output: { path: `${__dirname}/build`, filename: 'bundle.js' },
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
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass'
        ]
      }
    ]
  },
};