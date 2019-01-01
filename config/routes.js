const Venue = require('../app/controllers/venue.js')
const VenueCsv = require('../app/controllers/venue_csv.js')
module.exports = function (app) {
  app.get('/:country/locations', Venue.getLocationByCountry)
  app.get('/locations/:latitude/:longitude', Venue.getLocationByShortestDistance)

  app.get('/location', Venue.getById)
  app.get('/location/:id', Venue.getById)

  app.get('/csv/:country/locations', VenueCsv.getLocationByCountry)
  app.get('/csv/locations/:latitude/:longitude', VenueCsv.getLocationByShortestDistance)

  app.get('/csv/location', VenueCsv.getById)
  app.get('/csv/location/:id', VenueCsv.getById)

  app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(400).send('Oops!  Something wrong')
  })
}
