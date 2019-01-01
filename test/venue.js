const should = require('should')
const venue = require('../app/models/venue.js')

describe('#Venue', () => {
  it('Get locations by country `VN`', (done) => {
    venue.getLocationByCountry('VN')
      .then( (locations) => {
        try {
          locations.length.should.equal(241)
          done()
        } catch (e) { done(e) }
      }, done)
  })

  it('Get shortest locations by 致理科技大學 (121.4629392, 25.0211034)', (done) => {
    venue.getShortestDistanceByLatAndLong(121.4629392, 25.0211034)
      .then( (locations) => {
        try {
          locations.length.should.equal(1)
          locations[0].name.should.equal('新板分行')
          done()
        } catch (e) { done(e) }
      })
  })

  it('Get location by id 0', (done) => {
    venue.getById(0)
      .then( (location) => {
        try {
          should.exist(location)
          location.name.should.equal('Chi nhanh NGUYEN VAN TROI')
          done()
        } catch (e) { done(e) }
      })
  })

})
