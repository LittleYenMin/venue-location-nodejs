const venue = require('../models/venue.js')

function getResponseDTO (locations) {
  return {
    total: locations.length,
    datas: locations
  }
}

exports.getLocationByCountry = async function (req, res, next) {
  try {
    const country = req.params.country
    const locations = await venue.getLocationByCountry(country)
    res.json(getResponseDTO(locations))
  } catch (e) { next(e) }
}

exports.getLocationByShortestDistance = async function (req, res, next) {
  try {
    const latitude = req.params.latitude
    const longitude = req.params.longitude
    const locations = await venue.getShortestDistanceByLatAndLong(latitude, longitude)
    res.json(getResponseDTO(locations))
  } catch (e) { next(e) }
}

exports.getById = async function (req, res, next) {
  try {
    const referenceId = req.params.id
    const location = await venue.getById(referenceId)
    res.json(getResponseDTO([location]))
  } catch (e) { next(e) }
}
