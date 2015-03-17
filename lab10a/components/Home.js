/* @flow weak */

/*global fetch*/

"use strict";
var b = require('react-bootstrap');
var Jumbotron = b.Jumbotron;
var Button = b.Button;

var React = require('react');
var Title = require('react-document-title');

var Home = React.createClass({

  render: function() {

  //  console.log(this.state);
    return (
      <Jumbotron>
    <h1>Hello WORLD!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><Button bsStyle="primary">HELLO more</Button></p>
  </Jumbotron>
    );
  }

});

module.exports = Home;
