var fetch = require('node-fetch')

export function handler(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters)
  const { pincode } = event.queryStringParameters
  fetch(`https://pincode.saratchandra.in/api/pincode/${pincode}`)
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
      callback(null, {
        // return null to show no errors
        statusCode: 200, // http status code
        body: JSON.stringify(json.data),
      })
    })
}
