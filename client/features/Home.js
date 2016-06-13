var React = require('react');

var LocationInputForm = require('../components/LocationInputForm');

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Enter a City and State</h2>
        <LocationInputForm />
      </div>
    );
  }
});

module.exports = Home;
