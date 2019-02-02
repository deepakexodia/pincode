var fetch = require('node-fetch')

export function handler(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters)
  const { state, city } = event.queryStringParameters
  fetch(
    `https://api.mlab.com/api/1/databases/pincode/collections/pincodes?q={ "s": "${state}", "d": "${city}" }&apiKey=J5tfdY_bncWORB5646HBqwysxCMgYDGl`
  )
    .then(resp => {
      if (resp.status == 200) {
        return resp.json()
      } else {
        throw 'server issue'
      }
    })
    .then(json => {
      console.log(json)
      json.forEach(obj => delete obj._id)
      json.sort((a,b)=> a.l.localeCompare(b.l))
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(json),
      })
    })
    .catch(err => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({ message: err }),
      })
    })
}
