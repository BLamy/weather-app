var React = require('react');

var IndexLink = require('react-router').IndexLink;

var GetWeatherForm = require('../components/GetWeatherForm');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <nav>
          <IndexLink to='/'>WTF's the weather?</IndexLink>
          <GetWeatherForm />
        </nav>

        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
