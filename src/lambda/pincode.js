var fetch = require('node-fetch')
let API_KEY = '579b464db66ec23bdd000001e9d5256b853f407a64ab0495b3234214'
export function handler(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters)
  const { state, city } = event.queryStringParameters
  let formattedCity = city
    .split(' ')
    .map(word => word.toLowerCase())
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .reduce((acc, current)=> acc+' '+current)
  fetch(
    `https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6?api-key=${API_KEY}&format=json&offset=0&limit=100000&filters[districtname]=${formattedCity}`
  )
    .then(resp => {
      if (resp.status == 200) {
        return resp.json()
      } else {
        throw 'server issue'
      }
    })
    .then(json => {
      let records = json.records
      console.log(records)

      records.sort((a, b) => a.officename.localeCompare(b.officename))
      let filterRecords = records.filter(
        record => record.statename.toLowerCase() === state.toLowerCase()
      )
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(filterRecords),
      })
    })
    .catch(err => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({ message: err }),
      })
    })
}
