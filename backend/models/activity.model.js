var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let activityTypes = ['arcade', 'attraction', 'bistro', 'cafe', 'dining', 'family', 'fast', 'game', 'kids', 'lucky', 'restaurant', 'water']

var ActivitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, requiired: true },
  price: { type: Number },
  status: { type: String },
  type: { type: [String], enum: activityTypes, required: true },
  img: { type: String },
  image: { data: Buffer, contentType: String },
  latitude: { type: Number },
  longitude: { type: Number },
  queueTime: { type: String },
  reservableSeats: { type: Number }
});

const Activity = mongoose.model("activities", ActivitySchema);

module.exports = {Activity, activityTypes };