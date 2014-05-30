/** @jsx React.DOM */

var React = require('react');
var marked = require('react-marked');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      title: '',
      text: ''
    };
  },
  onChangeTitle: function(e) {
    this.setState({
      title: e.target.value
    });
  },
  onChangeText: function(e) {
    this.setState({
      text: e.target.value
    });
  },
  handleSubmit: function() {

  },
  renderOutput: function() {
    return marked(this.state.text);
  },
  render: function() {
    return (
      <div>
        <h1>Create New Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChangeTitle} value={this.state.title} />
          <input onChange={this.onChangeText} value={this.state.text} />
          <button>Save</button>
        </form>
        <div>{this.renderOutput()}</div>
      </div>
    );
  }
});
