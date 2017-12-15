'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var entries = {
    preview: [require.resolve('./polyfills'), require.resolve('./globals')],
    manager: [require.resolve('./polyfills'), _path2.default.resolve(__dirname, '../../client/manager')]
  };

  var config = {
    bail: true,
    devtool: '#cheap-module-source-map',
    entry: entries,
    output: {
      filename: 'static/[name].[chunkhash].bundle.js',
      // Here we set the publicPath to ''.
      // This allows us to deploy storybook into subpaths like GitHub pages.
      // This works with css and image loaders too.
      // This is working for storybook since, we don't use pushState urls and
      // relative URLs works always.
      publicPath: ''
    },
    plugins: [new _webpack2.default.DefinePlugin((0, _utils.loadEnv)({ production: true })), new _webpack2.default.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: false,
      output: {
        comments: false,
        screw_ie8: true
      }
    })],
    module: {
      rules: [{
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        query: _babel2.default,
        include: _utils.includePaths,
        exclude: _utils.excludePaths
      }]
    },
    resolve: {
      // Since we ship with json-loader always, it's better to move extensions to here
      // from the default config.
      extensions: ['.js', '.json', '.jsx'],
      // Add support to NODE_PATH. With this we could avoid relative path imports.
      // Based on this CRA feature: https://github.com/facebookincubator/create-react-app/issues/253
      modules: ['node_modules'].concat(_utils.nodePaths)
    }
  };

  return config;
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _babel = require('./babel.prod');

var _babel2 = _interopRequireDefault(_babel);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }