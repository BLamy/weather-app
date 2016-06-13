var React = require('react');
var PropTypes = React.PropTypes;
var moment = require('moment');

var Weather = require('../api/Weather');

function calcWindDirection (deg) {
  var direction;

  if (typeof deg === 'undefined') {
    deg = 0;
  }

  if (deg < 0) {
    deg = 360 + deg;
  }

  switch (deg) {
    case (deg >= 348.75 || deg < 11.25):
      direction = 'North';
      break;
    case (deg >= 11.25 || deg < 33.75):
      direction = 'North-Northeast';
      break;
    case (deg >= 33.75 || deg < 56.25):
      direction = 'Northeast';
      break;
    case (deg >= 56.25 || deg < 78.75):
      direction = 'East-Northeast';
      break;
    case (deg >= 78.75 || deg < 101.25):
      direction = 'East';
      break;
    case (deg >= 101.25 || deg < 123.75):
      direction = 'East-Southeast';
      break;
    case (deg >= 123.75 || deg < 146.25):
      direction = 'Southeast';
      break;
    case (deg >= 146.25 || deg < 168.75):
      direction = 'South-Southeast';
      break;
    case (deg >= 168.75 || deg < 191.25):
      direction = 'South';
      break;
    case (deg >= 191.25 || deg < 213.75):
      direction = 'South-Southwest';
      break;
    case (deg >= 213.75 || deg < 236.25):
      direction = 'Southwest';
      break;
    case (deg >= 236.25 || deg < 258.75):
      direction = 'West-Southwest';
      break;
    case (deg >= 258.75 || deg < 281.25):
      direction = 'West';
      break;
    case (deg >= 281.25 || deg < 303.75):
      direction = 'West-Northwest';
      break;
    case (deg >= 303.75 || deg < 326.25):
      direction = 'Northwest';
      break;
    case (deg >= 326.25 || deg < 348.75):
      direction = 'North-Northwest';
      break;
  }
  /*
    N 348.75 - 11.25
    NNE 11.25 - 33.75
    NE 33.75 - 56.25
    ENE 56.25 - 78.75
    E 78.75 - 101.25
    ESE 101.25 - 123.75
    SE 123.75 - 146.25
    SSE 146.25 - 168.75
    S 168.75 - 191.25
    SSW 191.25 - 213.75
    SW 213.75 - 236.25
    WSW 236.25 - 258.75
    W 258.75 - 281.25
    WNW 281.25 - 303.75
    NW 303.75 - 326.25
    NNW 326.25 - 348.75
  */

  return direction;
}

function WeatherCard (props) {
  var date = moment(props.data.dt * 1000).format('dddd, MMMM D');
  var iconUrl = Weather.getWeatherIconUrl(props.data.weather[0].icon);
  var location = props.data.location;
  var temp = props.data.temp;
  var cloudPercent = props.data.clouds;
  var humidity = props.data.humidity;
  var windSpeed = props.data.speed;
  var windDirectionAngle = props.data.deg;
  var windDirection = calcWindDirection(props.data.deg);
  var pressure = props.data.pressure;
  var description = props.data.weather[0].description;

  if (props.mode === 'small') {
    return (
      <div>
        <img src={iconUrl} />
        <h3>{date}</h3>
      </div>
    );
  }
  else if (props.mode === 'large') {
    return (
      <div>
        <img src={iconUrl} />
        <h3>{date}</h3>
        <h3>{location}</h3>
        <h3>{description}</h3>
        <ul>
          <li>{temp.max}&deg; F/{temp.min}&deg; F</li>
          <li>Clouds: {cloudPercent}%</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {windSpeed} mph {windDirection} ({windDirectionAngle}&deg;)</li>
          <li>Pressure: {pressure} mbar</li>
        </ul>
      </div>
    );
  }
}

// TODO: Diego 20160613: Add detailed shape proptype for data object
WeatherCard.propTypes = {
  data: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired
};

WeatherCard.defaultProps = {
  data: {
    dt: moment().valueOf(),
    weather: [{ icon: '01d' }]
  },
  mode: 'small'
};

module.exports = WeatherCard;
