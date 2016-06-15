import React, { PropTypes } from 'react'
import Radium from 'radium'
import moment from 'moment'

import { getWeatherIconUrl } from '../api/Weather'
import { calcWindDirection } from '../utils/utils'

function WeatherCard (props) {
  const date = moment(props.data.dt * 1000).format('dddd, MMMM D')
  const iconUrl = getWeatherIconUrl(props.data.weather[0].icon)
  const location = props.data.location
  const temp = props.data.temp
  const cloudPercent = props.data.clouds
  const humidity = props.data.humidity
  const windSpeed = props.data.speed
  const windDirectionAngle = props.data.deg
  const windDirection = calcWindDirection(props.data.deg)
  const pressure = props.data.pressure
  const description = props.data.weather[0].description

  if (props.mode === 'small') {
    return (
      <div style={[styles.clickableCard, styles.card]}>
        <img style={styles.image} src={iconUrl} />
        <h3 style={styles.heading}>{date}</h3>
      </div>
    )
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
    )
  }
}

// TODO: Diego 20160613: Add detailed shape proptype for data object
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

export default Radium(WeatherCard)
