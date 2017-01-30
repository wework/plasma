/* eslint-disable import/no-extraneous-dependencies, no-console */

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const port = process.env.PORT || 8082;

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    library: 'Plasma',
    libraryTarget: 'umd',
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
        loaders: ['babel-loader?presets[]=es2015,presets[]=react'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path][local]__[hash:base64:5]!resolve-url!sass'
        ),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: 'build',
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
};
