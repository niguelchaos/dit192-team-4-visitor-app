var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AttractionSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    status: { type: String },
    image: { data: Buffer, contentType: String }
});

const Attraction = mongoose.model('attractions', AttractionSchema);

module.exports = Attraction;