/* eslint-disable import/no-extraneous-dependencies, no-console */

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'Plasma',
    libraryTarget: 'umd',
  },
  resolve: {
    root: [
      path.resolve('./node_modules'),
    ],
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['babel-loader?presets[]=es2015,presets[]=react,plugins[]=lodash'],
        exclude: /node_modules/,
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
    // new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
};
