/* eslint-disable import/no-extraneous-dependencies, no-console */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config)).listen(8082, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at http://localhost:8082/');
});
