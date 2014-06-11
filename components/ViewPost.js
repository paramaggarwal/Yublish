/** @jsx React.DOM */

var React = require('react');
var marked = require('../vendor/react-marked');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{ this.props.post.title }</h1>
        <div>{ marked(this.props.post.text) }</div>
        <p>{ this.props.post.id }</p>
      </div>
    );
  }
});
