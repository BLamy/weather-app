var utils = {
  calcWindDirection: calcWindDirection
};

function calcWindDirection (deg) {
  var direction;

  if (typeof deg === 'undefined') {
    deg = 0;
  }

  if (deg < 0) {
    deg = 360 + deg;
  }

  if (deg >= 348.75 || deg < 11.25) {
    direction = 'North';
  }
  else if (deg >= 11.25 && deg < 33.75) {
    direction = 'North-Northeast';
  }
  else if (deg >= 33.75 && deg < 56.25) {
    direction = 'Northeast';
  }
  else if (deg >= 56.25 && deg < 78.75) {
    direction = 'East-Northeast';
  }
  else if (deg >= 78.75 && deg < 101.25) {
    direction = 'East';
  }
  else if (deg >= 101.25 && deg < 123.75) {
    direction = 'East-Southeast';
  }
  else if (deg >= 123.75 && deg < 146.25) {
    direction = 'Southeast';
  }
  else if (deg >= 146.25 && deg < 168.75) {
    direction = 'South-Southeast';
  }
  else if (deg >= 168.75 && deg < 191.25) {
    direction = 'South';
  }
  else if (deg >= 191.25 && deg < 213.75) {
    direction = 'South-Southwest';
  }
  else if (deg >= 213.75 && deg < 236.25) {
    direction = 'Southwest';
  }
  else if (deg >= 236.25 && deg < 258.75) {
    direction = 'West-Southwest';
  }
  else if (deg >= 258.75 && deg < 281.25) {
    direction = 'West';
  }
  else if (deg >= 281.25 && deg < 303.75) {
    direction = 'West-Northwest';
  }
  else if (deg >= 303.75 && deg < 326.25) {
    direction = 'Northwest';
  }
  else if (deg >= 326.25 && deg < 348.75) {
    direction = 'North-Northwest';
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

module.exports = utils;
