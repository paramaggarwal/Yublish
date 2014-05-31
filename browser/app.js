/** @jsx React.DOM */

var React = require('react');

if (window.location.pathname === '/create') {
	var CreatePost = require('../components/CreatePost');
	React.renderComponent(<CreatePost />, document.getElementById('react-root'));
}
