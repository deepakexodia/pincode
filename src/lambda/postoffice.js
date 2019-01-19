var fetch = require('node-fetch')

export function handler(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters)
  const { pincode } = event.queryStringParameters
  fetch(`https://pincode.saratchandra.in/api/pincode/${pincode}`)
    .then(resp => {
      const { status } = resp
      if (status == 200 || status == 404) {
        return resp.json()
      } else {
        throw 'server issue'
      }
    })
    .then(json => {
      if (json.status == 200) {
        callback(null, {
          // return null to show no errors
          statusCode: json.status,
          body: JSON.stringify(json.data),
        })
      }
      if (json.status == 404) {
        callback(null, {
          statusCode: json.status,
          body: JSON.stringify(json.message),
        })
      }
    })
    .catch(err => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({ message: err}),
      })
    })
}
