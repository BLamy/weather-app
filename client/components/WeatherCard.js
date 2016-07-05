import React, { PropTypes } from 'react'
import Radium from 'radium'
import moment from 'moment'

import { getWeatherIconUrl } from '../api/Weather'
import { calcWindDirection } from '../utils/utils'

const SmallCard = ({ iconUrl, date }) => (
  <div style={[styles.clickableCard, styles.card]}>
    <img data-id='icon' style={styles.image} src={iconUrl} />
    <h3 data-id='date' style={styles.heading}>{date}</h3>
  </div>
)

const LargeCard = ({
    iconUrl, date, location, description, temp, cloudPercent,
    humidity, windSpeed, windDirection, windDirectionAngle, pressure
  }) => (
  <div style={styles.card}>
    <img data-id='icon' style={styles.image} src={iconUrl} />
    <h3 data-id='date' style={styles.heading}>{date}</h3>
    <h3 data-id='location' style={styles.heading}>{location}</h3>
    <h3 data-id='description' style={styles.heading}>{description}</h3>
    <ul style={styles.list}>
      <li data-id='temp' style={styles.listItem}>{temp.max}&deg; F/{temp.min}&deg; F</li>
      <li data-id='cloudPercent' style={styles.listItem}>Cloud Cover: {cloudPercent}%</li>
      <li data-id='humidity' style={styles.listItem}>Humidity: {humidity}%</li>
      <li data-id='wind' style={styles.listItem}>Wind: {windSpeed} mph {windDirection} ({windDirectionAngle}&deg;)</li>
      <li data-id='pressure' style={styles.listItem}>Pressure: {pressure} mbar</li>
    </ul>
  </div>
)

const WeatherCard = ({ mode, data }) => {
  const date = moment(data.dt * 1000).format('dddd, MMMM D')
  const iconUrl = getWeatherIconUrl(data.weather[0].icon)

  if (mode === 'small') {
    return SmallCard({iconUrl, date});
  }
  else if (mode === 'large') {
    const {location, temp, humidity, pressure} = data;
    const cloudPercent = data.clouds
    const windSpeed = data.speed
    const windDirectionAngle = data.deg
    const windDirection = calcWindDirection(data.deg)
    const description = data.weather[0].description

    return LargeCard({
        iconUrl, date, location, description, temp, cloudPercent,
        humidity, windSpeed, windDirection, windDirectionAngle, pressure
      });
  }
}

WeatherCard.propTypes = {
  data: PropTypes.object.isRequired,
  mode: PropTypes.oneOf(['small', 'large']).isRequired
}

WeatherCard.defaultProps = {
  data: {
    dt: moment().valueOf(),
    weather: [{ icon: '01d' }]
  },
  mode: 'small'
}

const styles = {
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
}

export { WeatherCard };// Headless Test without Radium

export default Radium(WeatherCard)
