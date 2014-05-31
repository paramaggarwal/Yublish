/** @jsx React.DOM */

var React = require('react');
var marked = require('../vendor/react-marked');

module.exports = React.createClass({
  getInitialState: function() {
    var now = new Date();

    return {
      id: now.getTime(),
      title: '',
      text: '',

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
        <form method="post" onSubmit={this.handleSubmit}>
          <input type="hidden" name="id" value={this.state.id} />
          <input onChange={this.onChangeTitle} cols="50" name="title" value={this.state.title} /><br />
          <textarea rows="15" cols="50" onChange={this.onChangeText} name="text" value={this.state.text}></textarea><br />
          <button type="submit">Save</button>
        </form>
        <div>{ this.renderOutput() }</div>
      </div>
    );
  }
});
