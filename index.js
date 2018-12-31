const express = require('express')
const venue = require('./app/models/venue.js')
const app = express()

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Application listening on PORT ${port}!`))

venue.getCsvDatas().then((results) => {
  console.log(results)
}).catch((err) => {
  console.log('Error occur', err)
})
