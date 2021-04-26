var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  status: { type: String },
  img: { type: String },
  image: { data: Buffer, contentType: String }
});

const Restaurant = mongoose.model("restaurants", RestaurantSchema);

module.exports = Restaurant;
