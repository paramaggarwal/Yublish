/** @jsx React.DOM */

// Simulate long JS load time
setTimeout(function() {
  var React = require('react');
  var CreatePost = require('../components/CreatePost');

  React.renderComponent(<CreatePost />, document.getElementById('react-root'));
}, 3000);