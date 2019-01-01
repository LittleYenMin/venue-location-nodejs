const venue = require('../app/controllers/venue.js')

module.exports = function (app) {
  app.get('/:country/locations', venue.getLocationByCountry)
  app.get('/locations/:latitude/:longitude', venue.getLocationByShortestDistance)

  app.get('/location', venue.getById)
  app.get('/location/:id', venue.getById)

  app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(400).send('Oops!  Something wrong')
  })
}
