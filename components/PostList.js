/** @jsx React.DOM */

var React = require('react');
var ViewPost = require('./ViewPost');

module.exports = React.createClass({
  render: function() {
  	var viewPost = function(post1) {
    	return <li><ViewPost post=post1 /></li>;
    };
  	
    return (
    	<ul>{ this.props.posts.map(viewPost) }</ul>
    );
  }
});
