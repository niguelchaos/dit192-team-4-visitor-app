var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  status: { type: String },
  img: { type: String },
  image: { data: Buffer, contentType: String }
});

const Game = mongoose.model("games", GameSchema);

module.exports = Game;
