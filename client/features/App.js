var React = require('react');

var IndexLink = require('react-router').IndexLink;

var LocationInputForm = require('../components/LocationInputForm');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <nav>
          <IndexLink to='/'>
            <h1>WTF's the weather?</h1>
          </IndexLink>

          <LocationInputForm />
        </nav>

        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
