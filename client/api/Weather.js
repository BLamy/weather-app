var axios = require('axios');

var APIKEY = '3290f42de9f8225135723e467d04e91c';
var BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?'

function getWeatherByCity (cityName) {
  var cityQuery = 'q=' + cityName;
  var unitsQuery = '&units=imperial';
  var url = BASE_URL + cityQuery + unitsQuery + '&APPID=' + APIKEY;

  return axios.get(url);
}

function getWeatherIconUrl (iconCode) {
  return 'http://openweathermap.org/img/w/' + iconCode + '.png';
}

var Weather = {
  getWeatherByCity: getWeatherByCity,
  getWeatherIconUrl: getWeatherIconUrl
};

module.exports = Weather;
