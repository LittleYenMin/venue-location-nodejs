const Fs = require('fs')
const Papa = require('papaparse')

/**
 * set header true to get value with field:
 */
function getCsvDatas () {
  return new Promise((resolve, reject) => {
    const file = Fs.createReadStream(process.env.CSV_DB_FILE || 'db.csv')
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

function getLatLongPoint (str) {
  return str.match(/[+-]?([0-9]*[.])?[0-9]+/g)
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

exports.getShortestDistanceByLatAndLong = async function (latitude, longitude) {
  const datas = await getCsvDatas()
  let shortestDistance = Number.MAX_VALUE
  datas.forEach(element => {
    try {
      let lat = 0
      let lng = 0
      if (element.lng_lat_point !== '' && element.lng_lat_point) {
        const latlng = getLatLongPoint(element.lng_lat_point)
        lat = latlng[1]
        lng = latlng[2]
      }
      element.distance = getDistance(lat, latitude, lng, longitude)
      shortestDistance = Math.min(element.distance, shortestDistance)
    } catch (e) {}
  })
  return datas.filter(function (val, index, array) {
    return val.distance === shortestDistance
  })
}

exports.getById = async function (id) {
  const datas = await getCsvDatas()
  if (!(typeof datas[id] === 'undefined')) {
    return datas[id]
  }
  throw new Error(`Can't find by id ${id}`)
}

exports.getDistance = getDistance
exports.getLatLongPoint = getLatLongPoint
exports.getCsvDatas = getCsvDatas
