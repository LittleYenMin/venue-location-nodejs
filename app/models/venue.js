const fs = require('fs')
const Papa = require('papaparse')

/**
 * set header true to get value with field:
 */
function getCsvDatas () {
  return new Promise((resolve, reject) => {
    const file = fs.createReadStream('db.csv')
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        resolve(results.data)
      },
      error: function (error) {
        reject(error)
      }
    })
  })
}

function splitLngLatPoint (str) {
  return str.split('POINT(')[1].split(')')[0].split(' ')
}

function getDistance (x1, x2, y1, y2) {
  const x = Math.pow(x1 - x2, 2)
  const y = Math.pow(y1 - y2, 2)
  return Math.sqrt(x + y)
}

exports.getLocationByCountry = async function (country) {
  const datas = await getCsvDatas()
  return datas.filter(function (val, index, array) {
    return val.country === country
  })
}

exports.getShortestDistanceByLonLat = async function (latitude, longitude) {
  const datas = await getCsvDatas()
  let shortestDistance = Number.MAX_VALUE
  datas.forEach(element => {
    let lan = 0
    let lng = 0
    if (element.lng_lat_point !== '' && element.lng_lat_point) {
      const lanLng = splitLngLatPoint(element.lng_lat_point)
      lan = lanLng[0]
      lng = lanLng[1]
    }

    element.distance = getDistance(lan, latitude, lng, longitude)
    shortestDistance = Math.min(element.distance, shortestDistance)
  })
  return datas.filter(function (val, index, array) {
    return val.distance === shortestDistance
  })
}
