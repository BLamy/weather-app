var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var WeatherCard = require('../components/WeatherCard');

var Weather = require('../api/Weather');

var Forecast = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      forecast: []
    };
  },
  componentDidMount: function () {
    Weather.getWeatherByCity(this.props.routeParams.location)
      .then(function (json) {
        var dataArray = json.data.list;

        dataArray.forEach(function(datum) {
          datum.location = this.props.routeParams.location;
        }.bind(this));

        return dataArray;
      }.bind(this))
      .then(function (data) {
        this.setState({
          forecast: data,
          isLoading: false
        });
      }.bind(this));
  },
  renderBasicWeatherCard: function (dayForecast) {
    var location = this.props.routeParams.location;
    var day = dayForecast.dt;

    return (
      <Link key={dayForecast.dt} to={'forecast/' + location + '/' + day}>
        <WeatherCard mode='small' data={dayForecast} />
      </Link>
    );
  },
  render: function () {
    if (this.state.isLoading) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }
    else {
      return (
        <div>
          <h2>The {this.props.routeParams.location} Forecast MothaFucka!</h2>
          <div>
            {this.state.forecast.map(this.renderBasicWeatherCard)}
          </div>
        </div>
      );
    }
  }
});

module.exports = Forecast;
