const should = require('should')
const venue = require('../app/models/venue.js')

describe('#Venue', () => {
  it('Get Locations by Country `VN`', function (done) {
    venue.getLocationByCountry('VN')
      .then( (datas) => {
        try {
          datas.length.should.equal(241)
          done()
        } catch (e) { done(e) }
      }, done)
  })
})
