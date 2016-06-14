var React = require('react');
var Radium = require('radium');
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
      <Link style={styles.link} key={dayForecast.dt} to={'forecast/' + location + '/' + day}>
        <WeatherCard style={styles.link} mode='small' data={dayForecast} />
      </Link>
    );
  },
  render: function () {
    if (this.state.isLoading) {
      return (
        <div>
          <h2 style={styles.heading}>Loading...</h2>
        </div>
      );
    }
    else {
      return (
        <div>
          <h2 style={styles.heading}>The {this.props.routeParams.location} Forecast MothaFucka!</h2>
          <div style={styles.forecastContainer}>
            {this.state.forecast.map(this.renderBasicWeatherCard)}
          </div>
        </div>
      );
    }
  }
});

var styles = {
  heading: {
    textAlign: 'center'
  },
  forecastContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  link: {
    textDecoration: 'none'
  }
};

module.exports = Radium(Forecast);
