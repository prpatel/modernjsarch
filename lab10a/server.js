/* @flow weak */

"use strict";
require("6to5/register");
require('node-jsx').install({extension: '.js'});
var express = require('express');
var compression = require('compression');
var cors = require('cors');
var React = require('react');
var Home = React.createFactory(require('./components/Home'));
var path = require('path');
var _ = require('underscore')
var fs = require('fs');

// Setup the express server
var server = express();
// Gzip all the things
server.use(compression());

// Serve a static directory for the webpack-compiled Javascript and CSS. Only in production since the webpack dev server handles this otherwise.
if (process.env.NODE_ENV === "production") {server.use('/build', express.static(path.join(__dirname, '/build')));}

// Serves up a static directory for images and other assets that we don't (yet) require via Webpack
server.use('/static', express.static(path.join(__dirname, '/static')));

// Cross-origin resource sharing
server.use(cors());

// Our handler for all incoming requests
server.use(function (req, res, next) {

  var Home = React.createFactory(require('./components/Home'));
  var content = React.renderToString(new Home());
  var scriptSrc = "";

  var templateFile = path.join(__dirname, 'templates/index.html');
  var template = _.template(fs.readFileSync(templateFile, 'utf8'));

  // In development, the compiled javascript is served by a WebpackDevServer, which lets us 'hot load' scripts in for live editing.
  if (process.env.NODE_ENV === "development") {
    scriptSrc="http://localhost:8888/build/client.js";
  }

  // In production, we just serve the pre-compiled assets from the /build directory
  if (process.env.NODE_ENV === "production") {
    scriptSrc="/build/client.js";
  }
  var data = {description: '', scriptSrc: scriptSrc, title: "React playground"};
  data.body = content;
  var html = template(data);
  res.send(html);

});

var port = process.env.PORT || 8080;
server.listen(port);

if (process.env.NODE_ENV === "development") {
  console.log('server.js is listening on port ' + port);
}
