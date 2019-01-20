const mongoose = require('mongoose')
mongoose.connect(
  'mongodb://read:darkmagician123@ds117960.mlab.com:17960/pincode'
  // { useNewUrlParser: true }
  // function(err) {
  //   console.error('Error connecting to DB: ',err)
  // }
)
var db = mongoose.connection;
db.on('error', function(err){
  console.log('Error connecting to DB: ', err);
});
db.once('open', function() {
  console.log('Connected to DB');
});

var pincodeSchema = new mongoose.Schema({
  l: String,
  o: String,
  p: String,
  t: String,
  d: String,
  s: String,
})
var Pincode = mongoose.model('Pincode', pincodeSchema)

export function handler(event, context, callback) {
  console.log('queryStringParameters', event.queryStringParameters)
  const { state, city } = event.queryStringParameters
  Pincode.find({ s: state, d: city }, function(err, pincodes) {
    if (err) {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify('server issue'),
      })
    }
    pincodes.forEach(obj => delete obj._id)
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(pincodes),
    })
  })
}
