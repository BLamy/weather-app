var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Hello World!</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
