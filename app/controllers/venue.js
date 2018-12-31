const venue = require('../models/venue.js')

exports.getLocationByCountry = async function (req, res) {
  const country = req.params.country
  const result = await venue.getLocationByCountry(country)
  res.json({
    total: result.length,
    datas: result
  })
}
