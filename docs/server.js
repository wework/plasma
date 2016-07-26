"use strict";
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');

var metadata;

// --------proxy----------
var app = express();
// proxy the request for static assets
app.use('/live', proxy(url.parse('http://localhost:8081')));

app.get('/*', function(req, res) {
  res.set('Content-Type', 'text/html');
  res.send(new Buffer(`<!doctype html> \
    <html> \
      <head> \
        <meta charset='UTF-8'> \
        <title>Plasma</title> \
        <link rel='stylesheet' type='text/css' href='/live/styles.css'> \
        <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min.js'></script> \
        <script src='//cdn.jsdelivr.net/jquery.color-animation/1/mainfile'></script> \
        <script> \
          window.DOCDATA = ${JSON.stringify(metadata)}; \
        </script> \
      </head> \
      <body> \
        <div id='app'></div> \
        <script src='/live/bundle.js'></script> \
      </body> \
    </html>`
  ));
});


// -----webpack-dev-server------
var server = new WebpackDevServer(webpack(config), {
  contentBase: __dirname,
  hot: true,
  quiet: false,
  noInfo: false,
  publicPath: "/",
  stats: { colors: true }
});

require('./generate-metadata').default().then(function(data) {
  require('./generate-html').default()
  metadata = data;
  server.listen(8081, "localhost", function() {});
  app.listen(8080);
});