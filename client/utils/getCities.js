import _ from 'lodash'

// {"_id":5386053,"name":"Rancho San Diego","country":"US","coord":{"lon":-116.935303,"lat":32.747269}}
import cityCollection from '../data/cityCollection'

function findCities (collection, searchTerm, limit) {
  let results = []

  for (let i = 0; i < collection.length; i++) {
    let obj = collection[i]
    let aMatch = obj.name.toLowerCase().indexOf(searchTerm) !== -1

    if (aMatch && results.length <= limit) {
      results.push(obj)
    }

    if (results.length === limit) {
      break
    }
  }

  return results
}

var getCities = function (searchTerm, limit = 10) {
  let cities = []

  var promise = new Promise((resolve, reject) => {
    if (searchTerm && searchTerm.length >= 3) {
      cities = findCities(cityCollection, searchTerm, limit)
    }
    else {
      cities = []
    }

    resolve(cities)
  })

  return promise
}

export default getCities
