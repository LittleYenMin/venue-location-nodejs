const venue = require('../models/venue.js')

exports.getLocationByCountry = async function (req, res) {
  const country = req.params.country
  const result = await venue.getLocationByCountry(country)

  const shortest = await venue.getShortestDistanceByLonLat(100.680045, 10.7926179)
  console.log(shortest)
  res.json({
    total: result.length,
    datas: result
  })
}
