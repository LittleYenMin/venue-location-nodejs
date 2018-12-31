const venue = require('../app/controllers/venue.js')

module.exports = function (app) {
  app.get('/:country/locations', venue.getLocationByCountry)
}
