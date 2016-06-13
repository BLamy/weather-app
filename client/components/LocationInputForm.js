var React = require('react');

// var getCities = require('../utils/getCities');

var LocationInputForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function () {
    return {
      location: ''
    };
  },
  handleChangeLocation: function (e) {
    this.setState({
      location: e.target.value
    });
  },
  setLocation: function (e) {
    e.preventDefault();

    // route to forecast with location param is it's in the right format
    this.context.router.push({
      pathname: '/forecast/' + encodeURI(this.state.location),
    });
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.setLocation}>
         <input
            type='text'
            ref='locationInput'
            value={this.state.location}
            onChange={this.handleChangeLocation}
            placeholder='Boston' />
          <button type='submit'>Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = LocationInputForm;
