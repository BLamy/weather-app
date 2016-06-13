var React = require('react');

var WeatherCard = require('../components/WeatherCard');

var Weather = require('../api/Weather');

var ForecastDetail = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      forecast: {}
    }
  },
  componentDidMount: function () {
    var day = parseInt(this.props.routeParams.day);

    Weather.getWeatherByCity(this.props.routeParams.location)
      .then(function (json) {
        return json.data.list.find(function (dayForecast) {
          return dayForecast.dt === day;
        });
      })
      .then(function (data) {
        data.location = this.props.routeParams.location
        return data;
      }.bind(this))
      .then(function (data) {
        this.setState({
          forecast: data,
          isLoading: false
        });
      }.bind(this));
  },
  render: function () {
    if (this.state.isLoading) {
      return (
        <h2>Loading...</h2>
      );
    }
    else {
      return (
        <WeatherCard mode='large' data={this.state.forecast} />
      );
    }
  }
});

module.exports = ForecastDetail;
