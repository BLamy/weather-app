var _ = require('lodash');

var cityCollection = require('../data/cityCollection');

function findCities (collection, searchTerm, limit) {
  var results = [];
  for (var i = 0; i < collection.length; i++) {
    var obj = collection[i];
    var aMatch = obj.name.toLowerCase().indexOf(searchTerm) !== -1;

    if (aMatch && results.length <= limit) {
      results.push(obj);
    }

    if (results.length === limit) {
      break;
    }
  }

  return results;
}

var getCities = function (searchTerm, limit) {
  limit = limit ? limit : 10;
  var cities = [];

  var promise = new Promise(function (resolve, reject) {

    if (searchTerm && searchTerm.length >= 3) {
      cities = findCities(cityCollection, searchTerm, limit);
    }
    else {
      cities = [];
    }

    resolve(cities);
  });

  return promise;
};

module.exports = getCities;
