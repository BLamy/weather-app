var React = require('react');

var GetWeatherForm = React.createClass({
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

    console.log(this.state.location);
    // this.refs.locationInput.value
  },
  render: function () {
    return (
      <form onSubmit={this.setLocation}>
        <input
          type='text'
          ref='locationInput'
          value={this.state.location}
          onChange={this.handleChangeLocation}
          placeholder='Boston, MA' />
        <button type='submit'>Get Weather</button>
      </form>
    );
  }
});

module.exports = GetWeatherForm;
