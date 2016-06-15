import React, { Component } from 'react'
import Radium from 'radium'
import { Link } from 'react-router'

import WeatherCard from '../components/WeatherCard'
import { getWeatherByCity } from '../api/Weather'

class Forecast extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      forecast: []
    }
  }

  async componentDidMount () {
    const json = await getWeatherByCity(this.props.routeParams.location)
    const data = json.data.list

    data.forEach((datum) => {
      datum.location = this.props.routeParams.location
    })

    this.setState({
      forecast: data,
      isLoading: false
    })
  }

  renderBasicWeatherCard (dayForecast) {
    const location = this.props.routeParams.location
    const dayUnixTime = dayForecast.dt

    return (
      <Link style={styles.link} key={dayUnixTime} to={`forecast/${location}/${dayUnixTime}`}>
        <WeatherCard style={styles.link} mode='small' data={dayForecast} />
      </Link>
    )
  }

  render () {
    if (this.state.isLoading) {
      return (
        <div>
          <h2 style={styles.heading}>Loading...</h2>
        </div>
      )
    }
    else {
      return (
        <div>
          <h2 style={styles.heading}>The {this.props.routeParams.location} Forecast MothaFucka!</h2>
          <div style={styles.forecastContainer}>
            {this.state.forecast.map(this.renderBasicWeatherCard.bind(this))}
          </div>
        </div>
      )
    }
  }
}

const styles = {
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
}

export default Radium(Forecast)
