import axios from 'axios'

const APIKEY = '3290f42de9f8225135723e467d04e91c'
const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?'

export function getWeatherByCity (cityName) {
  const cityQuery = `q=${cityName}`
  const unitsQuery = '&units=imperial'
  const url = `${BASE_URL}${cityQuery}${unitsQuery}&APPID=${APIKEY}`

  return axios.get(url)
}

export function getWeatherIconUrl (iconCode) {
  return `http://openweathermap.org/img/w/${iconCode}.png`
}
