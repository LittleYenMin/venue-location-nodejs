const should = require('should')
const venue = require('../app/models/venue.js')

describe('#Venue', () => {
  it('Calculat the distance from (0,0) to (0, 5)', (done) => {
    const distance = venue.getDistance(0, 0, 0, 5)
    distance.should.equal(5)
    done()
  })

  it('get Latitude and Longitude from string `SRID=4326;POINT(121.308382 24.988572)`', (done) => {
    const point = venue.getLatLongPoint('SRID=4326;POINT(121.308382 24.988572)')
    should.exist(point)
    point[0].should.equal('4326')
    point[1].should.equal('121.308382')
    point[2].should.equal('24.988572')
    done()
  })

  it('Get all locations from DB file', (done) => {
    venue.getCsvDatas()
      .then((locations) => {
        try {
          locations.length.should.equal(391)
          done()
        } catch (e) { done(e) }
      })
  })

  it('Get locations by country `VN`', (done) => {
    venue.getLocationByCountry('VN')
      .then((locations) => {
        try {
          locations.length.should.equal(241)
          done()
        } catch (e) { done(e) }
      })
  })

  it('Get shortest locations by 致理科技大學 (121.4629392, 25.0211034)', (done) => {
    venue.getShortestDistanceByLatAndLong(121.4629392, 25.0211034)
      .then((locations) => {
        try {
          locations.length.should.equal(1)
          locations[0].name.should.equal('新板分行')
          done()
        } catch (e) { done(e) }
      })
  })

  it('Get location by id 0', (done) => {
    venue.getById(0)
      .then((location) => {
        try {
          should.exist(location)
          location.name.should.equal('Chi nhanh NGUYEN VAN TROI')
          done()
        } catch (e) { done(e) }
      })
  })
})
