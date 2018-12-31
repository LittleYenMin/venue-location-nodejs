const fs = require('fs')
const Papa = require('papaparse')

/**
 * set header true to get value with field: value
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

module.exports = {
  getCsvDatas: getCsvDatas
}
