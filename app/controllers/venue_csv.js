const Papa = require('papaparse')
const Venue = require('../models/venue.js')

function sendCsvFile (res, data) {
  res.setHeader('Content-disposition', 'attachment; filename=download.csv')
  res.set('Content-Type', 'text/csv')
  res.send(data)
}

exports.getLocationByCountry = async function (req, res, next) {
  try {
    const country = req.params.country
    const locations = await Venue.getLocationByCountry(country)
    sendCsvFile(res, Papa.unparse(locations))
  } catch (e) { next(e) }
}

exports.getLocationByShortestDistance = async function (req, res, next) {
  try {
    const latitude = req.params.latitude
    const longitude = req.params.longitude
    const locations = await Venue.getShortestDistanceByLatAndLong(latitude, longitude)
    sendCsvFile(res, Papa.unparse(locations))
  } catch (e) { next(e) }
}

exports.getById = async function (req, res, next) {
  try {
    const referenceId = req.params.id
    const location = await Venue.getById(referenceId)
    sendCsvFile(res, Papa.unparse([location]))
  } catch (e) { next(e) }
}
