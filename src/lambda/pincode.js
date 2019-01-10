var mongoose = require('mongoose');
mongoose.connect('mongodb://deepakexodia:Darkmagician1!@ds117960.mlab.com:17960/pincode');
var pincodeSchema = new mongoose.Schema({
    l: String,
    o: String,
    p: String,
    t: String,
    d: String,
    s: String,
  });
var Pincode = mongoose.model('Pincode', pincodeSchema);
var db = mongoose.connection;
db.on('error', function(){
    console.log("DB is down")
    // callback(null, {
    //     // return null to show no errors
    //     statusCode: 500, // http status code
    //     body: JSON.stringify("server is down"),
    //   })
});
db.once('open', function() {
    console.log("DB is up")
  })  

export function handler(event, context, callback) {
    console.log('queryStringParameters', event.queryStringParameters)
  const { state, city } = event.queryStringParameters
      Pincode.find({"s":state, "d":city},function (err, pincodes) {
        if (err) return console.error(err);
        console.log(pincodes.forEach(obj => delete obj._id));
        callback(null, {
          // return null to show no errors
          statusCode: 200, // http status code
          body: JSON.stringify(pincodes),
        })
      
});
// Pincode.aggregate([{"$group":{"_id":{"s":"$s", "d":"$d"}, "count":{$sum: 1}}}, {$sort:{"_id":1}}], function(err, pincodes){
//   console.log(pincodes)
//   callback(null, {
//     statusCode: 200,
//     // body: JSON.stringify([...new Set(pincodes.map(pincode=> pincode.d))])
//     body: JSON.stringify(pincodes.map(obj=>({s:obj._id.s, d:obj._id.d})))
//   })
// })
    
}
