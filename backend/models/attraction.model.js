var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const AttractionSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  status: { type: String },
  type: { type: String, enum: ["fast", "family", "water"] },
  img: { type: String },
  image: { data: Buffer, contentType: String },
  latitude: { type: Number },
  longitude: { type: Number },
  queueTime: { type: String }
  
});

const Attraction = mongoose.model("attractions", AttractionSchema);

module.exports = Attraction;
