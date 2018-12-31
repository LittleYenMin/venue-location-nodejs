const fs = require('fs')
const Papa = require('papaparse')

/**
 * set header true to get value with field:
 */
function getCsvDatas () {
  return new Promise((resolve, reject) => {
    const file = fs.createReadStream('db.csv')
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        resolve(results.data)
      },
      error: function (error) {
        reject(error)
      }
    })
  })
}

exports.getLocationByCountry = async function (country) {
  const datas = await getCsvDatas()
  return datas.filter(function (val, index, array) {
    return val.country === country
  })
}
