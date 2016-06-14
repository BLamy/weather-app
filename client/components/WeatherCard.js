var React = require('react');
var Radium = require('radium');

var PropTypes = React.PropTypes;
var moment = require('moment');

var Weather = require('../api/Weather');
var calcWindDirection = require('../utils/utils').calcWindDirection;

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
      <div style={[styles.clickableCard, styles.card]}>
        <img style={styles.image} src={iconUrl} />
        <h3 style={styles.heading}>{date}</h3>
      </div>
    );
  }
  else if (props.mode === 'large') {
    return (
      <div style={styles.card}>
        <img style={styles.image} src={iconUrl} />
        <h3 style={styles.heading}>{date}</h3>
        <h3 style={styles.heading}>{location}</h3>
        <h3 style={styles.heading}>{description}</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>{temp.max}&deg; F/{temp.min}&deg; F</li>
          <li style={styles.listItem}>Cloud Cover: {cloudPercent}%</li>
          <li style={styles.listItem}>Humidity: {humidity}%</li>
          <li style={styles.listItem}>Wind: {windSpeed} mph {windDirection} ({windDirectionAngle}&deg;)</li>
          <li style={styles.listItem}>Pressure: {pressure} mbar</li>
        </ul>
      </div>
    );
  }
}

// TODO: Diego 20160613: Add detailed shape proptype for data object
WeatherCard.propTypes = {
  data: PropTypes.object.isRequired,
  mode: PropTypes.oneOf(['small', 'large']).isRequired
};

WeatherCard.defaultProps = {
  data: {
    dt: moment().valueOf(),
    weather: [{ icon: '01d' }]
  },
  mode: 'small'
};

var styles = {
  clickableCard: {
    color: 'blue',
    ':hover': {
      backgroundColor: 'blue',
      color: 'white'
    }
  },
  card: {
    color: 'blue',
    padding: '20px',
    textAlign: 'center'
  },
  image: {
    width: '182px'
  },
  heading: {
    margin: '0px',
    padding: '5px',
    textTransform: 'capitalize',
    fontSize: '24px'
  },
  listItem: {
    listStyle: 'none',
    padding: '5px',
    textTransform: 'capitalize',
    color: 'blue',
    fontWeight: 'bold'
  },
  list: {
    padding: '10px 0px',
    margin: '0px'
  }
};

module.exports = Radium(WeatherCard);
