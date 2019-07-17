/* eslint-disable import/no-extraneous-dependencies, no-console */

const css = require('./css.config');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');

function createEntries(base = '.', basename = '') {
  const regularExpression = /\.jsx?$/;
  const root = path.resolve(__dirname, base);
  function readDirectory(directory, fileCache = {}) {
    return fs.readdirSync(directory).reduce((files, file) => {
      const fullPath = path.resolve(directory, file);
      if (fs.statSync(fullPath).isDirectory()) {
        return readDirectory(fullPath, files);
      }
      if (!regularExpression.test(fullPath)) return files;

      const entryName = fullPath.replace(root, '').replace(regularExpression, '');

      return Object.assign(files, { [`${basename}${entryName}`]: fullPath });
    }, fileCache);
  }

  return readDirectory(root);
}

const componentEntries = createEntries('./src/components', 'components');
const decoratorEntries = createEntries('./src/decorators', 'decorators');
const externalEntries = createEntries('./src/icons', 'external');
const iconEntries = createEntries('./src/icons', 'icons');

const entries = Object.assign(
  {
    dataUtils: './src/dataUtils.js',
  },
  componentEntries,
  decoratorEntries,
  externalEntries,
  iconEntries
);

console.log('ENTRIES', entries);

module.exports = {
  entry: Object.assign(
    {
      index: './src/index.js',
    },
    entries
  ),

  externals: {
    moment: 'moment',
    react: 'react',
    'react-dom': 'react-dom',
    lodash: 'lodash',
    classnames: 'classnames',
    'react-datepicker': 'react-datepicker',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    library: '',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    modules: [path.resolve('./node_modules')],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            `css-loader?modules&importLoaders=1&localIdentName=${css.localIdentName}`,
            'resolve-url-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            `css-loader?importLoaders=1&localIdentName=${css.localIdentName}`,
            'resolve-url-loader',
          ],
        }),
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000&mimetype=image/png',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ExtractTextPlugin('styles.css'),
  ],
};
