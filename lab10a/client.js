/* @flow weak */

"use strict";
var React = require('react');
//var Home = React.createFactory(require('./components/Home'));
var Home = require('./components/Home');

document.addEventListener("DOMContentLoaded", function(event) {
      React.render(<Home />, document.body);

});

// React.render(<Home environment="browser" />, document.body);
