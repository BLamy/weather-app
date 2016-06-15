import React, { Component } from 'react'

import WeatherCard from '../components/WeatherCard'

import { getWeatherByCity } from '../api/Weather'

class ForecastDetail extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      forecast: {}
    }
  }

  async componentDidMount () {
    const day = parseInt(this.props.routeParams.day)

    const json = await getWeatherByCity(this.props.routeParams.location)

    let data =  json.data.list.find((dayForecast) => {
      return dayForecast.dt === day
    })

    data.location = this.props.routeParams.location

    this.setState({
      forecast: data,
      isLoading: false
    })
  }

  render () {
    const { isLoading, forecast } = this.state

    if (isLoading) {
      return (
        <h2>Loading...</h2>
      )
    }
    else {
      return (
        <WeatherCard mode='large' data={forecast} />
      )
    }
  }
}

export default ForecastDetail
